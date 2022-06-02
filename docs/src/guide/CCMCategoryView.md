# CCMCategoryView

## 概述

分类视图组件，相对复杂的宫格组件，比较常用，还可以和 `CCMPicker` 组合使用。

## 使用样例


```typescript

@property({ type: CCMCategoryView })
private categoryView: CCMCategoryView = null;

...

this.categoryView.setAdapter({
    dataSource: [
        {
            category: 'mathematics',
            items: [ xxx, xxx ]
        }, {
            category: 'physics',
            items: [ xxx, xxx ]
        }, {
            category: 'chemistry',
            items: [xxx, xxx ]
        }
    ],
    onFocus: (index: number) => {
        console.log('focus category index: ' + index);
    },
    bindView: (node: cc.Node, data: any, type: ItemType, index: number) => {
        // bind item view
    }
})

```

## 属性说明

|属性|必需|说明|
|-|-|-|
|content|是|元素的父节点|
|itemPrefab|是|子元素预制|
|categoryPrefab|是|分类标题预制|
|headerPrefab|否|头部视图预制|
|spacingX|否|元素横向间隔|
|spacingY|否|元素纵向间隔|
|paddingTop|否|组件上方留白|
|paddingBottom|否|组件下方留白|
|paddingLeft|否|组件左边留白，为了让视图适配多种屏幕，最终会与<br/>paddingRight 求和算出平均值 paddingHorizontal |
|paddingRight|否|组件右边留白，为了让视图适配多种屏幕，最终会与<br/>paddingLeft 求和算出平均值 paddingHorizontal |
|container|否|某些特殊情况下，还要给元素每一行加一个背景<br/>如图书馆的书架，container 作为背景列表的容器|
|containerPrefab|否|某些特殊情况下，每行元素背景预制|