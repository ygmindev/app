import { cloneElement, useRef } from 'react';

import { type ModalRefModel } from '#lib-frontend/core/components/Modal/Modal.models';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type FilterButtonPropsModel } from '#lib-frontend/data/components/FilterButton/FilterButton.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const FilterButton: LFCModel<FilterButtonPropsModel> = ({ element, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const modalRef = useRef<ModalRefModel>(null);
  return (
    <Wrapper
      {...wrapperProps}
      isRowAlign
      justify={FLEX_JUSTIFY.END}>
      <ModalButton
        element={({ onCancel }) =>
          cloneElement(element, {
            onCancel,
            onSubmit: async (data: Array<FilterModel<unknown>>) => {
              element.props.onSubmit && (await element.props.onSubmit(data));
              modalRef.current?.toggle(false);
            },
          })
        }
        icon="filter"
        ref={modalRef}
        size={THEME_SIZE.SMALL}
        title={t('core:filter')}>
        {t('core:filter_plural')}
      </ModalButton>
    </Wrapper>
  );
};