import {ApolloClient, InMemoryCache} from "@apollo/client";
import env from "../common/constants/settings";

const client = new ApolloClient({
    uri: env.API_URL+"/graphql",
    cache: new InMemoryCache(),
});

export default client
