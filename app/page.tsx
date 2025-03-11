"use client";
import dynamic from "next/dynamic";

const ExcalidrawWrapper = dynamic(
  async () => (await import("./_components/exca-wrapper")).default,
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ExcalidrawWrapper />
    </div>
  );
}
