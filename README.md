# Watchtower Comments – Static Site

Simple static website for preparing and viewing Watchtower study comments.

## Files
- `index.html` → Public page (everyone can view)
- `admin.html` → Hidden admin page (password protected)
- `data/comments.json` → Your comments live here
- `style.css` + `app.js` → Styling and helpers

## Default Admin Password
`Moyoninuoluwa@01`

**Change it** inside `admin.html` (search for `ADMIN_PASSWORD`).

## How to Update Comments
1. Open `/admin.html`
2. Enter the password
3. Edit the comments
4. Click **Save & Download**
5. Replace the `data/comments.json` file on your hosting with the new one
6. Done — public page will show the updated notes

## Hosting
Upload the entire folder to any static host:
- Freehostia
- EdgeOne
- Netlify
- GitHub Pages
- etc.

Public URL example: `https://yoursite.com/index.html`  
Admin URL: `https://yoursite.com/admin.html`
