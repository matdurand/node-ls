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
        expect(response.body).toMatchSnapshot();
      });
  });
});
