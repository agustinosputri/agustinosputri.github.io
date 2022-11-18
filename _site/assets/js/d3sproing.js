//Width and height
var width = 600;
var height = 400;
var margin = {top: 20, right: 20, bottom: 20, left: 20};

//Get the dataset
var dataset = 
            {
                "nodes": [
                    {
                        "name": "The New Rigor",
                        "username": "@5colldh",
                        "tweet": "A conversation on innovation and assessment in digital projects",
                        "group": "none",
                        "number": 0
                    },
                    { 
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "In the sciences, both new discoveries and the development and creative use of technology are valued. Why not in the humanities? #NewRigor",
                        "group": "none",
                        "number": 1
                     },
                     {
                        "name": "Ecstatic Pessimist",
                        "username": "@EcstaticPesse",
                        "tweet": "#5cdh #newrigor http://t.co/oeWXjvpzEq",
                        "group": "none",
                        "number": 2
                     },
                     {
                        "name": "Byzantine Cappadocia",
                        "username": "@ByzCapp",
                        "tweet": "Thanks @5collDH @amplify285 for facilitating a great #NewRigor conversation. Necessary, tough ideas brought up today!",
                        "group": "none",
                        "number": 3
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "@byzcapp 'that is why God made Borbon' says @amplify285 #NewRigor #5collDH",
                        "group": "none",
                        "number": 4
                     },
                     {
                        "name": "Byzantine Cappadocia",
                        "username": "@ByzCapp",
                        "tweet": "#NewRigor My questions are large and existential!",
                        "group": "none",
                        "number": 5
                     },
                     {
                        "name": "Emily Esten",
                        "username": "@sheishistoric",
                        "tweet": "'How do we get our non-DH peers to understand what we do?' - @Pompeiana79 #newrigor #5cdh",
                        "group": "none",
                        "number": 6
                     },
                    {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "@Pompeiana79 or like this: #NewRigor #5collDH http://t.co/bD9zj4BU0c",
                        "group": "none",
                        "number": 7
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "@pompeiana79 Not like this: #NewRigor #5collDH http://t.co/aCjflJ7TpV",
                        "group": "none",
                        "number": 8
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "The filter for DH evaluations, at all levels, needs to look like this: #NewRigor #5collDH http://t.co/1zJ1yVoqtX",
                        "group": "none",
                        "number": 9
                     },
                     {
                        "name": "marii nyröp",
                        "username": "@mariinyrop",
                        "tweet": "#newrigor #blue Should there be a firm separation of Assessment + Analytics when evaluating + supporting young scholars? ... data vs doing?",
                        "group": "blue",
                        "number": 10
                     },
                     {
                        "name": "Byzantine Cappadocia",
                        "username": "@ByzCapp",
                        "tweet": "@Pompeiana79 It's a #LAWDI and #NewRigor crossover episode!",
                        "group": "none",
                        "number": 11
                     },
                     {
                        "name": "UMass DHI",
                        "username": "@umassdhi",
                        "tweet": "Great to see @Pompeiana79 @coppergiloth and @jonberndtolsen at #NewRigor @5collDH",
                        "group": "none",
                        "number": 12
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "hey @ByzCapp we see you here in the #NewRigor room!! Welcome!",
                        "group": "none",
                        "number": 13
                     },
                     {
                        "name": "UMass DHI",
                        "username": "@umassdhi",
                        "tweet": "Great first round of talks at #newrigor @5colldh",
                        "group": "none",
                        "number": 14
                     },
                     {
                        "name": "John E. Drabinski",
                        "username": "@jdrabinski",
                        "tweet": "New models of scholarship: move from scholar to scholarship as shop house, w/multiple lateral collaborators, 'post-support staff' #NewRigor",
                        "group": "none",
                        "number": 15
                     },
                     {
                        "name": "Jeffrey Moro",
                        "username": "@jeffreymoro",
                        "tweet": "#gnurigor #NewRigor http://t.co/USEBIJ8imE",
                        "group": "none",
                        "number": 16
                     },
                     {
                        "name": "John E. Drabinski",
                        "username": "@jdrabinski",
                        "tweet": "Lunch break at #NewRigor conference with @5collDH folks http://t.co/HPC0ikkkgA",
                        "group": "none",
                        "number": 17
                     },
                     {
                        "name": "Ecstatic Pessimist",
                        "username": "@EcstaticPesse",
                        "tweet": "My small hand makes the perfect coffee stirrer #newrigor #5cdh http://t.co/qAfO4uYDg3",
                        "group": "none",
                        "number": 18
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "@Pompeiana79 one answer might be to build parts of your #DH project as viable on their own Each a minimally viable product. #NewRigor #green",
                        "group": "green",
                        "number": 19
                     },
                     {
                        "name": "Eric Kansa",
                        "username": "@ekansa",
                        "tweet": "@Pompeiana79 and #AltAcs the 'suicide squad'? #newrigor",
                        "group": "none",
                        "number": 20
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "High-Risk/High-Reward push by funders 4 projects makes pre-tenure faculty into gamblers. So, how to we evaluate 'failure'? #newrigor #green",
                        "group": "green",
                        "number": 21
                     },
                     {
                        "name": "Shane Landrum",
                        "username": "@cliotropic",
                        "tweet": "Wishing I could attend #newrigor in person, but following along from the tweets is good too. Thanks to those livetweeting.",
                        "group": "none",
                        "number": 22
                     },
                     {
                        "name": "Marisa Parham",
                        "username": "@amplify285",
                        "tweet": "#purple #newrigor talking models for valuing iterations. Lang of again, articulating how different practices can become values, if we push",
                        "group": "purple",
                        "number": 23
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'How is participation in a scholarly project assessed and evaluated?' Not. New meme: #BitterStaff (except with a union!) #orange #newrigor",
                        "group": "orange",
                        "number": 24
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "varied landscape in assessment for staff in scholarly work - #orange #newrigor @5collDH",
                        "group": "orange",
                        "number": 25
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'How is participation in a scholarly project assessed and evaluated?' Theoretically merit pay ⇑, mostly pats on the back.  #orange #newrigor",
                        "group": "orange",
                        "number": 26
                     },
                     {
                        "name": "Emily Esten",
                        "username": "@sheishistoric",
                        "tweet": "#red: the way we talk about a project is very different than the project itself  #newrigor",
                        "group": "red",
                        "number": 27
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "suggesting metrics (i.e. Google Analytics) for participation tracking. how do diff b/t actual involvement &amp; self promotion? #blue #NewRigor",
                        "group": "blue",
                        "number": 28
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'Evaluation &amp; assessment different for principal investigators' Parallel life — what we’re asked to do and actually do. #orange #newrigor",
                        "group": "orange",
                        "number": 29
                     },
                     {
                        "name": "Eric Poehler",
                        "username": "@Pompeiana79",
                        "tweet": "'data' as a vocabulary not nec. native to humanities training; atomization of elements of research is not always intuitive #newrigor #green",
                        "group": "green",
                        "number": 30
                     },
                     {
                        "name": "Marisa Parham",
                        "username": "@amplify285",
                        "tweet": "#newrigor #purple talking @ the language of our concerns. So many things, realizing we need new words, new categories, attached to values",
                        "group": "purple",
                        "number": 31
                     },
                     {
                        "name": "Ecstatic Pessimist",
                        "username": "@EcstaticPesse",
                        "tweet": "#newrigor #red Digital humanities is more about using digital research and practice methodologies instead of it being about the medium",
                        "group": "red",
                        "number": 32
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "uncooperative internet means I'm alternately live tweeting the #blue group discussion from the video stream and the Google Doc! #newrigor",
                        "group": "blue",
                        "number": 33
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'What is the difference between collaboration and support?' Could also include producing or procuring funding. #orange #newrigor",
                        "group": "orange",
                        "number": 34
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "Defining TRUE #collaboration @5collDH #orange #newrigor vs. support",
                        "group": "orange",
                        "number": 35
                     },
                    {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "thinking about peer review as a possible mode for DH work evaluation #blue #newrigor",
                        "group": "blue",
                        "number": 36
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'What is the difference between collaboration and support?' Involved from the beginning: design, implement, review. #orange #newrigor",
                        "group": "orange",
                        "number": 37
                     },
                     {
                        "name": "Marisa Parham",
                        "username": "@amplify285",
                        "tweet": "#newrigor #purple working thru the ? of how to articulate the value of failure in a humanities environment: 'u don’t get points for trying'",
                        "group": "purple",
                        "number": 38
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'Structures for staff member’s own intellectual work?' Prof. dev. support better in IT than in libraries — usually. MHC? #orange #newrigor",
                        "group": "orange",
                        "number": 39
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "#value is not in question for participating in scholarship, but what are the rewards? #orange #newrigor @5collDH",
                        "group": "orange",
                        "number": 40
                     },
                    {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "cornett: how do we fairly evaluate inherently collaborative work? #blue #newrigor",
                        "group": "blue",
                        "number": 41
                     },
                    {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "big questions: what are the ethics of assuming shared knowledge/paradigms? #blue #newrigor",
                        "group": "blue",
                        "number": 42
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "how can we evaluate DH w/o a basic understanding of/relationships with tech platforms? #blue #newrigor",
                        "group": "blue",
                        "number": 43
                     },
                     {
                        "name": "Emily Esten",
                        "username": "@sheishistoric",
                        "tweet": "#red: do these project types even encompass what the student symposium projects do &amp; present? #newrigor",
                        "group": "red",
                        "number": 44
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'What kinds of structures would help staff member’s own intellectual work emerge?' Professional development support varies #orange #newrigor",
                        "group": "orange",
                        "number": 45
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "the beautiful thing about DH working groups: finding alternative communication methods when tech goes wrong #blue #NewRigor",
                        "group": "blue",
                        "number": 46
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "can there be a #staff pool to draw on where we attend academic conferences? #newrigor @5collDH",
                        "group": "orange",
                        "number": 47
                     },
                     {
                        "name": "Marisa Parham",
                        "username": "@amplify285",
                        "tweet": ".@5CollDH #purple #newrigor taking up the ? of what ‘high risk’ means &amp; wondering how tied old model of demonstrating 'unique-ness'",
                        "group": "purple",
                        "number": 48
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "Note - taking break from normal #GIS tweets to address questions at #newrigor @5collDH",
                        "group": "none",
                        "number": 49
                     },
                     {
                        "name": "Emily Esten",
                        "username": "@sheishistoric",
                        "tweet": "#red group dives into a discussion of the 'high risk/high reward' model and our experience as undergraduates #newrigor",
                        "group": "red",
                        "number": 50
                     },
                     {
                        "name": "Ecstatic Pessimist",
                        "username": "@EcstaticPesse",
                        "tweet": "#newrigor #red Talking about excessive focus on social entrepreneurship  and money making aspects of digital technology in academia",
                        "group": "red",
                        "number": 51
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'Evaluation &amp; assessment different for principal investigators' UMass library different, national reputation ⇒ promotion. #orange #newrigor",
                        "group": "none",
                        "number": 52
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "what is twitter and how can academics best utilize it personally and professionally? #blue #NewRigor",
                        "group": "blue",
                        "number": 53
                     },
                    {
                        "name": "Marisa Parham",
                        "username": "@amplify285",
                        "tweet": "#newrigor #purple tenure group &amp; we’re talking ab collaboration &amp; articulating how projs aren’t possible w/o staff, student, &amp; other collabs",
                        "group": "purple",
                        "number": 54
                     },
                    {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "'How are questions of evaluation &amp; assessment different for principal investigators' No major acks for scholarly work! #orange #newrigor",
                        "group": "orange",
                        "number": 55
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "#NewRigor #blue group: me, @mariinyrop @ByzCapp @Yael_Rice, and others! starting out immediately with a discussion of documentation",
                        "group": "blue",
                        "number": 56
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "@5collDH #orange #newrigor #staff beginning to answer question of evaluation / assessment as principal investigators",
                        "group": "orange",
                        "number": 57
                     },
                     {
                        "name": "liz alexander",
                        "username": "@_superluminal",
                        "tweet": "hi #blue group!!!! #NewRigor @5collDH",
                        "group": "blue",
                        "number": 58
                     },
                     {
                        "name": "Andy Anderson",
                        "username": "@EduObservatory",
                        "tweet": "Conversations on professional evaluation of digital humanities beginning now at the #newrigor. #Orange group a mix of techs and librarians.",
                        "group": "orange",
                        "number": 59
                     },
                     {
                        "name": "GIS @ Smith College",
                        "username": "@SmithGIS",
                        "tweet": "exciting #orange group is forming at #newrigor @5collDH",
                        "group": "orange",
                        "number": 60
                     },
                     {
                        "name": "Ecstatic Pessimist",
                        "username": "@EcstaticPesse",
                        "tweet": "I'm not sure if my new hand is going to let me tweet for #newrigor I need a smaller keyboard @5collDH http://t.co/QGGTV8oDQT",
                        "group": "none",
                        "number": 61
                     },
                     {
                        "name": "Kimberly Bain",
                        "username": "@kgbain",
                        "tweet": "@amplify285 kicks off the @5collDH #newrigor conference. 'What is *actually* helpful?'",
                        "group": "none",
                        "number": 62
                     },
                     {
                        "name": "Ecstatic Pessimist",
                        "username": "@EcstaticPesse",
                        "tweet": "Great time at the undergrad #5cdh symposium, extremely excited to meet some minds at #newrigor",
                        "group": "none",
                        "number": 63
                     },
                     {
                        "name": "Byzantine Cappadocia",
                        "username": "@ByzCapp",
                        "tweet": "Pocky sticks as #DHfuel at #NewRigor. I like it!",
                        "group": "none",
                        "number": 64
                     },
                     {
                        "name": "Jon Berndt Olsen",
                        "username": "@jonberndtolsen",
                        "tweet": "Getting ready to start at the #newrigor @umassph",
                        "group": "none",
                        "number": 65
                     },
                     {
                        "name": "Red Group",
                        "username": "#red",
                        "tweet": "Undergraduate students",
                        "group": "red",
                        "number": 66
                     },
                     {
                        "name": "Orange Group",
                        "username": "#orange",
                        "tweet": "Staff",
                        "group": "orange",
                        "number": 67
                     },
                     {
                        "name": "Green Group",
                        "username": "#green",
                        "tweet": "Tenure-track faculty",
                        "group": "green",
                        "number": 68
                     },
                     {
                        "name": "Blue Group",
                        "username": "#blue",
                        "tweet": "Post-docs and graduate students",
                        "group": "blue",
                        "number": 69
                     },
                     {
                        "name": "Purple Group",
                        "username": "#purple",
                        "tweet": "Tenured faculty",
                        "group": "purple",
                        "number": 70
                     }
                ],
                "links": [
                    { "source": 0, "target": 66, "value": 10 },
                    { "source": 0, "target": 67, "value": 10 },
                    { "source": 0, "target": 68, "value": 10 },
                    { "source": 0, "target": 69, "value": 10 },
                    { "source": 0, "target": 70, "value": 10 },
                    { "source": 66, "target": 27, "value": 10 },
                    { "source": 66, "target": 32, "value": 10 },
                    { "source": 66, "target": 44, "value": 10 },
                    { "source": 66, "target": 50, "value": 10 },
                    { "source": 66, "target": 51, "value": 10 },
                    { "source": 67, "target": 24, "value": 10 },
                    { "source": 67, "target": 25, "value": 10 },
                    { "source": 67, "target": 26, "value": 10 },
                    { "source": 67, "target": 29, "value": 10 },
                    { "source": 67, "target": 34, "value": 10 },
                    { "source": 67, "target": 35, "value": 10 },
                    { "source": 67, "target": 37, "value": 10 },
                    { "source": 67, "target": 39, "value": 10 },
                    { "source": 67, "target": 40, "value": 10 },
                    { "source": 67, "target": 45, "value": 10 },
                    { "source": 67, "target": 47, "value": 10 },
                    { "source": 67, "target": 55, "value": 10 },
                    { "source": 67, "target": 57, "value": 10 },
                    { "source": 67, "target": 59, "value": 10 },
                    { "source": 67, "target": 60, "value": 10 },
                    { "source": 68, "target": 19, "value": 10 },
                    { "source": 68, "target": 21, "value": 10 },
                    { "source": 68, "target": 30, "value": 10 },
                    { "source": 69, "target": 10, "value": 10 },
                    { "source": 69, "target": 28, "value": 10 },
                    { "source": 69, "target": 33, "value": 10 },
                    { "source": 69, "target": 36, "value": 10 },
                    { "source": 69, "target": 41, "value": 10 },
                    { "source": 69, "target": 42, "value": 10 },
                    { "source": 69, "target": 43, "value": 10 },
                    { "source": 69, "target": 46, "value": 10 },
                    { "source": 69, "target": 53, "value": 10 },
                    { "source": 69, "target": 56, "value": 10 },
                    { "source": 69, "target": 58, "value": 10 },
                    { "source": 70, "target": 23, "value": 10 },
                    { "source": 70, "target": 31, "value": 10 },
                    { "source": 70, "target": 38, "value": 10 },
                    { "source": 70, "target": 48, "value": 10 },
                    { "source": 70, "target": 54, "value": 10 }
                ]
            };

