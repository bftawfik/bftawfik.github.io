(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    26: function (e, t, a) {},
    32: function (e, t, a) {
      e.exports = a(58);
    },
    41: function (e, t, a) {},
    46: function (e, t, a) {},
    47: function (e, t, a) {},
    48: function (e, t, a) {},
    49: function (e, t, a) {},
    50: function (e, t, a) {},
    51: function (e, t, a) {},
    52: function (e, t, a) {},
    53: function (e, t, a) {},
    54: function (e, t, a) {},
    55: function (e, t, a) {},
    56: function (e, t, a) {},
    57: function (e, t, a) {},
    58: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        i = a(27),
        o = a.n(i),
        s = a(3),
        c = a(4),
        l = a(6),
        p = a(5),
        m = a(7),
        u = a(59),
        h = a(31),
        g = a(61),
        f = a(28),
        b = a.n(f),
        d = a(30),
        j = a.n(d),
        k = a(60),
        v = a(9),
        E = a.n(v),
        w = a(2),
        L = a.n(w),
        y =
          (a(41),
          (function (e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      E.a,
                      { className: "BftHeader" },
                      r.a.createElement(
                        L.a,
                        { xl: "12", className: "logo" },
                        r.a.createElement(k.a, {
                          to: "/",
                          activeClassName: "selected",
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        S =
          (a(46),
          (function (e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      E.a,
                      { className: "BftNav" },
                      r.a.createElement(
                        L.a,
                        { md: "4", sm: "12" },
                        r.a.createElement(
                          k.a,
                          { exact: !0, to: "/", activeClassName: "selected" },
                          r.a.createElement(
                            "h4",
                            { className: "navLink" },
                            "Home"
                          )
                        )
                      ),
                      r.a.createElement(
                        L.a,
                        { md: "4", sm: "12" },
                        r.a.createElement(
                          k.a,
                          { to: "/portfolio", activeClassName: "selected" },
                          r.a.createElement(
                            "h4",
                            { className: "navLink" },
                            "Portfolio"
                          )
                        )
                      ),
                      r.a.createElement(
                        L.a,
                        { md: "4", sm: "12" },
                        r.a.createElement(
                          k.a,
                          {
                            to: "/infoandcontact",
                            activeClassName: "selected",
                          },
                          r.a.createElement(
                            "h4",
                            { className: "navLink" },
                            "Info & Contact"
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        O =
          (a(47),
          a(48),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(s.a)(this, t),
                ((a = Object(l.a)(this, Object(p.a)(t).call(this, e))).state =
                  {}),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = "",
                      a = "";
                    return (
                      this.props.quotesList &&
                        ((e = Math.floor(
                          Math.random() * this.props.quotesList.length
                        )),
                        (t = this.props.quotesList[e].body),
                        (a = this.props.quotesList[e].owner)),
                      r.a.createElement(
                        "div",
                        { className: "BftQuote" },
                        r.a.createElement(
                          "h4",
                          { className: "header" },
                          "Inspirational Quotes:"
                        ),
                        r.a.createElement(
                          "h3",
                          { className: "opening" },
                          "\u201c"
                        ),
                        r.a.createElement("h4", null, t),
                        a.length > 0
                          ? r.a.createElement("p", null, '"', a, '"')
                          : null,
                        r.a.createElement(
                          "h3",
                          { className: "closing" },
                          "\u201d"
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        C = a(12),
        x =
          (a(26),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(s.a)(this, t),
                ((a = Object(l.a)(this, Object(p.a)(t).call(this, e))).state = {
                  loadingMsgs: [
                    "Loading",
                    "Loading.",
                    "Loading..",
                    "Loading...",
                  ],
                  loadingMsgId: 0,
                }),
                setInterval(
                  function () {
                    this.setState({
                      loadingMsgId: this.getNewLoadingMsgId(
                        this.state.loadingMsgId,
                        this.state.loadingMsgs.length
                      ),
                    });
                  }.bind(Object(C.a)(Object(C.a)(a))),
                  500
                ),
                a
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "getNewLoadingMsgId",
                  value: function (e, t) {
                    return (e + 1) % t;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      E.a,
                      { className: "BftFooter" },
                      r.a.createElement(
                        L.a,
                        { xl: "12", className: "logo" },
                        r.a.createElement(
                          "p",
                          null,
                          r.a.createElement(
                            "sub",
                            null,
                            this.state.loadingMsgs[this.state.loadingMsgId]
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        G = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    E.a,
                    { className: "BftBio" },
                    this.props.pageData
                      ? null
                      : r.a.createElement(
                          L.a,
                          { xl: "12" },
                          r.a.createElement(x, null)
                        ),
                    r.a.createElement(
                      L.a,
                      { xl: "12" },
                      this.props.pageData
                        ? this.props.pageData.bio.map(function (e, t) {
                            return r.a.createElement("p", { key: t }, e);
                          })
                        : null
                    ),
                    r.a.createElement(
                      L.a,
                      { xl: "12" },
                      this.props.pageData
                        ? r.a.createElement(O, {
                            quotesList: this.props.pageData.quotes,
                          })
                        : null
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        I =
          (a(49),
          a(50),
          (function (e) {
            function t(e) {
              return (
                Object(s.a)(this, t),
                Object(l.a)(this, Object(p.a)(t).call(this, e))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "div",
                      {
                        className: "BftProject",
                        onClick: this.props.resetProjectsState,
                      },
                      r.a.createElement(
                        "div",
                        {
                          className: this.props.isActive
                            ? "projectOverlay"
                            : "projectOverlay hided",
                        },
                        r.a.createElement(
                          "div",
                          { className: "projectOverlayData" },
                          r.a.createElement("h4", null, this.props.data.title),
                          r.a.createElement(
                            "div",
                            { className: "links" },
                            r.a.createElement(
                              "div",
                              { className: "externalLinks" },
                              this.props.data.externalLinks.liveVersion
                                ? r.a.createElement(
                                    "a",
                                    {
                                      href: this.props.data.externalLinks
                                        .liveVersion,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      "Live Version"
                                    )
                                  )
                                : null,
                              this.props.data.externalLinks.github
                                ? r.a.createElement(
                                    "a",
                                    {
                                      href: this.props.data.externalLinks
                                        .github,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      "Github Repository"
                                    )
                                  )
                                : null
                            ),
                            r.a.createElement(
                              "div",
                              { className: "tags" },
                              this.props.data.tags.map(function (e, t) {
                                return r.a.createElement(
                                  "span",
                                  { key: t },
                                  r.a.createElement(
                                    k.a,
                                    {
                                      to: "/portfolio/" + e.toLowerCase(),
                                      activeClassName: "selected",
                                    },
                                    e
                                  )
                                );
                              })
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "projectData" },
                        r.a.createElement("h4", null, this.props.data.title),
                        r.a.createElement("img", {
                          className: "projectImg-xl",
                          src:
                            this.props.data.projectImgPath +
                            "/8-line-height.jpg",
                          alt: this.props.data.projectImgPath,
                        }),
                        r.a.createElement("img", {
                          className: "projectImg-sm",
                          src:
                            this.props.data.projectImgPath +
                            "/5-line-height.jpg",
                          alt: this.props.data.projectImgPath,
                        }),
                        r.a.createElement(
                          "div",
                          { className: "links" },
                          r.a.createElement(
                            "div",
                            { className: "tags" },
                            this.props.data.tags.map(function (e, t) {
                              return r.a.createElement(
                                "span",
                                { key: t },
                                r.a.createElement(
                                  k.a,
                                  {
                                    to: "/portfolio/" + e.toLowerCase(),
                                    activeClassName: "selected",
                                  },
                                  e
                                )
                              );
                            })
                          ),
                          r.a.createElement(
                            "div",
                            { className: "externalLinks" },
                            this.props.data.externalLinks.liveVersion
                              ? r.a.createElement(
                                  "a",
                                  {
                                    href: this.props.data.externalLinks
                                      .liveVersion,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  r.a.createElement(
                                    "span",
                                    null,
                                    r.a.createElement("img", {
                                      src: "/img/icons/live.png",
                                      alt: "live link icon",
                                    })
                                  )
                                )
                              : null,
                            this.props.data.externalLinks.github
                              ? r.a.createElement(
                                  "a",
                                  {
                                    href: this.props.data.externalLinks.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  r.a.createElement(
                                    "span",
                                    null,
                                    r.a.createElement("img", {
                                      src: "/img/icons/projectGithub.png",
                                      alt: "github icon",
                                    })
                                  )
                                )
                              : null
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        N = (function (e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(l.a)(this, Object(p.a)(t).call(this, e))).state = {
                projectsState: "k",
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  var t = e.pageData
                    ? e.match.params.filter
                      ? e.pageData.projects.filter(function (t) {
                          return (
                            t.tags.filter(function (t) {
                              return (
                                t.toLowerCase() ===
                                e.match.params.filter.toLowerCase()
                              );
                            }).length > 0
                          );
                        })
                      : e.pageData.projects
                    : [];
                  t.sort(function (e, t) {
                    return e.order - t.order;
                  });
                  var a = t.map(function (e) {
                    return { isActive: !1 };
                  });
                  this.setState({ projectsState: a });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.pageData
                      ? this.props.match.params.filter
                        ? this.props.pageData.projects.filter(function (t) {
                            return (
                              t.tags.filter(function (t) {
                                return (
                                  t.toLowerCase() ===
                                  e.props.match.params.filter.toLowerCase()
                                );
                              }).length > 0
                            );
                          })
                        : this.props.pageData.projects
                      : [];
                  t.sort(function (e, t) {
                    return t.order - e.order;
                  });
                  var a = this.props.pageData
                    ? this.props.pageData.projects
                        .map(function (e) {
                          return e.tags;
                        })
                        .reduce(function (e, t) {
                          return e.concat(t);
                        }, [])
                        .reduce(function (e, t) {
                          return 0 ===
                            e.filter(function (e) {
                              return e === t;
                            }).length
                            ? e.concat(t)
                            : e;
                        }, [])
                    : [];
                  return r.a.createElement(
                    E.a,
                    { className: "BftAllProjects" },
                    0 === t.length
                      ? r.a.createElement(
                          L.a,
                          { xl: "12" },
                          r.a.createElement(x, null)
                        )
                      : null,
                    r.a.createElement(
                      L.a,
                      { xs: 12, className: "filter" },
                      r.a.createElement("h5", null, "Filter:")
                    ),
                    r.a.createElement(
                      L.a,
                      { xs: 12, className: "allTags" },
                      a.map(function (e, t) {
                        return r.a.createElement(
                          "span",
                          { key: t },
                          r.a.createElement(
                            k.a,
                            {
                              to: "/portfolio/" + e.toLowerCase(),
                              activeClassName: "selected",
                            },
                            e
                          )
                        );
                      })
                    ),
                    t.map(function (t, a) {
                      var n =
                        !!e.state.projectsState[a] &&
                        e.state.projectsState[a].isActive;
                      return r.a.createElement(
                        L.a,
                        { lg: "6", md: "12", key: a },
                        r.a.createElement(I, {
                          data: t,
                          resetProjectsState: e.resetProjectsState.bind(e, a),
                          isActive: n,
                        })
                      );
                    }),
                    this.props.match.params.filter
                      ? r.a.createElement(
                          L.a,
                          { xl: "12", className: "backLink" },
                          r.a.createElement(
                            k.a,
                            { to: "/portfolio" },
                            r.a.createElement(
                              "h4",
                              null,
                              r.a.createElement("img", {
                                src: "../img/icons/back.png",
                                alt: "back button",
                              }),
                              "Back to Portofolio"
                            )
                          )
                        )
                      : null
                  );
                },
              },
              {
                key: "resetProjectsState",
                value: function (e) {
                  var t = this.state.projectsState.map(function (t, a) {
                    return { isActive: e == a };
                  });
                  this.setState({ projectsState: t });
                },
              },
            ]),
            t
          );
        })(n.Component),
        P =
          (a(51),
          a(52),
          (function (e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      E.a,
                      { className: "BftInfo" },
                      r.a.createElement(
                        L.a,
                        { xl: "12" },
                        r.a.createElement(
                          "h4",
                          null,
                          this.props.infoData ? this.props.infoData.name : ""
                        )
                      ),
                      r.a.createElement(
                        L.a,
                        { xl: "12" },
                        this.props.infoData
                          ? this.props.infoData.data.map(function (e, t) {
                              return r.a.createElement("p", { key: t }, e);
                            })
                          : ""
                      ),
                      r.a.createElement(
                        L.a,
                        { xl: "12" },
                        r.a.createElement(
                          "a",
                          {
                            href: this.props.infoData
                              ? this.props.infoData.resume
                              : "",
                          },
                          r.a.createElement("h4", null, "Resume (C.V.)")
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        R =
          (a(53),
          a(54),
          (function (e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "a",
                      {
                        href: this.props.data.link,
                        alt: this.props.data.label,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "BftSingleContact",
                      },
                      r.a.createElement("img", {
                        src: this.props.data.icon,
                        alt: this.props.data.label,
                      }),
                      r.a.createElement("p", null, this.props.data.label)
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        M = (function (e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(l.a)(this, Object(p.a)(t).call(this, e))).state =
                {}),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    E.a,
                    { className: "BftContacts" },
                    this.props.contactsData
                      ? this.props.contactsData.map(function (e, t) {
                          return (
                            console.log(t),
                            r.a.createElement(
                              L.a,
                              { xl: "12", key: t, className: "contactsGroups" },
                              r.a.createElement(
                                E.a,
                                null,
                                e.map(function (e, a) {
                                  return 2 !== t
                                    ? r.a.createElement(
                                        L.a,
                                        { md: "6", key: a },
                                        r.a.createElement(R, { data: e })
                                      )
                                    : r.a.createElement(
                                        L.a,
                                        { xl: "12", key: a },
                                        r.a.createElement(R, { data: e })
                                      );
                                })
                              )
                            )
                          );
                        })
                      : ""
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        T = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    E.a,
                    { className: "BftInfoAndContact" },
                    this.props.pageData
                      ? null
                      : r.a.createElement(
                          L.a,
                          { xl: "12" },
                          r.a.createElement(x, null)
                        ),
                    r.a.createElement(
                      L.a,
                      { xl: "12" },
                      r.a.createElement(P, {
                        infoData: this.props.pageData
                          ? this.props.pageData.info
                          : null,
                      })
                    ),
                    r.a.createElement(
                      L.a,
                      { xl: "12" },
                      r.a.createElement(M, {
                        contactsData: this.props.pageData
                          ? this.props.pageData.contactsGroups
                          : null,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        D = (function (e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    E.a,
                    { className: "BftFooter" },
                    r.a.createElement(
                      L.a,
                      { xl: "12", className: "logo" },
                      r.a.createElement(
                        "p",
                        null,
                        r.a.createElement(
                          "sub",
                          null,
                          "\xa9 2019 bftawfik.github.io All Rights Reserved"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        B = function (e) {
          var t = e.location;
          return r.a.createElement(
            "div",
            { className: "whoops-404" },
            r.a.createElement("h1", null, "Whoops, route not found"),
            r.a.createElement("p", null, "Cannot find content for ", t.pathname)
          );
        },
        H = {
          home: {
            bio: [
              "I'm a front-end developer, seeking a junior / intermediate position in an organization where I can find new challenges and opportunities to build myself and reach my full potential.",
              "I'm a hard worker and I will put all my efforts for the good progress of the organization.",
              "And being honest and punctual, I can finish my tasks on time, and do my best to fulfill all the requirements of my job.",
            ],
            quotes: [
              {
                body: "Failure Is Success If We Learn From It.",
                owner: "Malcolm Forbes",
              },
              {
                body: "Never Stop Learning, Because Life Never Stops Teaching.",
                owner: "",
              },
              {
                body: "You'll Never Learn If You Don't Make Mistakes.",
                owner: "",
              },
              {
                body: "I've Learned That I Still Have A Lot To Learn.",
                owner: "Maya Angelou",
              },
              {
                body: "Sometimes You Win, Sometimes You Learn.",
                owner: "John C. Maxwell",
              },
              {
                body: "Don't Waste A Good Mistake. Learn From It.",
                owner: "Robert Kiyosaki",
              },
              {
                body: "Live As If You Were To Die Tomorrow. Learn As If You Were To Live Forever.",
                owner: "Mahatma Gandhi",
              },
            ],
          },
          infoandcontact: {
            contactsGroups: [
              [
                {
                  icon: "/img/icons/email.png",
                  label: "BFTawfik@gmail.com",
                  link: "mailto:bftawfik@gmail.com",
                },
                {
                  icon: "/img/icons/phone.png",
                  label: "+2 (012) 2763-3600",
                  link: "tel:+201227633600",
                },
                {
                  icon: "/img/icons/twitter.png",
                  label: "twitter.com/BFTawfik",
                  link: "https://twitter.com/BFTawfik",
                },
                {
                  icon: "/img/icons/location.png",
                  label: "Cairo - Egypt.",
                  link: "https://www.google.com/maps/@30.0594838,31.2234448,13z",
                },
              ],
              [
                {
                  icon: "/img/icons/linkedin.png",
                  label: "linkedin.com/in/bftawfik",
                  link: "https://www.linkedin.com/in/bftawfik",
                },
                {
                  icon: "/img/icons/github.png",
                  label: "github.com/bftawfik",
                  link: "https://www.github.com/bftawfik",
                },
                {
                  icon: "/img/icons/freecodecamp.png",
                  label: "freecodecamp.org/bftawfik",
                  link: "https://www.freecodecamp.org/bftawfik",
                },
                {
                  icon: "/img/icons/codepen.png",
                  label: "codepen.io/bftawfik",
                  link: "https://www.codepen.io/bftawfik",
                },
              ],
              [
                {
                  icon: "/img/icons/resume.png",
                  label: "Resume (C.V.)",
                  link: "/docs/Bishoy_Farouk_Resume.pdf",
                },
                {
                  icon: "/img/icons/website.png",
                  label: "BFTawfik.github.io",
                  link: "https://bftawfik.github.io/",
                },
              ],
            ],
            info: {
              data: [
                "I'm an experienced front-end developer seeking a junior / intermediate position.",
                "Keen to improve my knowledge and learn new useful techniques, and push the limits of my skills.",
                "",
                "Date of birth: 26/8/1980.",
                "Place of birth: Giza.",
                "Nationality: Egyptian.",
                "Marital Status: Happily Married.",
              ],
              name: "Bishoy Farouk Tawfik",
              resume: "/docs/Bishoy_Farouk_Resume.pdf",
            },
          },
          portfolio: {
            projects: [
              {
                externalLinks: { liveVersion: "https://www.estatebook.com/" },
                order: "22",
                projectImgPath: "/img/projects/estatebook",
                tags: [
                  "Typescript",
                  "Javascript",
                  "Next.js",
                  "App directory",
                  "SSR",
                  "SEO",
                  "React.js",
                  "React Query",
                  "Zustand",
                  "Git",
                  "HTML5",
                  "CSS",
                  "Tailwind",
                ],
                title: "Estatebook",
              },
              {
                externalLinks: { liveVersion: "https://app.pmidigiperf.com/" },
                order: "22",
                projectImgPath: "/img/projects/digiperf",
                tags: [
                  "Typescript",
                  "Javascript",
                  "React.js",
                  "React Router",
                  "React Query",
                  "React Table",
                  "Redux",
                  "Single SPA React",
                  "Formik",
                  "Git",
                  "HTML5",
                  "CSS",
                ],
                title: "PMI Digiperf",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/kinda-games",
                },
                order: "21",
                projectImgPath: "/img/projects/kindagames",
                tags: [
                  "Typescript",
                  "Javascript",
                  "React.js",
                  "React Router",
                  "Git",
                  "Github",
                  "Sass",
                  "HTML5",
                  "CSS",
                ],
                title: "Kinda Games",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/elegant-games",
                },
                order: "20",
                projectImgPath: "/img/projects/elegantgames",
                tags: [
                  "Typescript",
                  "Javascript",
                  "React.js",
                  "React Router",
                  "Git",
                  "Github",
                  "Sass",
                  "HTML5",
                  "CSS",
                ],
                title: "Elegant Games",
              },
              {
                externalLinks: { liveVersion: "https://www.azizsallab.com/" },
                order: "19",
                projectImgPath: "/img/projects/sallab",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Gitlab",
                  "Sass",
                  "HTML5",
                  "CSS",
                ],
                title: "El-Sallab",
              },
              {
                externalLinks: {
                  liveVersion: "https://uat.nasnav.org/tseppas-beta",
                },
                order: "18",
                projectImgPath: "/img/projects/tseppas",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Gitlab",
                  "Sass",
                  "HTML5",
                  "CSS",
                ],
                title: "Tseppas Beta",
              },
              {
                externalLinks: "",
                order: "17",
                projectImgPath: "/img/projects/homeetal",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Gitlab",
                  "Sass",
                  "HTML5",
                  "CSS",
                ],
                title: "Homeetal",
              },
              {
                externalLinks: "",
                order: "16",
                projectImgPath: "/img/projects/platino",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Gitlab",
                  "Sass",
                  "HTML5",
                  "CSS",
                ],
                title: "Platino",
              },
              {
                externalLinks: "",
                order: "15",
                projectImgPath: "/img/projects/rasport",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Github",
                  "Gitlab",
                  "Sass",
                ],
                title: "Ra-Sport Beta",
              },
              {
                externalLinks: "",
                order: "14",
                projectImgPath: "/img/projects/levis",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Github",
                  "Gitlab",
                  "Sass",
                ],
                title: "Levi's",
              },
              {
                externalLinks: {
                  github:
                    "https://github.com/bftawfik/Twitter_Bot_Tutorial_Node.js_and_Processing",
                  liveVersion: "https://twitter.com/2Bftawfik",
                },
                order: "13",
                projectImgPath: "/img/projects/bftawfikbot2",
                tags: [
                  "Javascript",
                  "Node.js",
                  "Twit",
                  "Twitter Api",
                  "Git",
                  "Github",
                  "Illustrator",
                ],
                title: "Twitter Bot 2",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/myPortofolio",
                  liveVersion: "https://bftawfik.github.io",
                },
                order: "12",
                projectImgPath: "/img/projects/myportfolio",
                tags: [
                  "Javascript",
                  "Node.js",
                  "React.js",
                  "React Router",
                  "Git",
                  "Github",
                  "Illustrator",
                  "Bootstrap",
                  "Express",
                  "Firebase",
                  "Sass",
                ],
                title: "My Portfolio",
              },
              {
                externalLinks: "",
                order: "11",
                projectImgPath: "/img/projects/hawadeetnet",
                tags: ["Javascript", "Wordpress", "HTML5", "CSS", "Photoshop"],
                title: "Hawadeet.net",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/spaceWarGame",
                  liveVersion: "https://bftawfik.github.io/old-game-space-war/",
                },
                order: "10",
                projectImgPath: "/img/projects/spacewargame",
                tags: [
                  "Game",
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "CSS",
                  "Github",
                  "Photoshop",
                  "Illustrator",
                  "Audition",
                ],
                title: "Space War Game",
              },
              {
                externalLinks: {
                  github:
                    "https://github.com/bftawfik/old-game-red-riding-hood",
                  liveVersion:
                    "https://bftawfik.github.io/old-game-red-riding-hood/",
                },
                order: "9",
                projectImgPath: "/img/projects/redridinghoodgame",
                tags: [
                  "Game",
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "CSS",
                  "Github",
                  "Photoshop",
                  "Illustrator",
                  "Audition",
                ],
                title: "Red Riding Hood Game",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/old-game-pirates-escape",
                  liveVersion:
                    "https://bftawfik.github.io/old-game-pirates-escape/",
                },
                order: "8",
                projectImgPath: "/img/projects/piratesescapegame",
                tags: [
                  "Game",
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "CSS",
                  "Github",
                  "Photoshop",
                  "Illustrator",
                  "Audition",
                ],
                title: "Pirates Escape Game",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/old-game-rabbit-run",
                  liveVersion:
                    "https://bftawfik.github.io/old-game-rabbit-run/",
                },
                order: "7",
                projectImgPath: "/img/projects/rabbitrungame",
                tags: [
                  "Unfinished",
                  "Game",
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "Phaser.js",
                  "CSS",
                  "Github",
                  "Photoshop",
                  "Illustrator",
                  "Audition",
                ],
                title: "Unfinished Rabbit Run Game",
              },
              {
                externalLinks: {
                  github:
                    "https://github.com/bftawfik/old-game-the-grave-escape",
                  liveVersion:
                    "https://bftawfik.github.io/old-game-the-grave-escape/",
                },
                order: "6",
                projectImgPath: "/img/projects/thegraveescapegame",
                tags: [
                  "Unfinished",
                  "Game",
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "Phaser.js",
                  "CSS",
                  "Github",
                  "Photoshop",
                  "Illustrator",
                  "Audition",
                ],
                title: "Unfinished Pirates Escape Game",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/mvcTodos",
                  liveVersion: "https://bftawfik.github.io/mvcTodos/",
                },
                order: "5",
                projectImgPath: "/img/projects/mvctodos",
                tags: ["Javascript", "HTML5", "CSS", "Github"],
                title: "MVC Todos",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/old-game-memory",
                  liveVersion: "https://bftawfik.github.io/old-game-memory/",
                },
                order: "4",
                projectImgPath: "/img/projects/memorygame",
                tags: [
                  "Game",
                  "Javascript",
                  "HTML5",
                  "CSS",
                  "Github",
                  "Phaser.js",
                  "Photoshop",
                  "Audition",
                ],
                title: "Memory Game Using Phaser.js",
              },
              {
                externalLinks: "",
                order: "3",
                projectImgPath: "/img/projects/memorygame2",
                tags: [
                  "Game",
                  "Javascript",
                  "DOM",
                  "HTML5",
                  "CSS",
                  "Git",
                  "Github",
                ],
                title: "Udacity Memory Game Project",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/old-game-globby",
                  liveVersion: "https://bftawfik.github.io/old-game-globby/",
                },
                order: "2",
                projectImgPath: "/img/projects/globbyhtml5game",
                tags: [
                  "Game",
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "Pug",
                  "CSS",
                  "Sass",
                  "jQuery",
                  "Git",
                  "Github",
                ],
                title: "Globby HTML5 Game",
              },
              {
                externalLinks: {
                  github: "https://github.com/bftawfik/canvasClock",
                  liveVersion: "https://bftawfik.github.io/canvasClock/",
                },
                order: "1",
                projectImgPath: "/img/projects/canvasclock",
                tags: [
                  "Javascript",
                  "HTML5",
                  "Canvas",
                  "Pug",
                  "CSS",
                  "Sass",
                  "jQuery",
                  "Git",
                  "Github",
                ],
                title: "Canvas Clock",
              },
            ],
          },
        },
        J = (function (e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(l.a)(this, Object(p.a)(t).call(this, e))).state = {
                pages: H,
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = b()();
                  return r.a.createElement(
                    u.a,
                    { history: t },
                    r.a.createElement(
                      j.a,
                      { className: "App" },
                      r.a.createElement(h.a, {
                        exact: !0,
                        path: "*",
                        component: y,
                      }),
                      r.a.createElement(h.a, {
                        exact: !0,
                        path: "*",
                        component: S,
                      }),
                      r.a.createElement(
                        g.a,
                        null,
                        r.a.createElement(h.a, {
                          exact: !0,
                          path: "/",
                          render: function (t) {
                            return r.a.createElement(
                              G,
                              Object.assign({}, t, {
                                pageData: e.state.pages.home,
                              })
                            );
                          },
                        }),
                        r.a.createElement(h.a, {
                          exact: !0,
                          path: "/portfolio",
                          render: function (t) {
                            return r.a.createElement(
                              N,
                              Object.assign({}, t, {
                                pageData: e.state.pages.portfolio,
                              })
                            );
                          },
                        }),
                        r.a.createElement(h.a, {
                          exact: !0,
                          path: "/portfolio/:filter",
                          render: function (t) {
                            return r.a.createElement(
                              N,
                              Object.assign({}, t, {
                                pageData: e.state.pages.portfolio,
                              })
                            );
                          },
                        }),
                        r.a.createElement(h.a, {
                          exact: !0,
                          path: "/infoandcontact",
                          render: function (t) {
                            return r.a.createElement(
                              T,
                              Object.assign({}, t, {
                                pageData: e.state.pages.infoandcontact,
                              })
                            );
                          },
                        }),
                        r.a.createElement(h.a, { component: B })
                      ),
                      r.a.createElement(h.a, {
                        exact: !0,
                        path: "*",
                        component: D,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        A =
          (a(55),
          function () {
            return r.a.createElement(J, null);
          });
      a(56),
        a(57),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      o.a.render(r.a.createElement(A, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.ddb426fb.chunk.js.map
