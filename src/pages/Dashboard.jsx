import { Link } from "react-router-dom";
import KartuStatistik from "../components/KartuStatistik";
import DaftarTugas from "../components/DaftarTugas";
import BunnyIcon from "../components/KelinciIkon";
export default function Dashboard({ daftarTugas, statistik, onUbahStatus, onHapus }) {
  return <div className="page">
    <section className="welcome-section"><div><p className="eyebrow">TO-DO List</p><h1>Halo, selamat datang thump! <BunnyIcon className="task-bunny" /></h1><p className="page-subtitle">Atur prioritasmu dan selesaikan satu per satu.</p></div><Link to="/tugas" className="button button-primary">＋ Buat tugas</Link></section>
    <section className="stats-grid">
      <KartuStatistik label="Total tugas" nilai={statistik.total} keterangan="Semua tugasmu" simbol="📑" warna="purple" />
      <KartuStatistik label="Belum selesai" nilai={statistik.belumSelesai} keterangan="Masih perlu dikerjakan" simbol="◷" warna="orange" />
      <KartuStatistik label="Selesai" nilai={statistik.selesai} keterangan="Berhasil diselesaikan" simbol="✓" warna="green" />
    </section>
    <section className="content-panel"><div className="section-heading"><div><h2>Tugas terbaru</h2><p>Beberapa tugas yang perlu kamu perhatikan.</p></div><Link to="/tugas" className="text-link">Lihat semua →</Link></div>
      <DaftarTugas daftarTugas={daftarTugas.slice(0, 4)} onUbahStatus={onUbahStatus} onHapus={onHapus} pesanKosong="Belum ada tugas. Yuk, buat tugas pertamamu!" />
    </section>
  </div>;
}