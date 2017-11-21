import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { Segment, Button } from 'semantic-ui-react';
import toastr from 'toastr';
import * as PingActions from '../../actions/PingServerAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class HomePage extends React.Component{

    constructor(props, context){
        super(props, context);
        this.onPingClick = this.onPingClick.bind(this);
    }

   

    onPingClick(event, data){
        const {pingsExecuted} = this.props;
        toastr.info("ping " + pingsExecuted);
        //store.dispatch(PingActions.ping);
        this.props.actions.pingRequest();
        
    
        //axios.get('https://iotping.herokuapp.com/ping');
        
    }

    render(){
       // const {ajaxCallsInProgress} = this.props;
        return(
            <Segment raised>
                 <h1>Ping page</h1>
                    <Button
                        onClick={this.onPingClick} 
                    >Ping 
                    </Button>
          </Segment>
            
        );
    }

   

}

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    pingsExecuted: PropTypes.number.isRequired
};


function mapStateToProps(state, ownProps){

    return {
        pingsExecuted: state.pingsExecuted
    };
}
function mapDispatchToProps(dispatch){
    return  {
       actions: bindActionCreators(PingActions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps) (HomePage);

/*<div className="jumbotron">
                <h1>Admin page</h1>
                <p> React and redux web apps.. </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>*/