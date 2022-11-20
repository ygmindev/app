import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { EmbeddedResourceServiceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface UseCardResourceModel
  extends Pick<
    EmbeddedResourceServiceModel<CardModel, CardFormModel, UserModel>,
    'get' | 'getMany'
  > {}
