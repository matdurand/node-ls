import { FolderService } from './folder.service';
import { join } from 'path';
import { FolderContent } from './folder.model';

describe('FolderService', () => {
  const folderService = new FolderService();

  describe('readFolder', () => {
    it('should throw when path is null', () => {
      expect(() => folderService.getFolderContent(null)).toThrowError();
    });

    describe('with a valid path', () => {
      let content: FolderContent;

      beforeAll(() => {
        content = folderService.getFolderContent(
          join(process.cwd(), './testfolder'),
        );
      });

      it('should return the correct number of items', async () => {
        expect(content.items.length).toBe(5);
      });

      it('should return the correct size for each file', () => {
        expect(content.items).toContainEqual(
          expect.objectContaining({ name: 'a.txt', size: 929 }),
        );
        expect(content.items).toContainEqual(
          expect.objectContaining({ name: 'b.txt', size: 18 }),
        );
        expect(content.items).toContainEqual(
          expect.objectContaining({ name: 'aa.txt', size: 2 }),
        );
      });

      it('should return no size for folders', () => {
        expect(content.items).toContainEqual(
          expect.objectContaining({ name: 'folder1', size: 0 }),
        );
        expect(content.items).toContainEqual(
          expect.objectContaining({ name: 'folder01', size: 0 }),
        );
      });

      it('should return the a last modified date for files and folder', () => {
        //Not asserting on the exact timestamp, because it will be dependant
        //on the machine running the tests. The modified date will be the checkout date
        content.items.forEach((c) => {
          expect(c.lastModified).not.toBeNull();
        });
      });
    });
  });
});
