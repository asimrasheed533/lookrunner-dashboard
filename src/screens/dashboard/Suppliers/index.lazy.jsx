import {
  TableEntryDeleteButton,
  TableEntryDescription,
  TableEntryEditButton,
  StatusButton,
  TableEntryText,
  TableEntryViewButton,
  FilterButton,
} from "components";
import { Link } from "router";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";

export default function Suppliers() {
  const location = useLocation();
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          <form className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              className="container__main__content__listing__header__left__search__field"
            />
            <button className="container__main__content__listing__header__left__search__button">
              <Search size={20} color="currentColor" />
            </button>
          </form>
        </div>
        <div className="container__main__content__listing__header__right">
          <Link
            to={location.pathname.toLowerCase() + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Supplier ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Supplier Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Supplier Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            No. of Orders
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Last Order Date
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}
function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryText>12344</TableEntryText>
      <TableEntryText>Tomorrow Leave</TableEntryText>
      <TableEntryText>abc123@gmail.com</TableEntryText>
      <TableEntryText>05</TableEntryText>

      <StatusButton text="Active" />

      <TableEntryText>23 May 2023</TableEntryText>
    </div>
  );
}
