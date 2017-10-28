/**
 * Created by HudaZulifqar on 8/24/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'dynamic-label',
  templateUrl: 'label.html',
})
export class LabelComponent {

  @Input() labelStatus: boolean;
  @Input() labelText: string;

  public checkboxModel = [{
    name: 'Checkbox with success',
    state: false,
    class: 'has-success checkbox'
  }, {
    name: 'Checkbox with warning',
    state: false,
    class: 'has-warning checkbox',
  }, {
    name: 'Checkbox with error',
    state: false,
    class: 'has-error checkbox'
  }];

  public checkboxPropertiesMapping = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  constructor() {
  }
}
