# CCMSceneManager

## 概述

`CCMSceneManager` 主要是受 Android Activity 启动模式启发，将其启动模式复刻到了 CocosCreator。`CCMSceneManager` 将原来无序的场景启动和返回，放到栈中进行管理，让返回场景、特殊的启动场景变得简单。并提供了场景间传递数据的功能，否则开发者需要通过全局变量或者挂载永久节点的方式来实现。

## 使用

`CCMSceneManager` 主要提供了 `startScene`、`backScene` 两个 api 调用。简单理解就是 startScene 启动场景，backScene 返回界面，并且可以通过这两个方法在场景间传递数据。

### 启动场景 `CCMSceneManager.getInstance().startScene()`

#### 使用示例

```typescript
// start scene
CCMSceneManager.getInstance().startScene('sceneName');

// start scene with data
CCMSceneManager.getInstance().startScene('sceneName', "yourData");

// start scene with startMode, default is STANDARD
// standard mode
CCMSceneManager.getInstance().startScene('sceneName', "yourData", StartSceneMode.STANDARD);
// single top mode
CCMSceneManager.getInstance().startScene('sceneName', "yourData", StartSceneMode.SINGLE_TOP);
```

#### 详解

`startScene` 其实就是使用了 `cc.director.loadScene` 方法来加载场景。在其中处理了场景栈的操作和数据的保存。

数据传递较为简单，在 `startScene` 参数中传递 data 选项即可。

值得说的是 `startScene` 的启动模式，这里借鉴了 Android Activity 的几个启动模式：标准模式、清栈模式、栈顶模式、临时场景。

1. `StartSceneMode.STANDARD` 标准模式：默认为此模式，此模式下，`startScene` 会执行场景压栈操作记录下来，`backScene` 时可以直接读取栈中信息，开发者无需了解上一个场景是谁即可实现场景的返回逻辑；
2. `StartSceneMode.CLEAR_STACK` 清栈模式：即清空当前栈中所有场景，然后将指定场景入栈。通常在启动 home 这种根界面的情况下使用此模式；
3. `StartSceneMode.TEMPORARY` 临时场景：当希望启动一个不希望被栈记录的场景时使用此模式。比如当启动场景顺序为 A——>B——>C，但是返回时希望 C——>A，忽略 B 场景，此时启动时对 B 使用临时场景模式即可；
4. `StartSceneMode.SINGLE_TOP` 栈顶模式：当压栈时，如果栈中已有此场景，则先将其出栈。当希望栈中一种场景只有一个存在时使用此模式，此模式应用场景较少。

### 返回上一场景 `CCMSceneManager.getInstance().backScene()`

#### 使用示例

```typescript
// back scene
CCMSceneManager.getInstance().backScene();

// back scene with data
CCMSceneManager.getInstance().backScene("yourData");

// listen scene loaded callback
CCMSceneManager.getInstance().backScene("yourData", () => {
    // scene loaded callback
});
```

#### 详解

和 `startScene` 类似，`backScene` 也是使用了 `cc.director.loadScene` 方法来加载场景。并在其中处理了场景栈的操作和数据的传递。

和 `startScene` 不同，`backScene` 需要查找场景栈，了解自己需要返回哪个场景，并处理临时场景的逻辑。

### 场景间传递数据

#### 使用示例

```typescript
// pass data
CCMSceneManager.getInstance().startScene('sceneName', 'yourData');

// get data
let sceneData = CCMSceneManager.getInstance().getSceneData();
```