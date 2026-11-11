import { useState } from "react";
import FormTugas from "../components/FormTugas";
import DaftarTugas from "../components/DaftarTugas";
export default function Tugas({ daftarTugas, onTambah, onUbahStatus, onHapus }) {
  const [filter, setFilter] = useState("Semua");
  const tugasTersaring = daftarTugas.filter((tugas) => {
    if (filter === "Belum selesai") return !tugas.selesai;
    if (filter === "Selesai") return tugas.selesai;
    return true;
  });
  return <div className="page">
    <section className="page-header"><p className="eyebrow">PENGELOLAAN</p><h1>Daftar Tugas</h1><p className="page-subtitle">Semua rencana dan pekerjaanmu ada di satu tempat.</p></section>
    <div className="tasks-layout">
      <section className="content-panel tasks-panel"><div className="section-heading filter-heading"><div><h2>Semua aktivitas</h2><p>{tugasTersaring.length} tugas ditampilkan</p></div>
        <select className="filter-select" value={filter} onChange={(event) => setFilter(event.target.value)} aria-label="Filter tugas"><option>Semua</option><option>Belum selesai</option><option>Selesai</option></select>
      </div><DaftarTugas daftarTugas={tugasTersaring} onUbahStatus={onUbahStatus} onHapus={onHapus} /></section>
    <aside>
  <FormTugas onTambah={onTambah} />
</aside>
    </div>
  </div>;
}