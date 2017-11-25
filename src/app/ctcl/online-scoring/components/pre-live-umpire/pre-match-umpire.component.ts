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
import {Component} from '@angular/core';
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
  filteredTeams;

  constructor(private fb: FormBuilder,
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
    this.preMatchUmpireForm = this.fb.group({ // <-- the parent FormGroup
      id: '',
      league: '',
      ground: '',
      home_team: '',
      guest_team: '',
      toss_won_team: '',
      batting_frst_team: '',
      batting_second_team: '',
      umpire_team: '',
      maxovers: '',
      match_date: '',
      match_week: '',
      comments: '',
      //      batting_team: '',
      //      current_ball_runs: '',
      //      is_batsman_out: '',
      //      extras_types: '',
      //      live_game_id: '',
      //      match: this.fb.group(this.liveScoreConstants.match_object),
      //      batsman_1: this.fb.group(this.liveScoreConstants.batsman_object),
      //      batsman_2: this.fb.group(this.liveScoreConstants.batsman_object),
      //      bowler: this.fb.group(this.liveScoreConstants.bowler_object),
      //      wicket: this.fb.group(this.liveScoreConstants.wicket_info_object),

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
  onSelectedTeam(value) {
    console.info('Selected Team is', value);
    this.preMatchUmpireForm.patchValue({batting_team: value});
  }
}
