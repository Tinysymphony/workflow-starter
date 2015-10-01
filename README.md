###Workflow-Starter

Build the front-end development environment with Workflow-Starter~

It can be a template for building projects.

It's equipped with React.js / react-hot-loader / Babel(JSX builder) / scss / Gulp etc.

workflow goes in this way: src ---> prebuild ---> build


###Tutorial

```bash

git clone https://github.com/Tinysymphony/workflow-starter
cd webpack-starter

#get the workflow-starter command
read a < starter.sh && eval $a

#find a place to locate your project
mkdir yourApp && cd yourApp
workflow-starter

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

Now you can try your browser to render your page. It can be a safari on your ipad, or mobile browser, or a Chrome / FF / Opera / on PC. Browser-Sync has bought the two functions, hot-reloader and synchronize action, for us. That means we are freed of pushing F5 or refresh buttons on different browsers when writing webpages.

* Notice1: the browser-sync would render the pages after webpack has completed its work, in some situations, it's still necessary to refresh manually.
* Notice2: when errors occur in your codes, webpack cannot pack all the files. prebuild will not be updated, neither do your pages. Please keep a eye on outputs of `watch` process.

####Starter's Philosophy
* Webpack does well in managing all front-end resources and should be used to pack fragmental files in src/
* Gulp has many plugins and can process files methodically, so it's supposed to be the controller of the workflow. For example. `gulp webpack` is actually a gulp task which calls webpack to finish the packing works.
* Gulp uses its plugins to minify files, rename with hashed name, and `watch`.
* Although browser-sync are available on CLI, we'd prefer call it using gulp command, the file service started by it should be based in prebuild.
* The workflow: `gulp webpack` ---> `gulp watch` ---> `gulp server` ---> `open your browsers of different devices` ---> `modify contents of src directory` ---> `view the rendered pages in real time` ---> `gulp build` ---> `pushlish build directory`

####Todo List
* bower
* source-map
* debugging tools

Enjoy it.

###Workflow-Starter 文档中文版

这是用于构建单页面应用前端开发环境的工作流，或者说工具集合，按自己的需求整合了一些轮子。

主要集成了React（前端View）、Webpack（前端资源管理）、Gulp（压缩混淆，工作流控制）、Browser-Sync（热替换工具，测试用服务器）、Babel（支持ES6和JSX语法）

工作流：src ---> prebuild ---> build

####使用说明书

```bash
git clone https://github.com/Tinysymphony/workflow-starter
cd webpack-starter

#获得工作流初始化命令workflow-starter
read a < starter.sh && eval $a

#找个地方放置自己的工程
mkdir yourApp && cd yourApp
workflow-starter

#大概会产生120M左右的node_modules
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
* 利用Webpack管理前端资源文件夹src，根据配置文件需求，生成整合的前端文件到prebuild文件夹。
* 因为Gulp流程细节可控，所以用作工作流的顶层控制器，即所有操作都是靠gulp指令完成。例如命令`gulp webpack`实际上是gulp调用webpack完成src--->prebuild的过程。
* Gulp使用自身插件实现压缩，混淆，hash文件名，文件监视等。
* browser-sync可以在CLI下独立使用，不过这里也是通过gulp调用，browser-sync开设的文件服务应基于prebuild文件夹。
* 实际的开发流程应该是：`gulp webpack` ---> `gulp watch` ---> `gulp server` ---> `开启PC端，移动端浏览器` ---> `编辑src文件夹内容` ---> `直接查看各个浏览器效果` ---> `gulp build` ---> `发布build文件夹内容`

####待添加功能
* bower
* source-map
* js调试工具

更详细的介绍请见我的博客：[Webpack+Gulp构建开发结构](http://www.wytiny.me/2015/09/29/Webpack-Gulp%E6%9E%84%E5%BB%BA%E5%BC%80%E5%8F%91%E7%BB%93%E6%9E%84/)
