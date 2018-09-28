import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        // console.log(this.props.title);
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        // console.log(this.props.poster);
        return (
            <img src={this.props.poster} />
        )
    }
}

export default Movie;