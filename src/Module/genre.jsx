import React from "react";
const Genre = props => {
  const {
    genres,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect
  } = props;

  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          onClick={() => onItemSelect(genre)}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          key={genre[valueProperty]}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Genre.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Genre;
