'use strict';

/*
layout={
	key		:""			// keyCode
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
			data:[{x:10,y:28,class:"key",text:"1"},{x:10,y:15,class:"key secondary",text:"!"},{x:30,y:28,class:"key secondary",text:"|"}]
		},
	}
}

		
		<option val=KeyBoardEvent>KeyBoardEvent</option>
		<option val=>KeyBoard POSITION</option>
*/

const layouts={
top:{
	110:{
		attr:{x:0,		y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"Esc"}]
	},
	112:{
		attr:{x:84,		y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F1"}]
	},
	113:{
		attr:{x:126,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F2"}]
	},
	114:{
		attr:{x:168,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F3"}]
	},
	115:{
		attr:{x:210,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F4"}]
	},
	116:{
		attr:{x:274,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F5"}]
	},
	117:{
		attr:{x:316,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F6"}]
	},
	118:{
		attr:{x:358,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F7"}]
	},
	119:{
		attr:{x:400,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F8"}]
	},
	120:{
		attr:{x:464,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F9"}]
	},
	121:{
		attr:{x:506,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F10"}]
	},
	122:{
		attr:{x:548,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F11"}]
	},
	123:{
		attr:{x:590,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"F12"}]
	},
	124:{
		attr:{x:638,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"Impr"}]
	},
	125:{
		attr:{x:680,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"Bloq"}]
	},
	126:{
		attr:{x:722,	y:0,	width:40,	height:25},
		data:[{x:20,y:17,"text-anchor":"middle",class:"key",text:"Pause"}]
	},
	75:{
		attr:{x:638,	y:28,	width:40,	height:40},
		data:[{x:20,y:16,class:"key","text-anchor":"middle",text:"Insert"}]
	},
	80:{
		attr:{x:680,	y:28,	width:40,	height:40},
		data:[{x:20,y:16,class:"key","text-anchor":"middle",text:"Home"}]
	},
	85:{
		attr:{x:722,	y:28,	width:40,	height:40},
		data:[{x:5,y:16,class:"key",text:"Page"},{x:5,y:28,class:"key",text:"Up"}]
	},
	76:{
		attr:{x:638,	y:70,	width:40,	height:40},
		data:[{x:20,y:16,class:"key","text-anchor":"middle",text:"Delete"}]
	},
	81:{
		attr:{x:680,	y:70,	width:40,	height:40},
		data:[{x:20,y:16,class:"key","text-anchor":"middle",text:"End"}]
	},
	86:{
		attr:{x:722,	y:70,	width:40,	height:40},
		data:[{x:5,y:16,class:"key",text:"Page"},{x:5,y:28,class:"key",text:"Down"}]
	},

	//arrows
	83:{
		attr:{x:680,	y:154,	width:40,	height:40},
		data:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"↑"}]
	},
	79:{
		attr:{x:638,	y:196,	width:40,	height:40},
		data:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"←"}]
	},
	84:{
		attr:{x:680,	y:196,	width:40,	height:40},
		data:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"↓"}]
	},
	89:{
		attr:{x:722,	y:196,	width:40,	height:40},
		data:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"→"}]
	},
},
keypad:{
	90:{
		attr:{x:770,	y:28,	width:40,	height:40},
		data:[{x:5,y:16,class:"key",text:"Num"},{x:5,y:28,class:"key",text:"Lock"}]
	},
	91:{
		attr:{x:770,	y:70,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"7"},{x:35,y:32,class:"key","text-anchor":"end",text:"Home"}]
	},
	92:{
		attr:{x:770,	y:112,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"4"},{x:35,y:32,class:"key","text-anchor":"end",text:"←"}]
	},
	93:{
		attr:{x:770,	y:154,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"1"},{x:35,y:32,class:"key","text-anchor":"end",text:"End"}]
	},
	94:{
		attr:{x:770,	y:196,	width:82,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"0"},{x:8,y:32,class:"key",text:"Ins"}]
	},
	95:{
		attr:{x:812,	y:28,	width:40,	height:40},
		data:[{x:15,y:25,class:"key primary",text:"⁄"}]
	},
	96:{
		attr:{x:812,	y:70,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"8"},{x:35,y:32,class:"key","text-anchor":"end",text:"↑"}]
	},
	97:{
		attr:{x:812,	y:112,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"5"}]
	},
	98:{
		attr:{x:812,	y:154,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"2"},{x:35,y:32,class:"key","text-anchor":"end",text:"↓"}]
	},
	100:{
		attr:{x:854,	y:28,	width:40,	height:40},
		data:[{x:15,y:25,class:"key primary",text:"×"}]
	},
	101:{
		attr:{x:854,	y:70,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"9"},{x:35,y:32,class:"key","text-anchor":"end",text:"Pg Up"}]
	},
	102:{
		attr:{x:854,	y:112,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"6"},{x:35,y:32,class:"key","text-anchor":"end",text:"→"}]
	},
	103:{
		attr:{x:854,	y:154,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"3"},{x:35,y:32,class:"key","text-anchor":"end",text:"Pg Dn"}]
	},
	104:{
		attr:{x:854,	y:196,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"."},{x:35,y:32,class:"key","text-anchor":"end",text:"Del"}]
	},
	105:{
		attr:{x:896,	y:28,	width:40,	height:40},
		data:[{x:15,y:25,class:"key primary",text:"−"}]
	},
	106:{
		attr:{x:896,	y:70,	width:40,	height:82},
		data:[{x:15,y:25,class:"key primary",text:"+"}]
	},
	108:{
		attr:{x:896,	y:154,	width:40,	height:82},
		data:[{x:5,y:16,class:"key",text:"Enter"}]
	},
},
rightFull:{
	94:{
		attr:{x:770,	y:196,	width:40,	height:40},
		data:[{x:8,y:18,class:"key primary",text:"0"},{x:8,y:32,class:"key",text:"Ins"}]
	},
	99:{
		attr:{x:812,	y:196,	width:40,	height:40},
		data:[]
	},
	106:{
		attr:{x:896,	y:70,	width:40,	height:40},
		data:[{x:15,y:25,class:"key primary",text:"+"},]
	},
	107:{
		attr:{x:896,	y:112,	width:40,	height:40},
		data:[{x:15,y:25,class:"key primary",text:"+"}]
	},
	108:{
		attr:{x:896,	y:154,	width:40,	height:40},
		data:[{x:5,y:16,class:"key",text:"Enter"}]
	},
	109:{
		attr:{x:896,	y:196,	width:40,	height:40},
		data:[{x:5,y:16,class:"key",text:"Enter"}]
	},
},
bottom:{
	58:{
		attr:{x:0,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,class:"key",text:"Ctrl"}]
	},
	59:{
		attr:{x:52,	y:168,	width:50,	height:40,	class:"special"},
		data:[]
	},
	60:{
		attr:{x:104,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,class:"key",text:"Alt"}]
	},
	61:{
		attr:{x:156,	y:168,	width:317,	height:40},
		data:[]
	},
	62:{
		attr:{x:475,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,class:"key",text:"Alt Gr"}]
	},
	63:{
		attr:{x:527,	y:168,	width:50,	height:40,	class:"special"},
		data:[]
	},
	64:{
		attr:{x:579,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:15,y:25,class:"key",text:"Ctrl"}]
	},
},
bottomJIS:{
	150:{
		attr:{x:156,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:25,y:25,class:"key","text-anchor":"middle",text:"無変換"}]
	},
	61:{
		attr:{x:208,	y:168,	width:161,	height:40},
		data:[]
	},
	151:{
		attr:{x:371,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:25,y:25,class:"key","text-anchor":"middle",text:"変換"}]
	},
	152:{
		attr:{x:423,	y:168,	width:50,	height:40,	class:"special"},
		data:[{x:25,y:15,class:"key secondary","text-anchor":"middle",text:"カタカナ"},{x:25,y:30,class:"key secondary","text-anchor":"middle",text:" ひらがな"}]
	},
},
base:{
	1:{
		attr:{x:0,	y:0,	width:40,	height:40},
		data:[]
	},
	2:{
		attr:{x:42,	y:0,	width:40,	height:40},
		data:[]
	},
	3:{
		attr:{x:84,	y:0,	width:40,	height:40},
		data:[]
	},
	4:{
		attr:{x:126,	y:0,	width:40,	height:40},
		data:[]
	},
	5:{
		attr:{x:168,	y:0,	width:40,	height:40},
		data:[]
	},
	6:{
		attr:{x:210,	y:0,	width:40,	height:40},
		data:[]
	},
	7:{
		attr:{x:252,	y:0,	width:40,	height:40},
		data:[]
	},
	8:{
		attr:{x:294,	y:0,	width:40,	height:40},
		data:[]
	},
	9:{
		attr:{x:336,	y:0,	width:40,	height:40},
		data:[]
	},
	10:{
		attr:{x:378,	y:0,	width:40,	height:40},
		data:[]
	},
	11:{
		attr:{x:420,	y:0,	width:40,	height:40},
		data:[]
	},
	12:{
		attr:{x:462,	y:0,	width:40,	height:40},
		data:[]
	},
	13:{
		attr:{x:504,	y:0,	width:40,	height:40},
		data:[]
	},
	16:{
		attr:{x:0,	y:42,	width:63,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Tab"}]
	},
	17:{
		attr:{x:65,	y:42,	width:40,	height:40},
		data:[]
	},
	18:{
		attr:{x:107,	y:42,	width:40,	height:40},
		data:[]
	},
	19:{
		attr:{x:149,	y:42,	width:40,	height:40},
		data:[]
	},
	20:{
		attr:{x:191,	y:42,	width:40,	height:40},
		data:[]
	},
	21:{
		attr:{x:233,	y:42,	width:40,	height:40},
		data:[]
	},
	22:{
		attr:{x:275,	y:42,	width:40,	height:40},
		data:[]
	},
	23:{
		attr:{x:317,	y:42,	width:40,	height:40},
		data:[]
	},
	24:{
		attr:{x:359,	y:42,	width:40,	height:40},
		data:[]
	},
	25:{
		attr:{x:401,	y:42,	width:40,	height:40},
		data:[]
	},
	26:{
		attr:{x:443,	y:42,	width:40,	height:40},
		data:[]
	},
	27:{
		attr:{x:485,	y:42,	width:40,	height:40},
		data:[]
	},
	28:{
		attr:{x:527,	y:42,	width:40,	height:40},
		data:[]
	},
	
	30:{
		attr:{x:0,	y:84,	width:70,	height:40,class:"special"},
		data:[{x:12,y:15,class:"key",text:"Caps"},{x:12,y:30,class:"key",text:"Lock"}]
	},
	31:{
		attr:{x:72,	y:84,	width:40,	height:40},
		data:[]
	},
	32:{
		attr:{x:114,	y:84,	width:40,	height:40},
		data:[]
	},
	33:{
		attr:{x:156,	y:84,	width:40,	height:40},
		data:[]
	},
	34:{
		attr:{x:198,	y:84,	width:40,	height:40},
		data:[]
	},
	35:{
		attr:{x:240,	y:84,	width:40,	height:40},
		data:[]
	},
	36:{
		attr:{x:282,	y:84,	width:40,	height:40},
		data:[]
	},
	37:{
		attr:{x:324,	y:84,	width:40,	height:40},
		data:[]
	},
	38:{
		attr:{x:366,	y:84,	width:40,	height:40},
		data:[]
	},
	39:{
		attr:{x:408,	y:84,	width:40,	height:40},
		data:[]
	},
	40:{
		attr:{x:450,	y:84,	width:40,	height:40},
		data:[]
	},
	41:{
		attr:{x:492,	y:84,	width:40,	height:40},
		data:[]
	},
	46:{
		attr:{x:94,	y:126,	width:40,	height:40},
		data:[]
	},
	47:{
		attr:{x:136,	y:126,	width:40,	height:40},
		data:[]
	},
	48:{
		attr:{x:178,	y:126,	width:40,	height:40},
		data:[]
	},
	49:{
		attr:{x:220,	y:126,	width:40,	height:40},
		data:[]
	},
	50:{
		attr:{x:262,	y:126,	width:40,	height:40},
		data:[]
	},
	51:{
		attr:{x:304,	y:126,	width:40,	height:40},
		data:[]
	},
	52:{
		attr:{x:346,	y:126,	width:40,	height:40},
		data:[]
	},
	53:{
		attr:{x:388,	y:126,	width:40,	height:40},
		data:[]
	},
	54:{
		attr:{x:430,	y:126,	width:40,	height:40},
		data:[]
	},
	55:{
		attr:{x:472,	y:126,	width:40,	height:40},
		data:[]
	},
},
ISO:{
	14:{
		attr:{x:546,	y:0,	width:83,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Backspace"}]
	},
	29:{
		attr:{x:569,	y:42,	width:60,	height:82,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Enter"}]
	},
	42:{
		attr:{x:534,	y:84,	width:40,	height:40},
		data:[]
	},
	44:{
		attr:{x:0,	y:126,	width:50,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Shift"}]
	},
	45:{
		attr:{x:52,	y:126,	width:40,	height:40},
		data:[]
	},
	57:{
		attr:{x:514,	y:126,	width:115,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Shift"}]
	},
},
ANSI:{
	14:{
		attr:{x:546,	y:0,	width:83,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Backspace"}]
	},
	42:{
		attr:{x:569,	y:42,	width:60,	height:40},
		data:[]
	},
	29:{
		attr:{x:534,	y:84,	width:95,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Enter"}]
	},
	44:{
		attr:{x:0,	y:126,	width:92,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Shift"}]
	},
	57:{
		attr:{x:514,	y:126,	width:115,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Shift"}]
	},
},
JIS:{
	14:{
		attr:{x:588,	y:0,	width:41,	height:40,class:"special"},
		data:[]
	},
	15:{
		attr:{x:546,	y:0,	width:41,	height:40},
		data:[]
	},
	29:{
		attr:{x:569,	y:42,	width:60,	height:82,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Enter"}]
	},
	42:{
		attr:{x:534,	y:84,	width:40,	height:40},
		data:[]
	},
	44:{
		attr:{x:0,	y:126,	width:92,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Shift"}]
	},
	56:{
		attr:{x:514,	y:126,	width:40,	height:40},
		data:[]
	},
	57:{
		attr:{x:556,	y:126,	width:73,	height:40,class:"special"},
		data:[{x:15,y:25,class:"key",text:"Shift"}]
	},
},
}

const layers={
esDvorak:{
	name:"🇪🇸 Dvorak",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"},{x:30,y:28,class:"secondary",text:"|"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"\\"},{x:30,y:28,class:"secondary",text:"@"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"·"},{x:30,y:28,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"},{x:30,y:28,class:"secondary",text:"~"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"},{x:30,y:28,class:"secondary",text:"€"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"&"},{x:30,y:28,class:"secondary",text:"¬"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"/"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"("}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:")"}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:"="}]},
	12:{key:"OEM_4",data:[{x:10,y:28,text:"'"},{x:10,y:15,class:"secondary",text:"?"}]},
	13:{key:"OEM_6",data:[{x:10,y:28,text:"¡"},{x:10,y:15,class:"secondary",text:"¿"}]},
	17:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:":"}]},
	18:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:";"}]},
	19:{key:"OEM_3",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ñ"}]},
	20:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	21:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	22:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	23:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	24:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	25:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	26:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	27:{key:"OEM_1",data:[{x:10,y:28,text:"`"},{x:10,y:15,class:"secondary",text:"^"},{x:30,y:28,class:"secondary",text:"["}]},
	28:{key:"OEM_PLUS",data:[{x:10,y:28,text:"+"},{x:10,y:15,class:"secondary",text:"*"},{x:30,y:28,class:"secondary",text:"]"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	32:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	33:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"secondary",text:"€"}]},
	34:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	35:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	36:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	37:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	38:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	39:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	40:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	41:{key:"OEM_7",data:[{x:10,y:28,text:"´"},{x:10,y:15,class:"secondary",text:"¨"},{x:30,y:28,class:"secondary",text:"{"}]},
	1:{key:"OEM_5",data:[{x:10,y:28,text:"º"},{x:10,y:15,class:"secondary",text:"ª"},{x:30,y:28,class:"secondary",text:"\\"}]},
	42:{key:"OEM_2",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ç"},{x:30,y:28,class:"secondary",text:"}"}]},
	46:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"}]},
	47:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"}]},
	48:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	49:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	50:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	51:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	53:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	54:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	55:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"}]}
	}
},

esQwerty:{
	name:"🇪🇸 QWERTY",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"},{x:30,y:28,class:"secondary",text:"|"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"\\"},{x:30,y:28,class:"secondary",text:"@"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"·"},{x:30,y:28,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"},{x:30,y:28,class:"secondary",text:"~"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"},{x:30,y:28,class:"secondary",text:"€"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"&"},{x:30,y:28,class:"secondary",text:"¬"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"/"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"("}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:")"}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:"="}]},
	12:{key:"OEM_4",data:[{x:10,y:28,text:"'"},{x:10,y:15,class:"secondary",text:"?"}]},
	13:{key:"OEM_6",data:[{x:10,y:28,text:"¡"},{x:10,y:15,class:"secondary",text:"¿"}]},
	17:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"}]},
	18:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	19:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"secondary",text:"€"}]},
	20:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	21:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	22:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	23:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	24:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	25:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	27:{key:"OEM_1",data:[{x:10,y:28,text:"`"},{x:10,y:15,class:"secondary",text:"^"},{x:30,y:28,class:"secondary",text:"["}]},
	28:{key:"OEM_PLUS",data:[{x:10,y:28,text:"+"},{x:10,y:15,class:"secondary",text:"*"},{x:30,y:28,class:"secondary",text:"]"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	32:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	33:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	34:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	35:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	36:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	37:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	38:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"OEM_3",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ñ"}]},
	41:{key:"OEM_7",data:[{x:10,y:28,text:"´"},{x:10,y:15,class:"secondary",text:"¨"},{x:30,y:28,class:"secondary",text:"{"}]},
	1:{key:"OEM_5",data:[{x:10,y:28,text:"º"},{x:10,y:15,class:"secondary",text:"ª"},{x:30,y:28,class:"secondary",text:"\\"}]},
	42:{key:"OEM_2",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ç"},{x:30,y:28,class:"secondary",text:"}"}]},
	46:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	47:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	48:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	49:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	50:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	51:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	53:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:";"}]},
	54:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:":"}]},
	55:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"}]}
	}
},
latamQwerty:{
	name:"🇲🇽 QWERTY",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"\\"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"&"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"/"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"("}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:")"}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:"="}]},
	12:{key:"OEM_4",data:[{x:10,y:28,text:"'"},{x:10,y:15,class:"secondary",text:"?"},{x:30,y:28,class:"secondary",text:"\\"}]},
	13:{key:"OEM_6",data:[{x:10,y:28,text:"¿"},{x:10,y:15,class:"secondary",text:"¡"}]},
	17:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"},{x:30,y:28,class:"secondary",text:"@"}]},
	18:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	19:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"}]},
	20:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	21:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	22:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	23:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	24:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	25:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	27:{key:"OEM_1",data:[{x:10,y:28,text:"´"},{x:10,y:15,class:"secondary",text:"¨"}]},
	28:{key:"OEM_PLUS",data:[{x:10,y:28,text:"+"},{x:10,y:15,class:"secondary",text:"*"},{x:30,y:28,class:"secondary",text:"~"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	32:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	33:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	34:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	35:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	36:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	37:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	38:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"OEM_3",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ñ"}]},
	41:{key:"OEM_7",data:[{x:10,y:28,text:"{"},{x:10,y:15,class:"secondary",text:"["},{x:30,y:28,class:"secondary",text:"^"}]},
	1:{key:"OEM_5",data:[{x:10,y:28,text:"|"},{x:10,y:15,class:"secondary",text:"°"},{x:30,y:28,class:"secondary",text:"¬"}]},
	42:{key:"OEM_2",data:[{x:10,y:28,text:"}"},{x:10,y:15,class:"secondary",text:"]"},{x:30,y:28,class:"secondary",text:"`"}]},
	46:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	47:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	48:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	49:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	50:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	51:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	53:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:";"}]},
	54:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:":"}]},
	55:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"}]}
	}
},
usaDvorak:{
	name:"🇺🇸 Dvorak",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"@"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"^"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"&"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"*"}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:"("}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:")"}]},
	12:{key:"OEM_4",data:[{x:10,y:28,text:"["},{x:10,y:15,class:"secondary",text:"{"}]},
	13:{key:"OEM_6",data:[{x:10,y:28,text:"]"},{x:10,y:15,class:"secondary",text:"}"}]},
	17:{key:"OEM_7",data:[{x:10,y:28,text:"'"},{x:10,y:15,class:"secondary",text:"\\"}]},
	18:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:"<"}]},
	19:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:">"}]},
	20:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	21:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	22:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	23:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	24:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	25:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	26:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	27:{key:"OEM_2",data:[{x:10,y:28,text:"/"},{x:10,y:15,class:"secondary",text:"?"}]},
	28:{key:"OEM_PLUS",data:[{x:10,y:28,text:"="},{x:10,y:15,class:"secondary",text:"+"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	32:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	33:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"}]},
	34:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	35:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	36:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	37:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	38:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	39:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	40:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	41:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"}]},
	1:{key:"OEM_3",data:[{x:10,y:28,text:"`"},{x:10,y:15,class:"secondary",text:"~"}]},
	42:{key:"OEM_5",data:[{x:10,y:28,text:"\\"},{x:10,y:15,class:"secondary",text:"|"}]},
	46:{key:"OEM_1",data:[{x:10,y:28,text:";"},{x:10,y:15,class:"secondary",text:":"}]},
	47:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"}]},
	48:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	49:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	50:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	51:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	53:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	54:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	55:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"\\"},{x:10,y:15,class:"secondary",text:"|"}]}
	}
},
usaQwerty:{
	name:"🇺🇸 QWERTY",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"@"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"^"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"&"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"*"}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:"("}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:")"}]},
	12:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"}]},
	13:{key:"OEM_PLUS",data:[{x:10,y:28,text:"="},{x:10,y:15,class:"secondary",text:"+"}]},
	17:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"}]},
	18:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	19:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"}]},
	20:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	21:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	22:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	23:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	24:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	25:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	27:{key:"OEM_4",data:[{x:10,y:28,text:"["},{x:10,y:15,class:"secondary",text:"{"}]},
	28:{key:"OEM_6",data:[{x:10,y:28,text:"]"},{x:10,y:15,class:"secondary",text:"}"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	32:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	33:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	34:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	35:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	36:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	37:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	38:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"OEM_1",data:[{x:10,y:28,text:";"},{x:10,y:15,class:"secondary",text:":"}]},
	41:{key:"OEM_7",data:[{x:10,y:28,text:"'"},{x:10,y:15,class:"secondary",text:"\\"}]},
	1:{key:"OEM_3",data:[{x:10,y:28,text:"`"},{x:10,y:15,class:"secondary",text:"~"}]},
	42:{key:"OEM_5",data:[{x:10,y:28,text:"\\"},{x:10,y:15,class:"secondary",text:"|"}]},
	46:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	47:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	48:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	49:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	50:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	51:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	53:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:"<"}]},
	54:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:">"}]},
	55:{key:"OEM_2",data:[{x:10,y:28,text:"/"},{x:10,y:15,class:"secondary",text:"?"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"\\"},{x:10,y:15,class:"secondary",text:"|"}]}
	}
},
"frAZERTY":{
	name:"🇫🇷 AZERTY",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"&"},{x:10,y:15,class:"secondary",text:"1"}]},
	3:{key:"2",data:[{x:10,y:28,text:"é"},{x:10,y:15,class:"secondary",text:"2"},{x:30,y:28,class:"secondary",text:"~"}]},
	4:{key:"3",data:[{x:10,y:28,text:"\\"},{x:10,y:15,class:"secondary",text:"3"},{x:30,y:28,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"'"},{x:10,y:15,class:"secondary",text:"4"},{x:30,y:28,class:"secondary",text:"{"}]},
	6:{key:"5",data:[{x:10,y:28,text:"("},{x:10,y:15,class:"secondary",text:"5"},{x:30,y:28,class:"secondary",text:"["}]},
	7:{key:"6",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"6"},{x:30,y:28,class:"secondary",text:"|"}]},
	8:{key:"7",data:[{x:10,y:28,text:"è"},{x:10,y:15,class:"secondary",text:"7"},{x:30,y:28,class:"secondary",text:"`"}]},
	9:{key:"8",data:[{x:10,y:28,text:"_"},{x:10,y:15,class:"secondary",text:"8"},{x:30,y:28,class:"secondary",text:"\\"}]},
	10:{key:"9",data:[{x:10,y:28,text:"ç"},{x:10,y:15,class:"secondary",text:"9"},{x:30,y:28,class:"secondary",text:"^"}]},
	11:{key:"0",data:[{x:10,y:28,text:"à"},{x:10,y:15,class:"secondary",text:"0"},{x:30,y:28,class:"secondary",text:"@"}]},
	12:{key:"OEM_4",data:[{x:10,y:28,text:")"},{x:10,y:15,class:"secondary",text:"°"},{x:30,y:28,class:"secondary",text:"]"}]},
	13:{key:"OEM_PLUS",data:[{x:10,y:28,text:"="},{x:10,y:15,class:"secondary",text:"+"},{x:30,y:28,class:"secondary",text:"}"}]},
	17:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	18:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	19:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"secondary",text:"€"}]},
	20:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	21:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	22:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	23:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	24:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	25:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	27:{key:"OEM_6",data:[{x:10,y:28,text:"^"},{x:10,y:15,class:"secondary",text:"¨"}]},
	28:{key:"OEM_1",data:[{x:10,y:28,text:"$"},{x:10,y:15,class:"secondary",text:"£"},{x:30,y:28,class:"secondary",text:"¤"}]},
	31:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"}]},
	32:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	33:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	34:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	35:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	36:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	37:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	38:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	41:{key:"OEM_3",data:[{x:10,y:28,text:"ù"},{x:10,y:15,class:"secondary",text:"%"}]},
	1:{key:"OEM_7",data:[{x:10,y:28,text:"²"}]},
	42:{key:"OEM_5",data:[{x:10,y:28,text:"*"},{x:10,y:15,class:"secondary",text:"µ"}]},
	46:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	47:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	48:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	49:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	50:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	51:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	52:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:"?"}]},
	53:{key:"OEM_PERIOD",data:[{x:10,y:28,text:";"},{x:10,y:15,class:"secondary",text:"."}]},
	54:{key:"OEM_2",data:[{x:10,y:28,text:":"},{x:10,y:15,class:"secondary",text:"/"}]},
	55:{key:"OEM_8",data:[{x:10,y:28,text:"!"},{x:10,y:15,class:"secondary",text:"§"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"}]}
	}
},
deQWERTZ:{
	name:"🇩🇪 QWERTZ",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"\\"},{x:30,y:28,class:"secondary",text:"²"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"§"},{x:30,y:28,class:"secondary",text:"³"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"&"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"/"},{x:30,y:28,class:"secondary",text:"{"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"("},{x:30,y:28,class:"secondary",text:"["}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:")"},{x:30,y:28,class:"secondary",text:"]"}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:"="},{x:30,y:28,class:"secondary",text:"}"}]},
	12:{key:"OEM_4",data:[{x:10,y:28,text:"ß"},{x:10,y:15,class:"secondary",text:"?"},{x:30,y:28,class:"secondary",text:"\\"},{x:30,y:28,class:"secondary",text:"ẞ"}]},
	13:{key:"OEM_6",data:[{x:10,y:28,text:"´"},{x:10,y:15,class:"secondary",text:"`"}]},
	17:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"},{x:30,y:28,class:"secondary",text:"@"}]},
	18:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	19:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"secondary",text:"€"}]},
	20:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	21:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"}]},
	22:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	23:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	24:{key:"I",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"I"}]},
	25:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	27:{key:"OEM_1",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ü"}]},
	28:{key:"OEM_PLUS",data:[{x:10,y:28,text:"+"},{x:10,y:15,class:"secondary",text:"*"},{x:30,y:28,class:"secondary",text:"~"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"}]},
	32:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"}]},
	33:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	34:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	35:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	36:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	37:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	38:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"OEM_3",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ö"}]},
	41:{key:"OEM_7",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ä"}]},
	1:{key:"OEM_5",data:[{x:10,y:28,text:"^"},{x:10,y:15,class:"secondary",text:"°"}]},
	42:{key:"OEM_2",data:[{x:10,y:28,text:"#"},{x:10,y:15,class:"secondary",text:"'"}]},
	46:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	47:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	48:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	49:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	50:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	51:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"},{x:30,y:28,class:"secondary",text:"µ"}]},
	53:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:";"}]},
	54:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:":"}]},
	55:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"},{x:30,y:28,class:"secondary",text:"|"}]}
	}
},
trQWERTY:{
	name:"🇹🇷 QWERTY",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"},{x:30,y:28,class:"secondary",text:">"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"'"},{x:30,y:28,class:"secondary",text:"£"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"^"},{x:30,y:28,class:"secondary",text:"#"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"+"},{x:30,y:28,class:"secondary",text:"$"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"},{x:30,y:28,class:"secondary",text:"½"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"&"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"/"},{x:30,y:28,class:"secondary",text:"{"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"("},{x:30,y:28,class:"secondary",text:"["}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:")"},{x:30,y:28,class:"secondary",text:"]"}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:"="},{x:30,y:28,class:"secondary",text:"}"}]},
	12:{key:"OEM_8",data:[{x:10,y:28,text:"*"},{x:10,y:15,class:"secondary",text:"?"},{x:30,y:28,class:"secondary",text:"\\"}]},
	13:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"},{x:30,y:28,class:"secondary",text:"|"}]},
	17:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"},{x:30,y:28,class:"secondary",text:"@"}]},
	18:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"}]},
	19:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"secondary",text:"€"}]},
	20:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	21:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"},{x:30,y:28,class:"secondary",text:"₺"}]},
	22:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"}]},
	23:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"}]},
	24:{key:"I",data:[{x:10,y:28,text:"ı"},{x:10,y:15,class:"secondary",text:"I"},{x:30,y:28,class:"secondary",text:"i"},{x:30,y:28,class:"secondary",text:"İ"}]},
	25:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"}]},
	27:{key:"OEM_4",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ğ"},{x:30,y:28,class:"secondary",text:"¨"}]},
	28:{key:"OEM_6",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ü"},{x:30,y:28,class:"secondary",text:"~"}]},
	31:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"},{x:30,y:28,class:"secondary",text:"æ"},{x:30,y:28,class:"secondary",text:"Æ"}]},
	32:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"},{x:30,y:28,class:"secondary",text:"ß"}]},
	33:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"}]},
	34:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"}]},
	35:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	36:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"}]},
	37:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"}]},
	38:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"OEM_1",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ş"},{x:30,y:28,class:"secondary",text:"´"}]},
	41:{key:"OEM_7",data:[{x:10,y:28,text:"i"},{x:10,y:15,class:"secondary",text:"İ"}]},
	1:{key:"OEM_3",data:[{x:10,y:28,text:"\\"},{x:10,y:15,class:"secondary",text:"é"},{x:30,y:28,class:"secondary",text:"<"}]},
	42:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:";"},{x:30,y:28,class:"secondary",text:"`"}]},
	46:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	47:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"}]},
	48:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	49:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"}]},
	50:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"}]},
	51:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	52:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	53:{key:"OEM_2",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ö"}]},
	54:{key:"OEM_5",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ç"}]},
	55:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:":"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"},{x:30,y:28,class:"secondary",text:"|"}]}
	}
},
trF:{
	name:"🇹🇷 Turkish F",
	keys:{
	2:{key:"1",data:[{x:10,y:28,text:"1"},{x:10,y:15,class:"secondary",text:"!"},{x:30,y:28,class:"secondary",text:"¹"},{x:30,y:28,class:"secondary",text:"¡"}]},
	3:{key:"2",data:[{x:10,y:28,text:"2"},{x:10,y:15,class:"secondary",text:"\\"},{x:30,y:28,class:"secondary",text:"²"}]},
	4:{key:"3",data:[{x:10,y:28,text:"3"},{x:10,y:15,class:"secondary",text:"^"},{x:30,y:28,class:"secondary",text:"#"},{x:30,y:28,class:"secondary",text:"³"}]},
	5:{key:"4",data:[{x:10,y:28,text:"4"},{x:10,y:15,class:"secondary",text:"$"},{x:30,y:28,class:"secondary",text:"¼"},{x:30,y:28,class:"secondary",text:"¤"}]},
	6:{key:"5",data:[{x:10,y:28,text:"5"},{x:10,y:15,class:"secondary",text:"%"},{x:30,y:28,class:"secondary",text:"½"}]},
	7:{key:"6",data:[{x:10,y:28,text:"6"},{x:10,y:15,class:"secondary",text:"&"},{x:30,y:28,class:"secondary",text:"¾"}]},
	8:{key:"7",data:[{x:10,y:28,text:"7"},{x:10,y:15,class:"secondary",text:"'"},{x:30,y:28,class:"secondary",text:"{"}]},
	9:{key:"8",data:[{x:10,y:28,text:"8"},{x:10,y:15,class:"secondary",text:"("},{x:30,y:28,class:"secondary",text:"["}]},
	10:{key:"9",data:[{x:10,y:28,text:"9"},{x:10,y:15,class:"secondary",text:")"},{x:30,y:28,class:"secondary",text:"]"}]},
	11:{key:"0",data:[{x:10,y:28,text:"0"},{x:10,y:15,class:"secondary",text:"="},{x:30,y:28,class:"secondary",text:"}"}]},
	12:{key:"OEM_PLUS",data:[{x:10,y:28,text:"/"},{x:10,y:15,class:"secondary",text:"?"},{x:30,y:28,class:"secondary",text:"\\"},{x:30,y:28,class:"secondary",text:"¿"}]},
	13:{key:"OEM_MINUS",data:[{x:10,y:28,text:"-"},{x:10,y:15,class:"secondary",text:"_"},{x:30,y:28,class:"secondary",text:"|"}]},
	17:{key:"F",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"F"},{x:30,y:28,class:"secondary",text:"@"}]},
	18:{key:"G",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"G"}]},
	19:{key:"OEM_1",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ğ"}]},
	20:{key:"I",data:[{x:10,y:28,text:"ı"},{x:10,y:15,class:"secondary",text:"I"},{x:30,y:28,class:"secondary",text:"¶"},{x:30,y:28,class:"secondary",text:"®"}]},
	21:{key:"O",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"O"}]},
	22:{key:"D",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"D"},{x:30,y:28,class:"secondary",text:"¥"}]},
	23:{key:"R",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"R"}]},
	24:{key:"N",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"N"}]},
	25:{key:"H",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"H"},{x:30,y:28,class:"secondary",text:"ø"},{x:30,y:28,class:"secondary",text:"Ø"}]},
	26:{key:"P",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"P"},{x:30,y:28,class:"secondary",text:"£"}]},
	27:{key:"Q",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Q"},{x:30,y:28,class:"secondary",text:"¨"}]},
	28:{key:"W",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"W"},{x:30,y:28,class:"secondary",text:"~"}]},
	31:{key:"U",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"U"},{x:30,y:28,class:"secondary",text:"æ"},{x:30,y:28,class:"secondary",text:"Æ"}]},
	32:{key:"OEM_4",data:[{x:10,y:28,text:"i"},{x:10,y:15,class:"secondary",text:"İ"},{x:30,y:28,class:"secondary",text:"ß"},{x:30,y:28,class:"secondary",text:"§"}]},
	33:{key:"E",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"secondary",text:"€"}]},
	34:{key:"A",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"A"},{x:30,y:28,class:"secondary",text:"ª"}]},
	35:{key:"OEM_6",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ü"}]},
	36:{key:"T",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"T"},{x:30,y:28,class:"secondary",text:"₺"}]},
	37:{key:"K",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"K"}]},
	38:{key:"M",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"M"}]},
	39:{key:"L",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"L"}]},
	40:{key:"Y",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Y"},{x:30,y:28,class:"secondary",text:"´"}]},
	41:{key:"OEM_7",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ş"}]},
	1:{key:"OEM_3",data:[{x:10,y:28,text:"+"},{x:10,y:15,class:"secondary",text:"*"},{x:30,y:28,class:"secondary",text:"¬"}]},
	42:{key:"X",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"X"},{x:30,y:28,class:"secondary",text:"`"}]},
	46:{key:"J",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"J"},{x:30,y:28,class:"secondary",text:"«"},{x:30,y:28,class:"secondary",text:"<"}]},
	47:{key:"OEM_5",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ö"},{x:30,y:28,class:"secondary",text:"»"},{x:30,y:28,class:"secondary",text:">"}]},
	48:{key:"V",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"V"},{x:30,y:28,class:"secondary",text:"¢"},{x:30,y:28,class:"secondary",text:"©"}]},
	49:{key:"C",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"C"}]},
	50:{key:"OEM_2",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Ç"}]},
	51:{key:"Z",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"Z"}]},
	52:{key:"S",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"S"},{x:30,y:28,class:"secondary",text:"µ"},{x:30,y:28,class:"secondary",text:"º"}]},
	53:{key:"B",data:[{x:20,y:25,class:"primary","text-anchor":"middle",text:"B"},{x:30,y:28,class:"secondary",text:"×"}]},
	54:{key:"OEM_PERIOD",data:[{x:10,y:28,text:"."},{x:10,y:15,class:"secondary",text:":"},{x:30,y:28,class:"secondary",text:"÷"}]},
	55:{key:"OEM_COMMA",data:[{x:10,y:28,text:","},{x:10,y:15,class:"secondary",text:";"},{x:30,y:28,class:"secondary",text:"­"}]},
	45:{key:"OEM_102",data:[{x:10,y:28,text:"<"},{x:10,y:15,class:"secondary",text:">"},{x:30,y:28,class:"secondary",text:"|"},{x:30,y:28,class:"secondary",text:"¦"}]}
	}
},



