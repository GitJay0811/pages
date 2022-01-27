## 重點
---
> nodelist 轉陣列
#### `Array.from` : 因為要做`.slice`，所以需要`nodelist`轉陣列才能使用<br></br>
> 比較大小
#### `Math.min` : 取出小的。
#### `Math.max` : 取出大的。
```
checkBoxs.slice(
    Math.min(lastCheck,nowCheck),
    Math.max(lastCheck,nowCheck)
    ).forEach((box)=>{
        box.checked = true;
    })
```                    
