import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFillter,
  resetFilteres,
  selectTitleFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFillter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilteres());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by Author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filteres
        </button>
      </div>
    </div>
  );
};

export default Filter;
