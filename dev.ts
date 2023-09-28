Bun.build({
  entrypoints: ["./src/app.ts"],
  outdir: "./dist",
  target: "browser",
});

Bun.serve({
  fetch(request: Request) {
    const reqPath = new URL(request.url).pathname;
    console.log(request.method, reqPath);

    switch (reqPath) {
      case "/app.js":
        return new Response(Bun.file(import.meta.dir + "/dist/app.js"));
      case "/graph_theory_bg.wasm":
        return new Response(
          Bun.file(import.meta.dir + "/pkg/graph_theory_bg.wasm"),
        );
      case "/":
      default:
        return new Response(Bun.file(import.meta.dir + "/public/index.html"));
    }
  },
});
