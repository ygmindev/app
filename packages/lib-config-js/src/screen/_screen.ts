import { type _ScreenConfigModel, type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { isCloud } from '@lib/shared/environment/utils/isCloud/isCloud';
import { executablePath } from 'puppeteer';

// TODO: use
export const _screen = ({
  delay,
  dimension,
  elementTimeout,
  highlightClass,
  isHeadless,
  isIgnoreMedia,
  navigationTimeout,
  proxies,
  snapshotPath,
}: ScreenConfigModel): _ScreenConfigModel => {
  const isCloudF = isCloud();
  const executablePathF = isCloudF
    ? (process.env.PUPPETEER_EXECUTABLE_PATH ?? executablePath())
    : // : process.env.NODE_ENV === 'production'
      //   ? await chromium.executablePath()
      executablePath();
  return {
    args: isCloudF
      ? [
          // proxy && `--proxy-server=${proxy.url}`,
          '--disable-dev-shm-usage',
          '--disable-features=NetworkServiceInProcess2',
          '--disable-features=site-per-process',
          '--disable-gpu',
          '--disable-setuid-sandbox',
          '--disable-web-security',
          '--ignore-certificate-errors',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
        ]
      : undefined,
    defaultViewport: dimension,
    executablePath: executablePathF,
    headless: isCloudF ? true : isHeadless,
    protocolTimeout: 0,
  };
};
