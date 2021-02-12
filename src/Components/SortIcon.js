import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortUserAC } from '../redux/actionCreators';

function SortIcon(props) {
  const { sort } = useSelector((store) => store);
  const dispatch = useDispatch();
  const sortUser = () => {
    if (sort === "desc") {
      dispatch(sortUserAC("asc"))
    } else {
      dispatch(sortUserAC("desc"))
    }
  }
  return (
    <div className="sort-button">
      <svg
        onClick={() => sortUser()}
        width="22"
        height="22"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.801376 12H6.84722V9.99997H0.801376V12ZM0.801376 -3.05176e-05V1.99997H18.9389V-3.05176e-05H0.801376ZM0.801376 6.99997H12.8931V4.99997H0.801376V6.99997Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default SortIcon;
