import { type LFCModel } from '@lib/frontend/core/core.models';
import { type CurveTablePropsModel } from '@lib/frontend/quant/containers/CurveTable/CurveTable.models';
import { useCurveResource } from '@lib/frontend/quant/hooks/useCurveResource/useCurveResource';
import { CURVE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/Curve/Curve.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type CurveModel,
} from '@lib/model/quant/Curve/Curve.models';

export const CurveTable: LFCModel<CurveTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useCurveResource();
  return (
    <ResourceTable<CurveModel>
      {...wrapperProps}
      {...CURVE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
