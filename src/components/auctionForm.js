import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getAuction, saveAuction } from "../services/fakeAuctionService";
import { getGenres } from "../services/fakeGenreService";

class AuctionForm extends Form {
  state = {
    data: {
      title: "",
      description: "",
      genreId: "",
      minBidPrice: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    description: Joi.string()
      .required()
      .label("Description"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    minBidPrice: Joi.number()
      .required()
      .min(0)
      .max(1000000)
      .label("Minimum Bid Price"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const auctionId = this.props.match.params.id;
    if (auctionId === "new") return;

    const auction = getAuction(auctionId);
    if (!auction) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(auction) });
  }

  mapToViewModel(auction) {
    return {
      _id: auction._id,
      title: auction.title,
      description: auction.description,
      genreId: auction.genre._id,
      minBidPrice: auction.minBidPrice,
      dailyRentalRate: auction.dailyRentalRate
    };
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  doSubmit = () => {
    saveAuction(this.state.data);

    this.props.history.push("/auctions");
  };

  render() {
    return (
      <div>
        <h1>Auction Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("description", "Description")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("minBidPrice", "Minimum Bid Price", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default AuctionForm;
