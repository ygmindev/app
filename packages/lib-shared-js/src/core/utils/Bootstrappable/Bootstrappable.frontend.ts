import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';

export class Bootstrappable implements BootstrappableModel {
  async cleanUp(): Promise<void> {
    await Promise.resolve();
  }
  async initialize(): Promise<void> {
    await Promise.resolve();
  }
}