//Initialize force layout
var force = d3.layout.force()
		 .size([width, height])
		 .linkDistance([50])
		 .charge([-50]);

//Create SVG element
var svg = d3.select("#sproingcanvas")
    //.append("svg")
    //.attr("width", width + margin.left + margin.right)
    //.attr("height", height + margin.top + margin.bottom)
    //.append("g")
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
   .append("div")
   .classed("svg-container", true) //container class to make it responsive
   .append("svg")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 600 400")
   //class to make it responsive
   .classed("svg-content-responsive", true); 
   
//Create dataset structure
force.nodes(dataset.nodes)
.links(dataset.links)
.start();

// Declare tooltip
var div = d3.select("body").append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);

// Assign colors to groups
var colors = function(dataset){
	if (dataset.group === "none") {
		return "#949494";
	} else if (dataset.group === "red") {
		return "#ff0000";
	} else if (dataset.group === "blue") {
		return "#00A6FF";
	} else if (dataset.group === "orange") {
		return "#FFA200";
	} else if (dataset.group === "purple") {
		return "#BB00FF";
	} else if (dataset.group === "green") {
		return "#00B539";
	} else {
		return "#000000";
	}
}; 

//Create links as lines
var link = svg.selectAll(".link")
	.data(dataset.links)
	.enter()
	.append("line")
	.attr("class", "link")
	.style("stroke", "#ccc")
	.style("stroke-width", 1);

