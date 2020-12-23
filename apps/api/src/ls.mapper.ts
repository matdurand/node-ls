import { FolderContent, FolderItem } from '@node-ls/core';
import {
  FolderItem as ApiFolderItem,
  FolderContent as ApiFolderContent,
} from './ls.model';

export function toApiFolderItem(folderItem: FolderItem): ApiFolderItem {
  const i = new ApiFolderItem();
  i.name = folderItem.name;
  i.lastModified = folderItem.lastModified;
  i.size = folderItem.size;
  i.type = folderItem.type;
  return i;
}

export function toApiFolderContent(
  folderContent: FolderContent,
): ApiFolderContent {
  const c = new ApiFolderContent();
  c.filesCount = folderContent.filesCount;
  c.subfoldersCount = folderContent.subfoldersCount;
  c.totalSize = folderContent.totalSize;
  c.items = folderContent.itemsBySize.map(toApiFolderItem);
  return c;
}
