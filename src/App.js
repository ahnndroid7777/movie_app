import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

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

  // Mutate 대상이 되는 state 속성 선언
  state = {}
 
  /**
   * [ 비동기 웹 서비스 구현 - STEP 1 ]
   * componentDidMount() 함수가 불리는 시점에 _getMovies() 함수 호출
   */
  componentDidMount() {
    this._getMovies();
  }

  /**
   * [ 비동기 웹 서비스 구현 - STEP 2 ]
   * 비동기 구현의 가장 중요 부분 => async / await 구문 활용부
   * 
   * _getMovies() 함수는 비동기 함수로써 호출되며,
   * _callApi() 함수는 서버로부터 영화 목록 데이터를 조회해오는 API인데 await로 설정되어 있기 때문에
   * 해당 API의 조회 결과가 반환 완료될 때까지 setState() 함수는 실행되지 않게 됨.
   */
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      // movies: movies (본 컴포넌트의 state에 _callApi() 함수를 통해 받아온 데이터를 movies 속성에 set)
      movies
    })
  }

  /**
   * [ 비동기 웹 서비스 구현 - STEP 3 ]
   * 서버로부터 영화 목록을 받아오는 API 요청/응답부
   */
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(res => res.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
  }

  /**
   * 최초 페이지 렌더링 또는 state의 속성 변화가 발생하여 render() 함수가 콜백 호출되면
   * render() 함수에서 _renderMovies() 함수를 호출하여 서버로부터 가져온 영화 정보를 출력
   */
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie);
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })

    return movies;
  }

  render() {
    /** 
     * state 내에 movies 속성이 존재하지 않는 경우, Loading... 문자열 출력
     * state 내에 movies 속성이 존재하는 경우, _renderMovies 함수를 호출하여 렌더링
     */
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
