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
var ContestantComponent = (function () {
    function ContestantComponent(contestantsService) {
        var _this = this;
        this.contestantsService = contestantsService;
        this.name = 'Kevin',
            this.email = 'kevin@kevin.com',
            this.address = {
                street: "123 Main St",
                city: "Boston",
                state: "MA"
            };
        this.hobbies = ["Music", "Movies", "Sports"];
        this.showHobbies = true;
        this.contestantsService.getContestants().subscribe(function (contestants) {
            _this.contestants = contestants;
        });
    }
    ContestantComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    ContestantComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    ContestantComponent.prototype.deleteHobby = function (index) {
        this.hobbies.splice(index, 1);
    };
    return ContestantComponent;
}());
ContestantComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contestant',
        templateUrl: 'contestant.component.html',
        providers: [contestant_service_1.ContestantsService]
    }),
    __metadata("design:paramtypes", [contestant_service_1.ContestantsService])
], ContestantComponent);
exports.ContestantComponent = ContestantComponent;
//# sourceMappingURL=contestant.component.js.map