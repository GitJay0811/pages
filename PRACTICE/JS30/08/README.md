## 重點
---
> 使用4個事件
#### 1. `mousedown` 、 `mousemove` 、`mouseup` 、 `mouseleave`。<br></br>

> Canvas內建屬性
#### 1. `ctx.strokeStyle` : 定義繪畫的顏色。
#### 2. `ctx.lineWidth` : 定義寬度。
#### 3. `ctx.lineCap` : 定義結束端點樣式。
#### 4. `ctx.lineJoin` : 定義線轉彎處弧度。<br></br>

> 定義繪畫內容
#### 1. `ctx.beginPath()` : 當作繪畫啟動。
#### 2. `ctx.beginPath()` : 開始一條路徑，或重置當前路徑。
#### 3. `ctx.moveTo(a,b)` : 當作起始位置。
#### 4. `ctx.lineTo(a,b)` : 當作終點位置。
#### 5. `ctx.stroke()` : 代表繪製以定義的路徑。<br></br>

> hsl色彩表示方式 hsl(hue, Saturation, Lightness)
##### hue : 顏色的度數0-360，0是紅色 ，120是綠色，240是藍色；
##### Saturation : 飽和度、灰階程度，0%為灰黑，100%為彩色，一般設置為100%。
##### Lightness : 亮度，0%代表黑，100%代表白，一般設置為50%。<br></br>

> 更新座標
#### `[e.offsetX, e.offsetY]` : 回傳事件的當前座標。