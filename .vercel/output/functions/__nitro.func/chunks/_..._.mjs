import { N as NuxtAuthHandler } from './nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import './nitro/config.mjs';
import 'ufo';
import 'destr';
import 'cookie-es';
import 'scule';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'ohash';
import 'unstorage';
import 'defu';
import 'next-auth/core';
import 'requrl';

const _____ = NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
    // 30 days
  },
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: process.env.DESCOPE_DISCOVERY_URL,
      authorization: {
        params: {
          scope: "openid email profile",
          response_type: "code"
        }
      },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID,
      clientSecret: process.env.DESCOPE_ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        };
      }
    }
  ]
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
