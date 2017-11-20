import React from 'react';
import {Link} from 'react-router';
import { Segment, Button } from 'semantic-ui-react';
import toastr from 'toastr';
//import * as PingActions from '../../actions/PingServerAction';
import axios from 'axios';

class HomePage extends React.Component{


    render(){
        return(
            <Segment raised>
                 <h1>Ping page</h1>
                
                    <Button
                        onClick={onPingClick} 
                    > 
                        Ping
                    </Button>
                 
                 
          </Segment>
            
        );
    }

}

function onPingClick(event, data){
    toastr.info("ping...");
    axios.get('https://iotping.herokuapp.com/ping');
    
}

export default HomePage;

/*<div className="jumbotron">
                <h1>Admin page</h1>
                <p> React and redux web apps.. </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>*/