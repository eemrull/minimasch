"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const iium_cas =
  "https://cas.iium.edu.my:8448/cas/login?service=https%3a%2f%2fimaluum.iium.edu.my%2fhome";

const iium_login =
  "https://cas.iium.edu.my:8448/cas/login?service=https%3a%2f%2fimaluum.iium.edu.my%2fhome?service=https%3a%2f%2fimaluum.iium.edu.my%2fhome";

const FormSchema = z.object({
  username: z.string().min(7, { message: "Matric Number must be 7 digits" }),
  password: z.string().min(5, { message: "Password is too short" }),
  remember: z.boolean().default(false).optional(),
});

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);

    try {
      const attempt = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: iium_cas,
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          execution: "e1s1",
          _eventId: "submit",
          geolocation: "",
        }),
      });
      if (attempt.ok) {
        console.log("Authentication success");
        router.push("/dashboard");
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>minima/sch</CardTitle>
        <CardDescription>an easy scheduler.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full gap-4 space-y-4"
          >
            <div className="flex flex-col space-y-1.5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Matric Number"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input placeholder="******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Remember Me</FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;
