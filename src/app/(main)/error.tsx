"use client";

export default function ErrorPage({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const errorMessage = error.message ?? "Connection Error!"
  return (
    <section className="h-full min-h-[500px] w-full flex items-center justify-center flex-col gap-4 text-center">
      <h1 className="font-extrabold text-red-900 text-5xl">Ooops!</h1>
      <p className="font-semibold text-lg opacity-80">
        Your Connection Was Interupted, Try Again
      </p>
      <button className="btn-primary w-fit px-6" onClick={reset}>Try Again</button>
    </section>
  );
}