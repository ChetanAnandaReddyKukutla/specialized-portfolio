# 📝 How to Update This Repository from VS Code

This guide will help you update and manage this portfolio repository using Visual Studio Code.

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ [Visual Studio Code](https://code.visualstudio.com/) installed
- ✅ [Git](https://git-scm.com/downloads) installed on your system
- ✅ [Node.js](https://nodejs.org/) (v18 or higher) installed
- ✅ A GitHub account with access to this repository

## 🚀 Quick Start Guide

### 1️⃣ Initial Setup (One-Time Configuration)

#### Configure Git in VS Code

1. **Open VS Code Terminal**
   - Press `Ctrl + backtick` or go to `Terminal → New Terminal`

2. **Set your Git identity** (if not already done):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Verify Git is installed**:
   ```bash
   git --version
   ```

#### Sign in to GitHub in VS Code

1. Click the **Account icon** (👤) in the bottom-left corner of VS Code
2. Select **Sign in to Sync Settings**
3. Choose **Sign in with GitHub**
4. Follow the browser prompts to authenticate

### 2️⃣ Clone the Repository (If You Haven't Already)

If you don't have the repository on your local machine:

1. **Open VS Code**
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type `Git: Clone` and press Enter
4. Enter the repository URL:
   ```
   https://github.com/ChetanAnandaReddyKukutla/specialized-portfolio
   ```
5. Choose a folder location to save the repository
6. Click **Open** when prompted to open the cloned repository

### 3️⃣ Making Changes

#### Option A: Using VS Code's Git Interface (Recommended for Beginners)

1. **Make your changes** to any files in the project
2. **View changes**:
   - Click the **Source Control** icon in the left sidebar (or press `Ctrl+Shift+G`)
   - You'll see all modified files listed

3. **Stage changes**:
   - Hover over a file and click the **+** icon to stage it
   - Or click the **+** icon next to "Changes" to stage all files

4. **Commit changes**:
   - Type a descriptive commit message in the text box at the top
   - Press `Ctrl+Enter` or click the **✓ Commit** button
   - Example commit messages:
     - `Add new project to portfolio`
     - `Update contact information`
     - `Fix responsive design issues`

5. **Push to GitHub**:
   - Click the **...** (more actions) button in the Source Control panel
   - Select **Push** (or press `Ctrl+Shift+P` and type `Git: Push`)
   - Or click the **↑** icon in the bottom-left status bar

#### Option B: Using Terminal Commands

1. **Check status of changes**:
   ```bash
   git status
   ```

2. **Stage your changes**:
   ```bash
   # Stage specific file
   git add path/to/file.tsx
   
   # Stage all changes
   git add .
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Your descriptive commit message"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin main
   ```

## 🌿 Working with Branches

### Creating a New Branch (Recommended for New Features)

**Using VS Code UI:**
1. Click the branch name in the bottom-left corner (usually shows "main")
2. Click **+ Create new branch**
3. Enter a branch name (e.g., `feature/new-project`, `fix/contact-form`)
4. Press Enter

**Using Terminal:**
```bash
# Create and switch to a new branch
git checkout -b feature/new-project

# Or use the newer syntax
git switch -c feature/new-project
```

### Switching Between Branches

**Using VS Code UI:**
- Click the branch name in the bottom-left corner
- Select the branch you want to switch to

**Using Terminal:**
```bash
git checkout branch-name
# or
git switch branch-name
```

### Pushing a New Branch

```bash
# First time pushing a new branch
git push -u origin feature/new-project

# Subsequent pushes
git push
```

## 🔄 Updating Your Local Repository

### Pull Latest Changes from GitHub

**Before making new changes, always pull the latest code:**

**Using VS Code UI:**
1. Click the **...** in the Source Control panel
2. Select **Pull**
3. Or click the **↓** icon in the bottom-left status bar

**Using Terminal:**
```bash
# Pull from the current branch
git pull

# Or pull from a specific branch
git pull origin main
```

## 📦 Installing Dependencies

After pulling changes or cloning the repository:

```bash
# Install all project dependencies
npm install

# or if you use yarn
yarn install
```

## 🏃‍♂️ Running the Development Server

```bash
# Start the development server
npm run dev

# The portfolio will be available at http://localhost:3000
```

## 🔍 Useful VS Code Extensions for This Project

Install these extensions to enhance your development experience:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets for React
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
3. **GitLens** - Enhanced Git capabilities
4. **Prettier - Code formatter** - Automatic code formatting
5. **ESLint** - JavaScript/TypeScript linting

**To install an extension:**
1. Press `Ctrl+Shift+X` to open Extensions view
2. Search for the extension name
3. Click **Install**

## 🆘 Common Issues and Solutions

### Issue 1: "Permission denied" when pushing

**Solution:**
```bash
# Use SSH instead of HTTPS (if you have SSH keys set up)
git remote set-url origin git@github.com:ChetanAnandaReddyKukutla/specialized-portfolio.git

# Or authenticate with GitHub CLI
gh auth login
```

### Issue 2: Merge conflicts

**When you see merge conflicts:**
1. VS Code will highlight conflicting files
2. Open the conflicting file
3. You'll see sections marked with `<<<<<<<`, `=======`, and `>>>>>>>`
4. Choose which changes to keep using VS Code's merge conflict resolver
5. After resolving, stage and commit the files

### Issue 3: Uncommitted changes preventing pull

**Solution:**
```bash
# Option 1: Stash your changes temporarily
git stash
git pull
git stash pop

# Option 2: Commit your changes first
git add .
git commit -m "WIP: Save current work"
git pull
```

### Issue 4: Need to undo last commit

**Solution:**
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Undo last commit and discard changes (careful!)
git reset --hard HEAD~1
```

## 🎯 Best Practices

### Commit Messages
- ✅ Use clear, descriptive messages
- ✅ Start with a verb: "Add", "Fix", "Update", "Remove"
- ✅ Keep it concise but informative
- ❌ Avoid: "update", "changes", "stuff"
- ✅ Good examples:
  - `Add new project showcase section`
  - `Fix mobile navigation menu styling`
  - `Update contact email address`
  - `Remove deprecated dependencies`

### Before Pushing
- ✅ Test your changes locally (`npm run dev`)
- ✅ Check for console errors
- ✅ Review your changes in the Source Control panel
- ✅ Pull latest changes before pushing
- ✅ Make sure you're on the correct branch

### Branch Strategy
- 🎯 Keep `main` branch stable and working
- 🌿 Create feature branches for new features
- 🐛 Create fix branches for bug fixes
- 🔀 Merge branches back to main when complete

## 📚 Additional Resources

- [VS Code Git Documentation](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [GitHub Git Guides](https://github.com/git-guides)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎬 Quick Reference Commands

```bash
# Check current status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature/branch-name

# Switch branches
git checkout branch-name

# View commit history
git log --oneline

# Discard changes to a file
git checkout -- filename

# View differences
git diff
```

## 💡 VS Code Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open Source Control | `Ctrl+Shift+G` | `Cmd+Shift+G` |
| Open Terminal | `Ctrl+backtick` | `Cmd+backtick` |
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Quick File Open | `Ctrl+P` | `Cmd+P` |
| Save All Files | `Ctrl+K S` | `Cmd+K S` |
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |
| Find in Files | `Ctrl+Shift+F` | `Cmd+Shift+F` |

---

**Need more help?** Feel free to:
- 📧 Email: [chetananandareddykukutla@gmail.com](mailto:chetananandareddykukutla@gmail.com)
- 🐙 Check the main [README.md](README.md) for project details
- 💬 Open an issue on GitHub for questions

Happy coding! 🚀
