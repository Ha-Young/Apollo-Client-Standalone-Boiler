import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

import { authPrefix, gqlAPIUrl, tokenKey } from "./config";
import { getStorage } from "./utils/localStorage";
import uniqBy from "./utils/uniqBy";

const uploadLink = createUploadLink({
  uri: gqlAPIUrl,
});

const authLink = setContext((_, { headers }) => {
  const token = getStorage(tokenKey);

  return {
    headers: {
      ...headers,
      authorization: token ? `${authPrefix} ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, uploadLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: false,
            merge(existing = null, incoming) {
              if (existing === null) {
                return incoming;
              }

              const uniqDocs = uniqBy(incoming.docs, "__ref");

              return {
                ...incoming,
                docs: uniqDocs,
              };
            },
          },
        },
      },
    },
  }),
});

export default client;
