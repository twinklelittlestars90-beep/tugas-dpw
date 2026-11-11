import ItemTugas from "./ItemTugas";
export default function DaftarTugas({ daftarTugas, onUbahStatus, onHapus, pesanKosong = "Belum ada tugas." }) {
  if (daftarTugas.length === 0) return <div className="empty-state"><span className="empty-icon">☷</span><h3>{pesanKosong}</h3><p>Tugas yang kamu tambahkan akan muncul di sini.</p></div>;
  return <div className="task-list">{daftarTugas.map((tugas) =>
    <ItemTugas key={tugas.id} tugas={tugas} onUbahStatus={onUbahStatus} onHapus={onHapus} />
  )}</div>;
}