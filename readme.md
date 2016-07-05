React Based Tutorials for Training Purposes

One needs to have Node/NPM installed on their machines, preferably linux/mac.
To Install Node/NPM on MAC OS/LINUX :

install homebrew
http://brew.sh/  (For linux, use http://linuxbrew.sh/)

then once homebrew is installed, type :

brew install node

(optional)
To manage different versions of node, install NVM (node version manager) :

npm install -g nvm

(optional - end)

Install webpack and webpack-dev-server node modules installed globally for all trainings/projects :

npm install webpack webpack-dev-server -g


/** Build process for react_basic codebase **/

Write the below mentioned commands in the terminal after navigating to basic_react/ folder:

npm install

this above command will install all dependencies mentioned in package.json file.

Next to run the project :

npm start

This command will start a local webserver pointing to http://localhost:8111/
and load the index file of the project(index.tmpl.html).
It will also reload the page upon changes in code.

/** END **/
