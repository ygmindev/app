import { SESSION_TABLE_PROPS } from '#lib-frontend/chat/containers/SessionTable/SessionTable.constants';
import { type SessionTablePropsModel } from '#lib-frontend/chat/containers/SessionTable/SessionTable.models';
import { useSessionResource } from '#lib-frontend/chat/hooks/useSessionResource/useSessionResource';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import {
  type SessionFormModel,
  type SessionModel,
} from '#lib-shared/chat/resources/Session/Session.models';

export const SessionTable: LFCModel<SessionTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const service = useSessionResource();
  return (
    <ResourceTable<SessionModel, SessionFormModel, ChatModel>
      {...wrapperProps}
      {...SESSION_TABLE_PROPS}
      service={service}
    />
  );
};
