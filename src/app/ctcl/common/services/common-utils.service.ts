/**
 * Created by HudaZulifqar on 6/28/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ServicesConstants} from './constants.services';
import {BattinginputsPojo} from '../domain/battinginputs.pojo';

@Injectable()
export class CommonUtilsService {

  filterTeams(query, teams: any[]): any[] {
    console.info('In common service, input Val: ', query);
    const filtered: any[] = [];
    for (let i = 0; i < teams.length; i++) {
      const team = teams[i];
      if (team.label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        filtered.push(team);
      }
    }
    return filtered;
  }

  filterPlayers(query, players: any[]): any {

    const filtered: any[] = [];
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (player.label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        filtered.push(player);
      }
    }
    console.info('In common service, player input Query Val: ', query, ' and filtered: ', filtered);
    return filtered;
  }

  filteredOutTypes(query, types: any[]): any[] {
    console.info('In common service, input Val: ', query);
    const filtered: any[] = [];
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      if (type.label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        filtered.push(type);
      }
    }
    return filtered;
  }
}
