import { Component, OnInit, Input } from '@angular/core';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() route: string;

  constructor(
    public $navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }
}