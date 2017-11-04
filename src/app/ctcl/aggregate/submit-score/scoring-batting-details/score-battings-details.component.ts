/**
 * Created by HudaZulifqar on 8/22/2017.
 */
/* tslint:disable */
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component, EventEmitter, Output} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {MatchesService} from "../../../common/services/matches.service";
import {MatchesConstants} from "../../../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../../../common/services/matches-data-store.service";
import {FormControl} from '@angular/forms';
import {CommonUtilsService} from "../../../common/services/common-utils.service";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'ctcl-score-battings-details',
    templateUrl: 'score-battings-details.component.html',
    //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
    styleUrls: ['score-battings-details.component.scss'],
})


export class ScoreBattingsDetailsComponent {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    selectedValue: any[] = [];
    teamsList: any;

    countries: any[] = [];

    filteredCountriesSingle: any[];

    filteredCountriesMultiple: any[];

    constructor(fb: FormBuilder, private matchesService: MatchesService,
                private matchesConstants: MatchesConstants,
                private matchesDataStoreService: MatchesDataStoreService,
                private commonUtilsService: CommonUtilsService) {
    }

    ngOnInit() {
        this.getTeamslist();
    }

    getTeamslist() {
        console.info("Fetching results for teams list :")
        const teams$ = this.matchesService.getTeamslist();
        console.log('this.teamsname', this.teamsList)
        teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.teamsList = responce,
            (err) => console.error(err),
            () => console.info("responce  for teamList", this.teamsList));

    }


    getFilteredTeamsVal(inputs) {
        let query = inputs.query;
        this.selectedValue = this.commonUtilsService.filterTeams(query, this.teamsList);
    }


}
