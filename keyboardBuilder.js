'use strict';

/*
layout={
	key		:""			// key pos
	keyCode	:""			// keyCode
	attr	:{}			// svg attr (position, class)
	data	:{}			// virtual key data
	style:	:{}			// rect style
}


layers:
esQwerty:{
	name:"[es] QWERTY",
	keys:{
		2:{
			key:"A",
			data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"},{x:30,y:28,class:"secondary",text:"|"}]
		},
	}
}
*/





const layouts={
top:{
	110:{
		attr:{x:0,		y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"Esc"}]
	},
	112:{
		attr:{x:84,		y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F1"}]
	},
	113:{
		attr:{x:126,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F2"}]
	},
	114:{
		attr:{x:168,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F3"}]
	},
	115:{
		attr:{x:210,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F4"}]
	},
	116:{
		attr:{x:274,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F5"}]
	},
	117:{
		attr:{x:316,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F6"}]
	},
	118:{
		attr:{x:358,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F7"}]
	},
	119:{
		attr:{x:400,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F8"}]
	},
	120:{
		attr:{x:464,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F9"}]
	},
	121:{
		attr:{x:506,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F10"}]
	},
	122:{
		attr:{x:548,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F11"}]
	},
	123:{
		attr:{x:590,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"F12"}]
	},
	124:{
		attr:{x:638,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"Impr"}]
	},
	125:{
		attr:{x:680,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"Bloq"}]
	},
	126:{
		attr:{x:722,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",text:"Pause"}]
	},
	75:{
		attr:{x:638,	y:28,	width:40,	height:40},
		data:[{x:20,y:16,"text-anchor":"middle",text:"Insert"}]
	},
	80:{
		attr:{x:680,	y:28,	width:40,	height:40},
		data:[{x:20,y:16,"text-anchor":"middle",text:"Home"}]
	},
	85:{
		attr:{x:722,	y:28,	width:40,	height:40},
		data:[{x:5,y:16,text:"Page"},{x:5,y:28,text:"Up"}]
	},
	76:{
		attr:{x:638,	y:70,	width:40,	height:40},
		data:[{x:20,y:16,"text-anchor":"middle",text:"Delete"}]
	},
	81:{
		attr:{x:680,	y:70,	width:40,	height:40},
		data:[{x:20,y:16,"text-anchor":"middle",text:"End"}]
	},
	86:{
		attr:{x:722,	y:70,	width:40,	height:40},
		data:[{x:5,y:16,text:"Page"},{x:5,y:28,text:"Down"}]
	},

	//arrows
	83:{
		attr:{x:680,	y:154,	width:40,	height:40},
		data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"↑"}]
	},
	79:{
		attr:{x:638,	y:196,	width:40,	height:40},
		data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"←"}]
	},
	84:{
		attr:{x:680,	y:196,	width:40,	height:40},
		data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"↓"}]
	},
	89:{
		attr:{x:722,	y:196,	width:40,	height:40},
		data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"→"}]
	},
},
keypad:{
	90:{
		attr:{x:770,	y:28,	width:40,	height:40},
		data:[{x:5,y:16,text:"Num"},{x:5,y:28,text:"Lock"}]
	},
	91:{
		attr:{x:770,	y:70,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"7"},{x:35,y:32,"text-anchor":"end",text:"Home"}]
	},
	92:{
		attr:{x:770,	y:112,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"4"},{x:35,y:32,"text-anchor":"end",text:"←"}]
	},
	93:{
		attr:{x:770,	y:154,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"1"},{x:35,y:32,"text-anchor":"end",text:"End"}]
	},
	94:{
		attr:{x:770,	y:196,	width:82,	height:40},
		data:[{x:8,y:18,class:"primary",text:"0"},{x:8,y:32,text:"Ins"}]
	},
	95:{
		attr:{x:812,	y:28,	width:40,	height:40},
		data:[{x:15,y:25,class:"primary",text:"⁄"}]
	},
	96:{
		attr:{x:812,	y:70,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"8"},{x:35,y:32,"text-anchor":"end",text:"↑"}]
	},
	97:{
		attr:{x:812,	y:112,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"5"}]
	},
	98:{
		attr:{x:812,	y:154,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"2"},{x:35,y:32,"text-anchor":"end",text:"↓"}]
	},
	100:{
		attr:{x:854,	y:28,	width:40,	height:40},
		data:[{x:15,y:25,class:"primary",text:"×"}]
	},
	101:{
		attr:{x:854,	y:70,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"9"},{x:35,y:32,"text-anchor":"end",text:"Pg Up"}]
	},
	102:{
		attr:{x:854,	y:112,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"6"},{x:35,y:32,"text-anchor":"end",text:"→"}]
	},
	103:{
		attr:{x:854,	y:154,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"3"},{x:35,y:32,"text-anchor":"end",text:"Pg Dn"}]
	},
	104:{
		attr:{x:854,	y:196,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"."},{x:35,y:32,"text-anchor":"end",text:"Del"}]
	},
	105:{
		attr:{x:896,	y:28,	width:40,	height:40},
		data:[{x:15,y:25,class:"primary",text:"−"}]
	},
	106:{
		attr:{x:896,	y:70,	width:40,	height:82},
		data:[{x:15,y:25,class:"primary",text:"+"}]
	},
	108:{
		attr:{x:896,	y:154,	width:40,	height:82},
		data:[{x:5,y:16,text:"Enter"}]
	},
},
rightFull:{
	94:{
		attr:{x:770,	y:196,	width:40,	height:40},
		data:[{x:8,y:18,class:"primary",text:"0"},{x:8,y:32,text:"Ins"}]
	},
	99:{
		attr:{x:812,	y:196,	width:40,	height:40},
		data:[]
	},
	106:{
		attr:{x:896,	y:70,	width:40,	height:40},
		data:[{x:15,y:25,class:"primary",text:"+"},]
	},
	107:{
		attr:{x:896,	y:112,	width:40,	height:40},
		data:[{x:15,y:25,class:"primary",text:","}]
	},
	108:{
		attr:{x:896,	y:154,	width:40,	height:40},
		data:[{x:5,y:16,text:"Enter"}]
	},
	109:{
		attr:{x:896,	y:196,	width:40,	height:40},
		data:[{x:5,y:16,text:"Enter"}]
	},
},
bottom:{
	58:{
		attr:{x:0,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,text:"Ctrl"}]
	},
	59:{
		attr:{x:52,	y:196,	width:50,	height:40,	class:"special"},
		data:[]
	},
	60:{
		attr:{x:104,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,text:"Alt"}]
	},
	61:{
		attr:{x:156,	y:196,	width:317,	height:40},
		data:[]
	},
	62:{
		attr:{x:475,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,text:"Alt Gr"}]
	},
	63:{
		attr:{x:527,	y:196,	width:50,	height:40,	class:"special"},
		data:[]
	},
	64:{
		attr:{x:579,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,text:"Ctrl"}]
	},
},
bottomJIS:{
	150:{
		attr:{x:156,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:25,y:25,"text-anchor":"middle",text:"無変換"}]
	},
	61:{
		attr:{x:208,	y:196,	width:161,	height:40},
		data:[]
	},
	151:{
		attr:{x:371,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:25,y:25,"text-anchor":"middle",text:"変換"}]
	},
	152:{
		attr:{x:423,	y:196,	width:50,	height:40,	class:"special"},
		data:[{x:25,y:15,class:"secondary","text-anchor":"middle",text:"カタカナ"},{x:25,y:30,class:"secondary","text-anchor":"middle",text:" ひらがな"}]
	},
},
k60:{
	1:{
		attr:{x:0,	y:28,	width:40,	height:40},
		data:[]
	},
	2:{
		attr:{x:42,	y:28,	width:40,	height:40},
		data:[]
	},
	3:{
		attr:{x:84,	y:28,	width:40,	height:40},
		data:[]
	},
	4:{
		attr:{x:126,	y:28,	width:40,	height:40},
		data:[]
	},
	5:{
		attr:{x:168,	y:28,	width:40,	height:40},
		data:[]
	},
	6:{
		attr:{x:210,	y:28,	width:40,	height:40},
		data:[]
	},
	7:{
		attr:{x:252,	y:28,	width:40,	height:40},
		data:[]
	},
	8:{
		attr:{x:294,	y:28,	width:40,	height:40},
		data:[]
	},
	9:{
		attr:{x:336,	y:28,	width:40,	height:40},
		data:[]
	},
	10:{
		attr:{x:378,	y:28,	width:40,	height:40},
		data:[]
	},
	11:{
		attr:{x:420,	y:28,	width:40,	height:40},
		data:[]
	},
	12:{
		attr:{x:462,	y:28,	width:40,	height:40},
		data:[]
	},
	13:{
		attr:{x:504,	y:28,	width:40,	height:40},
		data:[]
	},
	16:{
		attr:{x:0,	y:70,	width:63,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Tab"}]
	},
	30:{
		attr:{x:0,	y:112,	width:70,	height:40,class:"special"},
		data:[{x:12,y:15,text:"Caps"},{x:12,y:30,text:"Lock"}]
	},
},
base:{
	16:{
		attr:{x:0,	y:70,	width:63,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Esc"}]
	},
	17:{
		attr:{x:65,	y:70,	width:40,	height:40},
		data:[]
	},
	18:{
		attr:{x:107,	y:70,	width:40,	height:40},
		data:[]
	},
	19:{
		attr:{x:149,	y:70,	width:40,	height:40},
		data:[]
	},
	20:{
		attr:{x:191,	y:70,	width:40,	height:40},
		data:[]
	},
	21:{
		attr:{x:233,	y:70,	width:40,	height:40},
		data:[]
	},
	22:{
		attr:{x:275,	y:70,	width:40,	height:40},
		data:[]
	},
	23:{
		attr:{x:317,	y:70,	width:40,	height:40},
		data:[]
	},
	24:{
		attr:{x:359,	y:70,	width:40,	height:40},
		data:[]
	},
	25:{
		attr:{x:401,	y:70,	width:40,	height:40},
		data:[]
	},
	26:{
		attr:{x:443,	y:70,	width:40,	height:40},
		data:[]
	},
	27:{
		attr:{x:485,	y:70,	width:40,	height:40},
		data:[]
	},
	28:{
		attr:{x:527,	y:70,	width:40,	height:40},
		data:[]
	},
	
	30:{
		attr:{x:0,	y:112,	width:70,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Tab"}]
	},
	31:{
		attr:{x:72,	y:112,	width:40,	height:40},
		data:[]
	},
	32:{
		attr:{x:114,	y:112,	width:40,	height:40},
		data:[]
	},
	33:{
		attr:{x:156,	y:112,	width:40,	height:40},
		data:[]
	},
	34:{
		attr:{x:198,	y:112,	width:40,	height:40},
		data:[]
	},
	35:{
		attr:{x:240,	y:112,	width:40,	height:40},
		data:[]
	},
	36:{
		attr:{x:282,	y:112,	width:40,	height:40},
		data:[]
	},
	37:{
		attr:{x:324,	y:112,	width:40,	height:40},
		data:[]
	},
	38:{
		attr:{x:366,	y:112,	width:40,	height:40},
		data:[]
	},
	39:{
		attr:{x:408,	y:112,	width:40,	height:40},
		data:[]
	},
	40:{
		attr:{x:450,	y:112,	width:40,	height:40},
		data:[]
	},
	41:{
		attr:{x:492,	y:112,	width:40,	height:40},
		data:[]
	},
	46:{
		attr:{x:94,	y:154,	width:40,	height:40},
		data:[]
	},
	47:{
		attr:{x:136,	y:154,	width:40,	height:40},
		data:[]
	},
	48:{
		attr:{x:178,	y:154,	width:40,	height:40},
		data:[]
	},
	49:{
		attr:{x:220,	y:154,	width:40,	height:40},
		data:[]
	},
	50:{
		attr:{x:262,	y:154,	width:40,	height:40},
		data:[]
	},
	51:{
		attr:{x:304,	y:154,	width:40,	height:40},
		data:[]
	},
	52:{
		attr:{x:346,	y:154,	width:40,	height:40},
		data:[]
	},
	53:{
		attr:{x:388,	y:154,	width:40,	height:40},
		data:[]
	},
	54:{
		attr:{x:430,	y:154,	width:40,	height:40},
		data:[]
	},
	55:{
		attr:{x:472,	y:154,	width:40,	height:40},
		data:[]
	},
},
ISO:{
	15:{
		attr:{x:546,	y:28,	width:83,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Backspace"}]
	},
	43:{
		attr:{x:569,	y:70,	width:60,	height:82,class:"special"},
		data:[{x:15,y:25,text:"Enter"}]
	},
	29:{
		attr:{x:534,	y:112,	width:40,	height:40},
		data:[]
	},
	44:{
		attr:{x:0,	y:154,	width:50,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Shift"}]
	},
	45:{
		attr:{x:52,	y:154,	width:40,	height:40},
		data:[]
	},
	57:{
		attr:{x:514,	y:154,	width:115,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Shift"}]
	},
},
ANSI:{
	15:{
		attr:{x:546,	y:28,	width:83,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Backspace"}]
	},
	29:{
		attr:{x:569,	y:70,	width:60,	height:40},
		data:[]
	},
	43:{
		attr:{x:534,	y:112,	width:95,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Enter"}]
	},
	44:{
		attr:{x:0,	y:154,	width:92,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Shift"}]
	},
	57:{
		attr:{x:514,	y:154,	width:115,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Shift"}]
	},
},
JIS:{
	14:{
		attr:{x:546,	y:28,	width:41,	height:40},
		data:[]
	},
	15:{
		attr:{x:588,	y:28,	width:41,	height:40,class:"special"},
		data:[]
	},
	43:{
		attr:{x:569,	y:70,	width:60,	height:82,class:"special"},
		data:[{x:15,y:25,text:"Enter"}]
	},
	29:{
		attr:{x:534,	y:112,	width:40,	height:40},
		data:[]
	},
	44:{
		attr:{x:0,	y:154,	width:92,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Shift"}]
	},
	56:{
		attr:{x:514,	y:154,	width:40,	height:40},
		data:[]
	},
	57:{
		attr:{x:556,	y:154,	width:73,	height:40,class:"special"},
		data:[{x:15,y:25,text:"Shift"}]
	},
},
}

const layers={
"esDvorak":		{name:"🇪🇸 Dvorak"},
"esQwerty":		{name:"🇪🇸 QWERTY"},
"latamQwerty":	{name:"🇲🇽 QWERTY"},
"usaDvorak":	{name:"🇺🇸 Dvorak"},
"usaQwerty":	{name:"🇺🇸 QWERTY"},
"frAZERTY":		{name:"🇫🇷 AZERTY"},
"deQWERTZ":		{name:"🇩🇪 QWERTZ"},
"trQWERTY":		{name:"🇹🇷 QWERTY"},
"trF":			{name:"🇹🇷 Turkish F"},
"roQwerty":		{name:"🇷🇴 QWERTY"},
"roProgramer":	{name:"🇷🇴 Programer"},
/* Special layers	*/
"keyLocation":	{name:"Key location"},
"keyboardEvent":{name:"Js KeyBoardEvent"},
};
	//	reformatear data para que no suelte errores:
	//	alert(JSON.stringify(layers[x].keys));


function get_layer(str,func){
	if(layers[str].keys){
		func();
		return;
	}
	fetch('./json/'+str+'.json',{cache:"force-cache"}).then(e=>e.json()).then(e=>{
		layers[str].keys=e;
		func();
	}).catch((e)=>console.error(e));
}
//get_layer("latamQwerty",e=>{});

var themes={
	none:{name:"None",style:{},keys:{}},
	Unity3D:{
		name:"Unity3D",
		keys:{
			"Q":{
				class:"hotkey",
				default:"text",
				shift:"text on shift",
				control:"text on control",
			},
		}
	},
};



var defaultRect={
	class:"key-zone",
	x:0,
	y:0,
	width:"100%",
	height:"100%"
};

var phisicalLayout={
	design:[
		{id:"10x",	name:"complete",description:""},
		{id:"80",	name:"80%",description:""},
		{id:"60",	name:"60%",description:""},
		{id:"40",	name:"40%",description:""}
	],
	layout:[
		{id:"ISO",	name:"ISO",description:""},
		{id:"ANSI",	name:"ANSI",description:""},
		{id:"JIS",	name:"JIS",description:""},
	],
	layer:[],
	theme:[]
}
for(let key in phisicalLayout){
	let select=document.createElement("select");
	select.id=key;
	select.onchange=OnControlsChange;
	for(let k in phisicalLayout[key]){
		var option=document.createElement("option");
		option.value=phisicalLayout[key][k].id;
		option.text=phisicalLayout[key][k].name;
		select.appendChild(option);
	}
	document.getElementById("controls").appendChild(select);
}

const $keyboard=document.getElementById("keyboard"),
	$zone=document.getElementById("kb-zone"),
	$design=document.getElementById("design"),
	$layout=document.getElementById("layout"),
	$layer=document.getElementById("layer"),
	$theme=document.getElementById("theme"),
	$hint=document.getElementById("hint");

for(let k in layers){
	var option=document.createElement("option");
	option.value=k;
	option.text=layers[k].name;
	$layer.appendChild(option);
}
for(let k in themes){
	var option=document.createElement("option");
	option.value=k;
	option.text=themes[k].name;
	$theme.appendChild(option);
}

window.onhashchange=OnHashChange;
if(window.location.hash)
	OnHashChange();
else
	OnControlsChange();




function HideHint(){$hint.style.display=""}
function DisplayHint(e){
	var target=e.target.parentNode;
	var posY=e.clientY+15+$hint.offsetHeight<window.innerHeight?	e.clientY:e.clientY-$hint.offsetHeight,
		posX=e.clientX+25+$hint.offsetWidth<window.innerWidth?		e.clientX+12:e.clientX-$hint.offsetWidth-12;
	$hint.style.top=posY+"px";
	$hint.style.left=posX+"px";

	var keyData=themes[$theme.value].keys[target.dataset.keyCode];

	var text=keyData.default?"<p>"+keyData.default+"</p>":"";
	for(let x in keyData)
		if(!["class","default"].includes(x))
			text+="<p>"+keyData[x]+"</p>";

	$hint.innerHTML=`<h3>${target.dataset.keyCode}</h3>${text}`;

	$hint.style.display="block";
}


function OnHashChange(){
	if(!window.location.hash)
		return;
	let hash=window.location.hash.substr(1).split('-');
	hash.forEach((x)=>{
		let y=document.querySelector("option[value='"+x+"']");
		if(y)
			y.selected="1";
	});
	OnControlsChange();
}

function OnControlsChange(){
	get_layer($layer.value,e=>CreateKeyboard($design.value,$layout.value,$layer.value,$theme.value));
}
function CreateKeyboard(design,layout,layer,theme){
	$keyboard.querySelectorAll('svg').forEach((e)=>{e.remove()});
	window.location.hash=design+"-"+layout+"-"+layer+"-"+theme;

	let mlayouts=JSON.parse(JSON.stringify(layouts));// https://stackoverflow.com/a/122704/3875360
	let mKeys={};
	let paddingTop=2;

	if(design=="10x"){
		mKeys={...mlayouts.keypad,...mlayouts.top};
		$keyboard.setAttribute("viewBox","0 0 940 240");
	}else if(design=="80"){
		mKeys=mlayouts.top;
		$keyboard.setAttribute("viewBox","0 0 766 240");
	}else if(design=="60"){
		paddingTop=-26;
		$keyboard.setAttribute("viewBox","0 0 633 212");
	}else if(design=="40"){
		paddingTop=-68;
		$keyboard.setAttribute("viewBox","0 0 633 170");
	}

	mKeys={...mKeys,...(design=="40"?mlayouts.base:{...mlayouts.base,...mlayouts.k60}),...mlayouts[layout],...(layout=="JIS"?{...mlayouts.bottom,...mlayouts.bottomJIS}:mlayouts.bottom)};
	GenerateSide(2,paddingTop,PrintKeyContent(mKeys,layers[layer]),themes[theme]);

	if(layout!="ANSI"){//pintamos la tecla enter
		let p=document.createElementNS("http://www.w3.org/2000/svg","path");
		p.setAttribute("class","key-zone");
		p.setAttribute("d","m 0,0 0,40 7,0 0,42 53,0 0,-82 z");
		$keyboard.querySelector("[data-key='43']").prepend(p)
		$keyboard.querySelector("[data-key='43'] rect").remove();
	}
}

function PrintKeyContent(mLayout,mLayer){
	for(let x in mLayer.keys){
		let xx=mLayer.keys[x];
		if(mLayout[x]){
			mLayout[x].keyCode	=xx.key;
			mLayout[x].data		=xx.data;
		}
	}
	return mLayout;
}

function GenerateSide(x,y,layer,theme){
	let svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("x",x);
	svg.setAttribute("y",y);
	svg.setAttribute("height",240);
	for(let k in layer){
		let l=layer[k];
		let key=document.createElementNS("http://www.w3.org/2000/svg","svg");
			for(var x in l.attr)
				key.setAttribute(x,l.attr[x]);
		
		key.dataset.key=k;
		if(l.keyCode)// Toda key deberia tener su keyCode, salvo el layer de posición física.
			key.dataset.keyCode=l.keyCode;
		if(l.class)
			key.setAttribute("class",l.class);
		GenerateKeyContent(key,l.data);
		if(theme.keys[l.keyCode]){
			key.classList.add(theme.keys[l.keyCode].class);
			key.onmousemove=DisplayHint;
			key.onmouseout=HideHint;
		}
		svg.appendChild(key);
	}
	$keyboard.appendChild(svg);
}

function GenerateKeyContent(container,data,hotkeymap){
	let key=document.createElementNS("http://www.w3.org/2000/svg","rect");
	for(let s in defaultRect)
		key.setAttribute(s,defaultRect[s]);
	container.appendChild(key);
	
	for(let y in data){
		key=document.createElementNS("http://www.w3.org/2000/svg","text");
		for(let h in data[y]){
			let z=data[y][h];
			if(h=="text")
				key.innerHTML=z;
			else
				key.setAttribute(h,z);
		}
		container.appendChild(key);
	}
}