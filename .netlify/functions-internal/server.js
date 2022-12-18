var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
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
  { rel: "stylesheet", href: global_default },
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
], meta = () => {
  let description = "Learn Remix and laugh at the same time!";
  return {
    charset: "utf-8",
    description,
    keywords: "Remix,jokes",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@remix_run",
    "twitter:site": "@remix_run",
    "twitter:title": "Remix Jokes",
    "twitter:description": description
  };
};
function Document({
  children,
  title = "Remix: So great, it's funny!"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
    caught.status,
    " ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Uh-oh!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "App Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

// app/routes/jokes[.]rss.tsx
var jokes_rss_exports = {};
__export(jokes_rss_exports, {
  loader: () => loader
});

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/routes/jokes[.]rss.tsx
function escapeCdata(s) {
  return s.replace(/\]\]>/g, "]]]]><![CDATA[>");
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
var loader = async ({ request }) => {
  let jokes = await db.joke.findMany({
    take: 100,
    orderBy: { createdAt: "desc" },
    include: { jokester: { select: { username: !0 } } }
  }), host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host)
    throw new Error("Could not determine domain URL.");
  let jokesUrl = `${`${host.includes("localhost") ? "http" : "https"}://${host}`}/jokes`, rssString = `
    <rss xmlns:blogChannel="${jokesUrl}" version="2.0">
      <channel>
        <title>Remix Jokes</title>
        <link>${jokesUrl}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${jokes.map(
    (joke) => `
            <item>
              <title><![CDATA[${escapeCdata(joke.name)}]]></title>
              <description><![CDATA[A funny joke called ${escapeHtml(
      joke.name
    )}]]></description>
              <author><![CDATA[${escapeCdata(
      joke.jokester.username
    )}]]></author>
              <pubDate>${joke.createdAt.toUTCString()}</pubDate>
              <link>${jokesUrl}/${joke.id}</link>
              <guid>${jokesUrl}/${joke.id}</guid>
            </item>
          `.trim()
  ).join(`
`)}
      </channel>
    </rss>
  `.trim();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");

// app/utils/session.server.ts
var import_bcryptjs = __toESM(require("bcryptjs")), import_node = require("@remix-run/node");
async function register({ username, password }) {
  let passwordHash = await import_bcryptjs.default.hash(password, 10);
  return { id: (await db.user.create({
    data: { username, passwordHash }
  })).id, username };
}
async function login({ username, password }) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await import_bcryptjs.default.compare(password, user.passwordHash) ? null : { id: user.id, username };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({
      where: { id: userId },
      select: { id: !0, username: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/routes/logout.tsx
var action = async ({ request }) => logout(request), loader2 = async () => (0, import_node2.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links2,
  meta: () => meta2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-N5UQ7QMB.css";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: styles_default }], meta2 = () => ({
  title: "Remix: So great, it's funny!",
  description: "Remix jokes app. Learn Remix and laugh at the same time!"
});
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      "Remix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Jokes!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "jokes", children: "Read Jokes" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-LEVQJFT3.css";

// app/routes/jokes.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: jokes_default }], loader3 = async ({ request }) => {
  let jokeListItems = await db.joke.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: { id: !0, name: !0 }
  }), user = await getUser(request);
  return (0, import_node3.json)({
    jokeListItems,
    user
  });
};
function JokesRoute() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react4.Link,
        {
          prefetch: "intent",
          to: "/",
          title: "Remix Jokes",
          "aria-label": "Remix Jokes",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
              fileName: "app/routes/jokes.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
              fileName: "app/routes/jokes.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 36,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      data.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: `Hi ${data.user.username}` }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "button", children: "Logout" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/login", children: "Login" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: data.jokeListItems.map((joke) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: joke.id, children: joke.name }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 68,
          columnNumber: 19
        }, this) }, joke.id, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "new", className: "button", children: "Add your own" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => JokeRoute,
  loader: () => loader4,
  meta: () => meta3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/joke.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function JokeDisplay({
  canDelete = !0,
  isOwner,
  joke
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/components/joke.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: joke.content }, void 0, !1, {
      fileName: "app/components/joke.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: ".", children: [
      joke.name,
      " Permalink"
    ] }, void 0, !0, {
      fileName: "app/components/joke.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    isOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        className: "button",
        disabled: !canDelete,
        name: "intent",
        type: "submit",
        value: "delete",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/components/joke.tsx",
        lineNumber: 20,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/joke.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/joke.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$jokeId.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta3 = ({ data }) => data ? {
  title: `"${data.joke.name}" joke`,
  description: `Enjoy the "${data.joke.name}" joke and much more`
} : {
  title: "No joke",
  description: "No joke found"
}, loader4 = async ({ params, request }) => {
  let userId = await getUserId(request), joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Response("What a joke! Not found.", {
      status: 404
    });
  return (0, import_node4.json)({
    joke,
    isOwner: userId === joke.jokesterId
  });
}, action2 = async ({ params, request }) => {
  let form = await request.formData();
  if (form.get("intent") !== "delete")
    throw new Response(`The intent ${form.get("intent")} is not supported`, {
      status: 400
    });
  let userId = await requireUserId(request), joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Response("Can't delete what does not exist", {
      status: 404
    });
  if (joke.jokesterId !== userId)
    throw new Response("Pssh, nice try. That's not your joke", { status: 403 });
  return await db.joke.delete({ where: { id: params.jokeId } }), (0, import_node4.redirect)("/jokes");
};
function JokeRoute() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(JokeDisplay, { isOwner: data.isOwner, joke: data.joke }, void 0, !1, {
    fileName: "app/routes/jokes/$jokeId.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react6.useCatch)(), params = (0, import_react6.useParams)();
  switch (caught.status) {
    case 400:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: "What you're trying to do is not allowed." }, void 0, !1, {
        fileName: "app/routes/jokes/$jokeId.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
    case 404:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: [
        "Huh? What the heck is ",
        params.jokeId,
        "?"
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$jokeId.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this);
    case 403:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: [
        "Sorry, but ",
        params.jokeId,
        " is not your joke."
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$jokeId.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this);
    default:
      throw new Error(`Unhandled error: ${caught.status}`);
  }
}
function ErrorBoundary2() {
  let { jokeId } = (0, import_react6.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: `There was an error loading joke by the id ${jokeId}. Sorry.` }, void 0, !1, {
    fileName: "app/routes/jokes/$jokeId.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => JokesIndexRoute,
  loader: () => loader5
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader5 = async () => {
  let count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  if (!randomJoke)
    throw new Response("No random joke found", {
      status: 404
    });
  return (0, import_node5.json)({ randomJoke });
};
function JokesIndexRoute() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: data.randomJoke.content }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: data.randomJoke.id, children: [
      '"',
      data.randomJoke.name,
      '" Permalink'
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function CatchBoundary3() {
  let caught = (0, import_react7.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "error-container", children: "There are no jokes to display." }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this);
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "error-container", children: "I did a whoopsies." }, void 0, !1, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}

// app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action3,
  default: () => NewJokeRoute,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/utils/request.server.ts
var import_node6 = require("@remix-run/node"), badRequest = (data) => (0, import_node6.json)(data, { status: 400 });

// app/routes/jokes/new.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  if (!await getUserId(request))
    throw new Response("Unauthorized", { status: 401 });
  return (0, import_node7.json)({});
};
function validateJokeContent(content) {
  if (content.length < 10)
    return "That joke is too short";
}
function validateJokeName(name) {
  if (name.length < 3)
    return "That joke's name is too short";
}
var action3 = async ({ request }) => {
  let userId = await requireUserId(request), form = await request.formData(), name = form.get("name"), content = form.get("content");
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
  let joke = await db.joke.create({
    data: { ...fields, jokesterId: userId }
  });
  return (0, import_node7.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react8.useActionData)(), transition = (0, import_react8.useTransition)();
  if (transition.submission) {
    let name = transition.submission.formData.get("name"), content = transition.submission.formData.get("content");
    if (typeof name == "string" && typeof content == "string" && !validateJokeContent(content) && !validateJokeName(name))
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        JokeDisplay,
        {
          joke: { name, content },
          isOwner: !0,
          canDelete: !1
        },
        void 0,
        !1,
        {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
          "Name:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 98,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "form-validation-error", role: "alert", id: "name-error", children: actionData.fieldErrors.name }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
          "Content:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 117,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        (_h = actionData == null ? void 0 : actionData.fieldErrors) != null && _h.content ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            lineNumber: 129,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
function CatchBoundary4() {
  if ((0, import_react8.useCatch)().status === 401)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "error-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "You must be logged in to create a joke." }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/login", children: "Login" }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this);
}
function ErrorBoundary4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "error-container", children: "Something unexpected went wrong. Sorry about that." }, void 0, !1, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login,
  links: () => links4,
  meta: () => meta4
});
var import_react9 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-S2KBCZVS.css";

// app/routes/login.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta4 = () => ({
  description: "Login to submit your own jokes to Remix Jokes!",
  title: "Remix Jokes | Login"
}), links4 = () => [
  { rel: "stylesheet", href: login_default }
];
function validateUsername(username) {
  if (typeof username != "string" || username.length < 3)
    return "Usernames must be at least 3 characters long";
}
function validatePassword(password) {
  if (typeof password != "string" || password.length < 6)
    return "Passwords must be at least 6 characters long";
}
function validateUrl(url) {
  return ["/jokes", "/", "https://remix.run"].includes(url) ? url : "/jokes";
}
var action4 = async ({ request }) => {
  let form = await request.formData(), loginType = form.get("loginType"), username = form.get("username"), password = form.get("password"), redirectTo = validateUrl(form.get("redirectTo") || "/jokes");
  if (typeof loginType != "string" || typeof username != "string" || typeof password != "string" || typeof redirectTo != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fields = { loginType, username, password }, fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  switch (loginType) {
    case "login": {
      let user = await login({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Username/Password combination is incorrect"
      });
    }
    case "register": {
      if (await db.user.findFirst({
        where: { username }
      }))
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `User with username ${username} already exists`
        });
      let user = await register({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Something went wrong trying to create a new user."
      });
    }
    default:
      return badRequest({
        fieldErrors: null,
        fields,
        formError: "Login type invalid"
      });
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react9.useActionData)(), [searchParams] = (0, import_react9.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 122,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "login",
                defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) != null && _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Login"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "register",
                defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 142,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Register"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              type: "text",
              id: "username-input",
              name: "username",
              defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
              "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
              "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.username ? "username-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 153,
              columnNumber: 13
            },
            this
          ),
          (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "username-error",
              children: actionData.fieldErrors.username
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "password-input",
              name: "password",
              type: "password",
              defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
              "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password),
              "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 175,
              columnNumber: 13
            },
            this
          ),
          (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "password-error",
              children: actionData.fieldErrors.password
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 186,
              columnNumber: 15
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this) : null }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/jokes", children: "Jokes" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f11f4de9", entry: { module: "/build/entry.client-QZYJEIGQ.js", imports: ["/build/_shared/chunk-IHUDFVDN.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GIV457WT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IG24WT25.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-KTMMFDTK.js", imports: ["/build/_shared/chunk-65B4HZGS.js", "/build/_shared/chunk-C6L53BW6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-RGU6Z2CE.js", imports: ["/build/_shared/chunk-Z4IIS2F6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-4RBGGZHW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-OY65GEIH.js", imports: ["/build/_shared/chunk-K5KAN4F5.js", "/build/_shared/chunk-Z4IIS2F6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/jokes[.]rss": { id: "routes/jokes[.]rss", parentId: "root", path: "jokes.rss", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes[.]rss-6SG3ROXT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-ZTIZNDMF.js", imports: ["/build/_shared/chunk-K5KAN4F5.js", "/build/_shared/chunk-65B4HZGS.js", "/build/_shared/chunk-C6L53BW6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-URVIM235.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F11F4DE9.js" };

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
  "routes/jokes[.]rss": {
    id: "routes/jokes[.]rss",
    parentId: "root",
    path: "jokes.rss",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_rss_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
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
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
