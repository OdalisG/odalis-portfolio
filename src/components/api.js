import React, { Component } from "react";
import api from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "09e1a6da1b09fcd44d1759f167872506";

class Api extends Component {
  //a state is initialized. Information is only written to console when state is not present
  //to have output present, go to the weather.js
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    warning: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=09e1a6da1b09fcd44d1759f167872506`
      );

      console.log(api_call);
    } catch (error) {
      console.log(error);
    }

    // const data = await api_call.json();
  };

  //   getWeather22 = async e => {
  //     e.preventDefault();
  //     const city = e.target.elements.city.value;
  //     const country = e.target.elements.country.value;
  //     const api_call = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=09e1a6da1b09fcd44d1759f167872506`
  //     );
  //     const data = await api_call.json();

  //     //"if" is added so when submit is pressed without information, you shouldn't get an error message
  //     if (city && country) {
  //       console.log(data);
  //       this.setState({
  //         temperature: data.main.temp,
  //         city: data.name,
  //         country: data.sys.country,
  //         humidity: data.main.humidity,
  //         description: data.weather[0].description
  //       });
  //     } else {
  //       this.setState({
  //         temperature: undefined,
  //         city: undefined,
  //         country: undefined,
  //         humidity: undefined,
  //         description: undefined,
  //         warning: "NO DATA FOUND. PLEASE ENTER CORRECT VALUES!!!"
  //       });
  //     }
  //   };

  render() {
    //using props for the form so the button can be called
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          warning={this.state.warning}
        />
      </div>
    );
  }
}

export default Api;
