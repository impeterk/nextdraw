"use client";
import useSystemTheme from "@/hooks/use-system-theme";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";
import ThemeSwitch from "./theme-switch";
import { useEffect, useState } from "react";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";

const ExcalidrawWrapper: React.FC = ({ sh }: { sh?: string }) => {
  const { theme } = useSystemTheme();
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);
  function handleSceneShare() {
    if (!excalidrawAPI) return;
    const elements = excalidrawAPI.getSceneElements();
    const appState = excalidrawAPI.getAppState();
    const encodedState = btoa(JSON.stringify({ elements, appState }));

    window.navigator.clipboard.writeText(
      `${window.location.origin}?sh=${encodedState}`,
    );
    window.alert("Sharable link was coppied to your clipboard");
  }
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(window.location.href);
      if (sh && excalidrawAPI) {
        const sceneData = JSON.parse(atob(sh));
        excalidrawAPI?.updateScene(sceneData);
      }
    });
    return () => clearTimeout(id);
  }, [sh, excalidrawAPI]);

  return (
    <div className="h-full w-full">
      <Excalidraw
        theme={theme}
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
        renderTopRightUI={() => {
          return (
            <button
              className="rounded-lg px-2 py-1 bg-[var(--island-bg-color)]"
              title="Share Canvas"
              onClick={handleSceneShare}
            >
              Share Canvas
            </button>
          );
        }}
      >
        <MainMenu>
          <MainMenu.Group>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.SearchMenu />
            <MainMenu.DefaultItems.Help />
          </MainMenu.Group>
          <MainMenu.Group title="ColorScheme">
            <MainMenu.ItemCustom>
              <ThemeSwitch />
            </MainMenu.ItemCustom>
          </MainMenu.Group>
          <MainMenu.Separator />
          <MainMenu.Group title="Excalidraw links">
            <MainMenu.DefaultItems.Socials />
          </MainMenu.Group>
          <MainMenu.Separator />
          <MainMenu.Group title="Canvas Background">
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu.Group>
        </MainMenu>
      </Excalidraw>
    </div>
  );
};
export default ExcalidrawWrapper;
