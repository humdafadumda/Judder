module.exports = function (grunt) {

  grunt.initConfig({
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: "public/scripts/judder/templates/",
          templateName: function (sourceFile) {
            return sourceFile.replace("public/scripts/judder/templates/", '');
          }
        },
        files: {
          "public/scripts/judder/templates.js": "public/scripts/judder/templates/**/**/*.hbs"
        }
      }
    },
    watch: {
      files: "/public/scripts/judder/templates/**/**/*.hbs",
      tasks: "emberTemplates"
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', "emberTemplates");
};