! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Paddle = e() : t.Paddle = e()
}(self, (function() {
    return function() {
        "use strict";
        var t, e, o, n, r, i, a, d, s, c = {
                d: function(t, e) {
                    for (var o in e) c.o(e, o) && !c.o(t, o) && Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: e[o]
                    })
                },
                o: function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
            },
            l = {};
        c.d(l, {
                default: function() {
                    return Ut
                }
            }),
            function(t) {
                t.OVERLAY = "overlay", t.INLINE = "inline"
            }(t || (t = {})),
            function(t) {
                t.PRODUCTION = "production", t.STAGING = "staging", t.SANDBOX = "sandbox", t.DEVELOPMENT = "development", t.LOCAL = "local"
            }(e || (e = {})),
            function(t) {
                t.LIGHT = "light", t.DARK = "dark", t.GREEN = "green"
            }(o || (o = {})),
            function(t) {
                t.WARNING = "warning", t.LOG = "log", t.ERROR = "error"
            }(n || (n = {})),
            function(t) {
                t.PAYMENT_RECOVERY = "paymentRecovery", t.PAYMENT_RECOVERY_IN_APP = "paymentRecoveryInApp", t.TERM_OPTIMIZATION = "termOptimization", t.TERM_OPTIMIZATION_IN_APP = "termOptimizationInApp", t.CANCELLATION_FLOW = "cancellationFlow"
            }(r || (r = {})),
            function(t) {
                t.error = "error", t.aborted = "aborted", t.choseToCancel = "chose_to_cancel", t.retained = "retained"
            }(i || (i = {}));
        var u, p, m, f = ((a = {})[e.PRODUCTION] = "https://cdn.paddle.com/paddle/v2/assets/css", a[e.SANDBOX] = "https://sandbox-cdn.paddle.com/paddle/v2/assets/css", a[e.STAGING] = "https://staging-cdn.paddle.dev/paddle/v2/assets/css", a[e.DEVELOPMENT] = "https://development-cdn.paddle.dev/paddle/v2/assets/css", a[e.LOCAL] = "assets/css", a),
            h = ((d = {})[e.PRODUCTION] = "https://cdn.paddle.com/paddle/v2/assets/images", d[e.SANDBOX] = "https://sandbox-cdn.paddle.com/paddle/v2/assets/images", d[e.STAGING] = "https://staging-cdn.paddle.dev/paddle/v2/assets/images", d[e.DEVELOPMENT] = "https://development-cdn.paddle.dev/paddle/v2/assets/images", d[e.LOCAL] = "assets/images", d),
            v = ((s = {})[e.PRODUCTION] = "https://cdn.paddle.com/paddle/v2/error.html", s[e.SANDBOX] = "https://sandbox-cdn.paddle.com/paddle/v2/error.html", s[e.STAGING] = "https://staging-cdn.paddle.dev/paddle/v2/error.html", s[e.DEVELOPMENT] = "https://development-cdn.paddle.dev/v2/paddle/error.html", s[e.LOCAL] = "http://localhost:8081/error.html", {
                checkoutBase: "https://local-buy.paddle.com/product/",
                checkoutFrontEndBase: "https://local-buy.paddle.com",
                profitwellSnippetBase: "http://www2.profitwell-local.com/dotjs-client/main/profitwell.js",
                apiBase: "https://api.paddle.local"
            }),
            g = {
                checkoutBase: "https://development-create-checkout.paddle.dev/checkout/product/",
                checkoutFrontEndBase: "https://development-buy.paddle.dev",
                profitwellSnippetBase: "https://public.profitwell.com/js/profitwell.js",
                apiBase: "https://development-api.paddle.dev"
            },
            y = {
                checkoutBase: "https://staging-create-checkout.paddle.dev/checkout/product/",
                checkoutFrontEndBase: "https://staging-buy.paddle.dev",
                profitwellSnippetBase: "https://public.profitwell.com/js/profitwell.js",
                apiBase: "https://staging-api.paddle.dev"
            },
            w = {
                checkoutBase: "https://sandbox-create-checkout.paddle.com/checkout/product/",
                checkoutFrontEndBase: "https://sandbox-buy.paddle.com",
                profitwellSnippetBase: "https://public.profitwell.com/js/profitwell.js",
                apiBase: "https://sandbox-api.paddle.com"
            },
            b = {
                checkoutBase: "https://create-checkout.paddle.com/checkout/product/",
                checkoutFrontEndBase: "https://buy.paddle.com",
                profitwellSnippetBase: "https://public.profitwell.com/js/profitwell.js",
                apiBase: "https://api.paddle.com"
            };
        ! function(t) {
            t.PADDLE_BUTTON = "paddle_button", t.PADDLE_FRAME = "paddle-frame", t.PADDLE_LOADER = "paddle-loader", t.PADDLE_FRAME_INLINE = "paddle-frame-inline", t.PADDLE_FRAME_OVERLAY = "paddle-frame-overlay", t.PADDLE_STYLED_BUTTON = "paddle_styled_button", t.GREEN = "green", t.LIGHT = "light", t.DARK = "dark"
        }(u || (u = {})),
        function(t) {
            t.PADDLE_ENVIRONMENT = "paddle_env", t.PADDLE_TRANSACTION = "_ptxn"
        }(p || (p = {})),
        function(t) {
            t.DATA_INIT = "data-init", t.DATA_DISCOUNT_ID = "data-discount-id", t.DATA_DISCOUNT_CODE = "data-discount-code", t.DATA_TRANSACTION_ID = "data-transaction-id", t.DATA_ITEMS = "data-items", t.DATA_CUSTOMER_ID = "data-customer-id", t.DATA_CUSTOMER_EMAIL = "data-customer-email", t.DATA_CUSTOMER_ADDRESS_ID = "data-customer-address-id", t.DATA_CUSTOMER_ADDRESS_COUNTRY_CODE = "data-customer-address-country-code", t.DATA_CUSTOMER_ADDRESS_POSTAL_CODE = "data-customer-address-postal-code", t.DATA_BUSINESS_NAME = "data-business-name", t.DATA_BUSINESS_ID = "data-business-id", t.DATA_BUSINESS_TAX_ID = "data-business-tax-id", t.DATA_CUSTOMER_ADDRESS_FIRST_LINE = "data-customer-address-first-line", t.DATA_CUSTOMER_ADDRESS_CITY = "data-customer-address-city", t.DATA_CUSTOMER_ADDRESS_REGION = "data-customer-address-region", t.DATA_CUSTOM_DATA = "data-custom-data", t.DATA_LOCALE = "data-locale", t.DATA_DISPLAY_MODE = "data-display-mode", t.DATA_THEME = "data-theme", t.DATA_SHOW_ADD_DISCOUNTS = "data-show-add-discounts", t.DATA_SHOW_ADD_TAX_ID = "data-show-add-tax-id", t.DATA_SUCCESS_URL = "data-success-url", t.DATA_ALLOW_LOGOUT = "data-allow-logout", t.DATA_SOURCE_PAGE = "data-source-page", t.DATA_ALLOWED_PAYMENT_METHODS = "data-allowed-payment-methods"
        }(m || (m = {}));
        var _ = "[PADDLE] An object of checkout parameters must be passed to Paddle.Checkout.open()",
            A = function() {
                function e() {
                    this.options = {
                        pwCustomer: void 0,
                        pwAuth: void 0,
                        debug: !1,
                        seller: 0,
                        token: void 0,
                        eventCallback: void 0,
                        checkout: {
                            settings: {
                                theme: o.LIGHT,
                                displayMode: t.OVERLAY,
                                allowLogout: !0,
                                allowedPaymentMethods: []
                            }
                        }
                    }
                }
                return e.prototype.update = function(t) {
                    if ("object" != typeof t) throw new Error("[PADDLE] The Options() method accepts an object of options values.");
                    this.updateOptions(t)
                }, e.prototype.set = function(t) {
                    if ("object" != typeof t) throw new Error("[PADDLE] The Options() method accepts an object of options values.");
                    this.validateSeller(t.seller, t.token), this.updateOptions(t)
                }, e.prototype.updateOptions = function(t) {
                    for (var e in t) {
                        if (!this.options.hasOwnProperty(e)) throw new Error("[PADDLE] Unknown option parameter '" + e + "'");
                        this.options[e] = t[e], D.log("Set option '" + e + "' to '" + t[e] + "'.")
                    }
                }, Object.defineProperty(e.prototype, "debug", {
                    get: function() {
                        return this.options.debug
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "eventCallback", {
                    get: function() {
                        return this.options.eventCallback
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "seller", {
                    get: function() {
                        return this.options.seller
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "token", {
                    get: function() {
                        return this.options.token
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "theme", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.theme
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "displayMode", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.displayMode
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "allowLogout", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.allowLogout
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "allowedPaymentMethods", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.allowedPaymentMethods
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "locale", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.locale
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "successUrl", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.successUrl
                    },
                    set: function(t) {
                        this.options.checkout && this.options.checkout.settings && (this.options.checkout.settings.successUrl = t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "frameTarget", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.frameTarget
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "frameStyle", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.frameStyle
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "frameInitialHeight", {
                    get: function() {
                        var t;
                        return null === (t = this.options.checkout) || void 0 === t ? void 0 : t.settings.frameInitialHeight
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "pwCustomer", {
                    get: function() {
                        return this.options.pwCustomer
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "pwAuth", {
                    get: function() {
                        return this.options.pwAuth
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.validateSeller = function(t, e) {
                    if (!it(t) && !it(e)) throw new Error("[PADDLE] The option parameter 'seller' or 'token' must have a value.");
                    if (it(t) && it(e)) throw new Error("[PADDLE] The option parameter 'seller' or 'token' must have a value but not both.");
                    if (!it(e) && it(t) && (t !== parseInt("".concat(t), 10) || 0 === t)) throw new Error("[PADDLE] The option parameter 'seller' must be an integer.");
                    if (it(e) && "string" != typeof e && !it(t)) throw new Error("[PADDLE] The option parameter 'token' must be an string.");
                    if (1234567 === t) throw new Error("[PADDLE] You must specify a valid Paddle Seller ID for the 'seller' attribute within the Paddle.Setup() or Paddle.Options() method. The provided Vendor ID '1234567' is invalid and is used for example purposes. See: https://developer.paddle.com/guides/how-tos/checkout/paddle-checkout")
                }, e
            }(),
            E = new A,
            D = new(function() {
                function t() {
                    this.isEnabled = !0
                }
                return t.prototype.log = function(t, e, o) {
                    void 0 === e && (e = n.LOG), void 0 === o && (o = !1), window.console.debug = window.console.debug || window.console.log || function() {};
                    var r = "[Paddle Debug]" + t;
                    E.debug && (e === n.LOG ? console.debug(r) : e === n.WARNING && console.warn(r)), o && console.warn(t)
                }, t
            }());

        function T() {
            var t, e = window.ApplePaySession;
            try {
                t = e && e.canMakePayments()
            } catch (e) {
                t = !1
            }
            return !!t
        }
        var I = Object.prototype.toString;

        function O(t) {
            return "[object Array]" == I.call(t)
        }

        function P(t, e) {
            if (! function(t) {
                    return t === Object(t)
                }(e) || function(t) {
                    return "[object Date]" == I.call(t)
                }(e) || function(t) {
                    return "[object RegExp]" == I.call(t)
                }(e) || function(t) {
                    return "[object Boolean]" == I.call(t)
                }(e) || function(t) {
                    return "function" == typeof t
                }(e)) return e;
            var o, n = 0,
                r = 0;
            if (O(e))
                for (o = [], r = e.length; n < r; n++) o.push(P(t, e[n]));
            else
                for (var i in o = {}, e) Object.prototype.hasOwnProperty.call(e, i) && (o[t(i)] = P(t, e[i]));
            return o
        }

        function S(t) {
            return function(t) {
                return t.split(/(?=[A-Z])/).join("_")
            }(t).toLowerCase()
        }

        function C(t) {
            var e = {};
            return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function(t) {
                for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
                var r = o[0],
                    i = o[1];
                return e[r] = i, ""
            })), e[t] ? e[t].split("#")[0] : ""
        }
        var N = function(t) {
                return U.defaults().checkoutFrontEndBase + "/paddlejs/v2#payload=" + function(t) {
                    return encodeURIComponent(window.btoa(encodeURIComponent(t)))
                }(t)
            },
            k = function(t, e) {
                t["paddlejs-version"] = j.libraryVersion, t.checkoutInitiated = (new Date).getTime();
                var o = N(JSON.stringify(P(S, t)));
                return (e ? o + "&display_mode=inline" : o) + "&apple_pay_enabled=".concat(T())
            };

        function L(t) {
            var e = "#!",
                o = [";", "\b", "\f", "\n", "\r", "\t", "\v", "\0", "\t", "\r", "\n"];
            if ("string" != typeof t) return e;
            var n = encodeURIComponent(t);
            if (!t.length || "javascript:" === t.substring(0, 11).toLowerCase()) return e;
            for (var r = 0; r < o.length; r++)
                if (t.indexOf(o[r]) > -1 || n.indexOf(o[r]) > -1) return e;
            return t
        }
        var R, x = function() {
                return x = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, x.apply(this, arguments)
            },
            M = function() {
                function t() {
                    var t;
                    this.env = {
                        current: e.PRODUCTION,
                        defaults: (t = {}, t[e.LOCAL] = x({}, v), t[e.DEVELOPMENT] = x({}, g), t[e.SANDBOX] = x({}, w), t[e.STAGING] = x({}, y), t[e.PRODUCTION] = x({}, b), t)
                    }
                }
                return t.prototype.detect = function() {
                    it(C(p.PADDLE_ENVIRONMENT)) && "" !== C(p.PADDLE_ENVIRONMENT) ? (D.log("Environment Detected: " + C(p.PADDLE_ENVIRONMENT)), this.set(C(p.PADDLE_ENVIRONMENT))) : D.log("Environment Detected: " + this.get())
                }, t.prototype.get = function() {
                    return this.env.current
                }, t.prototype.set = function(t) {
                    D.log("Changing environment to: " + t), this.env.current = t
                }, t.prototype.defaults = function() {
                    return this.env.defaults[this.env.current]
                }, t
            }(),
            U = new M,
            j = new(function() {
                function t() {
                    this.data = {
                        libraryVersion: null,
                        completedSetup: !1,
                        loadedButtonStylesheet: !1
                    }
                }
                return Object.defineProperty(t.prototype, "completedSetup", {
                    get: function() {
                        return this.data.completedSetup
                    },
                    set: function(t) {
                        this.data.completedSetup = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "loadedButtonStylesheet", {
                    get: function() {
                        return this.data.loadedButtonStylesheet
                    },
                    set: function(t) {
                        this.data.loadedButtonStylesheet = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "libraryVersion", {
                    get: function() {
                        return this.data.libraryVersion
                    },
                    set: function(t) {
                        this.data.libraryVersion = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t
            }());
        ! function(t) {
            t.CHECKOUT_CLOSE = "checkout.closed", t.CHECKOUT_COMPLETE = "checkout.completed", t.CHECKOUT_LOADED = "checkout.loaded", t.CHECKOUT_PING_SIZE = "checkout.ping.size", t.CHECKOUT_ITEMS_UPDATED = "checkout.items.updated", t.CHECKOUT_UPDATED = "checkout.updated", t.CHECKOUT_REMOVE_SPINNER = "checkout.removespinner"
        }(R || (R = {}));
        var B, H = "transaction-action";
        ! function(t) {
            t.CLOSE = "close", t.EVENT = "event"
        }(B || (B = {}));
        var F = function(t) {
                if ("string" == typeof t) try {
                    return JSON.parse(t)
                } catch (t) {
                    return D.log("The value set at `settings.allowedPaymentMethods` is not a valid array and it will be ignored.", n.WARNING, !0), []
                }
                return t
            },
            q = function() {
                return q = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, q.apply(this, arguments)
            },
            G = "wide-overlay",
            V = function() {
                function e() {}
                return e.prototype.open = function(e) {
                    var o, r, i, a;
                    if (at(), j.completedSetup || D.log("You haven't called Paddle.Setup() - using Paddle.js without calling Paddle.Setup() is unsupported and may result in unexpected behaviour. See: https://developer.paddle.com/guides/how-tos/checkout/paddle-checkout", n.WARNING, !0), "object" != typeof e) throw new Error(_);
                    W(e);
                    var d = Y(e);
                    D.log("Creating checkout with attributes: " + JSON.stringify(d));
                    var s = {
                        frameStyle: null === (o = d.settings) || void 0 === o ? void 0 : o.frameStyle,
                        frameInitialHeight: null === (r = d.settings) || void 0 === r ? void 0 : r.frameInitialHeight,
                        frameTarget: null === (i = d.settings) || void 0 === i ? void 0 : i.frameTarget
                    };
                    "loading" !== document.readyState ? dt(d, s, (null === (a = d.settings) || void 0 === a ? void 0 : a.displayMode) === t.INLINE) : document.addEventListener("DOMContentLoaded", (function() {
                        var e;
                        dt(d, s, (null === (e = d.settings) || void 0 === e ? void 0 : e.displayMode) === t.INLINE)
                    }))
                }, e.prototype.close = function() {
                    lt({
                        name: R.CHECKOUT_CLOSE,
                        data: {}
                    }), at()
                }, e.prototype.updateItems = function(t) {
                    var e = document.getElementsByName("paddle_frame")[0].contentWindow;
                    null == e || e.postMessage({
                        action: H,
                        eventName: R.CHECKOUT_ITEMS_UPDATED,
                        callbackData: t
                    }, "*")
                }, e.prototype.updateCheckout = function(t) {
                    if ("object" != typeof t) throw new Error(_);
                    W(t);
                    var e = Y(t);
                    D.log("Updating checkout with attributes: " + JSON.stringify(e));
                    var o = document.getElementsByName("paddle_frame")[0].contentWindow;
                    null == o || o.postMessage({
                        action: H,
                        eventName: R.CHECKOUT_UPDATED,
                        callbackData: t
                    }, "*")
                }, e
            }(),
            W = function(t) {
                var e, o, n;
                try {
                    if (null === (e = t.settings) || void 0 === e ? void 0 : e.successUrl) {
                        var r = t.settings.successUrl;
                        if (!new RegExp("^https?://", "i").test(r)) throw Error("The value for successUrl is not valid. Specify http(s)://example.com")
                    }
                    var i = "string" == typeof t.items ? JSON.parse(t.items) : t.items,
                        a = t.transactionId,
                        d = t.customer;
                    if (it(a) && O(i) && i.length > 0) throw new Error("Either specify transaction ID or items but not both.");
                    if (it(t.discountId) && it(t.discountCode)) throw new Error("Either specify discount id or discount code but not both.");
                    if (d && rt(d) && !it(null == d ? void 0 : d.id) && !it(null == d ? void 0 : d.email)) throw Error("customer ID or email is required");
                    if (d && rt(d) && it(null == d ? void 0 : d.id) && it(null == d ? void 0 : d.email)) throw Error("Either specify customer ID only or customer details(email,marketingConsent,etc) but not both.");
                    if (d && d.address && rt(d) && rt(d.address) && it(null === (o = d.address) || void 0 === o ? void 0 : o.id) && Object.keys(d.address).length > 1) throw Error("Either specify customer address ID only or address details(postalCode,countryCode) but not both.");
                    if (d && d.business && rt(d) && rt(d.business) && it(null === (n = d.business) || void 0 === n ? void 0 : n.id) && Object.keys(d.business).length > 1) throw Error("Either specify customer business ID only or business details(name,taxIdentifier) but not both.")
                } catch (t) {
                    throw new Error("".concat("Checkout input failed validation : ").concat(t))
                }
            },
            Y = function(e) {
                var r, i, a, d, s, c, l, u, p, m, f, h, v, g, y, w, b, _, A, I, P, S, C, N, k = q(q(q(q(q(q(q({}, it(e.discountId) && {
                    discountId: e.discountId
                }), it(e.discountCode) && {
                    discountCode: e.discountCode
                }), it(e.transactionId) && {
                    transactionId: e.transactionId
                }), it(e.customer) && {
                    customer: e.customer
                }), it(e.settings) && {
                    settings: q(q(q(q(q(q(q(q(q(q(q({}, e.settings), ((null === (r = e.settings) || void 0 === r ? void 0 : r.successUrl) || E.successUrl) && {
                        successUrl: L((null === (i = e.settings) || void 0 === i ? void 0 : i.successUrl) || E.successUrl)
                    }), ((null === (a = e.settings) || void 0 === a ? void 0 : a.locale) || E.locale) && {
                        locale: (null === (d = e.settings) || void 0 === d ? void 0 : d.locale) || E.locale
                    }), ((null === (s = e.settings) || void 0 === s ? void 0 : s.frameTarget) || E.frameTarget) && {
                        frameTarget: (null === (c = e.settings) || void 0 === c ? void 0 : c.frameTarget) || E.frameTarget
                    }), ((null === (l = e.settings) || void 0 === l ? void 0 : l.frameStyle) || E.frameStyle) && {
                        frameStyle: (null === (u = e.settings) || void 0 === u ? void 0 : u.frameStyle) || E.frameStyle
                    }), ((null === (p = e.settings) || void 0 === p ? void 0 : p.frameInitialHeight) || E.frameInitialHeight) && {
                        frameInitialHeight: (null === (m = e.settings) || void 0 === m ? void 0 : m.frameInitialHeight) || E.frameInitialHeight
                    }), {
                        theme: (null === (f = e.settings) || void 0 === f ? void 0 : f.theme) || E.theme || o.LIGHT,
                        allowLogout: null === (g = null !== (v = null === (h = e.settings) || void 0 === h ? void 0 : h.allowLogout) && void 0 !== v ? v : E.allowLogout) || void 0 === g || g
                    }), it(null === (y = e.settings) || void 0 === y ? void 0 : y.showAddDiscounts) ? {
                        showAddDiscounts: null === (w = e.settings) || void 0 === w ? void 0 : w.showAddDiscounts
                    } : {}), it(null === (b = e.settings) || void 0 === b ? void 0 : b.showAddTaxId) ? {
                        showAddTaxId: null === (_ = e.settings) || void 0 === _ ? void 0 : _.showAddTaxId
                    } : {}), {
                        displayMode: (null !== (I = null === (A = e.settings) || void 0 === A ? void 0 : A.displayMode) && void 0 !== I ? I : E.displayMode) === t.INLINE ? t.INLINE : G,
                        sourcePage: window.location.href
                    }), (null === (P = e.settings) || void 0 === P ? void 0 : P.allowedPaymentMethods) ? {
                        allowedPaymentMethods: null !== (C = F(null === (S = e.settings) || void 0 === S ? void 0 : S.allowedPaymentMethods)) && void 0 !== C ? C : []
                    } : {})
                }), !it(e.settings) && {
                    settings: q(q(q(q(q(q(q({
                        theme: E.theme || o.LIGHT,
                        allowLogout: null === (N = E.allowLogout) || void 0 === N || N,
                        displayMode: E.displayMode === t.INLINE ? t.INLINE : G
                    }, E.locale && {
                        locale: E.locale
                    }), E.successUrl && {
                        successUrl: L(E.successUrl)
                    }), E.frameTarget && {
                        frameTarget: E.frameTarget
                    }), E.frameStyle && {
                        frameStyle: E.frameStyle
                    }), E.frameInitialHeight && {
                        frameInitialHeight: E.frameInitialHeight
                    }), {
                        sourcePage: window.location.href
                    }), E.allowedPaymentMethods && {
                        allowedPaymentMethods: E.allowedPaymentMethods
                    })
                }), it(e.customerAuthToken) && {
                    customerAuthToken: e.customerAuthToken
                });
                if (e.settings && e.settings.successUrl && (E.successUrl = e.settings.successUrl), it(e.customData)) try {
                    var R = "string" == typeof e.customData ? JSON.parse(e.customData) : e.customData;
                    if (!rt(R)) throw new Error("Invalid custom data");
                    k.customData = JSON.stringify(R)
                } catch (t) {
                    D.log("The value set at customData is not a valid object and it will be ignored.", n.WARNING, !0)
                }
                if (it(e.items)) try {
                    var x = "string" == typeof e.items ? JSON.parse(e.items) : e.items;
                    if (!O(x)) throw new Error("Invalid items array");
                    k.items = x.map((function(t) {
                        return t.quantity ? t : q(q({}, t), {
                            quantity: 1
                        })
                    }))
                } catch (t) {
                    D.log("The value set at items is not a valid array and it will be ignored.", n.WARNING, !0)
                }
                return E.seller && (k.sellerId = E.seller), E.token && (k.clientToken = E.token), k.applePayEnabled = T(), k
            },
            K = new V,
            z = function() {
                return z = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, z.apply(this, arguments)
            };

        function J() {
            var t = U.get();
            if (!j.loadedButtonStylesheet) {
                var o = document.getElementsByTagName("head")[0],
                    n = document.createElement("link");
                n.rel = "stylesheet", n.type = "text/css", n.href = function(t) {
                    var o = Object.values(e).indexOf(t) > -1 ? t : e.PRODUCTION;
                    return {
                        PADDLE_CSS_FILE: f[o] + "/paddle.css",
                        VENDORS_URL: "https://vendors.paddle.com/download/product/",
                        HEALTH_CHECK_GIF: h[o] + "/health-check.gif"
                    }
                }(t).PADDLE_CSS_FILE, n.media = "all", o.appendChild(n), j.loadedButtonStylesheet = !0
            }
        }

        function X(t, e) {
            for (var o = document.getElementsByClassName(t), n = 0; n < o.length; n++) {
                var r = o[n];
                if ("function" != typeof e) throw new Error("each(className, function() {... requires the callback argument to be of type Function");
                e(r)
            }
        }

        function Z(t, e) {
            return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        }

        function $(t, e) {
            t.classList ? t.classList.add(e) : Z(t, e) || (t.className += " " + e)
        }

        function Q(t) {
            var e = t.getAttribute(m.DATA_DISCOUNT_ID),
                o = t.getAttribute(m.DATA_DISCOUNT_CODE),
                n = t.getAttribute(m.DATA_TRANSACTION_ID),
                r = t.getAttribute(m.DATA_ITEMS),
                i = t.getAttribute(m.DATA_CUSTOM_DATA),
                a = t.getAttribute(m.DATA_CUSTOMER_ID),
                d = t.getAttribute(m.DATA_CUSTOMER_EMAIL),
                s = t.getAttribute(m.DATA_BUSINESS_NAME),
                c = t.getAttribute(m.DATA_BUSINESS_ID),
                l = t.getAttribute(m.DATA_BUSINESS_TAX_ID),
                u = t.getAttribute(m.DATA_CUSTOMER_ADDRESS_FIRST_LINE),
                p = t.getAttribute(m.DATA_CUSTOMER_ADDRESS_CITY),
                f = t.getAttribute(m.DATA_CUSTOMER_ADDRESS_REGION),
                h = t.getAttribute(m.DATA_CUSTOMER_ADDRESS_ID),
                v = t.getAttribute(m.DATA_CUSTOMER_ADDRESS_COUNTRY_CODE),
                g = t.getAttribute(m.DATA_CUSTOMER_ADDRESS_POSTAL_CODE),
                y = t.getAttribute(m.DATA_LOCALE),
                w = t.getAttribute(m.DATA_DISPLAY_MODE),
                b = t.getAttribute(m.DATA_THEME),
                _ = t.getAttribute(m.DATA_SUCCESS_URL),
                A = t.getAttribute(m.DATA_ALLOW_LOGOUT),
                E = t.getAttribute(m.DATA_SHOW_ADD_DISCOUNTS),
                D = t.getAttribute(m.DATA_SHOW_ADD_TAX_ID),
                T = t.getAttribute(m.DATA_ALLOWED_PAYMENT_METHODS),
                I = z(z(z(z(z({}, e && {
                    discountId: e
                }), o && {
                    discountCode: o
                }), n && {
                    transactionId: n
                }), i && {
                    customData: i
                }), r && {
                    items: r
                });
            return (a || d) && (I.customer = z(z({}, a && {
                id: a
            }), d && {
                email: d
            })), (h || g || v || u || p || f) && (I.customer = I.customer || {}, I.customer && (I.customer.address = z(z(z(z(z(z({}, h && {
                id: h
            }), g && {
                postalCode: g
            }), v && {
                countryCode: v
            }), u && {
                firstLine: u
            }), p && {
                city: p
            }), f && {
                region: f
            }))), (c || s || l) && (I.customer = I.customer || {}, I.customer && (I.customer.business = z(z(z({}, c && {
                id: c
            }), s && {
                name: s
            }), l && {
                taxIdentifier: l
            }))), (y || w || b || _ || A || E || D) && (I.settings = z(z(z(z(z(z(z(z({}, y && {
                locale: y
            }), b && {
                theme: b
            }), w && {
                displayMode: w
            }), _ && {
                successUrl: _
            }), A && {
                allowLogout: "true" === A
            }), E && {
                showAddDiscounts: "true" === E
            }), D && {
                showAddTaxID: "true" === D
            }), T && {
                allowedPaymentMethods: T
            })), I
        }
        var tt = function() {
                var t = 0;
                X("paddle_button", (function(e) {
                    var r, i;
                    if ("true" === e.getAttribute(m.DATA_INIT)) {
                        var a = e.cloneNode(!0);
                        null === (r = e.parentNode) || void 0 === r || r.replaceChild(a, e), e = a
                    }
                    var d = Q(e);
                    ! function(t, e) {
                        "none" !== e && ($(t, u.PADDLE_STYLED_BUTTON), e === o.GREEN ? $(t, u.GREEN) : e === o.LIGHT ? $(t, u.LIGHT) : e === o.DARK && $(t, u.DARK))
                    }(e, null === (i = null == d ? void 0 : d.settings) || void 0 === i ? void 0 : i.theme), e.setAttribute(m.DATA_INIT, "true"), e.addEventListener("click", (function(t) {
                        t.preventDefault();
                        var o = Q(e);
                        K.open(o)
                    })), t++, d.transactionId ? D.log("Loaded and initiated checkout button for Transaction ID: " + d.transactionId + " (Paddle Button #" + t + ")") : d.items ? D.log("Loaded and initiated checkout button for items: " + JSON.stringify(d.items) + " (Paddle Button #" + t + ")") : D.log("Initiated a checkout button without an override URL or Price ID. (Paddle Button #" + t + ")", n.WARNING)
                }))
            },
            et = function() {
                var t, e, o = {
                        "[object Boolean]": "boolean",
                        "[object Number]": "number",
                        "[object String]": "string",
                        "[object Function]": "function",
                        "[object Array]": "array",
                        "[object Date]": "date",
                        "[object RegExp]": "regexp",
                        "[object Object]": "object"
                    },
                    n = {
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(t) {
                            t ? n.readyWait++ : n.ready(!0)
                        },
                        ready: function(e) {
                            if (void 0 === e && (e = !1), !0 === e && !--n.readyWait || !0 !== e && !n.isReady) {
                                if (!document.body) return void setTimeout(n.ready, 1);
                                if (n.isReady = !0, !0 !== e && --n.readyWait > 0) return;
                                t.resolveWith(document, [n])
                            } else;
                        },
                        bindReady: function() {
                            if (!t) {
                                if (t = n._Deferred(), "complete" === document.readyState) return setTimeout(n.ready, 1);
                                if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", n.ready, !1);
                                else if (document.attachEvent) {
                                    document.attachEvent("onreadystatechange", e)(document).attachEvent("onload", n.ready);
                                    var o = !1;
                                    try {
                                        o = null == window.frameElement
                                    } catch (t) {}
                                    document.documentElement.doScroll && o && r()
                                }
                            }
                        },
                        _Deferred: function() {
                            var t, e, o, r = [],
                                i = {
                                    done: function() {
                                        if (!o) {
                                            var e, a = arguments,
                                                d = void 0,
                                                s = void 0,
                                                c = void 0,
                                                l = void 0;
                                            for (t && (l = t, t = 0), d = 0, e = a.length; d < e; d++) s = a[d], "array" === (c = n.type(s)) ? i.done.apply(i, s) : "function" === c && r.push(s);
                                            l && i.resolveWith(l[0], l[1])
                                        }
                                        return this
                                    },
                                    resolveWith: function(n, i) {
                                        if (!o && !t && !e) {
                                            i = i || [], e = 1;
                                            try {
                                                for (; r[0];) r.shift().apply(n, i)
                                            } finally {
                                                t = [n, i], e = 0
                                            }
                                        }
                                        return this
                                    },
                                    resolve: function() {
                                        return i.resolveWith(this, arguments), this
                                    },
                                    isResolved: function() {
                                        return !(!e && !t)
                                    },
                                    cancel: function() {
                                        return o = 1, r = [], this
                                    }
                                };
                            return i
                        },
                        type: function(t) {
                            return null == t ? String(t) : o[Object.prototype.toString.call(t)] || "object"
                        }
                    };

                function r() {
                    if (!n.isReady) {
                        try {
                            document.documentElement.doScroll("left")
                        } catch (t) {
                            return void setTimeout(r, 1)
                        }
                        n.ready()
                    }
                }
                return document.addEventListener ? e = function() {
                        document.removeEventListener("DOMContentLoaded", e, !1), n.ready()
                    } : document.attachEvent && (e = function() {
                        "complete" === document.readyState && (document.detachEvent("onreadystatechange", e), n.ready())
                    }),
                    function(e) {
                        n.bindReady(), n.type(e), t.done(e)
                    }
            }();

        function ot(t) {
            void 0 === t && (t = !1), nt();
            var e = document.createElement("style");
            e.type = "text/css", e.innerHTML = "\t\t\t\t@-webkit-keyframes rotate {\t\t\t\t\t0% {\t\t\t\t\t\t-webkit-transform: rotate(45deg);\t\t\t\t\t}\t\t\t\t\t100% {\t\t\t\t\t\t-webkit-transform: rotate(405deg);\t\t\t\t\t}\t\t\t\t}\t\t\t\t@keyframes rotate {\t\t\t\t\tfrom {\t\t\t\t\t\ttransform: rotate(45deg);\t\t\t\t\t}\t\t\t\t\tto {\t\t\t\t\t\ttransform: rotate(405deg);\t\t\t\t\t}\t\t\t\t}", document.getElementsByTagName("head")[0].appendChild(e);
            var o = document.createElement("div");
            o.setAttribute("style", "z-index:99998; display: block; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: 0px; padding: 0px; background: rgba(0,0,0,0.38);"), o.setAttribute("class", u.PADDLE_LOADER);
            var n = document.createElement("main");
            n.setAttribute("style", "align-items: center;display: flex;flex-direction: column;justify-content: center;left: 50%;margin: 0.5rem 0;position: absolute;text-align: center;top: 50%;transform: translate(-50%, -50%);width: 90%;");
            var r = document.createElement("div");
            if (r.setAttribute("style", "border: 4px solid #f3f3f3;border-radius: 50%;border-top: 4px solid #ccc;width: 34px;height: 34px;-webkit-animation: rotate 1s ease-in-out infinite forwards;animation: rotate 1s ease-in-out infinite forwards;"), n.appendChild(r), o.appendChild(n), t) return function(t) {
                var e = document.createElement("div");
                t && e.appendChild(t.cloneNode(!0));
                var o = e.innerHTML;
                return e = t = null, o
            }(o);
            document.addEventListener("DOMContentLoaded", (function() {
                document.getElementsByTagName("body")[0].appendChild(o)
            }))
        }

        function nt() {
            X(u.PADDLE_LOADER, (function(t) {
                var e;
                null === (e = null == t ? void 0 : t.parentNode) || void 0 === e || e.removeChild(t)
            }))
        }

        function rt(t) {
            return "object" == typeof t && t && !Array.isArray(t) && Object.keys(t).length > 0
        }

        function it(t) {
            return void 0 !== t && "" !== t && null !== t
        }
        var at = function() {
                D.log("Checkout frame/window has been closed."), nt(), X(u.PADDLE_FRAME, (function(t) {
                    var e;
                    null === (e = t.parentNode) || void 0 === e || e.removeChild(t)
                })), void 0 === window.PaddleWindow || window.PaddleWindow.closed || window.PaddleWindow.close()
            },
            dt = function(t, e, o) {
                var n, r, i, a, d = k(t, o);
                if (o || ot(), window.PaddleFrame = document.createElement("iframe"), window.PaddleFrame.className = u.PADDLE_FRAME, window.PaddleFrame.name = "paddle_frame", window.PaddleFrame.frameBorder = "0", window.PaddleFrame.allowTransparency = "true", window.PaddleFrame.allow = "payment", o) {
                    window.PaddleFrame.classList.add(u.PADDLE_FRAME_INLINE);
                    var s = document.createElement("style");
                    s.type = "text/css", s.innerHTML = ".".concat(u.PADDLE_FRAME_INLINE, "::-webkit-scrollbar { display: none !important; }"), document.getElementsByTagName("head")[0].appendChild(s)
                } else window.PaddleFrame.classList.add(u.PADDLE_FRAME_OVERLAY);
                it(e.frameStyle) && o ? window.PaddleFrame.setAttribute("style", "".concat(null == e ? void 0 : e.frameStyle)) : (r = !1, n = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(n.substr(0, 4))) && (r = !0), r ? window.PaddleFrame.setAttribute("style", "z-index: 99999; display: block; background-color: transparent; border: 0px none transparent; overflow-x: hidden; overflow-y: scroll; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;") : window.PaddleFrame.setAttribute("style", "z-index: 99999; display: block; background-color: transparent; border: 0px none transparent; overflow-x: hidden; overflow-y: auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;")), it(e.frameInitialHeight) && o && window.PaddleFrame.setAttribute("height", "".concat(null == e ? void 0 : e.frameInitialHeight, "px")), i = window.PaddleFrame, a = d, i.src = a, it(e.frameTarget) && o ? document.getElementsByClassName("".concat(e.frameTarget))[0].appendChild(window.PaddleFrame) : document.getElementsByTagName("body")[0].appendChild(window.PaddleFrame)
            },
            st = function() {
                return st = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, st.apply(this, arguments)
            },
            ct = function(t) {
                var e;
                if (o = t.origin, /^https:\/\/[a-zA-Z0-9-_]+\.paddle\.(?:com|dev|local)$/g.test(o)) {
                    var o, n = t.data;
                    if (n.action === B.EVENT || n.action === B.CLOSE) switch (lt(st({}, n.callback_data)), null === (e = n.event_name) || void 0 === e ? void 0 : e.toLowerCase()) {
                        case R.CHECKOUT_CLOSE:
                            at();
                            break;
                        case R.CHECKOUT_REMOVE_SPINNER:
                        case R.CHECKOUT_LOADED:
                            nt();
                            break;
                        case R.CHECKOUT_PING_SIZE:
                            ! function(t) {
                                if (t.callback_data && "" !== t.callback_data.height) {
                                    var e = document.getElementsByClassName(u.PADDLE_FRAME_INLINE);
                                    if (e.length > 0) {
                                        var o = parseInt(t.callback_data.height) + 45;
                                        e[0].setAttribute("height", "".concat(o))
                                    }
                                }
                            }(n);
                            break;
                        case R.CHECKOUT_COMPLETE:
                            ! function() {
                                try {
                                    var t = E.successUrl;
                                    t && (at(), setTimeout((function() {
                                        window.location.href = L(t)
                                    }), 200))
                                } catch (t) {}
                            }()
                    }
                }
            };

        function lt(t) {
            "function" == typeof E.eventCallback && E.eventCallback(t)
        }
        var ut = function() {
                return ut = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, ut.apply(this, arguments)
            },
            pt = function(t, e, o) {
                if (o || 2 === arguments.length)
                    for (var n, r = 0, i = e.length; r < i; r++) !n && r in e || (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
                return t.concat(n || Array.prototype.slice.call(e))
            };

        function mt() {
            var t;
            if (!(null === (t = window.profitwell) || void 0 === t ? void 0 : t.isLoaded) && U.get() !== e.SANDBOX) {
                var o = function() {
                    var t = E.pwAuth,
                        e = E.token;
                    if (it(e)) return "paddletoken_".concat(e);
                    if (it(t) && "string" == typeof t) return t;
                    return null
                }();
                null !== o && (function(t) {
                    window.profitwell = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        window.profitwell.q = window.profitwell.q || [], window.profitwell.q.push(t)
                    }, window.profitwell("start", ut({
                        auth_token: t
                    }, function() {
                        var t = E.pwCustomer;
                        if (t && it(t.id)) return {
                            user_id: t.id
                        };
                        if (t && it(t.email)) return {
                            user_email: t.email
                        };
                        return null
                    }()))
                }(o), function(t) {
                    var e = document.createElement("script");
                    e.src = (o = t, U.defaults().profitwellSnippetBase + "?auth=" + o), document.getElementsByTagName("head")[0].appendChild(e);
                    var o
                }(o))
            }
        }

        function ft(t) {
            window.profitwell.apply(window, pt(["cq_demo"], function(t) {
                switch (t) {
                    case r.CANCELLATION_FLOW:
                        return ["cancellation_flow"];
                    case r.PAYMENT_RECOVERY:
                        return ["dunning"];
                    case r.PAYMENT_RECOVERY_IN_APP:
                        return ["in_app"];
                    case r.TERM_OPTIMIZATION:
                        return ["plan_upgrade"];
                    case r.TERM_OPTIMIZATION_IN_APP:
                        return ["plan_upgrade", "notification"];
                    default:
                        throw new Error("Unsupported Retain demo feature")
                }
            }(t), !1))
        }

        function ht(t) {
            return {
                price_id: 22222,
                quantity: t.quantity
            }
        }

        function vt(t) {
            return t.address ? {
                country_code: t.address.countryCode,
                postal_code: t.address.postalCode
            } : void 0
        }

        function gt(t) {
            return {
                countryCodes: t.country_codes,
                unitPrice: {
                    amount: t.unit_price.amount,
                    currencyCode: t.unit_price.currency_code
                }
            }
        }

        function yt(t) {
            var e;
            return {
                id: t.id,
                name: t.name,
                description: t.description,
                taxCategory: t.tax_category,
                imageUrl: t.image_url,
                customData: t.custom_data,
                status: t.status,
                createdAt: t.created_at,
                importMeta: t.import_meta ? {
                    externalId: null !== (e = t.import_meta.external_id) && void 0 !== e ? e : null,
                    importedFrom: t.import_meta.imported_from
                } : null
            }
        }

        function wt(t) {
            return {
                amount: t.discount.amount,
                currencyCode: t.discount.currency_code,
                description: t.discount.description,
                id: t.discount.id,
                type: t.discount.type,
                code: t.discount.code,
                createdAt: t.discount.created_at,
                enabledForCheckout: t.discount.enabled_for_checkout,
                expiresAt: t.discount.expires_at,
                maximumRecurringIntervals: t.discount.maximum_recurring_intervals,
                recur: t.discount.recur,
                restrictTo: t.discount.restrict_to,
                status: t.discount.status,
                timesUsed: t.discount.times_used,
                updatedAt: t.discount.updated_at,
                usageLimit: t.discount.usage_limit
            }
        }

        function bt(t) {
            return {
                discount: wt(t),
                total: t.total,
                formattedTotal: t.formatted_total
            }
        }

        function _t(t) {
            var e, o, n;
            return {
                id: t.id,
                name: null !== (e = t.name) && void 0 !== e ? e : null,
                description: t.description,
                customData: t.custom_data,
                status: t.status,
                billingCycle: t.billing_cycle,
                productId: t.product_id,
                quantity: t.quantity,
                taxMode: t.tax_mode,
                trialPeriod: t.trial_period,
                unitPrice: {
                    amount: t.unit_price.amount,
                    currencyCode: t.unit_price.currency_code
                },
                unitPriceOverrides: null === (o = t.unit_price_overrides) || void 0 === o ? void 0 : o.map(gt),
                importMeta: t.import_meta ? {
                    externalId: null !== (n = t.import_meta.external_id) && void 0 !== n ? n : null,
                    importedFrom: t.import_meta.imported_from
                } : null
            }
        }

        function At(t) {
            var e;
            return {
                price: _t(t.price),
                quantity: t.quantity,
                taxRate: t.tax_rate,
                unitTotals: t.unit_totals,
                formattedUnitTotals: t.formatted_unit_totals,
                totals: t.totals,
                formattedTotals: t.formatted_totals,
                product: yt(t.product),
                discounts: null === (e = t.discounts) || void 0 === e ? void 0 : e.map(bt)
            }
        }

        function Et(t) {
            return t ? {
                countryCode: t.country_code,
                postalCode: t.postal_code
            } : null
        }

        function Dt(t) {
            var e = new Headers;
            return e.append("Content-Type", "application/json"), e.append("Accept", "application/json"), e.append("Paddle-Clienttoken", t), e
        }
        var Tt = function(t, e, o, n) {
                return new(o || (o = Promise))((function(r, i) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function d(t) {
                        try {
                            s(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o((function(t) {
                            t(e)
                        }))).then(a, d)
                    }
                    s((n = n.apply(t, e || [])).next())
                }))
            },
            It = function(t, e) {
                var o, n, r, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: d(0),
                    throw: d(1),
                    return: d(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function d(d) {
                    return function(s) {
                        return function(d) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, d[0] && (a = 0)), a;) try {
                                if (o = 1, n && (r = 2 & d[0] ? n.return : d[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, d[1])).done) return r;
                                switch (n = 0, r && (d = [2 & d[0], r.value]), d[0]) {
                                    case 0:
                                    case 1:
                                        r = d;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: d[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = d[1], d = [0];
                                        continue;
                                    case 7:
                                        d = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== d[0] && 2 !== d[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === d[0] && (!r || d[1] > r[0] && d[1] < r[3])) {
                                            a.label = d[1];
                                            break
                                        }
                                        if (6 === d[0] && a.label < r[1]) {
                                            a.label = r[1], r = d;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2], a.ops.push(d);
                                            break
                                        }
                                        r[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                d = e.call(t, a)
                            } catch (t) {
                                d = [6, t], n = 0
                            } finally {
                                o = r = 0
                            }
                            if (5 & d[0]) throw d[1];
                            return {
                                value: d[0] ? d[1] : void 0,
                                done: !0
                            }
                        }([d, s])
                    }
                }
            },
            Ot = function(t) {
                return Tt(void 0, void 0, void 0, (function() {
                    var e, o, n, r, i, a, d;
                    return It(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (!E.token) throw new Error("[PADDLE] token is required to use Paddle.PricePreview()");
                                if (!(rt(t) && (l = t.items, l && l.length && l.every((function(t) {
                                        return t.priceId && t.quantity
                                    }))))) throw new Error("[PADDLE] At least 1 item with priceId and quantity is required to use Paddle.PricePreview()");
                                e = {
                                    items: (c = t).items.map(ht),
                                    customer_id: c.customerId,
                                    address_id: c.addressId,
                                    business_id: c.businessId,
                                    currency_code: c.currencyCode,
                                    discount_id: c.discountId,
                                    address: vt(c),
                                    customer_ip_address: c.customerIpAddress
                                }, o = JSON.stringify(e), n = {
                                    method: "POST",
                                    headers: Dt(E.token),
                                    body: o
                                }, s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]), a = U.defaults().apiBase, [4, fetch("".concat(a, "/pricing-preview"), n)];
                            case 2:
                                return r = s.sent(), [3, 4];
                            case 3:
                                return s.sent(), [2, Promise.reject({
                                    name: "PricePreview.failed",
                                    data: {},
                                    error: {
                                        type: "network_error",
                                        code: "network_error",
                                        detail: "Network error encountered when calling Paddle.PricePreview."
                                    }
                                })];
                            case 4:
                                return s.trys.push([4, 6, , 7]), [4, r.json()];
                            case 5:
                                return i = s.sent(), [3, 7];
                            case 6:
                                return s.sent(), [2, Promise.reject({
                                    name: "PricePreview.failed",
                                    data: {},
                                    error: {
                                        type: "api_error",
                                        code: "".concat(r.status),
                                        detail: "Something went wrong when calling Paddle.PricePreview."
                                    }
                                })];
                            case 7:
                                return r.ok ? (d = function(t) {
                                    var e;
                                    return {
                                        data: {
                                            customerId: t.data.customer_id,
                                            addressId: t.data.address_id,
                                            businessId: t.data.business_id,
                                            currencyCode: t.data.currency_code,
                                            address: Et(t.data.address),
                                            customerIpAddress: t.data.customer_ip_address,
                                            discountId: t.data.discount_id,
                                            details: {
                                                lineItems: null === (e = t.data.details.line_items) || void 0 === e ? void 0 : e.map(At)
                                            },
                                            availablePaymentMethods: t.data.available_payment_methods
                                        },
                                        meta: {
                                            requestId: t.meta.request_id
                                        }
                                    }
                                }(i), [2, Promise.resolve(d)]) : [2, Promise.reject(i)]
                        }
                        var c, l
                    }))
                }))
            },
            Pt = new(function() {
                function t() {}
                return t.prototype.demo = function(t) {
                    if (!it(E.token) && !it(E.pwAuth)) throw new Error("[PADDLE] Options.token or Options.pwAuth must be set for Paddle.Retain.demo()");
                    ft(t.feature)
                }, t.prototype.initCancellationFlow = function(t) {
                    if (!it(E.token) && !it(E.pwAuth)) throw new Error("[PADDLE] Options.token or Options.pwAuth must be set for Paddle.Retain.initCancellationFlow()");
                    if (!it(E.pwCustomer) && !(null == t ? void 0 : t.subscriptionId)) throw new Error("[PADDLE] pwCustomer or subscriptionId required to use Paddle.Retain.initCancellationFlow");
                    return it(e = null == t ? void 0 : t.subscriptionId) ? window.profitwell("init_cancellation_flow", {
                        subscription_id: e
                    }) : window.profitwell("init_cancellation_flow");
                    var e
                }, t
            }());

        function St(t) {
            var e = {
                quantity: t.quantity,
                include_in_totals: t.includeInTotals
            };
            return t.priceId ? e.price_id = t.priceId : t.price && (e.price = function(t) {
                var e, o = {
                    name: t.name,
                    description: t.description,
                    unit_price: {
                        amount: t.unitPrice.amount,
                        currency_code: t.unitPrice.currencyCode
                    },
                    tax_mode: t.taxMode,
                    unit_price_overrides: null === (e = t.unitPriceOverrides) || void 0 === e ? void 0 : e.map((function(t) {
                        return {
                            country_codes: t.countryCodes,
                            unit_price: {
                                amount: t.unitPrice.amount,
                                currency_code: t.unitPrice.currencyCode
                            }
                        }
                    })),
                    quantity: t.quantity,
                    custom_data: t.customData
                };
                return t.billingCycle && (o.billing_cycle = {
                    interval: t.billingCycle.interval,
                    frequency: t.billingCycle.frequency
                }), t.trialPeriod && (o.trial_period = {
                    interval: t.trialPeriod.interval,
                    frequency: t.trialPeriod.frequency
                }), t.productId ? o.product_id = t.productId : t.product && (o.product = {
                    name: t.product.name,
                    tax_category: t.product.taxCategory,
                    description: t.product.description,
                    image_url: t.product.imageUrl,
                    custom_data: t.product.customData
                }), o
            }(t.price)), e
        }

        function Ct(t) {
            return t.address ? {
                country_code: t.address.countryCode,
                postal_code: t.address.postalCode
            } : void 0
        }

        function Nt(t) {
            return {
                taxRate: t.tax_rate,
                totals: t.totals
            }
        }

        function kt(t) {
            return {
                priceId: 111111111111,
                quantity: t.quantity,
                taxRate: t.tax_rate,
                unitTotals: t.unit_totals,
                totals: t.totals,
                product: yt(t.product)
            }
        }

        function Lt(t) {
            return {
                price: _t(t.price),
                quantity: t.quantity,
                includeInTotals: t.include_in_totals,
                proration: t.proration ? {
                    rate: t.proration.rate,
                    billingPeriod: {
                        startsAt: t.proration.billing_period.starts_at,
                        endsAt: t.proration.billing_period.ends_at
                    }
                } : null
            }
        }
        var Rt = function(t, e, o, n) {
                return new(o || (o = Promise))((function(r, i) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function d(t) {
                        try {
                            s(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o((function(t) {
                            t(e)
                        }))).then(a, d)
                    }
                    s((n = n.apply(t, e || [])).next())
                }))
            },
            xt = function(t, e) {
                var o, n, r, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: d(0),
                    throw: d(1),
                    return: d(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function d(d) {
                    return function(s) {
                        return function(d) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, d[0] && (a = 0)), a;) try {
                                if (o = 1, n && (r = 2 & d[0] ? n.return : d[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, d[1])).done) return r;
                                switch (n = 0, r && (d = [2 & d[0], r.value]), d[0]) {
                                    case 0:
                                    case 1:
                                        r = d;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: d[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = d[1], d = [0];
                                        continue;
                                    case 7:
                                        d = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== d[0] && 2 !== d[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === d[0] && (!r || d[1] > r[0] && d[1] < r[3])) {
                                            a.label = d[1];
                                            break
                                        }
                                        if (6 === d[0] && a.label < r[1]) {
                                            a.label = r[1], r = d;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2], a.ops.push(d);
                                            break
                                        }
                                        r[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                d = e.call(t, a)
                            } catch (t) {
                                d = [6, t], n = 0
                            } finally {
                                o = r = 0
                            }
                            if (5 & d[0]) throw d[1];
                            return {
                                value: d[0] ? d[1] : void 0,
                                done: !0
                            }
                        }([d, s])
                    }
                }
            };

        function Mt(t) {
            return Rt(this, void 0, void 0, (function() {
                var e, o, n, r, i, a, d;
                return xt(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            if (!E.token) throw new Error("[PADDLE] token is required to use Paddle.TransactionPreview()");
                            if (!(rt(t) && (l = t.items, l && l.length && l.every((function(t) {
                                    return (t.priceId || t.price) && t.quantity
                                }))))) throw new Error("[PADDLE] At least 1 item with priceId and quantity is required to use Paddle.TransactionPreview()");
                            e = {
                                items: (c = t).items.map(St),
                                customer_id: c.customerId,
                                address_id: c.addressId,
                                business_id: c.businessId,
                                currency_code: c.currencyCode,
                                discount_id: c.discountId,
                                address: Ct(c),
                                customer_ip_address: c.customerIpAddress,
                                ignore_trials: c.ignoreTrials
                            }, o = JSON.stringify(e), n = {
                                method: "POST",
                                headers: Dt(E.token),
                                body: o
                            }, s.label = 1;
                        case 1:
                            return s.trys.push([1, 3, , 4]), a = U.defaults().apiBase, [4, fetch("".concat(a, "/transactions/preview"), n)];
                        case 2:
                            return r = s.sent(), [3, 4];
                        case 3:
                            return s.sent(), [2, Promise.reject({
                                name: "TransactionPreview.failed",
                                data: {},
                                error: {
                                    type: "network_error",
                                    code: "network_error",
                                    detail: "Network error encountered when calling Paddle.TransactionPreview."
                                }
                            })];
                        case 4:
                            return s.trys.push([4, 6, , 7]), [4, r.json()];
                        case 5:
                            return i = s.sent(), [3, 7];
                        case 6:
                            return s.sent(), [2, Promise.reject({
                                name: "TransactionPreview.failed",
                                data: {},
                                error: {
                                    type: "api_error",
                                    code: "".concat(r.status),
                                    detail: "Something went wrong when calling Paddle.TransactionPreview."
                                }
                            })];
                        case 7:
                            return r.ok ? (d = function(t) {
                                return {
                                    data: {
                                        customerId: t.data.customer_id,
                                        addressId: t.data.address_id,
                                        businessId: t.data.business_id,
                                        currencyCode: t.data.currency_code,
                                        discountId: t.data.discount_id,
                                        customerIpAddress: t.data.customer_ip_address,
                                        address: Et(t.data.address),
                                        ignoreTrials: t.data.ignore_trials,
                                        details: {
                                            taxRatesUsed: t.data.details.tax_rates_used.map(Nt),
                                            totals: (e = t.data.details.totals, {
                                                subtotal: e.subtotal,
                                                discount: e.discount,
                                                tax: e.tax,
                                                total: e.total,
                                                credit: e.credit,
                                                balance: e.balance,
                                                grandTotal: e.grand_total,
                                                fee: e.fee,
                                                earnings: e.earnings,
                                                currencyCode: e.currency_code
                                            }),
                                            lineItems: t.data.details.line_items.map(kt)
                                        },
                                        items: t.data.items.map(Lt),
                                        availablePaymentMethods: t.data.available_payment_methods
                                    },
                                    meta: {
                                        requestId: t.meta.request_id
                                    }
                                };
                                var e
                            }(i), [2, Promise.resolve(d)]) : [2, Promise.reject(i)]
                    }
                    var c, l
                }))
            }))
        }
        var Ut = new(function() {
            function t(t) {
                j.libraryVersion = t, this.Status = {
                    libraryVersion: t
                }, window._hthck = 1, this.Checkout = {
                    open: function(t) {
                        return K.open(t)
                    },
                    close: function() {
                        return K.close()
                    },
                    updateCheckout: function(t) {
                        return K.updateCheckout(t)
                    },
                    updateItems: function(t) {
                        return K.updateItems(t)
                    }
                }, this.Retain = {
                    demo: function(t) {
                        return Pt.demo(t)
                    },
                    initCancellationFlow: function(t) {
                        return Pt.initCancellationFlow(t)
                    }
                }, this.Environment = {
                    detect: function() {
                        return U.detect()
                    },
                    get: function() {
                        return U.get()
                    },
                    set: function(t) {
                        return U.set(t)
                    }
                }, this.PricePreview = Ot, this.TransactionPreview = Mt, this.Spinner = {
                    show: ot,
                    hide: nt
                }, this.Status = {
                    libraryVersion: j.libraryVersion
                }
            }
            return t.prototype.Options = function(t) {
                E.set(t)
            }, t.prototype.Setup = function(t) {
                this._setup(t)
            }, Object.defineProperty(t.prototype, "Initialized", {
                get: function() {
                    return j.completedSetup
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.Initialize = function(t) {
                this._setup(t)
            }, t.prototype.Update = function(t) {
                var e;
                E.update(t), t.pwCustomer && (e = t.pwCustomer, window.profitwell && e && (it(e.id) && window.profitwell("user_id", e.id), it(e.email) && window.profitwell("user_email", e.email)))
            }, t.prototype._setup = function(t) {
                if (j.completedSetup) D.log("Cannot call Paddle.Setup() more than once per page, the call was ignored.", n.WARNING);
                else {
                    if (J(), et(tt), j.completedSetup = !0, D.log("Completed library setup."), window.addEventListener("message", ct, !1), U.detect(), !it(t.seller) && !it(t.token)) throw new Error("[PADDLE] You must specify your Paddle Seller ID or token within the Paddle.Setup() method. See: https://developer.paddle.com/guides/how-tos/checkout/paddle-checkout");
                    E.set(t),
                        function(t) {
                            if (void 0 === t && (t = !1), it(C(p.PADDLE_TRANSACTION))) {
                                ot();
                                var e = C(p.PADDLE_TRANSACTION);
                                t && K.open({
                                    transactionId: e
                                })
                            }
                        }(it(E.seller) || it(E.token)), mt()
                }
            }, t
        }())("2.0.42");
        return l = l.default
    }()
}));