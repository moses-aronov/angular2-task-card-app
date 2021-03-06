import { NgModule } from '@angular/core';
//Allows you to run the application in a browser
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Import Component
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
//Create a decorator
//A decorator modifies an instance before it will be used.
//App Module creates a foundation for the app
@NgModule({
    imports : [
        BrowserModule,
        FormsModule
        ],
    //Declare Component
    declarations : [ 
        AppComponent,
        CardComponent ],
    //Initialize Component
    bootstrap : [ AppComponent ]
})

export class AppModule{}