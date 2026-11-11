
import BunnyIcon from "./KelinciIkon";

function formatTanggal(tanggal) {
  if (!tanggal) return "Tanpa tenggat";
  return new Date(`${tanggal}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

export default function ItemTugas({ tugas, onUbahStatus, onHapus }) {
  return (
    <article className={`task-item ${tugas.selesai ? "task-done" : ""}`}>
      <button
        className={`check-button ${tugas.selesai ? "checked" : ""}`}
        onClick={() => onUbahStatus(tugas.id)}
        aria-label={tugas.selesai ? "Tandai belum selesai" : "Tandai selesai"}
        title={tugas.selesai ? "Tandai belum selesai" : "Tandai selesai"}
      >
        <BunnyIcon className="task-bunny" />
      </button>

      <div className="task-content">
        <div className="task-title-row">
          <h3>{tugas.judul}</h3>
          <span className="category-tag">{tugas.kategori}</span>
        </div>

        {tugas.deskripsi && (
          <p className="task-description">{tugas.deskripsi}</p>
        )}

        <p className="task-date">
          ◷ {formatTanggal(tugas.tanggal)}
        </p>
      </div>

      <button
        className="delete-button"
        onClick={() => onHapus(tugas.id)}
        aria-label="Hapus tugas"
        title="Hapus tugas"
      >
        ×
      </button>
    </article>
  );
}
