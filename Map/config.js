var config = {
    style:  'mapbox://styles/meadowyt/cla8zoaem001d15p66p9g8xm1',
    accessToken: 'pk.eyJ1IjoibWVhZG93eXQiLCJhIjoiY2w1aGxxeXllMGFtMDNqczljMWU2Z3UzMCJ9.JL8MJiBJg_cRjS7gJ88gmg',
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
    para1: "Bicycle travel has always been considered a low-carbon and healthy way of travel. In recent years, the development of the bike-sharing system has given more people (especially those without cars) more options for commuting and recreational trips. More affordable bicycles for short trips in urban areas can be a useful way to help people get around. With rising fuel prices, traffic congestion, and deteriorating environmental quality, the emergence of bike-sharing certainly offers a sustainable mode of transportation. Both shared bikes and e-scooters are examples of micro-transportation, which incorporates very small, low-occupancy vehicles (Bikeshare and E-Scooters in the U.S., 2022). According to a study in DC, the advent of bike-sharing has reduced traffic congestion in communities and neighborhoods by more than 4% (Hamilton & Wichman, 2018). Compared to personal bicycles, bike sharing makes people feel safer in terms of psychological perception as less risk of theft is avoided. Because they're more environmentally friendly and less expensive, bike-sharing systems have become an essential component of transportation services in major cities all over the world (Abdellaoui Alaoui & Koumetio Tekouabou, 2021). Thus, the bike-sharing project is not a new topic but something that has been booming for the past few years.",
    para2: "Subsequently, more and more studies have begun to focus on the bike-sharing demand and bike-related infrastructure. Buck & Buehler (2012) found a significant correlation between the presence of bicycle lanes and the use of capital bike-sharing by examining data on capital bicycle-sharing trips in Washington DC between 2010 and 2011. Besides, based on many other existing studies, it is easy to find that bike-relevant infrastructure and facilities are the most important factors in the demand for the bike-sharing system.",
    para3: 'Washington, D.C., one of the first cities in the United States to launch a bike-sharing program, is now among the largest bike-sharing systems in the country. In 2008, the Capital Bikeshare system began operation, servicing Washington, D.C., and the suburbs in Virginia and Maryland that surround it. However, despite the many benefits of bike travel, the infrastructure associated with bike travel is still not well developed. Building bike lanes, especially protected bike lanes, has always been a challenge in Washington, D.C., due to road space constraints and other issues (Lazo, 2022).',
    footer: '<b>References:</b> <br> Abdellaoui Alaoui, E. A., & Koumetio Tekouabou, S. C. (2021). Intelligent management of bike sharing in smart cities using machine learning and Internet of Things. Sustainable Cities and Society, 67, 102702. https://doi.org/10.1016/j.scs.2020.102702 <br> Bikeshare and e-scooters in the U.S. (2022). U.S. Department of Transportation Bureau of Transportation Statistics. https://data.bts.gov/stories/s/Bikeshare-and-e-scooters-in-the-U-S-/fwcs-jprj/ <br> Buck, D. (2013). Encouraging Equitable Access to Public Bikesharing Systems. Institute of Transportation Engineers. ITE Journal, 83(3), 24–27. <br> Choi, J., Coughlin, J. F., & D’Ambrosio, L. (2013). Travel Time and Subjective Well-Being. Transportation Research Record, 2357(1), 100–108. https://doi.org/10.3141/2357-12 <br> Dehdari Ebrahimi, Z., Momenitabar, M., Nasri, A. A., & Mattson, J. (2022). Using a GIS-based spatial approach to determine the optimal locations of bikeshare stations: The case of Washington D.C. Transport Policy, 127, 48–60. https://doi.org/10.1016/j.tranpol.2022.08.008 <br> Hamilton, T. L., & Wichman, C. J. (2018). Bicycle infrastructure and traffic congestion: Evidence from DC’s Capital Bikeshare. Journal of Environmental Economics and Management, 87, 72–93. https://doi.org/10.1016/j.jeem.2017.03.007 <br> Hilbrecht, M., Smale, B., & Mock, S. E. (2014). Highway to health? Commute time and well-being among Canadian adults. World Leisure Journal, 56(2), 151–163. https://doi.org/10.1080/16078055.2014.903723 <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Installed Bikelanes',
            image: 'images/Installed Bikelanes.png',
            image2: 'images/legend_Installed Bikelanes.png',
            subtitle: 'Data Source: DDOT',
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
            description: "Beginning in 2009, the agency began installing protected bike lanes, also known as Cycle Tracks or separated bike lanes. In 2019, DDOT announced a plan to build 20 miles of new, protected bike lanes by the end of 2022. And in the past two years, Washington, D.C., has added 13 miles of protected bike lanes (Lazo, 2022). However, from the map, it's easy to see that the bike lanes are often disjointed and not fully covered, so much so that people are often faced with the difficult choice of whether to risk riding in the motorway or breaking into the sidewalk.",
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
            description2: "From the above maps, the spatial distribution of bike lanes and bike-share stations in Washington, DC, is being assessed. As seen in the development of bike lanes in DC, the quality of newly installed bike lane infrastructure has improved over time, from simple bike lanes to protected bike lanes that separate cyclists from traffic. However, the existing bike lanes still do not have the ability to meet the needs of cyclists to ride safely, as many places do not have continuous and complete bike lanes. According to the study by McNeil and his colleagues at Portland State, concerns about traffic safety are the biggest barrier to cycling (48% of residents see it as a big barrier) (McNeil et al., 2017). So there's still plenty of room to improve DC's bike lanes. In fact, this step-by-step approach to bike lane building has been successful in winning political, public, and administrative support, but its disadvantages have been exposed accordingly: there are still many gaps in the city's bike route network because bike lane infrastructure is built when individual opportunities arise, rather than as part of an integrated network.",
            description3: "In addition, with more and more areas adopting bike-sharing systems, a better understanding of the basic demographics can make it easier to promote low-carbon travel options and provide a new choice for low-income or no-vehicle households. Thus, it's important to further understand the activity patterns of groups who use bike-sharing and the commuting and recreational travel patterns of people without cars. At the same time, the analysis also tries to reveal inequalities in geospatial and facilities distribution with the aim of making recommendations for better infrastructure settings.",
            video: 'images/2022_Washington_DC_Bike_Infrastructure.mp4',
            description4: '<a href="https://youtu.be/leljnocADy0" target="_blank">Video clips from YouTube</a>',
            location: {
              center: [-76.94420, 38.89304],
              zoom: 11,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: 'No Vehicle Households',
            image: 'images/Change of NoVehicle Households.jpeg',
            subtitle: 'Proportion changes of no-vehicle households',
            description: 'A quick look at the distribution of the number of households without a car shows that most of the no-vehicle households are concentrated in the southeast and central areas of DC.',
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
                    layer: 'bikeshare202210-5tkniw',
                    opacity: 0,
                },
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 1
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
            description: 'Families with annual household income less than 20K are considered low income households. As can be seen from the graph, low-income households are also mostly concentrated in the southeast of DC. And population that might most benefit from having more accessible transit like bikes are under serving.',
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
            description2: 'Although bike-sharing can be used as a mode of transportation for commuting and recreation, the distribution of bike lanes in D.C. is not comprehensive. The ability to capture and predict the number of users per hour has allowed entities such as the companies overseeing bike-sharing systems and relevant government departments to manage them more efficiently and cost-effectively, but the corresponding road infrastructure has not been well developed. The inequities in the distribution of bike lanes and bike-sharing stations have always been a serious issue. While people without cars are more likely to take bike-sharing and other public transportation options, their accessibility to these facilities is a concern.',
            description3: "In addition to the visualization showed above, many other existing studies have found that areas farther from downtown Washington, D.C., currently have a greater lack of bike-share docking stations, and these may also be located in purely residential areas (Dehdari Ebrahimi et al., 2022), which are also often low-income and people of color neighborhoods.Even if the consensus is that low-income people are more likely to be carless and rely on public transportation such as shared bikes and buses, and subways to get around, more research has revealed that the majority of people who ride public bicycles are white, employed, and have better income and educational levels (Hosford & Winters, 2018). Both people of color and low-income residents experience more barriers to bicycling and using bike-sharing than higher-income white residents (McNeil et al., 2017). Most of the current bike-sharing systems are dedicated to certain populations to ensure a high enough level of profitability, with a corresponding lack of attention to disadvantaged communities. As of 2013, only 19% of Capital Bike's annual members are non-white, and riders earning less than $50,000 per year make up only 24% of members (Buck, 2013). Black people make up around 50% of the population in Washington, D.C., but only 4% of Capital Bikeshare members as of 2016 (Schneider, 2017).",
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
            subtitle: 'Graph from 2016 Capital BikeshareMember Survey Report',
            description: 'By counting the number of departures from each bike-sharing station within October 2022, the data is obtained as shown in the figure on the right. It can be found that the stations with more ridership are concentrated in the central area, which is also where the bike lanes are more dense. Areas with more bike lanes have a higher usage rate for bike sharing than peripheral areas.',
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
                ],
            onChapterExit: [
                {
                    layer: 'bkgroup-join-demo-d09c35',
                    opacity: 0,
                }
                ]
        }
    ]
};
