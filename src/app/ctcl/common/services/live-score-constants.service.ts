import {Injectable} from '@angular/core';

/**
 * Created by HudaZulifqar on 11/12/2017.
 */
@Injectable()
export class LiveScoreConstants {
  runs_types = ['0', '1', '2', '3', '4', '6'];
  extras_types = ['Select Extras Type', 'wide', 'No Ball', 'Byes', 'leg Byes', 'Other'];
  out_types = ['Select Out Type', 'Caught', 'Bowled', 'Run Out', 'Stumped', 'C & B', 'Other'];
}
