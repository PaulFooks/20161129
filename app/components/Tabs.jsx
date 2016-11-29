var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
     return {
        activeStyle: 'm_tabpanel',
        points: []
     };
  },

  componentWillMount: function(){
    console.log('componentWillMount', 'Load xml', 'Parse into JSON');
    
    // load xml here

    // parse into JSON
  },

  handleClick: function(event){
    console.log(event.target.id);
    if (this.state.activeStyle === 'm_tabpanel--is-active'){
       this.setState({activeStyle: 'm_tabpanel'});
    } else {
       this.setState({activeStyle: 'm_tabpanel m_tabpanel--is-active'});
    }

    // set class 'm_tabpanel m_tabpanel--is-active' on active HTMLSpanElement

    // set class 'm_tabpanel' to hide all inactive
  },

  handleChange: function(event){
    console.log(event.target.id);
    
    // set text on 'tab-no'
  },


  render: function() {

    var points = [
      {"for":"CP3PO","url":"/profiles/c3p-0","total":2983, "icon":"#c3p0"},
      {"for":"Darth Vadar","url":"/profiles/darth-vadar","total":2676, "icon":"#vadar"},
      {"for":"BB-8","url":"/profiles/bb-8","total":1292, "icon":"#bb8"},
      {"for":"Boba Fett","url":"/profiles/boba-fett","total":872, "icon":"#fett"}
    ];

    return (

      <div className="c_tabsSwitcher">
      <ul role="tablist" className="m_tablist">
        {points.map((character, index) => (
          <li key={index} id={'tab-' + index} aria-controls={'tab-' + index} aria-selected="false" className="tablist__tab" onClick={this.handleClick} >{character.for}</li>
        ))}
      </ul>

      <div className="c_tabpanels">
          {points.map((character, index) => (
            <div key={index} id={'panel-' + index} className={this.state.activeStyle}  aria-labelledby="tab-1" aria-hidden="false" role="tabpanel">
              <svg aria-hidden="true"><use xlinkHref={character.icon}></use></svg>
              <input type="text" name="name" placeholder={character.for} onChange={this.handleChange}></input>
              <p>{character.total} points</p>
            </div>
        ))}

          {/*
          <div className="m_tabpanel m_tabpanel--is-active" id="panel-1" aria-labelledby="tab-1" aria-hidden="false" role="tabpanel">
            <svg aria-hidden="true"><use xlinkHref="#c3p0"></use></svg>
            <h2>C-3P0</h2>
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
          */}

        </div>

      </div>
    );
  }
});

module.exports = Tabs;

