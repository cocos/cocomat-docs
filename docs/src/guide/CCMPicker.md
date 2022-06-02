# CCMPicker

## 概述

选择器组件，比较常用，继承`cc.ScrollView`，实现自动定位到某个选项的功能。

## 使用样例


```typescript

@property({ type: CCMPicker })
private picker: CCMPicker = null;

...

this.picker.setAdapter({
    dataSource: ['mathematics', 'physics', 'chemistry'],
    onPick: (index: number) => {
        console.log('pick index: ' + index);
    },
    bindView: (node: cc.Node, data: any, index: number) => {
        // bind item view
    }
})

```

## 属性说明

|属性|说明|
|-|-|
|itemPrefab|选项预制|
