E:\AngularUdemy\angular-guide>

# AngularGuide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
#############################################################################################

#Events 

#############################################################################################

### Template

<div class="form-control">
    <!-- input is event. on event trigger pass event info -->
    <input type="text" name="inpjuttext" (input)="typingCapturing($event)">
    {{ typingCaptured }}
</div>

### Component

 typingCapturing(event : Event) { // Capture event into Event type
    /* event.target = cast event into HTMLInputElement so we can 
       access it's value (Only available for input elements)
    */
    this.typingCaptured = (<HTMLInputElement>event.target).value;
 }
#############################################################################################

##Two way binding and FormModule

Important: FormsModule is Required for Two-Way-Binding!
Important: For Two-Way-Binding (covered in the lecture 32) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 
