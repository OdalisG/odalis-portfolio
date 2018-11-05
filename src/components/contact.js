import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemAction, ListItemContent } from 'react-mdl'
class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
            <Grid className='contact-grid'>
            <Cell col={6}>
            <h1>Odalis</h1>
       <img     
 src="https://kathleenhalme.com/images/businesswoman-clipart-african-american-3.jpg"
 className="avatar-img"/>
           
            <p>Please don't hesitate to call or send me an email. Thanks.</p>
            </Cell>
           
            <Cell col={6}>
            <h2>CONTACT ME</h2>
            <hr/>
            <div className="contact-list">
              <List>
           <ListItem>
    <ListItemContent icon="person" >Odalis</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '15px'}}>
  <i className="fa fa-phone-square" aria-hidden="true"/>
  (555)555-5555
  </ListItemContent>

  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '15px'}}>
  <i className="fa fa-fax" aria-hidden="true"/>
  (123)456-7890</ListItemContent> 

  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '15px'}}>
  <i className="fa fa-envelope-square" aria-hidden="true"/>
  Odalis@gmail.com</ListItemContent> 
</ListItem> </List>
</div>
            
            </Cell>       
                   </Grid>
                   
    </div>
        );
    }
}
export default Contact;