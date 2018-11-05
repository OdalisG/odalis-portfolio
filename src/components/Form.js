import React from "react";

//textboxes and button are created
class Form extends React.Component{
    render() {
        return (
           <form onSubmit={this.props.getWeather}>
           <input type="text" name="city" placeholder="City..."/>
           <input type="text" name="country" placeholder="Country..."/>
           <button>Submit</button>
           </form>
  
        )
        
    }
    
}

      
    
export default Form;