import { createYoga } from "graphql-yoga";
import { serve } from "std/http/server.ts";
import { createApplication } from "graphql-modules";
import { useGraphQLModules } from '@envelop/graphql-modules'

import { authModule } from "./src/auth/auth.ts";
import { storyModule } from "./src/story/story.ts";

const application = createApplication({
  modules: [authModule, storyModule],
});

const yoga = createYoga({
  plugins: [useGraphQLModules(application)],
});

serve(yoga, {
  onListen({ hostname, port }) {
    console.log(`Listening on http://${hostname}:${port}/graphql`);
  },
});
