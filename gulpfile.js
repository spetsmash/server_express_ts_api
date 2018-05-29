let gulp = require('gulp');
let ts = require('gulp-typescript');
let nodemon = require('gulp-nodemon');
let tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build'], () => {
    return nodemon({
        script: 'dist/index.js',
        ext: 'ts',
        tasks: ['build'],
        env: { 'NODE_ENV': 'development' }
    });
});