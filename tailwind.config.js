module.exports = {
    content: [
      './assets/**/*.{vue,js,css}',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    extend:{},
    variants: {
      extend: {
        display:['group-focus'],
        opacity:['group-focus'],
        inset:['group-focus']
      },
    },
    plugins: [],
   
  };
  
