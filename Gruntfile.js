module.exports = function (grunt) {

// Project configuration.
    grunt.initConfig({
        concat: {
            css: {
                src: [
                    'general/general.css',
                    'alerts/alerts.css',
                    'buttons/buttons.css',
                    'grid/grid.css',
                    'headline/headline.css',
                    'spacing/spacing.css'
                ],
                dest: 'all/cmpnnts.css'
            }

        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'all/cmpnnts.min.css': 'all/cmpnnts.css'
            }
          }
        },
        htmlmin: {
            dist: {
              options: {
                removeComments: true,
                collapseWhitespace: true
              },
              files: {
                'general/general.min.html': 'general/general.html',
                'alerts/alerts.min.html': 'alerts/alerts.html',
                'buttons/buttons.min.html': 'buttons/buttons.html',
                'grid/grid.min.html': 'grid/grid.html',
                'headline/headline.min.html': 'headline/headline.html',
                'spacing/spacing.min.html': 'spacing/spacing.html'
              }
            }
        },
        watch: {
            css: {
                files: [
                    'all/cmpntns.css',
                    '*/*.css'
                ],
                tasks: ['concat:css', 'cssmin'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['htmlmin', 'concat:css', 'cssmin']);
};
