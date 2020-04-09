import React from "react";
const MovieTabs = (props) => {
  const handelClick = (value) => {
    return (event) => {
      props.updateSortBy(value);
    };
  };

  const getClassLink = (value) => {
    return `nav-link ${props.sort_by === value ? "active" : ""} `;
  };
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassLink("popularity.desc")}
          onClick={handelClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("revenue.desc")}
          onClick={handelClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("vote_average.desc")}
          onClick={handelClick("vote_average.desc")}
        >
          Voite avarage desc
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;