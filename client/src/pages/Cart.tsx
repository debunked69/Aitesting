import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <div>
      <Header />
      <div className="p-4">Your cart is empty.</div>
      <Footer />
    </div>
  );
}
