module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },

            dist: {
                src: ['../js/index.js'],
                dest: '../js/app.js'
            }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              src: ['../css/bootstrap.css'],
              dest: '../css/',
              ext: '.min.css'
            }]
          }
        },

        less: {
            dist: {
                files: {
                    
                    '../css/app.css': '../less/app.less',
                    "../css/shared.css": "../less/customize-bootstrap/shared.less"

                }
            }
        },

        watch: {
            css: {
                files: ['**/*.less', '../**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('compile', ['watch']);
    grunt.registerTask('alljs', ['concat']);
    grunt.registerTask('mincss', ['cssmin']);

};
