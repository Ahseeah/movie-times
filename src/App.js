import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './pages/MovieList'
import MovieInfo from './pages/MovieInfo'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="Movie/:movieID" component={MovieInfo} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
