import { Pagination } from "react-bootstrap";

interface IPaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: any) => void;
  currentPage: number;
}

export function PaginationComponent({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: IPaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = startPage + maxPages - 1;

  if (endPage > pageNumbers.length) {
    endPage = pageNumbers.length;
    startPage = endPage - maxPages + 1;
  }

  let finalPageNumbers = [...pageNumbers];

  if (startPage !== 1) {
    finalPageNumbers = [1, ...finalPageNumbers.slice(startPage - 1, endPage)];
  }

  if (endPage !== pageNumbers.length) {
    finalPageNumbers = [
      ...finalPageNumbers.slice(0, endPage - startPage + 1),
      Math.ceil(totalPosts / postsPerPage),
    ];
  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.First onClick={() => paginate(1)} />
      <Pagination.Prev
        onClick={() => paginate(currentPage === 1 ? 1 : currentPage - 1)}
      />
      {finalPageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          paginate(
            currentPage === Math.ceil(totalPosts / postsPerPage)
              ? Math.ceil(totalPosts / postsPerPage)
              : currentPage + 1
          )
        }
      />
      <Pagination.Last
        onClick={() => paginate(Math.ceil(totalPosts / postsPerPage))}
      />
    </Pagination>
  );
}
