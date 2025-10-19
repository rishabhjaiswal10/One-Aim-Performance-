import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
}
