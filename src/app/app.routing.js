"use strict";
var router_1 = require("@angular/router");
var contestant_component_1 = require("./components/contestant.component");
var about_component_1 = require("./components/about.component");
var new_contestant_component_1 = require("./components/new.contestant.component");
var appRoutes = [
    {
        path: '',
        component: contestant_component_1.ContestantComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contestants/new',
        component: new_contestant_component_1.NewContestantComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map