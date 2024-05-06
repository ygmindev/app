import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import {
  type EmbeddedResourceRendererModel,
  type EmbeddedResourceRendererParamsModel,
} from '@lib/frontend/resource/utils/embeddedResourceRenderer/embeddedResourceRenderer.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { cloneElement } from 'react';

export const embeddedResourceRenderer =
  <TType extends EmbeddedResourceModel, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
    element,
  }: EmbeddedResourceRendererParamsModel<TType, TForm, TRoot>): EmbeddedResourceRendererModel<
    TType,
    TForm,
    TRoot
  > =>
  ({ row }) => (
    <ModalButton
      element={() =>
        cloneElement(element, { root: row._id as TRoot extends undefined ? never : string })
      }
      icon="open"
      iconText={({ t }) => t('core:edit')}
      title={({ t }) => t('core:edit')}
      type={BUTTON_TYPE.INVISIBLE}
    />
  );
