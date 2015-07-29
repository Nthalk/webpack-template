var React = require("react");

var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var CollapsibleNav = require("react-bootstrap/lib/CollapsibleNav");
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render(){
    return <Navbar brand="Wierd" toggleNavKey={0} fluid={true}>
      <CollapsibleNav eventKey={0}>
        <Nav navbar right>
          <NavItem href={this.context.router.makeHref("/about")}>About</NavItem>
          <NavItem href={this.context.router.makeHref("/widgets")}>Widgets</NavItem>
        </Nav>
      </CollapsibleNav>
    </Navbar>;
  }
});
