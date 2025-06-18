import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <Header />
      <div className="p-4">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
        <button className="mt-4 bg-teal text-white px-4 py-2 rounded-lg">Add to Cart</button>
      </div>
      <Footer />
    </div>
  );
}
