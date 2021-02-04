import React, { Component } from 'react'
import { CardList } from './Components/card-list/card-list.component'
import { SearchBox } from './Components/search-box/search-box.component'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3718ff3b3e5b3155fdbdfbeab7134a00&page=1',
      {
        method: 'GET',
        headers: {
          //'access-control-allow-origin': '*',
          //'Content-type': 'application/json; charset=UTF-8',
          // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          // // 'Access-Control-Allow-Headers':
          //   'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        this.setState({
          movies: data.results,
        })
      })
  }

  handleChange = (e) => this.setState({ searchField: e.target.value })

  render() {
    const { movies, searchField } = this.state
    const filteredmovies = movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchField.toLowerCase()),
    )
    return (
      <div className="App">
        <h1>Movies of All Times</h1>
        <SearchBox
          placeholder="Search movies"
          handleChange={this.handleChange}
        />
        <CardList data={filteredmovies} />
      </div>
    )
  }
}

export default App
