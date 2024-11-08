import path from "path";
import fs from "fs";

export const getNumberOfFilesInsideDirectory = (directoryPath: string) => {
  const directoryFullPath = path.join(process.cwd(), directoryPath);

  const files = fs.readdirSync(directoryFullPath);
  const fileCount = files.filter((file) =>
    fs.statSync(path.join(directoryFullPath, file)).isFile()
  ).length;

  return fileCount;
};
