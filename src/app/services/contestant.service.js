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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var ContestantsService = (function () {
    function ContestantsService(http) {
        this.http = http;
        this.contestantsUrl = 'http://localhost:3000/api/v1/contestants';
        console.log("Contestants Service Initialized...");
    }
    ContestantsService.prototype.getContestants = function () {
        return this.http.get(this.contestantsUrl).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    ContestantsService.prototype.addContestant = function (body) {
        if (body.date_of_death === "") {
            body.date_of_death = null;
        }
        return this.http.post(this.contestantsUrl, body).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    ContestantsService.prototype.deleteContestant = function (id) {
        return this.http.delete(this.contestantsUrl + "/" + id).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    ContestantsService.prototype.getContestant = function (id) {
        return this.http.get(this.contestantsUrl + "/" + id).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    ContestantsService.prototype.editContestant = function (body, id) {
        return this.http.put(this.contestantsUrl + "/" + id, body).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    return ContestantsService;
}());
ContestantsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContestantsService);
exports.ContestantsService = ContestantsService;
//# sourceMappingURL=contestant.service.js.map