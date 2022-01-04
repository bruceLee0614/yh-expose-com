import React, { useEffect, useRef } from 'react'

interface ComExposeProps {
    children: any
    readonly always?: boolean // 是否一直有效
    // 曝光时的回调，若不存在always，则只执行一次
    onExpose?: (dom: HTMLElement) => void
    // 曝光后又隐藏的回调，若不存在always，则只执行一次
    onHide?: (dom: HTMLElement) => void
    observerOptions?: any // IntersectionObserver相关的配置
}

/**
 * 监听元素的曝光
 * @param {ComExposeProps} props 要监听的元素和回调
 * @returns {JSX.Element}
 */
const ComExpose = (props: ComExposeProps): JSX.Element => {
    const ref = useRef<any>(null)
    const curExpose = useRef(false)
    useEffect(() => {
        //todo
        if (ref.current && window.IntersectionObserver) {
            const target = ref.current
            // 配置参数
            const observerOptions = props?.observerOptions || {
                threshold: [0, 0.5, 1],
            }
            // 回调参数
            const intersectionCallback = (
                entries: IntersectionObserverEntry[]
            ) => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    if (
                        entry.intersectionRatio >= observerOptions.threshold[1]
                    ) {
                        if (!curExpose.current) {
                            props?.onExpose?.(target)
                        }
                        curExpose.current = true
                        if (
                            !props?.always &&
                            typeof props?.onHide !== 'function'
                        ) {
                            // 当always属性为加，且没有onHide方式时
                            // 则在执行一次曝光后，移动监听
                            io.unobserve(target)
                        }
                    }
                } else if (
                    typeof props?.onHide === 'function' &&
                    curExpose.current
                ) {
                    props.onHide(target)
                    curExpose.current = false
                    if (!props?.always) {
                        io.unobserve(target)
                    }
                }
            }
            const io = new IntersectionObserver(
                intersectionCallback,
                observerOptions
            )
            io.observe(target)
            return () => {
                io.unobserve(target)
            }
        } else {
            return () => {}
        }
    }, [ref])
    // 当组件的个数大于等于2，或组件使用fragment标签包裹时
    // 则创建一个新的div用来挂在ref属性
    if (
        React.Children.count(props.children) >= 2 ||
        props.children.type.toString() === 'Symbol(react.fragment)'
    ) {
        return <div ref={ref}>{props.children}</div>
    }
    // 为该组件挂在ref属性
    return React.cloneElement(props.children, { ref })
}
export default ComExpose
