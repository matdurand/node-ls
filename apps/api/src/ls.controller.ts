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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

const EMPTY_CONTENT = new FolderContent();
EMPTY_CONTENT.filesCount = 0;
EMPTY_CONTENT.items = [];
EMPTY_CONTENT.subfoldersCount = 0;
EMPTY_CONTENT.totalSize = 0;

@Controller("/api")
export class LsController {
  rootPath: string;

  constructor(
    private readonly folderService: FolderService,
    private readonly configService: ConfigService,
  ) {
    const rootPathParam = configService.get('ROOT_PATH');
    if (!rootPathParam) {
      throw new Error('Missing ROOT_PATH config');
    }

    this.rootPath = resolve(rootPathParam);
    if (!this.rootPath || !existsSync(this.rootPath)) {
      throw new Error(
        `ROOT_PATH environment variable [${this.rootPath}] doesnt not exist`,
      );
    }
    console.log('Serving root folder', this.rootPath);
  }

  @Get('/folder-content')
  @ApiOperation({ summary: 'Get folder content' })
  @ApiResponse({
    status: 200,
    description: 'The folder content',
    type: FolderContent,
  })
  getFolderContent(@Query('path') path: string): FolderContent {
    try {
      const content = this.folderService.getFolderContent(
        sanitize(this.rootPath, path),
      );
      return toApiFolderContent(content);
    } catch (e) {
      console.error(e);
      return EMPTY_CONTENT;
    }
  }
}
