import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';

export type CliRegistryModel = {
  pathname: string;

  func(params: unknown, context?: ExecutionContextModel): Promise<unknown>;
};

export type CliModel = BootstrappableModel & {
  aliases: Record<string, string>;

  registry: Record<string, CliRegistryModel>;

  register(name: string, params: CliRegistryModel): void;

  run(name?: string): Promise<void>;
};
