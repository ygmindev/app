import { ISSUER_FIELDS } from '#lib-frontend/funding/hooks/useIssuerResource/useIssuerResource.constants';
import { type UseIssuerResourceModel } from '#lib-frontend/funding/hooks/useIssuerResource/useIssuerResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { ISSUER_RESOURCE_NAME } from '#lib-shared/funding/resources/Issuer/Issuer.constants';
import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/funding/resources/Issuer/Issuer.models';

export const useIssuerResource = (): UseIssuerResourceModel =>
  useResource<IssuerModel, IssuerFormModel>({
    fields: [{ result: ISSUER_FIELDS }],
    name: ISSUER_RESOURCE_NAME,
  });
