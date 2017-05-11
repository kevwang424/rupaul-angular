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
var contestant_service_1 = require("../services/contestant.service");
var router_1 = require("@angular/router");
var ContestantFormComponent = (function () {
    function ContestantFormComponent(contestantsService, router) {
        this.contestantsService = contestantsService;
        this.router = router;
    }
    ContestantFormComponent.prototype.ngOnInit = function () {
        this.contestant = {
            name: '',
            birthname: '',
            hometown: '',
            date_of_birth: '',
            date_of_death: ''
        };
    };
    ContestantFormComponent.prototype.addQueen = function (queen) {
        var _this = this;
        this.contestantsService.addContestant(queen).subscribe(function (contestant) {
            _this.contestant = contestant;
        });
        this.router.navigate(['']);
    };
    return ContestantFormComponent;
}());
ContestantFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'new-contestant',
        templateUrl: 'contestant-form.component.html',
        providers: [contestant_service_1.ContestantsService]
    }),
    __metadata("design:paramtypes", [contestant_service_1.ContestantsService, router_1.Router])
], ContestantFormComponent);
exports.ContestantFormComponent = ContestantFormComponent;
//# sourceMappingURL=contestant-form.component.js.map