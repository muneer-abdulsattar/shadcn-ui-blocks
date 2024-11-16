"use client";

import { blocks } from "@/blocks";
import {
  BlockFile,
  BlockScreenSize,
  BlockScreenSizeUnion,
} from "@/types/blocks";
import { useParams } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

const BlockContext = createContext<{
  activeFile: BlockFile;
  screenSize: BlockScreenSizeUnion;
  selectFile: (file: BlockFile) => void;
  setScreenSize: (screenSize: BlockScreenSize) => void;
}>({
  activeFile: { path: "", target: "" },
  screenSize: "desktop",
  selectFile: () => {},
  setScreenSize: () => {},
});

export const BlockProvider = ({ children }: { children: ReactNode }) => {
  const { block } = useParams();
  const { files } = blocks[block as string];
  const [activeFile, setActiveFile] = useState<BlockFile>(files[0]);
  const [screenSize, setScreenSize] = useState<BlockScreenSizeUnion>("desktop");

  return (
    <BlockContext.Provider
      value={{
        activeFile,
        screenSize,
        setScreenSize,
        selectFile: setActiveFile,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error("useBlockContext must be used within a BlockProvider.");
  }

  return context;
};
