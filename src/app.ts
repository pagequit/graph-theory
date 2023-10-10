/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import init, { greet } from "../public/build/graph_theory.js";
import cytoscape from "cytoscape";

await init();
greet();

const cy = cytoscape({
  container: document.getElementById("app"),
  style: [
    {
      selector: "node",
      style: {
        "label": "data(id)",
        "color": "#8fa1b2",
        "background-color": "#46afe3",
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
    {
      selector: ".highlighted",
      style: {
        "background-color": "#df80ff",
        "line-color": "#df80ff",
        "target-arrow-color": "#df80ff",
        "transition-property":
          "background-color, line-color, target-arrow-color",
        "transition-duration": "0.3s",
      },
    },
  ],
  elements: {
    nodes: [
      { data: { id: "a" } },
      { data: { id: "b" } },
      { data: { id: "c" } },
      { data: { id: "d" } },
      { data: { id: "e" } },
      { data: { id: "f" } },
    ],

    edges: [
      { data: { id: "ae", weight: 1, source: "a", target: "e" } },
      { data: { id: "ab", weight: 3, source: "a", target: "b" } },
      { data: { id: "be", weight: 4, source: "b", target: "e" } },
      { data: { id: "bc", weight: 5, source: "b", target: "c" } },
      { data: { id: "ce", weight: 6, source: "c", target: "e" } },
      { data: { id: "cd", weight: 2, source: "c", target: "d" } },
      { data: { id: "de", weight: 7, source: "d", target: "e" } },
      { data: { id: "bf", weight: 2, source: "b", target: "f" } },
    ],
  },
  layout: {
    name: "breadthfirst",
    directed: true,
    roots: "#a",
    padding: 10,
  },
});

cy.getElementById("a").addClass("highlighted");
cy.getElementById("ab").addClass("highlighted");
cy.getElementById("b").addClass("highlighted");

// const bfs = cy.elements().bfs("#a", () => {}, true);

// let i = 0;
// const highlightNextEle = function () {
//   if (i < bfs.path.length) {
//     bfs.path[i].addClass("highlighted");

//     i++;
//     setTimeout(highlightNextEle, 1000);
//   }
// };

// // kick off first highlight
// highlightNextEle();
