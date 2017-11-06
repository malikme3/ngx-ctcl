/* tslint:disable */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {Subject} from "rxjs/Subject";
import {MatchesService} from "../../../common/services/matches.service";
import {MatchesConstants} from "../../../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../../../common/services/matches-data-store.service";
import {CommonUtilsService} from "../../../common/services/common-utils.service";

/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/

@Component({
    selector: 'ctcl-score-batting-details',
    templateUrl: 'score-battings-details.component.html',
    styleUrls: ['score-battings-details.component.scss'],
})
export class ScoreBattingsDetailsComponent {
    @Output() notify_Batting: EventEmitter<any> = new EventEmitter<any>();
    @Input() batFirstPlayers: Array<any>;
    @Input() inningsId: number;
    @Input() innings: string;
    @Input() matchData: any;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    batsmansList: any[] = [];
    matchDetails: any[] = [];
    playersList;
    player_out_type;
    filteredPlayers: any;
    filteredOutTypes:any;
    matchScore;

    battingScoreDetails: any;

    form: FormGroup;
    match_info: FormGroup;
    public name: AbstractControl;
    public game_id: AbstractControl;
    public season: AbstractControl;
    public innings_id: AbstractControl;
    public team: AbstractControl;
    public opponent: AbstractControl;

//Batsman # 1
    batsman_1: FormGroup;
    public player_id: AbstractControl;
    public batting_position: AbstractControl;
    public how_out: AbstractControl;
    public notout: AbstractControl;
    public assist: AbstractControl;
    public bowler: AbstractControl;
    public runs: AbstractControl;
    public balls: AbstractControl;
    public fours: AbstractControl;
    public sixes: AbstractControl;

    //Batsman # 2
    batsman_2: FormGroup;

    //Batsman # 3
    batsman_3: FormGroup;

    //Batsman # 4
    batsman_4: FormGroup;


    //Batsman # 5
    batsman_5: FormGroup;

    //Batsman # 6
    batsman_6: FormGroup;


    //Batsman # 7
    batsman_7: FormGroup;


    //Batsman # 8
    batsman_8: FormGroup;

    //Batsman # 9
    batsman_9: FormGroup;


    //Batsman # 10
    batsman_10: FormGroup;

    //Batsman # 11
    batsman_11: FormGroup;


