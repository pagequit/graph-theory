/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import init, { greet } from "../public/build/graph_theory.js";
import cytoscape from "cytoscape";

await init();
greet();

cytoscape({
  container: document.getElementById("app"),
  elements: [
    {
      data: {
        id: "a",
      },
    },
    {
      data: {
        id: "b",
      },
    },
    {
      data: {
        id: "ab",
        source: "a",
        target: "b",
      },
    },
  ],
  style: [
    {
      selector: "node",
      style: {
        "label": "data(id)",
        "color": "#8fa1b2",
        "background-color": "#df80ff ",
      },
    },
    {
      selector: "edge",
      style: {
        "width": 3,
        "line-color": "#46afe3",
        "target-arrow-color": "#46afe3",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ],
  layout: {
    name: "grid",
    rows: 1,
  },
});
