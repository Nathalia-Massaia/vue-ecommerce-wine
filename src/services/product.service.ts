import { ProductProps } from '@/types';
import ApiService from './api.service';

const ProductService = {
  get: async (): Promise<ProductProps[]> => {
    ApiService.init(
      'https://run.mocky.io/v3/908ec5b5-1e5a-4602-9008-47719f7c6759',
    );

    return await ApiService.get('');
  },
};

export default ProductService;
