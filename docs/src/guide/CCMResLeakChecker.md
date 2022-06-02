# CCMResLeakChecker

## 概述

`CCMResLeakChecker` 为内存泄露检查工具，支持追踪某种特定资源的所有`addRef`和`decRef`的堆栈，需要与`CCMResLoader`结合使用，主要支持以下接口

* startCheck 开始检查
* stopCheck 结束检查
* reset 重置（清空收集到的堆栈）
* getTraceAssets 获取跟踪到的堆栈信息
* dump 在控制台dump堆栈信息

资源过滤，通过设置`CCMResLeakChecker`实例的`resFilter`属性，可以判断传入的资源是否需要进行内存泄露检查，`resFilter`的函数原型如下

```ts
export type FilterCallback = (asset: cc.Asset) => boolean;
```

## 使用

初始化`CCMResLeakChecker`，设置到`CCMResLoader.resLeakChecker`中，在准备开始检查的时候调用`startCheck`，然后正常地加载资源，调用`addRef`和`decRef`使用资源

```ts
        let checker = new CCMResLeakChecker();
        checker.startCheck();
        CCMResLoader.resLeakChecker = checker;
```

追踪到的资源堆栈信息可以直接dump，在控制台输出

```ts
        CCMResLoader.resLeakChecker.dump();
```
