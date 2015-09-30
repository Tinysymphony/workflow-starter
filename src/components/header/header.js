require('./header.scss');

var Header = React.createClass({
  render: function() {
    return (
      <div className="reHeader">
        <h1>Welcome webpack-starter</h1>
      </div>
    );
  }
});

module.exports = Header;
