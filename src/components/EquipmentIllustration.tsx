type EquipmentType = "amr" | "ctu" | "fmr";

export function EquipmentIllustration({ type }: { type: EquipmentType }) {
  if (type === "amr") {
    return (
      <svg className="equipment-svg amr-svg" viewBox="0 0 500 300" aria-label="Animated AMR line illustration" role="img">
        <path className="guide" d="M45 254H455" />
        <path className="guide dash" d="M78 273H420" />
        <g className="amr-body">
          <path d="M102 173 164 128H348L407 171 376 220H129Z" />
          <path d="M102 173 129 220H376L407 171 374 187H133Z" />
          <path d="M164 128 190 98H327L348 128" />
          <path d="M181 128 200 110H316L334 128" />
          <ellipse cx="257" cy="112" rx="34" ry="10" />
          <ellipse cx="257" cy="112" rx="16" ry="5" />
          <path d="M150 186H212M302 186H360" />
          <circle cx="237" cy="190" r="7" className="signal" />
          <circle cx="392" cy="190" r="14" />
          <circle cx="119" cy="190" r="14" />
          <path d="M115 190h8m265 0h8" />
          <path d="M151 152h40m118 0h40" className="detail" />
        </g>
        <g className="amr-scan"><path d="M259 92V35" /><path d="M232 52 259 27 286 52" /><path d="M220 71 259 32 298 71" /></g>
        <text x="46" y="241">AMR-01</text><text x="354" y="241">AUTO / ACTIVE</text>
      </svg>
    );
  }

  if (type === "ctu") {
    return (
      <svg className="equipment-svg ctu-svg" viewBox="0 0 500 300" aria-label="Animated CTU line illustration" role="img">
        <path className="guide" d="M48 258H452" />
        <g className="ctu-frame">
          <path d="M191 37V235H309V37M191 37H309M207 37V235M293 37V235" />
          <path d="M179 236H321L340 257H160Z" />
          <path d="M167 257h166m-137 0v12m109-12v12" />
          <circle cx="188" cy="268" r="9" /><circle cx="312" cy="268" r="9" />
          <path d="M207 69H293M207 99H293M207 129H293M207 159H293M207 189H293M207 219H293" className="detail" />
          <path d="M214 55H286" /><path d="M214 231H286" />
        </g>
        <g className="ctu-carriage"><rect x="196" y="105" width="108" height="28" rx="3" /><path d="M207 119H293M222 105v28m56-28v28" /><circle cx="215" cy="136" r="4" /><circle cx="285" cy="136" r="4" /></g>
        <g className="ctu-lift"><path d="M356 63V218" /><path d="m348 74 8-11 8 11M348 207l8 11 8-11" /></g>
        <text x="48" y="241">CTU-02</text><text x="349" y="241">LIFT / RUNNING</text>
      </svg>
    );
  }

  return (
    <svg className="equipment-svg fmr-svg" viewBox="0 0 500 300" aria-label="Animated FMR line illustration" role="img">
      <path className="guide" d="M43 258H458" /><path className="guide dash" d="M53 273H450" />
      <g className="fmr-body">
        <path d="M145 174Q145 145 175 145H278Q306 145 306 174V232H145Z" />
        <path d="M145 197H306M164 232v22m123-22v22" />
        <circle cx="181" cy="254" r="12" /><circle cx="270" cy="254" r="12" />
        <path d="M171 145V72H260V145M188 72V53H243V72M186 104H260M186 125H260" />
        <rect x="190" y="156" width="70" height="39" rx="3" /><path d="M202 167h18m8 0h19m-45 12h45" className="detail" />
        <circle cx="161" cy="179" r="6" className="signal" /><path d="M305 218H353" />
      </g>
      <g className="fmr-forks"><path d="M306 218H418V231H306M306 241H438V254H306" /><path d="M367 218v36" className="detail" /></g>
      <g className="fmr-scan"><path d="M223 53V23M205 36l18-18 18 18" /></g>
      <text x="48" y="241">FMR-06</text><text x="346" y="241">FLEET / ONLINE</text>
    </svg>
  );
}
