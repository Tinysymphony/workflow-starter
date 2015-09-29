###Webpack-Starter

Build the front-end development environment with Webpack-Starter~

It can be a template for building projects.

It's equipped with React.js / react-hot-loader / Babel(JSX builder) / scss / Gulp etc.

* Use bash shell to save your time

```bash
#starter.sh  
#PS: change it to your starter path
export WPATH=/home/tiny/workspace/webpack-starter/
alias webpac-starter="
cp $WPATH/index.html .;
cp $WPATH/webpack.* .;
cp $WPATH/package.json .;
cp $WPATH/gulpfile* .;
cp $WPATH/.gitignore .;
cp $WPATH/.npmignore .;
cp -r $PATH/src .;
touch README.md;
"
```

* install all the dependencies on development

```bash
npm install
gulp prebuild
webpack
node server.js
```

* production

```shell
gulp build
gulp pack
```
