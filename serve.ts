Bun.serve({
  fetch(request: Request) {
    const pathName = new URL(request.url).pathname;
    let fileName = import.meta.dir + "/public";

    if (pathName === "/") {
      fileName += "/index.html";
    } else {
      fileName += "/build" + pathName;
    }

    return new Response(Bun.file(fileName));
  },
});
