import { useLocation, Link } from "react-router-dom";
import React from "react";
export default function BreadCrumb() {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter(Boolean); // Filter out empty strings
  return (
    <div
      style={{
        marginTop: "10px",
        padding: "10px 50px",
        fontWeight: "bold",
        fontSize: "40px",
      }}
    >
      {pathParts.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={`/${pathParts.slice(0, index + 1).join("/")}`}>{item}</Link>
          {index !== pathParts.length - 1 && (
            <span style={{ margin: "0px 5px" }}> &gt; </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
