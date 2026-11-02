import Link from "next/link";
import { SCENES } from "@/scenes/registry";
import SceneIcon from "@/scenes/SceneIcon";
import styles from "./page.module.css";

export default function MenuPage() {
  return (
    <main className={styles.page}>
      <div className={styles.statusStrip} aria-hidden />
      <header className={styles.header}>
        <p className={styles.eyebrow}>SST Smartphone</p>
        <h1 className={styles.title}>เลือกซีน</h1>
      </header>

      <ul className={styles.grid}>
        {SCENES.map((scene) => (
          <li key={scene.id}>
            <Link href={`/${scene.id}`} className={styles.card}>
              <span
                className={styles.tile}
                style={{ background: `linear-gradient(145deg, ${scene.tint[0]}, ${scene.tint[1]})` }}
              >
                <SceneIcon id={scene.id} />
              </span>
              <span className={styles.text}>
                <span className={styles.name}>{scene.title}</span>
                <span className={styles.desc}>{scene.description}</span>
              </span>
              <svg className={styles.chevron} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>

      <p className={styles.footer}>{SCENES.length} ซีน</p>
    </main>
  );
}
