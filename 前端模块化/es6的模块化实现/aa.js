;
var moduleA=(function aa(){
  // 我们通过定义一个对象，在对象中定义变量和方法，然后将对象返回,然后其他js文件就可以访问了
  var obj = {
    name : "小明",
    flag: true
  }
  return obj
})()
