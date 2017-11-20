import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';



class AboutPage extends React.Component{
    
        render(){
            return(
                <Segment raised>
                <Container>
                    <Header><h2>About the application</h2></Header>
                    <p>Demo application to show data received to server from Arduino Wifi Board</p>
              </Container>
              </Segment>

            );
        }
    
    }
    
    export default AboutPage;