/*global module:false*/
/*global grunt:false*/
module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    pkg: {
        title: "<%= project %>"
    },
    sass: {
        dist: {
            src: ['../css/src/*.css','../css/src/*.scss'],
            dest: '../css/layout.css'
        }
    },
    libs : {
      dist : {
          src : 'lib/*.js',
          dest : 'dev.<%= project %>.libs.js'
      }
    },
    concat : {
        dist : {
            src : ['<config:libs.dist.dest>','lib/*.js'],
            dest : '<%= project %>.min.js'
        }
    },
    min : {
        dist : {
            src : '<config:concat.dist.dest>',
            dest : '<%= project %>.min.js'
        }
    },
    cssmin: {
        dest: {
            src: '<sass:dist.dest>',
            dest: '../css/layout.css'
        }
    }
  });

  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-sass');

  // Libs command, compresses and builds all library files
  grunt.registerMultiTask('libs', 'Minify library files with UglifyJS.', function() {
    var files = grunt.file.expandFiles(this.file.src),
        banner = grunt.task.directive(files[0], function() { return null; });

    if (banner === null) {
      banner = '';
    } else {
      files.shift();
    }

    var max = grunt.helper('concat', files, {separator: this.data.separator}),
      min = banner + grunt.helper('uglify', max, grunt.config('uglify'));

    grunt.file.write(this.file.dest, min);

    if (this.errorCount) { return false; }

    grunt.log.writeln('File "' + this.file.dest + '" created.');
    grunt.helper('min_max_info', min, max);
  });


  // Default command
  grunt.registerTask('default','sass cssmin libs');

  // Build full src
  grunt.registerTask('build','sass cssmin concat min');

};

