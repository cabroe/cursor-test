// Mapping für Titel, Pretitel, Icon und optionale Submenüs
export type PageTitleEntry = {
  title: string;
  pretitle: string;
  icon: string;
  children?: Record<string, PageTitleEntry>;
};

export const pageTitles: Record<string, PageTitleEntry> = {
  "/": { title: "Startseite", pretitle: "Startseite", icon: "fas fa-home" },
  "/zeiten": { title: "Zeiten", pretitle: "Zeiterfassung", icon: "fas fa-clock" },
  "/einstellungen": { title: "Einstellungen", pretitle: "Konfiguration", icon: "fas fa-cog" },
  "/demos": {
    title: "Demos",
    pretitle: "Beispiele",
    icon: "fas fa-flask",
    children: {
      "/modal-demo": { title: "Modal Demo", pretitle: "Beispielseite", icon: "fas fa-window-restore" },
      "/toast-demo": { title: "Toast Demo", pretitle: "Beispielseite", icon: "fas fa-bell" },
    }
  },
};