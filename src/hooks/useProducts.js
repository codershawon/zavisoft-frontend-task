import { useState, useEffect } from 'react';
import api from '@/services/api';
export const useProducts = ({ limit = 10, offset = 0 } = {}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await api.get(`/products?offset=${offset}&limit=${limit}`);
        setProducts(response.data); 
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [limit, offset]);

  return { products, isLoading, error };
};