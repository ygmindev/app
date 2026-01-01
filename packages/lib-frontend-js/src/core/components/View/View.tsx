import { _View } from '@lib/frontend/core/components/View/_View';
import { type _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { type ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const View = composeComponent<ViewPropsModel, _ViewPropsModel>({ Component: _View });

process.env.APP_IS_DEBUG && (View.displayName = variableName({ View }));
