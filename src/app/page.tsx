import { EquipmentIllustration } from "../components/EquipmentIllustration";
import { HeroSystemAnimation } from "../components/HeroSystemAnimation";

const projects = [
  { id: "01", name: "I-YKK", type: "Automation operations", year: "2024", color: "lime", description: "A unified operations dashboard for an automated production environment.", scope: "Brings station status, maps, task queues, user activity, troubleshooting, and line configuration into a single operator workspace.", technologies: ["Next.js", "React", "MongoDB", "Mongoose", "Socket.IO", "Material UI", "ApexCharts"], stats: ["Stations", "Task queues", "Live status"] },
  { id: "02", name: "I-YKK CTU", type: "Warehouse control", year: "2024", color: "orange", description: "A connected warehouse-control platform for material movement and storage operations.", scope: "Supports inbound and outbound processing, rack and storage information, robot data, scan flows, manual binding, station monitoring, and exception handling.", technologies: ["Next.js", "MongoDB", "Redis", "Socket.IO", "XLSX", "React Battery Gauge"], stats: ["Inbound / outbound", "Rack management", "Robot monitoring"] },
  { id: "03", name: "I-MII", type: "Manufacturing execution", year: "2025", color: "blue", description: "A production, quality, and traceability platform designed around shop-floor workflows.", scope: "Covers machine and tooling records, QC checksheets, final inspection, production checks, Dandori changeover, approvals, NG reporting, label printing, and delivery activities.", technologies: ["Next.js", "MongoDB", "React PDF", "jsPDF", "QR Code", "Framer Motion", "ApexCharts"], stats: ["Quality control", "Final inspection", "Traceability"] },
  { id: "04", name: "I-AVI WH", type: "Warehouse management", year: "2025", color: "violet", description: "A warehouse-management system for accurate, visible, and controlled parts operations.", scope: "Coordinates inbound and outbound flow, rack visibility, box registration, order planning, monitoring, red-tag handling, stock exports, and troubleshooting activity.", technologies: ["Next.js", "Redux Toolkit", "MongoDB", "Recharts", "Socket.IO", "XLSX"], stats: ["Part movement", "Rack map", "Exception flow"] },
  { id: "05", name: "I-AVI", type: "Material flow", year: "2024", color: "red", description: "A line-side material-flow system spanning SMT, assembly, and finished-goods operations.", scope: "Links component scanning, warehouse supply, sub-assembly, storage, destinations, workstations, and final-assembly requests into one operational flow.", technologies: ["Next.js", "React", "MongoDB", "Socket.IO", "SWR", "Material UI"], stats: ["SMT to assembly", "Scan workflow", "Line supply"] },
  { id: "06", name: "I-Avian FMR", type: "AGV / AMR fleet management", year: "2025", color: "teal", description: "A fleet-management and robot-control dashboard for autonomous material handling.", scope: "Provides live robot and I/O visibility, manual and automatic calling, transit tracking, robot diagnostics, task history, RCS logs, rack control, and recovery actions.", technologies: ["Next.js", "MQTT", "Redis", "Socket.IO", "PostgreSQL", "D3", "Recharts"], stats: ["Fleet visibility", "Task orchestration", "Recovery tools"] },
  { id: "07", name: "I-GTIM", type: "Production support", year: "2025", color: "yellow", description: "A warehouse and production-support system for controlled material and planning workflows.", scope: "Combines inbound/outbound operations, stock and parts monitoring, rack mapping, planning orders, box registration, blocked-area visibility, exports, and fault handling.", technologies: ["Next.js", "Redux Toolkit", "MongoDB", "Next PWA", "Socket.IO", "Recharts"], stats: ["Planning orders", "Stock monitoring", "PWA ready"] },
  { id: "08", name: "TMMIN P1 Supply Battery", type: "Battery supply operations", year: "2026", color: "pink", description: "A modern supply-flow application for battery operations and controlled execution.", scope: "Built around structured forms, role-aware workflows, real-time updates, queryable data tables, and practical tools for high-accountability operations.", technologies: ["Next.js 16", "React 19", "TypeScript", "Zustand", "React Query", "Zod", "Socket.IO"], stats: ["Role-aware", "Validated forms", "Live updates"] },
  { id: "09", name: "Epson E4 Ribbon", type: "Warehouse management system", year: "2026", color: "white", description: "A modern foundation for reliable warehouse operations and operator-facing workflows.", scope: "Models stock, inbound and outbound flow, tasks, racks, locations, monitoring, notifications, and traceable workflows in a TypeScript-first Next.js architecture.", technologies: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "TanStack Table", "Zustand"], stats: ["App Router", "Data integrity", "Operator UI"] },
];

