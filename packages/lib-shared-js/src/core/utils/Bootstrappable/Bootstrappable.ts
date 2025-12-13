import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Bootstrappable implements BootstrappableModel {
  protected _isInitialized!: boolean;

  constructor() {
    this._isInitialized = false;
  }

  async cleanUp(): Promise<void> {
    this._isInitialized = false;
    await this.onCleanUp();
  }

  async initialize(): Promise<void> {
    if (this._isInitialized) {
      logger.warn('already initialized');
    } else {
      await handleCleanup({ onCleanUp: this.cleanUp });
      this._isInitialized = true;
      await this.onInitialize();
    }
  }

  async onCleanUp(): Promise<void> {
    return Promise.resolve();
  }

  async onInitialize(): Promise<void> {
    return Promise.resolve();
  }
}
