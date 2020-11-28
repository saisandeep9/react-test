import React, { Component } from "react";

class Table extends Component {
  state = {
    table: [
      {
        id: 28,
        Title: "Sweden",
      },
      {
        id: 56,
        Title: "USA",
      },
      {
        id: 89,
        Title: "England",
      },
    ],
  };
  render() {
    console.log(this.state.table.map((t) => t));
    return (
      <div className="mt-5">
        <button className="btn btn-dark"> submit</button>
        <table className="table col-9 mt-5">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          {this.state.table.map((t) => (
            <tbody>
              <tr>
                <td>{t.id}</td>
                <td>{t.Title}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Table;
