import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Peanuts",
    poster: "http://img.insight.co.kr/static/2017/05/12/700/VXMV018Y66079T89DPR8.jpg"
  },
  {
    title: "Bourne",
    poster: "https://d3snydf0tiej89.cloudfront.net/wp-content/uploads/2013/01/bourne_identity1.jpg"
  },
  {
    title: "Avengers",
    poster: "https://fandomwire.com/wp-content/uploads/2018/05/marvel-avengers-4-title.jpg"
  },
  {
    title: "John Wick",
    poster: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzAxXFxcLzE5MjIwNDAzXFxcL2pvaG4td2ljay0zLTEwMjR4NTc2LmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5qb2UuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9qb2VcXFwvbm8taW1hZ2UucG5nP3Y9NVwifSIsImhhc2giOiI1MjcxMjFmMGQ1OWQ4ZTc2ZDE2OTc0MGQ5NzJjOWQ5MDY1ZDVlZmFiIn0=/john-wick-3-1024x576.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
