var configOptions,sectionData;

function init(){

    configOptions = {
        webmap : "015f54544e0a49328adbdfe8dec58464",
        //webmap : "d28fc177ccc3425da2df887ce44c1bb2",
        //webmap : "8895b3143f294cac87a614c81ce1f084",
        title : "Ghosts of West Temple",
        subtitle : "An online exhibit presented by Salt Lake County Archives",
        tabTitles : [{
    		"title" : "<span class='tabTextBig'>Intro</span>",
            "season" : "intro"
		},{
			"title" : "<span class='tabTextBig'>West Temple</span>",
            "season" : "summer"
		},{
			"title" : "<span class='tabTextBig'>South Temple</span>",
            "season" : "fall"
		},{
			"title" : "<span class='tabTextBig'>North Temple</span>",
            "season" : "winter"
		},{
			"title" : "<span class='tabTextBig'>State Street</span>",
            "season" : "spring"
		}],
        geometryserviceurl:"http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
        sharingurl :"http://arcgis.com/sharing/content/items"
    };

    sectionData = [
        //INTRODUCTION
        {
        "title" : "Ghosts of West Temple<br>Salt Lake City, Utah",
        "text" : "Text goes here",
        "images" : [{
            //"src" : "images/photos/ShawnCarey[3].jpg",
            "src" : "http://slco.org/is/GenericFileHandler/LoadImage.ashx?url=GISmedia/Archives/intro.jpg",
            "copyright" : "Salt Lake County Archives"
        }]
        },
        //SUMMER
        {
        "title" : "Ghosts of<br>West Temple",
        "text" : "West Temple intro text....",
        "images" : [{
            "src" : "http://slco.org/is/GenericFileHandler/LoadImage.ashx?url=GISmedia/Archives/130.jpg",
            "copyright" : "Salt Lake County Archives"
        }]
        },
        //FALL
        {
          "title" : "Ghosts of<br>South Temple",
          "text" : "Coming Soon",
          "images" : [{
          "src" : "http://slco.org/is/GenericFileHandler/LoadImage.ashx?url=GISmedia/Archives/119.jpg",
          "copyright" : "Salt Lake County Archives"
        }]
        },
        //WINTER
        {
          "title" : "Ghosts of<br>North Temple",
          "text" : "Coming Soon",
          "images" : [{
          "src" : "http://slco.org/is/GenericFileHandler/LoadImage.ashx?url=GISmedia/Archives/119.jpg",
          "copyright" : "Salt Lake County Archives"
        }]
        },
        //SPRING
        {
        "title" : "Ghosts of<br>State Street",
        "text" : "Coming Soon",
        "images" : [{
          "src" : "http://slco.org/is/GenericFileHandler/LoadImage.ashx?url=GISmedia/Archives/119.jpg",
          "copyright" : "Salt Lake County Archives"
        }]
        }
    ];


    initMap();
    setUpTabs();

};

dojo.addOnLoad(init);
