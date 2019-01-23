import gql from 'graphql-tag';

export const CreateProductMutation = gql`
  mutation CreateProduct($displayName: String!) {
    createProduct(displayName: $displayName) {
      displayName
    }
  }
`;

export const CreateProductMutationOptions = (opts = {}) => {
  const { variables } = opts;
  return {
    mutation: CreateProductMutation,
    variables: {
      displayName: variables.displayName,
    },
  };
};
