import React from "react";

class Pagination extends React.Component {
  render() {
    const { page, total_pages, updatePages } = this.props;
    const handelClick = (value) => {
      return (event) => {
        updatePages(value);
      };
    };

    return (
      <div>
        <div className="btn-group btn-pagination">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            disabled={page === 1}
            onClick={handelClick(page - 1)}
          >
            Назад
          </button>
          <div className="btn">{page}</div>
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={handelClick(page + 1)}
          >
            Вперед
          </button>
        </div>
        {/* <div className="page-pagination">
          {page} из {total_pages}
        </div> */}
      </div>
    );
  }
}

export default Pagination;
