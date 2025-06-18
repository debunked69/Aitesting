import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 shadow flex justify-between items-center">
      <Link to="/" className="text-teal text-lg font-bold">ModernMarket</Link>
      <nav className="space-x-4">
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/dashboard">Account</Link>
      </nav>
    </header>
  );
}
