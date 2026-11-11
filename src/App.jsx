import { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Tugas from "./pages/Tugas";
import Tentang from "./pages/Tentang";
import NotFound from "./pages/NotFound";
import { dataAwalTugas } from "./data/data";

export default function App() {
  const [daftarTugas, setDaftarTugas] = useState(dataAwalTugas);
  const statistik = useMemo(() => {
    const selesai = daftarTugas.filter((tugas) => tugas.selesai).length;
    return { total: daftarTugas.length, selesai, belumSelesai: daftarTugas.length - selesai };
  }, [daftarTugas]);

  function tambahTugas(dataBaru) {
    setDaftarTugas((sebelumnya) => [{ ...dataBaru, id: Date.now(), selesai: false }, ...sebelumnya]);
  }
  function ubahStatus(id) {
    setDaftarTugas((sebelumnya) => sebelumnya.map((tugas) =>
      tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas
    ));
  }
  function hapusTugas(id) {
    setDaftarTugas((sebelumnya) => sebelumnya.filter((tugas) => tugas.id !== id));
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Dashboard daftarTugas={daftarTugas} statistik={statistik} onUbahStatus={ubahStatus} onHapus={hapusTugas} />} />
          <Route path="/tugas" element={<Tugas daftarTugas={daftarTugas} onTambah={tambahTugas} onUbahStatus={ubahStatus} onHapus={hapusTugas} />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}