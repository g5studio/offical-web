import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenuItemParms } from 'src/app/interfaces/menu.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() parms: IMenuItemParms;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public checkIsCurrent() {
    return this.router.url.includes(this.parms.path);
  }

}