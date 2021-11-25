/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { PaginationContainer, PaginationContainerStyles } from './styles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const PaginationItem = ({ history, page, category }) => {
  return (
    <div className="page">
      <NavLink
        // activeStyle={{ fontWeight: 'bold' }}
        to={`/lecture/${category}?page=${page}`}
      >
        {page}
      </NavLink>
    </div>
  );
};

const MemorizedItem = React.memo(PaginationItem);

const Pagination = ({ history, size, category, page }) => {
  const theme = useTheme();
  const onPrev = useCallback(
    () => history.push(`/lecture/${category}?page=${page - 1}`),
    [history, page, category],
  );
  const onNext = useCallback(
    () => history.push(`/lecture/${category}?page=${page + 1}`),
    [history, page, category],
  );
  return (
    <PaginationContainer css={PaginationContainerStyles(theme)}>
      <button className="prev" disabled={page <= 1} onClick={onPrev}>
        <IoIosArrowBack />
      </button>
      {size &&
        new Array(size)
          .fill()
          .map((_, idx) => (
            <MemorizedItem category={category} key={idx} page={idx + 1} />
          ))}
      <button className="next" disabled={page === size} onClick={onNext}>
        <IoIosArrowForward />
      </button>
    </PaginationContainer>
  );
};

export default React.memo(withRouter(Pagination));
