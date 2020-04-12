import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "@apollo/react-hooks";
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset';

const uploadLink = createUploadLink({ uri: 'http://localhost:4000/graphql' });
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([uploadLink, httpLink])
})

ReactDOM.render(
     <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
