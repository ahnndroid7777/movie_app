import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/**
 * state를 이용한 상태 관리 및 Component가 제공하는 다양한 Life-cycle APIs를 필요로 하지 않고
 * 단순히 상위 컴포넌트가 전달하는 props 속성을 이용해 요소를 만들고, 
 * 해당 요소를 리턴하는 stateless 타입의 행위 처리부에 대해서는
 * class가 아닌 function을 이용한 Dumb Component(= Functional Component)로 만들면 됨!!!
 * 
 * 즉, 단순히 요소를 리턴하는 목적만을 가진 컴포넌트에 대해서는
 * 똑똑한 컴포넌트를 상속받아 만들 필요없이, 상태없는 멍청한 컴포넌트로 대신해도 문제가 없다는 의미~
 * 
 * 여기서 Movie 컴포넌트는 상위 컴포넌트(App)로부터 props를 통해 title과 poster를 전달받고 있지만,
 * 일반 class형 컴포넌트와 달리 function을 이용한 Dumb 컴포넌트이므로
 * 보이지는 않으나 props를 통해 title과 poster 속성을 전달받게 됨!!!
 * 
 * @param {*} param0 
 */
function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

// Movie 컴포넌트(Dumb Component)에 props로 전달되는 poster 속성에 대한 validation 선언
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

/**
 * 여기서 MoviePoster 컴포넌트는 상위 컴포넌트(Movie)로부터 props를 통해 
 * poster 속성을 전달받았다고 간주할 수 있음!!!
 * 
 * @param {*} param0 
 */
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

// MoviePoster 컴포넌트(Dumb Component)에 props로 전달되는 poster 속성에 대한 validation 선언
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;