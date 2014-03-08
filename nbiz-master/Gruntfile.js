'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
var application = require( './config/application.js' );

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/**/*.{scss,sass}',
                        '<%= yeoman.app %>/components/foundation-icons/**/sass/*.{scss,sass}'
                        ],
                tasks: ['compass']
            },
            jade: {
                files: ['app/views/**/*.jade'],
                tasks: ['jade:server']
            },
            livereload: {
                files: [
                    '.tmp/**/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
                ],
                tasks: ['livereload']
            },
            express: {
                files: [
                    "server/**/*"
                ],
                tasks: ["express:server"],
                options: {
                    livereload: true,
                    nospawn: true // Without this option specified express won"t be reloaded
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp/'),
                            mountFolder(connect, '.tmp/views/'),
                            mountFolder(connect, 'node_modules/'),
                            mountFolder(connect, 'bower_modules/'),
                            mountFolder(connect, 'app/')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        express: {
            server: {
                options: {
                    script: "server/server.js"
                }
            },
            build: {
                options: {
                    script: "server/server.js"
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp',
            sassCache: '.sass-cache'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                '!<%= yeoman.app %>/scripts/libs/*',
                '!<%= yeoman.app %>/scripts/plugins/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            server: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]  
            },
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: '.tmp/spec',
                    src: '*.coffee',
                    dest: 'test/spec'
                }]
            }
        },
        compass: {
            options: {
                cssDir: '.tmp/styles',
                // sourcemap: true,
                sassDir: '<%= yeoman.app %>/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '.tmp/scripts',
                relativeAssets: true,
                force: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        jade: {
          server: {
            options: {
                pretty: true
                , client: false
                , compileDebug: true
                , data: function(dest, src) {
                    return {
                        "data": {
                            "common": application.common
                            ,"route":  application.route
                            , "navigation":  application.navigation
                            , "path":  application.path
                            , "environment":  application.environment[ "development" ] 
                        }
                        , "user": {
                            "name": "anonymous" // Default for unauthenticated users
                            ,"email": "claus.nisslmueller@gmx.at"
                            , "hashed_password": ""
                            , "facebook": {}
                            , "twitter": {}
                            , "github": {}
                            , "google": {}
                            // CAUTION: groups must contain at least one item. First item should be used 
                            // to define the authorization-level of the application to load
                            , "groups": [
                                // "admin-authorized",
                                // "user-authorized",
                                "default"
                            ]
                        }
                    };
                }
            }
            , files: [
              {
                // expand: true - Activates extended options
                // http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
                expand: true
                , flatten: false
                , cwd: 'app/views'
                , src: [ "**/*.jade" ]
                , dest: '.tmp/views'
                , ext: ".html"
              },
              {
                // expand: true - Activates extended options
                // http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
                expand: true
                , flatten: false
                , cwd: 'server/views'
                , src: [ 'index.jade' ]
                , dest: '.tmp/'
                , ext: ".html"
              },
              {
                // expand: true - Activates extended options
                // http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
                expand: true
                , flatten: false
                , cwd: 'server/views'
                , src: [ "**/*.jade"
                    , "!index.jade"
                    , "!404.jade"
                    , "!504.jade" ]
                , dest: '.tmp/views'
                , ext: ".html"
              }
            ]
          } 
        }, 
        concurrent: {
          server: {
            options: {
                logConcurrentOutput: true,
            }
            , tasks: [
              "coffee:server"
              , "compass:server"
              , "jade:server"
            ]
          }
          // , test: [
          //   "coffee"
          // ]
          // , dist: [
          //   "coffee:build"
          //   , "compass:build"
          //   , "imagemin"
          //   , "htmlmin"
          // ]
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: 'app/scripts',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/index.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}'
                    ]
                }]
            }
            , fonts: {
                files: 
                [
                    {
                        expand: true,
                        flatten: true,
                        dot: true,
                        cwd: 'bower_modules/foundation-icons',
                        dest: '.tmp/fonts',
                        src: [
                            '**/*.{svg,ttf,woff,eot}',
                        ]
                    }
                    ,{
                        expand: true,
                        flatten: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>/fonts',
                        dest: '.tmp/fonts',
                        src: [
                            '**/*.{svg,ttf,woff,eot}',
                        ]
                    }
                ]      
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'clean:sassCache',
            'concurrent:server',
            'copy:fonts',
            'livereload-start',
            'connect:livereload',
            'express:server',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'coffee',
        'compass',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'compass:dist',
        'useminPrepare',
        'requirejs',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};
