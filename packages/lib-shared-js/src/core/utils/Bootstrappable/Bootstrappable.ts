import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Bootstrappable implements BootstrappableModel {
  protected _isInitialized!: boolean;

  constructor() {
    this._isInitialized = false;
    this.cleanUp = this.cleanUp.bind(this);
  }

  async cleanUp(): Promise<void> {
    logger.info(`${this.constructor.name} cleaning up...`);
    this._isInitialized = false;
    await this.onCleanUp();
    logger.info(`${this.constructor.name} cleaned up`);
  }

  async initialize(): Promise<void> {
    if (this._isInitialized) {
      logger.warn(`${this.constructor.name} already initialized`);
    } else {
      logger.info(`${this.constructor.name} initializing...`);
      await handleCleanup({ onCleanUp: this.cleanUp });
      this._isInitialized = true;
      try {
        await this.onInitialize();
        logger.success(`successfullly to initialized ${this.constructor.name}`);
      } catch (e) {
        logger.fail(`failed to initialize ${this.constructor.name}`, e);
      }
    }
  }

  async onCleanUp(): Promise<void> {
    return Promise.resolve();
  }

  async onInitialize(): Promise<void> {
    return Promise.resolve();
  }
}
