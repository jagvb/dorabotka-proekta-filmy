import React from 'react';
import Movies from '../components/movies.js';
import Header from './header.js';
import Footer from './footer.js';
import Preload from '../components/preload.js';
import Search from '../components/Search/Search.js';
import Full from '../components/full.js';
const API_KEY ='8055eb6a';
class Main extends React.Component {
    state = {
        movies:[],
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s='naruto'`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({movies:data.Search})})
    }
    searchMovies = ( str, type = 'all', year) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}${str !== '' ? `&s=${str}` : ''}${type !== 'all' ? `&type=${type}` : ''}${year !== '' ? `&y=${year}` : ''}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({movies:data.Search})})
    }
    render() {
        const {movies} = this.state
        return <main className='main'>
            { <Search searchMovies = {this.searchMovies}/> }
             {
            
            movies ? (movies.length ? (<Movies movies = {this.state.movies}/>) : <Preload/>) : "Ничего не найдено"
    }
        </main>
    }
}
export default Main;