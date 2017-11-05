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
import {CommonUtilsService} from "../../../common/services/common-utils.service";

@Component({
    selector: 'ctcl-score-basic-details',
    templateUrl: 'score-basic-details.component.html',
    styleUrls: ['score-basic-details.component.scss'],
})
export class ScoreBasicDetailsComponent {
    @Output() notify_home_team: EventEmitter<string> = new EventEmitter<string>();
    @Output() notify_away_team: EventEmitter<string> = new EventEmitter<string>();
    @Output() notify_date: EventEmitter<string> = new EventEmitter<string>();
    @Output() notify_matchCall: EventEmitter<string> = new EventEmitter<string>();
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    brands: string[];
    date3: Date;
    filteredTeams: any;
    filteredPlayers: any;

    //@Input() innings: string;
    //options: DatePickerOptions;
    inningsId: number;
    submiScoreStatus: any;


    public form: FormGroup;
    // public extrasDetails
    public name: AbstractControl;
    public teams;
    public password: AbstractControl;

    //FIRSR BLOCK
    public league_id: AbstractControl;
    public season: AbstractControl;
    public week: AbstractControl;
    weekNo: number;
    selectedLeague: string = 'Hello League';
    public ground_id: AbstractControl;
    public ground_name: AbstractControl;
    // public result: AbstractControl;
    public game_date;
    public dateFlag: boolean = true;
    //Second Blcok: drop down
    public away_team: AbstractControl;
    public home_team: AbstractControl;
    public umpire_team: AbstractControl;
    public toss_won_id: AbstractControl;
    public batting_first_id: AbstractControl;
    public batting_second_id: AbstractControl;
    public result_won_id: AbstractControl;
    public umpire_1: AbstractControl;
    public umpire_2: AbstractControl;
    public mom: AbstractControl;
    public maxovers: AbstractControl;
    public final_result_summary: AbstractControl;
    //Results options
    public completed: AbstractControl;
    public forfeit: AbstractControl;
    public cancelled: AbstractControl;
    public tied: AbstractControl;
    public cancelledplay: AbstractControl;

    private teamsname;
    teamsList: Array<any>;
    dateValue: any = null;
    playersList: Array<any>;

    public submitted_step1: boolean = false;
    public submitted_step2: boolean = false;

    public battingForm: FormGroup;
    public battingName: AbstractControl;

    constructor(fb: FormBuilder, private matchesService: MatchesService,
                private matchesConstants: MatchesConstants,
                private matchesDataStoreService: MatchesDataStoreService,
                private commonUtilsService: CommonUtilsService) {
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        // this.options = new DatePickerOptions();

        this.form = fb.group({
            'name': ['', Validators.compose([])],
            'league_id': ['', Validators.compose([Validators.required])],
            'season': ['', Validators.compose([Validators.required])],
            'ground_id': ['', Validators.compose([Validators.required])],
            'ground_name': ['', Validators.compose([Validators.required])],
            'week': ['', Validators.compose([Validators.required])],
            // 'result': ['', Validators.compose([Validators.required, Validators.minLength(1)])],

            'game_date': ['', Validators.compose([Validators.required])],
            'away_team': ['', Validators.compose([Validators.required])],
            'home_team': ['', Validators.compose([Validators.required])],
            'umpire_team': ['', Validators.compose([])],
            'toss_won_id': ['', Validators.compose([Validators.required])],
            'batting_first_id': ['', Validators.compose([Validators.required])],
            'batting_second_id': ['', Validators.compose([Validators.required])],
            'result_won_id': ['', Validators.compose([])],
            'umpire_1': ['', Validators.compose([])],
            'umpire_2': ['', Validators.compose([])],
            'mom': ['', Validators.compose([])],
            'maxovers': ['', Validators.compose([Validators.required])],
            'final_result_summary': ['', Validators.compose([])],
            //Results options
            'completed': ['', Validators.compose([])],
            'forfeit': ['', Validators.compose([])],
            'cancelled': ['', Validators.compose([])],
            'tied': ['', Validators.compose([])],
            'cancelledplay': ['', Validators.compose([Validators.required, Validators.max(1)])],


        });

        this.name = this.form.controls['name'];
        this.teams = this.form.controls['teams'];
        this.league_id = this.form.controls['league_id'];
        this.season = this.form.controls['season'];
        this.ground_id = this.form.controls['ground_id'];
        this.ground_name = this.form.controls['ground_name'];
        this.week = this.form.controls['week'];
        // this.result = this.form.controls['result'];

        this.game_date = this.form.controls['game_date'];
        this.away_team = this.form.controls['away_team'];
        this.home_team = this.form.controls['home_team'];
        this.umpire_team = this.form.controls['umpire_team'];
        this.toss_won_id = this.form.controls['toss_won_id'];
        this.batting_first_id = this.form.controls['batting_first_id'];
        this.batting_second_id = this.form.controls['batting_second_id'];
        this.result_won_id = this.form.controls['result_won_id'];
        this.umpire_1 = this.form.controls['umpire_1'];
        this.umpire_2 = this.form.controls['umpire_2'];
        this.mom = this.form.controls['mom'];
        this.maxovers = this.form.controls['maxovers'];
        this.final_result_summary = this.form.controls['final_result_summary'];
        //Results options
        this.completed = this.form.controls['completed'];
        this.forfeit = this.form.controls['forfeit'];
        this.cancelled = this.form.controls['cancelled'];
        this.tied = this.form.controls['tied'];
        this.cancelledplay = this.form.controls['cancelledplay'];

        this.battingForm = fb.group({
            'battingName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],

        });
        this.battingName = this.battingForm.controls['battingName'];

    }

