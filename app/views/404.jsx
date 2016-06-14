var React = require('react');
var DefaultLayout = require('./layouts/default');

var pageNotFound = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Error 404. Where are you ?!</div>
      </DefaultLayout>
    );
  }
});

module.exports = pageNotFound;