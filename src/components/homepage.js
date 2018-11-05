import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

// credit://https://kathleenhalme.com/explore/businesswoman-clipart-african-american/ 
// hr is for dotted line, styled under .css
//_blank takes the user to another tab without them exiting your page
//social links are on this page, styled under app.css for socail links
class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="Home-grid">
            <Cell col={12}>
            
            <img 
            src="https://kathleenhalme.com/images/businesswoman-clipart-african-american-3.jpg"
            className="avatar-img"
         />

         <div className="banner-text">
         <h1>Welcome To My Page</h1>
         
         <hr/>
<p>HTML | CSS | React | JavaScript | Bootstrap | API Keys</p>

         <div className="social-links">
         {/*<github */}
         <a href="https://github.com" rel="noopener noreferrer" target="_blank">
         <i className="fa fa-github-square"  aria-hidden="true" />
         </a>

        {/*<linkedin */}
         <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
         <i className="fa fa-linkedin-square"  aria-hidden="true" />
         </a>

          {/*<google */}
          <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
         <i className="fa fa-google"  aria-hidden="true" />
         </a>

          {/*<codelouisville */}
          <a href="https://codelouisville.org" rel="noopener noreferrer" target="_blank">
         <i className="fa fa-code louisville-square"  aria-hidden="true" />
         </a>

          {/*<meetup */}
          <a href="https://www.meetup.com/" rel="noopener noreferrer" target="_blank">
         <i className="fa fa-meetup"  aria-hidden="true" />
         </a>

          {/*<youtube */}
          <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
         <i className="fa fa-youtube-square"  aria-hidden="true" />
         </a>
         </div>
         
         </div>
            </Cell>
            </Grid> 
            </div>
        );
    }
}
export default Home;