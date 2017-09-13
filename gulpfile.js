'use strict';

const gulp = require("gulp"),
      babel = require("gulp-babel"),
      browserify = require('browserify'),
      watchify = require('watchify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      uglify = require('gulp-uglify'),
      babelify = require('babelify'),
      clean = require('gulp-clean');
      
function compile(watch){
  let bundler = watchify(browserify('./index.js', { debug: true }).transform(babelify,{presets: ["es2015"]}));

  function rebundle(){
    bundler.bundle()
      .on('error', (err) => { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      // Uncomment line below to minify your build
      //.pipe(uglify())
      .pipe(gulp.dest('./build'))
  }
  
  if(watch){
    bundler.on('update', () => {
      console.log('-> bundling...');
      rebundle();
    });
  }
  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', () => { return compile(false); });
gulp.task('watch', () => { gulp.watch('./index.js',['clean','build'])});
gulp.task('clean', () => {return gulp.src('build/**', {read: false}).pipe(clean());});
gulp.task('default', ['clean','build']);
