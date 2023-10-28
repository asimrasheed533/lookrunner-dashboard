import { avatar, logo } from "assets";

import { Auth, InputPassword } from "components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "global";
import { useState } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  return (
    // <div className="login__container">
    //   <form
    //     className="login__container__form"
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       setUser({
    //         profilePic: avatar,
    //         name: "John doe",
    //       });
    //       navigate("/dashboard", { replace: true });
    //     }}
    //   >
    //     <img src={logo} alt="logo" className="login__container__form__logo" />
    //     <LoginInput label="Email" placeholder="Enter email" type="email" />
    //     <LoginInput
    //       label="Password"
    //       placeholder="Enter password"
    //       type="password"
    //     />
    //     <button type="submit" className="login__container__form__button">
    //       Sign in
    //     </button>
    //   </form>
    // </div>
    <Auth>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUser({
            profilePic: avatar,
            name: "John doe",
          });
          navigate("/dashboard", { replace: true });
        }}
        className="auth__container__right__form"
      >
        <div className="auth__container__right__form__heading">
          Welcome back
        </div>
        <div className="auth__container__right__form__info">
          Provide your login details to continue
        </div>
        <div className="auth__container__right__form__input">
          <label
            htmlFor="email"
            className="auth__container__right__form__input__label"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            id="email"
            className="auth__container__right__form__input__field"
            autoComplete="false"
          />
        </div>
        <div className="auth__container__right__form__input">
          <label
            htmlFor="password"
            className="auth__container__right__form__input__label"
          >
            Password
          </label>
          <InputPassword className="auth__container__right__form__input__field" />
        </div>

        <button className="auth__container__right__form__button">
          Continue
        </button>
      </form>
    </Auth>
  );
}
