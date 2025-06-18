import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Catalog() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
