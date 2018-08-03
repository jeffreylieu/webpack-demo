(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addImg = exports.addToDom = exports.login = undefined;

var _users = __webpack_require__(/*! ./users */ "./src/users.js");

var _users2 = _interopRequireDefault(_users);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(username, password) {
    var user = _users2.default[username];

    if (user && user.password === password) {
        return 'User login as:' + user.name;
    }
    return 'Invalid username and/or password';
};

var addToDom = exports.addToDom = function addToDom(type, text) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';

    var element = (0, _jquery2.default)('<' + type + '>', {
        text: text,
        class: className
    });

    (0, _jquery2.default)('#root').append(element);
};

var addImg = exports.addImg = function addImg(src) {

    var img = (0, _jquery2.default)('<img>', { src: src });

    (0, _jquery2.default)('#root').append(img);
};

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DiscoStu: {
        password: 'asdf',
        name: 'Stu Dunworth'
    },
    SassySally: {
        password: 'hjkl',
        name: 'Mr. Pizza'
    },
    DruCockstar: {
        password: 'potato',
        name: 'Dur'
    },
    PizzaWussySanta: {
        password: 'Pepperoni',
        name: 'Ihateme'
    }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOlsibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInVzZXJzIiwibmFtZSIsImFkZFRvRG9tIiwidHlwZSIsInRleHQiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY2xhc3MiLCJhcHBlbmQiLCJhZGRJbWciLCJzcmMiLCJpbWciLCJEaXNjb1N0dSIsIlNhc3N5U2FsbHkiLCJEcnVDb2Nrc3RhciIsIlBpenphV3Vzc3lTYW50YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFHTyxJQUFNQSx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUN6QyxRQUFNQyxPQUFPQyxnQkFBTUgsUUFBTixDQUFiOztBQUVBLFFBQUlFLFFBQVFBLEtBQUtELFFBQUwsS0FBa0JBLFFBQTlCLEVBQXVDO0FBQ25DLGVBQU8sbUJBQW1CQyxLQUFLRSxJQUEvQjtBQUNIO0FBQ0QsV0FBTyxrQ0FBUDtBQUNILENBUE07O0FBU0EsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBbUM7QUFBQSxRQUF0QkMsU0FBc0IsdUVBQVYsS0FBVTs7QUFDdkQsUUFBTUMsVUFBVSw0QkFBTUgsSUFBTixRQUFlO0FBQzNCQyxrQkFEMkI7QUFFM0JHLGVBQU9GO0FBRm9CLEtBQWYsQ0FBaEI7O0FBS0EsMEJBQUUsT0FBRixFQUFXRyxNQUFYLENBQWtCRixPQUFsQjtBQUNILENBUE07O0FBVUEsSUFBTUcsMEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVE7O0FBRTFCLFFBQU1DLE1BQU0sc0JBQUUsT0FBRixFQUFXLEVBQUNELFFBQUQsRUFBWCxDQUFaOztBQUVBLDBCQUFFLE9BQUYsRUFBV0YsTUFBWCxDQUFrQkcsR0FBbEI7QUFDSCxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3ZCUTtBQUNYQyxjQUFVO0FBQ05kLGtCQUFVLE1BREo7QUFFTkcsY0FBTTtBQUZBLEtBREM7QUFLWFksZ0JBQVk7QUFDUmYsa0JBQVUsTUFERjtBQUVSRyxjQUFNO0FBRkUsS0FMRDtBQVNYYSxpQkFBYTtBQUNUaEIsa0JBQVUsUUFERDtBQUVURyxjQUFNO0FBRkcsS0FURjtBQWFYYyxxQkFBaUI7QUFDYmpCLGtCQUFVLFdBREc7QUFFYkcsY0FBTTtBQUZPO0FBYk4sQyIsImZpbGUiOiIwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCB1c2VyID0gdXNlcnNbdXNlcm5hbWVdO1xuXG4gICAgaWYgKHVzZXIgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpe1xuICAgICAgICByZXR1cm4gJ1VzZXIgbG9naW4gYXM6JyArIHVzZXIubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuICdJbnZhbGlkIHVzZXJuYW1lIGFuZC9vciBwYXNzd29yZCc7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUb0RvbSA9ICh0eXBlLCB0ZXh0LCBjbGFzc05hbWUgPSAncmVkJykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKGA8JHt0eXBlfT5gLCB7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGNsYXNzOiBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgICQoJyNyb290JykuYXBwZW5kKGVsZW1lbnQpO1xufTtcblxuXG5leHBvcnQgY29uc3QgYWRkSW1nID0gKHNyYykgPT57XG5cbiAgICBjb25zdCBpbWcgPSAkKCc8aW1nPicsIHtzcmN9KTtcblxuICAgICQoJyNyb290JykuYXBwZW5kKGltZyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgRGlzY29TdHU6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdhc2RmJyxcbiAgICAgICAgbmFtZTogJ1N0dSBEdW53b3J0aCdcbiAgICB9LFxuICAgIFNhc3N5U2FsbHk6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdoamtsJyxcbiAgICAgICAgbmFtZTogJ01yLiBQaXp6YSdcbiAgICB9LFxuICAgIERydUNvY2tzdGFyOiB7XG4gICAgICAgIHBhc3N3b3JkOiAncG90YXRvJyxcbiAgICAgICAgbmFtZTogJ0R1cidcbiAgICB9LFxuICAgIFBpenphV3Vzc3lTYW50YToge1xuICAgICAgICBwYXNzd29yZDogJ1BlcHBlcm9uaScsXG4gICAgICAgIG5hbWU6ICdJaGF0ZW1lJ1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9