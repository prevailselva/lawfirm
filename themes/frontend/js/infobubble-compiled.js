(function () {
    var b;

    function h(a) {
        this.extend(h, google.maps.OverlayView);
        this.b = [];
        this.d = null;
        this.g = 100;
        this.m = !1;
        a = a || {};
        void 0 == a.backgroundColor && (a.backgroundColor = this.A);
        void 0 == a.borderColor && (a.borderColor = this.B);
        void 0 == a.borderRadius && (a.borderRadius = this.C);
        void 0 == a.borderWidth && (a.borderWidth = this.D);
        void 0 == a.padding && (a.padding = this.H);
        void 0 == a.arrowPosition && (a.arrowPosition = this.u);
        void 0 == a.disableAutoPan && (a.disableAutoPan = !1);
        void 0 == a.disableAnimation && (a.disableAnimation = !1);
        void 0 == a.minWidth && (a.minWidth =
                this.G);
        void 0 == a.shadowStyle && (a.shadowStyle = this.I);
        void 0 == a.arrowSize && (a.arrowSize = this.v);
        void 0 == a.arrowStyle && (a.arrowStyle = this.w);
        void 0 == a.closeSrc && (a.closeSrc = this.F);
        m(this);
        this.setValues(a)
    }
    window.InfoBubble = h;
    b = h.prototype;
    b.v = 15;
    b.w = 0;
    b.I = 1;
    b.G = 50;
    b.u = 50;
    b.H = 10;
    b.D = 1;
    b.B = "#ccc";
    b.C = 10;
    b.A = "#fff";
    b.F = "https://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif";
    b.extend = function (a, c) {
        return function (a) {
            for (var c in a.prototype)
                this.prototype[c] = a.prototype[c];
            return this
        }.apply(a, [c])
    };

    function m(a) {
        var c = a.c = document.createElement("DIV");
        c.style.position = "absolute";
        c.style.zIndex = a.g;
        (a.i = document.createElement("DIV")).style.position = "relative";
        var d = a.j = document.createElement("IMG");
        d.style.position = "absolute";
        d.style.border = 0;
        d.style.zIndex = a.g + 1;
        d.style.cursor = "pointer";
        d.className = "js-info-bubble-close";
        d.src = a.get("closeSrc");
        google.maps.event.addDomListener(d, "click", function () {
            a.close();
            google.maps.event.trigger(a, "closeclick")
        });
        var e = a.e = document.createElement("DIV");
        e.style.overflowX = "auto";
        e.style.overflowY =
                "auto";
        e.style.cursor = "default";
        e.style.clear = "both";
        
        e.style.position = "relative";
        var placeholder = a.placeholder = document.createElement("img");
        placeholder.classList.add("marker_img");
        var placeholder_img = 'themes/frontend/images/placeholder.png';
        placeholder.src = placeholder_img;

        

        var f = a.k = document.createElement("DIV");
        e.appendChild(f);
        f = a.N = document.createElement("DIV");
        f.style.position = "relative";
        var k = a.n = document.createElement("DIV"),
                g = a.l = document.createElement("DIV"),
                l = n(a);
        k.style.position = g.style.position = "absolute";
        k.style.left = g.style.left = "50%";
        k.style.height = g.style.height = "0";
        k.style.width = g.style.width = "0";
        k.style.marginLeft = t(-l);
        k.style.borderWidth = t(l);
        k.style.borderBottomWidth =
                0;
        l = a.a = document.createElement("DIV");
        l.style.position = "absolute";
        c.style.display = l.style.display = "none";
        c.appendChild(placeholder);
        c.appendChild(a.i);
        c.appendChild(d);
        c.appendChild(e);
      
        f.appendChild(k);
        f.appendChild(g);
        c.appendChild(f);
        c = document.createElement("style");
        c.setAttribute("type", "text/css");
        a.h = "_ibani1_";// + Math.round(1E4 * Math.random());
        c.textContent = "." + a.h + "{-webkit-animation-name:" + a.h + ";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes " + a.h + " {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}";
        document.getElementsByTagName("head")[0].appendChild(c)

    }
    b.ea = function (a) {
        this.set("backgroundClassName", a)
    };
    h.prototype.setBackgroundClassName = h.prototype.ea;
    h.prototype.O = function () {
        this.k.className = this.get("backgroundClassName")
    };
    h.prototype.backgroundClassName_changed = h.prototype.O;
    h.prototype.pa = function (a) {
        this.set("tabClassName", a)
    };
    h.prototype.setTabClassName = h.prototype.pa;
    h.prototype.sa = function () {
        w(this)
    };
    h.prototype.tabClassName_changed = h.prototype.sa;
    h.prototype.da = function (a) {
        this.set("arrowStyle", a)
    };
    h.prototype.setArrowStyle = h.prototype.da;
    
    h.prototype.M = function () {
        this.p()
    };
    h.prototype.arrowStyle_changed = h.prototype.M;

    function n(a) {
        return parseInt(a.get("arrowSize"), 10) || 0
    }
    h.prototype.ca = function (a) {
        this.set("arrowSize", a)
    };
    h.prototype.setArrowSize = h.prototype.ca;
    h.prototype.p = function () {
        this.r()
    };
    h.prototype.arrowSize_changed = h.prototype.p;
    h.prototype.ba = function (a) {
        this.set("arrowPosition", a)
    };
    h.prototype.setArrowPosition = h.prototype.ba;
    h.prototype.L = function () {
        var a = parseInt(this.get("arrowPosition"), 10) || 0;
        this.n.style.left = this.l.style.left = a + "%";
        x(this)
    };
    h.prototype.arrowPosition_changed = h.prototype.L;
    h.prototype.setZIndex = function (a) {
  
        this.set("zIndex", a)
    };
    h.prototype.setZIndex = h.prototype.setZIndex;
    h.prototype.getZIndex = function () {
        return parseInt(this.get("zIndex"), 10) || this.g
    };
    h.prototype.ua = function () {
        var a = this.getZIndex();
       
        this.c.style.zIndex = this.g = a;
        this.j.style.zIndex = a + 1
    };
    h.prototype.zIndex_changed = h.prototype.ua; 
    h.prototype.na = function (a) { 
        this.set("shadowStyle", a)
    };
    h.prototype.setShadowStyle = h.prototype.na;
   h.prototype.top = '50px';
    h.prototype.qa = function () {
        var a = "",
                c = "",
                d = "";
        switch (parseInt(this.get("shadowStyle"), 10) || 0) {
            case 0:
                a = "none";
                break;
            case 1:
                c = "40px 15px 10px rgba(33,33,33,0.3)";
                d = "transparent";
                break;
            case 2:
                c = "0 0 2px rgba(33,33,33,0.3)", d = "rgba(33,33,33,0.35)"
        }
        this.a.style.boxShadow = this.a.style.webkitBoxShadow = this.a.style.MozBoxShadow = c;
        this.a.style.backgroundColor = d;
        this.m && (this.a.style.display = a, this.draw())
    };
    h.prototype.shadowStyle_changed = h.prototype.qa;
    h.prototype.ra = function () {
        this.set("hideCloseButton", !1)
    };
    h.prototype.showCloseButton = h.prototype.ra;
    h.prototype.R = function () {
        this.set("hideCloseButton", !0)
    };
    h.prototype.hideCloseButton = h.prototype.R;
    h.prototype.S = function () {
        this.j.style.display = this.get("hideCloseButton") ? "none" : ""
    };
    h.prototype.hideCloseButton_changed = h.prototype.S;
    h.prototype.setBackgroundColor = function (a) {
        a && this.set("backgroundColor", a)
    };
    h.prototype.setBackgroundColor = h.prototype.setBackgroundColor;
    h.prototype.P = function () {
        var a = this.get("backgroundColor");
        this.e.style.backgroundColor = a;
        this.l.style.borderColor = a + " transparent transparent";
        w(this)
    };
    h.prototype.backgroundColor_changed = h.prototype.P;
    h.prototype.setBorderColor = function (a) {
        a && this.set("borderColor", a)
    };
    h.prototype.setBorderColor = h.prototype.setBorderColor;
    h.prototype.Q = function () {
        var a = this.get("borderColor"),
                c = this.e,
                d = this.n;
        c.style.borderColor = a;
        d.style.borderColor = a + " transparent transparent";
        c.style.borderStyle = d.style.borderStyle = this.l.style.borderStyle = "solid";
        w(this)
    };
    h.prototype.borderColor_changed = h.prototype.Q;
    h.prototype.fa = function (a) {
        this.set("borderRadius", a)
    };
    h.prototype.setBorderRadius = h.prototype.fa;
    

    function z(a) {
        return parseInt(a.get("borderRadius"), 10) || 0
    }
    h.prototype.q = function () {
        var a = z(this),
                c = A(this);
        this.e.style.borderRadius = this.e.style.MozBorderRadius = this.e.style.webkitBorderRadius = this.a.style.borderRadius = this.a.style.MozBorderRadius = this.a.style.webkitBorderRadius = t(a);
        this.i.style.paddingLeft = this.i.style.paddingRight = t(a + c);
        x(this)
    };
    h.prototype.borderRadius_changed = h.prototype.q;

    function A(a) {
        return parseInt(a.get("borderWidth"), 10) || 0
    }
    h.prototype.ga = function (a) {
        this.set("borderWidth", a)
    };
    h.prototype.setBorderWidth = h.prototype.ga;
    h.prototype.r = function () {
        var a = A(this);
        this.e.style.borderWidth = t(a);
        this.i.style.top = t(a);
        var a = A(this),
                c = n(this),
                d = parseInt(this.get("arrowStyle"), 10) || 0,
                e = t(c),
                f = t(Math.max(0, c - a)),
                k = this.n,
                g = this.l;
        this.N.style.marginTop = t(-a);
        k.style.borderTopWidth = e;
        g.style.borderTopWidth = f;
        0 == d || 1 == d ? (k.style.borderLeftWidth = e, g.style.borderLeftWidth = f) : k.style.borderLeftWidth = g.style.borderLeftWidth = 0;
        0 == d || 2 == d ? (k.style.borderRightWidth = e, g.style.borderRightWidth = f) : k.style.borderRightWidth = g.style.borderRightWidth =
                0;
        2 > d ? (k.style.marginLeft = t(-c), g.style.marginLeft = t(-(c - a))) : k.style.marginLeft = g.style.marginLeft = 0;
        k.style.display = 0 == a ? "none" : "";
        w(this);
        this.q();
        x(this)
    };
    h.prototype.borderWidth_changed = h.prototype.r;
    h.prototype.ma = function (a) {
        this.set("padding", a)
    };
    h.prototype.setPadding = h.prototype.ma;
    h.prototype.ha = function (a) {
        a && this.j && (this.j.src = a)
    };
    h.prototype.setCloseSrc = h.prototype.ha;

    function B(a) {
        return parseInt(a.get("padding"), 10) || 0
    }
    h.prototype.Z = function () {
        var a = B(this);
        this.e.style.padding = t(a);
        w(this);
        x(this)
    };
    h.prototype.padding_changed = h.prototype.Z;
 
    function t(a) {
        return a ? a + "px" : a
    }

    function C(a) {
        var c = "mousedown mousemove mouseover mouseout mouseup mousewheel DOMMouseScroll touchstart touchend touchmove dblclick contextmenu click".split(" "),
                d = a.c;
        a.s = [];
        for (var e = 0, f; f = c[e]; e++)
            a.s.push(google.maps.event.addDomListener(d, f, function (a) {
                a.cancelBubble = !0;
                a.stopPropagation && a.stopPropagation()
            }))
    }
    h.prototype.onAdd = function () {
        this.c || m(this);
        C(this);
        var a = this.getPanes();
        a && (a.floatPane.appendChild(this.c), a.floatShadow.appendChild(this.a))
    };
    h.prototype.onAdd = h.prototype.onAdd;
    h.prototype.draw = function () {
        var a = this.getProjection();
        if (a) {
            var c = this.get("position");

            if (c) {
                var d = 0;
                this.d && (d = this.d.offsetHeight);
                var e = D(this),
                        f = n(this),
                        k = parseInt(this.get("arrowPosition"), 10) || 0,
                        k = k / 100,
                        a = a.fromLatLngToDivPixel(c),
                        c = this.e.offsetWidth,
                        g = this.c.offsetHeight;
                if (c) {
                    g = a.y - (g + f);
                    e && (g -= e);
                    var l = a.x - c * k;
                    this.c.style.top = t(g);
                    this.c.style.left = t(l);
                    switch (parseInt(this.get("shadowStyle"), 10)) {
                        case 1:
                            this.a.style.top = t(g + d - 1);
                            this.a.style.left = t(l);
                            this.a.style.width = t(c);
                            this.a.style.height =
                                    t(this.e.offsetHeight - f);
                            break;
                        case 2:
                            c *= .8, this.a.style.top = e ? t(a.y) : t(a.y + f), this.a.style.left = t(a.x - c * k), this.a.style.width = t(c), this.a.style.height = t(2)
                    }
                }
            } else
                this.close()
        }
    };
    h.prototype.draw = h.prototype.draw;
    h.prototype.onRemove = function () {
        this.c && this.c.parentNode && this.c.parentNode.removeChild(this.c);
        this.a && this.a.parentNode && this.a.parentNode.removeChild(this.a);
        for (var a = 0, c; c = this.s[a]; a++)
            google.maps.event.removeListener(c)
    };
    h.prototype.onRemove = h.prototype.onRemove;
    h.prototype.T = function () {
        return this.m
    };
    h.prototype.isOpen = h.prototype.T;
    h.prototype.close = function () {
        this.c && (this.c.style.display = "none", this.c.className = this.c.className.replace(this.h, ""));
        this.a && (this.a.style.display = "none", this.a.className = this.a.className.replace(this.h, ""));
        this.m = !1
    };
    h.prototype.close = h.prototype.close;
    h.prototype.open = function (a, c) {
        var d = this;
        window.setTimeout(function () {
            E(d, a, c)
        }, 0)
    };

    function E(a, c, d) {
        F(a);
        c && a.setMap(c);
        d && (a.set("anchor", d), a.bindTo("anchorPoint", d), a.bindTo("position", d));
        a.c.style.display = a.a.style.display = "";
        a.get("disableAnimation") || (a.c.className += " " + a.h, a.a.className += " " + a.h);
        x(a);
        a.m = !0;
        a.get("disableAutoPan") || window.setTimeout(function () {
            a.o()
        }, 200)
    }
    h.prototype.open = h.prototype.open;
    h.prototype.setPosition = function (a) {
        a && this.set("position", a)
    };
    h.prototype.setPosition = h.prototype.setPosition;
    h.prototype.getPosition = function () {
        return this.get("position")
    };
    h.prototype.getPosition = h.prototype.getPosition;
    h.prototype.$ = function () {
        this.draw()
    };
    h.prototype.position_changed = h.prototype.$;
    h.prototype.o = function () {
        var a = this.getProjection();
        if (a && this.c) {
            var c = D(this),
                    d = this.c.offsetHeight + c,
                    c = this.get("map"),
                    e = c.getDiv().offsetHeight,
                    f = this.getPosition(),
                    k = a.fromLatLngToContainerPixel(c.getCenter()),
                    f = a.fromLatLngToContainerPixel(f),
                    d = k.y - d,
                    e = e - k.y,
                    k = 0;
            0 > d && (k = (-1 * d + e) / 2);
            f.y -= k;
            f = a.fromContainerPixelToLatLng(f);
            c.getCenter() != f && c.panTo(f)
        }
    };
    h.prototype.panToView = h.prototype.o;

    function G(a) {
        a = a.replace(/^\s*([\S\s]*)\b\s*$/, "$1");
        var c = document.createElement("DIV");

        c.innerHTML = a;
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (a = document.createDocumentFragment(); c.firstChild; )
            a.appendChild(c.firstChild);

        return a
    }

    function H(a) {
        if (a)
            for (var c; c = a.firstChild; )
                a.removeChild(c)
    }
    h.prototype.setContent = function (a) {
        this.set("content", a)
    };
    h.prototype.setContent = h.prototype.setContent;
    h.prototype.getContent = function () {
        return this.get("content")
    };
    h.prototype.getContent = h.prototype.getContent;

    function F(a) {
        if (a.k) {
            H(a.k);
            var c = a.getContent();
            if (c) {
                "string" == typeof c && (c = G(c));
                a.k.appendChild(c);
                for (var c = a.k.getElementsByTagName("IMG"), d = 0, e; e = c[d]; d++)
                    google.maps.event.addDomListener(e, "load", function () {
                        var c = !a.get("disableAutoPan");
                        x(a);
                        !c || 0 != a.b.length && 0 != a.d.index || a.o()
                    });
                google.maps.event.trigger(a, "domready")
            }
            x(a)
        }
    }

    function w(a) {
        if (a.b && a.b.length) {
            for (var c = 0, d; d = a.b[c]; c++)
                I(a, d.f);
            a.d.style.zIndex = a.g;
            c = A(a);
            d = B(a) / 2;
            a.d.style.borderBottomWidth = 0;
            a.d.style.paddingBottom = t(d + c)
        }
    }

    function I(a, c) {
        var d = a.get("backgroundColor"),
                e = a.get("borderColor"),
                f = z(a),
                k = A(a),
                g = B(a),
                l = t(-Math.max(g, f)),
                f = t(f),
                r = a.g;
        c.index && (r -= c.index);
        var d = {
            cssFloat: "left",
            position: "relative",
            cursor: "pointer",
            backgroundColor: d,
            border: t(k) + " solid " + e,
            padding: t(g / 2) + " " + t(g),
            marginRight: l,
            whiteSpace: "nowrap",
            borderRadiusTopLeft: f,
            MozBorderRadiusTopleft: f,
            webkitBorderTopLeftRadius: f,
            borderRadiusTopRight: f,
            MozBorderRadiusTopright: f,
            webkitBorderTopRightRadius: f,
            zIndex: r,
            display: "inline"
        },
                p;
        for (p in d)
            c.style[p] =
                    d[p];
        p = a.get("tabClassName");
        void 0 != p && (c.className += " " + p)
    }

    function J(a, c) {
        c.U = google.maps.event.addDomListener(c, "click", function () {
            K(a, this)
        })
    }
    h.prototype.oa = function (a) {
        (a = this.b[a - 1]) && K(this, a.f)
    };
    h.prototype.setTabActive = h.prototype.oa;

    function K(a, c) {
        if (c) {
            var d = B(a) / 2,
                    e = A(a);
            if (a.d) {
                var f = a.d;
                f.style.zIndex = a.g - f.index;
                f.style.paddingBottom = t(d);
                f.style.borderBottomWidth = t(e)
            }
            c.style.zIndex = a.g;
            c.style.borderBottomWidth = 0;
            c.style.marginBottomWidth = "-10px";
            c.style.paddingBottom = t(d + e);
            a.setContent(a.b[c.index].content);
            F(a);
            a.d = c;
            x(a)
        } else
            a.setContent(""), F(a)
    }
    h.prototype.ja = function (a) {
        this.set("maxWidth", a)
    };
    h.prototype.setMaxWidth = h.prototype.ja;
    h.prototype.W = function () {
        x(this)
    };
    h.prototype.maxWidth_changed = h.prototype.W;
    h.prototype.ia = function (a) {
        this.set("maxHeight", a)
    };
    h.prototype.setMaxHeight = h.prototype.ia;
    h.prototype.V = function () {
        x(this)
    };
    h.prototype.maxHeight_changed = h.prototype.V;
    h.prototype.la = function (a) {
        this.set("minWidth", a)
    };
    h.prototype.setMinWidth = h.prototype.la;
    h.prototype.Y = function () {
        x(this)
    };
    h.prototype.minWidth_changed = h.prototype.Y;
    h.prototype.ka = function (a) {
        this.set("minHeight", a)
    };
    h.prototype.setMinHeight = h.prototype.ka;
    h.prototype.X = function () {
        x(this)
    };
    
    h.prototype.minHeight_changed = h.prototype.X;
    h.prototype.J = function (a, c) {
        var d = document.createElement("DIV");
        d.innerHTML = a;
        I(this, d);
        J(this, d);
        this.i.appendChild(d);
        this.b.push({
            label: a,
            content: c,
            f: d
        });
        d.index = this.b.length - 1;
        d.style.zIndex = this.g - d.index;
        this.d || K(this, d);
        d.className = d.className + " " + this.h;
        x(this)
    };
   // h.prototype.addTab = h.prototype.J;
    h.prototype.ta = function (a, c, d) {
        !this.b.length || 0 > a || a >= this.b.length || (a = this.b[a], void 0 != c && (a.f.innerHTML = a.label = c), void 0 != d && (a.content = d), this.d == a.f && (this.setContent(a.content), F(this)), x(this))
    };
   // h.prototype.updateTab = h.prototype.ta;
    h.prototype.aa = function (a) {
        if (!(!this.b.length || 0 > a || a >= this.b.length)) {
            var c = this.b[a];
            c.f.parentNode.removeChild(c.f);
            google.maps.event.removeListener(c.f.U);
            this.b.splice(a, 1);
            delete c;
            for (var d = 0, e; e = this.b[d]; d++)
                e.f.index = d;
            c.f == this.d && (this.d = this.b[a] ? this.b[a].f : this.b[a - 1] ? this.b[a - 1].f : void 0, K(this, this.d));
            x(this)
        }
    };
   // h.prototype.removeTab = h.prototype.aa;

    function L(a, c, d) {
        var e = document.createElement("DIV");
        e.style.display = "inline";
        e.style.position = "absolute";
        e.style.visibility = "hidden";
        "string" == typeof a ? e.innerHTML = a : e.appendChild(a.cloneNode(!0));
        document.body.appendChild(e);
        a = new google.maps.Size(e.offsetWidth, e.offsetHeight);
        c && a.width > c && (e.style.width = t(c), a = new google.maps.Size(e.offsetWidth, e.offsetHeight));
        d && a.height > d && (e.style.height = t(d), a = new google.maps.Size(e.offsetWidth, e.offsetHeight));
        document.body.removeChild(e);
        delete e;
        return a
    }

    function x(a) {
        var c = a.get("map");
        if (c) {
            var d = B(a);
            A(a);
            z(a);
            var e = n(a),
                    f = c.getDiv(),
                    k = 2 * e,
                    c = f.offsetWidth - k,
                    f = f.offsetHeight - k - D(a),
                    k = 0,
                    g = a.get("minWidth") || 0,
                    l = a.get("minHeight") || 0,
                    r = a.get("maxWidth") || 0,
                    p = a.get("maxHeight") || 0,
                    r = Math.min(c, r),
                    p = Math.min(f, p),
                    y = 0;
            if (a.b.length)
               
                for (var u = 0, q; q = a.b[u]; u++) {
                    var v = L(q.f, r, p);
                    q = L(q.content, r, p);
                    g < v.width && (g = v.width);
                    y += v.width;
                    l < v.height && (l = v.height);
                    v.height > k && (k = v.height);
                    g < q.width && (g = q.width);
                    l < q.height && (l = q.height)
                }
            else
                u = a.get("content"), "string" ==
                        typeof u && (u = G(u)), u && (q = L(u, r, p), g < q.width && (g = q.width), l < q.height && (l = q.height));
            r && (g = Math.min(g, r));
            p && (l = Math.min(l, p));
            g = Math.max(g, y);
            g == y && (g += 2 * d);
            g = Math.max(g, 2 * e);
            g > c && (g = c);
            l > f && (l = f - k);
            a.i && (a.t = k, a.i.style.width = t(y));
            a.e.style.width = t(g);
            a.e.style.height = t(l)
        }
        z(a);
        d = A(a);
        c = 2;
        a.b.length && a.t && (c += a.t);
        e = 2 + d;
        (f = a.e) && f.clientHeight < f.scrollHeight && (e += 15);
        a.j.style.right = t(e);
        a.j.style.top = t(c + d);
        a.draw()
    }

    function D(a) {
        return a.get("anchor") && (a = a.get("anchorPoint")) ? -1 * a.y : 0
    }
    h.prototype.K = function () {
        this.draw()
    };
    h.prototype.anchorPoint_changed = h.prototype.K;
})();