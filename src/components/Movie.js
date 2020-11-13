import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({ id, title, year, summary, medium_cover_image, genres }) {
    return (
        <div>
            <Link to={{
                pathname: "./about",
                state: {
                    year,
                    title,
                    summary,
                    medium_cover_image,
                    genres
                }
            }}>
                <div className="movie__data">
                    <img src={medium_cover_image} alt={title} title={title} />
                    <h3 className="movie__title">{title}<span className="movie__year">({year})</span></h3>
                    <ul className="movie__genres">{genres.map((genre, idx) => (<li className="movie__genre" key={idx}>{genre}</li>))}</ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;