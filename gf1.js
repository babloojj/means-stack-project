var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
inject = require('gulp-inject'),
series = require('stream-series'),
config = require('./config/gulp.json');
gulp.task('s-pro', function () {
	var js = gulp.src(config.site.js.src)
			.pipe(concat('script.js'))
			.pipe(uglify({
				mangle:false
			}).on('error', function(e){
				console.info(e)
			}))
			.pipe(gulp.dest(config.site.js.dest));

			gulp.src('./views/layout.pug')
			.pipe(inject(series(js)))
			.pipe(gulp.dest('./views'));
})
gulp.task('s-dev', function(){
	var js = gulp.src(config.site.js.src)
	gulp.src('./views/layout.pug')
	.pipe(inject(series(js)))
	.pipe(gulp.dest('./views'))
})
gulp.task('production', ['s-pro']);
gulp.task('development', ['s-dev']);


