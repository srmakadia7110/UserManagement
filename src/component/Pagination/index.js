import React, { useState, useEffect } from "react";
//import leftArrowImg from "./../../assets/img/prev-pagination.svg";
//import rightArrowImg from "./../../assets/img/next-pagination.svg";

const PaginationComponent = ({
  totalPage,
  onPageChange,
  current,
  pageSize,
}) => {

  const [currentPage, setCurrentPage] = useState(parseInt(current));
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    onPageChange(parseInt(currentPage));
  }, [currentPage]);
  useEffect(() => {
    if (totalPage) {
      setLastPage(totalPage);
    }
  }, [totalPage]);
  const onClickNext = () => {
    let page = currentPage;
    page += 1;
    if (page < lastPage || page === lastPage) {
      setCurrentPage(parseInt(page));
    }
  };
  const onClickPrev = () => {
    let page = currentPage;
    page -= 1;
    if (page !== 0) {
      setCurrentPage(parseInt(page));
    }
  };

  const onClickPage = (page) => {
    setCurrentPage(parseInt(page));
  };
  const addButton = (page) => {
    return (
      <li
        key={page}
        className="site-pagination-nav-li site-pagination-nav-li-page"
      >
        <a
          className={current == page ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClickPage(parseInt(page));
          }}
        >
          {page}
        </a>
      </li>
    );
  };
  const renderNumber = () => {
    let data = [];
    if (lastPage >= 6) {
      // Always print first page button
      data.push(addButton(1));

      // Print "..." only if currentPage is > 3
      if (currentPage > 4) {
        data.push(
          <li className="site-pagination-nav-li site-pagination-nav-li-dots">
            ...
          </li>
        );
      }
      // special case where last page is selected...
      if (currentPage == lastPage) {
        data.push(addButton(currentPage - 3));
      }
      // special case where last page is selected...
      if (currentPage > 3) {
        data.push(addButton(currentPage - 2));
      }
      // Print previous number button if currentPage > 2
      if (currentPage > 2) {
        data.push(addButton(currentPage - 1));
      }

      //Print current page number button as long as it not the first or last page
      if (currentPage != 1 && currentPage != lastPage) {
        data.push(addButton(currentPage));
      }

      //print next number button if currentPage < lastPage - 1
      if (currentPage < lastPage - 1) {
        data.push(addButton(currentPage + 1));
      }

      // special case where first page is selected...
      if (currentPage < lastPage - 2) {
        data.push(addButton(currentPage + 2));
      }

      if (currentPage == 1) {
        data.push(addButton(currentPage + 3));
      }
      //print "..." if currentPage is < lastPage -2
      if (currentPage < lastPage - 3) {
        data.push(
          <li className="site-pagination-nav-li site-pagination-nav-li-dots">
            ...
          </li>
        );
      }

      //Always print last page button if there is more than 1 page
      data.push(addButton(lastPage));
    } else {
      for (let i = 1; i <= lastPage; i++) {
        data.push(
          <li
            key={"page" + i}
            className="site-pagination-nav-li site-pagination-nav-li-page"
          >
            <a
              type="button"
              className={current === i ? "active" : ""}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onClickPage(i);
              }}
            >
              {i}
            </a>
          </li>
        );
      }
    }
    return data;
  };
  return totalPage == 1 ? (
    <></>
  ) : (
    <div
      className="site-pagination"
      itemType="http://schema.org/SiteNavigationElement/Pagination"
    >
      <div className="site-pagination-wrapper">
        <nav className="site-pagination-nav">
          <ul className="site-pagination-nav-ul">
            <li className="site-pagination-nav-li site-pagination-nav-li-prev-next site-pagination-nav-li-prev-page">
              <a
                itemProp="relatedLink/pagination"
                onClick={(e) => onClickPrev()}
                href="javascript:void(0)"
              >
                &#129152;
              </a>

              {/* <img src={leftArrowImg} /> */}
            </li>
            {renderNumber()}

            <li
              className="site-pagination-nav-li site-pagination-nav-li-prev-next site-pagination-nav-li-next-page"
              onClick={(e) => onClickNext()}
            >
              <a
                itemProp="relatedLink/pagination"
                onClick={(e) => onClickNext()}
                href="javascript:void(0)"
              >
                &#129154;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default PaginationComponent;