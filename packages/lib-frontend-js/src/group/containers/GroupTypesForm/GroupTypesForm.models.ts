import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

export type GroupTypesFormModel = Pick<GroupModel, 'types'>;

export type GroupTypesFormPropsModel = FormStepPropsModel<GroupTypesFormModel, GroupTypesFormModel>;
