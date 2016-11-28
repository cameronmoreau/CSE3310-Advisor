import React, {Component, PropTypes} from 'react';
import {
  Grid, Col, Well, Button, FormGroup, FormControl, ListView, View, Text,
  ListGroup, ListGroupItem, Table, ControlLabel, ScrollView
} from 'react-bootstrap';

import AppointmentInfo from './AppointmentInfo';
import NextStudent from './NextStudent';

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
			queue: [],
			selected: null,
			advisor: null
		}
	}

	componentDidMount() {
		// Check valid session
		const advisor = localStorage.getItem('advisor');
		if(!advisor) {
      this.context.router.replace('login');
    } else {
			this.setState({advisor: JSON.parse(advisor)});
		}

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
	

  _nextStudent = () => {
    this.setState({ selected: 0 });
  }

  _logout = () => {
		const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: this.state.advisor.name})
    }
		apiCall('/logout', opts)
			.then(() => {
				localStorage.removeItem('advisor');
				this.context.router.replace('login');
			})
			.catch(e => alert(e.message));
  }


  render() {
		const { queue, selected, advisor } = this.state;

    return (

      <Grid className="Grid dashboard">
        <Col md={4} mdPull={0}>
          <Well>
            
            <h3 className="text-center no-top">Queue</h3>
              <ListGroup className="List">
							{ queue.map(item => (
								<ListGroupItem 
									key={item._id}
									onClick={this.viewStudent}>
									{item.student[0].name}
								</ListGroupItem>
							)) }
  			  	</ListGroup>
          </Well>
          
          <Well bsSize="small">

						{ advisor && 
							<p className="text-center">Hello, { advisor.name }</p>	
						}

            <Button 
							bsStyle="primary"
							className="btn-raised"
							block
							onClick={this._logout}>
							Log Out
						</Button>

	      	</Well>
        </Col>
        
				<Col md={7} mdPush={1} className="CurrentStudent">
					{
						selected !== null ? 
						<AppointmentInfo appointment={queue[selected]} />
						: <NextStudent onClick={this._nextStudent} />
					}
				</Col>
      </Grid>
    );
  }

	static contextTypes = {
    router: PropTypes.object.isRequired
  };
}

export default Dashboard;