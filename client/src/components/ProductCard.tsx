import { Link } from 'react-router-dom';

interface Props {
  product: {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg shadow p-2">
      <Link to={`/product/${product._id}`}>
        <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover rounded" />
        <h3 className="mt-2 font-semibold">{product.name}</h3>
        <p className="text-teal font-bold">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}
