'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');


var BootsPlateGenerator = yeoman.generators.Base.extend({
    promptUser: function () {
        var done = this.async();


        var prompts = [{
            name: 'appName',
            message: 'What is your sites name ?'
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    },

    scaffoldFolders: function () {
        this.mkdir('app');
        this.mkdir('app/css');
        this.mkdir('app/js');
        this.mkdir('app/fonts');
        this.mkdir('app/img');
    },


    copyMainFiles: function () {
        var context = {
            site_name: this.appName
        };

        this.copy("404.html", "app/404.html");
        this.copy("favicon.ico", "app/favicon.ico");
        this.copy("robots.txt", "app/robots.txt");
        this.template("index.html", "app/index.html", context);

        this.copy("css/main.css", "app/css/main.css");
        this.copy("css/normalize.css", "app/css/normalize.css");
        this.copy("js/modernizr-2.6.2.min.js", "app/js/modernizr-2.6.2.min.js");
    },

    fireBower: function () {

        this.copy("_.bowerrc", ".bowerrc");
        this.bowerInstall('bootstrap', {
            save: true
        });

    },


});


module.exports = BootsPlateGenerator;