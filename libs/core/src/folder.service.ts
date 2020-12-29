import { Injectable } from '@nestjs/common';
import { readdirSync, existsSync, lstatSync } from 'fs';
import { join } from 'path';
import { FolderContent, FolderItem, ItemType } from './folder.model';

class InvalidPathError extends Error {
  path: string;

  constructor(path: string) {
    super('invalid path: ' + path);
    this.path = path;
  }
}

function validatePath(path: string): boolean {
  return existsSync(path);
}

function readFolder(path: string): FolderItem[] {
  if (path && validatePath(path)) {
    const files = readdirSync(path);
    return files.map((f) => {
      const itemPath = join(path, f);
      const stats = lstatSync(itemPath);
      const itemType = stats.isFile() ? ItemType.FILE : ItemType.FOLDER;
      const size = itemType === ItemType.FILE ? stats.size : 0;
      return {
        name: f,
        type: itemType,
        lastModified: new Date(stats.mtimeMs),
        size,
      };
    });
  }
  throw new InvalidPathError(path);
}

@Injectable()
export class FolderService {
  public getFolderContent(path: string): FolderContent {
    return new FolderContent(readFolder(path));
  }
}
