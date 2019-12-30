import React from 'react';

const Form = props => (

    <form onSubmit={props.getFilm} style={{ margingBottom: "2rem" }}>
        <input className="form__input" type="text" name="filmName" />

        <button className="form__button">Search</button>
    </form>
);

export default Form;