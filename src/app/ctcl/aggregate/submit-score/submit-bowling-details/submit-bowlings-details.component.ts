/* tslint:disable */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {Subject} from "rxjs/Subject";
import {MatchesService} from "../../../common/services/matches.service";
import {MatchesConstants} from "../../../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../../../common/services/matches-data-store.service";

/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/

@Component({
    selector: 'ctcl-submit-bowlings-details',
    templateUrl: 'submit-bowlings-details.component.html',
    styleUrls: ['submit-bowlings-details.component.scss'],
})
export class ScoreBowlingDetailsComponent {
    @Output() notify: EventEmitter<any> = new EventEmitter<any>();
    @Output() notify_Bowling: EventEmitter<any> = new EventEmitter<any>();
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() Players: Array<any>;
    @Input() inningsId: number;
    @Input() innings: string;
    playersList;
    player_out_type;
    matchScore;

    bowlersList: any[] = [];
    bowlingScoreDetails: any;

    form: FormGroup;
    match_info: FormGroup;
    public name: AbstractControl;
    public game_id: AbstractControl;
    public season: AbstractControl;
    public innings_id: AbstractControl;
    public team: AbstractControl;
    public opponent: AbstractControl;

//Bowler # 1
    bowler_1: FormGroup;
    public player_id: AbstractControl;
    public bowling_position: AbstractControl;
    public overs: AbstractControl;
    public notout: AbstractControl;
    public maidens: AbstractControl;
    public wickets: AbstractControl;
    public runs: AbstractControl;
    public noballs: AbstractControl;
    public wides: AbstractControl;

    //Bowler # 2
    bowler_2: FormGroup;

    //Bowler # 3
    bowler_3: FormGroup;

    //Bowler # 4
    bowler_4: FormGroup;


    //Bowler # 5
    bowler_5: FormGroup;

    //Bowler # 6
    bowler_6: FormGroup;


    //Bowler # 7
    bowler_7: FormGroup;


    //Bowler # 8
    bowler_8: FormGroup;

    //Bowler # 9
    bowler_9: FormGroup;


    //Bowler # 10
    bowler_10: FormGroup;

    //Bowler # 11
    bowler_11: FormGroup;


