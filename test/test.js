// Generated by CoffeeScript 1.9.3
(function() {
  var i, j, json, len, reflite;

  reflite = require('json-ref-lite');

  json = [];

  json.push({
    foo: {
      id: 'foobar',
      value: 'bar'
    },
    example: {
      '$ref': 'foobar'
    }
  });

  json.push({
    foo: {
      id: 'foobar',
      value: 'bar',
      foo: 'flop'
    },
    example: {
      '$ref': 'foobar'
    }
  });

  json.push({
    foo: {
      id: 'foobar',
      value: 'bar',
      foo: 'flop'
    },
    example: {
      ids: [
        {
          '$ref': 'foobar'
        }, {
          '$ref': 'foobar'
        }
      ]
    }
  });

  json.push({
    foo: {
      value: 'bar',
      foo: 'flop'
    },
    example: {
      ids: [
        {
          '$ref': '#/foo/value'
        }, {
          '$ref': '#/foo/foo'
        }
      ]
    }
  });

  json.push({
    foo: {
      value: 'bar',
      foo: 'flop'
    },
    example: {
      ids: {
        '$ref': '#/foo/value/this/does/not/resolve'
      }
    }
  });

  json.push({
    foo: {
      "$ref": "./test.json"
    }
  });

  json.push({
    foo: {
      "$ref": "/this/does/not/exist/test.json"
    }
  });

  json.push({
    foo: {
      "$ref": "http://json-schema.org/address"
    }
  });

  json.push({
    foo: {
      "$ref": "http://json-schema.org/address"
    }
  });

  json.push({
    foo: {
      "$ref": "http://json-schema.org/address#/properties/region"
    }
  });

  json.push({
    bar: ["one", "two"],
    foo: {
      "$ref": "#/bar[1]"
    }
  });

  json.push({
    bar: ["one", "two"],
    length: {
      "$ref": "#/bar.length"
    }
  });

  json.push({
    flop: function() {
      return "hello world";
    },
    foo: {
      "$ref": "#/flop()"
    }
  });

  json.push({
    a: {
      a: true
    },
    b: {
      b: true
    },
    "$ref": [
      {
        "$ref": "#/a"
      }, {
        "$ref": "#/b"
      }
    ]
  });

  for (i = 0, len = json.length; i < len; i++) {
    j = json[i];
    console.log(JSON.stringify(j, null, 2));
    console.log(JSON.stringify(reflite.resolve(j), null, 2));
  }

}).call(this);
