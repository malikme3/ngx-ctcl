/* tslint:disable */
import {Component} from "@angular/core";

@Component({
    selector: 'ctcl-players',
    templateUrl: './playerprofile.component.html',
    styleUrls: ['playerprofile.component.scss'],
})

export class PlayerProfileComponent {
    player: any;
    data: any;

    constructor() {

    }

    ngOnInit() {
        this.data = [
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"}
        ]

    }

}
