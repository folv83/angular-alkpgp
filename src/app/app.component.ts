import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { data } from './data';

/*
 Create an accordion component with the next requirements:
 1 - Show the data inside data.ts
    - Title key should be the title of the accordion item
    - Content key has the content to show for each item, each element should be an unordered list of the items in the content.
  2 - Expand/collapse the content of the title every time user clicks it.
  3 - Have a way to configurate the behavior of the expand/collapse like:
    3.1 - "Free movement" any item of the accordion can be expanded/collapse.
      e.g https://getbootstrap.com/docs/5.0/components/accordion/#always-open
    3.2 - Only one item can be expanded
      e.g https://getbootstrap.com/docs/5.0/components/accordion/#flush
*/

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({height: '*', opacity: 1, visibility: 'visible'})),
      state('collapsed', style({height: '0px', opacity: 0, visibility: 'hidden'})),
      transition('expanded <=> collapsed',
        animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    ])
  ]
})
export class AppComponent {

  name: string = 'Angular';

  //this parameter lets you set the behavior of the accordion:
  //true: "Free movement" any item of the accordion can be expanded/collapse
  //false: Only one item can be expanded
  freemovement: boolean = true;

  items: Array<any> = data;

}
