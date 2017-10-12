'use strict';

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = (0, _helpers.load)();

var model = new _model2.default(state || undefined);
model.on('change', function (state) {
  return (0, _helpers.save)(state);
});

var view = new _view2.default();
var controller = new _controller2.default(model, view);