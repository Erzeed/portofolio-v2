export function HeroSystemAnimation() {
  return (
    <div className="hero-system" aria-label="Animated warehouse management and manufacturing execution system diagram">
      <svg viewBox="0 0 760 530" role="img" aria-label="WMS and MES integrate racks, CTU, AMR, and FMR">
        <defs>
          <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".5" /></pattern>
          <marker id="hero-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="currentColor" stroke="none" /></marker>
        </defs>
        <rect className="system-grid" x="7" y="7" width="746" height="516" rx="5" />
        <g className="rack-unit">
          <path d="M58 145V392M178 145V392M58 145H178M58 392H178" />
          <path d="M70 185H166M70 225H166M70 265H166M70 305H166M70 345H166" />
          <path className="rack-box one" d="M81 161H121V181H81Z" /><path className="rack-box two" d="M126 241H164V261H126Z" /><path className="rack-box three" d="M76 321H113V341H76Z" />
          <text x="58" y="121">RACK ZONE A</text><text x="58" y="414">WMS · STOCK / LOCATION</text>
        </g>
        <g className="ctu-unit">
          <path d="M235 107V390M310 107V390M235 107H310M225 391H320L332 407H213Z" />
          <path d="M246 138H299M246 177H299M246 216H299M246 255H299M246 294H299M246 333H299" className="thin" />
          <g className="ctu-platform"><rect x="238" y="186" width="69" height="23" rx="2" /><path d="M252 197H292" /></g>
          <path className="lift-route" d="M345 125V370" markerStart="url(#hero-arrow)" markerEnd="url(#hero-arrow)" />
          <text x="223" y="85">CTU-02</text><text x="226" y="430">MES · VERTICAL TRANSFER</text>
        </g>
        <g className="fmr-unit">
          <path d="M421 285Q421 258 448 258H550Q576 258 576 285V354H421Z" />
          <path d="M421 310H576M440 354V371M556 354V371" />
          <circle cx="454" cy="370" r="9" /><circle cx="542" cy="370" r="9" />
          <path d="M442 258V190H527V258M458 190V175H512V190M456 220H527" />
          <rect x="460" y="272" width="57" height="30" rx="2" /><path d="M470 282H507M470 292H496" className="thin" />
          <path className="fmr-forks" d="M576 336H681V347H576M576 359H704V370H576" />
          <circle className="alert" cx="437" cy="286" r="5" />
          <text x="422" y="159">FMR-06</text><text x="419" y="399">RCS · TASK EXECUTION</text>
        </g>
        <g className="amr-unit">
          <path d="M249 455 279 432H378L407 454 391 485H265Z" />
          <path d="M279 432 294 417H363L378 432" /><ellipse cx="329" cy="424" rx="18" ry="5" />
          <circle cx="329" cy="466" r="5" className="alert" /><circle cx="276" cy="481" r="8" /><circle cx="384" cy="481" r="8" />
          <path className="amr-route" d="M189 468H238" markerEnd="url(#hero-arrow)" /><text x="251" y="513">AMR-01 · INBOUND RUN</text>
        </g>
        <g className="control-layer">
          <rect x="481" y="47" width="210" height="83" rx="5" />
          <path d="M500 75H530M500 92H573M500 109H547" className="thin" />
          <path d="M603 72H670M603 92H650M603 112H664" className="thin" />
          <circle className="alert" cx="583" cy="72" r="4" />
          <text x="499" y="38">OPERATIONS CONTROL</text><text x="499" y="157">WMS · MES · RCS · REDIS</text>
        </g>
        <path className="data-route route-one" d="M178 165H390Q412 165 412 116H481" markerEnd="url(#hero-arrow)" />
        <path className="data-route route-two" d="M310 225H367Q392 225 392 250H421" markerEnd="url(#hero-arrow)" />
        <path className="data-route route-three" d="M576 255V175Q576 157 593 157V130" markerEnd="url(#hero-arrow)" />
        <circle className="data-pulse p1" cx="206" cy="165" r="4" /><circle className="data-pulse p2" cx="366" cy="225" r="4" /><circle className="data-pulse p3" cx="576" cy="206" r="4" />
        <text className="caption" x="46" y="53">LIVE INDUSTRIAL FLOW</text><text className="caption right" x="603" y="500">STATUS · TASKS · TRACEABILITY</text>
      </svg>
      <div className="system-legend"><span><i className="legend-wms" /> WMS</span><span><i className="legend-mes" /> MES</span><span><i className="legend-robot" /> Robotics</span></div>
    </div>
  );
}
