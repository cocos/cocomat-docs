# CCMBackBtn

## 概述

`CCMBackBtn` 是一款 UI 组件，可以方便的添加返回按钮。

## 使用

你可以直接调用 `showOnLeftTop()` 方法令其展示在屏幕左上角的位置，并设置其点击事件。也可以调用 `show()` 方法设置其在屏幕中的具体位置。

```typescript
// add back btn to left-top
CCMBackBtn.showOnLeftTop(() => {
    // handle click callback event
});

// config back btn position
CCMBackBtn.show(100, 100, () => {
    // handle click callback event
});
```