import { Module } from '@nestjs/common';
import { CliService } from './cli.service';
import { ConsoleModule } from '@squareboat/nest-console';
import { FolderModule } from '@node-ls/core';

@Module({
  imports: [ConsoleModule, FolderModule],
  controllers: [],
  providers: [CliService],
})
export class CliModule {}
