import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type BuildWorkflowModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export type CliRegistryModel = {
  pathname: string;
  workflow: BuildWorkflowModel<unknown, unknown>;
};

export type CliModel = BootstrappableModel & {
  aliases: Record<string, string>;

  registry: Record<string, CliRegistryModel>;

  register(name: string, params: CliRegistryModel): void;

  run(name?: string): Promise<void>;
};
