{
  "name": "server",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@babel/code-frame": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",
      "integrity": "sha512-27d4lZoomVyo51VegxI20xZPuSHusqbQag/ztrBC7wegWoQ1nLREPVSKSW8byhTlzTKyNE4ifaTA6lCp7JjpFw==",
      "dev": true,
      "requires": {
        "@babel/highlight": "^7.0.0"
      }
    },
    "@babel/generator": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.6.2.tgz",
      "integrity": "sha512-j8iHaIW4gGPnViaIHI7e9t/Hl8qLjERI6DcV9kEpAIDJsAOrcnXqRS7t+QbhL76pwbtqP+QCQLL0z1CyVmtjjQ==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.6.0",
        "jsesc": "^2.5.1",
        "lodash": "^4.17.13",
        "source-map": "^0.5.0"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.1.0.tgz",
      "integrity": "sha512-A95XEoCpb3TO+KZzJ4S/5uW5fNe26DjBGqf1o9ucyLyCmi1dXq/B3c8iaWTfBk3VvetUxl16e8tIrd5teOCfGw==",
      "dev": true,
      "requires": {
        "@babel/helper-get-function-arity": "^7.0.0",
        "@babel/template": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz",
      "integrity": "sha512-r2DbJeg4svYvt3HOS74U4eWKsUAMRH01Z1ds1zx8KNTPtpTL5JAsdFv8BNyOpVqdFhHkkRDIg5B4AsxmkjAlmQ==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.4.4.tgz",
      "integrity": "sha512-Ro/XkzLf3JFITkW6b+hNxzZ1n5OQ80NvIUdmHspih1XAhtN3vPTuUFT4eQnela+2MaZ5ulH+iyP513KJrxbN7Q==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.4.4"
      }
    },
    "@babel/highlight": {
      "version": "7.5.0",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.5.0.tgz",
      "integrity": "sha512-7dV4eu9gBxoM0dAnj/BCFDW9LFU0zvTrkq0ugM7pnHEgguOEeOz1so2ZghEdzviYzQEED0r4EAgpsBChKy1TRQ==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.0",
        "esutils": "^2.0.2",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.6.2.tgz",
      "integrity": "sha512-mdFqWrSPCmikBoaBYMuBulzTIKuXVPtEISFbRRVNwMWpCms/hmE2kRq0bblUHaNRKrjRlmVbx1sDHmjmRgD2Xg==",
      "dev": true
    },
    "@babel/template": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.6.0.tgz",
      "integrity": "sha512-5AEH2EXD8euCk446b7edmgFdub/qfH1SN6Nii3+fyXP807QRx9Q73A2N5hNwRRslC2H9sNzaFhsPubkS4L8oNQ==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.6.0",
        "@babel/types": "^7.6.0"
      }
    },
    "@babel/traverse": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.6.2.tgz",
      "integrity": "sha512-8fRE76xNwNttVEF2TwxJDGBLWthUkHWSldmfuBzVRmEDWOtu4XdINTgN7TDWzuLg4bbeIMLvfMFD9we5YcWkRQ==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.6.2",
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-split-export-declaration": "^7.4.4",
        "@babel/parser": "^7.6.2",
        "@babel/types": "^7.6.0",
        "debug": "^4.1.0",
        "globals": "^11.1.0",
        "lodash": "^4.17.13"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
          "dev": true
        }
      }
    },
    "@babel/types": {
      "version": "7.6.1",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.6.1.tgz",
      "integrity": "sha512-X7gdiuaCmA0uRjCmRtYJNAVCc/q+5xSgsfKJHqMN4iNLILX39677fJE1O40arPMh0TTtS9ItH67yre6c7k6t0g==",
      "dev": true,
      "requires": {
        "esutils": "^2.0.2",
        "lodash": "^4.17.13",
        "to-fast-properties": "^2.0.0"
      }
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "acorn": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.1.0.tgz",
      "integrity": "sha512-kL5CuoXA/dgxlBbVrflsflzQ3PAas7RYZB52NOm/6839iVYJgKMJ3cQJD+t2i5+qFa8h3MDpEOJiS64E8JLnSQ==",
      "dev": true
    },
    "acorn-jsx": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.0.2.tgz",
      "integrity": "sha512-tiNTrP1MP0QrChmD2DdupCr6HWSFeKVw5d/dHTu4Y7rkAkRhU/Dt7dphAfIUyxtHpl/eBVip5uTNSpQJHylpAw==",
      "dev": true
    },
    "ajv": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",
      "integrity": "sha512-TXtUUEYHuaTEbLZWIKUr5pmBuhDLy+8KYtPYdcV8qC+pOZL+NKqYwvWSRrVXHn+ZmRRAu8vJTAznH7Oag6RVRw==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^2.0.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true
    },
    "ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "append-field": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
      "integrity": "sha1-HjRA6RXwsSA9I3SOeO3XubW0PlY="
    },
    "aproba": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
    },
    "are-we-there-yet": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
      "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
      "requires": {
        "delegates": "^1.0.0",
        "readable-stream": "^2.0.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        }
      }
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
      "dev": true
    },
    "async": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
      "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
      "requires": {
        "lodash": "^4.17.14"
      }
    },
    "axios": {
      "version": "0.19.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-0.19.0.tgz",
      "integrity": "sha512-1uvKqKQta3KBxIz14F2v06AEHZ/dIoeKfbTRkK1E5oqjDnuEerLmYTgJB5AiQZHJcljpg1TuRzdjDR06qNk0DQ==",
      "requires": {
        "follow-redirects": "1.5.10",
        "is-buffer": "^2.0.2"
      }
    },
    "babel-eslint": {
      "version": "10.0.3",
      "resolved": "https://registry.npmjs.org/babel-eslint/-/babel-eslint-10.0.3.tgz",
      "integrity": "sha512-z3U7eMY6r/3f3/JB9mTsLjyxrv0Yb1zb8PCWCLpguxfCzBIZUwy23R1t/XKewP+8mEN2Ck8Dtr4q20z6ce6SoA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.0.0",
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "eslint-visitor-keys": "^1.0.0",
        "resolve": "^1.12.0"
      }
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
    },
    "basic-auth": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.1.tgz",
      "integrity": "sha512-NF+epuEdnUYVlGuhaxbbq+dvJttwLnGY+YixlXlME5KpQ5W3CnXA5cVTneY3SPbPDRkcjMbifrwmFYcClgOZeg==",
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "bl": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-3.0.0.tgz",
      "integrity": "sha512-EUAyP5UHU5hxF8BPT0LKW8gjYLhq1DQIcneOX/pL/m2Alo+OYDQAJlHq+yseMP50Os2nHXOSic6Ss3vSQeyf4A==",
      "requires": {
        "readable-stream": "^3.0.1"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.4.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.4.0.tgz",
          "integrity": "sha512-jItXPLmrSR8jmTRmRWJXCnGJsfy85mB3Wd/uINMXA65yrnFo0cPClFIUWzo2najVNSl+mx7/4W8ttlLWJe99pQ==",
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        },
        "safe-buffer": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
          "integrity": "sha512-fZEwUGbVl7kouZs1jCdMLdt95hdIv0ZeHg6L7qPeciMZhZ+/gdesW4wgTARkrFWEpspjEATAzUGPG8N2jJiwbg=="
        },
        "string_decoder": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
          "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
          "requires": {
            "safe-buffer": "~5.2.0"
          }
        }
      }
    },
    "bluebird": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
      "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
    },
    "body-parser": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "requires": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "bson": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/bson/-/bson-1.1.1.tgz",
      "integrity": "sha512-jCGVYLoYMHDkOsbwJZBCqwMHyH4c+wzgI9hG7Z6SZJRXWr+x58pdIbm2i9a/jFGCkRJqRUr8eoI7lDWa0hTkxg=="
    },
    "buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
    },
    "busboy": {
      "version": "0.2.14",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.2.14.tgz",
      "integrity": "sha1-bCpiLvz0fFe7vh4qnDetNseSVFM=",
      "requires": {
        "dicer": "0.2.5",
        "readable-stream": "1.1.x"
      }
    },
    "bytes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
    },
    "call-me-maybe": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
      "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms="
    },
    "callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "chardet": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
      "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
      "dev": true
    },
    "chownr": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.3.tgz",
      "integrity": "sha512-i70fVHhmV3DtTl6nqvZOnIjbY0Pe4kAUjwHj8z0zAdgBtYrJyYwLKCCuRBQ5ppkyL0AkN7HKRnETdmdp1zqNXw=="
    },
    "cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dev": true,
      "requires": {
        "restore-cursor": "^2.0.0"
      }
    },
    "cli-width": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",
      "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk=",
      "dev": true
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
    },
    "color": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/color/-/color-3.1.2.tgz",
      "integrity": "sha512-vXTJhHebByxZn3lDvDJYw4lR5+uB3vuoHsuYA5AKuxRVn5wzzIfQKGLBmgdVRHKTJYeK5rvJcHnrd0Li49CFpg==",
      "requires": {
        "color-convert": "^1.9.1",
        "color-string": "^1.5.2"
      }
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
    },
    "color-string": {
      "version": "1.5.3",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.3.tgz",
      "integrity": "sha512-dC2C5qeWoYkxki5UAXapdjqO672AM4vZuPGRQfO8b5HKuKGBbKWpITyDYN7TOFKvRW7kOgAn3746clDBMDJyQw==",
      "requires": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "colornames": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/colornames/-/colornames-1.1.1.tgz",
      "integrity": "sha1-+IiQMGhcfE/54qVZ9Qd+t2qBb5Y="
    },
    "colors": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
      "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA=="
    },
    "colorspace": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/colorspace/-/colorspace-1.1.2.tgz",
      "integrity": "sha512-vt+OoIP2d76xLhjwbBaucYlNSpPsrJWPlBTtwCpQKIu6/CSMutyzX93O/Do0qzpH3YoHEes8YEFXyZ797rEhzQ==",
      "requires": {
        "color": "3.0.x",
        "text-hex": "1.0.x"
      },
      "dependencies": {
        "color": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/color/-/color-3.0.0.tgz",
          "integrity": "sha512-jCpd5+s0s0t7p3pHQKpnJ0TpQKKdleP71LWcA0aqiljpiuAkOSUFN/dyH8ZwF0hRmFlrIuRhufds1QyEP9EB+w==",
          "requires": {
            "color-convert": "^1.9.1",
            "color-string": "^1.5.2"
          }
        }
      }
    },
    "commander": {
      "version": "2.20.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.0.tgz",
      "integrity": "sha512-7j2y+40w61zy6YC2iRNpUe/NwhNyoXrYpHMrSunaMG64nRnaf96zO/KMQR4OyN/UnE5KLyEBnKHd4aG3rskjpQ=="
    },
    "compressible": {
      "version": "2.0.17",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.17.tgz",
      "integrity": "sha512-BGHeLCK1GV7j1bSmQQAi26X+GgWcTjLr/0tzSvMCl3LH1w1IJ4PFSPoV5316b30cneTziC+B1a+3OjoSUcQYmw==",
      "requires": {
        "mime-db": ">= 1.40.0 < 2"
      }
    },
    "compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "requires": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "bytes": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
          "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        }
      }
    },
    "console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
    },
    "content-disposition": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "cookie": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.3.1.tgz",
      "integrity": "sha1-5+Ch+e9DtMi6klxcWpboBtFoc7s="
    },
    "cookie-parser": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.4.tgz",
      "integrity": "sha512-lo13tqF3JEtFO7FyA49CqbhaFkskRJ0u/UAiINgrIXeRCY41c88/zxtrECl8AKH3B0hj9q10+h3Kt8I7KlW4tw==",
      "requires": {
        "cookie": "0.3.1",
        "cookie-signature": "1.0.6"
      }
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "core-js": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.2.1.tgz",
      "integrity": "sha512-Qa5XSVefSVPRxy2XfUC13WbvqkxhkwB3ve+pgCQveNgYzbM/UxZeu1dcOX/xr4UmfUd+muuvsaxilQzCyUurMw=="
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "requires": {
        "object-assign": "^4",
        "vary": "^1"
      }
    },
    "coupon-code": {
      "version": "0.4.5",
      "resolved": "https://registry.npmjs.org/coupon-code/-/coupon-code-0.4.5.tgz",
      "integrity": "sha1-6L4FZxJcjIer0dqILC+KL5AFEyo=",
      "requires": {
        "xtend": "~4.0.0"
      }
    },
    "cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "requires": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "crypto-js": {
      "version": "3.1.9-1",
      "resolved": "https://registry.npmjs.org/crypto-js/-/crypto-js-3.1.9-1.tgz",
      "integrity": "sha1-/aGedh/Ad+Af+/3G6f38WeiAbNg="
    },
    "cycle": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/cycle/-/cycle-1.0.3.tgz",
      "integrity": "sha1-IegLK+hYD5i0aPN5QwZisEbDStI="
    },
    "debug": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
      "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "decompress-response": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-4.2.1.tgz",
      "integrity": "sha512-jOSne2qbyE+/r8G1VU+G/82LBs2Fs4LAsTiLSHOCOMZQl2OKZ6i8i4IyHemTe+/yIXOtTcRQMzPcgyhoFlqPkw==",
      "requires": {
        "mimic-response": "^2.0.0"
      }
    },
    "deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "detect-libc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
      "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
    },
    "diagnostics": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/diagnostics/-/diagnostics-1.1.1.tgz",
      "integrity": "sha512-8wn1PmdunLJ9Tqbx+Fx/ZEuHfJf4NKSN2ZBj7SJC/OWRWha843+WsTjqMe1B5E3p28jqBlp+mJ2fPVxPyNgYKQ==",
      "requires": {
        "colorspace": "1.1.x",
        "enabled": "1.0.x",
        "kuler": "1.0.x"
      }
    },
    "dicer": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.2.5.tgz",
      "integrity": "sha1-WZbAhrszIYyBLAkL3cCc0S+stw8=",
      "requires": {
        "readable-stream": "1.1.x",
        "streamsearch": "0.1.2"
      }
    },
    "doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "requires": {
        "esutils": "^2.0.2"
      }
    },
    "dotenv": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.1.0.tgz",
      "integrity": "sha512-GUE3gqcDCaMltj2++g6bRQ5rBJWtkWTmqmD0fo1RnnMuUqHNCt2oTPeDnS9n6fKYvlhn7AeBkb38lymBtWBQdA=="
    },
    "ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "ejs": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/ejs/-/ejs-2.7.1.tgz",
      "integrity": "sha512-kS/gEPzZs3Y1rRsbGX4UOSjtP/CeJP0CxSNZHYxGfVM/VgLcv0ZqM7C45YyTj2DI2g7+P9Dd24C+IMIg6D0nYQ=="
    },
    "emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
      "dev": true
    },
    "enabled": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/enabled/-/enabled-1.0.2.tgz",
      "integrity": "sha1-ll9lE9LC0cX0ZStkouM5ZGf8L5M=",
      "requires": {
        "env-variable": "0.0.x"
      }
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "requires": {
        "once": "^1.4.0"
      }
    },
    "env-variable": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/env-variable/-/env-variable-0.0.5.tgz",
      "integrity": "sha512-zoB603vQReOFvTg5xMl9I1P2PnHsHQQKTEowsKKD7nseUfJq6UWzK+4YtlWUO1nhiQUxe6XMkk+JleSZD1NZFA=="
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "eslint": {
      "version": "6.5.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-6.5.1.tgz",
      "integrity": "sha512-32h99BoLYStT1iq1v2P9uwpyznQ4M2jRiFB6acitKz52Gqn+vPaMDUTB1bYi1WN4Nquj2w+t+bimYUG83DC55A==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "ajv": "^6.10.0",
        "chalk": "^2.1.0",
        "cross-spawn": "^6.0.5",
        "debug": "^4.0.1",
        "doctrine": "^3.0.0",
        "eslint-scope": "^5.0.0",
        "eslint-utils": "^1.4.2",
        "eslint-visitor-keys": "^1.1.0",
        "espree": "^6.1.1",
        "esquery": "^1.0.1",
        "esutils": "^2.0.2",
        "file-entry-cache": "^5.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob-parent": "^5.0.0",
        "globals": "^11.7.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "inquirer": "^6.4.1",
        "is-glob": "^4.0.0",
        "js-yaml": "^3.13.1",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.3.0",
        "lodash": "^4.17.14",
        "minimatch": "^3.0.4",
        "mkdirp": "^0.5.1",
        "natural-compare": "^1.4.0",
        "optionator": "^0.8.2",
        "progress": "^2.0.0",
        "regexpp": "^2.0.1",
        "semver": "^6.1.2",
        "strip-ansi": "^5.2.0",
        "strip-json-comments": "^3.0.1",
        "table": "^5.2.3",
        "text-table": "^0.2.0",
        "v8-compile-cache": "^2.0.3"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
          "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
          "dev": true
        },
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
          "dev": true
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        },
        "strip-ansi": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
          "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
          "dev": true,
          "requires": {
            "ansi-regex": "^4.1.0"
          }
        },
        "strip-json-comments": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.0.1.tgz",
          "integrity": "sha512-VTyMAUfdm047mwKl+u79WIdrZxtFtn+nBxHeb844XBQ9uMNTuTHdx2hc5RiAJYqwTj3wc/xe5HLSdJSkJ+WfZw==",
          "dev": true
        }
      }
    },
    "eslint-scope": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.0.0.tgz",
      "integrity": "sha512-oYrhJW7S0bxAFDvWqzvMPRm6pcgcnWc4QnofCAqRTRfQC0JcwenzGglTtsLyIuuWFfkqDG9vz67cnttSd53djw==",
      "dev": true,
      "requires": {
        "esrecurse": "^4.1.0",
        "estraverse": "^4.1.1"
      }
    },
    "eslint-utils": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-1.4.2.tgz",
      "integrity": "sha512-eAZS2sEUMlIeCjBeubdj45dmBHQwPHWyBcT1VSYB7o9x9WRRqKxyUoiXlRjyAwzN7YEzHJlYg0NmzDRWx6GP4Q==",
      "dev": true,
      "requires": {
        "eslint-visitor-keys": "^1.0.0"
      }
    },
    "eslint-visitor-keys": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.1.0.tgz",
      "integrity": "sha512-8y9YjtM1JBJU/A9Kc+SbaOV4y29sSWckBwMHa+FGtVj5gN/sbnKDf6xJUl+8g7FAij9LVaP8C24DUiH/f/2Z9A==",
      "dev": true
    },
    "espree": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-6.1.1.tgz",
      "integrity": "sha512-EYbr8XZUhWbYCqQRW0duU5LxzL5bETN6AjKBGy1302qqzPaCH10QbRg3Wvco79Z8x9WbiE8HYB4e75xl6qUYvQ==",
      "dev": true,
      "requires": {
        "acorn": "^7.0.0",
        "acorn-jsx": "^5.0.2",
        "eslint-visitor-keys": "^1.1.0"
      }
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
    },
    "esquery": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.0.1.tgz",
      "integrity": "sha512-SmiyZ5zIWH9VM+SRUReLS5Q8a7GxtRdxEBVZpm98rJM7Sb+A9DVCndXfkeFUd3byderg+EbDkfnevfCwynWaNA==",
      "dev": true,
      "requires": {
        "estraverse": "^4.0.0"
      }
    },
    "esrecurse": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.2.1.tgz",
      "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
      "dev": true,
      "requires": {
        "estraverse": "^4.1.0"
      }
    },
    "estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "expand-template": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz",
      "integrity": "sha512-XYfuKMvj4O35f/pOXLObndIRvyQ+/+6AhODh+OKWj9S9498pHHn/IMszH+gt0fBCRWMNfk1ZSp5x3AifmnI2vg=="
    },
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "cookie": {
          "version": "0.4.0",
          "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
          "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "external-editor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
      "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
      "dev": true,
      "requires": {
        "chardet": "^0.7.0",
        "iconv-lite": "^0.4.24",
        "tmp": "^0.0.33"
      }
    },
    "fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
      "dev": true
    },
    "fast-json-stable-stringify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
      "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fast-safe-stringify": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.0.7.tgz",
      "integrity": "sha512-Utm6CdzT+6xsDk2m8S6uL8VHxNwI6Jub+e9NYTcAms28T84pTa25GJQV9j0CY0N1rM8hK4x6grpF2BQf+2qwVA=="
    },
    "fecha": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fecha/-/fecha-2.3.3.tgz",
      "integrity": "sha512-lUGBnIamTAwk4znq5BcqsDaxSmZ9nDVJaij6NvRt/Tg4R69gERA+otPKbS86ROw9nxVMw2/mp1fnaiWqbs6Sdg=="
    },
    "figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.5"
      }
    },
    "file-entry-cache": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-5.0.1.tgz",
      "integrity": "sha512-bCg29ictuBaKUwwArK4ouCaqDgLZcysCFLmM/Yn/FDoqndh/9vNuQfXRDvTuXKLxfD/JtZQGKFT8MGcJBK644g==",
      "dev": true,
      "requires": {
        "flat-cache": "^2.0.1"
      }
    },
    "file-stream-rotator": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/file-stream-rotator/-/file-stream-rotator-0.4.1.tgz",
      "integrity": "sha512-W3aa3QJEc8BS2MmdVpQiYLKHj3ijpto1gMDlsgCRSKfIUe6MwkcpODGPQ3vZfb0XvCeCqlu9CBQTN7oQri2TZQ==",
      "requires": {
        "moment": "^2.11.2"
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "flat-cache": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-2.0.1.tgz",
      "integrity": "sha512-LoQe6yDuUMDzQAEH8sgmh4Md6oZnc/7PjtwjNFSzveXqSHt6ka9fPBuso7IGf9Rz4uqnSnWiFH2B/zj24a5ReA==",
      "dev": true,
      "requires": {
        "flatted": "^2.0.0",
        "rimraf": "2.6.3",
        "write": "1.0.3"
      }
    },
    "flatted": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-2.0.1.tgz",
      "integrity": "sha512-a1hQMktqW9Nmqr5aktAux3JMNqaucxGcjtjWnZLHX7yyPCmlSV3M54nGYbqT8K+0GhF3NBgmJCc3ma+WOgX8Jg==",
      "dev": true
    },
    "follow-redirects": {
      "version": "1.5.10",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.5.10.tgz",
      "integrity": "sha512-0V5l4Cizzvqt5D44aTXbFZz+FtyXV1vrDN6qrelxtfYQKW0KO0W2T/hkE8xvGa/540LkZlkaUjO4ailYTFtHVQ==",
      "requires": {
        "debug": "=3.1.0"
      }
    },
    "forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "fs-constants": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow=="
    },
    "fs-minipass": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
      "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
      "requires": {
        "minipass": "^2.6.0"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
      "dev": true
    },
    "gauge": {
      "version": "2.7.4",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
      "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
      "requires": {
        "aproba": "^1.0.3",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.0",
        "object-assign": "^4.1.0",
        "signal-exit": "^3.0.0",
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wide-align": "^1.1.0"
      }
    },
    "generate-password": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/generate-password/-/generate-password-1.4.2.tgz",
      "integrity": "sha512-UYEOMRcnpC/228qfCQNSebq8jmIonoPYPILsZl2NmH16Vm53yPvgo/KK3BYeCA3JmhSA/a/HqHzaY0v5dRbyoQ=="
    },
    "github-from-package": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz",
      "integrity": "sha1-l/tdlr/eiXMxPyDoKI75oWf6ZM4="
    },
    "glob": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.0.tgz",
      "integrity": "sha512-qjtRgnIVmOfnKUE3NJAQEdk+lKrxfw8t5ke7SXtfMTHcjsBfOfWXCQfdb30zfDoZQ2IRSIiidmjtbHZPZ++Ihw==",
      "dev": true,
      "requires": {
        "is-glob": "^4.0.1"
      }
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true
    },
    "has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
    },
    "http-errors": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "ignore": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
      "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
      "dev": true
    },
    "import-fresh": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.1.0.tgz",
      "integrity": "sha512-PpuksHKGt8rXfWEr9m9EHIpgyyaltBy8+eF6GJM0QCAxMgxCfucMF3mjecK2QsJr0amJW7gTqh5/wht0z2UhEQ==",
      "dev": true,
      "requires": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
          "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
          "dev": true
        }
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "ini": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
      "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw=="
    },
    "inquirer": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-6.5.2.tgz",
      "integrity": "sha512-cntlB5ghuB0iuO65Ovoi8ogLHiWGs/5yNrtUcKjFhSSiVeAIVpD7koaSU9RM8mpXw5YDi9RdYXGQMaOURB7ycQ==",
      "dev": true,
      "requires": {
        "ansi-escapes": "^3.2.0",
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^3.0.3",
        "figures": "^2.0.0",
        "lodash": "^4.17.12",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rxjs": "^6.4.0",
        "string-width": "^2.1.0",
        "strip-ansi": "^5.1.0",
        "through": "^2.3.6"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "dev": true,
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          },
          "dependencies": {
            "strip-ansi": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
              "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^3.0.0"
              }
            }
          }
        },
        "strip-ansi": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
          "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
          "dev": true,
          "requires": {
            "ansi-regex": "^4.1.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
              "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
              "dev": true
            }
          }
        }
      }
    },
    "ipaddr.js": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.0.tgz",
      "integrity": "sha512-M4Sjn6N/+O6/IXSJseKqHoFc+5FdGJ22sXqnjTpdZweHK64MzEPAyQZyEU3R/KRv2GLoa7nNtg/C2Ev6m7z+eA=="
    },
    "is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ=="
    },
    "is-buffer": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-2.0.4.tgz",
      "integrity": "sha512-Kq1rokWXOPXWuaMAqZiJW4XxsmD9zGx9q4aePabbn3qCRGedtH7Cm+zV8WETitMfu1wdh+Rvd6w5egwSngUX2A=="
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true
    },
    "is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-promise": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
      "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o=",
      "dev": true
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
    },
    "isarray": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
      "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "js-yaml": {
      "version": "3.13.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
      "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true
    },
    "json-schema-ref-parser": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/json-schema-ref-parser/-/json-schema-ref-parser-7.1.1.tgz",
      "integrity": "sha512-5DGfOTuTAMFzjNw56kwEQ9YqjCvRPHRbEmPkPSNPuK4DR4TmLQrZ1k0UdO8EJ9DKjOPqtyBjtlSnvzAC6kwUsg==",
      "requires": {
        "call-me-maybe": "^1.0.1",
        "js-yaml": "^3.13.1",
        "ono": "^5.0.1"
      }
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
      "dev": true
    },
    "jsonwebtoken": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
      "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
      "requires": {
        "jws": "^3.2.2",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^5.6.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "jwa": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
      "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
      "requires": {
        "buffer-equal-constant-time": "1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "jws": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
      "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
      "requires": {
        "jwa": "^1.4.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "kareem": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.1.tgz",
      "integrity": "sha512-l3hLhffs9zqoDe8zjmb/mAN4B8VT3L56EUvKNqLFVs9YlFA+zx7ke1DO8STAdDyYNkeSo1nKmjuvQeI12So8Xw=="
    },
    "kuler": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/kuler/-/kuler-1.0.1.tgz",
      "integrity": "sha512-J9nVUucG1p/skKul6DU3PUZrhs0LPulNaeUOox0IyXDi8S4CztTHs1gQphhuZmzXG7VOQSf6NJfKuzteQLv9gQ==",
      "requires": {
        "colornames": "^1.1.1"
      }
    },
    "levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      }
    },
    "lodash": {
      "version": "4.17.15",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
      "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="
    },
    "lodash.get": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
      "integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
    },
    "lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
    },
    "lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
    },
    "lodash.isequal": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz",
      "integrity": "sha1-QVxEePK8wwEgwizhDtMib30+GOA="
    },
    "lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
    },
    "lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
    },
    "lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
    },
    "lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
    },
    "logform": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/logform/-/logform-2.1.2.tgz",
      "integrity": "sha512-+lZh4OpERDBLqjiwDLpAWNQu6KMjnlXH2ByZwCuSqVPJletw0kTWJf5CgSNAUKn1KUkv3m2cUz/LK8zyEy7wzQ==",
      "requires": {
        "colors": "^1.2.1",
        "fast-safe-stringify": "^2.0.4",
        "fecha": "^2.3.3",
        "ms": "^2.1.1",
        "triple-beam": "^1.3.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.40.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.40.0.tgz",
      "integrity": "sha512-jYdeOMPy9vnxEqFRRo6ZvTZ8d9oPb+k18PKoYNYUe2stVEBPPwsln/qWzdbmaIvnhZ9v2P+CuecK+fpUfsV2mA=="
    },
    "mime-types": {
      "version": "2.1.24",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.24.tgz",
      "integrity": "sha512-WaFHS3MCl5fapm3oLxU4eYDw77IQM2ACcxQ9RIxfaC3ooc6PFuBMGZZsYpvoXS5D5QTWPieo1jjLdAm3TBP3cQ==",
      "requires": {
        "mime-db": "1.40.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true
    },
    "mimic-response": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-2.0.0.tgz",
      "integrity": "sha512-8ilDoEapqA4uQ3TwS0jakGONKXVJqpy+RpM+3b7pLdOjghCrEiGp9SRkFbUHAmZW9vdnrENWHjaweIoTIJExSQ=="
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
      "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
    },
    "minipass": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
      "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
      "requires": {
        "safe-buffer": "^5.1.2",
        "yallist": "^3.0.0"
      }
    },
    "minizlib": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
      "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
      "requires": {
        "minipass": "^2.9.0"
      }
    },
    "mkdirp": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
      "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
      "requires": {
        "minimist": "0.0.8"
      }
    },
    "moment": {
      "version": "2.24.0",
      "resolved": "https://registry.npmjs.org/moment/-/moment-2.24.0.tgz",
      "integrity": "sha512-bV7f+6l2QigeBBZSM/6yTNq4P2fNpSWj/0e7jQcy87A8e7o2nAfP/34/2ky5Vw4B9S446EtIhodAzkFCcR4dQg=="
    },
    "mongodb": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-3.3.2.tgz",
      "integrity": "sha512-fqJt3iywelk4yKu/lfwQg163Bjpo5zDKhXiohycvon4iQHbrfflSAz9AIlRE6496Pm/dQKQK5bMigdVo2s6gBg==",
      "requires": {
        "bson": "^1.1.1",
        "require_optional": "^1.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "mongoose": {
      "version": "5.7.3",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-5.7.3.tgz",
      "integrity": "sha512-CKCCCAhFnJRtmdmver8Ud9/NZ9m7D2H/xLgmrcL6cb9D4nril/idL8lsWWpBsJI81AOCVsktiZJ4X4vfo2S0fw==",
      "requires": {
        "bson": "~1.1.1",
        "kareem": "2.3.1",
        "mongodb": "3.3.2",
        "mongoose-legacy-pluralize": "1.0.2",
        "mpath": "0.6.0",
        "mquery": "3.2.2",
        "ms": "2.1.2",
        "regexp-clone": "1.0.0",
        "safe-buffer": "5.1.2",
        "sift": "7.0.1",
        "sliced": "1.0.1"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "mongoose-legacy-pluralize": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/mongoose-legacy-pluralize/-/mongoose-legacy-pluralize-1.0.2.tgz",
      "integrity": "sha512-Yo/7qQU4/EyIS8YDFSeenIvXxZN+ld7YdV9LqFVQJzTLye8unujAWPZ4NWKfFA+RNjh+wvTWKY9Z3E5XM6ZZiQ=="
    },
    "morgan": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.9.1.tgz",
      "integrity": "sha512-HQStPIV4y3afTiCYVxirakhlCfGkI161c76kKFca7Fk1JusM//Qeo1ej2XaMniiNeaZklMVrh3vTtIzpzwbpmA==",
      "requires": {
        "basic-auth": "~2.0.0",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "on-finished": "~2.3.0",
        "on-headers": "~1.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "mpath": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.6.0.tgz",
      "integrity": "sha512-i75qh79MJ5Xo/sbhxrDrPSEG0H/mr1kcZXJ8dH6URU5jD/knFxCVqVC/gVSW7GIXL/9hHWlT9haLbCXWOll3qw=="
    },
    "mquery": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-3.2.2.tgz",
      "integrity": "sha512-XB52992COp0KP230I3qloVUbkLUxJIu328HBP2t2EsxSFtf4W1HPSOBWOXf1bqxK4Xbb66lfMJ+Bpfd9/yZE1Q==",
      "requires": {
        "bluebird": "3.5.1",
        "debug": "3.1.0",
        "regexp-clone": "^1.0.0",
        "safe-buffer": "5.1.2",
        "sliced": "1.0.1"
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "multer": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.2.tgz",
      "integrity": "sha512-xY8pX7V+ybyUpbYMxtjM9KAiD9ixtg5/JkeKUTD6xilfDv0vzzOFcCp4Ljb1UU3tSOM3VTZtKo63OmzOrGi3Cg==",
      "requires": {
        "append-field": "^1.0.0",
        "busboy": "^0.2.11",
        "concat-stream": "^1.5.2",
        "mkdirp": "^0.5.1",
        "object-assign": "^4.1.1",
        "on-finished": "^2.3.0",
        "type-is": "^1.6.4",
        "xtend": "^4.0.0"
      }
    },
    "mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=",
      "dev": true
    },
    "nan": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.0.tgz",
      "integrity": "sha512-INOFj37C7k3AfaNTtX8RhsTw7qRy7eLET14cROi9+5HAVbbHuIWUHEauBv5qT4Av2tWasiTY1Jw6puUNqRJXQg=="
    },
    "napi-build-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-1.0.1.tgz",
      "integrity": "sha512-boQj1WFgQH3v4clhu3mTNfP+vOBxorDlE8EKiMjUlLG3C4qAESnn9AxIOkFgTR2c9LtzNjPrjS60cT27ZKBhaA=="
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
    },
    "nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node-abi": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/node-abi/-/node-abi-2.11.0.tgz",
      "integrity": "sha512-kuy/aEg75u40v378WRllQ4ZexaXJiCvB68D2scDXclp/I4cRq6togpbOoKhmN07tns9Zldu51NNERo0wehfX9g==",
      "requires": {
        "semver": "^5.4.1"
      }
    },
    "nodemailer": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/nodemailer/-/nodemailer-6.3.0.tgz",
      "integrity": "sha512-TEHBNBPHv7Ie/0o3HXnb7xrPSSQmH1dXwQKRaMKDBGt/ZN54lvDVujP6hKkO/vjkIYL9rK8kHSG11+G42Nhxuw=="
    },
    "noop-logger": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/noop-logger/-/noop-logger-0.1.1.tgz",
      "integrity": "sha1-lKKxYzxPExdVMAfYlm/Q6EG2pMI="
    },
    "npmlog": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
      "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
      "requires": {
        "are-we-there-yet": "~1.1.2",
        "console-control-strings": "~1.1.0",
        "gauge": "~2.7.3",
        "set-blocking": "~2.0.0"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "object-hash": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-1.3.1.tgz",
      "integrity": "sha512-OSuu/pU4ENM9kmREg0BdNrUDIl1heYa4mBZacJc+vVWz4GtAwu7jO8s4AIt2aGRUTqxykpWzI3Oqnsm13tTMDA=="
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "one-time": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/one-time/-/one-time-0.0.4.tgz",
      "integrity": "sha1-+M33eISCb+Tf+T46nMN7HkSAdC4="
    },
    "onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dev": true,
      "requires": {
        "mimic-fn": "^1.0.0"
      }
    },
    "ono": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/ono/-/ono-5.1.0.tgz",
      "integrity": "sha512-GgqRIUWErLX4l9Up0khRtbrlH8Fyj59A0nKv8V6pWEto38aUgnOGOOF7UmgFFLzFnDSc8REzaTXOc0hqEe7yIw=="
    },
    "openapi-schemas": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/openapi-schemas/-/openapi-schemas-1.0.2.tgz",
      "integrity": "sha512-54iKgQqgb0m/E+8VdcBTpSLsl3x8PL1GS0Zu43v6E+KSjvBypcjCC+agZC2TDRKDQHUM4WejQT98SxfH4sHHpA=="
    },
    "openapi-types": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/openapi-types/-/openapi-types-1.3.5.tgz",
      "integrity": "sha512-11oi4zYorsgvg5yBarZplAqbpev5HkuVNPlZaPTknPDzAynq+lnJdXAmruGWP0s+dNYZS7bjM+xrTpJw7184Fg=="
    },
    "optionator": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.2.tgz",
      "integrity": "sha1-NkxeQJ0/TWMB1sC0wFu6UBgK62Q=",
      "dev": true,
      "requires": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.4",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "wordwrap": "~1.0.0"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true
    },
    "parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "requires": {
        "callsites": "^3.0.0"
      }
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
      "dev": true
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "prebuild-install": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/prebuild-install/-/prebuild-install-5.3.2.tgz",
      "integrity": "sha512-INDfXzTPnhT+WYQemqnAXlP7SvfiFMopMozSgXCZ+RDLb279gKfIuLk4o7PgEawLp3WrMgIYGBpkxpraROHsSA==",
      "requires": {
        "detect-libc": "^1.0.3",
        "expand-template": "^2.0.3",
        "github-from-package": "0.0.0",
        "minimist": "^1.2.0",
        "mkdirp": "^0.5.1",
        "napi-build-utils": "^1.0.1",
        "node-abi": "^2.7.0",
        "noop-logger": "^0.1.1",
        "npmlog": "^4.0.1",
        "pump": "^3.0.0",
        "rc": "^1.2.7",
        "simple-get": "^3.0.3",
        "tar-fs": "^2.0.0",
        "tunnel-agent": "^0.6.0",
        "which-pm-runs": "^1.0.0"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ="
        }
      }
    },
    "prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "progress": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true
    },
    "proxy-addr": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.5.tgz",
      "integrity": "sha512-t/7RxHXPH6cJtP0pRG6smSr9QJidhB+3kXu0KgXnbGYMgzEnUxRQ4/LDdfOwZEMyIh3/xHb8PX3t+lfL9z+YVQ==",
      "requires": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.0"
      }
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "qs": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
      "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "requires": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "requires": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "dependencies": {
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ="
        }
      }
    },
    "readable-stream": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
      "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.1",
        "isarray": "0.0.1",
        "string_decoder": "~0.10.x"
      }
    },
    "regexp-clone": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-1.0.0.tgz",
      "integrity": "sha512-TuAasHQNamyyJ2hb97IuBEif4qBHGjPHBS64sZwytpLEqtBQ1gPJTnOaQ6qmpET16cK14kkjbazl6+p0RRv0yw=="
    },
    "regexpp": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-2.0.1.tgz",
      "integrity": "sha512-lv0M6+TkDVniA3aD1Eg0DVpfU/booSu7Eev3TDO/mZKHBfVjgCGTV4t4buppESEYDtkArYFOxTJWv6S5C+iaNw==",
      "dev": true
    },
    "require_optional": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
      "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
      "requires": {
        "resolve-from": "^2.0.0",
        "semver": "^5.1.0"
      }
    },
    "resolve": {
      "version": "1.12.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.12.0.tgz",
      "integrity": "sha512-B/dOmuoAik5bKcD6s6nXDCjzUKnaDvdkRyAk6rsmsKLipWj4797iothd7jmmUhWTfinVMU+wc56rYKsit2Qy4w==",
      "dev": true,
      "requires": {
        "path-parse": "^1.0.6"
      }
    },
    "resolve-from": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
      "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c="
    },
    "restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dev": true,
      "requires": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "rimraf": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz",
      "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
      "dev": true,
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "run-async": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.3.0.tgz",
      "integrity": "sha1-A3GrSuC91yDUFm19/aZP96RFpsA=",
      "dev": true,
      "requires": {
        "is-promise": "^2.1.0"
      }
    },
    "rxjs": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.5.3.tgz",
      "integrity": "sha512-wuYsAYYFdWTAnAaPoKGNhfpWwKZbJW+HgAJ+mImp+Epl7BG8oNWBCTyRM8gba9k4lk8BgWdoYm21Mo/RYhhbgA==",
      "dev": true,
      "requires": {
        "tslib": "^1.9.0"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
              "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
            }
          }
        },
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
        }
      }
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "sharp": {
      "version": "0.23.1",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.23.1.tgz",
      "integrity": "sha512-xt1SOwC5ewuqApBzKMFQ5VaRsC3GjOl1xklsnPNAAG7KWEAi50STFrVwjxFRe4puZ/59JU0QQqoFe7TZNnXd/g==",
      "requires": {
        "color": "^3.1.2",
        "detect-libc": "^1.0.3",
        "nan": "^2.14.0",
        "npmlog": "^4.1.2",
        "prebuild-install": "^5.3.2",
        "semver": "^6.3.0",
        "simple-get": "^3.1.0",
        "tar": "^4.4.13",
        "tunnel-agent": "^0.6.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true
    },
    "sift": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/sift/-/sift-7.0.1.tgz",
      "integrity": "sha512-oqD7PMJ+uO6jV9EQCl0LrRw1OwsiPsiFQR5AR30heR+4Dl7jBBbDLnNvWiak20tzZlSE1H7RB30SX/1j/YYT7g=="
    },
    "signal-exit": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
      "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
    },
    "simple-concat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.0.tgz",
      "integrity": "sha1-c0TLuLbib7J9ZrL8hvn21Zl1IcY="
    },
    "simple-get": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-3.1.0.tgz",
      "integrity": "sha512-bCR6cP+aTdScaQCnQKbPKtJOKDp/hj9EDLJo3Nw4y1QksqaovlW/bnptB6/c1e+qmNIDHRK+oXFDdEqBT8WzUA==",
      "requires": {
        "decompress-response": "^4.2.0",
        "once": "^1.3.1",
        "simple-concat": "^1.0.0"
      }
    },
    "simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
      "requires": {
        "is-arrayish": "^0.3.1"
      }
    },
    "slice-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz",
      "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.0",
        "astral-regex": "^1.0.0",
        "is-fullwidth-code-point": "^2.0.0"
      },
      "dependencies": {
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        }
      }
    },
    "sliced": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
      "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
    },
    "slug": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/slug/-/slug-1.1.0.tgz",
      "integrity": "sha512-NuIOjDQeTMPm+/AUIHJ5636mF3jOsYLFnoEErl9Tdpt4kpt4fOrAJxscH9mUgX1LtPaEqgPCawBg7A4yhoSWRg==",
      "requires": {
        "unicode": ">= 0.3.1"
      }
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
    },
    "stack-trace": {
      "version": "0.0.10",
      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",
      "integrity": "sha1-VHxws0fo0ytOEI6hoqFZ5f3eGcA="
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "streamsearch": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
      "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo="
    },
    "string-width": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
      "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
      "requires": {
        "code-point-at": "^1.0.0",
        "is-fullwidth-code-point": "^1.0.0",
        "strip-ansi": "^3.0.0"
      }
    },
    "string_decoder": {
      "version": "0.10.31",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
      "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
    },
    "strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "requires": {
        "ansi-regex": "^2.0.0"
      }
    },
    "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "swagger-jsdoc": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/swagger-jsdoc/-/swagger-jsdoc-3.4.0.tgz",
      "integrity": "sha512-lS3dpULpwQ5TSfPF9d9nxyXicTjJMgBGu74g/GQ0r247QMVsgqa6cL9sJ0NtK2IGxzG3HozBcXKv7qo+ns+hqg==",
      "requires": {
        "commander": "2.20.0",
        "doctrine": "3.0.0",
        "glob": "7.1.4",
        "js-yaml": "3.13.1",
        "swagger-parser": "8.0.0"
      }
    },
    "swagger-methods": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/swagger-methods/-/swagger-methods-2.0.1.tgz",
      "integrity": "sha512-+Wb4jXbZA724K1VriN1bFwUxoL0+Nr5vA4GT4Yz5rldxa+tG2aDjt5ONWeE6diviBbLTvncfuD3nQrPPFElYpA=="
    },
    "swagger-parser": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/swagger-parser/-/swagger-parser-8.0.0.tgz",
      "integrity": "sha512-zk6ig8J2B4OqCnBSIqO67/Ui96NTjuoX10YGa4YVlIlQzLpHUZbLFZaO+zSubQoqAiJxmpvlbUplEcFIsPCESA==",
      "requires": {
        "call-me-maybe": "^1.0.1",
        "json-schema-ref-parser": "^7.1.0",
        "ono": "^5.0.1",
        "openapi-schemas": "^1.0.0",
        "openapi-types": "^1.3.5",
        "swagger-methods": "^2.0.0",
        "z-schema": "^4.1.0"
      }
    },
    "swagger-ui-dist": {
      "version": "3.23.11",
      "resolved": "https://registry.npmjs.org/swagger-ui-dist/-/swagger-ui-dist-3.23.11.tgz",
      "integrity": "sha512-ipENHHH/sqpngTpHXUwg55eAOZ7b2UVayUwwuWPA6nQSPhjBVXX4zOPpNKUwQIFOl3oIwVvZF7mqoxH7pMgVzA=="
    },
    "swagger-ui-express": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/swagger-ui-express/-/swagger-ui-express-4.1.1.tgz",
      "integrity": "sha512-PDt7A4JZYszP2/AcnsYj24u1RwVRV3/8LvCZSL6EcxKq918OBhS1e7NHqS+2woBHi0zn8HjeiJVxXDBKVxgwYw==",
      "requires": {
        "swagger-ui-dist": "^3.18.1"
      }
    },
    "table": {
      "version": "5.4.6",
      "resolved": "https://registry.npmjs.org/table/-/table-5.4.6.tgz",
      "integrity": "sha512-wmEc8m4fjnob4gt5riFRtTu/6+4rSe12TpAELNSqHMfF3IqnA+CH37USM6/YR3qRZv7e56kAEAtd6nKZaxe0Ug==",
      "dev": true,
      "requires": {
        "ajv": "^6.10.2",
        "lodash": "^4.17.14",
        "slice-ansi": "^2.1.0",
        "string-width": "^3.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
          "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "dev": true,
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        },
        "strip-ansi": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
          "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
          "dev": true,
          "requires": {
            "ansi-regex": "^4.1.0"
          }
        }
      }
    },
    "tar": {
      "version": "4.4.13",
      "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.13.tgz",
      "integrity": "sha512-w2VwSrBoHa5BsSyH+KxEqeQBAllHhccyMFVHtGtdMpF4W7IRWfZjFiQceJPChOeTsSDVUpER2T8FA93pr0L+QA==",
      "requires": {
        "chownr": "^1.1.1",
        "fs-minipass": "^1.2.5",
        "minipass": "^2.8.6",
        "minizlib": "^1.2.1",
        "mkdirp": "^0.5.0",
        "safe-buffer": "^5.1.2",
        "yallist": "^3.0.3"
      }
    },
    "tar-fs": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/tar-fs/-/tar-fs-2.0.0.tgz",
      "integrity": "sha512-vaY0obB6Om/fso8a8vakQBzwholQ7v5+uy+tF3Ozvxv1KNezmVQAiWtcNmMHFSFPqL3dJA8ha6gdtFbfX9mcxA==",
      "requires": {
        "chownr": "^1.1.1",
        "mkdirp": "^0.5.1",
        "pump": "^3.0.0",
        "tar-stream": "^2.0.0"
      }
    },
    "tar-stream": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-2.1.0.tgz",
      "integrity": "sha512-+DAn4Nb4+gz6WZigRzKEZl1QuJVOLtAwwF+WUxy1fJ6X63CaGaUAxJRD2KEn1OMfcbCjySTYpNC6WmfQoIEOdw==",
      "requires": {
        "bl": "^3.0.0",
        "end-of-stream": "^1.4.1",
        "fs-constants": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.1.1"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.4.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.4.0.tgz",
          "integrity": "sha512-jItXPLmrSR8jmTRmRWJXCnGJsfy85mB3Wd/uINMXA65yrnFo0cPClFIUWzo2najVNSl+mx7/4W8ttlLWJe99pQ==",
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        },
        "safe-buffer": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
          "integrity": "sha512-fZEwUGbVl7kouZs1jCdMLdt95hdIv0ZeHg6L7qPeciMZhZ+/gdesW4wgTARkrFWEpspjEATAzUGPG8N2jJiwbg=="
        },
        "string_decoder": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
          "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
          "requires": {
            "safe-buffer": "~5.2.0"
          }
        }
      }
    },
    "text-hex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/text-hex/-/text-hex-1.0.0.tgz",
      "integrity": "sha512-uuVGNWzgJ4yhRaNSiubPY7OjISw4sw4E5Uv0wbjp+OzcbmVU/rsT8ujgcXJhn9ypzsgr5vlzpPqP+MBBKcGvbg=="
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "requires": {
        "os-tmpdir": "~1.0.2"
      }
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
    },
    "triple-beam": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/triple-beam/-/triple-beam-1.3.0.tgz",
      "integrity": "sha512-XrHUvV5HpdLmIj4uVMxHggLbFSZYIn7HEWsqePZcI50pco+MPqJ50wMGY794X7AOOhxOBAjbkqfAbEe/QMp2Lw=="
    },
    "tslib": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.10.0.tgz",
      "integrity": "sha512-qOebF53frne81cf0S9B41ByenJ3/IuH8yJKngAX35CmiZySA0khhkovshKK+jGCaMnVomla7gVlIcc3EvKPbTQ==",
      "dev": true
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2"
      }
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "unicode": {
      "version": "12.1.0",
      "resolved": "https://registry.npmjs.org/unicode/-/unicode-12.1.0.tgz",
      "integrity": "sha512-Ty6+Ew21DiYTWLYtd05RF/X4c1ekOvOgANyHbBj0h3MaXpfaGr2Rdmc0hMFuGQLyPLb9cU4ArNxl0bTF5HSzXw=="
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "uri-js": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "uuid": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
      "integrity": "sha512-pW0No1RGHgzlpHJO1nsVrHKpOEIxkGg1xB+v0ZmdNH5OAeAwzAVrCnI2/6Mtx+Uys6iaylxa+D3g4j63IKKjSQ=="
    },
    "v8-compile-cache": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.1.0.tgz",
      "integrity": "sha512-usZBT3PW+LOjM25wbqIlZwPeJV+3OSz3M1k1Ws8snlW39dZyYL9lOGC5FgPVHfk0jKmjiDV8Z0mIbVQPiwFs7g==",
      "dev": true
    },
    "validator": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/validator/-/validator-11.1.0.tgz",
      "integrity": "sha512-qiQ5ktdO7CD6C/5/mYV4jku/7qnqzjrxb3C/Q5wR3vGGinHTgJZN/TdFT3ZX4vXhX2R1PXx42fB1cn5W+uJ4lg=="
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-pm-runs": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/which-pm-runs/-/which-pm-runs-1.0.0.tgz",
      "integrity": "sha1-Zws6+8VS4LVd9rd4DKdGFfI60cs="
    },
    "wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "requires": {
        "string-width": "^1.0.2 || 2"
      }
    },
    "winston": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/winston/-/winston-3.2.1.tgz",
      "integrity": "sha512-zU6vgnS9dAWCEKg/QYigd6cgMVVNwyTzKs81XZtTFuRwJOcDdBg7AU0mXVyNbs7O5RH2zdv+BdNZUlx7mXPuOw==",
      "requires": {
        "async": "^2.6.1",
        "diagnostics": "^1.1.1",
        "is-stream": "^1.1.0",
        "logform": "^2.1.1",
        "one-time": "0.0.4",
        "readable-stream": "^3.1.1",
        "stack-trace": "0.0.x",
        "triple-beam": "^1.3.0",
        "winston-transport": "^4.3.0"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.4.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.4.0.tgz",
          "integrity": "sha512-jItXPLmrSR8jmTRmRWJXCnGJsfy85mB3Wd/uINMXA65yrnFo0cPClFIUWzo2najVNSl+mx7/4W8ttlLWJe99pQ==",
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        },
        "safe-buffer": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
          "integrity": "sha512-fZEwUGbVl7kouZs1jCdMLdt95hdIv0ZeHg6L7qPeciMZhZ+/gdesW4wgTARkrFWEpspjEATAzUGPG8N2jJiwbg=="
        },
        "string_decoder": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
          "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
          "requires": {
            "safe-buffer": "~5.2.0"
          }
        }
      }
    },
    "winston-compat": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/winston-compat/-/winston-compat-0.1.4.tgz",
      "integrity": "sha512-mMEfFsSm6GmkFF+f4/0UJtG4N1vSaczGmXLVJYmS/+u2zUaIPcw2ZRuwUg2TvVBjswgiraN+vNnAG8z4fRUZ4w==",
      "requires": {
        "cycle": "~1.0.3",
        "logform": "^1.6.0",
        "triple-beam": "^1.2.0"
      },
      "dependencies": {
        "logform": {
          "version": "1.10.0",
          "resolved": "https://registry.npmjs.org/logform/-/logform-1.10.0.tgz",
          "integrity": "sha512-em5ojIhU18fIMOw/333mD+ZLE2fis0EzXl1ZwHx4iQzmpQi6odNiY/t+ITNr33JZhT9/KEaH+UPIipr6a9EjWg==",
          "requires": {
            "colors": "^1.2.1",
            "fast-safe-stringify": "^2.0.4",
            "fecha": "^2.3.3",
            "ms": "^2.1.1",
            "triple-beam": "^1.2.0"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "winston-daily-rotate-file": {
      "version": "3.10.0",
      "resolved": "https://registry.npmjs.org/winston-daily-rotate-file/-/winston-daily-rotate-file-3.10.0.tgz",
      "integrity": "sha512-KO8CfbI2CvdR3PaFApEH02GPXiwJ+vbkF1mCkTlvRIoXFI8EFlf1ACcuaahXTEiDEKCii6cNe95gsL4ZkbnphA==",
      "requires": {
        "file-stream-rotator": "^0.4.1",
        "object-hash": "^1.3.0",
        "semver": "^6.2.0",
        "triple-beam": "^1.3.0",
        "winston-compat": "^0.1.4",
        "winston-transport": "^4.2.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "winston-transport": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/winston-transport/-/winston-transport-4.3.0.tgz",
      "integrity": "sha512-B2wPuwUi3vhzn/51Uukcao4dIduEiPOcOt9HJ3QeaXgkJ5Z7UwpBzxS4ZGNHtrxrUvTwemsQiSys0ihOf8Mp1A==",
      "requires": {
        "readable-stream": "^2.3.6",
        "triple-beam": "^1.2.0"
      },
      "dependencies": {
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "readable-stream": {
          "version": "2.3.6",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
          "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        }
      }
    },
    "wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
      "dev": true
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "write": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/write/-/write-1.0.3.tgz",
      "integrity": "sha512-/lg70HAjtkUgWPVZhZcm+T4hkL8Zbtp1nFNOn3lRrxnlv50SRBv7cR7RqR+GMsd3hUXy9hWBo4CHTbFTcOYwig==",
      "dev": true,
      "requires": {
        "mkdirp": "^0.5.1"
      }
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
    },
    "z-schema": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/z-schema/-/z-schema-4.1.1.tgz",
      "integrity": "sha512-0aKvR9FgrghUXXndYNDmAEazl8jykuHSkqkmPw2ZSuTWuLcEscn1zUTbR3LEfyxHl5EEHpqqOpF+Sd7wZvuDxw==",
      "requires": {
        "commander": "^2.7.1",
        "core-js": "^3.2.1",
        "lodash.get": "^4.4.2",
        "lodash.isequal": "^4.5.0",
        "validator": "^11.0.0"
      }
    }
  }
}
