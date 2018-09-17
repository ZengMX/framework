'use strict';

var _chai = require('chai');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _immutableRenderMixin = require('../immutableRenderMixin');

var _immutableRenderMixin2 = _interopRequireDefault(_immutableRenderMixin);

var _immutableRenderDecorator = require('../immutableRenderDecorator');

var _immutableRenderDecorator2 = _interopRequireDefault(_immutableRenderDecorator);

var _shallowEqualImmutable = require('../shallowEqualImmutable');

var _shallowEqualImmutable2 = _interopRequireDefault(_shallowEqualImmutable);

var _shouldComponentUpdate = require('../shouldComponentUpdate');

var _shouldComponentUpdate2 = _interopRequireDefault(_shouldComponentUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('ImmutableRenderMixin', function () {
  describe('exports', function () {
    it('should expose correct default export', function () {
      (0, _chai.expect)(_index2.default).to.deep.equal(_immutableRenderMixin2.default);
    });
    it('should expose decorator on export', function () {
      (0, _chai.expect)(_index.immutableRenderDecorator).to.deep.equal(_immutableRenderDecorator2.default);
    });
    it('should expose shallowEqual function on export', function () {
      (0, _chai.expect)(_index.shallowEqualImmutable).to.deep.equal(_shallowEqualImmutable2.default);
    });
    it('should expose mixin as default for <= ES5', function () {
      var indexDefault = require('../index').default;
      (0, _chai.expect)(_index2.default).to.deep.equal(indexDefault);
    });
    it('should expose decorator on export for <= ES5', function () {
      var indexDecorator = require('../index').immutableRenderDecorator;
      (0, _chai.expect)(_index.immutableRenderDecorator).to.deep.equal(indexDecorator);
    });
    it('should expose shallowEqual function  for <= ES5', function () {
      var indexShallowEqual = require('../index').shallowEqualImmutable;
      (0, _chai.expect)(_index.shallowEqualImmutable).to.deep.equal(indexShallowEqual);
    });
  });
});

describe('shallowEqualImmutable', function () {
  var equals = [['string', 'string'], [true, true], [0, -0], // Immutable.is assumes 0 and -0 are the same value, matching the behavior of ES6 Map key equality.
  [_immutable2.default.List([1, 2, 3]), _immutable2.default.List([1, 2, 3])], [_immutable2.default.Map({ a: 1, b: 1, c: 1 }), _immutable2.default.Map({ a: 1, b: 1, c: 1 })], [_immutable2.default.Set([NaN]), _immutable2.default.Set([NaN])]];

  var obj = { a: 1, b: 2, c: 3 };
  var map1 = _immutable2.default.Map(obj);
  obj.a = 10;
  var map2 = _immutable2.default.Map(obj);
  var notEquals = [['string', 'other string'], [_immutable2.default.List([1, 2, 3]), _immutable2.default.List([3, 2, 1])], [_immutable2.default.List([1]), _immutable2.default.Set([1])], [map1, map2]];

  it('can determines whether two arguments are the same value or two Immutable Iterable that have equivalent values', function () {
    equals.forEach(function (pair) {
      return (0, _chai.expect)((0, _index.shallowEqualImmutable)(pair[0], pair[1])).to.be.true;
    });

    notEquals.forEach(function (pair) {
      return (0, _chai.expect)((0, _index.shallowEqualImmutable)(pair[0], pair[1])).to.be.false;
    });
  });

  it('should return true if two arguments not equal but all their items do', function () {
    equals.forEach(function (pair) {
      var obj1 = { key: pair[0] };
      var obj2 = { key: pair[1] };
      (0, _chai.expect)((0, _index.shallowEqualImmutable)(obj1, obj2)).to.be.true; // eslint-disable-line no-unused-expressions
    });

    (0, _chai.expect)((0, _index.shallowEqualImmutable)({}, {})).to.be.true; // eslint-disable-line no-unused-expressions

    notEquals.forEach(function (pair) {
      var obj1 = { key: pair[0] };
      var obj2 = { key: pair[1] };
      (0, _chai.expect)((0, _index.shallowEqualImmutable)(obj1, obj2)).to.be.false; // eslint-disable-line no-unused-expressions
    });
  });

  it('should return false if two arguments has different number of keys', function () {
    var obj1 = { a: equals[0], b: equals[1] };
    var obj2 = { a: equals[0], b: equals[1], c: equals[2] };
    (0, _chai.expect)((0, _index.shallowEqualImmutable)(obj1, obj2)).to.be.false; // eslint-disable-line no-unused-expressions
  });
});

describe('shouldComponentUpdate', function () {
  it('can determines whether new props / states and current one are equivalent to', function () {
    var obj = {
      props: { a: _immutable2.default.List([1, 2, 3]) },
      state: _immutable2.default.Map({ a: 1, b: 2 }),
      shouldComponentUpdate: _shouldComponentUpdate2.default
    };

    (0, _chai.expect)( // eslint-disable-line no-unused-expressions
    obj.shouldComponentUpdate({ a: _immutable2.default.List([1, 2, 3]) }, _immutable2.default.Map({ a: 1, b: 2 }))).to.be.false; // props and state are equal, should not update

    (0, _chai.expect)( // eslint-disable-line no-unused-expressions
    obj.shouldComponentUpdate({ a: _immutable2.default.List([1, 2, 3]) }, _immutable2.default.Map({ a: 1, b: 3 }))).to.be.true;
  });
});

describe('immutableRenderDecorator', function () {
  it('can behavior like a HoC', function () {
    var TestComponent = function TestComponent() {
      _classCallCheck(this, TestComponent);
    };

    var Enhanced = (0, _index.immutableRenderDecorator)(TestComponent);
    (0, _chai.expect)(Enhanced.prototype.shouldComponentUpdate).equal(_shouldComponentUpdate2.default);
  });

  it('should accept functional components', function () {
    var FunctionalComponent = function FunctionalComponent() {
      return null;
    };
    var DecoratedComponent = (0, _index.immutableRenderDecorator)(FunctionalComponent);

    (0, _chai.expect)(DecoratedComponent.prototype.shouldComponentUpdate).equal(_shouldComponentUpdate2.default);
  });
});