"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const LoginButton = () => {
  return (
    <>
      {/* google */}
      <Button
        onClick={() => signIn("google", { redirectTo: "/" })}
        className="flex items-center justify-center gap-2 h-12 w-full px-5 rounded-full bg-primary text-white text-base font-bold tracking-[0.015em] transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M21.9999 12.22C21.9999 11.28 21.9299 10.37 21.7799 9.49H12.2199V14.6H17.7699C17.5299 16.14 16.6599 17.47 15.2999 18.39V21.6H19.2499C20.9899 19.92 21.9999 17.3 21.9999 14.04V12.22Z"
            fill="white"
          ></path>
          <path
            d="M12.2199 22.0001C15.1099 22.0001 17.5799 21.0301 19.2499 19.4101L15.2999 16.2001C14.3399 16.8501 13.3199 17.2201 12.2199 17.2201C9.75992 17.2201 7.64992 15.5501 6.91992 13.2901L2.85992 16.3901C4.54992 19.7201 8.07992 22.0001 12.2199 22.0001Z"
            fill="white"
          ></path>
          <path
            d="M6.91991 13.29C6.67991 12.59 6.54991 11.84 6.54991 11.07C6.54991 10.3 6.67991 9.55 6.91991 8.85V5.75L2.85991 8.85C2.04991 10.45 2.04991 12.22 2.85991 13.29V13.29Z"
            fill="white"
          ></path>
          <path
            d="M12.2199 4.92001C13.7299 4.92001 15.0199 5.43001 15.9399 6.30001L19.3199 2.92001C17.5699 1.29001 15.1099 0.140015 12.2199 0.140015C8.07992 0.140015 4.54992 2.42001 2.85992 5.75001L6.91992 8.85001C7.64992 6.59001 9.75992 4.92001 12.2199 4.92001Z"
            fill="white"
          ></path>
        </svg>
        <span>Continue with Google</span>
      </Button>

      {/* github */}
      <Button
        onClick={() => signIn("github", { redirectTo: "/" })}
        className="flex items-center justify-center gap-2 h-12 w-full px-5 rounded-full bg-[#223649] text-white text-base font-bold tracking-[0.015em] transition-colors hover:bg-[#2b445c] focus-visible:ring-2 focus-visible:ring-[#2b445c]/50"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.94 3.43 22.51 8.2 24.19C8.79 24.31 9.02 23.93 9.02 23.6C9.02 23.3 9.01 22.36 9.01 21.31C5.69 22.04 4.98 19.81 4.98 19.81C4.45 18.47 3.66 18.14 3.66 18.14C2.61 17.41 3.74 17.43 3.74 17.43C4.88 17.51 5.5 18.57 5.5 18.57C6.52 20.31 8.24 19.79 8.89 19.5C9 18.8 9.27 18.31 9.55 18.06C6.96 17.76 4.22 16.73 4.22 11.91C4.22 10.51 4.71 9.35 5.53 8.44C5.4 8.13 4.99 6.84 5.65 5.17C5.65 5.17 6.6 4.86 8.98 6.41C9.89 6.16 10.91 6.04 11.94 6.04C12.97 6.04 13.99 6.16 14.9 6.41C17.28 4.86 18.23 5.17 18.23 5.17C18.89 6.84 18.48 8.13 18.35 8.44C19.17 9.35 19.66 10.51 19.66 11.91C19.66 16.74 16.91 17.76 14.32 18.05C14.68 18.36 15 19.01 15 20.01C15 21.48 15 22.65 15 23.03C15 23.36 15.22 23.74 15.82 23.62C20.56 21.94 24 17.4 24 12.5C24 5.87 18.63 0.5 12 0.5Z"
          ></path>
        </svg>
        <span>Continue with GitHub</span>
      </Button>
    </>
  );
};

export default LoginButton;
