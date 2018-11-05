import React from "react";

class Weather extends React.Component {
  render() {
    return (
      //use & operator to hide the props until submit button is pressed
      <div>
        {this.props.city &&
          this.props.country && (
            <p>
              Location: {this.props.city}, {this.props.country}
            </p>
          )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Condition: {this.props.description}</p>}
        {this.props.warning && <p>Warning: {this.props.warning}</p>}
      </div>
    );
  }
}

export default Weather;
