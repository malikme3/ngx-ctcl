/**
 *  @authoer Zulifqar Ahmad. November 23, 2017
 * Primary use of this page will be to submit match information before game start.
 * Captains && umpired may require to submit certain information before or after toss
 * In case of wrong entry, information can be calculate by submitting teams/grounds or date information or combination of these.
 * Any time this page can be altered, customized to meet new requirement or leagues rules.
 */
import {ClubsService} from '../../../common/services/clubs.service';
import {CommonUtilsService} from '../../../common/services/common-utils.service';
import {LiveScoreConstants} from '../../../common/services/live-score-constants.service';
import {LiveScoreService} from '../../../common/services/live-score.service';
import {MatchesService} from '../../../common/services/matches.service';
import {DatePipe} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'ctcl-pre-match-umpire',
  templateUrl: 'pre-match-umpire.component.html',
  styleUrls: ['./pre-match-umpire.component.css'],
})

export class PreMatchUmpireComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  preMatchUmpireForm: FormGroup;
  active_grounds: any;
  teamsList: any;
  playingTeams: any[] = [];
  filteredTeams;
  preMatchInfoResponce: any;

  constructor( @Inject(FormBuilder) private fb: FormBuilder,
    private liveScoreConstants: LiveScoreConstants,
    private liveScoreService: LiveScoreService,
    private clubsService: ClubsService,
    private datePipe: DatePipe,
    private commonUtilsService: CommonUtilsService,
    private matchesService: MatchesService,
  ) {
    this.createForm();
    this.getActiveGrounds();
    this.getTeamslist();
  }

  createForm() {
    this.preMatchUmpireForm = this.fb.group({
      id: '',
      // live_game_id: '',
      league: '',
      ground: '',
      home_team: '',
      guest_team: '',
      toss_won_team: '',
      batting_frst_team: '',
      batting_second_team: '',
      umpire_team_1: '',
      umpire_team_2: '',
      maxovers: '',
      // match_date: '',
      // match_week: '',
      comments: '',
    });

  }

  getActiveGrounds() {
    const form$ = this.clubsService.getCtclGrounds();
    form$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.active_grounds = responce,
      (err) => console.error('getActiveGrounds: Response Error =>', err),
      () => this.activeGroundReqComplete());
  }
  activeGroundReqComplete() {
    console.info('active grounds: ', this.active_grounds);
  }
  getTeamslist() {
    console.info('Fetching results for teams list :');
    const teams$ = this.matchesService.getTeamslist();
    console.info('this.teamsname', this.teamsList);
    teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.teamsList = responce,
      (err) => console.error(err),
      () => console.info('responce  for teamList', this.teamsList));

  }

  getFilteredTeams(inputs) {
    console.info('the in put val is', inputs);
    const query = inputs.query;
    this.filteredTeams = this.commonUtilsService.filterTeams(query, this.teamsList);
  }

  getPlayingTeams(inputs) {
    const query = inputs.query;
    this.playingTeams = this.commonUtilsService.filterTeams(query, this.playingTeams);
  }

  onSelectedTeam(value) {
    console.info('Selected Team is', value);
    this.preMatchUmpireForm.patchValue({batting_team: value});
  }
  setPlayingTeams(team) {
    this.playingTeams.push(team);
    console.info('Playing Teams are: ', this.playingTeams);
  }

  setBattingOrder() {
    if (this.preMatchUmpireForm.get('batting_frst_team').value.value === this.preMatchUmpireForm.get('home_team').value.value) {
      this.preMatchUmpireForm.patchValue({batting_second_team: this.preMatchUmpireForm.get('guest_team').value});
    } else if (this.preMatchUmpireForm.get('batting_frst_team').value.value === this.preMatchUmpireForm.get('guest_team').value.value) {
      this.preMatchUmpireForm.patchValue({batting_second_team: this.preMatchUmpireForm.get('home_team').value});
    }
    this.preMatchUmpireForm.patchValue({league: 20});
    this.preMatchUmpireForm.patchValue({id: 123456});
  }
  submitPreMatchInfo() {
    this.setBattingOrder();
    console.info('Submitting form ::', this.preMatchUmpireForm);
    this.sendReqToServer(this.preMatchUmpireForm.value);

  }

  sendReqToServer(perMatchInfo) {
    this.liveScoreService.preMatchInfoByUmpire(perMatchInfo).takeUntil(this.ngUnsubscribe).subscribe(
      res => this.preMatchUmpireForm = res,
      (err) => console.error('onSubmitBasicDetails: Res Error =>', err),
      () => console.info('Match Info by Umpire server request completed'));
  }
}
