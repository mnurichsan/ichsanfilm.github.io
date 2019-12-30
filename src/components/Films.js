import React from 'react';
import { Link } from 'react-router-dom';

const Films = props => (
    <div className="container">
        <div className="row">
            {props.films.map((film) => {
                return (
                    <div className="col-md-4" style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                        <div className="film__box">
                            <img
                                className="film__box-img"
                                src={film.Poster}
                                alt={film.Title} />
                            <div className="film__text">
                                <h5 className="film__title">{film.Title.length < 20 ? `${film.Title}` : `${film.Title.substring(0, 25)}...`}</h5>
                                <p className="film__subtitle">Type : <span>{film.Type}</span></p>
                                <button className="film_buttons">
                                    <Link to={{
                                        pathname: `/film/${film.imdbID}`,
                                        state: { film: film.Title }
                                    }}>Lihat Film</Link>
                                </button>

                            </div>
                        </div>
                    </div>
                );
            })}

        </div>

    </div>
);

export default Films;