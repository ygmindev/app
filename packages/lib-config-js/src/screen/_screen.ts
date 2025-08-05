import { type _ScreenConfigModel, type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import chromium from '@sparticuz/chromium';

// TODO: use
export const _screen = ({
  delay,
  dimension,
  elementTimeout,
  isHeadless,
  isIgnoreMedia,
  navigationTimeout,
  proxies,
  snapshotPath,
}: ScreenConfigModel): _ScreenConfigModel => ({
  args: filterNil([
    ...(process.env.NODE_ENV === 'production' ? chromium.args : []),
    // proxy && `--proxy-server=${proxy.url}`,
    '--disable-dev-shm-usage',
    '--disable-features=site-per-process',
    '--disable-gpu',
    '--disable-setuid-sandbox',
    '--disable-web-security',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
  ])
    .filter((v) => !v.includes('--use-gl'))
    .filter(Boolean),
  defaultViewport: dimension,
  headless: process.env.NODE_ENV === 'production' ? (chromium.headless as 'shell') : isHeadless,
  protocolTimeout: 0,
});
