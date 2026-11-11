import { useState } from "react";
const kondisiAwal = { judul: "", deskripsi: "", kategori: "Kuliah", tanggal: "" };

export default function FormTugas({ onTambah }) {
  const [form, setForm] = useState(kondisiAwal);
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((sebelumnya) => ({ ...sebelumnya, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!form.judul.trim()) return;
    onTambah(form);
    setForm(kondisiAwal);
  }
  return <form className="task-form" onSubmit={handleSubmit}>
    <div className="form-heading"><div><h2>Tambah tugas baru</h2><p>Catat hal yang ingin kamu selesaikan.</p></div><span className="form-plus">＋</span></div>
    <label htmlFor="judul">Nama tugas <span>*</span></label>
    <input id="judul" name="judul" value={form.judul} onChange={handleChange} placeholder="Contoh: Mengerjakan laporan praktikum" required />
    <label htmlFor="deskripsi">Deskripsi</label>
    <textarea id="deskripsi" name="deskripsi" value={form.deskripsi} onChange={handleChange} placeholder="Tambahkan catatan (opsional)" rows="3" />
    <div className="form-row">
      <div><label htmlFor="kategori">Kategori</label><select id="kategori" name="kategori" value={form.kategori} onChange={handleChange}><option>Kuliah</option><option>Belajar</option><option>Pribadi</option><option>Lainnya</option></select></div>
      <div><label htmlFor="tanggal">Tenggat</label><input id="tanggal" name="tanggal" type="date" value={form.tanggal} onChange={handleChange} /></div>
    </div>
    <button className="button button-primary form-submit" type="submit">＋ Tambahkan tugas</button>
  </form>;
}