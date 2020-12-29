import { Module } from '@nestjs/common';
import { FolderModule } from '@node-ls/core';
import { LsController } from './ls.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [FolderModule, ConfigModule.forRoot()],
  controllers: [LsController],
  providers: [],
})
export class LsModule {}