const services = [
  ["01", "Operational UX", "Clear interfaces for time-critical shop-floor and warehouse decisions."],
  ["02", "Real-time systems", "Connected dashboards for automation, status monitoring, and task orchestration."],
  ["03", "Workflow engineering", "Structured flows for inventory, quality, traceability, reporting, and access control."],
];

const integrations: Record<string, string> = {
  "01": "Connects to RCS and Redis-backed services for task status, AGV activity, and operational monitoring.",
  "02": "Integrates RCS, Redis monitoring, conveyor and YKK service endpoints to coordinate material flow across systems.",
  "03": "Connects laser and label-printing services with Redis updates, AVI APIs, PDF output, and production workflow data.",
  "04": "Uses RCS task generation and handling, Redis events, Socket.IO, HIK features, and external API-key based integrations.",
  "05": "Connects AVI and RCS services with workstation, zone, part, model, and special-calling APIs.",
  "06": "Integrates RCS, Node-RED, Redis/Axons, MQTT, PostgreSQL, and robot callbacks for fleet-level control and observability.",
  "07": "Coordinates RCS task services, Redis streams, external AVI APIs, HIK features, and PWA-ready warehouse workflows.",
  "08": "Connects Node-RED sensor, lamp, in-gate, cancel, and calling endpoints with RCS callbacks and Redis-powered application events.",
  "09": "Connects the WMS to RCS and Redis-powered AMR status streams, Holmes services, rack swaps, box dispatch, and packing workflows.",
};

const customers: Record<string, string> = {
  "01": "YKK",
  "02": "YKK",
  "03": "MII - Mesin Isuzu Indonesia",
  "04": "Astra Visteon Indonesia - phase 1",
  "05": "Astra Visteon Indonesia - phase 2",
  "06": "Avian",
  "07": "G-Tekt Indonesia Manufacturing",
  "08": "TMMIN - Toyota Motor Manufacturing Indonesia",
  "09": "Epson Indonesia",
};
``
const engineeringStack = [
  "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "REST APIs",
  "PostgreSQL", "Prisma", "MongoDB", "Mongoose", "Redis", "Socket.IO",
  "MQTT", "Node-RED", "NextAuth", "Zod", "TanStack Query", "Zustand",
  "Redux Toolkit", "Docker", "Git", "Excel / XLSX", "PDF generation", "Data visualization",
];

const visualScenes: Record<string, string> = {
  "01": "AMR mobile robot · Live dispatch",
  "02": "CTU transfer · Tote movement",
  "03": "MES check · Quality gate",
  "04": "WMS scan · Rack storage",
  "05": "Line supply · Component flow",
  "06": "FMR robot · Fleet telemetry",
  "07": "Warehouse pick · Stock flow",
  "08": "Battery supply · Gate signal",
  "09": "Ribbon flow · Smart warehouse",
};

const equipmentVisuals: Partial<Record<string, "amr" | "ctu" | "fmr">> = { "01": "amr", "02": "ctu", "06": "fmr" };

