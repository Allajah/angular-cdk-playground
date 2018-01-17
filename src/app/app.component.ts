import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';
import { PanelComponent } from './components/panel/panel.component';

@Component({
  selector: 'homura-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private overlay: Overlay) {

  }
  ngOnInit() {
    const overlayRef = this.overlay.create();
    overlayRef.attach(new ComponentPortal(PanelComponent));
  }
}
