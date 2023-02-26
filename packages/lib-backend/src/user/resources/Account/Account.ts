import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { ACCOUNT_RESOURCE_NAME } from '@lib/shared/user/resources/Account/Account.constants';
import type { AccountModel } from '@lib/shared/user/resources/Account/Account.models';

@withEntity({ isRepository: true, name: ACCOUNT_RESOURCE_NAME })
export class Account extends EntityResource implements AccountModel {}
