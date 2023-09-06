import React, { useEffect } from "react";

const SiteSettings = () => {
  useEffect(() => {
    console.log("Site settings");
    if (!localStorage.getItem("lastViews")) {
      const lastViews = { products: [] };
      localStorage.setItem("lastViews", JSON.stringify(lastViews));
    }
  }, []);
  return <></>;
};

export default SiteSettings;
