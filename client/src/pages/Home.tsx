import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to ModernMarket</h1>
        <p className="mb-6">Find the best products here</p>
        <Link to="/catalog" className="bg-teal text-white px-4 py-2 rounded-lg">Shop Now</Link>
      </section>
      <Footer />
    </div>
  );
}
