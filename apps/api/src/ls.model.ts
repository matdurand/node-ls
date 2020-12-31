import { ApiProperty } from '@nestjs/swagger';

enum ItemType {
  FILE = 'file',
  FOLDER = 'folder',
}

export class FolderItem {
  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false
  })
  size?: number;

  @ApiProperty()
  lastModified: Date;

  @ApiProperty({
    enum: ItemType
  })
  type: ItemType;
}

export class FolderContent {
  @ApiProperty({
    type: FolderItem
  })
  items: FolderItem[];

  @ApiProperty()
  filesCount: number;

  @ApiProperty()
  subfoldersCount: number;

  @ApiProperty()
  totalSize: number;
}