//Create nodes as circles
var node = svg.selectAll(".node")
	.data(dataset.nodes)
	.enter()
	.append("circle")
	.attr("class", "node")
	.attr("r", 8)
	.style("fill", colors)
	.call(force.drag)
	// Update label box
	.on("mouseover", function(d) {
      div.transition()
         .duration(200)      
         .style("opacity", 0.85);
      div.html("<em>" + d.name + " / " + d.username+ "</em>" + "<br/>" + d.tweet)
         .style("left", (d3.event.pageX) + "px")     
         .style("top", (d3.event.pageY - 28) + "px");
   })
   .on("mouseout", function(d) {
      div.transition()        
      .duration(1000)      
      .style("opacity", 0);
   })
   .on('dblclick', connectedNodes);

//Every time the simulation "ticks", this will be called
force.on("tick", function() {

	link.attr("x1", function(d) { return d.source.x; })
		 .attr("y1", function(d) { return d.source.y; })
		 .attr("x2", function(d) { return d.target.x; })
		 .attr("y2", function(d) { return d.target.y; });

	node.attr("cx", function(d) { return d.x; })
		 .attr("cy", function(d) { return d.y; });	
});

//---Insert-------

//Toggle stores whether the highlighting is on
var toggle = 0;

//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < dataset.nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
dataset.links.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});

//This function looks up whether a pair are neighbours  
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}

function connectedNodes() {

    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        node.style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
        });
        
        link.style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
        });
        
        //Reduce the op
        
        toggle = 1;
    } else {
        //Put them back to opacity=1
        node.style("opacity", 1);
        link.style("opacity", 1);
        toggle = 0;
    }

}

//---End Insert---