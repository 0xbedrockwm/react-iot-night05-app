import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-center gap-5 bg-blue-800 py-3">
      <Link to="/" className="text-white">HOME</Link>
      <Link to="/about" className="text-white">ABOUT</Link>
      <Link to="/contact" className="text-white">CONTACT</Link>
      <Link to="/product" className="text-white">PRODUCT</Link>
    </div>
  );
}