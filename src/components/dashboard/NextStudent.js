import React, {Component} from 'react';
import {
  Well,
  Button
} from 'react-bootstrap';

class NextStudent extends Component {
  render() {
    return (
      <Well>
        <h3>No Current Appointment</h3>
        <p>Press "next student" to start the next appointment</p>
        <Button 
          bsStyle="primary"
          className="btn-raised"
          block
          onClick={this.nextStudent}>
          Next Student
        </Button>
      </Well>
    );
  }
}

export default NextStudent;