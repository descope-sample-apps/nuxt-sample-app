import { d as defineEventHandler } from './nitro/config.mjs';
import 'ufo';
import 'destr';
import 'cookie-es';
import 'scule';

const healthz = defineEventHandler((event) => {
  return {
    service: "online"
  };
});

export { healthz as default };
//# sourceMappingURL=healthz.mjs.map
