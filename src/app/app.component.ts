import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
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
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const config = new OverlayConfig(<OverlayConfig>{
      positionStrategy,
      hasBackdrop: true
    });
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(PanelComponent));
  }
}