export default function Home() {
  return <main>
    <nav className="nav"><a className="brand" href="#top">Feizal<span>Reza</span></a><div><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
    <section className="hero" id="top">
      <p className="kicker">Software Engineering · MES · WMS · industrial integrations <span>— Indonesia</span></p>
      <div className="hero-title"><h1>Engineering<br /><i>operations</i> into<br />clarity.</h1><HeroSystemAnimation /></div>
      <div className="hero-bottom"><p>I build practical web systems that help teams move materials, monitor automation, protect quality, and make better operational decisions.</p><a href="#work" className="scroll">Scroll to explore <b>↓</b></a></div>
    </section>
    <section className="intro" id="about"><p className="kicker">Profile</p><h2>From warehouse movement to autonomous fleets, I build the <i>digital layer</i> behind physical operations.</h2><p className="intro-copy">My work turns complex process logic into readable, reliable interfaces—built for operators, supervisors, and managers who need accurate information at the moment it matters.</p></section>
    <section className="focus"><p className="kicker">MES & WMS focus</p><div className="focus-grid"><article><span>MES</span><h2>Production execution, quality, and traceability.</h2><p>Production and machine monitoring, workstations, Dandori/changeover, tool control, QC checksheets, final inspection, approval flows, NG handling, labels, and delivery visibility.</p></article><article><span>WMS</span><h2>Inventory movement, warehouse control, and automation.</h2><p>Inbound, storage, racks, locations, boxes, kanban, picking, outbound, stock monitoring, order planning, and exception management—integrated with AMR/AGV operations.</p></article></div></section>
    <section className="services">{services.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}</section>
    <section className="work" id="work"><div className="work-head"><p className="kicker">Selected work</p><p>09 industrial systems</p></div><div className="projects">{projects.map((project, index) => <article className={`project ${project.color}`} key={project.id}>
      <div className="project-visual"><span className="visual-index">{project.id}</span><span className="visual-type">{project.type}</span><span className="scene-name">{visualScenes[project.id]}</span>{equipmentVisuals[project.id] ? <EquipmentIllustration type={equipmentVisuals[project.id] as "amr" | "ctu" | "fmr"} /> : <div className="visual-shape"><i /><i /><i /></div>}<div className="visual-grid">{project.stats.map(stat => <span key={stat}>{stat}</span>)}</div></div>
      <div className="project-detail"><div className="project-meta"><span>{project.year}</span><span>Customer · {customers[project.id]}</span></div><h3>{project.name}</h3><p className="lead">{project.description}</p><p>{project.scope}</p><p className="integration"><b>Integration layer</b>{integrations[project.id]}</p><div className="tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div>
    </article>)}</div></section>
    <section className="integration-map"><p className="kicker">WMS & external integrations</p><h2>A WMS is not an island. It is the <i>operational hub</i> between people, inventory, automation, and external services.</h2><div className="map-grid"><article><span>01</span><h3>Warehouse core</h3><p>Inventory, racks, locations, parts, boxes, kanban, orders, user roles, audit logs, and operational task state.</p></article><article><span>02</span><h3>Automation layer</h3><p>RCS and AMR/AGV task services, robot state, robot callbacks, manual and automatic calls, fault recovery, and live maps.</p></article><article><span>03</span><h3>External ecosystem</h3><p>Redis event streams, Socket.IO, MQTT, Node-RED equipment endpoints, HIK features, label printers, laser systems, and cross-application APIs.</p></article></div></section>
    <section className="toolkit"><p className="kicker">Technology landscape</p><div className="toolkit-grid"><div><b>Frontend</b><p>Next.js · React · TypeScript · JavaScript · Tailwind CSS · Material UI · Redux Toolkit · Zustand</p></div><div><b>Data & backend</b><p>PostgreSQL · Prisma · MongoDB · Mongoose · Redis · NextAuth · REST APIs · Zod</p></div><div><b>Real-time & operations</b><p>Socket.IO · MQTT · AGV/AMR monitoring · Workflow design · Charts · PDFs · Excel integration</p></div></div></section>
    <section className="system-stack"><div><p className="kicker">Engineering capabilities</p><h2>Technology selected for reliable <i>MES, WMS,</i> and automation software.</h2></div><div className="stack-list">{engineeringStack.map((technology, index) => <span key={technology}><b>{String(index + 1).padStart(2, "0")}</b>{technology}</span>)}</div></section>
    <footer id="contact"><p className="kicker">Let&apos;s connect</p><h2>Building an operation that needs to <i>move better?</i></h2><p>Let&apos;s turn it into a system your team can trust.</p><a href="mailto:hello@example.com">Start a conversation <span>↗</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Feizal Reza</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
