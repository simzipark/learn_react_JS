import React from "react"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        const { location: { state } } = this.props;
        console.log(state);
        return <div>
            <div>
                <img src={state.medium_cover_image} alt={state.title} title={state.title} />
                <h1>{location.state.title}<span>{location.state.year}</span></h1>
                <p>{state.summary}</p>
                <ul>{state.genres.map((genre, idx) => (<li key={idx}>{genre}</li>))}</ul>
            </div>
        </div >;
    }
}

export default Detail;