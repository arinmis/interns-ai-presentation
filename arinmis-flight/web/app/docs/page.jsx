"use client";

import { useEffect } from "react";

const CSS = "https://unpkg.com/swagger-ui-dist@5/swagger-ui.css";
const JS = "https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js";

export default function Docs() {
  useEffect(() => {
    // load Swagger UI CSS once
    if (!document.querySelector(`link[href="${CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS;
      document.head.appendChild(link);
    }

    function init() {
      if (window.SwaggerUIBundle) {
        window.SwaggerUIBundle({
          url: "/api/openapi",
          dom_id: "#swagger",
          presets: [window.SwaggerUIBundle.presets.apis],
          layout: "BaseLayout",
          tryItOutEnabled: true,
        });
      }
    }

    const existing = document.querySelector(`script[src="${JS}"]`);
    if (existing) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = JS;
      script.onload = init;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ background: "#fff", minHeight: "calc(100vh - 56px)" }}>
      <div id="swagger" />
    </div>
  );
}
