import configDev from '../config.dev.json';
import configProd from '../config.prod.json'
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const globalConfig = (process.env.NODE_ENV !== "production")? configDev : configProd;