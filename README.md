# Ehrgeiz - Gamified Productivity App

**Ehrgeiz** is a web-based to-do list that gamifies productivity. Earn points by completing tasks, track goals, and stay motivated with a sleek, dark-themed UI. Built with React, Tailwind CSS, and local dependencies, it runs offline and stores data in `localStorage`.

## Features

- **Tasks**: Add, edit, delete, or complete tasks with categories (Relevant: 5 pts, Other: 3 pts, Chores: 2 pts, People: 5 pts, Backlog: 5 pts, Abspielen: 1 pt).
- **Notes**: Add/edit notes for tasks to track extra details.
- **Goals**: Set main goals to guide your tasks.
- **Points**: Earn points for tasks, with +4 bonus for Urgent or Important flags. Track Lifetime Points and daily scores.
- **Backlog Decay**: Tasks move to Backlog (5 pts) after a set number of days.
- **Responsive UI**: Dark theme with Tailwind CSS, optimized for desktop and mobile.

## Prerequisites

- **Node.js**: Install Node.js and npm:
  ```bash
  sudo apt update
  sudo apt install nodejs npm

- **Text Editor**: Vim or any editor (e.g., VS Code).
- **Browser**: Brave, Firefox, or Chrome for testing

## Setup

1. **Clone or Set Up Directory**:
   Ensure `~/Ehrgeiz` contains:
   ```plain
   ehrgeiz.html
   input.css
   output.css
   tailwind.config.js
   lib/
   ├── react.production.min.js
   ├── react-dom.production.min.js
   ├── babel.min.js
   node_modules/
   package.json
   package-lock.json
   README.md
   ```

2. **Install Dependencies**:
   ```bash
   cd ~/Ehrgeiz
   npm install --save-dev @babel/standalone@7.20.15 react@18.2.0 react-dom@18.2.0
   npm install --save-dev tailwindcss
   ```

3. **Build Tailwind CSS**:
   ```bash
   npm run build
   ```
   Or for development (auto-rebuild):
   ```bash
   npm run dev
   ```

4. **Start Server**:
   ```bash
   npx serve
   ```
   Open `http://localhost:3000/ehrgeiz.html` in your browser.

## Tutorial

1. **Open Ehrgeiz**:
   - Visit `http://localhost:3000/ehrgeiz.html`.
   - See the yellow "Ehrgeiz" title, Lifetime Points, Goals, Tasks, and Settings.

2. **Add a Goal**:
   - In "Main Goals", type "Learn Ubuntu" and press Enter.
   - Goal appears in the list.

3. **Add a Task**:
   - In "Add Task":
     - Enter "Read docs".
     - Select category (e.g., Relevant).
     - Check Urgent or Important for +4 points each.
     - Add notes (e.g., "Check man pages").
     - Click "Add Task" or press Enter.
   - Task appears in "Tasks" with points, date, and notes.

4. **Manage Tasks**:
   - **Complete**: Click "Complete" to earn points (e.g., 9 pts for Relevant + Urgent) and remove task.
   - **Edit**: Click "Edit", update text/category/flags/notes, click "Save" or "Cancel".
   - **Delete**: Click "Delete" to remove without points.

5. **Track Progress**:
   - **Lifetime Points**: Updates with task completion (progress bar fills to 1000 pts).
   - **Today’s Score**: Shows today’s points (e.g., "Fri Oct 17 2025: 9 pts").
   - **Recent Daily Scores**: Lists last 7 days’ scores.

6. **Backlog Decay**:
   - In "Settings", set "Backlog Decay (days)" to 1.
   - Test decay:
     ```bash
     sudo date -s "2025-10-18"
     ```
     Refresh; non-Backlog tasks move to Backlog (5 pts).

7. **Reset Data** (Optional):
   - In browser Console (Right-click > Inspect > Console):
     ```javascript
     localStorage.clear();
     ```
   - Refresh to reset goals, tasks, and points.

## Deployment

Deploy to Netlify for a live version:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and Deploy**:
   ```bash
   cd ~/Ehrgeiz
   npm run build
   netlify deploy --prod --dir=~/Ehrgeiz
   ```
   - Log in to Netlify, create a site, and get a live URL (e.g., `https://ehrgeiz-app.netlify.app`).

3. **Optional: GitHub**:
   - Push to GitHub for auto-deploys:
     ```bash
     git init
     echo "node_modules/" > .gitignore
     git add .
     git commit -m "Ehrgeiz initial commit"
     ```
   - Link repo to Netlify in the dashboard.

## Development

- **Edit Code**: Edit `ehrgeiz.html` to tweak React or Tailwind.
- **Backup**:
  ```bash
  cp -r ~/Ehrgeiz ~/Ehrgeiz-backup-$(date +%F)
  ```
- **Debug**:
  - Check Console for "Script running" and:
    ```javascript
    console.log(typeof React, typeof ReactDOM, typeof Babel);
    ```
    Expected: `"object object object"`.
  - Verify Network tab: `output.css`, `lib/` files (status 200).

## Future Ideas

- **Streaks**: Track consecutive active days.
- **Goal Linking**: Link tasks to goals.
- **Badges**: Award for milestones (e.g., 100 points).
- **Export/Import**: Save/load data as JSON.

## Notes

- Built with React 18.2.0, Babel 7.20.15, Tailwind CSS 3.4.1.
- Uses local dependencies (`lib/`) for offline reliability.
- Data persists in `localStorage`.
- Save this file with UTF-8 encoding (in Vim: `:set fileencoding=utf-8`).

Happy gaming with Ehrgeiz! 🚀
```
