/**
 * Created by HudaZulifqar on 6/24/2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class MatchesConstants {
  checkLeagues;
  checkVenues;
  checkResults;
  yesNoStatus;
  playerOutType;
  battingPositions;
  scheduelTable = {
    title: 'Matches Fixture',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      /*      seasonId: {
       title: 'Season ID',
       type: 'number'
       },*/
      seasonName: {
        title: 'Season Name',
        type: 'string'
      },
      teams: {
        title: 'Teams',
        type: 'string'
      },
      formatted_date: {
        title: 'Date',
        type: 'string'
      },
      groundName: {
        title: 'Ground',
        type: 'string'
      },
      umpireName: {
        title: 'Umpire',
        type: 'string'
      },
      week: {
        title: 'Week',
        type: 'string'
      }
    }
  }


  scoreTableSettings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      game_date: {
        title: 'Date',
        type: Date,
      },
      host_team: {
        title: 'Host Team',
        type: 'string',
      },
      guest_team: {
        title: 'Guest Team',
        type: 'string',
      },
      man_of_the_match: {
        title: 'MOM',
        type: 'string',
      },
      result: {
        title: 'Result',
        type: 'string',
      },

    },
  };
  // for detailed score card
  detailedScoreSettings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    hideSubHeader: true,
    columns: {

      batting_position: {
        title: '',
        type: 'number',
      },
      BatterLName: {
        title: '',
        type: 'string',
        width: '10px'
      },
      BatterFName: {
        title: '',
        type: 'string',
        width: '10px'
      },
      runs: {
        title: 'R',
        type: 'number',
        width: '5px'
      },
      balls: {
        title: 'B',
        type: 'number',
        width: '5px'
      },
      fours: {
        title: '4s',
        type: 'number',
        width: '5px'
      },
      sixes: {
        title: '6s',
        type: 'number',
        width: '5px'
      },

      HowOutAbbrev: {
        title: '',
        type: 'string',
      },
      AssistLName: {
        title: '',
        type: 'string',
      },
      AssistFName: {
        title: '',
        type: 'string',
      },
      AssistFInitial: {
        title: '',
        type: 'string',
      },
      BowlerLName: {
        title: '',
        type: 'string',
      },
      BowlerFName: {
        title: '',
        type: 'string',
      },
      BowlerFInitial: {
        title: '',
        type: 'string',
      }
      ,
      Batter_id: {
        title: 'SR',
        type: 'number',
      }
    }
  };

  getYesNo() {
    this.yesNoStatus = [{
      yes: {
        label: 'Yes',
        value: '0',
      },
      no: {
        label: 'No',
        value: '1',
      }
    }]
    return this.yesNoStatus;
  }

  getLeagues() {
    this.checkLeagues = [{
      name: '20 Overs',
      leagueId: 31,
      seasonId: 2,
      checked: false,
      disabled: false,
      class: 'col-md-4'
    }, {
      name: '30 Overs',
      disabled: true,
      checked: false,
      class: 'col-md-4'
    }, {
      name: '35 Overs',
      leagueId: 30,
      seasonId: 5,
      checked: false,
      disabled: false,
      class: 'col-md-4'
    }, {
      name: '40 Overs',
      checked: false,
      disabled: true,
      class: 'col-md-4'
    }]
    return this.checkLeagues;

  }

  getCheckVenues() {
    this.checkVenues = [{
      name: 'RRCG',
      value: 16,
      checked: false,
      disabled: false,
      class: 'col-md-4'
    }, {
      name: 'HCCG',
      value: 14,
      checked: false,
      disabled: false,
      class: 'col-md-4'
    }, {
      name: 'ACAG',
      value: 24,
      checked: false,
      disabled: false,
      class: 'col-md-4'
    }, {
      name: 'TCCG',
      value: 22,
      checked: false,
      disabled: true,
      class: 'col-md-4'
    }];
    return this.checkVenues;
  }

  getCheckResults() {
    this.checkResults = [
      {
        text: 'Match Completed With Result',
        name: 'completed',
        value: 1,
        checked: false,
        class: 'col-md-3'
      }, {
        text: 'Match Tied',
        name: 'tied',
        value: 1,
        checked: false,
        class: 'col-md-3'
      }, {
        text: 'Won by forfeit',
        name: 'forfeit',
        value: 1,
        checked: false,
        class: 'col-md-3'
      }, {
        text: 'Match Cancelled- No Play',
        name: 'cancelled',
        value: 1,
        checked: false,
        class: 'col-md-3'
      }, {
        text: 'Match Cancelled- SomePlay',
        name: 'cancelledplay',
        value: 1,
        checked: false,
        class: 'col-md-3'
      }];
    return this.checkResults;
  }

  getPlayerOutType() {
    this.playerOutType = [
      {label: 'Did not Bat', value: 'dnb', position: 0},
      {label: 'LBW', value: 'lbw', position: 0},
      {label: 'Not Out', value: 'notout', position: 0},
      {label: 'Bowled', value: 'bowled', position: 0},
      {label: 'Caught', value: 'caught', position: 0},
      {label: 'Caught && Bowled', value: 'c&b', position: 0},
      {label: 'Run Out', value: 'runout', position: 0},
      {label: 'Hit Wicket', value: 'hitwicket', position: 0},
      {label: 'Retired Hurst', value: 'retdhurt', position: 0},
      {label: 'Hit Twice', value: 'hittwice', position: 0},
      {label: 'Handled Ball', value: 'handledball', position: 0},
      {label: 'Absent Hurt', value: 'absenthurt', position: 0},
      {label: 'Absent Ill', value: 'absentill', position: 0},
      {label: 'Retired Out', value: 'Retiredout', position: 0},
      {label: 'Obstructing the field ', value: 'obstrfield', position: 0}

    ];
    return this.playerOutType;
  }

  getBattingPositions() {
    this.battingPositions = [
      {
        id: 1,
        type: 'First Batting Position',
        wicket: 'fow1'
      },
      {
        id: 2,
        type: 'Second Batting Position',
        wicket: 'fow2'

      },
      {
        id: 3,
        type: 'Third Batting Position',
        wicket: 'fow3'
      },
      {
        id: 4,
        type: 'Fourth Batting Position',
        wicket: 'fow4'
      },
      {
        id: 5,
        type: 'Fifth Batting Position',
        wicket: 'fow5'
      }, {
        id: 6,
        type: 'sixth Batting Position',
        wicket: 'fow6'
      },
      {
        id: 7,
        type: 'Seventh Batting Position',
        wicket: 'fow7'
      },
      {
        id: 8,
        type: 'Eighth Batting Position',
        wicket: 'fow8'
      },
      {
        id: 9,
        type: 'Ninth Batting Position',
        wicket: 'fow9'
      },
      {
        id: 10,
        type: 'Tenth Batting Position',
        wicket: 'fow10'
      }
      ,
      {
        id: 11,
        type: 'Eleventh Batting Position'
      }];

    return this.battingPositions;
  }
}
