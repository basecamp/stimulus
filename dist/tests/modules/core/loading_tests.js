var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ApplicationTestCase } from "../../cases/application_test_case";
import { LogController } from "../../controllers/log_controller";
var UnloadableController = (function (_super) {
    __extends(UnloadableController, _super);
    function UnloadableController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UnloadableController, "shouldLoad", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    return UnloadableController;
}(LogController));
var LoadableController = (function (_super) {
    __extends(LoadableController, _super);
    function LoadableController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LoadableController, "shouldLoad", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return LoadableController;
}(LogController));
var ApplicationTests = (function (_super) {
    __extends(ApplicationTests, _super);
    function ApplicationTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixtureHTML = "<div data-controller=\"loadable\"><div data-controller=\"unloadable\">";
        return _this;
    }
    ApplicationTests.prototype["test module with false shouldLoad should not load when registering"] = function () {
        this.application.register("unloadable", UnloadableController);
        this.assert.equal(this.controllers.length, 0);
    };
    ApplicationTests.prototype["test module with true shouldLoad should load when registering"] = function () {
        this.application.register("loadable", LoadableController);
        this.assert.equal(this.controllers.length, 1);
    };
    Object.defineProperty(ApplicationTests.prototype, "controllers", {
        get: function () {
            return this.application.controllers;
        },
        enumerable: false,
        configurable: true
    });
    return ApplicationTests;
}(ApplicationTestCase));
export default ApplicationTests;
