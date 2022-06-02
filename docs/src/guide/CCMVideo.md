# CCMVideo

## 概述

无层级视频组件

## 使用样例

播放本地视频

```typescript
this.video.clip = cc.url.raw('resources/xxx.mp4');
this.video.play();
```

播放网络视频

```typescript
this.video.clip = 'http(s)://host/xxx.mp4';
this.video.play();
```

## 属性

|属性|描述|
|-|-|
|clip|视频资源，网络资源请使用字符串赋值<br/>本地资源请使用 cc.url.raw(xxx) 赋值|
|loop|循环播放选项|
|duration|获取视频时长，仅可在 `LOADED` 事件后获取|
|currentTime|get: 获取当前位置<br/>set: 跳转到指定位置|

## 事件监听

```
private onVideoEvent(sender, event) {
    switch (event) {
        case EventType.LOADED:
            console.log(TAG, 'loaded');
            break;
        case EventType.READY:
            console.log(TAG, 'ready');
            break;
        case EventType.PLAYING:
            console.log(TAG, 'play');
            break;
        case EventType.PAUSED:
            console.log(TAG, 'paused');
            break;
        case EventType.STOPPED:
            console.log(TAG, 'stopped');
            break;
        case EventType.COMPLETED:
            console.log(TAG, 'completed');
            break;
        case EventType.ERROR:
            console.log(TAG, 'error');
            break;
    }
}
```

|事件|描述|
|-|-|
|LOADED|视频信息加载完成|
|READY|准备就绪可以播放|
|COMPLETED|播放完成|
|ERROR|播放异常|
|PLAYING|正在播放，播放开始仅触发一次|
|PAUSED|已暂停|
|STOPPED|已停止播放|
|BUFFER_START|缓冲开始，仅原生端有效|
|BUFFER_UPDATE|缓冲进度更新，仅原生端有效|
|BUFFER_END|缓冲完成，仅原生端有效|

## 特性

- 无层级限制
- 移动端边下边播
- 移动端 YUV 渲染
- 支持高帧率(60fps)，高分辨率(1080p)资源播放
- iOS 硬解默认启用
