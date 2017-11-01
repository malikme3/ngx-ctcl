import {NbMenuItem} from '@nebular/theme';

export const CTCL_MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Ctcl ctcl Home',
        icon: 'nb-home',
        link: '/ctcl/home',
        home: true,
    },
    {
        title: 'CTCL FEATURES',
        group: true,
    },
    {
        title: 'Matches',
        icon: 'nb-keypad',
        link: '/ctcl/matches',
        children: [
            {
                title: 'Results',
                link: '/ctcl/matches/results',
            },
            {
                title: 'Points Tables',
                link: '/ctcl/matches/pointsTables',
            },
            {
                title: 'Schedule',
                link: '/ctcl/matches/scheduleView',
            },
        ],
    },
    {
        title: 'Statistics',
        icon: 'nb-compose',
        children: [
            {
                title: 'Batting Statistics',
                link: '/ctcl/statistics/battingRecords',
            },
        ],
    },
    {
        title: 'Clubs',
        icon: 'nb-location',
        children: [
            {
                title: 'News',
                link: '/ctcl/clubs/teamsview',
            },
            {
                title: 'Clubs',
                link: '/ctcl/clubs/clubsview',
            },
        ],
    },
    {
        title: 'Players',
        icon: 'nb-person',
        children: [
            {
                title: 'Player Profile',
                link: '/ctcl/players/plyersProfile',
            },
        ],
    },
    {
        title: 'Aggregate',
        icon: 'nb-edit',
        children: [
            {
                title: 'Submit Score',
                icon: 'nb-gear',
                children: [{
                    title: 'Basic Match Details',
                    link: '/ctcl/aggregate/basic-details',
                },
                ],
            },
        ],
    },

];
