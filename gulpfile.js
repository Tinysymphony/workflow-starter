var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    browserSync = require ('browser-sync'),
    pngquant = require('imagemin-pngquant'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');


//use webpack to manage all the resources in src/
gulp.task('webpack', function(){
  gulp.src('./src/index.html').pipe(gulp.dest('./prebuild'));
  return gulp.src('./src/index.js')
    .pipe(webpackStream(webpackConfig, webpack))
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
gulp.task('css', ['webpack', 'img'], function() {
  var mapFile = gulp.src("./build/rev-manifest.json");
  return gulp.src('./prebuild/css/*.css')
    .pipe(plugins.minifyCss())
    .pipe(plugins.revReplace({manifest: mapFile}))
    .pipe(plugins.rev())
    .pipe(gulp.dest('build/css'))
    .pipe(plugins.rev.manifest('build/rev-manifest.json', {
      base: process.cwd() + '/build',
      merge: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('img', ['webpack'], function(){
  return gulp.src('./prebuild/img/*.*')
    .pipe(plugins.imagemin({
      progressive: true,
      use: [pngquant({quality: '70-80'})]
    }))
    .pipe(plugins.rev())
    .pipe(gulp.dest('build/img'))
    .pipe(plugins.rev.manifest('build/rev-manifest.json', {
      base: process.cwd() + '/build',
      merge: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('server', function(){
  browserSync({
    server: {
      baseDir: './prebuild'
    },
    files: [
      'prebuild/*.html',
      'prebuild/css/*.css',
      'prebuild/js/*.js'
    ]
  });
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.*', ['webpack']);
});

// gulp.task('hot', function() {
//   var bundler = webpack(webpackConfig);
//   browserSync({
//     proxy: {
//       target: 'localhost:3000',
//       middleware: [
//         webpackDevMiddleware(bundler, {
//           publicPath: webpackConfig.output.publicPath,
//           // stats: webpackConfig.stats,
//           hot: true,
//           historyApiFallback: true
//         }),
//         webpackHotMiddleware(bundler),
//       ]
//     },
//     files: [
//       'src/*.*',
//       'src/templates/*.*',
//       'src/components/**/*.*',
//       'src/css/**/*.*',
//       'src/js/**/*.*'
//     ]
//   });
// });

gulp.task('clean', function(){
  return gulp.src(['build/*', 'prebuild/*'], {read: false})
    .pipe(plugins.clean());
});

gulp.task('replace', ['css', 'js', 'img'], function(){
  var mapFile = gulp.src("./build/rev-manifest.json");
  return gulp.src('./prebuild/index.html')
    .pipe(plugins.revReplace({manifest: mapFile}))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['clean'], function(){
  gulp.start('webpack', 'img', 'js', 'css', 'replace');
});

gulp.task('help', function(){
  console.log('---------------------------------------------------------------');
  console.log('gulp [command]  --- with gulp installed globally');
  console.log('Command List:');
  console.log('  webpack  #use webpack to pack all files src/ ---> prebuild/');
  console.log('  js       #build all js files /prebuild ---> build/ ');
  console.log('  css      #build all css files /prebuild ---> build/');
  console.log('  img       #build all picture files /prebuild ---> build/ ');
  console.log('  build    #do all the works');
  console.log('  clean    #clear directories such as prebuild/ & build/');
  console.log('---------------------------------------------------------------');
});
