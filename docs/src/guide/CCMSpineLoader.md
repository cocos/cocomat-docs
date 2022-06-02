# CCMSpineLoader
> experiment 实验性功能
## 概述：

**CCMSpineLoader** 骨骼动画加载类，动态加载项目中或者远程骨骼动画,也可以通过通用的Loader类来加载不同的资源（如图片，动画）

* 可超时设置
* 可加载本地资源和远程资源
* 可绑定component 生命周期。

方法： 动画加载

```typescript
/**
 * 请求下载网络Spine动画(zip压缩)/或者本地Spine动画(resources 下不压缩)  返回SkeletonData信息
 * @param url
 * @param options 选项 timeout 超时时间（秒）,
 *                    target 依赖的组件cc.Component，若组件已经被销毁，则会返回已销毁异常，需要catch          
 */
loadSpine(url: string, options?: SpineLoaderOptions): Promise<sp.SkeletonData>;
```

## 使用样例

* 加载本地Spine动画

```typescript
import { Log ,Loader} from '../cocomat-lib/ccm';
Loader.loadSpine('spine/spineboy/spineboy').then(skeletonData => {
    if (skeletonData) {
        Log.d(TAG, 'set the skeletonData');
        this.spineSkeleton.skeletonData = skeletonData;
        this.spineSkeleton.setAnimation(0,'run',true);
    } else {
        Log.d(TAG, 'the skeletonData is null');
    }
}).catch((errmsg) => {
    Log.d(TAG, 'load error:' + errmsg);
});
```

* 加载远程Spine,并设置超时

```typescript
import { Log ,Loader} from '../cocomat-lib/ccm';
Loader.loadSpine('https://wzpan-1253537070.cos.ap-guangzhou.myqcloud.com/misc/spineboy.zip',{timeout: 10}).then(skeletonData => {
    if (skeletonData) {
        Log.d(TAG, 'set the skeletonData');
        this.spineSkeleton.skeletonData = skeletonData;
        this.spineSkeleton.setAnimation(0,'shoot',true);
    } else {
        Log.d(TAG, 'the skeletonData is null');
    }
}).catch((errmsg) => {
    Log.d(TAG, 'load error:' + errmsg);
});
```



