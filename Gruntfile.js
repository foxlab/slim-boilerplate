module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        scsslint: 'grunt-scss-lint'
    });
    /* ====================================
        Project configuration
    ==================================== */

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
            Project paths
        ==================================== */
        project: {
            sass: "source/sass",
            css: "web/css",
            js: "web/js",
            js_dev: "source/js",
            js_partials: "source/js/components"
        },

        /*
            Concurrent
        ==================================== */
        concurrent: {
            build: {
                tasks: ['build:js', 'build:css'],
                options: {
                    logConcurrentOutput: false
                }
            }
        },

        /*
            Watch
        ==================================== */
        watch: {
            sass: {
                files: ['<%= project.sass %>/**/*.scss'],
                tasks: ['build:css'],
                options: {
                    livereload: true,
                }
            },
            concat: {
                files: ['<%= project.js_dev %>/**/*.js'],
                tasks: ['build:js'],
                options: {
                    livereload: true,
                }
            },
            browserify: {
                files: '<%= project.js_dev %>/**/*.js',
                tasks: 'browserify'
            },            
        },

        /*
            SCSS
        ==================================== */
        sass: {
            options: {
                sourceMap: true,
                trace: true
            },
            dev: {
                files: {
                    '<%= project.css %>/style__<%= pkg.version %>.css': '<%= project.sass %>/style.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    '<%= project.css %>/style__<%= pkg.version %>.css': '<%= project.sass %>/style.scss'
                }
            }
        },

        /*
            SCSS Lint
        ==================================== */
        scsslint: {
            options: {
                config: '.scss-lint.yml',
                exclude: [
                    '<%= project.sass %>/libs/*.scss',
                    '<%= project.sass %>/foundation/_print.scss',
                    '<%= project.sass %>/helpers/_mixins.scss',
                    '<%= project.sass %>/helpers/_reset.scss'
                ]
            },
            all: [
                '<%= project.sass %>/**/*.scss'
            ]
        },
        /*
            Browserify
        ==================================== */
        browserify: {
            dist: {
                src: '<%= project.js_dev %>/main.js',
                dest: '<%= project.js %>/script__<%= pkg.version %>.js'
            }
        },

        /*
            JSHint
        ==================================== */
        jshint: {
            all: {
                src: '<%= project.js_partials %>/*.js'
            },

            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                ignores: [
                ]
            }
        },

        /*
            Javascript uglify
        ==================================== */
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    '<%= project.js %>/script__<%= pkg.version %>.js': ['<%= project.js %>/script__<%= pkg.version %>.js']
                }
            }
        },

        /*
            CSS autoprefixer
        ==================================== */
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
                    map: true
                },
                src: '<%= project.css %>/style__<%= pkg.version %>.css',
                dest: '<%= project.css %>/style__<%= pkg.version %>.css'
            }
        },

    });

    /* ====================================
        Tasks
    ==================================== */

    grunt.registerTask('default', [
        'build',
        'watch'
    ]);

    grunt.registerTask('build', [
        'concurrent:build'
    ]);

    grunt.registerTask('build:js', [
        'jshint',
        'browserify'
    ]);

    grunt.registerTask('build:css', [
        'sass:dev',
        'autoprefixer'
    ]);

    grunt.registerTask('lint', [
        'scsslint',
        'jshint'
    ]);

    grunt.registerTask('dist',[
        'sass:dist',
        'autoprefixer',
        'jshint',
        'browserify',
        'uglify'
    ]);

};
