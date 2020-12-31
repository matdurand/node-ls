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
      <div>
       <p>Folder [ {props.path} ] is empty.</p>  
      </div>
    );
  }
  return (
    <div>
      <p>Folder [ {props.path} ] contains {props.content.filesCount} file(s) and {props.content.subfoldersCount} sub-folder(s).</p>
      <p>Total size is {props.content.totalSize} bytes.</p>
      <ul>
        {
          props.content.items.map(i => 
            <FolderItemComponent item={i} />
          )
        }
      </ul>
    </div>
  );
};

export default FolderContentComponent;