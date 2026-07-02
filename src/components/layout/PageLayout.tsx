import React from "react";
import "./pageLayout.css";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="page-layout">
      <div className="page-container">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;