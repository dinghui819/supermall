/* 配置文件别名 */
module.exports = {
  /* 表示配置config */
  configureWebpack: {
    resolve: {
      /* 配置别名 */
      alias: {
       /* "@":"src"  */
       /* 在脚手架2中需要用'assets': 'src/assets' */
       'assets': '@/assets',
       'common': '@/common',
       'components': '@/components',
       'network': '@/network',
       'views': '@/views'
      }
    }
  } 
}