    constructor(fb: FormBuilder, private matchesService: MatchesService,
                private matchesConstants: MatchesConstants,
                private matchesDataStoreService: MatchesDataStoreService) {

        this.form = fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'team': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'opponent': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            //Bowler Details
            'match_info': fb.group({
                'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'team': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'opponent': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            }),
            'bowler_1': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_2': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_3': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_4': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_5': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_6': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_7': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_8': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_9': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_10': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'bowler_11': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowling_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'overs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'maidens': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wickets': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'noballs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'wides': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            })
        });

        this.match_info = <FormGroup> this.form.controls['match_info'];
        this.name = this.match_info.controls['name'];
        this.game_id = this.match_info.controls['game_id'];
        this.season = this.match_info.controls['season'];
        this.innings_id = this.match_info.controls['innings_id'];
        this.team = this.match_info.controls['team'];
        this.opponent = this.match_info.controls['opponent'];

        //Batting Position # 1
        this.bowler_1 = <FormGroup> this.form.controls['bowler_1'];
        this.player_id = this.bowler_1.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['1'];
        this.overs = this.bowler_1.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_1.controls['maidens'];
        this.wickets = this.bowler_1.controls['wickets'];
        this.runs = this.bowler_1.controls['runs'];
        this.noballs = this.bowler_1.controls['noballs'];
        this.wides = this.bowler_1.controls['wides'];

        //Batting Position # 2
        this.bowler_2 = <FormGroup> this.form.controls['bowler_2'];
        this.player_id = this.bowler_1.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['2'];
        this.overs = this.bowler_2.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_2.controls['maidens'];
        this.wickets = this.bowler_2.controls['wickets'];
        this.runs = this.bowler_2.controls['runs'];
        this.noballs = this.bowler_2.controls['noballs'];
        this.wides = this.bowler_2.controls['wides'];

        //Batting Position # 3
        this.bowler_3 = <FormGroup> this.form.controls['bowler_3'];
        this.player_id = this.bowler_3.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['3'];
        this.overs = this.bowler_3.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_3.controls['maidens'];
        this.wickets = this.bowler_3.controls['wickets'];
        this.runs = this.bowler_3.controls['runs'];
        this.noballs = this.bowler_3.controls['noballs'];
        this.wides = this.bowler_3.controls['wides'];

        //Batting Position # 4
        this.bowler_4 = <FormGroup> this.form.controls['bowler_4'];
        this.player_id = this.bowler_4.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['4'];
        this.overs = this.bowler_4.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_4.controls['maidens'];
        this.wickets = this.bowler_4.controls['wickets'];
        this.runs = this.bowler_4.controls['runs'];
        this.noballs = this.bowler_4.controls['noballs'];
        this.wides = this.bowler_4.controls['wides'];

        //Batting Position # 5
        this.bowler_5 = <FormGroup> this.form.controls['bowler_5'];
        this.player_id = this.bowler_5.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['5'];
        this.overs = this.bowler_5.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_5.controls['maidens'];
        this.wickets = this.bowler_5.controls['wickets'];
        this.runs = this.bowler_5.controls['runs'];
        this.noballs = this.bowler_5.controls['noballs'];
        this.wides = this.bowler_5.controls['wides'];

        //Batting Position # 6
        this.bowler_6 = <FormGroup> this.form.controls['bowler_6'];
        this.player_id = this.bowler_6.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['6'];
        this.overs = this.bowler_6.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_6.controls['maidens'];
        this.wickets = this.bowler_6.controls['wickets'];
        this.runs = this.bowler_6.controls['runs'];
        this.noballs = this.bowler_6.controls['noballs'];
        this.wides = this.bowler_6.controls['wides'];

        //Batting Position # 7
        this.bowler_7 = <FormGroup> this.form.controls['bowler_7'];
        this.player_id = this.bowler_7.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['7'];
        this.overs = this.bowler_7.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_7.controls['maidens'];
        this.wickets = this.bowler_7.controls['wickets'];
        this.runs = this.bowler_7.controls['runs'];
        this.noballs = this.bowler_7.controls['noballs'];
        this.wides = this.bowler_7.controls['wides'];

        //Batting Position # 8
        this.bowler_8 = <FormGroup> this.form.controls['bowler_8'];
        this.player_id = this.bowler_8.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['8'];
        this.overs = this.bowler_8.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_8.controls['maidens'];
        this.wickets = this.bowler_8.controls['wickets'];
        this.runs = this.bowler_8.controls['runs'];
        this.noballs = this.bowler_8.controls['noballs'];
        this.wides = this.bowler_8.controls['wides'];
        //Batting Position # 9
        this.bowler_9 = <FormGroup> this.form.controls['bowler_9'];
        this.player_id = this.bowler_9.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['9'];
        this.overs = this.bowler_9.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_9.controls['maidens'];
        this.wickets = this.bowler_9.controls['wickets'];
        this.runs = this.bowler_9.controls['runs'];
        this.noballs = this.bowler_9.controls['noballs'];
        this.wides = this.bowler_9.controls['wides'];

        //Batting Position # 10
        this.bowler_10 = <FormGroup> this.form.controls['bowler_10'];
        this.player_id = this.bowler_10.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['10'];
        this.overs = this.bowler_10.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_10.controls['maidens'];
        this.wickets = this.bowler_10.controls['wickets'];
        this.runs = this.bowler_10.controls['runs'];
        this.noballs = this.bowler_10.controls['noballs'];
        this.wides = this.bowler_10.controls['wides'];

        //Batting Position # 11
        this.bowler_11 = <FormGroup> this.form.controls['bowler_11'];
        this.player_id = this.bowler_11.controls['player_id'];
        this.bowling_position = this.bowler_1.controls['11'];
        this.overs = this.bowler_11.controls['overs'];
        this.notout = this.bowler_1.controls['notout'];
        this.maidens = this.bowler_11.controls['maidens'];
        this.wickets = this.bowler_11.controls['wickets'];
        this.runs = this.bowler_11.controls['runs'];
        this.noballs = this.bowler_11.controls['noballs'];
        this.wides = this.bowler_11.controls['wides'];

    }

    ngOnInit(): void {
        this.howOutTypes();
        this.getPlayerslist();
    }


    howOutTypes() {
        console.info("Fetching howOutTypes list: ")
        const types$ = this.matchesService.getHowOutType();
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.player_out_type = responce);
    }

    getPlayerslist() {
        console.info("Fetching Players list")
        const teams$ = this.matchesService.getPlayerslist();
        teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.playersList = responce,
            () => console.log("responce", this.playersList));
    }

    batting_poistion = this.matchesConstants.getBattingPositions();

    onSelectedBowler(index, value) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.bowler_1.controls['player_id'].setValue(value);
            this.bowler_1.controls['bowling_position'].setValue('1');
        } else if (index == 1) {
            this.bowler_2.controls['player_id'].setValue(value);
            this.bowler_2.controls['bowling_position'].setValue('2');
        } else if (index == 2) {
            this.bowler_3.controls['player_id'].setValue(value);
            this.bowler_3.controls['bowling_position'].setValue('3');
        }
        else if (index == 3) {
            this.bowler_4.controls['player_id'].setValue(value);
            this.bowler_4.controls['bowling_position'].setValue('4');
        }
        else if (index == 4) {
            this.bowler_5.controls['player_id'].setValue(value);
            this.bowler_5.controls['bowling_position'].setValue('5');
        }
        else if (index == 5) {
            this.bowler_6.controls['player_id'].setValue(value);
            this.bowler_6.controls['bowling_position'].setValue('6');
        }
        else if (index == 6) {
            this.bowler_7.controls['player_id'].setValue(value);
            this.bowler_7.controls['bowling_position'].setValue('7');
        }
        else if (index == 7) {
            this.bowler_8.controls['player_id'].setValue(value);
            this.bowler_8.controls['bowling_position'].setValue('8');
        }
        else if (index == 8) {
            this.bowler_9.controls['player_id'].setValue(value);
            this.bowler_9.controls['bowling_position'].setValue('9');
        }
        else if (index == 9) {
            this.bowler_10.controls['player_id'].setValue(value);
            this.bowler_10.controls['bowling_position'].setValue('10');
        }
        else if (index == 10) {
            this.bowler_11.controls['player_id'].setValue(value);
            this.bowler_11.controls['bowling_position'].setValue('11');
        }
        console.info("this.form.controls.value :: ", this.form.value)
    }

    onSelectedOvers(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.bowler_1.controls['overs'].setValue(value);
        } else if (index == 1) {
            this.bowler_2.controls['overs'].setValue(value);
        } else if (index == 2) {
            this.bowler_3.controls['overs'].setValue(value);
        }
        else if (index == 3) {
            this.bowler_4.controls['overs'].setValue(value);
        }
        else if (index == 4) {
            this.bowler_5.controls['overs'].setValue(value);
        }
        else if (index == 5) {
            this.bowler_6.controls['overs'].setValue(value);
        }
        else if (index == 6) {
            this.bowler_7.controls['overs'].setValue(value);
        }
        else if (index == 7) {
            this.bowler_8.controls['overs'].setValue(value);
        }
        else if (index == 8) {
            this.bowler_9.controls['overs'].setValue(value);
        }
        else if (index == 9) {
            this.bowler_10.controls['overs'].setValue(value);
        }
        else if (index == 10) {
            this.bowler_11.controls['overs'].setValue(value);
        }
    }

    onSelectedRuns(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.bowler_1.controls['runs'].setValue(value);
        } else if (index == 1) {
            this.bowler_2.controls['runs'].setValue(value);
        } else if (index == 2) {
            this.bowler_3.controls['runs'].setValue(value);
        }
        else if (index == 3) {
            this.bowler_4.controls['runs'].setValue(value);
        }
        else if (index == 4) {
            this.bowler_5.controls['runs'].setValue(value);
        }
        else if (index == 5) {
            this.bowler_6.controls['runs'].setValue(value);
        }
        else if (index == 6) {
            this.bowler_7.controls['runs'].setValue(value);
        }
        else if (index == 7) {
            this.bowler_8.controls['runs'].setValue(value);
        }
        else if (index == 8) {
            this.bowler_9.controls['runs'].setValue(value);
        }
        else if (index == 9) {
            this.bowler_10.controls['runs'].setValue(value);
        }
        else if (index == 10) {
            this.bowler_11.controls['runs'].setValue(value);
        }
    }

    onSelectedWickets(index, value: any) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.bowler_1.controls['wickets'].setValue(value);
        } else if (index == 1) {
            this.bowler_2.controls['wickets'].setValue(value);
        } else if (index == 2) {
            this.bowler_3.controls['wickets'].setValue(value);
        }
        else if (index == 3) {
            this.bowler_4.controls['wickets'].setValue(value);
        }
        else if (index == 4) {
            this.bowler_5.controls['wickets'].setValue(value);
        }
        else if (index == 5) {
            this.bowler_6.controls['wickets'].setValue(value);
        }
        else if (index == 6) {
            this.bowler_7.controls['wickets'].setValue(value);
        }
        else if (index == 7) {
            this.bowler_8.controls['wickets'].setValue(value);
        }
        else if (index == 8) {
            this.bowler_9.controls['wickets'].setValue(value);
        }
        else if (index == 9) {
            this.bowler_10.controls['wickets'].setValue(value);
        }
        else if (index == 10) {
            this.bowler_11.controls['wickets'].setValue(value);
        }
        console.info("this.form.controls.value :: ", this.form.value)
    }

    onSelectedWides(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.bowler_1.controls['wides'].setValue(value);
        } else if (index == 1) {
            this.bowler_2.controls['wides'].setValue(value);
        } else if (index == 2) {
            this.bowler_3.controls['wides'].setValue(value);
        }
        else if (index == 3) {
            this.bowler_4.controls['wides'].setValue(value);
        }
        else if (index == 4) {
            this.bowler_5.controls['wides'].setValue(value);
        }
        else if (index == 5) {
            this.bowler_6.controls['wides'].setValue(value);
        }
        else if (index == 6) {
            this.bowler_7.controls['wides'].setValue(value);
        }
        else if (index == 7) {
            this.bowler_8.controls['wides'].setValue(value);
        }
        else if (index == 8) {
            this.bowler_9.controls['wides'].setValue(value);
        }
        else if (index == 9) {
            this.bowler_10.controls['wides'].setValue(value);
        }
        else if (index == 10) {
            this.bowler_11.controls['wides'].setValue(value);
        }
    }

    onSelectedNoBalls(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.bowler_1.controls['noballs'].setValue(value);
        } else if (index == 1) {
            this.bowler_2.controls['noballs'].setValue(value);
        } else if (index == 2) {
            this.bowler_3.controls['noballs'].setValue(value);
        }
        else if (index == 3) {
            this.bowler_4.controls['noballs'].setValue(value);
        }
        else if (index == 4) {
            this.bowler_5.controls['noballs'].setValue(value);
        }
        else if (index == 5) {
            this.bowler_6.controls['noballs'].setValue(value);
        }
        else if (index == 6) {
            this.bowler_7.controls['noballs'].setValue(value);
        }
        else if (index == 7) {
            this.bowler_8.controls['noballs'].setValue(value);
        }
        else if (index == 8) {
            this.bowler_9.controls['noballs'].setValue(value);
        }
        else if (index == 9) {
            this.bowler_10.controls['noballs'].setValue(value);
        }
        else if (index == 10) {
            this.bowler_11.controls['noballs'].setValue(value);
        }
    }

    onSelectedMaidens(index, value: any) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.bowler_1.controls['maidens'].setValue(value);
        } else if (index == 1) {
            this.bowler_2.controls['maidens'].setValue(value);
        } else if (index == 2) {
            this.bowler_3.controls['maidens'].setValue(value);
        }
        else if (index == 3) {
            this.bowler_4.controls['maidens'].setValue(value);
        }
        else if (index == 4) {
            this.bowler_5.controls['maidens'].setValue(value);
        }
        else if (index == 5) {
            this.bowler_6.controls['maidens'].setValue(value);
        }
        else if (index == 6) {
            this.bowler_7.controls['maidens'].setValue(value);
        }
        else if (index == 7) {
            this.bowler_8.controls['maidens'].setValue(value);
        }
        else if (index == 8) {
            this.bowler_9.controls['maidens'].setValue(value);
        }
        else if (index == 9) {
            this.bowler_10.controls['maidens'].setValue(value);
        }
        else if (index == 10) {
            this.bowler_11.controls['maidens'].setValue(value);
        }
    }

    getMatchDetails() {
        let match = this.matchesDataStoreService.getMatchDetails();
        console.log("Match information ::", match)
        if (match != null || match != undefined) {
            console.log("Match inside ::", match);
            this.match_info.controls['game_id'].setValue(match[0].game_id);
            this.match_info.controls['season'].setValue(match[0].season);

            this.match_info.controls['opponent'].setValue(match[0].awayteam);
            if (this.innings == 'First Innings') {
                this.match_info.controls['innings_id'].setValue(1);
                this.match_info.controls['team'].setValue(match[0].batting_first_id);
                this.match_info.controls['opponent'].setValue(match[0].batting_second_id);
            }
            if (this.innings == 'Second Innings') {
                this.match_info.controls['innings_id'].setValue(2);
                this.match_info.controls['team'].setValue(match[0].batting_second_id);
                this.match_info.controls['opponent'].setValue(match[0].batting_first_id);
            }
        }
    }

    addBowlersToList() {

        Object.keys(this.form.controls).forEach(key => {

            if (this.form.get(key) && this.form.get(key).value.bowling_position) {
                console.info("Key is =>", key)
                const bowlingPosition = this.form.get(key).value.bowling_position;
                console.log("Adding details for battingPosition => :", bowlingPosition);
                //to start index from 0, minus 1;
                this.bowlersList[bowlingPosition - 1] = this.form.get(key).value;
            }
            this.form.get(key).markAsPending();
        });


    };

    public onSubmitBowling(values: Object): void {
        this.getMatchDetails();
        let details = JSON.stringify(this.bowlersList);
        this.addBowlersToList();
        console.log("this.bowlersList => ", this.bowlersList)
        this.bowlingScoreDetails = {
            "bowlingDetails": this.bowlersList,
            "matchInfo": this.form.get('match_info').value,

        }

        // const match$ = this.matchesService.submit_score_bowling_details(this.bowlingScoreDetails);
        // match$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.matchScore = responce,
        //     (err) => console.error("Submitting Bowling details failed", err),
        //     () => this.notify_Bowling.emit(this.innings));
        ;
    }

    /* public onSubmitBowling_1(values: Object): void {
       this.getMatchDetails();
       let details = JSON.stringify(this.form.value);
       console.log("Submitted Form values ==> ", details)
       const match$ = this.matchesService.submit_score_bowling_details(details);
       match$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.matchScore = responce);
     }*/

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
