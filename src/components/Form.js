import React from 'react';

const Form = props => (
    <div className="container">
        <form onSubmit={props.getFilm} style={{ margingBottom: "2rem" }} className="form-inline">

            <div className="form-group mx-sm-3 mb-2">
                <label class="sr-only">Cari Film</label>
                <input className="form-control input-sm" type="text" name="filmName" />
            </div>
            <div>
                <button type="submit" class="btn btn-dark mb-2">Cari Film</button>
            </div>
        </form>
    </div>
);

export default Form;