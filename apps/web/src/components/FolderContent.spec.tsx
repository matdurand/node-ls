import React from 'react';
import { render, screen } from '@testing-library/react';
import FolderContentComponent from './FolderContent';
import {ItemType} from '../models';
 
describe('FolderContentComponent', () => {
  it('should return the zero state when there is no files', async () => {
    const folderContent = {
      filesCount: 0,
      subfoldersCount: 0,
      totalSize: 0,
      items: []
    };
    render(<FolderContentComponent path="a-path" content={folderContent} />);
    expect(await screen.queryByTestId("empty")).toBeDefined();
  });

  describe('when there is files', () => {
    const folderContent = {
      filesCount: 2,
      subfoldersCount: 0,
      totalSize: 275,
      items: [
        { 
          name: "file1",
          type: ItemType.FILE,
          size: 25,
          lastModified: new Date("2020-01-01")
        },
        { 
          name: "file2",
          type: ItemType.FILE,
          size: 250,
          lastModified: new Date("2020-01-01")
        }
      ]
    };

    it('should not return the zero state', async () => {
      render(<FolderContentComponent path="a-path" content={folderContent} />);
      expect(await screen.queryByTestId("empty")).toBeNull();
    });

    it('should return the files count', async () => {
      render(<FolderContentComponent path="a-path" content={folderContent} />);
      expect(screen.getByTestId("files-count")).toHaveTextContent("2");
    });

    it('should return the folder count', async () => {
      render(<FolderContentComponent path="a-path" content={folderContent} />);
      expect(screen.getByTestId("folders-count")).toHaveTextContent("0");
    });

    it('should return the total size', async () => {
      render(<FolderContentComponent path="a-path" content={folderContent} />);
      expect(screen.getByTestId("total-size")).toHaveTextContent("275");
    });

    it('should display a FolderItem for each item', () => {
      const {container} = render(<FolderContentComponent path="a-path" content={folderContent} />);
      const allItems = container.querySelectorAll("ul>li");
      expect(allItems.length).toBe(2);
    })
  });
});