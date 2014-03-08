# ForgeTech - Home
is the offical ForgeTech Website based on the mean.io - project. 
It uses the main components of this project, like NodeJS, Express, 
Passport, MongoDB, Mongoose and AngularJS, but exchanges 
Twitter-Bootstrap with Zurb-Foundation and adds own grunt-automation, 
testing and build-workflows. 

## CAUTION !!!
During the current-tasks the static server-model/configuration-data will be replaced with a data stored/received via mongoDB-Database. During this process missing/reformated model-classes will produce errors and a unstable system. Just be aware what you are doing!

## Current Tasks
    * User-Authentication: 90%
      * Add Signup-eMail-Notifications: 1%
    * Setup database configuration/mongoose models: 80%
    * Setup database configuration/mongoose controllers: 80%
    * Setup angular-application/database services: 60%
    * Setup database import and test-data: 90%
    * Setup testing story: 1%
    * Setup search-story: 1%
    * Setup socket.io: 1%
      * and make angular-services use socket.io connection: 1%
    
## Design Tasks
    * Favicon, Apple Icons, og:image: ?%
    * Contentpages: ?%
    * Parallax Components: ?%
    * Open Source Logos: ?%
      * All resolutions: ?%
      * Like highlight images: ?%
    * CSS Editing: ?%


## Used open-source projects:
  * --------------------------- BOWER ----------------------------------------
  * Gmaps - Defined as bower module in the [bower.json](./bower.json) file.
  * Parallax - Defined as bower module in the [bower.json](./bower.json) file.
  * Sass-Bootstrap-Glyphicons - Defined as bower module in the [bower.json](./bower.json) file.
  * Pace - Defined as bower module in the [bower.json](./bower.json) file.
  * Foundation-Icons - Defined as bower module in the [bower.json](./bower.json) file.
  * WYSIHTML5 - Defined as bower module in the [bower.json](./bower.json) file.
  * AngularJS - Defined as bower module in the [bower.json](./bower.json) file.
    * AngularJS-Cookies - Defined as bower module in the [bower.json](./bower.json) file. 
    * AngularJS-Resource - Defined as bower module in the [bower.json](./bower.json) file.
    * AngularJS-Local-Storage - Defined as bower module in the [bower.json](./bower.json) file.
    * AngularJS-Geo-Location - Defined as bower module in the [bower.json](./bower.json) file.
    * AngularJS-UI - Defined as bower module in the [bower.json](./bower.json) file.
      * AngularJS-UI-Router - Defined as bower module in the [bower.json](./bower.json) file.
  * JQuery - Defined as bower module in the [bower.json](./bower.json) file.

  * --------------------------- NPM ------------------------------------------
  * Express - Defined as npm module in the [package.json](./package.json) file.
  * Jade - Defined as npm module in the [package.json](./package.json) file.
  * Mongoose - Defined as npm module in the [package.json](./package.json) file.
  * Connect-Mongo - Defined as npm module in the [package.json](./package.json) file.
  * Connect-Flash - Defined as npm module in the [package.json](./package.json) file.
  * Passport - Defined as npm module in the [package.json](./package.json) file.
    * Passport-Local - Defined as npm module in the [package.json](./package.json) file.
    * Passport-Google-OAuth - Defined as npm module in the [package.json](./package.json) file.
    * Passport-Github - Defined as npm module in the [package.json](./package.json) file.
    * Passport-Facebook - Defined as npm module in the [package.json](./package.json) file.
    * Passport-Twitter - Defined as npm module in the [package.json](./package.json) file.
  * Socket.io - Defined as npm module in the [package.json](./package.json) file.
  * Imager - Defined as npm module in the [package.json](./package.json) file.
  * Notifier - Defined as npm module in the [package.json](./package.json) file.
  * Gzippo - Defined as npm module in the [package.json](./package.json) file.
  * Async - Defined as npm module in the [package.json](./package.json) file.
  * View-Helpers - Defined as npm module in the [package.json](./package.json) file.
  * Forever - Defined as npm module in the [package.json](./package.json) file.
  * Mean-Logger - Defined as npm module in the [package.json](./package.json) file.
  * Signet - CAUTION! Frontend-Dependency defined as Git-Repository in the [package.json](./package.json) file.
  * LoDash - Defined as npm module in the [package.json](./package.json) file.
  * Forage-Bootstrap - Defined as npm module in the [package.json](./package.json) file.
  * Forage-Indexer - Defined as npm module in the [package.json](./package.json) file.
  * Mongoose-Text-Search - Defined as npm module in the [package.json](./package.json) file.
  * Mongoose-Validator - Defined as npm module in the [package.json](./package.json) file.
  * Foundation - CAUTION! Frontend-Dependency as npm module in the [package.json](./package.json) file.

  * -------------------- Dev-Dependencies ----------------------------------
  * matchdep -  Defined as npm module in the [package.json](./package.json) file.
  * Bower -  Defined as npm module in the [package.json](./package.json) file.
  * Grunt - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Contrib - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Express-Server - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Usemin - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Svgmin - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Ngmin - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-RequireJS - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Mocha - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Regarde - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Open - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Concurrent - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Webfont - Defined as npm module in the [package.json](./package.json) file.
    * Grunt-Karma - Defined as npm module in the [package.json](./package.json) file.
  * RequireJS - Defined as npm module in the [package.json](./package.json) file.
  * Karma - Defined as npm module in the [package.json](./package.json) file.
    * Karma-RequireJS - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Jasmine - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Coffee-Preprocessor - Defined as npm module in the [package.json](./package.json) file.
    * Karma-HTML2JS-Preprocessor - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Script-Launcher - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Detect-Browser - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Firefox-Launcher - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Chrome-Launcher - Defined as npm module in the [package.json](./package.json) file.
    * Karma-PhantomJS-Launcher - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Opera-Launcher - Defined as npm module in the [package.json](./package.json) file.
    * Karma-Safari-Launcher - Defined as npm module in the [package.json](./package.json) file.
    * Karma-IE-Launcher - Defined as npm module in the [package.json](./package.json) file.

