import { Component, OnInit } from '@angular/core';
import { Stimulsoft } from 'stimulsoft-reports-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stimulsoft-client';

  ngOnInit() {
    const designer = new Stimulsoft.Designer.StiDesigner();
    designer.renderHtml('designer');
  }

}
