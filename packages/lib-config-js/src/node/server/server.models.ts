import { type ServerParamsModel } from '@lib/backend/server/utils/Server/Server.models';

export type ServerConfigModel = ServerParamsModel<Array<unknown>> & {
  entryPathname: string;
};

// import { type ApiConfigModel } from '@lib/config/api/api.models';
// import { type DatabaseConfigModel } from '@lib/config/database/database.models';
// import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
// import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

// export type ServerConfigModel = Pick<UriParamsModel, 'host' | 'port'> &
//   Pick<BundleConfigModel, 'publicDir' | 'assetsPathname'> & {
//     api: ApiConfigModel;

//     certificate: {
//       caFilename: string;

//       certificateDir: string;

//       privateKeyFilename: string;

//       publicKeyFilename: string;
//     };

//     cors: {
//       allowedHeaders: Array<string>;

//       allowedOrigins: Array<string>;
//     };

//     database: DatabaseConfigModel;

//     entryPathname: string;
//   };
