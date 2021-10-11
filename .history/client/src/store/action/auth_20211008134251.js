import { AUTH_LOGAUT, AUTH_SUCCESS } from "./actionTypes";
import { Redirect, Switch } from "react-router";

export function auth(email, password) {
  return async (dispatch) => {
    let data = {
      email,
      password,
    };
    let authResult = await fetch("/auth/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // authResult
    //   .then(function (response) {
    //     return response.text();
    //   })
    //   .then(function (text) {
    //     console.log("Request successful", text);
    //   });

    // authResult
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (json) {
    //     console.log("Request successful", json);
    //   });
    authResult
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("fetchResult", authResult);

    if (authResult) {
      console.log("fetchResult", authResult);
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      const idToken = `${(+new Date()).toString(10)}`;
      const localID = `${(+new Date()).toString(12)}`;

      localStorage.setItem("token", idToken);
      localStorage.setItem("localID", localID);
      localStorage.setItem("expirationDate", expirationDate);

      dispatch(authSuccess(idToken));
      dispatch(autoLogout(3600));
      document.location.href = "/player";
    } else {
      alert("неверная пара логин-пароль");
    }
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("localID");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGAUT,
  };
}

export function autoLogin() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
  };
}