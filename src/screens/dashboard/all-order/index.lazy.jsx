import {
  TableEntryDeleteButton,
  TableEntryDescription,
  TableEntryEditButton,
  StatusButton,
  TableEntryText,
  TableEntryViewButton,
  FilterButton,
} from "components";
import { useState } from "react";
import clsx from "clsx";

import { Link } from "router";
import { Search } from "react-feather";

import { useLocation } from "react-router-dom";

export default function Employees() {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabsList = ["Pending Projects", "Completed Projects"];
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
          <div className="container__main__content__listing__header__left__filter">
            {tabsList.map((tab) => (
              <button
                key={tab}
                className={clsx(
                  "container__main__content__listing__header__right__button__order",
                  selectedTab === tab &&
                    "container__main__content__listing__header__right__button__order__active"
                )}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="container__main__content__listing__header__right">
          <Link
            to=""
            className="container__main__content__listing__header__right__button__exp"
          >
            Export
          </Link>
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
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Customer ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Batch Number
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Quantity
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Product
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Delivery Date
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Price
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Note
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Exp Start Date
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
        <TableEntryViewButton to="/john-doe" />
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <StatusButton text="Active" />
      <TableEntryText>23244</TableEntryText>
      <TableEntryText>78655</TableEntryText>
      <TableEntryText>432432-343-343</TableEntryText>
      <TableEntryText>500 KG</TableEntryText>
      <TableEntryText>Vanilla</TableEntryText>
      <TableEntryText>23 May 2023</TableEntryText>
      <TableEntryText>$2300</TableEntryText>

      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>

      <TableEntryText>23 May 2023</TableEntryText>
    </div>
  );
}
