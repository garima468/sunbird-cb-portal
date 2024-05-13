import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ws-microsotes',
  templateUrl: './microsotes.component.html',
  styleUrls: ['./microsotes.component.scss'],
})
export class MicrosotesComponent implements OnInit {
  sectionList = [
    {
      'active': true,
      'enabled': true,
      'title': '',
      'key': 'row1',
      'order': 1,
      'column': [
        {
          'active': true,
          'enabled': true,
          'key': 'banner',
          'title': '',
          'colspan': 12,
          'data':  {
            logo: '/assets/instances/eagle/app_logos/KarmayogiBharat_Logo_Horizontal.svg',
            title: 'Department Of Education',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            sliders: [
              {
                'active': true,
                'banners': {
                  'l': 'assets/instances/eagle/banners/orgs/new-banner/6/l.png',
                  'm': 'assets/instances/eagle/banners/orgs/new-banner/6/m.png',
                  's': 'assets/instances/eagle/banners/orgs/new-banner/6/s.png',
                  'xl': 'assets/instances/eagle/banners/orgs/new-banner/6/l.png',
                  'xs': 'assets/instances/eagle/banners/orgs/new-banner/6/s.png',
                  'xxl': 'assets/instances/eagle/banners/orgs/new-banner/6/l.png',
                },
                'redirectUrl': '/app/curatedCollections/do_1137524714202480641252',
                'queryParams': {
                  'tab': 'Learn',
                  'q': 'Salesforce',
                  'lang': 'en',
                  'f': '{}',
                },
                'title': '',
              },
              {
                'active': true,
                'banners': {
                  'l': 'assets/instances/eagle/banners/orgs/new-banner/4/l.png',
                  'm': 'assets/instances/eagle/banners/orgs/new-banner/4/m.png',
                  's': 'assets/instances/eagle/banners/orgs/new-banner/4/s.png',
                  'xl': 'assets/instances/eagle/banners/orgs/new-banner/4/l.png',
                  'xs': 'assets/instances/eagle/banners/orgs/new-banner/4/s.png',
                  'xxl': 'assets/instances/eagle/banners/orgs/new-banner/4/l.png',
                },
                'redirectUrl': '/app/organisation/dopt',
                'queryParams': {
                  'tab': 'Learn',
                  'q': 'Salesforce',
                  'lang': 'en',
                  'f': '{}',
                },
                'title': '',
              },
              {
                'active': true,
                'banners': {
                  'l': 'assets/instances/eagle/banners/orgs/new-banner/2/l.png',
                  'm': 'assets/instances/eagle/banners/orgs/new-banner/2/m.png',
                  's': 'assets/instances/eagle/banners/orgs/new-banner/2/s.png',
                  'xl': 'assets/instances/eagle/banners/orgs/new-banner/2/l.png',
                  'xs': 'assets/instances/eagle/banners/orgs/new-banner/2/s.png',
                  'xxl': 'assets/instances/eagle/banners/orgs/new-banner/2/l.png',
                },
                'redirectUrl': '/app/globalsearch',
                'queryParams': {
                  'tab': 'Learn',
                  'q': 'Salesforce',
                  'lang': 'en',
                  'f': '{}',
                },
                'title': '',
              },
            ],
          },
        },
      ],
    },
    {
      'active': true,
      'enabled': true,
      'title': '',
      'key': 'row2',
      'order': 2,
      'column': [
        {
          'active': true,
          'enabled': true,
          'key': 'stats',
          'title': '',
          'colspan': 6,
          'data':  [
            {
              icon: 'assessment',
              value: 28464,
              label: 'Total Content',
              colspan: 6,
            },
            {
              icon: 'video_library',
              value: 4.2,
              label: 'Average Rating',
              colspan: 6,
            },
            {
              icon: 'attachment',
              value: 28464,
              label: 'Total Enrollments',
              colspan: 6,
            },
            {
              icon: 'image',
              value: 28464,
              label: 'Total Certificates issued',
              colspan: 6,
            },
          ],
        },
        {
          'active': true,
          'enabled': true,
          'key': 'calendar',
          'title': '',
          'colspan': 6,
          'data':  [{
            'date': '1-04-2024' ,
            'title': 'POSH webinar session',
            'description': 'POSH webinar session',
          },
          {
            'date': '5-04-2024' ,
            'title': 'PPF webinar session',
            'description': 'PPF webinar session',
          }],
        },
      ],
    },
    {
      'active': true,
      'enabled': true,
      'title': '',
      'key': 'row4',
      'order': 3,
      'column': [
        {
          'active': true,
          'enabled': true,
          'key': 'contentStrip',
          'title': 'Popular courses',
          'data':  {
            'order': 4,
            'strips': [
              {
                'active': true,
                'key': 'recentlyAdded',
                'logo': 'school',
                'title': 'Recently Added',
                'stripTitleLink': {
                  'link': '',
                  'icon': '',
                },
                'sliderConfig': {
                  'showNavs': true,
                  'showDots': true,
                  'maxWidgets': 12,
                },
                'stripBackground': '',
                'titleDescription': 'Recently Added',
                'stripConfig': {
                  'cardSubType': 'standard',
                },
                'viewMoreUrl': {
                  'path': '/app/seeAll',
                  'viewMoreText': 'Show all',
                  'queryParams': {
                    'key': 'recentlyAdded',
                  },
                  'loaderConfig': {
                    'cardSubType': 'card-portrait-click-skeleton',
                  },
                  'stripConfig': {
                    'cardSubType': 'card-portrait-click',
                  },
                },
                'loader': true,
                'loaderConfig': {
                  'cardSubType': 'card-standard-skeleton',
                },
                'tabs': [
                ],
                'filters': [],
                'request': {
                  'searchV6': {
                    'request': {
                      'filters': [
                        {
                          'primaryCategory': [
                            'Course',
                          ],
                          'contentType': [
                            'Course',
                          ],
                        },
                      ],
                      'query': '',
                      'sort_by': {
                        'lastUpdatedOn': 'desc',
                      },
                      'fields': [
                        'name',
                        'appIcon',
                        'instructions',
                        'description',
                        'purpose',
                        'mimeType',
                        'gradeLevel',
                        'identifier',
                        'medium',
                        'pkgVersion',
                        'board',
                        'subject',
                        'resourceType',
                        'primaryCategory',
                        'contentType',
                        'channel',
                        'organisation',
                        'trackable',
                        'license',
                        'posterImage',
                        'idealScreenSize',
                        'learningMode',
                        'creatorLogo',
                        'duration',
                        'avgRating',
                      ],
                    },
                  },
                },
              },

            ],
          },
        },
      ],
    },
    {
      'active': true,
      'enabled': true,
      'title': '',
      'key': 'row4',
      'order': 4,
      'column': [
        {
          'active': true,
          'enabled': true,
          'key': 'users',
          'title': '',
          'colspan': 12,
          'data':  '',
        },
      ],
    },
    {
      'active': true,
      'enabled': true,
      'title': '',
      'key': 'row5',
      'order': 5,
      'column': [
        {
          'active': true,
          'enabled': true,
          'key': 'competency',
          'title': '',
          'colspan': 12,
          'data':  '',
        },
      ],
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}