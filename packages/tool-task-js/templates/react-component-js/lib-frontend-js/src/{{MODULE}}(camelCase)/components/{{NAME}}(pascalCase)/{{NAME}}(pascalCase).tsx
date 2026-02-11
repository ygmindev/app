import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type {{NAME}}(pascalCase)PropsModel } from '@lib/frontend/{{MODULE}}(camelCase)/components/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const {{NAME}}(pascalCase): LFCModel<{{NAME}}(pascalCase)PropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <Wrapper {...wrapperProps} />;
};
