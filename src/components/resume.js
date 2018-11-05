import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
            <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>

            <h2 style={{paddingTop: '1em'}}>Odalis</h2>
            <h4 style={{color: 'grey'}}>Computer Repair Tech</h4>
            <hr style={{borderTop: '3px solid #8333fb2', width: '50%'}}/>
            <p><b>OBJECTIVE</b></p>
<p>To obtain a position where my knowledge and skills will be fully utilized. To keep current, to provide and continue focusing on the quality and urgency of delivering a great performance.
</p>

  <hr style={{borderTop: '3px solid #8333fb2', width: '50%'}}/>
  <b>EDUCATION</b>
  <p>Computer Science | 2000-2002 | Louisville Technical Institute | Associates Degree</p>
  <p>Information Technology | 2012-2014 | Sullivan University | Associates Degree</p>
	

            </Cell>
            <Cell className ='resume-right-col' col={8}> 
            <h4 style={{color: 'black'}}>CERTIFICATIONS</h4>
            <p>A+,IBM, Dell, HP </p>
            <hr style={{borderTop: '3px solid #8333fb2', width: '50%'}}/>
            <h4 style={{color: 'black'}}>EXPERIENCE</h4>
            <p>  UPS-SCS | 2000-Present as a Computer Repair Tech
·	Experienced with Microsoft Word, Excel and social media platforms
·	Testing 
·	Troubleshooting
·	Repairing
·	Triage 
·	Running WIP reports
·	Hourly counts
·	Training
·	Type 44 WPM
·	Bilingual (Spanish/English)
·	Backup Lead 
</p>
<hr style={{borderTop: '3px solid #8333fb2', width: '50%'}}/>
<h4 style={{color: 'black'}}>SKILLS</h4>
<p>HTML - Basic</p>
<p>CSS - Basic</p>
<p>React - Basic</p>
<p>JavaScript - Basic</p>
<p>Visual Studio - Basic</p>
<p>PHP- Intermediate</p>



            
            </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume;