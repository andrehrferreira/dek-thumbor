"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require("@dekproject/scope");

var _thumbor = require("thumbor");

var _thumbor2 = _interopRequireDefault(_thumbor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    try {
        var dbConfig = {};
        var env = process.env;
        var configApproved = true;

        if (env.hasOwnProperty("THUMBOR_KEY") && !!env.THUMBOR_KEY) dbConfig["THUMBOR_KEY"] = env.THUMBOR_KEY;else {
            configApproved = false;
            console.log("[ Thumbor ] - There is no THUMBOR_KEY variable in the .env file.");
        }

        if (env.hasOwnProperty("THUMBOR_URL") && !!env.THUMBOR_URL) dbConfig["THUMBOR_URL"] = env.THUMBOR_URL;else {
            configApproved = false;
            console.log("[ Thumbor ] - There is no THUMBOR_URL variable in the .env file.");
        }

        if (!configApproved) {
            console.log("[ Thumbor ] - Please correct the above errors before restarting the application.");
            process.exit(-1);
        } else {
            _scope.$.set("thumbor", function () {
                return new _thumbor2.default(env.THUMBOR_KEY, env.THUMBOR_URL);
            });
        }
    } catch (e) {
        console.log("[ Elasticsearch ] - " + e.message, e);
    }
};
//# sourceMappingURL=index.js.map