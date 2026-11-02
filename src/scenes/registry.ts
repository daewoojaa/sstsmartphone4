export type Scene = {
  /** URL segment: the scene lives at /<id>. */
  id: string;
  title: string;
  description: string;
  /** Two colours of the card's preview tile. */
  tint: [string, string];
};

/**
 * Every scene in the menu. To add one: create src/app/<id>/page.tsx, then
 * add an entry here (and, optionally, an icon in src/scenes/SceneIcon.tsx).
 */
export const SCENES: Scene[] = [
  {
    id: "live",
    title: "Live",
    description: "หน้าจอไลฟ์สด กล้องเต็มจอ คนดู หัวใจ และคอมเม้นที่ไหลเข้ามา",
    tint: ["#ff7a9c", "#7a5cff"],
  },
];
