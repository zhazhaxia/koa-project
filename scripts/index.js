#! /usr/bin/env node
var yargs = require('yargs');
var path = require('path');









console.log()
if (path.basename(path.resolve("./")) !== 'koa-project') {
  console.log('ERROR','请在koa-project目录下执行此命令')
  return;
}


var argv = yargs
.command("run", '运行 test', function(yargs){
  var _argv = yargs.reset().option('p',{
    alias:'project',
    demand:true,
    default:'',
    describe:'运行的项目名',
    type:'string'
  })
  .option('c',{
    alias:'compile',
    demand:false,
    describe:'是否需要编译',
    type:'boolean'
  })
  .argv;

  console.log(111,_argv)
})
.command("create", '创建 项目', function(yargs){
  var _argv = yargs.reset().option('n',{
    alias:'name',
    demand:true,
    default:'myProject',
    describe:'创建的项目名',
    type:'string'
  })
  .argv;

  console.log(333,_argv)
})
.usage('使用方法: test-yargs [command] <项目名> [options]')
.example('本地开发: test-yargs run [project]')
.help('h')
.alias('h','help')
.epilog('==============================================')
.fail(function(){
  yargs.showHelp()
})
.argv;
// console.log(222,argv)
