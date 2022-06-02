# CCMCapture

## 概述

`CCMCapture` 用来对指定节点进行截图。参考了官方示例项目的实现，统一了接口，修复了截图尺寸变小、半透明截图问题。

## 使用样例

节点截图返回 `cc.SpriteFrame`

```typescript
const spriteFrame = CCMCapture.Instance.captureNodeToSpriteFrame(this.sourceNode);
this.displayNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
```

