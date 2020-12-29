import { FolderContent, FolderItem, ItemType } from './folder.model';

describe('FolderContent', () => {
  const file1: FolderItem = {
    name: 'file1',
    size: 10,
    lastModified: new Date(),
    type: ItemType.FILE,
  };
  const file01: FolderItem = {
    name: 'file01',
    size: 101,
    lastModified: new Date(),
    type: ItemType.FILE,
  };
  const folder1: FolderItem = {
    name: 'folder1',
    size: 0,
    lastModified: new Date(),
    type: ItemType.FOLDER,
  };
  const folder2: FolderItem = {
    name: 'folder2',
    size: 0,
    lastModified: new Date(),
    type: ItemType.FOLDER,
  };

  it('should initialize items to empty array', () => {
    expect(new FolderContent(null).items).toEqual([]);
  });

  it('should return the number of files', () => {
    expect(new FolderContent([file1, file01, folder1]).filesCount).toBe(2);
  });

  it('should return the number of folder', () => {
    expect(new FolderContent([file1, file01, folder1]).subfoldersCount).toBe(1);
  });

  it('should return the total size of all files', () => {
    expect(new FolderContent([file1, file01, folder1]).totalSize).toBe(111);
  });

  it('should return the items sorted by size', () => {
    expect(
      new FolderContent([file01, folder1, file1]).itemsBySize.map(
        (i) => i.name,
      ),
    ).toEqual(['folder1', 'file1', 'file01']);
  });

  describe('when size is equals', () => {
    describe('should return items sorted by name', () => {
      expect(
        new FolderContent([folder2, folder1]).itemsBySize.map((i) => i.name),
      ).toEqual(['folder1', 'folder2']);
    });
  });
});
