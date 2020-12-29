import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  Query,
} from '@nestjs/common';
import { FolderService } from '@node-ls/core';
import { toApiFolderContent } from './ls.mapper';
import { FolderContent } from './ls.model';
import { ConfigService } from '@nestjs/config';
import { sanitize } from './path.sanitizer';
import { resolve } from 'path';
import { existsSync } from 'fs';

@Controller()
export class LsController {
  rootPath: string;

  constructor(
    private readonly folderService: FolderService,
    private readonly configService: ConfigService,
  ) {
    this.rootPath = resolve(configService.get('ROOT_PATH'));
    if (!this.rootPath || !existsSync(this.rootPath)) {
      throw new Error(
        `ROOT_PATH environment variable [${this.rootPath}] doesnt not exist`,
      );
    }
    console.log('Serving root folder', this.rootPath);
  }

  @Get('/folder-content')
  getFolderContent(@Query('path') path: string): FolderContent {
    try {
      const content = this.folderService.getFolderContent(
        sanitize(this.rootPath, path),
      );
      return toApiFolderContent(content);
    } catch (e) {
      console.error(e);
      if (e instanceof HttpException) {
        throw e;
      }
      throw new BadRequestException('invalid path');
    }
  }
}
