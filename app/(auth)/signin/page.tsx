"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex  min-w-screen h-screen bg-zinc-50 dark:bg-transparent px-4 py-16 md:py-32">
      <div className="bg-card m-auto h-fit w-full max-w-sm rounded-2xl border p-0.5 shadow-md">
        <div className="p-8 pb-6">
          <div className="flex flex-col items-center">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold">BrainDeck</h1>
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Sign in to BrainDeck
            </h1>
            <p className="text-sm text-gray-600">
              Welcome back! Sign to Continue
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <Button className="flex justify-center gap-3 w-full max-w-xs" variant={"outline"}
          onClick={()=> signIn.social({
            provider:  "google",
            callbackURL: "/"
          })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Sign In with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
