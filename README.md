Yer.js
======

Yer is a command line interface for managing front-end web development in +rehabstudio

__THIS IS STILL IN DEVELOPMENT__

Install
-------

**Please make sure you have [grunt.js](https://github.com/cowboy/grunt) installed as a global package**

Install the dependencies for yer.js and set up a local link for it so you can use it around your system

	npm install && npm link

Options
-------


Yer comes with the following options

###yer project &lt;project name&gt;

If your make a new folder for a project in a http capable folder, go into it via Terminal and enter __yer project__

Project name is optional, if left blank, the project name is assumed to be the name of the project directory.

This will generate the basic template of the following,

	/css
		/src
			norm.css
			layout.scss
			
	/js
		/node_modules
		/src
			app.js
		/lib
			jquery.min.js
		
		grunt.js
		package.json
			
	/img
	
	index.html
	.gitignore
	
yer wil then return a line of code for your to execute.

	cd js && npm install -d && grunt
	
This does the following,

 1) Go into your projects js directory

 2) Installs the grunt depenandcies of grunt-sass and grunt-css

 3) Executes the grunt command to compile the applications css
 
You are now good to go!
 
###yer host &lt;project name&gt;
 
This is a lazytool™ designed to generate a vhost quickly and easily. This currently only works on OSX and Linux ( GTFO windows ).
 
Project name is optional, if left blank, the project name is assumed to be the name of the project directory.
 
On completetion, your primary browser will open with the new relative host url.


grunt tasks
-----------

grunt 

grunt libs

grunt build
