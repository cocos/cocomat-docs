# CCMAudioManager

## 概述

`CCMAudioManager` 用来播放本地和远程音频文件。`CCMAudioMananger`将音频文件分为三种类型：BGM(当前场景唯一，用来播放循环的背景音乐)、Music(长音频，通常用来播放人声)、Effect(短音效，可叠加播放)。

播放接口可以接受 `string` 类型的 `url` 或直接传入 `cc.AudioClip`。`CCMAudioMananger` 会根据前缀自动判断 `url` 是本地还是远程资源。

## 使用样例

播放远程音乐

```typescript
playRemoteMusic() {
    const url = 'https://raw.githubusercontent.com/CreateJS/SoundJS/master/examples/Game/sounds/music.mp3';
    CCMAudioManager.Instance.playMusic(url, {
        onComplete: () => { // 播放完成
            Log.d(TAG, 'remote music on complete');
        },
        onStop: () => { // 手动停止
            Log.d(TAG, 'remote music on stop');
        },
        onError: (err: Error) => { // 播放错误
            Log.e(TAG, err);
        },
        onEnd: () => { // 正常播放完成,播放错误或手动停止都会调用
            Log.d(TAG, 'remote music on end');
        }
    })
}
```

播放本地音效

```typescript
playLocalEffect() {
    const res = 'audios/sfxBoing.mp3';
    CCMAudioManager.Instance.playEffect(res);
}
```

播放BGM

```typescript
playBGM() {
    const res = 'audios/bgmDance.mp3';
    CCMAudioManager.Instance.playBGM(res);
}
```

停止所有

```typescript
stopAll() {
    CCMAudioManager.Instance.stopAll();
}
```
