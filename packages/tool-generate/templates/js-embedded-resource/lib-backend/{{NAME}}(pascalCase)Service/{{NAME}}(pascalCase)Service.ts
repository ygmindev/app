import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { DummyEntityResourceService } from '@lib/backend/{{MODULE}}(camelCase)/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { {{NAME}}(pascalCase)ServiceModel } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer()
export class {{NAME}}(pascalCase)Service
  extends EmbeddedResourceService<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    DummyEntityResourceModel,
    DummyEntityResourceFormModel
  >({
    RootService: DummyEntityResourceService,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ServiceModel {}
