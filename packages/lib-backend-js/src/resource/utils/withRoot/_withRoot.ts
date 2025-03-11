import { type _WithRootModel } from '@lib/backend/resource/utils/withRoot/_withRoot.models';
import { Root } from 'type-graphql';

export const _withRoot = (): _WithRootModel => Root() as _WithRootModel;
