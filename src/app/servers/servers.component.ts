import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  template: `
    <app-server></app-server>
    hello
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {}
