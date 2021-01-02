import { FolderItem } from "../models";
import React from 'react';
import dayjs from 'dayjs'

interface Item {
  item: FolderItem;
}

const FolderItemComponent = (props: Item) => {
  const {item} = props;
  const formattedDate = dayjs(item.lastModified).format('YYYY-MM-DD HH:mm:ss');
  return (
    <li>
      <p>
      {item.type === "file" && <span>File [ <span data-testid="name">{item.name}</span> ] - <span data-testid="size">{item.size}</span> bytes</span>}
      {item.type === "folder" && <span>Folder [ <span data-testid="name">{item.name}</span> ]</span>}
      <span> - last modified on <span data-testid="last-modified">{formattedDate}</span></span>
      </p>
    </li>
  );
};

export default FolderItemComponent;