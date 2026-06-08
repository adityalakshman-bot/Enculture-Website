# Enculture Workspace — Setup Guide for Aditya

This guide walks you through setting up the Enculture workspace on your Windows machine. You'll do everything inside VS Code's terminal.

---

## Step 1: Create the Workspace Folder

Open VS Code, then open the terminal (press **Ctrl + `** or go to Terminal → New Terminal).

Type these commands one at a time:

```powershell
cd $HOME\Documents
mkdir enculture-platform
cd enculture-platform
```

This creates a folder at `C:\Users\YourName\Documents\enculture-platform`.

---

## Step 2: Initialize Git

```powershell
git init
```

This turns the folder into a Git repository so you can track changes and push to GitHub.

---

## Step 3: Open This Folder in VS Code

```powershell
code .
```

This reopens VS Code with `enculture-platform` as your workspace. The terminal will now be inside this folder.

---

## Step 4: Copy the Project Files

All the files I've created for you (CLAUDE.md, README.md, docs, etc.) need to be placed in this folder. You have two options:

**Option A — Download from this chat**
Download the files I'm sharing below and extract them into `enculture-platform/`.

**Option B — Create via Claude Code**
In your VS Code terminal, type `claude` and then tell it:
"Create the Enculture workspace structure with CLAUDE.md, README.md, .gitignore, package.json, VS Code settings, and product spec templates for Culture Intelligence, Competency Assessment, and Multi-Rater 360."

---

## Step 5: Install Recommended VS Code Extensions

Once the workspace is open in VS Code:
1. Press **Ctrl + Shift + P** to open the Command Palette
2. Type "Show Recommended Extensions" and select it
3. Install all the recommended extensions (Prettier, ESLint, Tailwind CSS, GitLens, etc.)

---

## Step 6: Create a GitHub Repository

In VS Code's terminal:

```powershell
# First, make your initial commit
git add .
git commit -m "Initial Enculture workspace setup"
```

Then create the repository on GitHub. You have two options:

**Option A — Using GitHub CLI (recommended)**
Install GitHub CLI first:
```powershell
winget install GitHub.cli
```
Then restart your terminal and run:
```powershell
gh auth login
gh repo create enculture-platform --private --source=. --push
```

**Option B — Using GitHub website**
1. Go to github.com → Click **+** → **New repository**
2. Name it `enculture-platform`
3. Set it to **Private**
4. Do NOT initialize with README (you already have one)
5. Click **Create repository**
6. Copy the commands GitHub shows under "push an existing repository" and run them in your terminal

---

## Step 7: Verify Everything Works

Run these checks in your terminal:

```powershell
# Check Git is tracking your files
git status

# Check you can reach GitHub
git remote -v

# Check Claude Code works in this workspace
claude
```

When you type `claude`, Claude Code will automatically read your CLAUDE.md file and understand the full Enculture context.

---

## Step 8: Share with Your Team

Once the repo is on GitHub, invite your team:
1. Go to your repository on github.com
2. Click **Settings** → **Collaborators**
3. Click **Add people**
4. Add your Technical Director, Product Head, and other team members by their GitHub username or email

---

## Daily Workflow

Once set up, your daily workflow will look like this:

1. **Open VS Code** → It remembers your workspace
2. **Open terminal** → Press Ctrl + `
3. **Start Claude Code** → Type `claude`
4. **Ideate and build** → Describe what you want, Claude creates it
5. **Save and push** → When ready to share:
   ```powershell
   git add .
   git commit -m "Describe what you changed"
   git push
   ```
6. **Team picks up** → They pull your changes and continue

---

## Pro Tips

- **Pull before you start:** Run `git pull` each morning to get any changes your team made
- **Commit often:** Small, frequent commits are better than one giant one
- **Branch for experiments:** If you're trying something risky, create a branch:
  ```powershell
  git checkout -b experiment/my-idea
  ```
- **CLAUDE.md is living:** Update it as decisions are made — the richer it is, the better Claude Code performs

---

## Troubleshooting

**"Permission denied" when pushing to GitHub**
→ Make sure you're signed into GitHub in VS Code (Accounts icon in the bottom-left)

**"Not a git repository" error**
→ Make sure you ran `git init` in the enculture-platform folder

**Claude Code doesn't seem to know about Enculture**
→ Make sure CLAUDE.md is in the root of the folder where you run `claude`

**Terminal shows "execution policy" errors**
→ Already fixed earlier, but if it returns: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
