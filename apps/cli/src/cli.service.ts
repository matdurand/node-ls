import { Injectable } from '@nestjs/common';
import { FolderService, ItemType } from '@node-ls/core';
import { Command, CommandArguments, _cli } from '@squareboat/nest-console';
import * as dayjs from 'dayjs';

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
        const formattedDate = dayjs(f.lastModified).format('YYYY-MM-DD HH:mm:ss');
        if (f.type === ItemType.FILE) {
          _cli.info(`File   - ${f.name} (${f.size} bytes / last modified on ${formattedDate})`);
        } else {
          _cli.info(`Folder - ${f.name} [last modified on ${formattedDate}]`);
        }
      });
    } catch (e) {
      _cli.error(e);
    }
  }
}
