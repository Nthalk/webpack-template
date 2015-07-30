var React = require('react');

var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

module.exports = React.createClass({
  render() {
    return <Grid>
      <Row>
        <Col md={12}>
          <h3>About</h3>
          <p>Awesome!</p>
        </Col>
      </Row>
    </Grid>;
  }
});
