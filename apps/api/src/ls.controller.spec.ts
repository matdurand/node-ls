import { ConfigService } from "@nestjs/config";
import { LsController } from "./ls.controller"

describe('LsController', () => {
  it('should throw then configService return empty ROOT_PATH', () => {
    const mockConfigService = {
      get: jest.fn(),
    } as any;
    expect(() => new LsController(null, mockConfigService)).toThrowError();
  })

  it('should throw then configService return non existing ROOT_PATH', () => {
    const mockGet = jest.fn();
    const mockConfigService = {
      get: mockGet,
    } as any;
    mockGet.mockReturnValue("YYYYYYY");
    
    expect(() => new LsController(null, mockConfigService)).toThrowError();
  })
})