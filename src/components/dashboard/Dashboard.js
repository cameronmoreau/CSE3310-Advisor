import React, {Component} from 'react';
import {
  Grid, Col, Well, Button, FormGroup, FormControl, ListView, View, Text,
  ListGroup, ListGroupItem, Table, ControlLabel, ScrollView
} from 'react-bootstrap';

import '../../css/Dashboard.css';
import { apiCall } from '../../services/api';

import Pusher from 'pusher-js';
Pusher.logToConsole = true;

var pusher = new Pusher('0caec0623dbc96e698fc', {
  encrypted: true
});

class Dashboard extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			queue: []
		}
	}

	componentDidMount() {
    apiCall('/appointments')
      .then(appointments => {
        for(const a of appointments) {
					console.log(a);
          this.state.queue.push(a);
        }
        this.forceUpdate();
      })
      .catch(e => alert(e.message));


		var channel = pusher.subscribe('kiosk');
    
    channel.bind('my_event', function(data) {
      alert(data.message);
    });

    channel.bind('new_appointment', data => {
      this.state.queue.push(data);
      this.forceUpdate();
    })

    channel.bind('remove_appointment', data => {
      const { queue } = this.state;
      
      for(var i in queue) {
        if(queue[i]._id === data._id) {
          this.state.queue.splice(i, 1);
          this.forceUpdate();
          return;
        }
      }
    })

    channel.bind('update_appointment', data => {
      const { queue } = this.state;
      
      for(var i in queue) {
        if(queue[i]._id === data._id) {
          this.state.queue[i] = data;
          this.forceUpdate();
          return;
        }
      }
    })
  }
	

  nextStudent (){
    
  }

  viewStudent (){

  }

  submitStudent (){
    
  }

  logOut (){

  }


  render() {
		const { queue } = this.state;

    return (

      <Grid className="Grid">
        <Col md={4} mdPull={0} className="Queue">
          <Well>
            
            <h3 className="text-center">Queue</h3>
              <ListGroup className="List">
							{ queue.map(item => (
								<ListGroupItem 
									key={item._id}
									onClick={this.viewStudent}>
									{item.student[0].name}
								</ListGroupItem>
							)) }
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