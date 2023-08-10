import { type FCModel } from '#lib-frontend/core/core.models';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  return (
    <DataBoundary
      id="dev"
      query={async () => ({ result: null })}
    />
  );
};
