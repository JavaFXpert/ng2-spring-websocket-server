"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var angular_websockets_demo_component_1 = require('./app/angular-websockets-demo.component');
var environment_1 = require('./app/environment');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(angular_websockets_demo_component_1.AngularWebsocketsDemoAppComponent);
//# sourceMappingURL=main.js.map