import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { pageTitles } from "../routes/pageTitles";
import type { PageTitleEntry } from "../routes/pageTitles";

function findPageEntry(pathname: string, entries: Record<string, PageTitleEntry>): PageTitleEntry | undefined {
  for (const [key, entry] of Object.entries(entries)) {
    if (key === pathname) return entry;
    if (entry.children) {
      const child = findPageEntry(pathname, entry.children);
      if (child) return child;
    }
  }
  return undefined;
}

const HeaderWithRoute: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const page = findPageEntry(pathname, pageTitles) || { title: "", pretitle: "" };
  return <Header title={page.title} />;
};

export default HeaderWithRoute; 