var gulp = require('gulp'),
    webpack = require('webpack'),
    gulpWebpack = require('webpack-stream'),
    webpackConfig = require('./webpack.config'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();


//use webpack to manage all the resources in src/
gulp.task('webpack', ['clean'], function(){
  gulp.src('./src/index.html').pipe(gulp.dest('./prebuild'));
  return gulp.src('./src/index.js')
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest('prebuild/'));
});

//process all the js file in prebuild/ (using minify/uglify)
gulp.task('js', ['webpack'],  function() {
  return gulp.src('./prebuild/js/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.uglify())
    .pipe(plugins.rev())
    .pipe(gulp.dest('build/js'))
    .pipe(plugins.rev.manifest('build/rev-manifest.json', {
      base: process.cwd() + '/build',
      merge: true
    }))
    .pipe(gulp.dest('build'));
});

//process all the css file in prebuild/
gulp.task('css', ['webpack'], function() {
  console.log(process.cwd());
  return gulp.src('./prebuild/css/*.css')
    .pipe(plugins.minifyCss())
    .pipe(plugins.rev())
    .pipe(gulp.dest('build/css'))
    .pipe(plugins.rev.manifest('build/rev-manifest.json', {
      base: process.cwd() + '/build',
      merge: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('browser-sync', function() {

});

gulp.task('clean', function(){
  return gulp.src(['build/*', 'prebuild/*'], {read: false})
    .pipe(plugins.clean());
});

gulp.task('replace', ['css', 'js'], function(){
  var mapFile = gulp.src("./build/rev-manifest.json");
  return gulp.src('./prebuild/index.html')
    .pipe(plugins.revReplace({manifest: mapFile}))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['webpack', 'js', 'css', 'replace']);

gulp.task('help', function(){
  console.log('---------------------------------------------------------------');
  console.log('gulp [command]  --- with gulp installed globally');
  console.log('Command List:');
  console.log('  webpack  #use webpack to pack all files src/ ---> prebuild/');
  console.log('  js       #build all js files /prebuild ---> build/ ');
  console.log('  css      #build all css files /prebuild ---> build/');
  console.log('  build    #do all the works');
  console.log('  clean    #clear directories such as prebuild/ & build/');
  console.log('---------------------------------------------------------------');
});
