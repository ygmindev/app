import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type GroupFormModel } from '@lib/shared/group/resources/Group/Group.models';

export type GroupTypesFormModel = Pick<GroupFormModel, 'types'>;

export type GroupTypesFormPropsModel = FormStepPropsModel<GroupFormModel, GroupTypesFormModel>;
