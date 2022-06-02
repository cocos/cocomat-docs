# CCMResLoader

## 概述

`CCMResLoader` 封装资源的加载和卸载接口，同时避免老资源底层可能存在的资源依赖释放相关的问题，适配新老资源底层。

> 为cc.Asset注入了addRef和decRef的功能，使得2.4.x之前的版本也可以使用引用计数，与新的资源底层保持一致的使用习惯

## 使用

资源加载，将cc.loader.loadRes和load替换成了CCMResLoader.load

```typescript
        // 老的资源加载
        cc.loader.loadRes("testres/testPrefab2", cc.Prefab, (error: Error, prefab: cc.Prefab) => {
            if (!error) {
                cc.instantiate(prefab).parent = this.attachNode;
            }
        });

        // 新的资源加载
        CCMResLoader.load("testres/testPrefab2", (error: Error, prefab: cc.Prefab) => {
            if (!error) {
                cc.instantiate(prefab).parent = this.attachNode;
            }
        });
```

资源释放，将cc.loader.releaseRes和load替换成了CCMResLoader.release

```typescript
        // 老的资源释放
        cc.loader.releaseRes("testres/testPrefab2");

        // 新的资源释放
        CCMResLoader.release(asset);
```
