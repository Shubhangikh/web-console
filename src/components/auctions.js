import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuctionsTable from "./auctionsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getAuctions, deleteAuction } from "../services/fakeAuctionService";
import { getGenres } from "../services/fakeGenreService";
import SearchBox from "./searchBox";
import _ from "lodash";

class Auctions extends Component {
  state = {
    auctions: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ auctions: getAuctions(), genres });
  }

  handleDelete = auction => {
    const auctions = this.state.auctions.filter(m => m._id !== auction._id);
    this.setState({ auctions });

    deleteAuction(auction._id);
  };

  handleLike = auction => {
    const auctions = [...this.state.auctions];
    const index = auctions.indexOf(auction);
    auctions[index] = { ...auctions[index] };
    auctions[index].liked = !auctions[index].liked;
    this.setState({ auctions });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      auctions: allAuctions
    } = this.state;

    let filtered = allAuctions;
    if (searchQuery)
      filtered = allAuctions.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allAuctions.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const auctions = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: auctions };
  };

  render() {
    const { length: count } = this.state.auctions;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no auctions in the database.</p>;

    const { totalCount, data: auctions } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <Link
            to="/auctions/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            + New Items
          </Link>
          <p>Showing {totalCount} auctions in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <AuctionsTable
            auctions={auctions}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Auctions;