## Configuration
  See the [config](./config/) folder and especially the [project.js](./config/project.js) file.

## Quick Install (only for Ubuntu 12.04 LTS)
  
  ### Prerequisites

    1. Install Git:

          apt-get install git

       Important commands:

          * git status
          * git add --all
          * git commit --all
          * git push origin master
          * git clone https://github.com/example/.git
	  * git pull

    2. Install Node.js + npm:

        Instructions: https://rtcamp.com/tutorials/nodejs/node-js-npm-install-ubuntu/

    3. Install Ruby:

          * apt-get install ruby

       Install Compass:

          * gem-install compass

    4. Install MongoDB and run as service:

        Instructions: http://docs.mongodb.org/manual/tutorial/install-mongodb-on-
                      ubuntu/#run-mongodb

        Important commands:

          * mongo

    5. Install grunt-cli, bower, yeoman:

          * apt-get install -g grunt-cli
          * apt-get install -g bower
          * apt-get install -yeoman

       Install (Projectfolder)

          * npm install
          * bower install

       start grunt development - workflow:

          * grunt server

  This will compile all of the applications source-files, runs application in development-mode

  and opens it in a browser. In this mode auto-recompilation of project-sources,
  * [Coffee-Script as Javascript-Sources](http://coffeescript.org/) ( Currently not used! )
  * [Scss as Css-Sources](http://sass-lang.com/)
  * [Jade as HTML-Sources](http://sass-lang.com/)

  , are enabled. Also the server-application is automatically restarted if files in 
  [Server-Application Folder](./server) are changed.
    
## Root - Folder Structure
  * [Scss-Cache Folder](./.sass-cache/) - Temporary cached scss-files used for faster scss-recompilation during
    development-mode.
  * [Temporary Folder](./.tmp/) - All temporary files compiled from project-sources during 
    development-mode.
  * [Frontend-Application Folder](./app/) - All files which are needed for the frontend-application.
  * [Bower-Modules Folder](./bower_modules/) - All client-side javascript-dependencies installed via bower.
  * [Configuration Folder](./config/) - Configuration files shared between frontend- and server-application.
  * [Data Folder](./data/) - Contains files for initial application-data used in development-, testing- or live
    -enviroments.
  * [Node-Modules Folder](./node_modules/) - All server-side javascript-dependencies installed via npm.
  * [Server-Application Folder](./server/) - All files which are needed for the server-application.
  * [Testing Folder](./test/) - All files needed for testing the frontend-/server-application.

## Frontend-Application - Folder Structure.
  * [Assets Folder](./app/assets/) - Folder to contain frontend-application assets like images, audio and video.
  * [Fonts](./fonts/) - Folder to contain custom web-font files used in the frontend-application.
  * [Scripts Folder](./app/scripts/) - Containing all javascript-files of the frontend-application.
    * [AngularJS-Controllers Folder](./app/scripts/controllers/) - AngularJS controllers used to provide functionallity for
      AngularJS views.
    * [AngularJS-Directives Folder](./app/scripts/directives/) - AngularJS custom frontend-application directives used in
      frontend-application.
    * [AngularJS-Filters Folder](./app/scripts/filters) - AngularJS custom frontend-application filters used in frontend-
      application.
    * [Frontend-Services Folder](./app/scripts/services/) - AngularJS services connecting the frontend-application with
      server-application CRUD-Api.
    * [Frontend-Application File](./app/scripts/app.js) - File for initialization of the frontend-application.
    * [Frontend-Routes File](./app/scripts/routes.js) - Defines the routes of the angular frontend-application.
  * [Styles Folder](./app/styles/) - Containing all frontend-application css source-files.
    * [Components Folder](./app/styles/components/) - Folder to contain scss-components used by the frontend-application
      styles.
    * [Mixing Folder](./app/styles/mixings/) - Folder to contain custom scss-mixings to be used in frontend-application
      styles.
    * [Views Folder](./app/styles/views/) - Folder to contain scss style-files directly related to frontend-application
      views
    * [Angular-Styles File](./app/styles/_angular.scss) - Contains definitions for the styles automatically applied to
      forms controlled by AngularJs.
    * [Foundation-Settings File](./app/styles/_settings.scss) - File to override the standard settings of the foundation
      -framework styles.
    * [App-Styles File](./app/styles/app.scss) - Main Style-File including/importing and configuring all of 
      frontend-applications styles
  * [Views Folder](./app/views/) - Folder to contain all views precompiled for the use in the AngularJS frontend-application 

## Server-Application - Folder Structure
  * [Configuration Folder](./server/config/) - Containing configuration files used by the server-application
  * [Controllers Folder](./server/controllers/) - Containing controllers providing functionallity for the server-application.
  * [Models Folder](./server/models/) - Defining the data-models used for setting up the server-application database.
  * [Views Folder](./server/routes.js) - Contains the jade views, layouts and partials served directly from the server in live-
  enviroment ( Are also precompiled in development-enviroment ).
  * [Server File](./server/server.js) - The main-file of the server-application importing and including all modules related to the server-application.

## License
[Creative Commons Attribution-NonCommercial-NoDerivs 2.0](http://creativecommons.org/licenses/by-nc-nd/2.0/)
[Legal Code](http://creativecommons.org/licenses/by-nc-nd/2.0/legalcode)
