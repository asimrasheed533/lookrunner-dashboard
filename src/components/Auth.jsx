import { authBg, authBgMobile } from "assets";
import { useEffect, useState } from "react";

export default function Auth({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1000) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <div className="auth__container">
      <div className="auth__container__left">
        <img
          src={isMobile ? authBgMobile : authBg}
          alt="auth bg"
          className="auth__container__left__img"
        />
      </div>
      <div className="auth__container__right">{children}</div>
    </div>
  );
}
