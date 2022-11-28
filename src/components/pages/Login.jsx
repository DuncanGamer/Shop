import React from "react";
import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import ImgLogin from "../molecules/ImgLogin";
import SocialButtonsLogin from "../atoms/SocialButtonsLogin";
import SpaceLogin from "../atoms/SpaceLogin";
import Input1Login from "../atoms/input1Login";
import Input2Login from "../atoms/Input2Login";
import RememberLogin from "../atoms/RememberLogin";
import ButtonsLogin from "../atoms/ButtonsLogin";

const Login = () => {
  const handleSublit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post(`${API_URL}/public/login`, data)
      .then((resp) => setToken(resp.data.data.token))
      .catch((error) => console.log(error));
  };

  return (
    <div className="  container mx-auto pt-40 ">
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <ImgLogin />
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSublit}>
                <SocialButtonsLogin />
                <SpaceLogin />
                <Input1Login />
                <Input2Login />
                <RememberLogin />
                <ButtonsLogin />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
