import React from "react"

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
        year: 'none',
    }
handleKey = (event) => {
    if (event.key === 'Enter') {
        this.props.searchMovies(this.state.search, this.state.type, this.state.year)
        console.log(this.state.year)
    }
}
handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}),() => {
        this.props.searchMovies(this.state.search, this.state.type, this.state.year)
    })
}

render () {
    return <div className="search">
        <div className="search__input">
            <input
            className="search__input "
            placeholder="Поиск"
            type="search"
            value={this.state.search}
            onChange={(e)=>this.setState(() => ({search: e.target.value}))}
            onKeyDown={this.handleKey}
            />
            <button onClick={() => this.props.searchMovies(this.state.search, this.state.type)}> Найти </button>
            <div className="type">
                <div className="labels">
                <label for='radio-1'>
                    <input
                    id='radio-1'
            className="type--input"
            type="radio"
            name="type"
            data-type='all'
            onChange={this.handleFilter}
            checked={this.state.type === 'all'}
            />
            <span>Все</span>
                        </label>
                        <label>
                        <input
            className="type--input"
            type="radio"
            name="type"
            data-type='movie'
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'}
            />
                        <span>Фильмы</span>
                        </label>
                        <label>
                        <input
            className="type--input"
            type="radio"
            name="type"
            data-type='series'
            onChange={this.handleFilter}
            checked={this.state.type === 'series'}
            />
                        <span>Сериалы</span>
                        </label>
                        <label>
                        <input
            className="type--input"
            type="radio"
            name="type"
            data-type='episode'
            onChange={this.handleFilter}
            checked={this.state.type === 'episode'}
            />
            <span>Эпизоды</span>
                        </label>
                        </div>
            </div>

        </div>
<div className="filters">
    Фильтрация по году: 
    <input className="year--input" type="number"  onChange={(e)=>this.setState(() => ({year: e.target.value}))}onKeyDown={this.handleKey} />
</div>
    </div>

}
}

export default Search