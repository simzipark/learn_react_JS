import React from 'react'
import axios from 'axios'

// react automatically excutes all class component's render method
// And class component has "state" that function component has not
class App3 extends React.Component {
    state = {
        cnt: 0,
        test: [],
        movies: []
    };

    add = () => { this.setState(current => ({ cnt: current.cnt + 1 })); };
    minus = () => { this.setState(current => ({ cnt: current.cnt - 1 })); };

    getMovies = async () => {
        //axios : 브라우저와 http 통신을 하기 위한 라이브러리
        //await : axios 호출이 완료될 때 까지 기다려야 한다. 이 떄 await 키워드는 반드시 async 키워드와 함께 써야 함

        // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
        // console.log(movies.data.data.movies);
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        // console.log(movies);

        this.setState(
            { test: movies }
        );
        console.log("test : " + this.state.test);
        this.setState({ movies });
        console.log("movies : " + this.state.movies);
    }

    componentDidMount() {
        this.getMovies();

    }
    render() {
        return (
            <div>
                <div>movies.map()</div>
                <h1>cnt is "{this.state.cnt}"</h1>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </div>

        )
    }
}

export default App3;