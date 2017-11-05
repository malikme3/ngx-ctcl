/**
 * Created by HudaZulifqar on 6/28/2017.
 */
/* tslint:disable */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ServicesConstants} from "./constants.services";
import {BattinginputsPojo} from "../domain/battinginputs.pojo";

@Injectable()
export class CommonUtilsService {

    filterTeams(query, teams: any[]): any[] {
        console.log("In common service, input Val: ", query)
        let filtered: any[] = [];
        for (let i = 0; i < teams.length; i++) {
            let team = teams[i];
            if (team.label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                filtered.push(team);
            }
        }
        return filtered;
    }

    filterPlayers(query, players: any[]): any[] {
        console.log("In common service, input Val: ", query)
        let filtered: any[] = [];
        for (let i = 0; i < players.length; i++) {
            let player = players[i];
            if (player.label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                filtered.push(player);
            }
        }
        return filtered;
    }
};