/* Special layers	*/
keyboardEvent:{
	name:"Js KeyBoardEvent",
	keys:{ 
	110:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Escape"}]},
	112:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F1"}]},
	113:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F2"}]},
	114:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F3"}]},
	115:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F4"}]},
	116:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F5"}]},
	117:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F6"}]},
	118:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F7"}]},
	119:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F8"}]},
	120:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F9"}]},
	121:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F10"}]},
	122:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F11"}]},
	123:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"F12"}]},
	124:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:""}]},
	125:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:""}]},
	126:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:""}]},
	75:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Insert"}]},
	76:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Delete"}]},
	80:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Home"}]},
	81:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"End"}]},
	85:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"PageUp"}]},
	86:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"PageDown"}]},

	79:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"ArrowLeft"}]},
	83:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"ArrowUp"}]},
	84:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"ArrowDown"}]},
	89:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"ArrowRight"}]},

	90:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumLock"}]},
	91:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad7"}]},
	92:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad4"}]},
	93:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad1"}]},
	94:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad0"}]},
	95:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumpadDivide"}]},
	96:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad8"}]},
	97:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad5"}]},
	98:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad2"}]},
	100:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumpadMultiply"}]},
	101:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad9"}]},
	102:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad6"}]},
	103:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"Numpad3"}]},
	104:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumpadDecimal"}]},
	105:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumpadSubtract"}]},
	106:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumpadAdd"}]},
	108:{data:[{x:20,y:15,class:"secondary","text-anchor":"middle",text:"NumpadEnter"}]},

	58:{data:[{x:25,y:25,class:"secondary","text-anchor":"middle",text:"ControlLeft"}]},
	59:{data:[{x:25,y:25,class:"secondary","text-anchor":"middle",text:"OSLeft"}]},
	60:{data:[{x:25,y:25,class:"secondary","text-anchor":"middle",text:"AltLeft"}]},
	61:{data:[{x:15,y:25,class:"secondary",text:"Space"}]},
	62:{data:[{x:25,y:25,class:"secondary","text-anchor":"middle",text:"AltRight"}]},
	64:{data:[{x:25,y:25,class:"secondary","text-anchor":"middle",text:"ControlRight"}]},

	14:{data:[{x:10,y:25,class:"secondary",text:"Backspace"}]},
	16:{data:[{x:10,y:25,class:"secondary",text:"Tab"}]},
	30:{data:[{x:10,y:25,class:"secondary",text:"CapsLock"}]},
	44:{data:[{x:10,y:25,class:"secondary",text:"ShiftLeft"}]},
	29:{data:[{x:10,y:25,class:"secondary",text:"Enter"}]},
	57:{data:[{x:10,y:25,class:"secondary",text:"ShiftRight"}]},

	1:{key:"OEM_5",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Backquote"}]},
	2:{key:"1",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit1"}]},
	3:{key:"2",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit2"}]},
	4:{key:"3",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit3"}]},
	5:{key:"4",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit4"}]},
	6:{key:"5",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit5"}]},
	7:{key:"6",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit6"}]},
	8:{key:"7",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit7"}]},
	9:{key:"8",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit8"}]},
	10:{key:"9",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit9"}]},
	11:{key:"0",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Digit0"}]},
	12:{key:"OEM_MINUS",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Minus"}]},
	13:{key:"OEM_EQUAL",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Equal"}]},
	15:{key:"OEM_yen",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"IntlYen"}]},
	17:{key:"",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyQ"}]},
	18:{key:"Q",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyW"}]},
	19:{key:"W",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyE"}]},
	20:{key:"E",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyR"}]},
	21:{key:"R",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyT"}]},
	22:{key:"T",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyY"}]},
	23:{key:"Y",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyU"}]},
	24:{key:"U",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyI"}]},
	25:{key:"I",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyO"}]},
	26:{key:"O",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyP"}]},
	27:{key:"OEM_1",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"BracketLeft"}]},
	28:{key:"OEM_PLUS",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"BracketRight"}]},
	31:{key:"A",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyA"}]},
	32:{key:"S",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyS"}]},
	33:{key:"D",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyD"}]},
	34:{key:"F",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyF"}]},
	35:{key:"G",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyG"}]},
	36:{key:"H",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyH"}]},
	37:{key:"J",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyJ"}]},
	38:{key:"K",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyK"}]},
	39:{key:"L",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyL"}]},
	40:{key:"OEM_6",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Semicolon"}]},
	41:{key:"OEM_7",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Quote"}]},
	42:{key:"OEM_2",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Backslash"}]},
	45:{key:"OEM_MINUS",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"IntlBackslash"}]},
	46:{key:"Z",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyZ"}]},
	47:{key:"X",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyX"}]},
	48:{key:"C",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyC"}]},
	49:{key:"V",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyV"}]},
	50:{key:"B",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyB"}]},
	51:{key:"N",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyN"}]},
	52:{key:"M",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"KeyM"}]},
	53:{key:"OEM_COMMA",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Comma"}]},
	54:{key:"OEM_PERIOD",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Period"}]},
	55:{key:"OEM_102",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"Slash"}]},
	56:{key:"OEM_ro",data:[{x:20,y:25,class:"secondary","text-anchor":"middle",text:"IntlRo"}]},
	}
},
}






var defaultRect={
	class:"key-zone",
	x:0,
	y:0,
	width:"100%",
	height:"100%"
};

var phisicalLayout={
	design:[
		{id:"10x",	name:"complete"},
		{id:"80",	name:"80%"},
		{id:"60",	name:"60%"}
	],
	layout:[
		{id:"ISO",	name:"ISO"},
		{id:"ANSI",	name:"ANSI"},
		{id:"JIS",	name:"JIS"},
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
	$theme=document.getElementById("theme");

for(let k in layers){
	var option=document.createElement("option");
	option.value=k;
	option.text=layers[k].name;
	$layer.appendChild(option);
}

if(window.location.hash){
	let hash=window.location.hash.substr(1).split('-');
	hash.forEach((x)=>{
		let y=document.querySelector("option[value='"+x+"']");
		if(y)
			y.selected="1";
	})
}
OnControlsChange();


function OnControlsChange(){CreateKeyboard($design.value,$layout.value,$layer.value,$theme.value)}
function CreateKeyboard(design,layout,layer,theme){
	$keyboard.querySelectorAll('svg').forEach((e)=>{e.remove()});
	window.location.hash=design+"-"+layout+"-"+layer+"-"+theme;

	let mlayouts=JSON.parse(JSON.stringify(layouts));// https://stackoverflow.com/a/122704/3875360

	var paddingTop=30;
	if(design=="10x"){
		GenerateSide(2,2,PrintKeyContent({...mlayouts.keypad,...mlayouts.top},layers[layer]));
		$keyboard.setAttribute("viewBox","0 0 940 240");
	}else if(design=="80"){
		GenerateSide(2,2,PrintKeyContent(mlayouts.top,layers[layer]));
		$keyboard.setAttribute("viewBox","0 0 766 240");
	}else if(design=="60"){
		paddingTop=2;
		$keyboard.setAttribute("viewBox","0 0 633 212");
	}
	
	let x=PrintKeyContent({...mlayouts.base,...mlayouts[layout],...(layout=="JIS"?{...mlayouts.bottom,...mlayouts.bottomJIS}:mlayouts.bottom)},layers[layer]);
	GenerateSide(2,paddingTop,x);

	if(layout!="ANSI"){//pintamos la tecla enter
		let p=document.createElementNS("http://www.w3.org/2000/svg","path");
		p.setAttribute("class","key-zone");
		p.setAttribute("d","m 0,0 0,40 7,0 0,42 53,0 0,-82 z");
		$keyboard.querySelector("[data-key='29']").prepend(p)
		$keyboard.querySelector("[data-key='29'] rect").remove();
	}
}

function PrintKeyContent(mLayout,mLayer){
	for(let x in mLayer.keys){
		let xx=mLayer.keys[x];
		if(mLayout[x]){
			mLayout[x].key	=xx.key;
			mLayout[x].data	=xx.data;
		}
	}
	return mLayout;
}

function GenerateSide(x,y,layer){
	let svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("x",x);
	svg.setAttribute("y",y);
	for(let k in layer){
		let l=layer[k];
		let key=document.createElementNS("http://www.w3.org/2000/svg","svg");
		
			for(var x in l.attr)
				key.setAttribute(x,l.attr[x]);
		
		key.setAttribute("data-key",k);
		if(l.class)
			key.setAttribute("class",l.class);
		GenerateKeyContent(key,l.data);
		svg.appendChild(key);
	}
	$keyboard.appendChild(svg);
}

function GenerateKeyContent(container,x){
	let key=document.createElementNS("http://www.w3.org/2000/svg","rect");
	for(let s in defaultRect)
		key.setAttribute(s,defaultRect[s]);
	container.appendChild(key);
	
	for(let y in x){
		key=document.createElementNS("http://www.w3.org/2000/svg","text");
		for(let h in x[y]){
			let z=x[y][h];
			if(h=="text")
				key.innerHTML=z;
			else
				key.setAttribute(h,z);
		}
		container.appendChild(key);
	}
}
