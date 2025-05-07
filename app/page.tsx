"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
type ExcalidrawWrapperProps = {
  sh: string;
};

const ExcalidrawWrapper = dynamic<ExcalidrawWrapperProps>(
  async () => (await import("./_components/exca-wrapper")).default,
  {
    ssr: false,
  },
);

export default function Home() {
  const searchParams = useSearchParams();
  const sh = searchParams.get("sh") || "";

  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ExcalidrawWrapper sh={sh} />
    </div>
  );
}
