import { ApiProperty } from '@nestjs/swagger';

enum ItemType {
  FILE = 'file',
  FOLDER = 'folder',
}

export class FolderItem {
  @ApiProperty()
  name: string;

  @ApiProperty()
  size?: number;

  @ApiProperty()
  lastModified?: Date;

  @ApiProperty()
  type: ItemType;
}

export class FolderContent {
  @ApiProperty()
  items: FolderItem[];

  @ApiProperty()
  filesCount: number;

  @ApiProperty()
  subfoldersCount: number;

  @ApiProperty()
  totalSize: number;
}
