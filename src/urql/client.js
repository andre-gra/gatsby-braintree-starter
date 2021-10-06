import { createClient } from "urql";

export const client = createClient({
  url: process.env.GATSBY_BRAINTREE_API_URL,
  fetchOptions: () => {
    return {
      headers: {
        Authorization: process.env.GATSBY_BRAINTREE_API_KEY,
        "Braintree-Version": `2019-01-01`,
      },
    };
  },
});
