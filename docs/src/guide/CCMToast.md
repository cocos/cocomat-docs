# CCMToast

## 概述

`CCMToast` 是一款 UI 组件，类似于 `Android Toast`。通过在顶部弹出一行文字的方式，告知用户相关信息。

## 使用

### 展示 Toast `CCMToast.show()`

直接调用 `CCMToast.show('msg')` 即可展示 Toast。可加上可选参数控制 Toast 的展示时长（默认为 2s）、图标、是否置顶。比如你还可以按照以下方式调用：

```typescript
// set toast duration to 3s
CCMToast.show('msg', 3);

// set toast icon
CCMToast.show('msg', 3, 'icon/path');
```