    constructor(fb: FormBuilder, private matchesService: MatchesService,
                private matchesConstants: MatchesConstants,
                private matchesDataStoreService: MatchesDataStoreService,
                private commonUtilsService: CommonUtilsService) {

        this
            .form = fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'team': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            'opponent': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            //Batsman Details
            'match_info': fb.group({
                'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'team': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'opponent': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            }),
            'batsman_1': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_2': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_3': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_4': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_5': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_6': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_7': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_8': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_9': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_10': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            'batsman_11': fb.group({
                'player_id': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'batting_position': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'how_out': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'notout': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
                'assist': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'bowler': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'runs': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'balls': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'fours': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                'sixes': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            })
        });
        this
            .match_info = <FormGroup> this.form.controls['match_info'];
        this
            .name = this.match_info.controls['name'];
        this
            .game_id = this.match_info.controls['game_id'];
        this
            .season = this.match_info.controls['season'];
        this
            .innings_id = this.match_info.controls['innings_id'];
        this
            .team = this.match_info.controls['team'];
        this
            .opponent = this.match_info.controls['opponent'];

        //Batting Position # 1
        this
            .batsman_1 = <FormGroup> this.form.controls['batsman_1'];
        this
            .player_id = this.batsman_1.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['1'];
        this
            .how_out = this.batsman_1.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_1.controls['assist'];
        this
            .bowler = this.batsman_1.controls['bowler'];
        this
            .runs = this.batsman_1.controls['runs'];
        this
            .balls = this.batsman_1.controls['balls'];
        this
            .fours = this.batsman_1.controls['fours'];
        this
            .sixes = this.batsman_1.controls['sixes'];

        //Batting Position # 2
        this
            .batsman_2 = <FormGroup> this.form.controls['batsman_2'];
        this
            .player_id = this.batsman_1.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['2'];
        this
            .how_out = this.batsman_2.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_2.controls['assist'];
        this
            .bowler = this.batsman_2.controls['bowler'];
        this
            .runs = this.batsman_2.controls['runs'];
        this
            .balls = this.batsman_2.controls['balls'];
        this
            .fours = this.batsman_2.controls['fours'];
        this
            .sixes = this.batsman_2.controls['sixes'];

        //Batting Position # 3
        this
            .batsman_3 = <FormGroup> this.form.controls['batsman_3'];
        this
            .player_id = this.batsman_3.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['3'];
        this
            .how_out = this.batsman_3.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_3.controls['assist'];
        this
            .bowler = this.batsman_3.controls['bowler'];
        this
            .runs = this.batsman_3.controls['runs'];
        this
            .balls = this.batsman_3.controls['balls'];
        this
            .fours = this.batsman_3.controls['fours'];
        this
            .sixes = this.batsman_3.controls['sixes'];

        //Batting Position # 4
        this
            .batsman_4 = <FormGroup> this.form.controls['batsman_4'];
        this
            .player_id = this.batsman_4.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['4'];
        this
            .how_out = this.batsman_4.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_4.controls['assist'];
        this
            .bowler = this.batsman_4.controls['bowler'];
        this
            .runs = this.batsman_4.controls['runs'];
        this
            .balls = this.batsman_4.controls['balls'];
        this
            .fours = this.batsman_4.controls['fours'];
        this
            .sixes = this.batsman_4.controls['sixes'];

        //Batting Position # 5
        this
            .batsman_5 = <FormGroup> this.form.controls['batsman_5'];
        this
            .player_id = this.batsman_5.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['5'];
        this
            .how_out = this.batsman_5.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_5.controls['assist'];
        this
            .bowler = this.batsman_5.controls['bowler'];
        this
            .runs = this.batsman_5.controls['runs'];
        this
            .balls = this.batsman_5.controls['balls'];
        this
            .fours = this.batsman_5.controls['fours'];
        this
            .sixes = this.batsman_5.controls['sixes'];

        //Batting Position # 6
        this
            .batsman_6 = <FormGroup> this.form.controls['batsman_6'];
        this
            .player_id = this.batsman_6.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['6'];
        this
            .how_out = this.batsman_6.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_6.controls['assist'];
        this
            .bowler = this.batsman_6.controls['bowler'];
        this
            .runs = this.batsman_6.controls['runs'];
        this
            .balls = this.batsman_6.controls['balls'];
        this
            .fours = this.batsman_6.controls['fours'];
        this
            .sixes = this.batsman_6.controls['sixes'];

        //Batting Position # 7
        this
            .batsman_7 = <FormGroup> this.form.controls['batsman_7'];
        this
            .player_id = this.batsman_7.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['7'];
        this
            .how_out = this.batsman_7.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_7.controls['assist'];
        this
            .bowler = this.batsman_7.controls['bowler'];
        this
            .runs = this.batsman_7.controls['runs'];
        this
            .balls = this.batsman_7.controls['balls'];
        this
            .fours = this.batsman_7.controls['fours'];
        this
            .sixes = this.batsman_7.controls['sixes'];

        //Batting Position # 8
        this
            .batsman_8 = <FormGroup> this.form.controls['batsman_8'];
        this
            .player_id = this.batsman_8.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['8'];
        this
            .how_out = this.batsman_8.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_8.controls['assist'];
        this
            .bowler = this.batsman_8.controls['bowler'];
        this
            .runs = this.batsman_8.controls['runs'];
        this
            .balls = this.batsman_8.controls['balls'];
        this
            .fours = this.batsman_8.controls['fours'];
        this
            .sixes = this.batsman_8.controls['sixes'];
        //Batting Position # 9
        this
            .batsman_9 = <FormGroup> this.form.controls['batsman_9'];
        this
            .player_id = this.batsman_9.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['9'];
        this
            .how_out = this.batsman_9.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_9.controls['assist'];
        this
            .bowler = this.batsman_9.controls['bowler'];
        this
            .runs = this.batsman_9.controls['runs'];
        this
            .balls = this.batsman_9.controls['balls'];
        this
            .fours = this.batsman_9.controls['fours'];
        this
            .sixes = this.batsman_9.controls['sixes'];

        //Batting Position # 10
        this
            .batsman_10 = <FormGroup> this.form.controls['batsman_10'];
        this
            .player_id = this.batsman_10.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['10'];
        this
            .how_out = this.batsman_10.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_10.controls['assist'];
        this
            .bowler = this.batsman_10.controls['bowler'];
        this
            .runs = this.batsman_10.controls['runs'];
        this
            .balls = this.batsman_10.controls['balls'];
        this
            .fours = this.batsman_10.controls['fours'];
        this
            .sixes = this.batsman_10.controls['sixes'];

        //Batting Position # 11
        this
            .batsman_11 = <FormGroup> this.form.controls['batsman_11'];
        this
            .player_id = this.batsman_11.controls['player_id'];
        this
            .batting_position = this.batsman_1.controls['11'];
        this
            .how_out = this.batsman_11.controls['how_out'];
        this
            .notout = this.batsman_1.controls['notout'];
        this
            .assist = this.batsman_11.controls['assist'];
        this
            .bowler = this.batsman_11.controls['bowler'];
        this
            .runs = this.batsman_11.controls['runs'];
        this
            .balls = this.batsman_11.controls['balls'];
        this
            .fours = this.batsman_11.controls['fours'];
        this
            .sixes = this.batsman_11.controls['sixes'];

    }

    ngOnInit(): void {
        this.howOutTypes();
        this.getPlayerslist();
        this.batsman_1.controls['player_id'].setValue({
            label: "Zulfiqar Ahmad",
            value: 1396
        })
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

    onSelectedBatting(index, value) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.batsman_1.controls['player_id'].setValue(value);
            this.batsman_1.controls['batting_position'].setValue('1');
        } else if (index == 1) {
            this.batsman_2.controls['player_id'].setValue(value);
            this.batsman_2.controls['batting_position'].setValue('2');
        } else if (index == 2) {
            this.batsman_3.controls['player_id'].setValue(value);
            this.batsman_3.controls['batting_position'].setValue('3');
        }
        else if (index == 3) {
            this.batsman_4.controls['player_id'].setValue(value);
            this.batsman_4.controls['batting_position'].setValue('4');
        }
        else if (index == 4) {
            this.batsman_5.controls['player_id'].setValue(value);
            this.batsman_5.controls['batting_position'].setValue('5');
        }
        else if (index == 5) {
            this.batsman_6.controls['player_id'].setValue(value);
            this.batsman_6.controls['batting_position'].setValue('6');
        }
        else if (index == 6) {
            this.batsman_7.controls['player_id'].setValue(value);
            this.batsman_7.controls['batting_position'].setValue('7');
        }
        else if (index == 7) {
            this.batsman_8.controls['player_id'].setValue(value);
            this.batsman_8.controls['batting_position'].setValue('8');
        }
        else if (index == 8) {
            this.batsman_9.controls['player_id'].setValue(value);
            this.batsman_9.controls['batting_position'].setValue('9');
        }
        else if (index == 9) {
            this.batsman_10.controls['player_id'].setValue(value);
            this.batsman_10.controls['batting_position'].setValue('10');
        }
        else if (index == 10) {
            this.batsman_11.controls['player_id'].setValue(value);
            this.batsman_11.controls['batting_position'].setValue('11');
        }
        console.info("this.form.controls.value :: ", this.form.value)
    }

    onSelectedHowOutTypes(index, value) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.batsman_1.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_1.controls['notout'].setValue('1');
            } else {
                this.batsman_1.controls['notout'].setValue('0');
            }
        } else if (index == 1) {
            this.batsman_2.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_2.controls['notout'].setValue('1');
            } else {
                this.batsman_2.controls['notout'].setValue('0');
            }
        } else if (index == 2) {
            this.batsman_3.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_3.controls['notout'].setValue('1');
            } else {
                this.batsman_3.controls['notout'].setValue('0');
            }
        }
        else if (index == 3) {
            this.batsman_4.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_4.controls['notout'].setValue('1');
            } else {
                this.batsman_4.controls['notout'].setValue('0');
            }
        }
        else if (index == 4) {
            this.batsman_5.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_5.controls['notout'].setValue('1');
            } else {
                this.batsman_5.controls['notout'].setValue('0');
            }
        }
        else if (index == 5) {
            this.batsman_6.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_6.controls['notout'].setValue('1');
            } else {
                this.batsman_6.controls['notout'].setValue('0');
            }
        }
        else if (index == 6) {
            this.batsman_7.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_7.controls['notout'].setValue('1');
            } else {
                this.batsman_7.controls['notout'].setValue('0');
            }
        }
        else if (index == 7) {
            this.batsman_8.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_8.controls['notout'].setValue('1');
            } else {
                this.batsman_8.controls['notout'].setValue('0');
            }
        }
        else if (index == 8) {
            this.batsman_9.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_9.controls['notout'].setValue('1');
            } else {
                this.batsman_9.controls['notout'].setValue('0');
            }
        }
        else if (index == 9) {
            this.batsman_10.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_10.controls['notout'].setValue('1');
            } else {
                this.batsman_10.controls['notout'].setValue('0');
            }
        }
        else if (index == 10) {
            this.batsman_11.controls['how_out'].setValue(value);
            if (value == 2 || value == 8) {
                this.batsman_11.controls['notout'].setValue('1');
            } else {
                this.batsman_11.controls['notout'].setValue('0');
            }
        }
        console.info("this.form.controls.value :: ", this.form.value)
    }

    onSelectedBowler(index, value: any) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.batsman_1.controls['bowler'].setValue(value);
            console.info("this.batsman_1.controls :: ", this.batsman_1.controls.value)
        } else if (index == 1) {
            this.batsman_2.controls['bowler'].setValue(value);
            console.info("this.batsman_2.controls :: ", this.batsman_2.controls)
        } else if (index == 2) {
            this.batsman_3.controls['bowler'].setValue(value);
        }
        else if (index == 3) {
            this.batsman_4.controls['bowler'].setValue(value);
        }
        else if (index == 4) {
            this.batsman_5.controls['bowler'].setValue(value);
        }
        else if (index == 5) {
            this.batsman_6.controls['bowler'].setValue(value);
        }
        else if (index == 6) {
            this.batsman_7.controls['bowler'].setValue(value);
        }
        else if (index == 7) {
            this.batsman_8.controls['bowler'].setValue(value);
        }
        else if (index == 8) {
            this.batsman_9.controls['bowler'].setValue(value);
        }
        else if (index == 9) {
            this.batsman_10.controls['bowler'].setValue(value);
        }
        else if (index == 10) {
            this.batsman_11.controls['bowler'].setValue(value);
        }
        console.info("this.form.controls.value :: ", this.form.value)
    }

    onSelectedFielder(index, value: any) {
        console.log('index', index, 'value ', value)
        if (index == 0) {
            this.batsman_1.controls['assist'].setValue(value);
        } else if (index == 1) {
            this.batsman_2.controls['assist'].setValue(value);
        } else if (index == 2) {
            this.batsman_3.controls['assist'].setValue(value);
        }
        else if (index == 3) {
            this.batsman_4.controls['assist'].setValue(value);
        }
        else if (index == 4) {
            this.batsman_5.controls['assist'].setValue(value);
        }
        else if (index == 5) {
            this.batsman_6.controls['assist'].setValue(value);
        }
        else if (index == 6) {
            this.batsman_7.controls['assist'].setValue(value);
        }
        else if (index == 7) {
            this.batsman_8.controls['assist'].setValue(value);
        }
        else if (index == 8) {
            this.batsman_9.controls['assist'].setValue(value);
        }
        else if (index == 9) {
            this.batsman_10.controls['assist'].setValue(value);
        }
        else if (index == 10) {
            this.batsman_11.controls['assist'].setValue(value);
        }
    }

    onSelectedRuns(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.batsman_1.controls['runs'].setValue(value);
        } else if (index == 1) {
            this.batsman_2.controls['runs'].setValue(value);
        } else if (index == 2) {
            this.batsman_3.controls['runs'].setValue(value);
        }
        else if (index == 3) {
            this.batsman_4.controls['runs'].setValue(value);
        }
        else if (index == 4) {
            this.batsman_5.controls['runs'].setValue(value);
        }
        else if (index == 5) {
            this.batsman_6.controls['runs'].setValue(value);
        }
        else if (index == 6) {
            this.batsman_7.controls['runs'].setValue(value);
        }
        else if (index == 7) {
            this.batsman_8.controls['runs'].setValue(value);
        }
        else if (index == 8) {
            this.batsman_9.controls['runs'].setValue(value);
        }
        else if (index == 9) {
            this.batsman_10.controls['runs'].setValue(value);
        }
        else if (index == 10) {
            this.batsman_11.controls['runs'].setValue(value);
        }
    }

    onSelectedBalls(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.batsman_1.controls['balls'].setValue(value);
        } else if (index == 1) {
            this.batsman_2.controls['balls'].setValue(value);
        } else if (index == 2) {
            this.batsman_3.controls['balls'].setValue(value);
        }
        else if (index == 3) {
            this.batsman_4.controls['balls'].setValue(value);
        }
        else if (index == 4) {
            this.batsman_5.controls['balls'].setValue(value);
        }
        else if (index == 5) {
            this.batsman_6.controls['balls'].setValue(value);
        }
        else if (index == 6) {
            this.batsman_7.controls['balls'].setValue(value);
        }
        else if (index == 7) {
            this.batsman_8.controls['balls'].setValue(value);
        }
        else if (index == 8) {
            this.batsman_9.controls['balls'].setValue(value);
        }
        else if (index == 9) {
            this.batsman_10.controls['balls'].setValue(value);
        }
        else if (index == 10) {
            this.batsman_11.controls['balls'].setValue(value);
        }
    }

    onSelectedFours(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.batsman_1.controls['fours'].setValue(value);
        } else if (index == 1) {
            this.batsman_2.controls['fours'].setValue(value);
        } else if (index == 2) {
            this.batsman_3.controls['fours'].setValue(value);
        }
        else if (index == 3) {
            this.batsman_4.controls['fours'].setValue(value);
        }
        else if (index == 4) {
            this.batsman_5.controls['fours'].setValue(value);
        }
        else if (index == 5) {
            this.batsman_6.controls['fours'].setValue(value);
        }
        else if (index == 6) {
            this.batsman_7.controls['fours'].setValue(value);
        }
        else if (index == 7) {
            this.batsman_8.controls['fours'].setValue(value);
        }
        else if (index == 8) {
            this.batsman_9.controls['fours'].setValue(value);
        }
        else if (index == 9) {
            this.batsman_10.controls['fours'].setValue(value);
        }
        else if (index == 10) {
            this.batsman_11.controls['fours'].setValue(value);
        }
    }


    onSelectedSixes(index, value) {
        console.log('index ', index, 'value', value)
        if (index == 0) {
            this.batsman_1.controls['sixes'].setValue(value);
        } else if (index == 1) {
            this.batsman_2.controls['sixes'].setValue(value);
            console.info("this.batsman_2.controls :: ", this.batsman_2.controls)
        } else if (index == 2) {
            this.batsman_3.controls['sixes'].setValue(value);
        }
        else if (index == 3) {
            this.batsman_4.controls['sixes'].setValue(value);
        }
        else if (index == 4) {
            this.batsman_5.controls['sixes'].setValue(value);
        }
        else if (index == 5) {
            this.batsman_6.controls['sixes'].setValue(value);
        }
        else if (index == 6) {
            this.batsman_7.controls['sixes'].setValue(value);
        }
        else if (index == 7) {
            this.batsman_8.controls['sixes'].setValue(value);
        }
        else if (index == 8) {
            this.batsman_9.controls['sixes'].setValue(value);
        }
        else if (index == 9) {
            this.batsman_10.controls['sixes'].setValue(value);
        }
        else if (index == 10) {
            this.batsman_11.controls['sixes'].setValue(value);
        }
    }

    getMatchDetails() {
        let match = this.matchesDataStoreService.getMatchDetails();
        console.log("Match information ::", match)
        if (match) {
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

    addToBatsmanList() {

        Object.keys(this.form.controls).forEach(key => {
            if (this.form.get(key) && this.form.get(key).value.batting_position) {
                console.info("Key is =>", key)
                const battingPosition = this.form.get(key).value.batting_position;
                console.log("Adding details for battingPosition => :", battingPosition);
                //to start index from 0, minus 1;
                this.batsmansList[battingPosition - 1] = this.form.get(key).value;
            }
            this.form.get(key).markAsPending();
        });


    }
    ;

    getFilteredPlayers(input) {
        let query = input.query;
        this.filteredPlayers = this.commonUtilsService.filterPlayers(query, this.playersList);
    }
    getFilteredOutTypes(input) {
        let query = input.query;
        this.filteredOutTypes = this.commonUtilsService.filteredOutTypes(query, this.player_out_type);
    }
    public

    onSubmit(values: Object): void {
        this.getMatchDetails();
        let details = JSON.stringify(this.batsmansList);
        this.addToBatsmanList();
        console.log("this.batsmansList => ", this.batsmansList)
        this.battingScoreDetails = {
            "batsmanDetails": this.batsmansList,
            "matchInfo": this.form.get('match_info').value,

        }

// const match$ = this.matchesService.submit_score_batting_details(this.battingScoreDetails);
// match$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.matchScore = responce,
//     (err) => console.error("Submitting Batting details failed", err),
//     () => this.notify_Batting.emit(this.innings));
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
