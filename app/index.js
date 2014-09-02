'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');


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
        this.mkdir(this.appName);
        this.mkdir(this.appName + '/css');
        this.mkdir(this.appName + '/js');
        this.mkdir(this.appName + '/fonts');
        this.mkdir(this.appName + '/img');
    },


    copyMainFiles: function () {
        this.copy("404.html", this.appName + "/404.html");
        this.copy("favicon.ico", this.appName + "/favicon.ico");
        this.copy("robots.txt", this.appName + "/robots.txt");
        this.copy("index.html", this.appName + "/index.html");
    },

});

this.bowerInstall(bootstrap.css, { save: true });
module.exports = BootsPlateGenerator;