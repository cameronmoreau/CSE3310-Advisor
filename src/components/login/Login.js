import React, {Component} from 'react';
import {
  Grid,
  Col,
  Well,
  Button,
  FormGroup,
  FormControl
} from 'react-bootstrap';

import '../../css/Login.css';

class Login extends Component {

  gotoDashboard = () => {
    this.props.navigator.push({
      id: 'Dashboard'
    });
  }

  render() {
    return (

      <Grid className="Grid">
        <Col md={6} mdOffset={3} className="login-box">
          <Well>
            <h3 className="text-center">MavAdmin</h3>

            <FormGroup>
              <FormControl
                onChange={e => this.setState({username: e.target.value})}
                type="text"
                placeholder="Advisor Username" />
            </FormGroup>

            <Button 
              bsStyle="primary"
              className="btn-raised"
              block
              onClick={this.gotoDashboard}>
              Go Online
            </Button>
          </Well>
        </Col>
      </Grid>

    );
  }
}

export default Login;