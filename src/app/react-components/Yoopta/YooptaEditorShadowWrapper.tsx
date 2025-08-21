// src/react-components/yoopta-shadow-wrapper.tsx
import React from "react";
import { mountReactInShadowDom } from "src/app/utils/react-shadow-mount";
import WithBaseFullSetup from "./YooptaEditorComponent"; // your old YooptaEditor component

class YooptaEditorShadowWrapper extends HTMLElement {
  constructor() {
    super();

    mountReactInShadowDom(<WithBaseFullSetup />, this, {
      externalStylesheets: [
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
      ],
      styles: `
          button {
            color: green ;
            font-size: 1rem;
        }
        `,
    });
  }
}

customElements.define("app-yoopta", YooptaEditorShadowWrapper);
