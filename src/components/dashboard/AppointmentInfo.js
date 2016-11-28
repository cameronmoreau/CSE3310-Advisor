import React, {Component} from 'react';
import {
  Well,
  Table,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

class AppointmentInfo extends Component {
  render() {
    const { appointment } = this.props;
    const student = appointment.student[0];

    return (
      <Well>
        <h3 className="text-center no-top">Student</h3>
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td>Advising Category</td>
              <td>{appointment.description}</td>
            </tr>
            <tr>
              <td>Advising Type</td>
              <td>{appointment.extraInfo}</td>
            </tr>
            <tr>
              <td>Student Name</td>
              <td>{ student.name }</td>
            </tr>
            <tr>
              <td>Student ID</td>
              <td>{student.id}</td>
            </tr>
            <tr>
              <td>UTA Email</td>
              <td></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{student.phone}</td>
            </tr>  			  
          </tbody>
        </Table>

        <FormGroup>
          <FormControl 
          componentClass="textarea" 
          placeholder="Comments"/>
        </FormGroup>

        <Button 
          bsStyle="primary"
          className="btn-raised"
          block
          onClick={this.submitStudent}>
          Submit
        </Button>
          
      </Well>
    );
  }
}

export default AppointmentInfo;