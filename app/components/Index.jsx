var React = require('react');

var Tabs = require('Tabs');

var Index = React.createClass({

  render: function() {
    return (
      <div>
        <h1 className="page-title">Firefly front-end coding test primer</h1>

      <div className="c_tabsSwitcher">

        <ul role="tablist" className="m_tablist">
          <li id="tab-1" aria-controls="panel-1" aria-selected="true" role="tab" className="tablist__tab tablist__tab--is-active">C-3PO</li>
          <li id="tab-2" aria-controls="panel-2" aria-selected="false" className="tablist__tab">Darth Vadar</li>
          <li id="tab-3" aria-controls="panel-3" aria-selected="false" className="tablist__tab">BB-8</li>
          <li id="tab-4" aria-controls="panel-4" aria-selected="false" className="tablist__tab">Boba Fett</li>
        </ul>

        <div className="c_tabpanels">
          <div className="m_tabpanel m_tabpanel--is-active" id="panel-1" aria-labelledby="tab-1" aria-hidden="false" role="tabpanel">
            <svg aria-hidden="true"><use xlinkHref="#c3p0"></use></svg>
            <h2>C-3PO</h2>
            <p>2,983 ponts</p>
          </div>
          <div className="m_tabpanel" id="panel-2" aria-labelledby="tab-2" aria-hidden="true" role="tabpanel">
            <svg aria-hidden="true"><use xlinkHref="#vadar"></use></svg>
            <h2>Darth Vadar</h2>
            <p>2,676 ponts</p>
          </div>
          <div className="m_tabpanel" id="panel-3" aria-labelledby="tab-3" aria-hidden="true" role="tabpanel">
            <svg aria-hidden="true"><use href="#bb8"></use></svg>
            <h2>BB-8</h2>
            <p>1,292 ponts</p>
          </div>
          <div className="m_tabpanel" id="panel-4" aria-labelledby="tab-4" aria-hidden="true" role="tabpanel">
            <svg aria-hidden="true"><use href="#fett"></use></svg>
            <h2>Boba Fett</h2>
            <p>872 ponts</p>
          </div>
        </div>
      </div>
      <div className="spacer">
        
      </div>
      <div>
        <Tabs/>
      </div>
      </div>
    );
  }
});

module.exports = Index;
