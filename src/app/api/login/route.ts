import { NextResponse, NextRequest } from "next/server";

const iium_cas =
  "https://cas.iium.edu.my:8448/cas/login?service=https%3a%2f%2fimaluum.iium.edu.my%2fhome";

const iium_login =
  "https://cas.iium.edu.my:8448/cas/login?service=https%3a%2f%2fimaluum.iium.edu.my%2fhome?service=https%3a%2f%2fimaluum.iium.edu.my%2fhome";

export async function GET() {
  const data = {
    username: "username",
    password: "password",
    execution: "e1s1",
    _eventId: "submit",
    geolocation: "",
  };
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  try {
    const casresponse = await fetch(iium_login, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: iium_cas,
      },
      body: data,
    });
    console.log(casresponse);

    if (casresponse.ok) {
      console.log("POST Request success");
      return (
        NextResponse.redirect(new URL("/dashboard", req.url)),
        NextResponse.json(
          { message: "Authentication success" },
          { status: 200 }
        )
      );
    } else {
      console.error("Authentication failed");
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("error what did you do");
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
