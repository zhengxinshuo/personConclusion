/**
 * Created by zhengxinshuo on 2016/9/13.
 */
var gulp = require('gulp');
//var px2rem = require('px2rem');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var fileinclude  = require('gulp-file-include');

/*gulp.task('css', function(){
    gulp.src(['css/all.css'])
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(px2rem(72))
        .pipe(gulp.dest('css/'))
});*/

gulp.task('fileinclude', function() {
    gulp.src([
        'src/views/**/**.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('views'));
});
//监听页面生成
gulp.task('render',function(){
    gulp.watch('src/views/**/*.html', ['fileinclude']);
});