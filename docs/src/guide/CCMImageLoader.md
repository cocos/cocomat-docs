# CCMImageLoader
> experiment 实验性功能
## 概述：

**CCMImageLoader** 图片加载类，动态加载项目中或者远程图片。

* 可超时设置
* 三级缓存（内存缓存，文件缓存，网络缓存）
* 可加载本地资源和远程资源
* 可绑定component 生命周期。

方法： 图片下载

```typescript
/**
 * 请求下载网络图片/或者本地图片 返回纹理信息
 * @param url
 * @param options 选项 timeout 超时时间（秒）,
 *                    target 依赖的组件cc.Component，若组件已经被销毁，则会返回已销毁异常，需要catch
 *                    autoRelease 资源是否随场景自动释放 默认true
 */
loadImg(url: string, options?: ImageLoaderOptions): Promise<Texture2D>;
```

## 使用样例

* 加载本地图片

```typescript
this.imageLoader.loadImg('images/title').then(r => {
    if (r) {
        Log.d(TAG, 'set the texture');
        this.imageSprite.spriteFrame = new SpriteFrame(r);
    } else {
        Log.d(TAG, 'the texture is null');
    }
}).catch((errmsg) => {
    Log.d(TAG, 'load error' + errmsg);
});
```

* 加载远程图片

```typescript
import { ImageLoader } from '../cocomat-lib/ccm';
this.imageLoader = new ImageLoader();
this.imageLoader.loadImg('https://images.pexels.com/photos/282920/pexels-photo-282920.jpeg', {timeout: 10}).then(texture => {
            if (texture) {
                Log.d(TAG, 'set the texture');
                this.imageSprite.spriteFrame = new SpriteFrame(texture);
            } else {
                Log.d(TAG, 'the texture is null');
            }

        }).catch((errmsg) => {
            Log.d(TAG, 'load error' + errmsg);
        });

```

* 使用缓存图片(若存在,不存在则下载远程图片,常用于小图，需要复用的场景)

```typescript
this.imageLoader.loadImg('https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg', {
    timeout: 6,
    target: this,
    autoRelease: false
}).then(texture => {
    if (texture) {
        Log.d(TAG, 'set the texture');
        this.imageSprite.spriteFrame = new SpriteFrame(texture);
    } else {
        Log.d(TAG, 'the texture is null');
    }
}).catch((errmsg) => {
    Log.d(TAG, 'load error:' + errmsg);
});

```