import { IMenuItemParms } from '@utilities/interfaces/layout.interface';
import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-layout-card',
  templateUrl: './layout-card.component.html',
  styleUrls: ['./layout-card.component.scss']
})
export class LayoutCardComponent implements OnInit {

  @Input() hideHead;
  @Input() hideScroll;
  @Input() linkPath;
  @Input() fullHeight;
  @Input() maxHeight = 30;


  constructor(
    public $navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }

}
