import "./App.css";
import { GoogleLogin } from "react-google-login";
import React from "react";

export default function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <GoogleLogin
        clientId="946913282394-ei7daebpskqmv0rea1aimduefisbnoje.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
}
