
export default function BunnyIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Telinga */}
      <path d="M27 48 C10 17 17 3 29 8 C42 14 43 34 43 47Z"
        fill="#FFDDDD" stroke="#C66E83" strokeWidth="4" />
      <path d="M57 47 C56 20 64 4 76 10 C88 17 80 39 70 52Z"
        fill="#FFDDDD" stroke="#C66E83" strokeWidth="4" />

      {/* Wajah */}
      <path d="M17 55 C17 35 33 29 50 29 C70 29 84 42 84 60 C84 82 68 91 49 91 C29 91 15 79 17 55Z"
        fill="#FFF4DE" stroke="#C66E83" strokeWidth="4" />

      {/* Pipi */}
      <circle cx="31" cy="68" r="6" fill="#FFCED8" />
      <circle cx="69" cy="68" r="6" fill="#FFCED8" />

      {/* Mata */}
      <circle cx="39" cy="57" r="3.5" fill="#493B3D" />
      <circle cx="61" cy="57" r="3.5" fill="#493B3D" />

      {/* Hidung dan mulut */}
      <path d="M46 67 Q50 71 54 67 M50 64 V67"
        stroke="#493B3D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Pita kecil */}
      <path d="M75 27 L67 19 L66 31Z M75 27 L84 19 L85 31Z"
        fill="#FFCED8" stroke="#C66E83" strokeWidth="2" />
      <circle cx="75" cy="27" r="3.5" fill="#C66E83" />
    </svg>
  );
}
