"use server";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { iium_cas, iium_login } from "@/lib/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;

      const casLoginResponse = await axios.post(iium_login, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: iium_cas,
        },
        https: { rejectUnauthorized: false },
        followRedirect: false,
        body: {
          username,
          password,
          execution: "e1s1",
          eventID: "submit",
          geolocation: "",
        },
      });

      if (casLoginResponse.status === 200) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid CAS credentials" });
      }
    } catch (error) {
      console.error("Error occurred during CAS login:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
