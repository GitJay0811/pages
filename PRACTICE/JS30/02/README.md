## 重點
-----
#### 1. 三種計時器
- `setInterval` : 設定間格，持續執行。
- `setTimeout` : 設定延遲，執行一次(如果要持續必須呼叫自己)。
- `window.requestAnimationFrame` : 處理畫面更新的`setTimeout`，畫面硬體更新觸發(如果要持續必須呼叫自己)。
#### 2. 用`new Date()`取時間日期物件。
#### 3. IIFE前加分號，避免跟其它Code混合(像是jQuery等)。