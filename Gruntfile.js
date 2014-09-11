module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'a/c/screen.css': 'a/scss/screen.scss',
        }
      }
    },
    concat: {
      source: {
        src: [
          'a/j/plugins/*.js', // All JS in the plugins folder
          'a/j/custom/*.js'  // All JS in the custom folder
        ],
      dest: 'a/j/global.js'
      }
    },
    uglify: {
      source: {
        src: 'a/j/global.js',
        dest: 'a/j/global.min.js'
      }
    },
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      }
    },
    grunticon: {
        myIcons: {
            files: [{
                expand: true,
                cwd: 'a/i/icons/',
                src: '*.svg',
                dest: "a/c/grunticon/"
            }],
            options: {
            }
        }
    },
    watch: {
      options: {
        livereload: true,
      },
      any: {
        files: ['**/*.md','**/*.html','!**/_site/**', '_config.yml'],
        tasks: ['shell:jekyllBuild']
      },
      css: {
        files: ['a/**/*.scss'],
        tasks: ['sass','shell:jekyllBuild'],
        options: {
          spawn: false,
        }
      },
      scripts: {
        files: ['a/j/custom/*.js','a/js/plugins/*.js'],
        tasks: ['concat','uglify','shell:jekyllBuild'],
        options: {
          spawn: false
        }
      }
    }
  });

require('load-grunt-tasks')(grunt);
grunt.registerTask('default', ['sass','concat','uglify','grunticon','shell','watch']);
grunt.registerTask('staging', ['sass','concat','uglify','shell']);
};
