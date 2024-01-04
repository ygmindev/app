import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import {
  type SessionFormModel,
  type SessionModel,
} from '#lib-shared/chat/resources/Session/Session.models';

export const SESSION_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
  ],
  name: SESSION_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<SessionModel, SessionFormModel>, 'service'>;
