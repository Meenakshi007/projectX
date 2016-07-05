var React = require('react');

var SearchBox = React.createClass({
    getInitialState: function() {
      return {
        searchText: 'yo!'
      };
    },
    updateTextBox: function(e) {
      this.setState({
        searchText: e.target.value
      })
    },
    render : function(){
      return (
        <div>
        <input type='text'
               value={this.state.searchText}
               onChange = {this.updateTextBox}/>
        </div>
      );
    }
});

module.exports = SearchBox;
