var config = {
    style:  'mapbox://styles/meadowyt/cla8zoaem001d15p66p9g8xm1',
    accessToken: 'XXX',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Bike Lanes and Bike-Sharing Demand in Washington DC',
    subtitle: 'Accessibility of Disadvantaged Households',
    byline1: 'Photo from <a href="https://ddot.dc.gov/page/bicycle-lanes" target="_blank">ddot.dc.gov</a>',
    byline2: 'By Yuetong Wang',
    para1: "Bicycle travel has always been considered a low-carbon and healthy way of travel. In recent years, the development of the bike-sharing system has given more people (especially those without cars) more options for commuting and recreational trips. More affordable bicycles for short trips in urban areas can be a useful way to help people get around. With rising fuel prices, traffic congestion, and deteriorating environmental quality, the emergence of bike-sharing certainly offers a sustainable mode of transportation. Both shared bikes and e-scooters are examples of micro-transportation, which incorporates very small, low-occupancy vehicles (Bikeshare and E-Scooters in the U.S., 2022). According to a study in DC, the advent of bike-sharing has reduced traffic congestion in communities and neighborhoods by more than 4% (Hamilton & Wichman, 2018). Compared to personal bicycles, bike sharing makes people feel safer in terms of psychological perception as less risk of theft is avoided. Because they're more environmentally friendly and less expensive, bike-sharing systems have become an essential component of transportation services in major cities all over the world (Abdellaoui Alaoui & Koumetio Tekouabou, 2021). Thus, the bike-sharing project is not a new topic but something that has been booming for the past few years.As more cities and regions adopt bike-share systems, a better understanding of the factors that influence bike-share use can make it easier to promote low-carbon travel choices.",
    //para2: "Subsequently, more and more studies have begun to focus on the bike-sharing demand and bike-related infrastructure. Buck & Buehler (2012) found a significant correlation between the presence of bicycle lanes and the use of capital bike-sharing by examining data on capital bicycle-sharing trips in Washington DC between 2010 and 2011. Besides, based on many other existing studies, it is easy to find that bike-relevant infrastructure and facilities are the most important factors in the demand for the bike-sharing system.",
    para3: 'Washington, D.C., one of the first cities in the United States to launch a bike-sharing program, is now among the largest bike-sharing systems in the country. In 2008, the Capital Bikeshare system began operation, servicing Washington, D.C., and the suburbs in Virginia and Maryland that surround it. At the same time, the DDOT (District Department of Transportation) bike lane program has been operating in Washington, DC, since 2001. However, despite the infrastructure related to cycling in Washington, D.C. is constantly improving, the infrastructure associated with bike travel is still not well developed. Building bike lanes, especially protected bike lanes, has always been a challenge in Washington, D.C., due to road space constraints and other issues (Lazo, 2022).',
    footer: '<b>Note:</b> All images and maps (including those with data sources) were created by the author, except for those that have been attributed in the text. <br><b>References:</b> <br>(1) Abdellaoui Alaoui, E. A., & Koumetio Tekouabou, S. C. (2021). Intelligent management of bike sharing in smart cities using machine learning and Internet of Things. Sustainable Cities and Society, 67, 102702. https://doi.org/10.1016/j.scs.2020.102702 <br>(2) Bikeshare and e-scooters in the U.S. (2022). U.S. Department of Transportation Bureau of Transportation Statistics. https://data.bts.gov/stories/s/Bikeshare-and-e-scooters-in-the-U-S-/fwcs-jprj/ <br>(3) Buck, D. (2013). Encouraging Equitable Access to Public Bikesharing Systems. Institute of Transportation Engineers. ITE Journal, 83(3), 24–27. <br>(4) Buck, D., & Buehler, R. (2012). Bike Lanes and Other Determinants of Capital Bikeshare Trips (No. 12–3539). Article 12–3539. Transportation Research Board 91st Annual MeetingTransportation Research Board. https://trid.trb.org/view/1130348 <br>(5) Dehdari Ebrahimi, Z., Momenitabar, M., Nasri, A. A., & Mattson, J. (2022). Using a GIS-based spatial approach to determine the optimal locations of bikeshare stations: The case of Washington D.C. Transport Policy, 127, 48–60. https://doi.org/10.1016/j.tranpol.2022.08.008 <br>(6) Fishman, E. (2016). Cycling as transport. Transport Reviews, 36(1), 1–8. https://doi.org/10.1080/01441647.2015.1114271 <br>(7) Hamilton, T. L., & Wichman, C. J. (2018). Bicycle infrastructure and traffic congestion: Evidence from DC’s Capital Bikeshare. Journal of Environmental Economics and Management, 87, 72–93. https://doi.org/10.1016/j.jeem.2017.03.007 <br>(8) Hosford, K., & Winters, M. (2018). Who Are Public Bicycle Share Programs Serving? An Evaluation of the Equity of Spatial Access to Bicycle Share Service Areas in Canadian Cities. Transportation Research Record, 2672(36), 42–50. https://doi.org/10.1177/0361198118783107 <br> (9) Lazo, L. (2022, February 24). D.C. wants to double its 24 miles of protected bike lanes. It plans to start with 10 miles this year. Washington Post. https://www.washingtonpost.com/transportation/2022/02/03/dc-protected-bike-lanes/ <br> (10) McNeil, N., Dill, J., MacArthur, J., Broach, J., & Howland, S. (2017). Breaking Barriers to Bike Share: Insights from Residents of Traditionally Underserved Neighborhoods. TREC Final Reports. https://doi.org/10.15760/trec.176 <br>(11) Schneider, B. (2017, July 14). What Keeps Bike Share White. https://trec.pdx.edu/content/what-keeps-bike-share-white <br>(12) Smith, R. (2017). Where it’s easiest to live car-free in D.C. D.C. Policy Center. https://www.dcpolicycenter.org/publications/easiest-live-car-free-d-c/',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Installed Bikelanes',
            image: 'images/Installed Bikelanes.png',
            image2: 'images/legend_Installed Bikelanes.png',
            subtitle: '<b>Bike Lanes Length installed Per Year (Meters)</b> / Data Source: DDOT',
            description: 'The infrastructure related to riding in Washington, D.C. is constantly evolving and improving. Since 2001, the District Department of Transportation (DDOT) Bikeway Program has built 89 miles of bike lanes in Washington, DC. The graph shows that the peak of bike lane construction was between 2012 and 2014.',
            location: {
                center: [-77.04707, 38.89304],
                zoom: 12,
                pitch: 17.54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 1
                },
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0,
                },                
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0,
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ] 
        },
        { 
            id: 'second-chapter', alignment: 'left', hidden: false,
            title: 'Installed Protected Bikelanes',
            subtitle: '<b> People riding on the sidewalk </b> / By Lei Sun',
            description: "Beginning in 2009, the agency began installing protected bike lanes, also known as Cycle Tracks or separated bike lanes. In 2019, DDOT announced a plan to build 20 miles of new, protected bike lanes by the end of 2022. And in the past two years, Washington, D.C., has added 13 miles of protected bike lanes (<a href='https://www.washingtonpost.com/transportation/2022/02/03/dc-protected-bike-lanes/' target='_blank'>Lazo, 2022</a>). However, from the map, it's easy to see that the bike lanes are often disjointed and not fully covered, so much so that people are often faced with the difficult choice of whether to risk riding in the motorway or breaking into the sidewalk.",
            image: 'images/Riding Sidewalk.png',
            image2: 'images/legend_Protected Bikelanes.png',
            location: {
                center: [-77.04707, 38.89304],
                zoom: 12,
                pitch: 17.54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 1
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 1
                },
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0,
                },                
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0,
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            //video: 'images/2022_Washington_DC_Bike_Infrastructure.mp4',
            video2: 'https://www.youtube.com/embed/leljnocADy0',
            //video2: '<iframe width="1054" height="593" src="https://www.youtube.com/embed/leljnocADy0" title="2022 Washington DC Bike Infrastructure - How did they do it?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

            description4: 'The video above shows the video publisher on a bike ride with a friend experiencing some of the new protected bike lanes and bike infrastructure. This video illustrates that DC will essentially have to require protected bike infrastructure whenever there is a road project, which is probably why DC has such a fast pace of construction in such a short period of time.',
            location: {
              center: [-76.94420, 38.89304],
              zoom: 11,
              pitch: 0,
              bearing: 0,
            },
        },
        { 
            id: '2-chapter', alignment: 'center', hidden: false,
            description: "From the above maps, the spatial distribution of bike lanes and bike-share stations in Washington, DC, is assessed. As seen in the development of bike lanes in DC, the quality of newly installed bike lane infrastructure has improved over time, from simple bike lanes to protected bike lanes that separate cyclists from traffic. However, the existing bike lanes still do not have the ability to meet the needs of cyclists to ride safely, as many places do not have continuous and complete bike lanes. Safety concerns, particularly the perception of hazards from automobiles, are frequently highlighted as a key barrier to bicycle riding (Fishman, 2016). According to the study by McNeil and his colleagues at Portland State, concerns about traffic safety are the biggest barrier to cycling (48% of residents see it as a big barrier) (McNeil et al., 2017). It is not difficult to see that there's still plenty of room to improve DC's bike lanes. In fact, while this step-by-step approach to bike lane building has been successful in winning political, public, and administrative support, its disadvantages have been exposed accordingly: there are still many gaps in the city's bike route network because bike lane infrastructure is built when individual opportunities arise, rather than as part of an integrated network (Buehler et al., 2021). <br>  <br> As more and more areas adopting bike-sharing systems, a better understanding of the basic demographics in DC can make it easier to promote low-carbon travel options, and more importantly, provide a new choice for low-income or no-vehicle households.",
            location: {
                center: [-76.94420, 38.89304],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 1
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 1
                },
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0,
                },                
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'Low-Income-Households',
                    opacity: 0,
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: 'No Vehicle Households',
            image: 'images/Change of NoVehicle Households.jpeg',
            image2: 'images/legend_No Vehicle Households.png',
            subtitle: '<b>Proportion changes of no-vehicle households</b> / By <a href="https://www.dchealthmatters.org/indicators/index/view?indicatorId=281&localeId=130951" target="_blank">DC Health Matters</a>',
            description: "A quick look at the distribution of the number of households without a car shows that most of the no-vehicle households are concentrated in the southeast and central areas of DC. Here, not having a car may not be an active choice but a reactive way of coping due to financial pressures and other factors. But we can also see from the map that these areas lack reliable transportation options and infrastructure, and this means that not having a car exacerbates other difficulties, potentially lengthening residents' commute times and reducing access to grocery stores and other amenities (<a href='https://www.dcpolicycenter.org/publications/easiest-live-car-free-d-c/' target='_blank'>Smith, 2017</a>).",
            location: {
                center: [-76.94420, 38.89045],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: 3,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 1
                },
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0,
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Percentage of Low Income Households',
            //image: 'images/source.png',
            image2: 'images/legend_Percentage Low Income Households.png',
            description: 'According to the previous criteria for classifying low-income households, in this study, families with annual household incomes less than 20K are considered low-income households. As can be seen from the graph, low-income households are also mostly concentrated in the southeast of DC. And these, the people who might benefit most from having more modes of transportation like bicycles, are underserved.',
            location: {
                center: [-76.94420, 38.89045],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: 3,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                },
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0,
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 1,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                ],
            onChapterExit: [
                {
                    layer: 'Low-Income-Households',
                    opacity: 0,
                },
                ]
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description2: "The above analysis and the following map of the basic demographic data show that although bike-sharing can be used as a mode of transportation for commuting and recreation, the distribution of bike lanes in D.C. is not comprehensive. The inequities in the distribution of bike lanes and bike-sharing stations have always been a serious issue. While people without cars are more likely to take bike share and other forms of public transportation, their accessibility to these facilities is worrisome.",
            image2: 'images/Bike Sharing Loc.png',
            description3: "In addition to the visualization shown above, many other existing studies have found that areas farther from downtown Washington, D.C., currently have a greater lack of bike-share docking stations, and these may also be located in purely residential areas (Dehdari Ebrahimi et al., 2022), which are also often low-income and people of color neighborhoods. Even if the consensus is that low-income people are more likely to be carless and rely on public transportation such as shared bikes and buses, and subways to get around, more research has revealed that the majority of people who ride public bicycles are white, employed, and have better income and educational levels (Hosford & Winters, 2018). Both people of color and low-income residents experience more barriers to bicycling and using bike-sharing than higher-income white residents (McNeil et al., 2017). Most of the current bike-sharing systems are dedicated to certain populations to ensure a high enough level of profitability, with a corresponding lack of attention to disadvantaged communities. As of 2013, only 19% of Capital Bike's annual members are non-white, and riders earning less than $50,000 per year make up only 24% of members (Buck, 2013). Black people make up around 50% of the population in Washington, D.C., but only 4% of Capital Bikeshare members as of 2016 (Schneider, 2017). Thus, it's important to understand the activity patterns of groups who use bike-sharing and the commuting and recreational travel patterns of people without cars or in low-income households. At the same time, further attempting to reveal inequalities in geospatial and facility distribution, with the aim of making recommendations for a better infrastructure setup, is even more crucial.",
            //video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
              center: [-77.03135, 38.89187],
              zoom: 12,
              pitch: 0,
              bearing: 42.44,
            },
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Bike Share Usage',
            image: 'images/why no longer use CapiBike.png',
            subtitle: '<b>Why no longer a Capital Bikeshare Member </b>/ from <a href="https://d21xlh2maitm24.cloudfront.net/wdc/Capital-Bikeshare_2016MemberSurvey_Final-Report.pdf?mtime=20170303165531" target="_blank">2016 Capital BikeshareMember Survey Report</a>',
            description: 'By calculating the number of departures from each bike-sharing station within October 2022 using Capital Bikeshare trip history data, the results of the usage of shared bicycles are obtained as shown in the figure on the right. It can be found that the stations with more ridership are concentrated in the central area, which is also where the bike lanes are more dense. Areas with more bike lanes have a higher usage rate for bike sharing than peripheral areas.',
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-77.03135, 38.89187],
              zoom: 12,
              pitch: 0,
              bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 1
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.5,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                ]
        },
        {
            id: '5th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Change in Ridership from 2019 to 2022',
            image: 'images/Ridership Changes.png',
            subtitle: 'Data Source: <a href="https://s3.amazonaws.com/capitalbikeshare-data/index.html" target="_blank">Capital Bikeshare trip history data</a>',
            description: "To corroborate that bike-sharing stations located on bike lanes are more likely to attract cyclists, this study conducts an in-depth analysis of four bike-sharing stations. None of the four selected sites had an adjacent bike lane until 2020, while the experimental group represented by the orange dots and lines (station IDs: <u>31640</u> and <u>31607</u>) had a newly installed bike lane between 2020-2021, and the two control groups represented by the blue dots and lines (station IDs: <u>31613</u> and <u>31641</u>) did not have a new bike lane installation. The change curve of monthly ridership from 2019-2022 shows that the experimental group with newly installed bike lanes has little change in ridership under the influence of the epidemic and the season, while the control group has a more significant decrease in ridership.",
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-77.03135, 38.89187],
              zoom: 12,
              pitch: 0,
              bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.5,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 0
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                {
                    layer: 'four-stations',
                    opacity: 1
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                ]
        },
        {
            id: '6-1-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Change in Daily Ridership',
            image: 'images/Sum Ridership Two Stations 1.png',
            image2: 'images/Change in Daily Ridership 1.png',
            subtitle: 'Data Source: <a href="https://s3.amazonaws.com/capitalbikeshare-data/index.html" target="_blank">Capital Bikeshare trip history data</a>',
            description: 'To show the impact of the bike lanes more clearly, this study then extracted daily ridership data for October 2019 and October 2022 for the two groups of stations separately. It can be seen that the experimental group (station ID: <u>31640</u>) has a flatter riding volume at the same time in both years; while the control group (station ID: <u>31641</u>) has a significant decrease in riding volume in 2022 compared to 2019.',
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-76.99676, 38.89488],
              zoom: 16.5,
              pitch: 72.5,
              bearing: -100.12,
              speed: .8, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 1
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                }
                ]
        },
        {
            id: '6-2-chapter',
            alignment: 'left',
            hidden: true,
            //title: 'Bike Share Usage',
            //image: 'images/why no longer use CapiBike.png',
            //subtitle: '<b>Why no longer a Capital Bikeshare Member </b>/ from <a href="https://d21xlh2maitm24.cloudfront.net/wdc/Capital-Bikeshare_2016MemberSurvey_Final-Report.pdf?mtime=20170303165531" target="_blank">2016 Capital BikeshareMember Survey Report</a>',
            //description: 'By calculating the number of departures from each bike-sharing station within October 2022 using Capital Bikeshare trip history data, the results of the usage of shared bicycles are obtained as shown in the figure on the right. It can be found that the stations with more ridership are concentrated in the central area, which is also where the bike lanes are more dense. Areas with more bike lanes have a higher usage rate for bike sharing than peripheral areas.',
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-76.99966, 38.89488],
              zoom: 16.5,
              pitch: 65.5,
              bearing: -46.92,
              //speed: 0.2, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 1
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                }
                ]
        },
        {
            id: '6-3-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Change in Daily Ridership',
            image: 'images/Sum Ridership Two Stations 2.png',
            image2: 'images/Change in Daily Ridership 2.png',
            subtitle: 'Data Source: <a href="https://s3.amazonaws.com/capitalbikeshare-data/index.html" target="_blank">Capital Bikeshare trip history data</a>',
            description: 'Similar to above, the experimental group (station ID: <u>31607</u>) rides were flatter at the same time in both years, while the control group (station ID: <u>31613</u>) rides in 2022 decreased significantly compared to 2019.',
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-76.99100, 38.88098],
              zoom: 16.5,
              pitch: 65.2,
              bearing: -97.12,
              speed: .8, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 1
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                }
                ]
        },
        {
            id: '6-4-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Change in Ridership',
            //image: 'images/Self-Drawn Route Map.png',
            //subtitle: '<b>Why no longer a Capital Bikeshare Member </b>/ from <a href="https://d21xlh2maitm24.cloudfront.net/wdc/Capital-Bikeshare_2016MemberSurvey_Final-Report.pdf?mtime=20170303165531" target="_blank">2016 Capital BikeshareMember Survey Report</a>',
            description: 'From the above analysis, it is clear that the change in ridership between 2019-2022 due to epidemic and seasonal influences at the bike-sharing stations categorized as experimental (i.e., with new bike lanes after 2020) was not as large as at the bike-sharing stations categorized as control, and it can be concluded that the initiative to build new bike lanes did have a catalytic effect on cycling.',
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-76.99500, 38.88499],
              zoom: 14.3,
              pitch: 45.2,
              bearing: -32.12,
              //speed: 0.2, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 1
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                }
                ]
        },
        {
            id: '7th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'A Self-Drawn Route Map',
            image: 'images/Self-Drawn Route Map.png',
            subtitle: 'By an anonymous author',
            description: 'The above map shows the common cycling route of a car-free resident in the above new bike lane area.',
            //The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed.
            location: {
              center: [-76.99500, 38.88499],
              zoom: 14.3,
              pitch: 45.2,
              bearing: -32.12,
              //speed: 0.2, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 1
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                },
                ]
        },
        {
            id: '8th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Limitations',
            //video: 'images/2022_Washington_DC_Bike_Infrastructure.mp4',
            //video2: 'https://www.youtube.com/embed/leljnocADy0',
            //video2: '<iframe width="1054" height="593" src="https://www.youtube.com/embed/leljnocADy0" title="2022 Washington DC Bike Infrastructure - How did they do it?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            description: 'The Capital Bikeshare biannual membership surveys only show until 2016 because the pandemic stops the 2020 survey, and the 2018 survey is not available online, so there is some difficulty in understanding the cycling activities of households without cars and low-income households. In addition, Washington, DC, and the surrounding Maryland and Virginia areas are very well connected, but limiting the study area to DC would make the study less comprehensive.',
            location: {
              center: [-76.94420, 38.89304],
              zoom: 11,
              pitch: 0,
              bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                ]
        },
        {
            id: '9th-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Conclusions',
            //video: 'images/2022_Washington_DC_Bike_Infrastructure.mp4',
            //video2: 'https://www.youtube.com/embed/leljnocADy0',
            //video2: '<iframe width="1054" height="593" src="https://www.youtube.com/embed/leljnocADy0" title="2022 Washington DC Bike Infrastructure - How did they do it?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            description: 'By examining the link between the distribution of bicycle-related infrastructure and bicycle-sharing ridership, this study provides a more intuitive illustration of the direct contribution of bicycle lane establishment to bicycle-sharing ridership. Further, the spatial distribution of car-free and low-income households reveals the inequality in the distribution of bicycle-related facilities. In the next study, how to improve this situation and better understand and meet the needs of disadvantaged groups becomes a high priority for urban planners and spatial analysts.',
            location: {
              center: [-76.94420, 38.89304],
              zoom: 11,
              pitch: 0,
              bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'four-stations',
                    opacity: 0
                },
                {
                    layer: 'Low-Income-Households',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-after2020-7ozt3c',
                    opacity: 1
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0
                },
                {
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0
                },
                {
                    layer: 'installed-bikelanes-5t7hxb',
                    opacity: 0.75,
                },
                {
                    layer: 'capibike-location-cgt8d3',
                    opacity: 0,
                },
                {
                    layer: 'fy23-bike-lane-protected-dqu6ki',
                    opacity: 0
                },
                ],
            onChapterExit: [
                ]
        },
    ]
};
