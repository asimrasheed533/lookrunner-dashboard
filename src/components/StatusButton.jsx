import { useState, useEffect } from "react";
export default function StatusButton({ text }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    const value = text;
    if (value === "Active" || value === "Accept") {
      setColor("#39B454");
    } else if (value === "Pending") {
      setColor("#FBB245");
    } else {
      setColor("#F05A5A");
    }
  }, []);
  return (
    <div className="container__main__content__listing__table__content__list__entry">
      <div
        className="container__main__content__listing__header__right__button__sts"
        style={{ background: color }}
      >
        {text}
      </div>
    </div>
  );
}
