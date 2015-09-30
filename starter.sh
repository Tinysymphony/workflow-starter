export StarterPath=$(pwd);
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
