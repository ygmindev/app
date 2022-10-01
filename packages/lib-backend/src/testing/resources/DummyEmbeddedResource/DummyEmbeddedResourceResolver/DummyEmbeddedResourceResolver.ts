import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import type { EmbeddedResourceResolverModel } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.models';
import { DummyEmbeddedResource } from '@lib/backend/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource';
import { DummyEmbeddedResourceService } from '@lib/backend/testing/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type {
  DummyEmbeddedResourceFormModel,
  DummyEmbeddedResourceModel,
} from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEntityResourceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer()
@withResolver()
export class DummyEmbeddedResourceResolver
  extends EmbeddedResourceResolver<
    DummyEmbeddedResourceModel,
    DummyEmbeddedResourceFormModel,
    DummyEntityResourceModel
  >({
    Resource: DummyEmbeddedResource,
    ResourceService: DummyEmbeddedResourceService,
    name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements
    EmbeddedResourceResolverModel<
      DummyEmbeddedResourceModel,
      DummyEmbeddedResourceFormModel,
      DummyEntityResourceModel
    > {}
