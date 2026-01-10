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
      await handleCleanup({ onCleanUp: async () => this.cleanUp() });
      try {
        this._isInitialized = true;
        await this.onInitialize();
        logger.success(`successfully initialized ${this.constructor.name}`);
      } catch (e) {
        logger.fail(`failed to initialize ${this.constructor.name}: ${e as Error}`);
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
