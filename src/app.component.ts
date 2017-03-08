//Components 
//Can have childern, and they could have children
//They are the building blocks of your application and they are self contained.
//Very specific and one job.
//They are in charge of their own html code and styling, everything is self contained, and reusable.

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app', //The name of the html element 
    templateUrl: 'app.component.html'//HTML code that will layout the component
})

export class AppComponent { }