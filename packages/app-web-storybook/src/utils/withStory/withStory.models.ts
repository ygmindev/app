import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithTestParamsModel } from '@lib/shared/test/utils/withTest/withTest.models';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

export interface WithStoryParamsModel<TProps> extends WithTestParamsModel<ComponentType<TProps>> {
  defaultProps: TProps;
  variants?: Array<Omit<StoryParamsModel<TProps>, 'children'>>;
}

export interface WithStoryModel<TProps> {
  Story: StoryObj<ComponentType<TProps>>;
  meta: Meta<ComponentType<TProps>>;
}

export interface StoryParamsModel<TProps> extends WithChildrenPropsModel, WithStyleParamsModel {
  name?: string;
  props?: PartialModel<TProps>;
}
