import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ctcl-d3-bar-chart',
    templateUrl:'d3-barchart.component.html',
    styleUrls: ['d3-barchart.component.scss']
})
export class D3BarChartComponent implements OnDestroy {

    results = [
        { name: 'Majid', value: 940 },
        { name: 'Zubair', value: 500 },
        { name: 'Saad', value: 200 },
    ];
    showLegend = true;
    showXAxis = true;
    showYAxis = true;
    xAxisLabel = 'Name';
    yAxisLabel = 'Runs';
    colorScheme: any;
    themeSubscription: any;

    constructor(private theme: NbThemeService) {
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors: any = config.variables;
            this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
