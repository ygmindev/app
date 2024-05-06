import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type GroupFormModel } from '@lib/shared/group/resources/Group/Group.models';

export type GroupNameFormModel = Pick<GroupFormModel, 'name'>;

export type GroupNameFormPropsModel = FormStepPropsModel<GroupFormModel, GroupNameFormModel>;
