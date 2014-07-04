var gulp = require('gulp');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');
var browserSync = require('browser-sync');
var gulpif = require('gulp-if');
var env = require('node-env-file');
//var shim = require('browserify-shim'); //Make CommonJS-Incompatible Files Browserifyable
//var changed = require('gulp-changed');
//var imagemin = require('gulp-imagemin');
// var concat = require('gulp-concat');
// var concat_sm = require('gulp-concat-sourcemap');

env('.env');

var env = process.env.NODE_ENV || 'development';
var IS_DEVELOPMENT_ENV = env === 'development';
var IS_PRODUCTION_ENV = env === 'production';

gulp.task('clean', function() {
    return gulp.src('public/**', { read: false })
    .pipe(rimraf());
});

gulp.task('jade', function() {
    return gulp.src(['src/templates/**/*.jade', '!src/templates/layouts/**'])
        .pipe(jade())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('lint', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*/
//without browserify
gulp.task('js', function() {
    return gulp.src(['src/scripts/config.js', 'src/scripts/logger.js', 'src/scripts/main.js'])
        .pipe(concat_sm('app.js', {sourcesContent: IS_DEVELOPMENT_ENV}))
        .pipe(gulpif(IS_PRODUCTION_ENV,uglify()))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({stream:true, once: true}));
});
/*/
//single entry point
gulp.task('js', function() {
    return gulp.src('src/scripts/main.js')
        .pipe(browserify({debug:IS_DEVELOPMENT_ENV}))
        .pipe(gulpif(IS_PRODUCTION_ENV,uglify()))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({stream:true, once: true}));
});
//*/

gulp.task('sass', function() {

    var config = { };
    config.includePaths = require('node-neat').includePaths;

    if (IS_DEVELOPMENT_ENV) {
        config.sourceComments = 'map';
    } else {
        config.outputStyle = 'compressed';
    }

    return gulp.src('src/styles/main.scss')
        .pipe(sass(config))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({stream:true}));
});


// minify new images
// gulp.task('imagemin', function() {
//   var imgSrc = './src/images/**/*',
//       imgDst = './build/images';
 
//   gulp.src(imgSrc)
//     .pipe(changed(imgDst))
//     .pipe(imagemin())
//     .pipe(gulp.dest(imgDst));
// });

gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/scripts/**/*.js', ['lint', 'js']);
    gulp.watch('src/styles/**/*.scss', ['sass']);
});

gulp.task('browserSync', function() {

   //  var files = [
   //    'public/**/*.html',
   //    'public/css/**/*.css',
   //    'public/js/**/*.js'
   // ];

    browserSync.init(null, {
        //proxy: "192.168.33.174",
        server: {
            baseDir: "public",
            index: "index.html"
        }
    });
});

gulp.task('default', ['lint','js', 'sass', 'jade', 'browserSync', 'watch']);

