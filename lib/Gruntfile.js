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
                    'spacing/spacing.css',
                    'code/code.css',
                    'paragraphs/paragraphs.css',
                    'colors/colors.css',
                    'borders/borders.css',
                    'links/links.css',
                    'hovers/hovers.css',
                    'pagination/pagination.css',
                    'inputs/inputs.css',
                    'lists/lists.css',
                    'tags/tags.css'
                ],
                dest: '_all_components/cmpnnts.css'
            }

        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'general/general.min.css': 'general/general.css',
              'alerts/alerts.min.css': 'alerts/alerts.css',
              'buttons/buttons.min.css': 'buttons/buttons.css',
              'grid/grid.min.css': 'grid/grid.css',
              'headlines/headlines.min.css': 'headlines/headlines.css',
              'spacing/spacing.min.css': 'spacing/spacing.css',
              'paragraphs/paragraphs.min.css': 'paragraphs/paragraphs.css',
              'code/code.min.css': 'code/code.css',
              'tags/tags.min.css': 'tags/tags.css',
              'colors/colors.min.css': 'colors/colors.css',
              'borders/borders.min.css': 'borders/borders.css',
              'links/links.min.css': 'links/links.css',
              'hovers/hovers.min.css': 'hovers/hovers.css',
              'pagination/pagination.min.css': 'pagination/pagination.css',
              'inputs/inputs.min.css': 'inputs/inputs.css',
              'lists/lists.min.css': 'lists/lists.css',
              '_all_components/cmpnnts.min.css': '_all_components/cmpnnts.css'
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
                'headlines/headlines.min.html': 'headlines/headlines.html',
                'spacing/spacing.min.html': 'spacing/spacing.html',
                'code/code.min.html': 'code/code.html',
                'tags/tags.min.html': 'tags/tags.html',
                'colors/colors.min.html': 'colors/colors.html',
                'borders/borders.min.html': 'borders/borders.html',
                'links/links.min.html': 'links/links.html',
                'hovers/hovers.min.html': 'hovers/hovers.html',
                'pagination/pagination.min.html': 'pagination/pagination.html',
                'inputs/inputs.min.html': 'inputs/inputs.html',
                'lists/lists.min.html': 'lists/lists.html',
                'paragraphs/paragraphs.min.html': 'paragraphs/paragraphs.html'
              }
            }
        },
        watch: {
            css: {
                files: [
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
