import { Component, Input, EventEmitter } from '@angular/core'

@Component({

    selector: 'child-component',
    template: `
        Hi, I am {{name}}. My master is {{master}}.
        <button (click)="btnClicked()">Click Me</button>
      `,
    inputs: ['master'],
    outputs: ['masterEvent']
})

export class ChildComponent {

    name: String;
    master: String;
    masterEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.name = 'The Child Component';
    }

    btnClicked() {
        this.masterEvent.emit('Child Component click');
    }
}