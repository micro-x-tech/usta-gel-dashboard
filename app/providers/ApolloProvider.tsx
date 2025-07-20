import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { version } from "../../package.json";
import storage, { STORAGE_KEYS } from "~/utils/storage";

const httpLink = createHttpLink({
  uri: "http://api.dev.agilioero.info/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = storage.getItemAsString(STORAGE_KEYS.ACCESS_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const UstaGelApolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  name: "ustagel-admin",
  version,
});

export const AppApolloProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ApolloProvider client={UstaGelApolloClient}>{children}</ApolloProvider>
  );
};
