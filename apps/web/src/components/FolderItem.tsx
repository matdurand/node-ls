import { FolderItem } from "../models";

interface Item {
  item: FolderItem;
}

const FolderItemComponent = (props: Item) => {
  const {item} = props;
  return (
    <li>
      <p>
      {item.type === "file" && <span>File [ {item.name} ] - {item.size} bytes</span>}
      {item.type === "folder" && <span>Folder [ {item.name} ]</span>}
      <span> - last modified on {item.lastModified}</span>
      </p>
    </li>
  );
};

export default FolderItemComponent;