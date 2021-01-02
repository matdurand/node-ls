export enum ItemType {
  FILE = 'file',
  FOLDER = 'folder',
}

export interface FolderItem {
  name: string;
  size?: number;
  lastModified?: Date;
  type: ItemType;
}

export interface FolderContent {
  items: FolderItem[];
  filesCount: number;
  subfoldersCount: number;
  totalSize: number;
}
