"use client";

export default function error({ error, reset }) {
  return (
    <main className="text-center">
      <h2 className="text-4xl">Oh nooo!</h2>
      <p>{error.message ?? "Shitty!"}</p>
      <button className="btn-primary mx-auto my-4" onClick={reset}>Maybe try again?</button>
    </main>
  );
}
