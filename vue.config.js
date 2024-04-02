const { defineConfig } = require('@vue/cli-service')
//const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {sourceMap: true},
  chainWebpack: config => {
    config.optimization.minimize(false)
    },
  pluginOptions: {
    'style-resources-loader': {
      // preProcessor: 'scss',
      // patterns: [
      //   'E:\\Laravel_VueJs_05_04_23\\Repo\\frontend\\ecom_multivendor\\@\\assets\\scss\\style.scss',
      //   'E:\\Laravel_VueJs_05_04_23\\Repo\\frontend\\ecom_multivendor\\@\\assets\\scss\\utils\\_variable.scss',
      //   // 'E:\\Laravel_VueJs_05_04_23\\Repo\\frontend\\ecom_multivendor\\@\\assets\\styles\\style.scss',
      // ]
    },
    //vuetify: {}
   
  },
  
 
  

  
});

// const { VuetifyPlugin } = require('webpack-plugin-vuetify')

// module.exports = {
//   configureWebpack: {
//   plugins: [
//     new VuetifyPlugin(),
//   ],
// }
// };
