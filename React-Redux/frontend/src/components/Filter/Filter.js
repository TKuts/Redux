import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFillter,
  setOnlyFavoritFilter,
  resetFilteres,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorit,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoritFilter = useSelector(selectOnlyFavorit);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFillter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilteres());
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoritFilter());
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoritFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filteres
        </button>
      </div>
    </div>
  );
};

export default Filter;
