# CCMFitWidget

## 概述
市面上存在各种尺寸、比例的设备，为了让cocos制作的界面在各种规格的屏幕上都有比较合理的展现，往往需要做一些适配，`CCMFitWidget`的目的就是简化这种适配工作。
<br/>
<br/>

## 属性
<br/>

### **FitType**
<br/>

适配模式定义。
|模式|描述|
|-|-|
|FitInParent|嵌入父窗口，父窗口边缘会留白|
|EnvelopeParent|铺满父窗口，节点边缘会裁剪|
|FitWidth|匹配父窗口宽|
|FitHeight|匹配父窗口高|
<br/>

### **fitType**
<br/>

当前选用的适配模式。
<br/>
<br/>

### **useCustomArea**
<br/>

使用自定义适配区域。`CCMFitWidget`的适配默认是将节点与父节点的尺寸做比较来决定缩放比，也可以自定义一个用来与父窗口做比较的尺寸，使适配更加灵活。
<br/>
<br/>

### **area**
<br/>
自定义的适配尺寸。
<br/>
<br/>

### **debugDrawArea**
<br/>
绘制自定义区域的边框，用于调试。