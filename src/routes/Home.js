import React from "react"
import axios from "axios"
import Movie from "../components/Movie"

class Home extends React.Component {

    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        //axios : 브라우저와 http 통신을 하기 위한 라이브러리
        //await : axios 호출이 완료될 때 까지 기다려야 한다. 이 떄 await 키워드는 반드시 async 키워드와 함께 써야 함

        //https://yts.mx/api#list_movies
        //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
        //console.log(movies.data.data.movies);
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });

    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;

        return <div>
            {/* movie=>() 로 할 땐 return 안해도 되고, {}로 감싸면 return statement가 반드시 있어야 함 */}
            {/* {isLoading ? "is now loading...🔥" : movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} medium_cover_image={movie.medium_cover_image} />
            })} */}
            {isLoading ? "Now Loading...🔥" : movies.map(movie => (
                <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} medium_cover_image={movie.medium_cover_image} genres={movie.genres} />
            ))}
        </div>;
    }
}

export default Home;
