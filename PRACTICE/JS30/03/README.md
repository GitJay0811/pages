## 重點
---
#### 1. `data-`的屬性，要用`dataset`來取值。
#### 2. `:root`,`html`,`documentElement` 三個是一樣的。
#### 3. css變數使用:
```
//宣告方式 
:root{
    --base: #ffc600;
}
//使用方式
img{
    background-color: var(--base);
}
```
#### 4. JS變更css變數時，要用`style.setProperty`，用中括號會無效。
#### 5. 通常`input`都會用到`change`事件。
