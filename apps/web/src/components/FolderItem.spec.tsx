import React from 'react';
import { render, screen } from '@testing-library/react';
import FolderItemComponent from './FolderItem';
import {ItemType} from '../models';
import dayjs from 'dayjs';
 
describe('FolderItemComponent', () => {
  describe('when item is a file', () => {
    const DATE =  dayjs('2021-01-01T16:00:00.000Z');
    const FILE = { 
      name: "file1",
      type: ItemType.FILE,
      size: 25,
      lastModified: DATE.toDate()
    };

    it('should return the file name', async () => {
      render(<FolderItemComponent item={FILE} />);
      expect(screen.getByTestId("name")).toHaveTextContent("file1");
    });

    it('should return the file size', async () => {
      render(<FolderItemComponent item={FILE} />);
      expect(screen.getByTestId("size")).toHaveTextContent("25");
    });

    it('should return the last modified date', async () => {
      render(<FolderItemComponent item={FILE} />);
      expect(screen.getByTestId("last-modified")).toHaveTextContent(DATE.format("YYYY-MM-DD hh:mm:ss"));
    });
  });

  describe('when item is a folder', () => {
    const DATE =  dayjs('2021-01-01T16:00:00.000Z');
    const FILE = { 
      name: "folder1",
      type: ItemType.FOLDER,
      lastModified: DATE.toDate()
    };

    it('should return the folder name', async () => {
      render(<FolderItemComponent item={FILE} />);
      expect(screen.getByTestId("name")).toHaveTextContent("folder1");
    });

    it('should return the last modified date', async () => {
      render(<FolderItemComponent item={FILE} />);
      expect(screen.getByTestId("last-modified")).toHaveTextContent(DATE.format("YYYY-MM-DD hh:mm:ss"));
    });
  });


});