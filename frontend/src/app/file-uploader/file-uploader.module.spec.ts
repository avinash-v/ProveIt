import { FileUploaderModule } from './file-uploader.module';

describe('FileUploaderModule', () => {
  let fileUploaderModule: FileUploaderModule;

  beforeEach(() => {
    fileUploaderModule = new FileUploaderModule();
  });

  it('should create an instance', () => {
    expect(fileUploaderModule).toBeTruthy();
  });
});
