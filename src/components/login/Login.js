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
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  render() {
    return (
      <Grid>
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
              disabled={this.state.username.length < 1}>
              Go Online
            </Button>
          </Well>
        </Col>
      </Grid>
    );
  }
}

export default Login;