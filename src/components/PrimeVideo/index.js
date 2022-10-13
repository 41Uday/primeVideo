// Write your code here
import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(e => e.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(e => e.categoryId === 'COMEDY')
    return (
      <div className="card-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="img-1"
        />
        <div className="movies-container">
          <h1 className="h-1">Action Movies</h1>
          <MoviesSlider movieDetails={actionMovies} />
          <h1 className="h-1">Comedy Movies</h1>
          <MoviesSlider movieDetails={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
