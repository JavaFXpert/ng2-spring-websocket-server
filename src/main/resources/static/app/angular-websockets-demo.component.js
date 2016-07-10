"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_websocket_1 = require('./ng2-websocket');
var AngularWebsocketsDemoAppComponent = (function () {
    function AngularWebsocketsDemoAppComponent() {
        //TODO: Modify to inject into constructor?
        this.ws = new ng2_websocket_1.$WebSocket("ws://localhost:8080/counter");
    }
    AngularWebsocketsDemoAppComponent.prototype.handleConnectButtonClicked = function () {
        console.log("Connect button clicked");
        console.log("ws.getReadyState(): " + this.ws.getReadyState());
        this.ws.getDataStream().subscribe(function (res) {
            //var count = JSON.parse(res.data).value;
            //console.log('Got: ' + res.data);
            console.log('Got: ' + res.data);
            //this.counter = count;
        }, function (e) { console.log('Error: ' + e.message); }, function () { console.log('Completed!'); });
    };
    AngularWebsocketsDemoAppComponent.prototype.handleDisconnectButtonClicked = function () {
        console.log("Disconnect button clicked");
        console.log("ws.getReadyState(): " + this.ws.getReadyState());
        this.ws.close(true);
    };
    AngularWebsocketsDemoAppComponent.prototype.handleSendButtonClicked = function () {
        console.log("Send button clicked");
        console.log("ws.getReadyState(): " + this.ws.getReadyState());
        var name = "Jim";
        this.ws.send(JSON.stringify({ 'name': name }));
    };
    AngularWebsocketsDemoAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular-websockets-demo-app',
            styleUrls: ['angular-websockets-demo.component.css'],
            providers: [],
            templateUrl: 'angular-websockets-demo.component.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], AngularWebsocketsDemoAppComponent);
    return AngularWebsocketsDemoAppComponent;
}());
exports.AngularWebsocketsDemoAppComponent = AngularWebsocketsDemoAppComponent;
//# sourceMappingURL=angular-websockets-demo.component.js.map