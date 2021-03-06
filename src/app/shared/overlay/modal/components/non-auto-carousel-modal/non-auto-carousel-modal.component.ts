import { Modal } from '@overlay/overlay.model';
import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from '@services//window.service';

@Component({
  selector: 'app-non-auto-carousel-modal',
  templateUrl: './non-auto-carousel-modal.component.html',
  styleUrls: ['./non-auto-carousel-modal.component.scss']
})
export class NonAutoCarouselModalComponent implements OnInit {

  @Input() modal: Modal;

  constructor(
    public $window: WindowService
  ) { }

  ngOnInit(): void {
  }
}
