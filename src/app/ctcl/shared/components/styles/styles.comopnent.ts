/* tslint:disable */
import { Component, Input} from "@angular/core";
/**
 * Created by HudaZulifqar on 8/21/2017.
 */
@Component({
  selector: 'ctcl-style',
  templateUrl: 'styles.component.html',
  styleUrls: ['styles.component.scss',]
})
export class StylesComopnent {
  @Input() title:String;
  @Input() submitVal:String;
  @Input() baCardClass:String;
  @Input() buttonClass:String;
  @Input() cardType:String;
  @Input() isDropDown: boolean;
  @Input() name: String;
  @Input() size: String;
  @Input() options;

}
