import gql from 'graphql-tag';

export const FetchProductsQuery = gql`
  { 
    products {
      displayName
      mediaId
    }
  }
`;

export const FetchProductsQueryOptions = (opts = {}) => {
  const { variables } = opts;
  return {
    query: FetchProductsQuery,
    variables,
  };
};