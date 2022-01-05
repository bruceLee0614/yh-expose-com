# react曝光组件

### 业务使用场景

+ 滑动元素移到视口中曝光（例如每个推荐商品的曝光）
+ 可以抛出元素，将要滑到视口中函数钩子。

### 安装

``` bash
npm install yh-compose-com
```

### 使用说明

``` jsx
import ComExpose from 'yh-expose-com'

const Index = () => {
  const onExposUl =() =>{
    console.log("AA曝光了，出现在视口中")
  } 
  const onHideUl =() =>{
   console.log("AA移除在视口中")
  } 
  const onExposLi =(item) =>{
    console.log(item,"曝光了，出现在视口中")
  } 
  const onHideLi =(item) =>{
   console.log(item, "BB移除在视口中")
  } 
  return (
    <div>
    	....
			{/* ul整体的曝光和移除*/}
       	<ComExpose onExpose={onExposUl} always onHide={onHideUl}>
         	<ul>
            {
              [1,2,3,4,5].map(item => 
                 <ComExpose onExpose={() => {onExposLi(item)}} always onHide={() => {onHideLi(item)}} key={item}>
                    {/* 每个li曝光和移除*/}
          					<li>{item}</li>
                 </ComExpose>  
               )
            }
          
          </ul>
          
      	</ComExpose>  	
				
         	<div>曝光元素BBBBB</div>
			....
    </div>
  )
}

```



### 属性介绍

+  children ：要传入一个dom节点

+  readonly always?: boolean // 是否一直有效 

+  onExpose?: (dom: HTMLElement) => void// 曝光时的回调，若不存在always，则只执行一次

+  onHide?: (dom: HTMLElement) => void // 曝光后又隐藏的回调，若不存在always，则只执行一次

+  observerOptions?: any // IntersectionObserver相关的配置  

  + 默认：IntersectionObserver={threshold:[0,0.5,1]} 
    + 0：children元素，距离视口0，调用onExpose；
    + 0.5：children元素，进入视口一半，调用onExpose；
    + 1：children元素，全部进入视口，调用onExpose；

  

  

  

  # 代码地址：https://github.com/bruceLee0614/yh-expose-com.git

  ​    

     

  ​    

  

     