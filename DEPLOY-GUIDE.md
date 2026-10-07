# 點樣將 portfolio 放上 GitHub Pages

網站最後會喺呢度：**https://jacky-benkyo.github.io**

成個過程大約 15 分鐘，第一次做先要咁多步，之後更新只係 push 一下。

---

## 0. 準備

| 要乜 | 點解 | 下載 |
|---|---|---|
| GitHub 帳戶 `jacky-benkyo` 嘅密碼 | 開 repo、授權 push | — |
| **Git for Windows** | 上載 code，會順便裝埋 Git Credential Manager，等你用 browser login | https://git-scm.com/download/win |
| Node.js 20 或以上（可以唔裝） | 只係用嚟喺自己部機 preview，deploy 唔使 | https://nodejs.org |

裝 Git 嗰陣全部揀預設就得。

---

## 1. Login GitHub（網頁）

1. 打開 https://github.com/login
2. Username 填 `jacky-benkyo`（或者 email `jackychow.benkyo@gmail.com`），再填密碼。
3. **唔記得密碼**：撳 *Forgot password?*，輸入 `jackychow.benkyo@gmail.com`，跟住 email 入面嘅 link 重設。
4. 如果開咗 2FA，就輸入 Authenticator app 嘅 6 位數字，或者 SMS code。
5. Login 之後，右上角頭像應該顯示 **jacky-benkyo**。如果顯示第二個帳戶，撳頭像 → *Sign out*，再重新 login。

> 兩步驗證開唔到，或者手機唔喺身邊：可以用開 2FA 時儲低嘅 recovery code。

---

## 2. 開一個新 repo

1. 打開 https://github.com/new
2. **Owner**：`jacky-benkyo`
3. **Repository name**：`jacky-benkyo.github.io`（一個字都唔可以錯，全細楷）
4. 揀 **Public**
5. **唔好**剔 *Add a README*、*.gitignore* 或者 *license*，個 repo 一定要係空嘅。
6. 撳 **Create repository**

---

## 3. 設定 Git 用邊個名

喺 project folder（`C:\xampp\htdocs\jackychow`）撳右鍵 → **Open Git Bash here**，然後輸入：

```bash
git init -b main
git config user.name "Jacky Chow"
git config user.email "jackychow.benkyo@gmail.com"
```

> 呢度**冇用 `--global`**，所以只會影響呢個 project，部電腦其他 project 照用原本主人嘅名。
> Email 要同 GitHub 帳戶登記嗰個一樣，commit 先會顯示係 jacky-benkyo 做嘅。

---

## 4. Push 上 GitHub

喺同一個 Git Bash 視窗逐行輸入：

```bash
git add .
git commit -m "Initial portfolio site"
git remote add origin https://jacky-benkyo@github.com/jacky-benkyo/jacky-benkyo.github.io.git
git push -u origin main
```

> 留意網址入面嘅 `jacky-benkyo@`：佢會叫 Git 用 jacky-benkyo 呢個帳戶。如果部電腦已經 login 咗第二個 GitHub 帳戶，咁做就唔會撞，亦唔使刪除第二個帳戶嘅登入資料。

**第一次 push 會彈出 login 視窗**（Git Credential Manager）：

1. 揀 **Sign in with your browser**
2. Browser 會打開 GitHub。**確認右上角係 jacky-benkyo**；唔係嘅話，先 sign out，再用 `jackychow.benkyo@gmail.com` login。
3. 撳 **Authorize git-ecosystem**
4. 返去 Git Bash，見到 `main -> main` 就即係成功。

> ⚠️ Git **唔接受**直接輸入 GitHub 密碼。一定要經 browser 授權，或者用 Personal Access Token（見第 7 點）。

---

## 5. 開啟 GitHub Pages

1. 去 https://github.com/jacky-benkyo/jacky-benkyo.github.io/settings/pages
2. **Build and deployment → Source** 揀 **GitHub Actions**
3. 去 repo 嘅 **Actions** tab，會見到 *Deploy to GitHub Pages* 喺度行緊。
   - 未開始行：撳入去 → **Run workflow**
4. 等 1 至 2 分鐘，見到綠色 ✓ 就得。

---

## 6. 檢查

打開 **https://jacky-benkyo.github.io**。

第一次可能要等幾分鐘先出到。見到 404 的話，等 5 分鐘再 refresh（用 Ctrl + F5）。

---

## 7. 出問題點算

| 情況 | 解決方法 |
|---|---|
| `Permission denied` 或者 `403`，或者訊息出現**第二個人嘅 username** | Git 用咗部電腦記住嘅第二個帳戶。先用 `git remote -v` 檢查網址有冇 `jacky-benkyo@`，冇嘅話用 `git remote set-url origin https://jacky-benkyo@github.com/jacky-benkyo/jacky-benkyo.github.io.git` 改返。仍然唔得，就開 Windows **控制台 → 認證管理員 (Credential Manager) → Windows 認證**，刪除 `git:https://jacky-benkyo@github.com`，再 `git push` 一次，然後用 jacky-benkyo login。 |
| `repository not found` | Repo 個名或者 owner 打錯，回去第 2 步核對。 |
| `failed to push some refs` / `rejected` | 開 repo 時剔咗 README。最簡單係刪咗個 repo（Settings → 最底 *Delete this repository*），再跟第 2 步重開一個空嘅。 |
| 冇彈 browser login 視窗 | 改用 Token：GitHub *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate*。Repository 揀 `jacky-benkyo.github.io`，Permissions 將 **Contents** 設做 *Read and write*。之後 push 時要求輸入密碼，就貼呢個 token。 |
| Actions 紅色 ✗ | 撳入去睇 log；通常係 Pages Source 未揀 *GitHub Actions*（第 5 步）。改好之後撳 **Re-run jobs**。 |

**唔鍾意打 command：** 可以裝 **GitHub Desktop**（https://desktop.github.com），login 後揀 *File → Add local repository*，揀呢個 folder，再撳 *Publish repository*。Repo 名記得填 `jacky-benkyo.github.io`，同埋**唔好**剔 *Keep this code private*。

---

## 8. 之後點更新網站

1. 改內容：幾乎所有文字都喺 `src/data/profile.ts`；相片放喺 `public/images/`；CV 係 `public/Jacky-Chow-Resume-EN.pdf`。
2. 想先睇效果（要裝咗 Node.js）：

   ```bash
   npm install
   npm run dev
   ```
   打開 http://localhost:4321

3. 發佈：

   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
   GitHub 會自動 build，1 至 2 分鐘後網站就會更新。
