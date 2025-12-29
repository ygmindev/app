import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { getPackages } from '@lib/backend/file/utils/getPackages/getPackages';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { Pipeline } from '@lib/model/orchestrator/Pipeline/Pipeline';
import { PIPELINE_RESOURCE_NAME } from '@lib/model/orchestrator/Pipeline/Pipeline.constants';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';
import { type PipelineImplementationModel } from '@lib/model/orchestrator/Pipeline/PipelineImplementation/PipelineImplementation.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';

const getMany: PipelineImplementationModel['getMany'] = async (input, context) => {
  const packages = await getPackages();
  const items = filterNil(
    await mapParallel(
      packages.map(async (pkg) => {
        try {
          const { pipelines } = (await import(
            /* @vite-ignore */ fromPackages(pkg, 'src/pipelines.ts')
          )) as {
            pipelines: Array<PipelineModel>;
          };
          return pipelines;
        } catch {
          return null;
        }
      }),
    ),
  ).flat();
  return {
    result: { items },
  };
};

@withContainer()
export class PipelineImplementation
  extends createResourceImplementation<PipelineModel>({
    Resource: Pipeline,
    getMany,
    name: PIPELINE_RESOURCE_NAME,
  })
  implements PipelineImplementationModel {}
