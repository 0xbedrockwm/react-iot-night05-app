import Link from "react-router-dom"
export default function NavBar() {
  return (
    <>
      <div className="flex justify-center gap-5 bg-blue-800 py-3">
        <Link href="/home" className="text-white">HOME</Link>
        <Link href="/about" className="text-white">ABOUT</Link>
        <Link href="/contact" className="text-white">CONTACT</Link>
        <Link href="/product" className="text-white">PRODUCT</Link>
      </div>
    </>
  );
}
 