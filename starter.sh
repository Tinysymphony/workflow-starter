# !/bin/sh
export WPATH=/home/tiny/workspace/webpack-starter/
alias webpac-starter="
cp $WPATH/webpack.* .;
cp $WPATH/package.json .;
cp $WPATH/gulpfile* .;
cp $WPATH/.gitignore .;
cp $WPATH/.npmignore .;
cp -r $PATH/src .;
touch README.md;
git init;
"
