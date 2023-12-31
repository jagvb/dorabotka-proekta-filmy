import React, { Component } from "react";
import { useParams } from "react-router-dom";
import FullMovie from "./fullMovie";
import Preload from "./preload";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
const API_KEY ='8055eb6a';

class Full extends React.Component {
    state = {
        movie: [],
    }
    componentDidMount() {
        let { id } = this.props.params;
        this.fetchData(id);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot="full""`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({movie:data})})
    }
    fetchData = id => {
        // ...
    };

        render() {
            const {Actors,Awards, Country, Director, Genre,  Language, Metascore, Plot,  Poster, Rated, Ratings, Released, Response, Runtime, Title ,Type, Writer, Year, imdbID, imdRating, imdbVotes} = this.state.movie
    return (
        <div className="full">
            <FullMovie movie={this.state.movie} />
        </div>
    );
        }
}

export default withParams(Full);