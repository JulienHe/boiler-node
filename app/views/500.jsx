var React = require('react');
var DefaultLayout = require('./layouts/default');

var internalServerError = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Error 500. Sorry dude!</div>
      </DefaultLayout>
    );
  }
});

module.exports = internalServerError;