    ngOnInit(): void {
        this.getTeamslist();
        this.getPlayerslist();
        this.form.controls['batting_first_id'].setValue({
            label: "Falcons",
            value: 6
        });
        console.warn("dateValue : ", this.dateValue)
    }

    //eague_id,season,week,away_team,home_team,game_date,result_won_id,forfeit,mom,umpire_1,umpire_2,maxovers,isactive
    checkLeagues = this.matchesConstants.getLeagues()
    checkVenues = this.matchesConstants.getCheckVenues();
    checkResults = this.matchesConstants.getCheckResults();
    checkStatus = this.matchesConstants.getYesNo();

    public checkboxPropertiesMapping = {
        model: 'checked',
        value: 'name',
        label: 'name',
        baCheckboxClass: 'class'
    };

    getTeamslist() {
        console.info("Fetching results for teams list :")
        const teams$ = this.matchesService.getTeamslist();
        console.log('this.teamsname', this.teamsList)
        teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.teamsList = responce,
            (err) => console.error(err),
            () => console.info("responce  for teamList", this.teamsList));

    }

    getPlayerslist() {
        console.info("Fetching Players list")
        const teams$ = this.matchesService.getPlayerslist();
        teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.playersList = responce,
            (err) => console.error(err),
            () => console.info("responce", this.playersList));
    }


    setFormValue(type: any, value: any) {
        (this.form.controls[type]).setValue(value);
        console.log('type: ', type, ' value: ', value, 'formValue: ', this.form.value);
    }

    onSelectedResult(type: any, value: any) {
        console.log('type: ', type, ' value: ', value);
        if (type == 'forfeit') {

            (this.form.controls[type]).setValue(value);
            (this.form.controls['cancelled']).setValue(0);
            (this.form.controls['tied']).setValue(0);
            (this.form.controls['cancelledplay']).setValue(0);

        } else if (type == 'completed') {

            (this.form.controls[type]).setValue(value);
            (this.form.controls['forfeit']).setValue(0);
            (this.form.controls['cancelled']).setValue(0);
            (this.form.controls['tied']).setValue(0);
            (this.form.controls['cancelledplay']).setValue(0);

        } else if (type == 'cancelled') {
            (this.form.controls[type]).setValue(value);
            (this.form.controls['completed']).setValue(0);
            (this.form.controls['forfeit']).setValue(0);
            (this.form.controls['tied']).setValue(0);
            (this.form.controls['cancelledplay']).setValue(0);

        } else if (type == 'tied') {
            (this.form.controls[type]).setValue(value);
            (this.form.controls['completed']).setValue(0);
            (this.form.controls['cancelled']).setValue(0);
            (this.form.controls['forfeit']).setValue(0);
            (this.form.controls['cancelledplay']).setValue(0);

        } else if (type == 'cancelledplay') {
            (this.form.controls[type]).setValue(value);
            (this.form.controls['completed']).setValue(0);
            (this.form.controls['cancelled']).setValue(0);
            (this.form.controls['forfeit']).setValue(0);
            (this.form.controls['tied']).setValue(0);

        }
    }

    dateEmit() {
        if (this.dateValue != null || this.dateValue == 'undefined') {
            this.notify_date.emit(this.dateValue);
        }
    }


    onNotify(val: any): void {
        console.log('this.totalsForm.value frrom total in Parent: ', val)
    }

    onNotify_batting(val: any): void {
        console.log('Batting_parent ==> this.totalsForm.value: ', val)
    }

    player_out_type = this.matchesConstants.getPlayerOutType();
    batting_poistion = this.matchesConstants.getBattingPositions();

    //*Filter funtion*/
    getFilteredTeams(inputs) {
        let query = inputs.query;
        this.filteredTeams = this.commonUtilsService.filterTeams(query, this.teamsList);
    }

    getFilteredPlayers(inputs) {
        let query = inputs.query;
        this.filteredPlayers = this.commonUtilsService.filterPlayers(query, this.playersList);
    }

    public onSubmitBasicDetails(values: Object): void {
        console.log("Form Obj: ", values,"Fornm is valid =>",this.form.valid);

        this.submitted_step1 = true;
        this.inningsId = 1;
        let matchDetailsObject = values;
        //Making sure only date value submitting instead whole date object
        //this.dateValue ? this.dateValue.formatted : this.dateValue;
        this.dateValue ? matchDetailsObject['game_date'] = this.dateValue.formatted : this.dateValue;

       // console.log(" ***onSubmitBasicDetails**** HTTP Request => ", matchDetailsObject);
        // this.matchesService.updateScorecardGameDetails(matchDetailsObject).takeUntil(this.ngUnsubscribe).subscribe(
        //     res => this.submiScoreStatus = res,
        //     (err) => console.error('onSubmitBasicDetails: Res Error =>', err),
        //     () => this.notify_matchCall.emit(this.dateValue));
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
