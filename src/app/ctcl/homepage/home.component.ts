/* tslint:disable */
import {Component} from '@angular/core';
import {HomePageService} from "../common/services/homepage.service";
import {ClubsService} from "../common/services/clubs.service";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import 'rxjs/add/operator/takeUntil';

@Component({
    selector: 'ctcl-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    points;
    newsList: any;
    groups;
    data: any;
    images: any[];
    images_odd: any[];
    //Default year : 2017
    year: String = '2017';

    constructor(private router: Router, private homePageService: HomePageService, private clubsService: ClubsService) {

        this.data = {
            datasets: [{
                data: [6, 4, 2, 12],
                backgroundColor: [
                    "#ff96ec",
                    "#a9c05e",
                    "#FFCE56",
                    "#8bebed"
                ],
                label: 'My dataset'
            }],
            labels: ['Played', 'Won', 'Lost', 'Total']
        }


    }

    ngOnInit(): void {
        this.points = this.teamsStanding();
        this.groups = this.seasonGroups(this.year);
        this.images = this.homePageService.getPhoto();
        this.images_odd = this.homePageService.getPhoto_odd();
        this.ctclNews();

    }

    seasonGroups(year: String) {
        const types$ = this.homePageService.getSeasonGroups(year);
        console.info("types$: ", types$);
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.groups = responce,
            (err) => console.error('next matches: Response Error =>', err),
            () => console.log("Request is completed for season groups"));

    }

    teamsStanding() {
        const types$ = this.homePageService.getTeamStanding();
        console.info("types$: ", types$);
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.points = responce,
            (err) => console.error('next matches: Response Error =>', err),
            () => console.log("Request is completed for teams standings"));
    }


    ctclNews() {

        const types$ = this.clubsService.getCtclNews();
        console.info("types$: ", types$);
        types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.newsList = responce,
            (err) => console.error('next matches: Response Error =>', err),
            () => console.log("Request is completed for ctcl news"));
    }

    ctclNewsReqCompleted() {
        console.log("ctclNews is completed", this.newsList)
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
