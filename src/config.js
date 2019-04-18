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
  meta: {
    url: "https://continuum-drug.netlify.com",
    title:
      "Reducing Substance Abuse Disorders and Related Offending: A Continuum of Evidence-Informed Practices in the Criminal Justice System",
    description:
      "In the United States, more than 20 million individuals have substance use disorders (SUDs)—not including individuals with more mild or moderate substance use and misuse. Of those with SUDs, just over 10 percent ultimately receive treatment. On average, costs incurred in the United States from alcohol and drug use due to lost work productivity, health care expenses, motor vehicle accidents, and criminal justice costs exceeds $400 billion. Almost half of the cost is at the taxpayers’ expense.",
    twitterUser: "ICJIA_Illinois"
  },

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
