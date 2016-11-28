import { Component } from '@angular/core'

@Component({

    selector: 'parent-component',
    template: '<child-component [master]="name" (masterEvent)="masterEvent($event)" ></child-component>'

})

export class ParentComponent {

    name: String;

    constructor() {
        this.name = 'The Parent Component';
    }

    masterEvent(arg) {
        console.log("Master event data received: " + arg);
    }
}