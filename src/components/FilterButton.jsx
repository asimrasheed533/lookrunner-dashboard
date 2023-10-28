import { Link } from "router";

export default function FilterButton({ to, text }) {
  return (
    <Link
      to={to}
      className="container__main__content__listing__header__right__button__flt"
    >
      {text}
    </Link>
  );
}
