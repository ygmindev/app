import { type ModalButtonPropsModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import {
  type FormContainerPropsModel,
  type FormContainerRefModel,
} from '@lib/frontend/data/components/FormContainer/FormContainer.models';

export type ModalFormButtonPropsModel<TType, TResult = void> = Omit<
  ModalButtonPropsModel,
  'element'
> &
  FormContainerPropsModel<TType, TResult>;

export type ModalFormButtonRefModel<TType> = FormContainerRefModel<TType>;
