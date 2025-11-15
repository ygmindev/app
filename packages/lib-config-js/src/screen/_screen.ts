import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type _ScreenConfigModel, type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { executablePath } from 'puppeteer';

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
  zoom,
}: ScreenConfigModel): _ScreenConfigModel => {
  const environment = Container.get(Environment);
  const executablePathF = isHeadless
    ? (environment.variables.PUPPETEER_EXECUTABLE_PATH ?? executablePath())
    : executablePath();
  return {
    args: isHeadless
      ? [
          // proxy && `--proxy-server=${proxy.url}`,
          '--disable-dev-shm-usage',
          '--disable-features=NetworkServiceInProcess2',
          '--disable-features=site-per-process',
          '--disable-gpu',
          '--disable-setuid-sandbox',
          '--disable-web-security',
          `--force-device-scale-factor=${zoom}`,
          '--ignore-certificate-errors',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
        ]
      : undefined,
    defaultViewport: dimension,
    executablePath: executablePathF,
    headless: isHeadless,
    protocolTimeout: 0,
  };
};
