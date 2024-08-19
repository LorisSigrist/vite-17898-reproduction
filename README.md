# vitejs/vite#17898 Reproduction

Steps: 
1. Run the build
2. Inspect `dist/assets/index-*.js`. You will find all exports from `messages.js` included there.
