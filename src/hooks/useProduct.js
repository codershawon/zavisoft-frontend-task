import api from '@/services/api';
import { useState, useEffect } from 'react';

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await api.get(`/products/${id}`);
        const data = response.data;
        if (data.images && Array.isArray(data.images)) {
           data.images = data.images.map(img => img.replace(/[\[\]"]/g, ''));
        }
        
        setProduct(data); 
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
};