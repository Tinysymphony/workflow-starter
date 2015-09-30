###Webpack-Starter

Build the front-end development environment with Webpack-Starter~

It can be a template for building projects.

It's equipped with React.js / react-hot-loader / Babel(JSX builder) / scss / Gulp etc.

workflow goes in this way: src ---> prebuild ---> build


###Tutorial

```bash

git clone https://github.com/Tinysymphony/webpack-starter
cd webpack-starter

#get the absolute work path
export StarterPath=$(pwd);
#create a temporary command
alias webpack-starter="
cp $StarterPath/webpack* .;
cp $StarterPath/package.json .;
cp $StarterPath/gulpfile* .;
cp $StarterPath/.gitignore .;
cp $StarterPath/.npmignore .;
cp $StarterPath/README.md .;
cp -r $PATH/src .;
mkdir build prebuild;
git init;
"

#find a place to locate your project
mkdir yourApp && cd yourApp
webpack-starter

#about 120+M
npm install

#make sure you have installed Gulp globally
npm install -g gulp

#checkout available Gulp commands
gulp help

#get all the files
gulp build

#clean the files in build and prebuild
gulp clean

#ues a terminal to watch your src directory
gulp watch

#open anthor one to start your server, default is at 3000 port
gulp server

```

Now you can try your browser to render your page. It can be a safari on your ipad, or mobile browser, or a Chrome / FF / Opera / on PC.

Enjoy it.

###Webpack-starter 文档中文版

这是用于构建单页面应用前端开发环境的工作流，或者说工具集合，按自己的需求整合了一些轮子。

主要集成了React（前端View）、Webpack（前端资源管理）、Gulp（压缩混淆，工作流控制）、Browser-Sync（热替换工具，测试用服务器）、Babel（支持ES6和JSX语法）

工作流：src ---> prebuild ---> build

####使用说明书

```bash
git clone https://github.com/Tinysymphony/webpack-starter
cd webpack-starter

#获得路径
export StarterPath=$(pwd);
#复制命令
alias webpack-starter="
cp $StarterPath/webpack* .;
cp $StarterPath/package.json .;
cp $StarterPath/gulpfile* .;
cp $StarterPath/.gitignore .;
cp $StarterPath/.npmignore .;
cp $StarterPath/README.md .;
cp -r $PATH/src .;
mkdir build prebuild;
git init;
"

#找个地方放置自己的工程
mkdir yourApp && cd yourApp
webpack-starter

npm install

#确保全局安装的gulp会方便很多
npm install -g gulp

#查看可用的gulp指令，下面会介绍几个常用的
gulp help

#完成整个工作流，获取可发布文件
gulp build

#清理生成的文件
gulp clean

#开发时先使用一个终端监控资源文件
gulp watch

#再启动一个终端运行browser-sync，默认端口在3000
gulp server

```

因为已经有样例文件，所以可以直接走一边上面的流程。

你可以在PC端开启`localhost:3000`，然后尝试修改资源文件，每一次保存都是重新渲染的信号。

用同网段下的pad或者手机，打开`[yourIP]:3000`，可以看到他们的行为是同步的。

* 注1：偶尔会因为缓存或者其他原因导致无法自动刷新，需要手动。

* 注2：在编译出错时，热替换会失效，注意查看watch终端的输出信息。


需要打包发布时，一定要`gulp build`，然后使用build文件夹的内容。

####主要思想
* 利用Webpack管理前端资源文件夹src，根据配置文件需求，生成整合的前端文件到prebuild文件夹
* Gulp流程可控

更详细的介绍请见我的博客：[Webpack+Gulp构建开发结构](http://www.wytiny.me/2015/09/29/Webpack-Gulp%E6%9E%84%E5%BB%BA%E5%BC%80%E5%8F%91%E7%BB%93%E6%9E%84/)
