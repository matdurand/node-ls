import { sum, sortBy } from 'lodash';

export enum ItemType {
  FILE = 'file',
  FOLDER = 'folder',
}

export interface FolderItem {
  name: string;
  size: number;
  lastModified: Date;
  type: ItemType;
}

export class FolderContent {
  constructor(public readonly items: FolderItem[]) {
    if (!items) {
      this.items = [];
    }
  }

  get filesCount() {
    return this.items.filter((f) => f.type === ItemType.FILE).length;
  }

  get subfoldersCount() {
    return this.items.filter((f) => f.type === ItemType.FOLDER).length;
  }

  get totalSize() {
    return sum(this.items.filter((f) => f.size).map((f) => f.size));
  }

  get itemsBySize() {
    return sortBy(this.items, ['size', 'name']);
  }
}
