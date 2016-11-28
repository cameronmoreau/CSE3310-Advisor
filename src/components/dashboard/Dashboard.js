import React, {Component} from 'react';
import {
  Grid, Col, Well, Button, FormGroup, FormControl, ListView, View, Text,
  ListGroup, ListGroupItem, Table, ControlLabel, ScrollView
} from 'react-bootstrap';

import '../../css/Dashboard.css';

class Dashboard extends Component {

  nextStudent (){
    
  }

  viewStudent (){

  }

  submitStudent (){
    
  }

  logOut (){

  }


  render() {
    return (

      <Grid className="Grid">
        <Col md={4} mdPull={0} className="Queue">
          <Well>
            
            <h3 className="text-center">Queue</h3>
              <ListGroup className="List">
    			<ListGroupItem onClick={this.viewStudent}> Student 1 </ListGroupItem>
    			<ListGroupItem onClick={this.viewStudent}> Student 2 </ListGroupItem>
    			<ListGroupItem onClick={this.viewStudent}> Student 3 </ListGroupItem>
    			<ListGroupItem onClick={this.viewStudent}> Student 4 </ListGroupItem>
  			  </ListGroup>
  			  
  			  <Button 
	            bsStyle="primary"
	            className="btn-raised"
	            block
	            onClick={this.nextStudent}>
	            Next Student
	          </Button>

          </Well>
          
          <Well bsSize="small">

            <Button 
	          bsStyle="primary"
	          className="btn-raised"
	          block
	          onClick={this.logOut}>
	          Log Out
	        </Button>

	      </Well>
        </Col>
        
        <Col md={7} mdPush={1} className="CurrentStudent">
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
        </Col>
      </Grid>
    );
  }
}

export default Dashboard;