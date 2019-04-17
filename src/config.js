module.exports = {
  markdownItOptions: {
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: "language-",
    linkify: true,
    typographer: false,
    quotes: "“”‘’"
  },
  scrollToOptions: {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  },
  dateFormat: "MMMM DD, YYYY",
  authors: [
    {
      name: "Lily Gleicher, Ph.D.",
      url: "http://www.icjia.org/biographies/lily-gleicher"
    }
  ],
  lastUpdate: "2019-04-16",
  siteConfig: {
    pages: {
      type: "page",
      sortOn: "position"
    },
    intercepts: {
      type: "modal",
      sortOn: "position"
    }
  },

  primaryColor: "cyan darken-4",
  theme: {
    dark: {
      color: "#333",
      background: "#fafafa"
    },
    light: {
      color: "#333",
      background: "#efefef"
    },
    white: {
      color: "#333",
      background: "#fff"
    },
    icjia: {
      color: "#fff",
      background: "#006064"
    }
  },
  debug: false
};
