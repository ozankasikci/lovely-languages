import { bikeStore } from '../../stores/index';
import client from '../../api/apollo-client';
import { CreateProductMutationOptions } from '../../api/bike/mutations';
import { FetchProductsQueryOptions } from '../../api/bike/queries';

export default class {
  async createProduct(opts = {}) {
    const res = await client.mutate(CreateProductMutationOptions(opts));
    bikeStore.addBike(res.data.createProduct.displayName);
  }

  async fetchProducts(opts = {}) {
    console.log('fetched products');
    const res = await client.query(FetchProductsQueryOptions(opts));
    bikeStore.addBikes(res.data);
  }
}