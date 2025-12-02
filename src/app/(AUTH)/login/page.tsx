import LoginButton from "@/components/LoginButton";

const LoginPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm flex flex-col items-center gap-6 rounded-lg bg-white/5 p-8">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-white text-[32px] font-bold leading-tight tracking-light">
            BlogScape
          </h1>
          <p className="text-white/70 text-base">
            Your personal space for ideas.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col w-full items-stretch gap-3 pt-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
