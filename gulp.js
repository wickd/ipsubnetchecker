let gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let livereload = require('gulp-livereload');
let clear = require('clear');
let config = require('config');
let entryPoint = 'index.js';
let server = () => gulp.src(entryPoint).pipe(livereload());

for (let i = 0, _c = process.argv.length; i < _c; i++)
{
    if (process.argv[i] == '--environment')
    {
        switch (process.argv[i + 1])
        {
            case 'pro' :
                process.env.NODE_ENV = 'live';
                break;
            case 'test' :
                process.env.NODE_ENV = 'test';
                break;
            default :
                process.env.NODE_ENV = 'localhost';
                break;
        }

        process.env.NODE_CONFIG_DIR = './config';
        process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
    }

    console.log(process.env);
}

// nodemon
let nodemonjs = () => 
    nodemon({
        script: entryPoint,
        ignore: 'public/*'
    })
    .on('restart', () => {
        clear();
        server();
    });

gulp.task('default', ['nodemon']);

gulp.task('nodemon', nodemonjs);