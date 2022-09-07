import React from "react";
import Item from "../funcComponents/funcComponent";
import NoteBook from "../funcComponents/item";
import "./style.css";

class Electronics extends React.Component {
  render() {
    return (
      <table className="myTable">
        <tr>
          <Item />
        </tr>
        <tr>
          <NoteBook />
        </tr>
      </table>
    );
  }
}

export default Electronics;
