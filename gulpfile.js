var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var browsersync = require('browser-sync');
var rigger = require('gulp-rigger');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var rimraf = require('rimraf');
var sequence = require('gulp-sequence');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
	return gulp.src('src/index.html')
			.pipe(htmlmin({
				collapseInlineTagWhitespace: true
			}))
			.pipe(gulp.dest('dist'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('css', function() {
	return gulp.src('src/main.less')
			.pipe(less())
			.pipe(autoprefixer())
			.pipe(gulp.dest('dist'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('js', function() {
	return gulp.src('src/common.js')
			.pipe(rigger())
			.pipe(gulp.dest('dist'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('watch', function(cb) {
	sequence('html', 'css', 'js', cb);
	gulp.watch('src/index.html', ['html']);
	gulp.watch('src/main.less', ['css']);
	gulp.watch('src/common.js', ['js']);
})

gulp.task('default', sequence('cleandist', 'watch', 'browser'));

gulp.task('browser', function() {
    browsersync.init({
        server: {
            baseDir: "dist"
        },
        notify: false
    });
});

gulp.task('cleandist', function(cb) {
	rimraf('./dist', cb);
})