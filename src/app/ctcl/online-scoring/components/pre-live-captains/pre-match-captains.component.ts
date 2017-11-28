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
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'ctcl-pre-match-captains',
  templateUrl: 'pre-match-captains.component.html',
  styleUrls: ['./pre-match-captains.component.css'],
})

export class PreMatchCaptainsComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  playingXiForm: FormGroup;
  playingXiFormResponce: any;
  active_grounds: any;
  teamsList: any;
  playersList: any;
  playersByTeamId: any[] = [];
  playersAllTeams: any[] = [];
  filteredTeams: any;
  filteredPlayers: any[] = [];
  selectedPlayers = [];
  selectedPortablesPlayers = [];
  settings = {};




  constructor(private fb: FormBuilder,
    private liveScoreConstants: LiveScoreConstants,
    private liveScoreService: LiveScoreService,
    private clubsService: ClubsService,
    private datePipe: DatePipe,
    private commonUtilsService: CommonUtilsService,
    private matchesService: MatchesService,
  ) {
    this.createForm();
  }

  createForm() {
    this.getTeamslist();
    this.getPlayerslist();

    this.playingXiForm = this.fb.group({
      team: '',
      portablesPlayers: [[], ''],
      regularPlayers: [[], Validators.required],

    });

  }
  ngOnInit() {

    this.selectedPlayers = [];
    this.selectedPortablesPlayers = [];
    this.settings = {
      text: 'Select Players',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      classes: 'myclass custom-class',
    };

    // with null input, back end will return all teams players
    this.getPlayersAllTeams(null);
  }

  getActiveGrounds() {
    const form$ = this.clubsService.getCtclGrounds();
    form$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.active_grounds = responce,
      (err) => console.error('getActiveGrounds: Response Error =>', err),
      () => console.info('active grounds: ', this.active_grounds));
  }

  getTeamslist() {
    console.info('Fetching results for teams list :');
    const teams$ = this.matchesService.getTeamslist();
    console.info('this.teamsname', this.teamsList);
    teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.teamsList = responce,
      (err) => console.error(err),
      () => console.info('responce  for teamList', this.teamsList));
  }
  getPlayerslist() {
    console.info('Fetching Players list');
    const teams$ = this.matchesService.getPlayerslist();
    teams$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.playersList = responce,
      (err) => console.error(err),
      () => console.info('responce', this.playersList));
  }

  getPlayersByTeamId(teamId) {
    console.info('Fetching Players list by Team Id');
    const platers$ = this.liveScoreService.playerByTeamId(teamId.value);
    platers$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.playersByTeamId = responce,
      (err) => console.error(err),
      () => console.info('playersByTeamId res', this.playersByTeamId));
  }
  getPlayersAllTeams(id) {
    console.info('Fetching Players list by Team Id');
    const platers$ = this.liveScoreService.playerByTeamId(id);
    platers$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.playersAllTeams = responce,
      (err) => console.error(err),
      () => console.info('getPlayersAllTeams req is completed'));
  }

  getFilteredTeams(inputs) {
    const query = inputs.query;
    this.filteredTeams = this.commonUtilsService.filterTeams(query, this.teamsList);
  }
  getTeamsPlayers(event) {

  }
  getFilteredPlayers(input) {
    const query = input.query;
    this.filteredPlayers = this.commonUtilsService.filterPlayers(query, this.playersList);
    console.info(this.filteredPlayers);
  }

  onSelectedTeam(value) {
    console.info('Selected Team is', value);
    this.playingXiForm.patchValue({batting_team: value});
  }
  submitPlayingXI() {
    console.info('Submitting playing XI: ', this.playingXiForm.value);
    this.liveScoreService.submitPlayingXI(this.playingXiForm.value).takeUntil(this.ngUnsubscribe).subscribe(
      res => this.playingXiFormResponce = res,
      (err) => console.error('onSubmitBasicDetails: Res Error =>', err),
      () => console.info('Match Info by Umpire server request completed with resp: ', this.playingXiFormResponce));
  }
}
