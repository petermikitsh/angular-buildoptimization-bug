"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var MonacoEditor = _interopRequireWildcard(require("monaco-editor"));

var worker = require('file-loader!../../dist/editorworker');

var ExportsCreate =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ExportsCreate, _React$Component);

  function ExportsCreate() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ExportsCreate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExportsCreate)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "node", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "editor", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "registerNode", function (c) {
      _this.node = c;
    });
    return _this;
  }

  (0, _createClass2.default)(ExportsCreate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window && !window.MonacoEnvironment) {
        window.MonacoEnvironment = {
          getWorkerUrl: function getWorkerUrl() {
            return worker;
          }
        };
      }

      this.editor = MonacoEditor.editor.create(this.node, {
        value: 'SELECT 1 + 1;',
        language: 'sql',
        scrollBeyondLastLine: false
      });
      this.editor.layout({
        height: 200,
        width: 600
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        ref: this.registerNode
      }));
    }
  }]);
  return ExportsCreate;
}(_react.default.Component);

function render(container) {
  _reactDom.default.render(_react.default.createElement(ExportsCreate, null), container);
}