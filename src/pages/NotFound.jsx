import { Link } from "react-router-dom";
export default function NotFound() {
  return <section className="not-found"><span>404</span><h1>Halaman tidak ditemukan</h1><p>Maaf, halaman yang kamu cari tidak tersedia atau alamatnya salah.</p><Link to="/" className="button button-primary">Kembali ke Dashboard</Link></section>;
}