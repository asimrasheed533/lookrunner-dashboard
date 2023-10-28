import { DetailsEntry } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function EmployeeDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="Order ID">4534565</DetailsEntry>
        <DetailsEntry label="Batch Number">323445-234-567</DetailsEntry>
        <DetailsEntry label="Quantity no.">500KG</DetailsEntry>
        <DetailsEntry label="Product">Vanilla</DetailsEntry>
        <DetailsEntry label="Delivery Date ">29 May 2023</DetailsEntry>
        <DetailsEntry label="Exp Start Date ">29 May 2023</DetailsEntry>
        <DetailsEntry label="Price">$1234</DetailsEntry>
        <DetailsEntry label="Customer ID">223334</DetailsEntry>
        <DetailsEntry label="Note">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </DetailsEntry>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
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
