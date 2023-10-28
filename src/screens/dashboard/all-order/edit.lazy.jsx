import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function EmployeeAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Status"
              placeholder="Select Status "
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Batch Number"
              placeholder="Enter Batch Number"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Quantity"
              placeholder="Enter vat number"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label=" Products"
              placeholder="Enter products "
              isMulti
              options={[
                { value: "Vanilla", label: "Vanilla" },
                { value: "Chocolate", label: "Chocolate" },
                { value: "Strawberry", label: "Strawberry" },
              ]}
            />
          </div>
        </div>

        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Delivery Date" placeholder="Enter date" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Price" placeholder="Enter Price" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Exp Start Date"
              placeholder="Enter date"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Customer ID" placeholder="Enter id" />
          </div>
        </div>

        <Textarea label="Note" placeholder="Enter Note" />
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
