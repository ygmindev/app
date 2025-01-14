import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import {
  type EmbeddedResourceRendererModel,
  type EmbeddedResourceRendererParamsModel,
} from '@lib/frontend/resource/utils/embeddedResourceRenderer/embeddedResourceRenderer.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { cloneElement } from 'react';

export const embeddedResourceRenderer =
  <TType extends EmbeddedResourceModel, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
    description,
    element,
  }: EmbeddedResourceRendererParamsModel<TType, TForm, TRoot>): EmbeddedResourceRendererModel<
    TType,
    TForm,
    TRoot
  > =>
  ({ row, value }) => (
    <Wrapper
      isAlign
      isRow>
      <ModalButton
        element={() =>
          cloneElement(element, {
            p: true,
            root: row._id as TRoot extends undefined ? never : string,
          })
        }
        icon="open"
        size={THEME_SIZE.SMALL}
        title={({ t }) => t('core:edit')}
      />

      {description && (
        <Text>{(value as Array<PartialModel<TType>>)?.map(description).join(', ')}</Text>
      )}
    </Wrapper>
  );
