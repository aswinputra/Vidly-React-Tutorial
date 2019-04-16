import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./pagination";
import { paginate } from "../utility/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 5,
    currentPage: 1
  };

  handleDelete = movie => {
    // deleteMovie(movie._id);
    // const moviesList = this.state.movies;
    // this.setState(moviesList);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = movie => {
    console.log({ movie });
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log({ page });
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;

    const movies = paginate(allMovies, currentPage, pageSize);
    console.log({ movies });

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td key={movie.title}>{movie.title}</td>
                <td key={movie.genre.name}>{movie.genre.name}</td>
                <td key={movie.numberInStock}>{movie.numberInStock}</td>
                <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLiked(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
