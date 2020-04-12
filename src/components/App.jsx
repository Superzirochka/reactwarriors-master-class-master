import React from "react";
import { API_URL, API_KEY_3, API_KEY_4 } from "../utils/api";
//import { moviesData } from "../moviesData.js";
import MovieItem from "../components/MovieItem";
import MovieTabs from "../components/MovieTabs";
import Pagination from "../components/Pagination";

// function removeMovie(movie) {
//   const updateMovies = this.state.movies.filter(function (item) {
//     return item.id != movie.id;
//   });
//   console.log(updateMovies);
//   this.setState({
//     movies: updateMovies,
//   });
// }
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWach: [],
      sort_by: "popularity.desc",
      page: 25,
      total_pages: 500,
    };
  }
  // onChangePagination = (page) => {
  //   this.setState({
  //     page: page,
  //   });
  // };

  componentDidMount() {
    console.log("didMount");
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("did update");
    // console.log("prev", prevProps, prevState);
    // console.log("this", this.props, this.state);
    if (prevState.sort_by != this.state.sort_by) {
      console.log("call api");
      this.getMovies();
    }
    if (prevState.page != this.state.page) {
      console.log("call page");
      this.getMovies(this.state.page);
      console.log(this.state.page);
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-ru&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
        console.log(this.state.page);
      });
  };

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id != movie.id;
    });
    console.log(updateMovies);
    this.setState({
      movies: updateMovies,
    });
  };

  addMovieToWillWatch = (movie) => {
    //console.log(movie);
    //this.state.moviesWillWach.push(movie);
    const updateMoviesWillWatch = [...this.state.moviesWillWach, movie];
    //  updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWach: updateMoviesWillWatch,
    });
  };

  removeMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWach.filter(function (
      item
    ) {
      return item.id != movie.id;
    });
    this.setState({
      moviesWillWach: updateMoviesWillWatch,
    });
  };

  updateSortBy = (value) => {
    this.setState({ sort_by: value, page: 1 });
  };

  updatePages = (value) => {
    this.setState({
      page: value,
    });
  };

  render() {
    //  console.log(this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="col-12 mb-4">
              <MovieTabs
                sort_by={this.state.sort_by}
                updateSortBy={this.updateSortBy}
              />
            </div>

            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4">
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieToWillWatch={this.removeMovieToWillWatch}
                      // pagination={this.pagination}
                      onChangePagination={this.onChangePagination}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-3">
            <Pagination
              page={this.state.page}
              total_pages={this.state.total_pages}
              updatePages={this.updatePages}
            />
            <p>Will watch : {this.state.moviesWillWach.length}</p>
            <ul>
              {this.state.moviesWillWach.map((movie) => {
                return <li>{movie.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   console.log(moviesData);
//   return <div>Hello ReactWarriors!</div>;
// }

export default App;
