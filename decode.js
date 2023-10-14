!(function () {
  'use strict'

  var j
  var q
  var x
  var z = 32
  var A = 'Invalid key length'
  var B = function (U) {
    if (U.length !== z) {
      throw new Error(A)
    }
    return (
      '/' +
      U.substring(0, 2) +
      '/' +
      U.substring(2, 4) +
      '/' +
      U.substring(4, 6) +
      '/' +
      U +
      '.js'
    )
  }
  var D = '23.10.v.4'
  var E = function (U) {
    if (U) {
      var V = document.createElement('script')
      V.type = 'text/javascript'
      V.src = '//lyricsgrand.com' + B(U)
      document.head.appendChild(V)
    }
  }
  var F = 'false'
  var G = ''
  var H = 'true'
  var I = function (U, V) {
    return Math.floor(Math.random() * (V + 1 - U)) + U
  }
  var J = function (U) {
    var V = U.split(',')
    return V.map(function (W) {
      return Number(W.trim())
    })
  }
  !(function (U, V, W) {
    var X = []
    var Y = []
    var Z = W.documentElement
    var a0 = 14
    var a1 = 0
    var a2 = 0
    var a3 = {
      isEmulate: function () {
        var a5
        var a6
        var a7 = (function () {
          var ab = false
          if (/SmartTV/.test(V.userAgent)) {
            return false
          }
          ;(function (ac) {
            if (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                ac
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                ac.substr(0, 4)
              )
            ) {
              ab = true
            }
          })(V.userAgent || V.vendor || U.opera)
          return ab
        })()
        a5 = 0
        a6 = 0
        Y.forEach(function (ab) {
          if (Object.prototype.hasOwnProperty.call(ab.result, 'd')) {
            a5 += ab.result.d
          }
          if (Object.prototype.hasOwnProperty.call(ab.result, 'm')) {
            a6 += ab.result.m
          }
        })
        var a8 = a6 > a5
        var a9 =
          (Boolean(U.MSInputMethodContext) && Boolean(W.documentMode)) ||
          (typeof U !== 'undefined' &&
            Object.prototype.toString.call(U.operamini) ===
              '[object OperaMini]')
        var aa = Y.some(function (ab) {
          return ab.result.e > 0
        })
        return a9 || (a7 && !a8) || aa
      },
      addTest: function (a5, a6, a7, a8) {
        X.push({
          name: a5,
          truePoints: a6,
          falsePoints: a7,
          fn: a8
        })
      },
      runTests: function () {
        var a5
        var a6
        X.forEach(function (a7, a8) {
          try {
            a5 = typeof a7.fn === 'function' ? a7.fn() : a7.fn
            if (a5) {
              a1 |= 1 << a8
            }
            a6 = a5 ? a7.truePoints : a7.falsePoints
            Y.push({
              name: a7.name,
              result: a6
            })
            if (typeof printResult === 'function') {
              printResult('ld_results', {
                name: a7.name,
                result: a5
              })
            }
          } catch (a9) {
            a2 |= 1 << a8
          }
        })
        return this
      },
      getResults: function () {
        return a0 + '.' + a1 + (a2 > 0 ? '.' + a2 : '')
      }
    }
    function a4(a5, a6) {
      var a7 = 'LieDetector'
      var a8 = ''
      var a9 = W.createElement('div')
      var aa = (function () {
        var af = W.body
        if (!af) {
          af = W.createElement('body')
          af.fake = true
        }
        return af
      })()
      var ab = W.createElement('style')
      ab.type = 'text/css'
      ab.id = 's' + a7
      if (!aa.fake) {
        a9.appendChild(ab)
      } else {
        aa.appendChild(ab)
      }
      aa.appendChild(a9)
      if (ab.styleSheet) {
        ab.styleSheet.cssText = a5
      } else {
        ab.appendChild(W.createTextNode(a5))
      }
      a9.id = a7
      if (aa.fake) {
        aa.style.background = ''
        aa.style.overflow = 'hidden'
        a8 = Z.style.overflow
        Z.style.overflow = 'hidden'
        Z.appendChild(aa)
      }
      var ac = a6(a9)
      if (aa.fake) {
        var ad
        if (!((ad = aa.parentNode) === null || ad === undefined)) {
          ad.removeChild(aa)
        }
        Z.style.overflow = a8
        Z.offsetHeight
      } else {
        var ae
        if (!((ae = a9.parentNode) === null || ae === undefined)) {
          ae.removeChild(a9)
        }
      }
      return Boolean(ac)
    }
    a3.addTest(
      'hasFileInputMultiple',
      {},
      {
        m: 5
      },
      function () {
        return 'multiple' in W.createElement('input')
      }
    )
    a3.addTest(
      'hasCustomProtocolHandler',
      {
        d: 7
      },
      {},
      function () {
        return Boolean(V.registerProtocolHandler)
      }
    )
    a3.addTest(
      'hasCrypto',
      {},
      {
        m: 20
      },
      function () {
        return Boolean(U.crypto)
      }
    )
    a3.addTest(
      'hasNotification',
      {
        d: 7
      },
      {},
      function () {
        if (!U.Notification || !U.Notification.requestPermission) {
          return false
        }
        if (U.Notification.permission === 'granted') {
          return true
        }
        try {
          new U.Notification('')
        } catch (a5) {
          if (a5 instanceof TypeError && a5.name === 'TypeError') {
            return false
          }
        }
        return true
      }
    )
    a3.addTest(
      'hasSharedWorkers',
      {
        d: 10
      },
      {},
      function () {
        return 'SharedWorker' in U
      }
    )
    a3.addTest(
      'hasInputCapture',
      {
        m: 10
      },
      {},
      function () {
        return 'capture' in W.createElement('input')
      }
    )
    a3.addTest(
      'hasTouchEvents',
      {
        m: 5
      },
      {
        d: 5
      },
      function () {
        var a5 = false
        if (
          'ontouchstart' in U ||
          (U.DocumentTouch && W instanceof DocumentTouch)
        ) {
          a5 = true
        } else {
          a4(
            '@media (touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled){#liedetector{top:7px;position:absolute}}',
            function (a6) {
              a5 = a6.offsetTop === 7
            }
          )
        }
        return a5
      }
    )
    a3.addTest(
      'hasWindowOrientationProperty',
      {
        m: 20
      },
      {
        d: 10
      },
      function () {
        return typeof U.orientation !== 'undefined'
      }
    )
    a3.addTest(
      'hasDevToolsOpen',
      {
        d: 1000
      },
      {},
      function () {
        var a5 = {
          isOpen: false,
          orientation: undefined
        }
        var a6 = 160
        var a7 = globalThis.outerWidth - globalThis.innerWidth > a6
        var a8 = globalThis.outerHeight - globalThis.innerHeight > a6
        var a9 = a7 ? 'vertical' : 'horizontal'
        if (
          !(a8 && a7) &&
          ((globalThis.Firebug &&
            globalThis.Firebug.chrome &&
            globalThis.Firebug.chrome.isInitialized) ||
            a7 ||
            a8)
        ) {
          a5.orientation = a9
          return true
        } else {
          a5.orientation = undefined
          return false
        }
      }
    )
    a3.addTest(
      'hasLiedResolution',
      {
        e: 0
      },
      {},
      function () {
        return (
          U.screen.width < U.screen.availWidth ||
          U.screen.height < U.screen.availHeight
        )
      }
    )
    a3.addTest(
      'hasLiedOs',
      {
        e: 1
      },
      {},
      function () {
        var a5
        var a6 = V.userAgent.toLowerCase()
        var a7 = V.oscpu
        var a8 = V.platform.toLowerCase()
        if (a6.indexOf('windows phone') >= 0) {
          a5 = 'Windows Phone'
        } else if (a6.indexOf('xbox') >= 0) {
          a5 = 'Xbox'
        } else if (a6.indexOf('win') >= 0) {
          a5 = 'Windows'
        } else if (a6.indexOf('android') >= 0) {
          a5 = 'Android'
        } else if (a6.indexOf('cros') >= 0) {
          a5 = 'Chrome OS'
        } else if (a6.indexOf('linux') >= 0) {
          a5 = 'Linux'
        } else if (a6.indexOf('iphone') >= 0 || a6.indexOf('ipad') >= 0) {
          a5 = 'iOS'
        } else if (a6.indexOf('mac') >= 0) {
          a5 = 'Mac'
        } else {
          a5 = 'Other'
        }
        var a9 =
          'ontouchstart' in U || V.maxTouchPoints > 0 || V.msMaxTouchPoints > 0
        if (
          a9 &&
          ['Android', 'Chrome OS', 'iOS', 'Other', 'Windows Phone'].indexOf(
            a5
          ) === -1
        ) {
          return true
        }
        if (typeof a7 !== 'undefined') {
          a7 = a7.toLowerCase()
          if (
            a7.indexOf('win') >= 0 &&
            a5 !== 'Windows' &&
            a5 !== 'Windows Phone'
          ) {
            return true
          } else if (
            a7.indexOf('linux') >= 0 &&
            ['Android', 'Chrome OS', 'Linux'].indexOf(a5) === -1
          ) {
            return true
          } else if (a7.indexOf('mac') >= 0 && a5 !== 'Mac' && a5 !== 'iOS') {
            return true
          } else if (/win|linux|mac/.test(a7) === (a5 === 'Other')) {
            return true
          }
        }
        if (
          a8.indexOf('win') >= 0 &&
          a5 !== 'Windows' &&
          a5 !== 'Windows Phone'
        ) {
          return true
        } else if (
          /linux|android|pike/.test(a8) &&
          ['Android', 'Chrome OS', 'Linux'].indexOf(a5) === -1
        ) {
          return true
        } else if (
          /mac|ipad|ipod|iphone/.test(a8) &&
          a5 !== 'Mac' &&
          a5 !== 'iOS'
        ) {
          return true
        } else if (/win|linux|mac|iphone|ipad/.test(a8) === (a5 === 'Other')) {
          return true
        }
        return (
          typeof V.plugins === 'undefined' &&
          a5 !== 'Windows' &&
          a5 !== 'Windows Phone'
        )
      }
    )
    a3.addTest(
      'hasLiedBrowser',
      {
        e: 1
      },
      {},
      function () {
        var a5
        var a6 = V.userAgent.toLowerCase()
        var a7 = V.productSub
        if (a6.indexOf('firefox') >= 0) {
          a5 = 'Firefox'
        } else if (a6.indexOf('edge') >= 0) {
          a5 = 'Edge'
        } else if (a6.indexOf('opera') >= 0 && a6.indexOf('presto') >= 0) {
          a5 = 'Opera Presto'
        } else if (a6.indexOf('opera') >= 0 || a6.indexOf('opr') >= 0) {
          a5 = 'Opera'
        } else if (a6.indexOf('chrome') >= 0) {
          a5 = 'Chrome'
        } else if (a6.indexOf('safari') >= 0) {
          a5 = 'Safari'
        } else if (a6.indexOf('trident') >= 0) {
          a5 = 'Internet Explorer'
        } else {
          a5 = 'Other'
        }
        var a8 = !!document.documentMode
        var a9 = !a8 && !!window.StyleMedia
        if (
          ['Chrome', 'Safari', 'Opera', 'Opera Presto'].indexOf(a5) !== -1 &&
          a7 !== '20030107'
        ) {
          return true
        }
        if (a5 === 'Opera' && !window.opr) {
          return true
        }
        if (
          a5 === 'Chrome' &&
          ((!!window.chrome && !!window.chrome.search) || a9)
        ) {
          return true
        }
        if (a5 === 'Firefox' && typeof InstallTrigger === 'undefined') {
          return true
        }
        if (a5 === 'Edge' && !a9) {
          return true
        }
        var aa
        var ab = eval.toString().length
        if (ab === 37 && ['Firefox', 'Other', 'Safari'].indexOf(a5) === -1) {
          return true
        } else if (
          ab === 39 &&
          ['Internet Explorer', 'Other'].indexOf(a5) === -1
        ) {
          return true
        } else if (
          ab === 33 &&
          ['Chrome', 'Edge', 'Opera', 'Other'].indexOf(a5) === -1
        ) {
          return true
        }
        try {
          throw 'a'
        } catch (ac) {
          try {
            ac.toSource()
            aa = true
          } catch (ad) {
            aa = false
          }
        }
        return aa && a5 !== 'Firefox' && a5 !== 'Other'
      }
    )
    a3.addTest(
      'hasLiedLanguage',
      {
        e: 0
      },
      {},
      function () {
        if (V.languages) {
          try {
            var a5 = V.languages[0].substring(0, 2)
            return a5 !== V.language.substring(0, 2)
          } catch (a6) {
            return true
          }
        }
        return false
      }
    )
    U.LieDetector = a3
  })(window, navigator, document)
  j = window
  q = document
  x = {
    aParam: '',
    isA: false,
    isDetect: false,
    setA: function (U) {
      x.aParam = '&adb=' + (U ? 'y' : 'n')
      x.isA = U
      x.isDetect = true
    },
    checkScript: function () {
      var U = q.createElement('script')
      U.src = '//banquetunarmedgrater.com/advertisers.js'
      q.body.appendChild(U)
      U.onload = function () {
        x.setA(false)
        U.parentNode.removeChild(U)
      }
      U.onerror = function () {
        x.setA(true)
        U.parentNode.removeChild(U)
      }
    },
    checkBlock: function () {
      var U = document.createElement('div')
      var V = window.getComputedStyle(document.body).direction === 'rtl'
      U.innerHTML = '&nbsp;'
      U.className = 'adsBox'
      U.style.position = 'absolute'
      if (V) {
        U.style.right = '-99999px'
      } else {
        U.style.left = '-99999px'
      }
      q.body.appendChild(U)
      setTimeout(function () {
        if (U.offsetHeight === 0) {
          x.setA(true)
          U.parentNode.removeChild(U)
        } else {
          U.parentNode.removeChild(U)
          x.checkScript()
        }
      }, 200)
    },
    detect: function () {
      if (q.readyState === 'complete') {
        x.checkBlock()
      } else {
        j.addEventListener('DOMContentLoaded', function () {
          x.checkBlock()
        })
      }
    }
  }
  j.AaDetector = x
  j.AaDetector.detect()
  var K
  var L = ''
  var M = {
    hardcore: 0,
    template: ['clicks', 'pages', 'simple'].indexOf('simple'),
    timing: {
      delay: Number('300'),
      init_delay: Number('0'),
      max: Number('100'),
      period: Number('1') * 60 * 60
    },
    show_on: J('0'),
    max_per_page: Number('1'),
    clicks: J('0'),
    url:
      ((K = navigator.userAgent.toLowerCase()),
      (/android/i.test(K) ? 'https' : 'http') +
        '://lyricsgrand.com/krzm4ubfs' +
        (function () {
          var U = null
          var V = function () {
            var X
            var Y
            try {
              var Z
              X =
                (Z = window.top) === null || Z === undefined
                  ? undefined
                  : Z.document.getElementsByTagName('head')[0]
            } catch (a0) {
              X = document.getElementsByTagName('head')[0]
            }
            if (X) {
              Y = X.querySelector('title')
              if (Y) {
                if ('textContent' in Y) {
                  return void (U = Y.textContent)
                }
                U = ''
              }
            }
          }
          var W = function () {
            var X
            var Y = []
            if (U !== null) {
              Y = U.toLowerCase()
                .replace(
                  /[^a-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF+-]+/g,
                  ' '
                )
                .split(' ')
                .filter(Boolean)
            }
            var Z = []
            try {
              var a0 = window.location.ancestorOrigins
              if (a0 && a0.length > 0) {
                Z.push(a0[a0.length - 1])
              }
            } catch (a5) {
              Z.push(window.parent.location.host)
            }
            Z.push(window.parent.location.host)
            if (window.top) {
              Z.push(window.top.location.host)
            }
            try {
              var a1
              X =
                (a1 = window.top) === null || a1 === undefined
                  ? undefined
                  : a1.location.href
            } catch (a6) {
              X = window.location.href
            }
            var a2 = (function () {
              for (var a7 = I(3, 7), a8 = '', a9 = 0; a9 < a7; a9++) {
                a8 += 'abcdefghijklmnopqrstuvwxyz'.split('')[I(0, 25)]
              }
              return ''.concat(a8, '=').concat(I(0, 100))
            })()
            var a3 = X ? encodeURIComponent(X) : ''
            var a4 = encodeURIComponent(JSON.stringify(Y))
            return '?'
              .concat(a2, '&refer=')
              .concat(a3, '&kw=')
              .concat(a4, '&psid=')
              .concat(Z.toString())
          }
          V()
          if (U === null) {
            setTimeout(function () {
              V()
              return W()
            }, 20)
          }
          return W()
        })() +
        '&key=728a58c69c6f14b6f63d3e9993ff4820&scrWidth=' +
        window.screen.width +
        '&scrHeight=' +
        window.screen.height +
        '&tz=' +
        new Date().getTimezoneOffset() / -60 +
        '&v=' +
        D +
        '&ship=' +
        (L && '&psid=' + L) +
        '&sub3=invoke_layer&res=' +
        window.LieDetector.runTests().getResults() +
        '&dev=' +
        (window.LieDetector.isEmulate() ? 'e' : 'r')),
    key: '728a58c69c6f14b6f63d3e9993ff4820',
    self: 'false' === 'true',
    mself: 'false' === 'true',
    pdf: 'https://cdn.cloudimagesb.com.com/36/template/pu1473410272.pdf',
    wp: 'true' === 'true',
    include: '',
    exclude: '',
    swipe: 'true' === 'true',
    overlay: 'false' === 'true',
    appendFingerprint: 'true' === 'true',
    aa_redirect: 'false' === 'true',
    aa_redirect_delay: Number('100')
  }
  var N = function () {
    return {
      isNative: function (U) {
        return /\{\s*\[native code\]\s*\}/.test(''.concat(U))
      },
      findUpTag: function (U, V) {
        for (; U.parentNode; ) {
          U = U.parentNode
          if (U.tagName === V) {
            return U
          }
        }
        return null
      },
      isDescendant: function (U, V) {
        for (var W = V.parentNode; W !== null; ) {
          if (W === U) {
            return true
          }
          W = W.parentNode
        }
        return false
      },
      getQuery: function (U) {
        return Array.prototype.slice.call(document.querySelectorAll(U))
      },
      getArr: function (U) {
        if (U.length === 0) {
          return []
        } else {
          return this.getQuery(U)
        }
      },
      inXP: function (U) {
        var V = this
        if (
          U == null ||
          U.className == null ||
          typeof U.className.indexOf !== 'function'
        ) {
          return false
        }
        var W = 0
        var X = 0
        var Y = this.getArr(M.include)
        var Z = this.getArr(M.exclude)
        Y.forEach(function (a0) {
          if (V.isDescendant(a0, U)) {
            W += 1
          }
        })
        Z.forEach(function (a0) {
          if (V.isDescendant(a0, U)) {
            X += 1
          }
        })
        return (
          U.className.indexOf('dtnoppu') === -1 &&
          (M.include.length === 0 ||
            (Y.length > 0 && (Y.indexOf(U) >= 0 || W > 0))) &&
          (M.exclude.length === 0 ||
            (Z.length > 0 && Z.indexOf(U) < 0 && X === 0))
        )
      },
      isNotAnchorOrJSLink: function (U) {
        return U.href.charAt(0) !== '#' && U.href.indexOf('javascript:') === -1
      },
      isLink: function (U) {
        var V = this.findUpTag(U, 'A')
        if (
          (U.tagName.toLowerCase() === 'a' && this.isNotAnchorOrJSLink(U)) ||
          (V && this.isNotAnchorOrJSLink(V))
        ) {
          if (U.href) {
            return U.href
          } else {
            return V.href
          }
        } else {
          return null
        }
      }
    }
  }
  var O = {
    popunder: new (function () {
      return {
        popunderCondition: function () {
          if (!M.template) {
            return (
              M.timing.period >= 0 &&
              (!M.timing.period ||
                !(
                  Array.isArray(M.clicks) &&
                  M.clicks.indexOf(0) < 0 &&
                  M.clicks.indexOf(P.getCookie(P.ppu_clicks) - 0 + 1) < 0
                ))
            )
          } else if (M.template === 1) {
            return (
              M.timing.period >= 0 &&
              (P.getCookie(P.ppu_total_count) - 0 < M.max_per_page ||
                !M.max_per_page) &&
              (!M.timing.period ||
                (((P.getCookie(P.ppu_sub) - 0 + 1 <= M.timing.max &&
                  O.shown < M.timing.max) ||
                  !M.timing.max) &&
                  !(P.getCookie(P.ppu_delay) - 0) &&
                  !(P.getCookie(P.ppu_idelay) - 0) &&
                  Array.isArray(M.show_on) &&
                  (M.show_on.indexOf(0) >= 0 ||
                    M.show_on.indexOf(O.showOnCounter) >= 0)))
            )
          } else {
            return (
              M.timing.period >= 0 &&
              (!M.timing.period ||
                (((P.getCookie(P.ppu_sub) - 0 + 1 <= M.timing.max &&
                  O.shown < M.timing.max) ||
                  !M.timing.max) &&
                  !(P.getCookie(P.ppu_delay) - 0) &&
                  !(P.getCookie(P.ppu_idelay) - 0)))
            )
          }
        },
        clicks: function (U) {
          if (!O.swipeEvent) {
            if (!M.template) {
              O.clickedUrl = null
            }
            if (N().inXP(U.target) && O.popunder.popunderCondition()) {
              if (
                U.target.tagName.toLowerCase() === 'a' &&
                (M.template ? false : O.brs.chrome)
              ) {
                O.clickedUrl = null
              } else {
                O.clickedUrl = N().isLink(U.target)
              }
              O.popunder.init(U)
              if (O.brs.ch >= 56 && O.brs.android) {
                document.addEventListener(
                  'click',
                  O.popunder.artificialClick,
                  true
                )
              }
            }
            if (!M.template) {
              O.popunder.setCookieCount()
            }
          }
        },
        iosClicks: function (U) {
          if (
            N().inXP(U.target) &&
            U.target.tagName.toLowerCase() === 'a' &&
            !O.swipeEvent &&
            O.popunder.popunderCondition()
          ) {
            if (U.preventDefault) {
              U.preventDefault()
            } else {
              U.returnValue = false
            }
          }
        },
        swipe: function (U) {
          if (
            !O.swipeEvent &&
            N().inXP(U.target) &&
            O.popunder.popunderCondition()
          ) {
            O.clickedUrl = N().isLink(U.target)
            O.popunder.init(U)
          }
          if (!M.template) {
            O.popunder.setCookieCount()
          }
        },
        addMobileEventListener: function (U, V, W, X) {
          if (O.brs.ch >= 56) {
            document.addEventListener(
              'touchstart',
              function (Y) {
                if (N().inXP(Y.target) && O.popunder.popunderCondition()) {
                  if (O.ios) {
                    document.addEventListener(
                      'click',
                      O.popunder.preventIosClick,
                      true
                    )
                  }
                }
              },
              true
            )
          }
          if (
            M.swipe === true &&
            !(O.brs.ios9 && O.brs.safari && !M.mself) &&
            !(O.brs.iosVer > 9 && O.brs.safari)
          ) {
            document.addEventListener(V, U, X)
            if (O.brs.android && O.brs.ch < 56) {
              document.addEventListener('touchmove', U, X)
            }
          } else {
            document.addEventListener('touchstart', function () {
              O.swipeEvent = 0
            })
            document.addEventListener('touchmove', function () {
              O.swipeEvent = 1
            })
            document.addEventListener(W, U, X)
          }
        },
        artificialClick: function (U) {
          U.preventDefault()
          document.removeEventListener(
            'click',
            O.popunder.artificialClick,
            true
          )
        },
        preventIosClick: function (U) {
          U.preventDefault()
          document.removeEventListener(
            'click',
            O.popunder.preventIosClick,
            true
          )
        },
        setCookieCount: function () {
          O.clickCounter++
          P.setCookie(
            P.ppu_clicks,
            O.clickCounter,
            P.getCookie(P.ppu_exp) - 0 - new Date().getTime()
          )
        },
        windowOpenerNull: function () {
          if (O.window) {
            try {
              O.window.opener = null
            } catch (U) {}
          }
        },
        prepareURL: function () {
          if (M.url.indexOf(window.AaDetector.aParam) < 0) {
            if (window.AaDetector.isDetect) {
              M.url += window.AaDetector.aParam
            } else {
              setTimeout(function () {
                M.url += window.AaDetector.aParam
              }, 400)
            }
          }
          if (M.url.indexOf(window.rp) < 0) {
            M.url += window.rp
          }
        },
        createTransparentLayer: function () {
          if (document.getElementById(O.transpLayerId) === null) {
            O.popunder.prepareURL()
            var U = document.createElement('div')
            var V = document.createElement('a')
            U.id = O.transpLayerId
            U.style.position = 'fixed'
            U.style.top = '0'
            U.style.bottom = '0'
            U.style.left = '0'
            U.style.right = '0'
            U.style.zIndex = '2147483650'
            U.style.background = 'black'
            U.style.opacity = '.01'
            U.style.height = O.brs.screen.GetWindowHeight() + 'px'
            U.style.width = O.brs.screen.GetWindowWidth() + 'px'
            V.id = O.transpLinkId
            V.href = M.url
            V.target = '_blank'
            V.style.display = 'block'
            V.style.height = 'inherit'
            U.appendChild(V)
            document.body.appendChild(U)
          }
        },
        openLinkWithRedirect: function () {
          var U = window.open(location.origin)
          var V =
            "<script>setTimeout(function() { location.href = '" +
            M.url +
            "'; }, " +
            M.aa_redirect_delay +
            ' );</script>'
          var W = false
          function X() {
            U.document.write('<body>' + V + '</body>')
          }
          U.addEventListener(
            'DOMContentLoaded',
            function () {
              W = true
              X()
            },
            true
          )
          setTimeout(function () {
            if (!W) {
              X()
            }
          }, 3000)
        },
        openLinkSimple: function () {
          window.open(M.url + window.AaDetector.aParam, '_blank')
        },
        removeTransparentLayer: function () {
          var U = document.getElementById(O.transpLayerId)
          if (U !== null) {
            U.parentNode.removeChild(U)
          }
        },
        init: function (U) {
          if (M.template && !P.getCookie(P.ppu_main)) {
            U.preventDefault()
          } else {
            if (
              O.clickedUrl &&
              (!O.brs.ios || (O.brs.iosVer < 13 && O.brs.ch < 78))
            ) {
              if (U.preventDefault) {
                U.preventDefault()
              } else {
                U.returnValue = false
              }
            }
            O.shown++
            O.popunder.prepareURL()
            if (M.template === 1) {
              P.setCookie(
                P.ppu_total_count,
                P.getCookie(P.ppu_total_count) - 0 + 1,
                M.timing.period * 1000
              )
            }
            if (M.template) {
              P.setCookie(
                P.ppu_sub,
                P.getCookie(P.ppu_sub) - 0 + 1,
                M.timing.period * 1000
              )
              P.setCookie(
                P.ppu_delay,
                1,
                !M.timing.delay ? -1 : M.timing.delay * 1000
              )
            }
            if (O.brs.ch >= 78 && O.brs.iosVer >= 13) {
              setTimeout(function () {
                O.popunder.windowOpenerNull()
                O.popunder.removeTransparentLayer()
              }, 500)
              window.mm.sendClickMetrics()
              return true
            }
            if (M.aa_redirect && window.AaDetector.isA) {
              O.popunder.openLinkWithRedirect()
            } else {
              O.popunder.openLinkSimple()
            }
            O.popunder.windowOpenerNull()
            window.mm.sendClickMetrics()
          }
          O.popunder.removeTransparentLayer()
          return true
        }
      }
    })(),
    brs: new (function () {
      var U = navigator.userAgent.toLowerCase()
      var V = {
        webkit: /webkit/.test(U),
        mozilla: /mozilla/.test(U) && !/(compatible|webkit)/.test(U),
        chrome: /chrome/.test(U) || /crios/.test(U),
        msie: /msie/.test(U) && !/opera/.test(U),
        edge: /edge/.test(U),
        ie11: /mozilla/.test(U) && /trident/.test(U) && /rv:11/.test(U),
        firefox: /firefox/.test(U),
        safari: /safari/.test(U) && !(/chrome/.test(U) || /crios/.test(U)),
        opera: /opera/.test(U),
        opr: /opr/.test(U),
        ya: /yabrowser/.test(U),
        fb: /fbav/.test(U),
        ucbrowser: /ubrowser/.test(U) || /ucbrowser/.test(U),
        android: /android/i.test(U),
        puf: /puffin/i.test(U),
        ios: /iphone|ipad|ipod/i.test(U),
        ios9: (/os 9/.test(U) || /os 10/.test(U)) && /like mac os x/.test(U),
        ios10: /os 10/.test(U) && /like mac os x/.test(U),
        ios11: /os 11/.test(U) && /like mac os x/.test(U),
        blackberry: /blackberry|bb/i.test(U),
        winphone: /windows\sphone/i.test(U),
        new_webview: /Mobile/i.test(U),
        isMobile:
          /Android|BlackBerry|iPhone|iPad|iPod|Opera\sMini|IEMobile/i.test(U),
        ucversion: parseInt(
          (U.match(/.+(?:ubrowser|ucbrowser)[\/: ]([\d.]+)/) || [])[1]
        ),
        wversion: parseInt((U.match(/.+(?:windows nt)[\/: ]([\d.]+)/) || [])[1])
      }
      V.version = V.safari
        ? (U.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1]
        : (U.match(/.+(?:ox|me|ra|ie|crios)[\/: ]([\d.]+)/) || [])[1]
      V.iosVer = V.ios ? parseInt((U.match(/os ([\d]+)_/) || [])[1]) : 0
      V.ch = V.chrome ? Number(V.version.split('.')[0]) : 0
      V.mac = /mac os/.test(U) && !V.ios && parseInt(V.version) >= 48
      var W = self
      try {
        W =
          top !== self && typeof top.document.location.toString() === 'string'
            ? top
            : self
      } catch (X) {}
      V._parent = W
      V.screen = {
        GetWindowHeight: function () {
          var Y = 0
          if (typeof V._parent.window.innerHeight === 'number') {
            Y = V._parent.window.innerHeight
          } else if (
            V._parent.document.documentElement &&
            V._parent.document.documentElement.clientHeight
          ) {
            Y = V._parent.document.documentElement.clientHeight
          } else if (
            V._parent.document.body &&
            V._parent.document.body.clientHeight
          ) {
            Y = V._parent.document.body.clientHeight
          }
          return Y
        },
        GetWindowWidth: function () {
          var Y = 0
          if (typeof V._parent.window.innerWidth === 'number') {
            Y = V._parent.window.innerWidth
          } else if (
            V._parent.document.documentElement &&
            V._parent.document.documentElement.clientWidth
          ) {
            Y = V._parent.document.documentElement.clientWidth
          } else if (
            V._parent.document.body &&
            V._parent.document.body.clientWidth
          ) {
            Y = V._parent.document.body.clientWidth
          }
          return Y
        },
        GetWindowTop: function () {
          if (V._parent.window.screenTop !== undefined) {
            return V._parent.window.screenTop
          } else {
            return V._parent.window.screenY
          }
        },
        GetWindowLeft: function () {
          if (V._parent.window.screenLeft !== undefined) {
            return V._parent.window.screenLeft
          } else {
            return V._parent.window.screen
          }
        }
      }
      return V
    })(),
    clickedUrl: null,
    shown: 0,
    window: false,
    clickCounter: 0,
    showOnCounter: 0,
    swipeEvent: 0,
    overlayName: 'pt' + Math.random().toString(36).substr(10),
    transpLayerId:
      'abcdefghijklmnopqrstuvwxyz'.split('')[Math.floor(Math.random() * 26)] +
      Math.random().toString(36).substr(3, 6),
    transpLinkId: 'lk' + Math.random().toString(36).substr(10)
  }
  var P = {
    ppu_main: 'ppu_main_' + M.key,
    ppu_exp: 'ppu_exp_' + M.key,
    ppu_clicks: 'ppu_clicks_' + M.key,
    ppu_show_on: 'ppu_show_on_' + M.key,
    ppu_sub: 'ppu_sub_' + M.key,
    ppu_delay: 'ppu_delay_' + M.key,
    ppu_idelay: 'ppu_idelay_' + M.key,
    ppu_total_count: 'total_count_' + M.key,
    DATA_SEPARATOR: '; ',
    init: function () {
      if (window !== window.top && !this.isLocalStorageAvailable()) {
        throw new Error('No available storage')
      }
      if (!M.template && M.clicks) {
        if (!this.getCookie(this.ppu_exp)) {
          this.setCookie(this.ppu_clicks, 0, -1)
        }
        O.clickCounter = Number(this.getCookie(this.ppu_clicks))
      }
      if (M.template === 1) {
        if (M.show_on) {
          O.showOnCounter = Number(this.getCookie(this.ppu_show_on)) + 1
          if (!this.getCookie(this.ppu_exp)) {
            this.setCookie(
              this.ppu_show_on,
              O.showOnCounter,
              M.timing.period * 1000
            )
          } else {
            this.setCookie(
              this.ppu_show_on,
              O.showOnCounter,
              Number(this.getCookie(this.ppu_exp)) - new Date().getTime()
            )
          }
        }
        this.setCookie(this.ppu_delay, 0, -1)
        this.setCookie(this.ppu_total_count, 0, -1)
      }
      if (!!M.template && !M.timing.period) {
        this.setCookie(this.ppu_sub, 0, -1)
      }
    },
    setCookie: function (U, V, W) {
      var X = new Date(new Date().getTime() + W).toUTCString()
      var Y = W ? 'expires=' + X : ''
      var Z = [U + '=' + V, Y, 'path=/', 'SameSite=Lax'].filter(Boolean)
      var a0 = [V, Y].filter(Boolean)
      if (window !== window.top) {
        this.setStorage(U, a0.join(this.DATA_SEPARATOR))
      } else {
        document.cookie = Z.join(this.DATA_SEPARATOR)
      }
    },
    getCookie: function (U) {
      var V
      if (window !== window.top) {
        V = this.localStorage(U).toString().split(this.DATA_SEPARATOR)
        for (var W = 0; W < V.length; W += 1) {
          if (V[W].split('=')[0] === 'expires') {
            if (Date.parse(V[W].split('=')[1]) < Date.now()) {
              this.storageDelete(U)
              return false
            } else {
              return V[0]
            }
          }
        }
      } else {
        V = document.cookie.split(this.DATA_SEPARATOR)
        for (var X = 0; X < V.length; X += 1) {
          if (V[X].split('=')[0] === U) {
            return V[X].split('=')[1]
          }
        }
      }
      return false
    },
    setStorage: function (U, V) {
      if (this.isLocalStorageAvailable()) {
        if (window.localStorage) {
          window.localStorage.setItem(U, V)
          return true
        } else {
          try {
            var W = document.body
            W.addBehavior('#default#userData')
            W.setAttribute(U, V)
            W.save('auth')
            return true
          } catch (X) {
            return false
          }
        }
      }
      return false
    },
    localStorage: function (U) {
      var V
      if (window.localStorage) {
        V = window.localStorage.getItem(U)
        if (V) {
          return V
        } else {
          return false
        }
      } else {
        var W = document.body
        try {
          W.addBehavior('#default#userData')
          W.load('auth')
          V = W.getAttribute(U)
          if (V) {
            return V
          } else {
            return false
          }
        } catch (X) {
          return false
        }
      }
    },
    storageDelete: function (U) {
      if (window.localStorage) {
        window.localStorage.removeItem(U)
        return true
      }
      var V = document.body
      try {
        V.addBehavior('#default#userData')
        V.load('auth')
        V.removeAttribute(U)
        return true
      } catch (W) {
        return false
      }
    },
    isLocalStorageAvailable: function () {
      try {
        localStorage.setItem('storageSupport', '1')
        localStorage.removeItem('storageSupport')
        return 'localStorage' in window && window.localStorage !== null
      } catch (U) {
        return false
      }
    }
  }
  var Q = true
  var R = function () {
    var U = (function (W) {
      for (
        var X = document.getElementsByTagName('script'), Y = 0, Z = X.length;
        Y < Z;
        Y += 1
      ) {
        if (X[Y].getAttribute(W) !== null) {
          return X[Y]
        }
      }
      return null
    })('data-domain')
    if (U !== null) {
      var V = U.getAttribute('data-domain')
      if (V !== null) {
        M.url += '&psid=' + V
      }
    }
  }
  var S = function () {
    if (M.appendFingerprint) {
      if (!window.placementKey) {
        Object.defineProperty(window, 'placementKey', {
          value: [],
          writable: false
        })
      }
      window.placementKey.push(M.key)
      U = document.createElement('script')
      U.src = '//friendshipmale.com/sfp.js'
      document.head.appendChild(U)
    }
    var U
  }
  var T = function () {
    S()
    R()
    P.init()
    ;(function () {
      if (document.addEventListener) {
        if (O.brs.ios || O.brs.android || O.brs.blackberry || O.brs.winphone) {
          if (O.brs.android && O.brs.chrome) {
            O.popunder.addMobileEventListener(
              O.popunder.clicks,
              O.brs.ch < 56 ? 'mousemove' : 'mousedown',
              'touchend',
              true
            )
          } else if (
            O.brs.android &&
            O.brs.safari &&
            !O.brs.chrome &&
            !O.brs.new_webview
          ) {
            O.popunder.addMobileEventListener(
              O.popunder.clicks,
              'touchstart',
              'touchend'
            )
          } else if (
            (O.brs.android && O.brs.firefox) ||
            O.brs.ios9 ||
            (O.brs.android && O.brs.safari && !O.brs.chrome)
          ) {
            O.popunder.addMobileEventListener(
              O.popunder.clicks,
              'touchend',
              'touchend'
            )
          } else if (O.brs.iosVer >= 13 && O.brs.ch >= 78) {
            document.addEventListener('click', O.popunder.clicks)
          } else if ('ontouchstart' in document.documentElement) {
            O.popunder.addMobileEventListener(
              O.popunder.clicks,
              'touchstart',
              'touchend'
            )
          } else {
            document.addEventListener('click', O.popunder.clicks)
          }
          if (O.brs.ios && O.brs.ch < 78) {
            O.popunder.addMobileEventListener(
              O.popunder.iosClicks,
              O.brs.ch < 56 ? 'touchstart' : 'touchend',
              'touchend'
            )
          }
          if (!O.brs.chrome && !O.brs.ios9) {
            if (O.brs.ios || (O.brs.android && O.brs.firefox)) {
              O.popunder.addMobileEventListener(
                O.popunder.swipe,
                'mousemove',
                'mousemove',
                false
              )
            } else {
              O.popunder.addMobileEventListener(
                O.popunder.swipe,
                'touchmove',
                'touchmove',
                false
              )
            }
          }
        } else {
          document.addEventListener(
            O.brs.chrome ? 'mousedown' : 'click',
            function (V) {
              O.clickedUrl = null
              if (Q) {
                O.popunder.removeTransparentLayer()
              }
              var W =
                V.target.tagName.toLowerCase() === 'html' &&
                document.body.clientWidth <= V.clientX
              if (!W && N().inXP(V.target) && O.popunder.popunderCondition()) {
                O.clickedUrl = N().isLink(V.target)
                O.popunder.init(V)
              }
              if (!M.template) {
                O.popunder.setCookieCount()
              }
            },
            true
          )
        }
      } else if (document.attachEvent) {
        document.attachEvent('onclick', function (V) {
          O.clickedUrl = null
          var W = O.brs.msie ? V.srcElement : V.target ? V.target : ''
          if (N().inXP(W) && O.popunder.popunderCondition()) {
            O.clickedUrl = N().isLink(V.target)
            O.popunder.init(V)
          }
          if (!M.template) {
            O.popunder.setCookieCount()
          }
        })
      } else {
        var U = setInterval(function () {
          if (typeof document.body !== 'undefined' && document.body) {
            document.body.onclick = function (V) {
              O.clickedUrl = null
              var W = O.brs.msie ? V.srcElement : V.target ? V.target : ''
              if (N().inXP(W) && O.popunder.popunderCondition()) {
                O.clickedUrl = N().isLink(V.target)
                O.popunder.init(V)
              }
              if (!M.template) {
                O.popunder.setCookieCount()
              }
            }
            clearInterval(U)
          }
        }, 10)
      }
      if (M.hardcore) {
        window.onbeforeunload = function () {
          if (!O.shown) {
            O.shown += 1
            setTimeout(function () {
              window.location.href = M.url
            }, 10)
          }
        }
      }
      setInterval(function () {
        if (!M.template) {
          if (!P.getCookie(P.ppu_exp)) {
            P.setCookie(P.ppu_clicks, 0, -1)
            O.clickCounter = 0
            P.setCookie(
              P.ppu_exp,
              new Date().getTime() + M.timing.period * 1000,
              (M.timing.period === 0 ? -1 : M.timing.period) * 1000
            )
          }
        } else {
          if (!P.getCookie(P.ppu_main)) {
            P.setCookie(P.ppu_main, 1, M.timing.period * 1000)
            O.shown = 0
            if (M.template === 1) {
              P.setCookie(
                P.ppu_exp,
                new Date().getTime() + M.timing.period * 1000,
                (M.timing.period === 0 ? -1 : M.timing.period) * 1000
              )
            }
            if (Q && !P.getCookie(P.ppu_delay)) {
              P.setCookie(P.ppu_delay, 0, -1)
            } else {
              P.setCookie(P.ppu_delay, 0, -1)
            }
            P.setCookie(P.ppu_idelay, 1, M.timing.init_delay * 1000)
            P.setCookie(P.ppu_sub, 0, -1)
            P.setCookie(P.ppu_total_count, 0, -1)
          }
          if (!M.timing.period && O.shown < M.timing.max) {
            P.setCookie(P.ppu_sub, 0, -1)
            P.setCookie(P.ppu_delay, 0, -1)
          }
          if (!M.timing.init_delay) {
            P.setCookie(P.ppu_idelay, 0, -1)
          }
        }
        if (M.overlay) {
          var V = !document.getElementsByClassName(O.overlayName).length
            ? document.createElement('div')
            : document.getElementsByClassName(O.overlayName)[0]
          if (O.popunder.popunderCondition()) {
            V.className = O.overlayName
            V.style.height = '100%'
            V.style.width = '100%'
            V.style.position = 'fixed'
            V.style.top = '0'
            V.style.left = '0'
            V.style.zIndex = '3000'
            V.style.backgroundImage =
              'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
            if (!document.getElementsByClassName(O.overlayName).length) {
              document.body.appendChild(V)
            }
          } else if (
            document.getElementsByClassName(O.overlayName).length > 0
          ) {
            var W
            if (!((W = V.parentNode) === null || W === undefined)) {
              W.removeChild(V)
            }
          }
        }
        if (Q && O.popunder.popunderCondition()) {
          O.popunder.createTransparentLayer()
        }
      }, 500)
    })()
    ;(function () {
      if (F === 'true') {
        E('')
      } else if (G === 'true') {
        E('')
      } else if (H === 'true') {
        E('e3a0021c8381b2ea49b6fcdcbc913f27')
      }
    })()
  }
  !(function (U) {
    U.mm = Object.freeze({
      isMetricsEnabled: 'false' === 'true',
      baseURL: '//lyricsgrand.com/pixel/',
      templateId: '730',
      buildVersion: D,
      placementKey: '728a58c69c6f14b6f63d3e9993ff4820',
      findPopsScriptEntry: function (V) {
        var W = new RegExp(B(this.placementKey))
        return V.filter(function (X) {
          return X.initiatorType === 'script' && W.test(X.name)
        })[0]
      },
      preparePopsScriptRequestData: function (V) {
        return {
          dl: V.domainLookupEnd - V.domainLookupStart,
          th: V.connectEnd - V.connectStart,
          sc: V.connectEnd - V.secureConnectionStart,
          rs: V.responseEnd - V.responseStart,
          rd: V.responseEnd - V.requestStart,
          fd: V.responseEnd - V.startTime,
          bv: this.buildVersion,
          tmpl: this.templateId
        }
      },
      serializeQueryData: function (V) {
        return (
          '?' +
          Object.keys(V)
            .map(function (W) {
              return ''
                .concat(encodeURIComponent(W), '=')
                .concat(encodeURIComponent(V[W]))
            })
            .join('&')
        )
      },
      touchPixel: function (V) {
        new Image().src = this.baseURL + V
      },
      sendNetworkMetrics: function () {
        var V
        if (
          this.isMetricsEnabled &&
          (V = window.performance) !== null &&
          V !== undefined &&
          V.getEntriesByType
        ) {
          var W = this.findPopsScriptEntry(
            window.performance.getEntriesByType('resource')
          )
          if (W) {
            var X = this.preparePopsScriptRequestData(W)
            var Y = 'purst' + this.serializeQueryData(X)
            this.touchPixel(Y)
          }
        }
      },
      sendSuccessfulExecutionMetrics: function () {
        if (this.isMetricsEnabled) {
          var V = 'purs?tmpl='
            .concat(this.templateId, '&bv=')
            .concat(this.buildVersion)
          this.touchPixel(V)
        }
      },
      sendClickMetrics: function () {
        if (this.isMetricsEnabled) {
          var V = 'puclc?tmpl='
            .concat(this.templateId, '&bv=')
            .concat(this.buildVersion, '&plk=')
            .concat(this.placementKey)
          this.touchPixel(V)
        }
      },
      sendErrorMetrics: function (V) {
        if (this.isMetricsEnabled) {
          var W = new XMLHttpRequest()
          W.open('POST', this.baseURL + 'pure')
          W.setRequestHeader('Content-Type', 'application/json')
          W.send(
            JSON.stringify({
              bv: this.buildVersion,
              error: V,
              tmpl: this.templateId
            })
          )
        }
      }
    })
  })(window)
  try {
    window.mm.sendNetworkMetrics()
    T()
  } catch (U) {
    window.mm.sendErrorMetrics(
      JSON.stringify({
        error: U.stack || U.message,
        location: window.location.href
      })
    )
  }
  !(function (V) {
    var W = ''
    var X = document.cookie
    var Y = 'dom3ic8zudi28v8lr6fgphwffqoz0j6c'
    var Z = X.indexOf(Y + '=')
    var a0 = X.charAt(Z - 1)
    if (Z === 0 || (Z > 0 && (a0 === ';' || a0 === ' '))) {
      var a1 = X.indexOf(';', Z)
      W = X.substring(Z + 33, a1 === -1 ? undefined : a1)
    } else {
      var a2 = new XMLHttpRequest()
      a2.open('GET', 'https://professionalswebcheck.com/stats', true)
      if ('withCredentials' in a2) {
        a2.withCredentials = true
      }
      a2.timeout = 1000
      a2.onload = function () {
        var a3 = new Date()
        W = encodeURIComponent(a2.responseText.trim())
        a3.setTime(a3.getTime() + 604800000)
        var a4 = [
          Y + '=' + W,
          'expires=' + a3.toUTCString(),
          'path=/',
          'SameSite=Lax'
        ]
        document.cookie = a4.join(';')
      }
      a2.ontimeout = a2.onerror = function () {
        window.mm.sendErrorMetrics('UUID request timed out or failed')
      }
      a2.send()
    }
    Object.defineProperty(V, 'rp', {
      get: function () {
        if (W) {
          return '&uuid=' + W
        } else {
          return ''
        }
      }
    })
  })(window)
})()
