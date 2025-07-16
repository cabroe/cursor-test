import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
import { pageTitles } from "../routes/routeConfig";

function findPageEntry(pathname: string, entries: Record<string, any>) {
  return entries[pathname];
}

const PageHeaderWithRoute: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const page = findPageEntry(pathname, pageTitles) || { title: "", pretitle: "" };
  return (
    <PageHeader>
      <div className="col">
        <div className="text-body-secondary mt-1">
          {page.pretitle && <div className="page-pretitle">{page.pretitle}</div>}
        </div>
        <h2 className="page-title">{page.title}</h2>
      </div>
    </PageHeader>
  );
};

export default PageHeaderWithRoute; 