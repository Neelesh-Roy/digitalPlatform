/****************************************************
*	        
*         Mobility COE - Digital Platform
*	        Gulp file for workflow automation
*
*****************************************************/

var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    less    = require('gulp-less'),
    jshint  = require('gulp-jshint'),
    inject  = require('gulp-inject'),
    bs      = require('browser-sync').create();
// create a default task and just log a message
gulp.task('default',['browser-sync','watch'], function() {
  return gutil.log('Gulp is running!');
});

// less compilation task
gulp.task('less', function(){
	return gulp.src('less/styles.less')
		.pipe(less())
	    .pipe(gulp.dest('css'));
});

//jshint task
gulp.task('jshint', function(){
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function(){
  gulp.watch('js/**/*.js', ['jshint']);
  gulp.watch('less/styles.less', ['less', bs.reload]);
});