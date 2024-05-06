import { type ValidateNotEmptyModel } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';

export const validateNotEmpty: ValidateNotEmptyModel = ({ value }) =>
  isEmpty(value) ? ({ t }) => t('core:validateNotEmpty') : null;
