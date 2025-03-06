import {
  type CartesianObjectModel,
  type CartesianObjectParamsModel,
} from '@lib/shared/core/utils/cartesianObject/cartesianObject.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';

export const cartesianObject = <TType extends Record<string, unknown>>(
  params: CartesianObjectParamsModel<TType>,
): CartesianObjectModel<TType> =>
  Object.entries(params).reduce(
    (result, [k, v]) => {
      const resultF = [] as CartesianObjectModel<TType>;
      result.forEach((r) =>
        (isArray(v) ? v : [v]).forEach((vv) =>
          (vv && isArray(vv) ? vv : [vv]).forEach((vvv) =>
            resultF.push(Object.assign({}, r, { [k]: vvv })),
          ),
        ),
      );
      return resultF;
    },
    [{}] as CartesianObjectModel<TType>,
  );
