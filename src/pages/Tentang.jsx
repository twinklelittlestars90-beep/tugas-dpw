import BunnyIcon from "../components/KelinciIkon";
export default function Tentang() {
  return <div className="page about-page">
    <section className="about-hero"><span className="about-mark"><BunnyIcon className="task-bunny" /></span><p className="eyebrow">KENALAN DENGAN ViviRabbit</p><h1>Produktif tanpa harus merasa kewalahan.</h1><p className="page-subtitle">ViviRabbit adalah aplikasi pengelola tugas sederhana yang membantu mencatat aktivitas, menentukan prioritas, dan memantau progres pekerjaan.</p></section>
    <section className="content-panel about-content"><h2>Tujuan aplikasi</h2><p>Aplikasi ini dibuat sebagai penerapan pembelajaran React, mulai dari pembuatan komponen, pengiriman data menggunakan Props, pengelolaan State dengan useState, hingga navigasi halaman menggunakan React Router.</p>
      <div className="about-feature-grid"><div><strong>01</strong><h3>Catat tugas</h3><p>Simpan pekerjaan dan tenggatnya.</p></div><div><strong>02</strong><h3>Pantau progres</h3><p>Lihat tugas yang selesai dan tertunda.</p></div><div><strong>03</strong><h3>Kelola dengan mudah</h3><p>Ubah status atau hapus tugas kapan saja.</p></div></div>
    </section>
  </div>;
}