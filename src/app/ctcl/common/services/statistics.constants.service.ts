import {Injectable} from "@angular/core";
/**
 * Created by HudaZulifqar on 9/10/2017.
 */
@Injectable()
export class StatisticsConstantsService {

  battingRecordsTableSettings = {
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
      playerFullName: {
        title: 'Name',
        type: 'string',
      },
      matches: {
        title: 'Matches',
        type: 'number',
      },
      innings: {
        title: 'Innings',
        type: 'number',
      },
      runs: {
        title: 'runs',
        type: 'number',
      },
      average: {
        title: 'average',
        type: 'number',
      },
      hundreds: {
        title: 'Hundred',
        type: 'number',
      },
      fifties: {
        title: 'Fifty',
        type: 'number',
      },
      caught: {
        title: 'Caught',
        type: 'number',
      },
      cAndB: {
        title: 'C&B',
        type: 'number',
      }

    },
  };
}
