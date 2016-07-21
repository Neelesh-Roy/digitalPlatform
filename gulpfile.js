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
    inject  = require('gulp-inject');

// create a default task and just log a message
gulp.task('default',['watch'], function() {
  return gutil.log('Gulp is running!')
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

//automatic injection of css and js files

gulp.task('inject', function () {
  var target = gulp.src('index.html');
  var sources = gulp.src(['js/collections/*.js', 'js/models/*.js', 
    'js/routes/*.js', 'js/templates/*.js','js/views/*.js','./css/**/*.css'],
     {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('app'));
});

gulp.task('watch', function(){
  gulp.watch('js/**/*.js', ['jshint']);
  gulp.watch('less/styles.less', ['less']);
});