import React from 'react';
import { FolderContent } from "../models";
import FolderItemComponent from './FolderItem';

interface Content {
  content: FolderContent | null;
  path: string;
}

const FolderContentComponent = (props: Content) => {
  if (!props.content) return null;
  if (props.content.items.length === 0) {
    return (
      <div data-testid="empty">
       <p>Folder [ {props.path} ] is empty.</p>  
      </div>
    );
  }
  return (
    <div>
      <p>Folder [ <span data-testid="path">{props.path}</span> ] contains 
      <span data-testid="files-count">{props.content.filesCount}</span> file(s) 
      and <span data-testid="folders-count">{props.content.subfoldersCount}</span> sub-folder(s).</p>
      <p>Total size is <span data-testid="total-size">{props.content.totalSize}</span> bytes.</p>
      <ul>
        {
          props.content.items.map((i,index) => 
            <FolderItemComponent key={index} item={i} />
          )
        }
      </ul>
    </div>
  );
};

export default FolderContentComponent;