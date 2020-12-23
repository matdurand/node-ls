import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { FolderService } from '@node-ls/core';
import { toApiFolderContent } from './ls.mapper';
import { FolderContent } from './ls.model';

@Controller()
export class LsController {
  constructor(private readonly folderService: FolderService) {}

  @Get('/folder-content')
  getFolderContent(@Query('path') path: string): FolderContent {
    try {
      const content = this.folderService.getFolderContent(path);
      return toApiFolderContent(content);
    } catch (e) {
      throw new BadRequestException('Invalid folder');
    }
  }
}
