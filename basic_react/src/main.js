var React = require('react');
var render = require('react-dom').render;
var App = require('./js/App'); //note the dot sytax for individual javascript files
var TodoList = require('./resources/data');
require('./css/style.css');

render(<App list={TodoList}/>, document.getElementById('example'));
