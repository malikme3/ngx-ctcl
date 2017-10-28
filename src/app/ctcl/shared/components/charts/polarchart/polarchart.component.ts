/* tslint:disable */
import {AfterViewInit, Component, OnDestroy} from "@angular/core";
/**
 * Created by HudaZulifqar on 8/21/2017.
 */
@Component({
  selector: 'ctcl-polar-chart',
  templateUrl: 'polarchart.component.html',
})
export class PolarChartComponent {
  data:any;

  constructor() {
  }

  // PolarArea
  public polarAreaChartLabels:string[] = ['Test', 'Won', 'Lost', 'Total'];
  public polarAreaChartData:number[] = [6, 4, 2, 12];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
