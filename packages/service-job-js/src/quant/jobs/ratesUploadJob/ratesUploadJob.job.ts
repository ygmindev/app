import { createDataUploadJob } from '@service/job/data/utils/createDataUploadJob/createDataUploadJob';
// import { oisSwapRateLoader } from '@service/job/quant/loaders/oisSwapRateLoader/oisSwapRateLoader';
// import { treasuryRateLoader } from '@service/job/quant/loaders/treasuryRateLoader/treasuryRateLoader';

await createDataUploadJob({
  // loaders: [treasuryRateLoader, oisSwapRateLoader],
  loaders: [],
});
