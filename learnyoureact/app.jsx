var React = require('react');
var ReactDOM = require('react-dom');
var TodoBox = require('./views/index.jsx');

var data = document
    .getElementById('initial-data')
    .getAttribute('data-json');

data = JSON.parse(data);

ReactDOM.render(
    <TodoBox data={data} />,
    document.getElementById('app')
);
