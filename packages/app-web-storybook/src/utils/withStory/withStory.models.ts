import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithTestParamsModel } from '@lib/shared/testing/utils/withTest/withTest.models';
import type { Meta, Story } from '@storybook/react';
import type { ComponentType } from 'react';

export interface WithStoryParamsModel<TProps> extends WithTestParamsModel<ComponentType<TProps>> {
  defaultProps: TProps;
  variants?: Array<Omit<StoryParamsModel<TProps>, 'children'>>;
}

export interface WithStoryModel<TProps> {
  Default: Story<TProps>;
  meta: Meta<TProps>;
}

export interface StoryParamsModel<TProps> extends WithChildrenPropsModel, WithStyleParamsModel {
  name?: string;
  props?: PartialModel<TProps>;
}
