import { SpecificationInputForm } from '@lib/frontend/api/components/SpecificationInputForm/SpecificationInputForm';
import { type SpecificationInputFormPropsModel } from '@lib/frontend/api/components/SpecificationInputForm/SpecificationInputForm.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { FORM_FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';

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
        height={400}
        isFullWidth>
        {element}
      </Wrapper>
    ),
    defaultProps: {
      specification: {
        fields: [
          {
            id: 'numberFieldRequired',
            type: FORM_FIELD_TYPE.NUMBER,
          },
          {
            id: 'numberFieldOptional',
            isOptional: true,
            type: FORM_FIELD_TYPE.NUMBER,
          },
          {
            id: 'stringFieldRequired',
            type: FORM_FIELD_TYPE.STRING,
          },
          {
            id: 'stringFieldOptional',
            isOptional: true,
            type: FORM_FIELD_TYPE.STRING,
          },
        ],
        name: 'test',
      },
    },
    variants: [],
  };
