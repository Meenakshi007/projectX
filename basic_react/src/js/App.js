var React = require('react');
var SearchBox = require('./SearchBox');

var  App  = React.createClass({
  render: function() {
    console.log(this.props.list);
    return (
      <div>
      <SearchBox/>
      <ul className="todo__list">
      {this.props.list.map(function(item) {
        return(<li className="todo__item"
          key={item.id}
          data-id={item.id}>
          {item.text}</li>);
      })}
      </ul>
      </div>
    );
  }
});

module.exports = App;
