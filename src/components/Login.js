import "../styles/Login.css";
import React from "react";
import { Button } from "@material-ui/core";
const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
        <h1>Sign in to Slack CLone</h1>
        <Button className="button"> Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
