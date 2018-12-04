import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Edit from "./common/edit";
import Trash from "./common/trash";
class AuctionsTable extends Component {
  columns = [
    /*{
      key: "delete",
      content: auction => (
        <button
          onClick={() => this.props.onDelete(auction)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    },
    {
      key: "delete",
      content: auction => (
        <button
          onClick={() => this.props.onDelete(auction)}
          className="btn btn-danger btn-sm"
        >
          Edit
        </button>
      )
    },*/
    {
      label: "Actions",
      content: auction => (
        <Fragment>
          <Trash
            //edited={auction.edited}
            onClick={() => this.props.onDelete(auction)}
          />
          <Edit
            edited={auction.edited}
            //onClick={() => this.props.onEdit(auction)}
          />
        </Fragment>
      )
    },
    /* {
      key: "edit",
      content: auction => (
        <Edit
          edited={auction.edited}
          //onClick={() => this.props.onEdit(auction)}
        />
      )
    }, */
    {
      path: "title",
      label: "Title",
      content: auction => (
        <Link to={`/auctions/${auction._id}`}>{auction.title}</Link>
      )
    },
    { path: "description", label: "Description" },
    { path: "minBidPrice", label: "Minimum Bid Price" },
    { path: "status", label: "Status" },
    { path: "created", label: "Created" },
    { path: "modified", label: "Modified" }
  ];

  render() {
    const { auctions, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={auctions}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default AuctionsTable;
