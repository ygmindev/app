import { Issuer } from '#lib-backend/funding/resources/Issuer/Issuer';
import { IssuerService } from '#lib-backend/funding/resources/Issuer/IssuerService/IssuerService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ISSUER_RESOURCE_NAME } from '#lib-shared/funding/resources/Issuer/Issuer.constants';
import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/funding/resources/Issuer/Issuer.models';
import { type IssuerResolverModel } from '#lib-backend/funding/resources/Issuer/IssuerResolver/IssuerResolver.models';

@withContainer()
@withResolver({ Resource: Issuer })
export class IssuerResolver
  extends createEntityResourceResolver<IssuerModel, IssuerFormModel>({
    Resource: Issuer,
    ResourceService: IssuerService,
    name: ISSUER_RESOURCE_NAME,
  })
  implements IssuerResolverModel {}
