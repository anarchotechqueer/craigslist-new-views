var gulp     = require('gulp');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var prefix   = require('gulp-autoprefixer');
var sass     = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename   = require('gulp-rename');

var sassExtension = 'extension/scss/**/*.scss';
var destExtension = 'extension/mini/';

process.env.NODE_ENV === 'production' ? 'production' : 'development';

gulp.task('stylesExtension', function(){
  gulp.src(sassExtension)
  .pipe(sass().on('error', sass.logError))
  .pipe(prefix('last 2 versions'))
  .pipe(concat('style.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(destExtension));
});

gulp.task('jsExtension', function(){
  gulp.src('extension/js/*.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('extension/mini/'))
});


gulp.task('default', function() {
  gulp.start('stylesExtension')
  gulp.start('jsExtension')

  if (process.env.NODE_ENV !== "production") {
    gulp.watch(sassExtension, ['stylesExtension']);
    gulp.watch('extension/js/*.js',['jsExtension']);
  }
});
