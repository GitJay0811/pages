## 重點
---
> 把 console 包起來
##### 這樣就不用一行一行註解掉了
```
let console = {
            isDev: true,
            log(...args) {
                if (!this.isDev) return;
                window.console.log(...args);
            },
            warn(...args) {
                if (!this.isDev) return;
                window.console.warn(...args);
            },
            error(...args) {
                if (!this.isDev) return;
                window.console.error(...args);
            },
            info(...args) {
                if (!this.isDev) return;
                window.console.info(...args);
            },
            assert(...args) {
                if (!this.isDev) return;
                window.console.assert(...args);
            },
            dir(...args) {
                if (!this.isDev) return;
                window.console.dir(...args);
            }
        }
```
