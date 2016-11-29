var React = require('react');
var Top_Navigation = require('Top_Navigation');

var Main = (props) => {
  return (
    <div>
      <Top_Navigation/>
      <div className="row">
        <div className="columns small-0 large-6 large-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
