/**
 * @group e2e/api
 */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LsModule } from '../src/ls.module';

describe('LsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/folder-content (GET)', () => {
    return request(app.getHttpServer())
      .get('/folder-content?path=testfolder')
      .expect(200)
      .expect((response) => {
        const body = response.body;
        expect(body.filesCount).toBe(3);
        expect(body.items.length).toBe(5);
        expect(body.items.map((i) => i.name)).toEqual([
          'folder01',
          'folder1',
          'aa.txt',
          'b.txt',
          'a.txt',
        ]);
      });
  });
});
