import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Films from "./components/Films";
import Header from "./Header";



const API_KEY = "27f4ba3a";

class App extends Component {

  state = {
    films: []
  }
  getFilm = async (e) => {
    const filmName = e.target.elements.filmName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}"`);

    const data = await api_call.json();
    this.setState({ films: data.Search });
    console.log(this.state.films.Search);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form getFilm={this.getFilm} />
        <Films films={this.state.films} />
      </div>
    );
  }
}

export default App;
