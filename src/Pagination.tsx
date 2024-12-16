import classNames from "classnames";
import React, { FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Pagination as PaginationHeadless } from "react-headless-pagination";
export interface PaginationProps {
  isMobile: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}
const Pagination: FC<PaginationProps> = ({
  page,
  setPage,
  isMobile,
  totalPages,
}) => {
  if (isMobile) {
    return (
      <div className="flex items-center w-full">
        <FiArrowLeft
          size={20}
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          })}
          onClick={() => {
            if (page > 0) setPage(page - 1);
          }}
        />
        <div className="flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white ">
          Page {page + 1} out of {totalPages}
        </div>
        <FiArrowRight
          size={20}
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== totalPages - 1,
            "opacity-50": page === totalPages - 1,
          })}
          onClick={() => {
            if (page < totalPages - 1) setPage(page + 1);
          }}
        />
      </div>
    );
  }
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <>
      <PaginationHeadless
        currentPage={page}
        setCurrentPage={handlePageChange}
        totalPages={10}
        edgePageCount={2}
        middlePagesSiblingCount={2}
        className="flex items-center w-full h-10 text-sm select-none"
        truncableText="..."
        truncableClassName="w-10 p-0.5 text-center dark:text-gray-500"
      >
        <PaginationHeadless.PrevButton
          className={classNames(
            "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:otline-none",
            {
              "cursor-pointer": page !== 0,
              "opacity-50": page === 0,
            },
          )}
        >
          <FiArrowLeft size={20} className="mr-3" />
          Previous
        </PaginationHeadless.PrevButton>

        <nav className="flex justify-center flex-grow">
          <ul className="flex items-center">
            <PaginationHeadless.PageButton
              activeClassName="bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white"
              inactiveClassName="text-gray-500"
              className={classNames(
                "h-10 flex items-center justify-center w-10 rounded-full cursor-pointer font-medium",
              )}
            />
          </ul>
        </nav>

        <PaginationHeadless.NextButton
          className={classNames(
            "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:otline-none",
            {
              "cursor-pointer": page !== totalPages - 1,
              "opacity-50": page === totalPages - 1,
            },
          )}
        >
          Next
          <FiArrowRight size={20} className="mr-3" />
        </PaginationHeadless.NextButton>
      </PaginationHeadless>
    </>
  );
};

export default Pagination;
