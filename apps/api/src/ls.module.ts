import { Module } from '@nestjs/common';
import { FolderModule } from '@node-ls/core';
import { LsController } from './ls.controller';

@Module({
  imports: [FolderModule],
  controllers: [LsController],
  providers: [],
})
export class LsModule {}
