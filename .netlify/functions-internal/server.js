var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-X42EWOC3.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-AMGOQIW7.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-N4JBW4X2.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: global_default
  },
  {
    rel: "stylesheet",
    href: global_medium_default,
    media: "print, (min-width: 640px)"
  },
  {
    rel: "stylesheet",
    href: global_large_default,
    media: "screen and (min-width: 1024px)"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Remix: So great, it's funny!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-N5UQ7QMB.css";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: styles_default }];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      "Remix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Jokes!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "jokes", children: "Read Jokes" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-LEVQJFT3.css";

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/routes/jokes.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: jokes_default }], loader = async () => (0, import_node.json)({
  jokeListItems: await db.joke.findMany({
    take: 5,
    select: { id: !0, name: !0 },
    orderBy: { createdAt: "desc" }
  })
});
function JokesRoute() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: data.jokeListItems.map((joke) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: joke.id, children: joke.name }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 46,
          columnNumber: 19
        }, this) }, joke.id, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "new", className: "button", children: "Add your own" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => JokeRoute,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Error("Joke not found");
  return (0, import_node2.json)({ joke });
};
function JokeRoute() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/$jokeId.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: data.joke.content }, void 0, !1, {
      fileName: "app/routes/jokes/$jokeId.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: ".", children: [
      data.joke.name,
      " Permalink"
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/$jokeId.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/$jokeId.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async () => {
  let count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  return (0, import_node3.json)({ randomJoke });
};
function JokesIndexRoute() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: data.randomJoke.content }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: data.randomJoke.id, children: [
      '"',
      data.randomJoke.name,
      '" Permalink'
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => NewJokeRoute
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/utils/request.server.ts
var import_node4 = require("@remix-run/node"), badRequest = (data) => (0, import_node4.json)(data, { status: 400 });

// app/routes/jokes/new.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function validateJokeContent(content) {
  if (content.length < 10)
    return "That joke is too short";
}
function validateJokeName(name) {
  if (name.length < 3)
    return "That joke's name is too short";
}
var action = async ({ request }) => {
  let form = await request.formData(), name = form.get("name"), content = form.get("content");
  if (typeof name != "string" || typeof content != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  }, fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  let joke = await db.joke.create({ data: fields });
  return (0, import_node5.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react7.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
          "Name:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
              name: "name",
              "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
              "aria-errormessage": (_c = actionData == null ? void 0 : actionData.fieldErrors) != null && _c.name ? "name-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 59,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "form-validation-error", role: "alert", id: "name-error", children: actionData.fieldErrors.name }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
          "Content:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "textarea",
            {
              defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
              name: "content",
              "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
              "aria-errormessage": (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.content ? "content-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 78,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        (_h = actionData == null ? void 0 : actionData.fieldErrors) != null && _h.content ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "p",
          {
            className: "form-validation-error",
            role: "alert",
            id: "content-error",
            children: actionData.fieldErrors.content
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 90,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "33988d03", entry: { module: "/build/entry.client-RQKL7IE4.js", imports: ["/build/_shared/chunk-VZYUX5HN.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XI4ZCLOP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SQRTHMOX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-OJYXSG3G.js", imports: ["/build/_shared/chunk-4MRGMPBM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-CQ6ZK47H.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-RAIB7EXL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-RUWQVEOB.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-33988D03.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
