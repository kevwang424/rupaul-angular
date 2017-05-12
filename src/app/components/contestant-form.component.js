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
    function ContestantFormComponent(contestantsService, router, activatedRoute) {
        this.contestantsService = contestantsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // if editing contestant buttons will be different
        this.editMode = false;
    }
    ContestantFormComponent.prototype.ngOnInit = function () {
        this.contestant = {
            name: '',
            birth_name: '',
            hometown: '',
            date_of_birth: '',
            date_of_death: ''
        };
    };
    // conditional if editing or not
    ContestantFormComponent.prototype.submitForm = function () {
        var _this = this;
        if (!this.editMode) {
            this.contestantsService.addContestant(this.contestant).subscribe(function (contestant) {
                _this.contestant = contestant;
            });
            this.router.navigate(['contestants']);
        }
        else {
            var id = this.activatedRoute.snapshot.params['id'];
            this.contestantsService.editContestant(this.contestant, id).subscribe(function (contestant) {
                _this.contestant = contestant;
            });
            this.router.navigate(['contestants']);
        }
    };
    ContestantFormComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //added route with ID so if there is ID then i will grab queen info and populate on the form
        var id = this.activatedRoute.snapshot.params['id'];
        if (id) {
            // if there is an ID in the routes then it is editing model
            this.editMode = true;
            this.contestantsService.getContestant(parseInt(id)).subscribe(function (contestant) {
                _this.contestant = contestant;
            });
        }
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
    __metadata("design:paramtypes", [contestant_service_1.ContestantsService, router_1.Router, router_1.ActivatedRoute])
], ContestantFormComponent);
exports.ContestantFormComponent = ContestantFormComponent;
//# sourceMappingURL=contestant-form.component.js.map