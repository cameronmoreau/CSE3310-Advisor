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
    return (
      <Well>
        <h3 className="text-center">Student</h3>
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td> Advising Category </td>
              <td> "Drop/Add/Swap/" </td>
            </tr>
            <tr>
              <td>Student ID</td>
              <td> "1000" </td>
            </tr>
            <tr>
              <td>Degree Program</td>
              <td> "Computer Science" </td>
            </tr>
            <tr>
              <td>UTA Email</td>
              <td> "first.last@mavs.uta.edu" </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td> "123-456-7890" </td>
            </tr>
              <tr>
              <td> Key </td>
              <td> Value </td>
            </tr>
            <tr>
              <td> Key </td>
              <td> Value </td>
            </tr>
            <tr>
              <td> Key </td>
              <td> Value </td>
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