import { Modal } from '#lib-frontend/core/components/Modal/Modal';
import { type FCModel } from '#lib-frontend/core/core.models';
import { type ResourceModalPropsModel } from '#lib-frontend/resource/containers/ResourceModal/ResourceModal.models';

export const ResourceModal: FCModel<ResourceModalPropsModel> = ({ testID, ...props }) => {
  return <Modal testID={testID}></Modal>;
};
