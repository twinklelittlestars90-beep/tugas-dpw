
import { NavLink } from "react-router-dom";
import BunnyIcon from "./KelinciIkon";

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <NavLink to="/" className="brand">
          <BunnyIcon className="brand-bunny" />
          <span>Vivi<span>Rabbit</span></span>
        </NavLink>

        <nav className="navigation" aria-label="Navigasi utama">
          <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
          <NavLink to="/tugas" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Daftar Tugas</NavLink>
          <NavLink to="/tentang" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Tentang</NavLink>
        </nav>
      </div>
    </header>
  );
}
