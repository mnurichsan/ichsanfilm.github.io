import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header";


const API_KEY = "27f4ba3a";

class Film extends React.Component {
    state = {
        filmPilih: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.film;
        const req = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}"`);
        const res = await req.json();
        this.setState({ filmPilih: res.Search[0] })
        console.log(this.state.filmPilih);

    }
    render() {
        console.log(this.props);
        const film = this.state.filmPilih;
        return (

            <div className="container">
                <Header />
                {this.state.filmPilih.length !== 0 &&
                    <div className="active-film" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                        <img className="active-film__img" src={film.Poster} alt={film.Title}></img>
                        <h3 className="active-film__title">{film.Title}</h3>
                        <h4 className="active-film__publisher">Type : <span>
                            {film.Type}</span>
                        </h4>
                        <p className="active-film__publisher">Tahun : <span>{film.Year}</span></p>
                        <button className="active-film__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Film;