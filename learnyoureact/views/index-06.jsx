// use variables for styles

var React = require('react');


var styles = {
    table: {
        border: '2px solid black'
    },
    tableContent: {
        border: '1px solid black'
    }
};


var TodoBox = React.createClass({

    render: function() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }

});


var TodoList  = React.createClass({

    render: function () {
        return (
            <div className="todoList">
                <table style={ styles.table }>
                    <tbody>
                        <Todo title="Shopping">Milk</Todo>
                        <Todo title="Hair cut">13:00</Todo>
                    </tbody>
                </table>
            </div>
        );
    }

});


var Todo = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {

        return (
            <tr>
                <td style={ styles.tableContent }><input type="checkbox" checked={ this.state.checked } onChange={ this.handleChange } /></td>
                <td style={ styles.tableContent }>{ this.props.title }</td>
                <td style={ styles.tableContent }>{ this.props.children }</td>
            </tr>
        );

    },

    getInitialState: function () {

        return {
            checked: false
        };;

    },

    handleChange: function (event) {

        this.setState(function(/*previousState, currentProps*/) {
            return {
                checked: event.target.checked
            };
        });

        console.log(this);
    }

});


var TodoForm = React.createClass({

    render: function () {
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
    }

});


module.exports = TodoBox;
