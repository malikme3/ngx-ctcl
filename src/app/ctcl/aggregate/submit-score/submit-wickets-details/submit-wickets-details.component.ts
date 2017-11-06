/* tslint:disable */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subject} from "rxjs/Subject";
import {MatchesService} from "../../../common/services/matches.service";
import {MatchesConstants} from "../../../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../../../common/services/matches-data-store.service";

/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/
@Component({
    selector: 'ctcl-submit-score-wickets',
    templateUrl: 'submit-wickets-details.component.html',
    styleUrls: ['./submit-wickets-details.component.scss'],
})
export class ScoreWicketsDetailsComponent {
    @Output() notify_Extras: EventEmitter<any> = new EventEmitter<any>();
    @Input() innings: string;
    @Input() isFirstInnings: boolean = true;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    isSubmitted: boolean = false;
    public matchInfo: any;
    public fowResStatus: string;
    public wicketForm: FormGroup;
    public name: AbstractControl;
    public innings_id: AbstractControl;
    public game_id: AbstractControl;
    public team: AbstractControl;
    public fow1: AbstractControl;
    public fow2: AbstractControl;
    public fow3: AbstractControl;
    public fow4: AbstractControl;
    public fow5: AbstractControl;
    public fow6: AbstractControl;
    public fow7: AbstractControl;
    public fow8: AbstractControl;
    public fow9: AbstractControl;
    public fow10: AbstractControl;
    public fow11: AbstractControl;

    constructor(fb: FormBuilder,
                private matchesService: MatchesService,
                private matchesConstants: MatchesConstants,
                private matchesDataStoreService: MatchesDataStoreService,
                private modalService: NgbModal) {

        this.wicketForm = fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(3)])],
            'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])],
            'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])],
            'team': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])],
            'fow1': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow2': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow3': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow4': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow5': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow6': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow7': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow8': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow9': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow10': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
            'fow11': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],

        });

        this.name = this.wicketForm.controls['name'];
        this.innings_id = this.wicketForm.controls['innings_id'];
        this.game_id = this.wicketForm.controls['game_id'];
        this.team = this.wicketForm.controls['team'];
        this.fow1 = this.wicketForm.controls['fow1'];
        this.fow2 = this.wicketForm.controls['fow2'];
        this.fow3 = this.wicketForm.controls['fow3'];
        this.fow4 = this.wicketForm.controls['fow4'];
        this.fow5 = this.wicketForm.controls['fow5'];
        this.fow6 = this.wicketForm.controls['fow6'];
        this.fow7 = this.wicketForm.controls['fow7'];
        this.fow8 = this.wicketForm.controls['fow8'];
        this.fow9 = this.wicketForm.controls['fow9'];
        this.fow10 = this.wicketForm.controls['fow10'];
        this.fow11 = this.wicketForm.controls['fow11'];

    }

    batting_poistion = this.matchesConstants.getBattingPositions();

    // childModalShow() {
    //     const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    //     activeModal.componentInstance.modalHeader = 'wicket';
    //     activeModal.componentInstance.modalContent = `I am a child modal, opened from parent component!`;
    //     activeModal.componentInstance.name = 'Hello for you '!;
    //     activeModal.componentInstance.createConfirm = 'Yes';
    //     console.log(activeModal.componentInstance);
    //
    // }

    onSelectedWickets(type: any, value: any) {
        console.info("onSelectedWickets: Type:", type, 'Value: ', value)
        this.wicketForm.controls[type].setValue(value);
        this.isSubmitted = false;
        console.log('this.extrasDetails.controls ', this.wicketForm.value)
    }

    getMatchData() {
        let matchInfo$ = this.matchesDataStoreService.getMatchDetails();
        console.log("Match Info", matchInfo$)

        if (!this.matchesService.isEmpty(matchInfo$)) {
            this.wicketForm.controls['game_id'].setValue(matchInfo$[0].game_id);
            if (this.isFirstInnings) {
                this.wicketForm.controls['team'].setValue(matchInfo$[0].batting_first_id);
                this.wicketForm.controls['innings_id'].setValue('1');
            } else {
                this.wicketForm.controls['team'].setValue(matchInfo$[0].batting_second_id);
                this.wicketForm.controls['innings_id'].setValue('2');
            }
        }
    }

    submitWickets() {
        this.getMatchData();
        let fowValue = this.wicketForm.value;
        console.log("SubmitScoreWicketComponent :: Request", fowValue)
        this.matchesService.submit_score_fow_details(fowValue)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(responce => this.fowResStatus = responce,
                (err) => console.error("Submitting Totals failed", err),
                () => this.notify_Extras.emit({
                    "innings": this.innings,
                    "component": 'wickets'
                }));
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
