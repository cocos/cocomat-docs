# CCMUtils

## 概述

`CCMUtils` 提供一些可以提高开发效率的方法，让常见功能的实现一步可达。

## 使用

### 1. `isQuickClick`

判断用户是否重复点击，拦截一定时间内（默认 500ms）的后续点击。可以自定义 tag 来限定本地判断的类型，和拦截时常。

```typescript

CCMUtils.isQuickClick();

// config tag and duration
CCMUtils.isQuickClick('tag', 1000);
```

### 2. `isPadScreen`

判断是否是 pad 类型的屏幕大小，主要可以用于 pad 类型屏幕适配时的判断。但不可用于判断 pad 设备。

```typescript
CCMUtils.isPadScreen();
```

### 3. `isWxGame`、`isAndroid`、`isIOS`、`isBrowser`

判断当前平台，一目了然，无需记忆相关平台的字符。

```typescript
// is weixin mini game
CCMUtils.isWxGame();
CCMUtils.isAndroid();
CCMUtils.isIOS();
CCMUtils.isBrowser();
```

### 4. `key4property`

快速获取某个数据对象中深层 key 的值。

```typescript
let data = {
    a: {
        b: {
            c: {
                d: 'value'
            }
        }
    }
};
CCMUtils.key4property(data, 'a#b#c#d');
```