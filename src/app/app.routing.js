"use strict";
var router_1 = require("@angular/router");
var contestant_list_component_1 = require("./components/contestant-list.component");
var about_component_1 = require("./components/about.component");
var contestant_form_component_1 = require("./components/contestant-form.component");
var appRoutes = [
    {
        path: 'contestants',
        component: contestant_list_component_1.ContestantListComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contestants/new',
        component: contestant_form_component_1.ContestantFormComponent
    },
    // routing for contestant editing
    {
        path: 'contestants/:id/edit',
        component: contestant_form_component_1.ContestantFormComponent
    },
    {
        path: '**',
        redirectTo: '/contestants'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map