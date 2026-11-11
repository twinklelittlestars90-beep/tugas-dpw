export default function KartuStatistik({ label, nilai, keterangan, simbol, warna }) {
  return <article className="stat-card">
    <div className={`stat-icon ${warna}`}>{simbol}</div>
    <div><p className="stat-number">{nilai}</p><p className="stat-caption">{keterangan}</p></div>
  </article>;
}