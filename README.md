# A boilerplate React Three Fiber projects  

- 3D Text + camera animation effect

## how to use project

1. `npm i`
2. `npm run dev`
3. Open http://localhost:5173 to view it in the browser pages

## install and setup tailwindcss

- [tailwindcss install-using postcss](https://tailwindcss.com/docs/installation/using-postcss)
- `npm i tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
   - [Vite PostCSS module error when building app in Svelte](https://stackoverflow.com/questions/73136479/vite-postcss-module-error-when-building-app-in-svelte)
- adding following to 'postcss.config.js' and 'tailwind.config.js'
- adding three lines in 'index.css' file

```javascript
//postcss.config.js
 plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
//tailwind.config.js
content: ["./src/**/*.{html,jsx}"],
//index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
