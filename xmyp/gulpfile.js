const gulp = require("gulp");
const webserver = require("gulp-webserver");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const mincss = require("gulp-clean-css");
const watch = require("gulp-watch");

gulp.task("refreshJS",()=>{
    gulp.src("./src/scripts/libs/*.js").pipe(gulp.dest("./dist/scripts/libs"));
    gulp.src("./src/scripts/myjs/*.js").pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts/myjs"))
})



gulp.task("refreshCSS",()=>{
    gulp.src("./src/styles/**/*.scss")
    .pipe( sass().on('error', sass.logError) )
    // .pipe(mincss())
    .pipe( gulp.dest("./dist/styles"));
    gulp.src("./src/styles/*.css").pipe(gulp.dest("./dist/styles"))
})

gulp.task("refreshHTML",()=>{
    gulp.src("./src/pages/**/*.html")
    .pipe( gulp.dest("./dist/pages"));
    gulp.src("./src/pages/**/*.js").pipe(gulp.dest("./dist/pages"))
})

gulp.task("refreshStatic",()=>{
    gulp.src("./src/static/**/*.*")
    .pipe( gulp.dest("./dist/static"))
})

gulp.task("refreshData",()=>{
    gulp.src("./src/data/**/*.*")
    .pipe( gulp.dest("./dist/data"))

})

gulp.task("refreshImg",()=>{
    gulp.src("./src/images/**/*.*")
    .pipe( gulp.dest("./dist/images"))

})


gulp.task("build",["refreshJS","refreshCSS","refreshHTML","refreshStatic","refreshData","refreshImg"])
gulp.task("watch",()=>{
    gulp.watch("./src/**/*.*",["refreshJS","refreshCSS","refreshHTML","refreshStatic","refreshData","refreshImg"])
})

gulp.task("webserver",["watch","build"],()=>{
    gulp.src("./dist")
        .pipe( webserver({
            livereload : true,
            port : 9000,
            proxies : [
                {
                    source : "/api",
                    target : "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"
                },
                {
                    source : "/goods",
                    target : "https://youpin.mi.com/app/shop/detail/pipe"
                }
            ]
        }))
})
gulp.task('default',['webserver'], function () {
    console.log('成功');
  });