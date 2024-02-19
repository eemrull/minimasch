"use server";
import { iium_cas, iium_login } from "@/lib/index";
import { cookies } from "next/headers";
import { cookieJar } from "tough-cookie";

const axios = require("axios");

const loginUrl = iium_login;

const onSubmit = async (data) => {
  const { username, password } = data; // Assuming data is the object containing form field values

  const cookieJar = new cookieJar();

  const loginData = {
    username,
    password,
    execution: "e1s1",
    eventID: "submit",
    geolocation: "",
  };

  try {
    const response = await axios.post(loginUrl, loginData);
    console.log("Login successful");
    console.log("Response data:", response.data);
    // Handle successful login response, e.g., redirect to dashboard
  } catch (error) {
    console.error("Login failed:", error.message);
    // Handle login error, e.g., display error message to user
  }
};
