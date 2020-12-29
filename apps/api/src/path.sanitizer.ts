import { ForbiddenException } from '@nestjs/common';
import { join } from 'path';

export function sanitize(rootPath: string, path: string): string {
  const finalPath = join(rootPath, path);
  if (!finalPath.startsWith(rootPath)) {
    throw new ForbiddenException();
  }
  return finalPath;
}
