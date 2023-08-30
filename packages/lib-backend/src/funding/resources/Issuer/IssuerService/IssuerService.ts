import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { ISSUER_RESOURCE_NAME } from '#lib-shared/funding/resources/Issuer/Issuer.constants';
import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/funding/resources/Issuer/Issuer.models';
import { type IssuerServiceModel } from '#lib-shared/funding/resources/Issuer/IssuerService/IssuerService.models';

@withContainer({ name: `${ISSUER_RESOURCE_NAME}Service` })
export class IssuerService
  extends createEntityResourceService<IssuerModel, IssuerFormModel>({
    name: ISSUER_RESOURCE_NAME,
  })
  implements IssuerServiceModel {}
