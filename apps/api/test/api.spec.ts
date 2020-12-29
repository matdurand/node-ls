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

  describe('/folder-content (GET)', () => {
    it('should return the content of the test folder', () => {
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

    it('should return an empty result for a non existing folder', () => {
      return request(app.getHttpServer())
      .get('/folder-content?path=YYYYYYYYYYYYYYYYYYYYYYYYYYYY')
      .expect(200)
      .expect((response) => {
        const body = response.body;
        expect(body.filesCount).toBe(0);
        expect(body.subfoldersCount).toBe(0);
        expect(body.totalSize).toBe(0);
        expect(body.items.length).toBe(0);
        
      });
    });
  });

});
