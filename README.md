```markdown
# Ambition - Gamified Productivity App

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

**Ambition** is a web-based to-do list that gamifies productivity. Earn points by completing tasks, track goals, and stay motivated with a sleek, dark-themed UI. Built with React, Tailwind CSS, and local dependencies, it runs offline and stores data in `localStorage`.

## Features

- **Tasks**: Add, edit, delete, or complete tasks with categories (Relevant: 5 pts, Other: 3 pts, Chores: 2 pts, People: 5 pts, Backlog: 5 pts, Abspielen: 1 pt).
- **Notes**: Add/edit notes for tasks.
- **Goals**: Set main goals to guide tasks.
- **Points**: Earn points with +4 bonus for Urgent/Important flags.
- **Backlog Decay**: Tasks move to Backlog after set days.
- **Rules Page**: View game rules at `/rules`.
- **Responsive UI**: Dark theme with Tailwind CSS.

## Prerequisites

- **Node.js**: Install Node.js and npm:
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```
- **Browser**: Brave, Firefox, or Chrome

## Setup

1. **Clone or Set Up Directory**:
   Ensure `~/Ehrgeiz` contains:
   ```plain
   ambition.html
   rules.html
   input.css
   output.css
   tailwind.config.js
   _redirects
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
   npm install --save-dev @babel/standalone@7.20.15 react@18.2.0 react-dom@18.2.0 tailwindcss@3.4.1
   ```

3. **Build Tailwind CSS**:
   ```bash
   npm run build
   ```
   Or for development:
   ```bash
   npm run dev
   ```

4. **Start Server**:
   ```bash
   npx serve
   ```
   Open `http://localhost:3000/ambition.html`.

## Tutorial

1. **Open Ambition**:
   - Visit `http://localhost:3000/ambition.html` or live URL.
   - See yellow "Ambition" title, Lifetime Points, Goals, Tasks, Settings.

2. **View Rules**:
   - Click "Rules" link to visit `/rules`.
   - See game rules (categories, points, decay).

3. **Add a Goal**:
   - In "Main Goals", type "Learn Ubuntu", press Enter.

4. **Add a Task**:
   - Enter "Read docs", select category (e.g., Relevant), check Urgent/Important, add notes.
   - Click "Add Task".

5. **Manage Tasks**:
   - **Complete**: Earn points (e.g., 9 pts for Relevant + Urgent).
   - **Edit**: Update text/category/notes.
   - **Delete**: Remove without points.

6. **Track Progress**:
   - Lifetime Points: Updates with completions.
   - Today’s Score: Shows daily points.
   - Recent Daily Scores: Last 7 days.

7. **Backlog Decay**:
   - Set "Backlog Decay (days)" to 1 in Settings.
   - Test: `sudo date -s "2025-10-18"`, refresh.

8. **Reset Data**:
   - Console: `localStorage.clear();`, refresh.

## Deployment

Deploy to Netlify:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```
   If permission error:
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   npm install -g netlify-cli
   ```

2. **Manual Deploy**:
   ```bash
   cd ~/Ehrgeiz
   npm run build
   netlify deploy --prod --dir=/home/harper/Ehrgeiz
   ```

3. **Auto-Deploys with GitHub**:
   - In Netlify dashboard:
     - Link `Harper42/Ehrgeiz`.
     - Build command: `npm run build`.
     - Publish directory: `.`.
   - Auto-deploys on `git push`.

4. **Troubleshooting CSS**:
   - Ensure `output.css` is generated (`npm run build`).
   - Check `<link rel="stylesheet" href="output.css">` in `ambition.html`, `rules.html`.
   - Verify `output.css` in Netlify deploy files (Dashboard > Deploys > Files).
   - Ensure `output.css` not in `.gitignore`.
   - Clear cache in Netlify dashboard > Deploys > Trigger deploy > Clear cache.

## Development

- **Edit Code**: Use `ambition.html` for React, `rules.html` for static rules.
- **Backup**:
   ```bash
   cp -r ~/Ehrgeiz ~/Ehrgeiz-backup-$(date +%F)
  ```
- **Debug**:
   - Console: `console.log(typeof React, typeof ReactDOM, typeof Babel);` → `"object object object"` (in `ambition.html`).
   - Network: Check `output.css`, `lib/` (status 200).

## Future Ideas

- **Streaks**: Track consecutive active days.
- **Goal Linking**: Link tasks to goals.
- **Badges**: Milestones (e.g., 100 points).
- **Export/Import**: JSON save/load.
- **User Accounts**: Add Firebase for cross-device tasks.

## Notes

- Built with React 18.2.0, Babel 7.20.15, Tailwind CSS 3.4.1.
- Uses `localStorage` for user-specific tasks.
- Save files with UTF-8 (Vim: `:set fileencoding=utf-8`).

## License

MIT License - see [LICENSE](LICENSE).

Happy gaming with Ambition! 🚀
```
