import { ISSUER_FIELDS } from '#lib-frontend/capital/hooks/useIssuerResource/useIssuerResource.constants';
import { type UseIssuerResourceModel } from '#lib-frontend/capital/hooks/useIssuerResource/useIssuerResource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { ISSUER_RESOURCE_NAME } from '#lib-shared/capital/resources/Issuer/Issuer.constants';
import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/capital/resources/Issuer/Issuer.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';

export const useIssuerResource = (): UseIssuerResourceModel => {
  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    IssuerModel,
    IssuerFormModel
  >({
    fields: ISSUER_FIELDS,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: ISSUER_RESOURCE_NAME,
  });
  return { create };
};
