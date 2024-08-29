import {
  type CartesianObjectModel,
  type CartesianObjectParamsModel,
} from '@lib/shared/core/utils/cartesianObject/cartesianObject.models';

export const cartesianObject = <TType extends Record<string, unknown>>(
  params: CartesianObjectParamsModel<TType>,
): CartesianObjectModel<TType> =>
  Object.entries(params).reduce(
    (result, [k, v]) => {
      const resultF = [] as CartesianObjectModel<TType>;
      result.forEach((r) =>
        (Array.isArray(v) ? v : [v]).forEach((vv) =>
          (vv && Array.isArray(vv) ? vv : [vv]).forEach((vvv) =>
            resultF.push(Object.assign({}, r, { [k]: vvv as unknown })),
          ),
        ),
      );
      return resultF;
    },
    [{}] as CartesianObjectModel<TType>,
  );
