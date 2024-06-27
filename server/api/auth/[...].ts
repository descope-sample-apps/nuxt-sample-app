import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: process.env.DESCOPE_DISCOVERY_URL,
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID,
      clientSecret: process.env.DESCOPE_ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
});
