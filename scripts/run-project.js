import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";

// 取得 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 取得 npm 傳入的專案編號，例如 "01-04"
const project = process.argv[2];

if (!project) {
    console.error("❌ 請提供專案編號，例如 'npm run start 01-04'");
    process.exit(1);
}

// 設定專案路徑
const projectPath = path.resolve(__dirname, `../src/${project}`);
const indexFile = path.join(projectPath, "index.html");

// 確保專案目錄存在
if (!fs.existsSync(projectPath)) {
    console.error(`❌ 找不到專案目錄：${projectPath}`);
    process.exit(1);
}

// 確保 index.html 存在
if (!fs.existsSync(indexFile)) {
    console.error(`❌ 找不到 index.html，請確認 ${indexFile} 是否存在！`);
    process.exit(1);
}

// 顯示 Vite 啟動資訊
console.log(`🚀 啟動 Vite，專案根目錄：${projectPath}`);
console.log(`🔍 執行指令: cd "${projectPath}" && npx vite --port 5173 --open --host`);

// 執行 Vite，並確保它在正確的目錄內運行
exec(`cd "${projectPath}" && npx vite --port 5173 --open --host`, { stdio: "inherit", shell: true });