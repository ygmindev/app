import { SpecificationInputForm } from '@lib/frontend/api/components/SpecificationInputForm/SpecificationInputForm';
import { type SpecificationInputFormPropsModel } from '@lib/frontend/api/components/SpecificationInputForm/SpecificationInputForm.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';

type SpecificationFixtureModel = {
  numberFieldOptional?: number;
  numberFieldRequired: number;
  stringFieldOptional?: string;
  stringFieldRequired: string;
};

export const props: LibraryPropsModel<SpecificationInputFormPropsModel<SpecificationFixtureModel>> =
  {
    Component: SpecificationInputForm,
    Renderer: ({ element }) => (
      <Wrapper
        height={500}
        width={500}>
        {element}
      </Wrapper>
    ),
    defaultProps: {
      specification: {
        fields: [
          {
            id: 'numberFieldOptional',
            type: FIELD_TYPE.NUMBER,
          },
          {
            id: 'numberFieldRequired',
            type: FIELD_TYPE.NUMBER,
          },
          {
            id: 'stringFieldOptional',
            type: FIELD_TYPE.STRING,
          },
          {
            id: 'stringFieldRequired',
            type: FIELD_TYPE.STRING,
          },
        ],
        name: 'test',
      },
    },
    variants: [],
  };
