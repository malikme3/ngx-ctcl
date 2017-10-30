/* tslint:disable */
import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ClubsService} from "../../../common/services/clubs.service";

@Component({
    selector: "ctcl-clubs-page",
    templateUrl: "./clubspage.component.html",
    styleUrls: ['./clubspage.component.scss'],
    // providers : [MessageService],
})

export class ClubsPageComponent {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    clubs: any;
    clubsInfor: any;
    clubsNames: any[] = [];
    roles: any
    data: any;
    clubMap = new Map<string, Map<string, string>>();
    clubChild = new Map<string, string>();
    parents: any[] = [];
    clubChildren: any = [];
    ctcl: any[] = [];
    clubTeamsList: any[];
    private ctclOrder = new Subject<ctclTree>();

    rrccClub: any = [];
    teams_rrcc: any[] = [];
    teams_rrcc_data: any[] = [];
    rrccClubTeams: any[] = [];
    acaClub: any[] = [];
    acaClubTeams: any[] = [];
    hcaClub: any[] = [];
    hcaClubTeams: any[] = [];

    rrcc_name = "Round Rock Cricket Club";
    president: any;
    vice_president: any;
    secretary: any;
    treasurer: any;

    selectedCar: any;
    msgs: any[];
    items: any[];


    hca_name = "Hill Country Cricket Association";
    aca_name = "Austin Cricket Association (ACA)";
    tree: any = {
        value: 'CTCL Clubs',
        children: [
            {
                value: 'Rounf Rocks',
                children: [
                    {value: 'Lions'},
                    {value: 'Laggan'},
                    {value: 'Tiger'},
                ]
            },
            {
                value: 'HCCA',
                children: [
                    {value: 'Ravens'},
                    {value: 'Gladiators'},
                    {value: 'Hawks'},
                ]
            }
        ]
    };

    constructor(private clubsService: ClubsService) {

    }

    ngOnInit() {
        this.clubsList();
        this.clubsInfo();
        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar)},
            //label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar)}
        ];
        //this.playersRole();
    };

    viewCar(val: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Club Selected', detail: val.club_name + ' - ' + val.ground_name});
    };

    clubsList() {
        console.info("Fetching clubs list: ")
        const types$ = this.clubsService.getClubLists();
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.clubs = responce,
            (err) => console.error('getClubLists: Response Error =>', err),
            () => this.clubsRequestCompleted(this.clubs));
    };

    clubsInfo() {
        console.info("Fetching clubs list: ")
        const types$ = this.clubsService.getClubsInfo();
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.clubsInfor = responce,
            (err) => console.error('getClubLists: Response Error =>', err),
            () => this.clubsInforRequestCompleted(this.clubsInfor));
    }

    playersRole() {
        console.info("Fetching clubs list: ")
        const types$ = this.clubsService.getPlayersRoles();
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.roles = responce,
            (err) => console.error('getPlayersRoles: Res Error =>', err),
            () => this.playersRoleReqCompleted());
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    clubsInforRequestCompleted(value) {
        console.log("clubsInfo: ", value);
    }

    clubsRequestCompleted(value) {
        //this.getClubsName(value);
        this.playersRole();
        let expanded = true;

        let rrcc_id = 10;
        let aca_id = 8;
        let hca_id = 1;
        for (let club of this.clubs) {

            if (club.president_name) {
                this.president = club.president_name;
            }
            if (club.vice_president_name) {
                this.vice_president = club.vice_president_name;
            }
            if (club.secretary_name) {
                this.secretary = club.secretary_name;
            }
            if (club.treasurer_name) {
                this.treasurer = club.treasurer_name;
            }

            if (this.rrcc_name === club.club_name) {
                /*  this.rrccClubTeams.push({
                    label: club.team_abbrev,
                    team_id: club.team_id,
                    children: [{label: 'Captain', expanded: true, children: [{label: club.captain_name}]},
                      {label: 'Vice Captain', expanded: true, children: [{label: club.vice_captain_name}]}]
                  });*/

                this.teams_rrcc.push({
                    name: club.team_abbrev,
                    captain: club.captain_name,
                    vice_captain: club.vice_captain_name,
                    team_id: club.team_id,
                    color: club.club_color,
                    clubd: club.club_name
                });

            } else if (this.aca_name === club.club_name) {
                this.teams_rrcc.push({
                    name: club.team_abbrev,
                    captain: club.captain_name,
                    vice_captain: club.vice_captain_name,
                    team_id: club.team_id,
                    color: club.club_color,
                    clubd: club.club_name
                });
            } else if (this.hca_name === club.club_name) {

                this.teams_rrcc.push({
                    name: club.team_abbrev,
                    captain: club.captain_name,
                    vice_captain: club.vice_captain_name,
                    team_id: club.team_id,
                    color: club.club_color,
                    clubd: club.club_name
                });
            }
        }

        this.rrccClub.push({label: this.rrcc_name, club_id: rrcc_id, expanded: true, children: this.rrccClubTeams});
        this.acaClub.push({label: this.aca_name, club_id: aca_id, expanded: true, children: this.acaClubTeams});
        this.hcaClub.push({label: this.hca_name, club_id: hca_id, expanded: true, children: this.hcaClubTeams});
        this.ctcl.push({

            label: "Leagues Clubs",
            expanded: true,
            children: [{label: this.rrcc_name}, {label: this.hca_name}, {label: this.aca_name}]

        });

        /* {
           label: 'Organisers', expanded: true, children: [{label: 'President', children: [{label: this.president}]},
           {label: 'Vice President', children: [{label: this.vice_president}]},
           {label: 'Secretarty', children: [{label: this.secretary}]},
           {label: 'Treasurer', children: [{label: this.treasurer}]}]
         },*/
        this.teams_rrcc_data = this.teams_rrcc;
    }

    /*
      getClubsName(value) {

        for (let val of value) {

          if (!this.clubsNames[val.club_name]) {
            this.clubsNames[val.club_name] = [];
          }
          ;
          if (!this.clubsNames[val.club_name].clubsNames) {
            this.clubsNames[val.club_name].push({
              vin: val.club_name
            });
          }

          if (!this.clubsNames[val.club_name].ground_id) {
            this.clubsNames[val.club_name].push({
              brand: val.ground_id
            });
          }
          if (!this.clubsNames[val.club_name].secretary_name) {
            this.clubsNames[val.club_name].push({
              year: val.president_name,
            });
          }
          if (!this.clubsNames[val.club_name].vice_president_name) {
            this.clubsNames[val.club_name].push({
              color: val.vice_president_name,
            });
          }

        }
        console.log("clubsName :", this.clubsNames);

      }
    */

    playersRoleReqCompleted() {
        console.log("Roles are ", this.roles);

    };
}

interface ctclTree {
    label?: string;
    expanded?: boolean;
    children?: string[];
}

interface clubChildren {
    label?: string;
}
