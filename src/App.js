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

  /**
   * [ Life-Cycle APIs 주요 내용 메모 ]
   * 
   * 1) Life-Cycle API란?
   *    : React에 내장되어 특정 시점에 React에 의해 자동으로 불리게 되는 API
   *    : 컴포넌트의 행위별 생명주기에 따라 자동으로 진행되며, 개발자는 해당 생명주기를 이해하게 되면 적정 시점에 Life-Cycle API를 이용해 원하는 로직이 구동되도록 개발 가능
   * 
   * 
   * 2) 렌더링(Rendering) 관련 Life-Cycle APIs 실행 순서
   *    : componentWillMount() -> render() -> componentDidMount()
   * 
   *    e.g. 영화앱을 만들 경우, componentWillMount()가 불리는 시점에 API 서버로부터 영화 관련 데이터를 얻어오고
   *         render가 불리는 시점에 가져온 데이터를 이용해 화면을 렌더링 처리하도록 프로그래밍 가능
   * 
   * 
   * 3) 업데이트(Update) 관련 Life-Cycle APIs 실행 순서
   *    : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
   * 
   *    STEP 1. componentWillReceiveProps() : 부모 컴포넌트로부터 props를 전달받기 위한 수신 대기
   *    STEP 2. shouldComponentUpdate() : 만약 부모 컴포넌트로부터 전달된 props의 변경점이 존재하는지 판단
   *    STEP 3. componentWillUpdate() : 변경점이 존재할 경우 업데이트 준비
   *    STEP 4. render() : 변경분 데이터에 대한 렌더링 처리
   *    STEP 5. componentDidUpdate() : props 변경분에 대한 업데이트 완료
   */

  componentWillMount() {
    console.log('will mount.');    
  }

  componentDidMount() {
    console.log('did mount.');    
  }

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
