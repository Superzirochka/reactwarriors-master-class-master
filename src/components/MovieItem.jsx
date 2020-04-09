import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      willWatch: false,
    };
  }

  render() {
    // const MovieItem = (props) => {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieToWillWatch,
    } = this.props;
    return (
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flrex justify-content-between align-item-center">
            <p className="mb-0">Raiting :{movie.vote_average}</p>

            <button onClick={removeMovie.bind(this, movie)} className="mr-4">
              Delete movie
            </button>
            {this.state.willWatch === true ? (
              <button
                type="button"
                className="btn btn-success ml-4"
                onClick={() => {
                  this.setState({
                    willWatch: false,
                  });
                  //   handleLike(movie);
                  removeMovieToWillWatch(movie);
                }}
              >
                REmove Will Watch
              </button>
            ) : (
              <button
                type="button"
                className={this.state.like ? "btn--like" : " "}
                className="btn btn-secondary ml-4"
                onClick={() => {
                  this.setState({
                    willWatch: true,
                  });
                  //handleLike();
                  addMovieToWillWatch(movie);
                }}
              >
                Add Will Watch
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  // }
}

export default MovieItem;
