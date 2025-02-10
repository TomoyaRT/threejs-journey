# 🏃 Three.js Journey - 專案啟動手冊

歡迎來到 **Three.js Journey**！🎨  
這是一個基於 **Vite** 的開發伺服器，讓你可以 **快速切換並運行不同的 Three.js 專案**，無需手動調整 `index.html` 或修改路徑。🚀

## 🚀 如何啟動專案

在終端機輸入以下指令，來啟動你想運行的 Three.js 專案：

| 🏗 專案名稱 | 🚀 啟動指令 |
|------------|----------------------|
| **01-03**  | `npm run start 01-03` |
| **01-04**  | `npm run start 01-04` |

當你執行：
```sh
npm run start 01-04
```

這將會：
1. 確認 src/01-04/ 目錄是否存在
2. 檢查 src/01-04/index.html 是否存在
3. 啟動 Vite 伺服器
4. 自動開啟瀏覽器，載入 http://localhost:5173/

### 成功啟動後，終端機應該會顯示：
```sh
> threejs-journey@0.0.0 start
> node scripts/run-project.js 01-04

🚀 啟動 Vite，專案根目錄：/Users/tomoya/Desktop/threejs-journey/src/01-04
🔍 執行指令: cd "/Users/tomoya/Desktop/threejs-journey/src/01-04" && npx vite --port 5173 --open --host
```