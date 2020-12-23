import { Injectable } from '@nestjs/common';
import { FolderService, ItemType } from '@node-ls/core';
import { Command, CommandArguments, _cli } from '@squareboat/nest-console';

@Injectable()
export class CliService {
  constructor(private readonly folderService: FolderService) {}

  @Command('ls', {
    desc: 'list files in a folder',
    args: { path: { req: true } },
  })
  listFolderContent(args: CommandArguments) {
    try {
      const content = this.folderService.getFolderContent(`${args.path}`);
      _cli.info(
        `There is ${content.filesCount} files and ${content.subfoldersCount} sub-folders in ${args.path}`,
      );
      _cli.info(`Total size of files is ${content.totalSize}`);
      content.itemsBySize.forEach((f) => {
        if (f.type === ItemType.FILE) {
          _cli.info(`File   - ${f.name} (${f.size} bytes)`);
        } else {
          _cli.info(`Folder - ${f.name}`);
        }
      });
    } catch (e) {
      _cli.error(e);
    }
  }
}
