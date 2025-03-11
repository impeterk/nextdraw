"use client";
import useSystemTheme from "@/hooks/use-system-theme";
import { Excalidraw } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  const { theme } = useSystemTheme();
  return (
    <div className="h-full w-full">
      <Excalidraw theme={theme} />
    </div>
  );
};
export default ExcalidrawWrapper;
