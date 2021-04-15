var $keyboard=document.getElementById("keyboard");
var $zone=document.getElementById("kb-zone");

var layers={
top:{
	110:{
		x:0,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"Esc"
		}
		]
	},
	112:{
		x:84,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F1"
		}
		]
	},
	113:{
		x:126,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F2"
		}
		]
	},
	114:{
		x:168,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F3"
		}
		]
	},
	115:{
		x:210,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F4"
		}
		]
	},
	116:{
		x:274,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F5"
		}
		]
	},
	117:{
		x:316,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F6"
		}
		]
	},
	118:{
		x:358,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F7"
		}
		]
	},
	119:{
		x:400,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F8"
		}
		]
	},
	120:{
		x:464,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F9"
		}
		]
	},
	121:{
		x:506,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F10"
		}
		]
	},
	122:{
		x:548,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F11"
		}
		]
	},
	123:{
		x:590,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"F12"
		}
		]
	},
	124:{
		x:638,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"Impr"
		}
		]
	},
	125:{
		x:680,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"Bloq"
		}
		]
	},
	126:{
		x:722,
		y:0,
		width:40,
		height:25,
		key:[
		{
			x:20,
			y:17,
			"text-anchor":"middle",
			class:"key",
			text:"Pause"
		}
		]
	},
	75:{
		x:638,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:16,
			class:"key",
			"text-anchor":"middle",
			text:"Insert"
		}
		]
	},
	80:{
		x:680,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:16,
			class:"key",
			"text-anchor":"middle",
			text:"Home"
		}
		]
	},
	85:{
		x:722,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:5,
			y:16,
			class:"key",
			text:"Page"
		},
		{
			x:5,
			y:28,
			class:"key",
			text:"Up"
		},
		]
	},
	76:{
		x:638,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:16,
			class:"key",
			"text-anchor":"middle",
			text:"Delete"
		}
		]
	},
	81:{
		x:680,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:16,
			class:"key",
			"text-anchor":"middle",
			text:"End"
		}
		]
	},
	86:{
		x:722,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:5,
			y:16,
			class:"key",
			text:"Page"
		},
		{
			x:5,
			y:28,
			class:"key",
			text:"Down"
		},
		]
	},

	//arrows
	83:{
		x:680,
		y:154,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:25,
			class:"key primary",
			"text-anchor":"middle",
			text:"↑"
		}
		]
	},
	79:{
		x:638,
		y:196,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:25,
			class:"key primary",
			"text-anchor":"middle",
			text:"←"
		}
		]
	},
	84:{
		x:680,
		y:196,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:25,
			class:"key primary",
			"text-anchor":"middle",
			text:"↓"
		}
		]
	},
	89:{
		x:722,
		y:196,
		width:40,
		height:40,
		key:[
		{
			x:20,
			y:25,
			class:"key primary",
			"text-anchor":"middle",
			text:"→"
		}
		]
	},
},
keypad:{
	//keypad
	90:{
		x:770,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:5,
			y:16,
			class:"key",
			text:"Num"
		},
		{
			x:5,
			y:28,
			class:"key",
			text:"Lock"
		}
		]
	},
	91:{
		x:770,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"7"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"Home"
		}
		]
	},
	92:{
		x:770,
		y:112,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"4"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"←"
		}
		]
	},
	93:{
		x:770,
		y:154,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"1"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"End"
		}
		]
	},
	94:{
		x:770,
		y:196,
		width:82,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"0"
		},
		{
			x:8,
			y:32,
			class:"key",
			text:"Ins"
		}
		]
	},
	95:{
		x:812,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:15,
			y:25,
			class:"key primary",
			text:"⁄"
		}
		]
	},
	96:{
		x:812,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"8"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"↑"
		}
		]
	},
	97:{
		x:812,
		y:112,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"5"
		}
		]
	},
	98:{
		x:812,
		y:154,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"2"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"↓"
		}
		]
	},
	100:{
		x:854,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:15,
			y:25,
			class:"key primary",
			text:"×"
		},
		]
	},
	101:{
		x:854,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"9"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"Pg Up"
		}
		]
	},
	102:{
		x:854,
		y:112,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"6"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"→"
		}
		]
	},
	103:{
		x:854,
		y:154,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"3"
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"Pg Dn"
		}
		]
	},
	104:{
		x:854,
		y:196,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"."
		},
		{
			x:35,
			y:32,
			class:"key",
			"text-anchor":"end",
			text:"Del"
		}
		]
	},
	105:{
		x:896,
		y:28,
		width:40,
		height:40,
		key:[
		{
			x:15,
			y:25,
			class:"key primary",
			text:"−"
		},
		]
	},
	106:{
		x:896,
		y:70,
		width:40,
		height:82,
		key:[
		{
			x:15,
			y:25,
			class:"key primary",
			text:"+"
		},
		]
	},
	108:{
		x:896,
		y:154,
		width:40,
		height:82,
		key:[
		{
			x:5,
			y:16,
			class:"key",
			text:"Enter"
		},
		]
	},
},
rightFull:{
	94:{
		x:770,
		y:196,
		width:40,
		height:40,
		key:[
		{
			x:8,
			y:18,
			class:"key primary",
			text:"0"
		},
		{
			x:8,
			y:32,
			class:"key",
			text:"Ins"
		}
		]
	},
	99:{
		x:812,
		y:196,
		width:40,
		height:40,
		key:[]
	},
	106:{
		x:896,
		y:70,
		width:40,
		height:40,
		key:[
		{
			x:15,
			y:25,
			class:"key primary",
			text:"+"
		},
		]
	},
	107:{
		x:896,
		y:112,
		width:40,
		height:40,
		key:[
		{
			x:15,
			y:25,
			class:"key primary",
			text:"+"
		},
		]
	},
	108:{
		x:896,
		y:154,
		width:40,
		height:40,
		key:[
		{
			x:5,
			y:16,
			class:"key",
			text:"Enter"
		},
		]
	},
	109:{
		x:896,
		y:196,
		width:40,
		height:40,
		key:[
		{
			x:5,
			y:16,
			class:"key",
			text:"Enter"
		},
		]
	},
},
bottom:{
	58:{
		x:0,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Ctrl"
		},
		]
	},
	59:{
		x:52,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[]
	},
	60:{
		x:104,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Alt"
		},
		]
	},
	61:{
		x:156,
		y:168,
		width:317,
		height:40,
		key:[]
	},
	62:{
		x:475,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Alt Gr"
		},
		]
	},
	63:{
		x:527,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[]
	},
	64:{
		x:579,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Ctrl"
		},
		]
	},
},
bottomJIS:{
	111:{
		x:156,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:25,
			y:25,
			class:"key",
			"text-anchor":"middle",
			text:"無変換"
		},
		]
	},
	61:{
		x:208,
		y:168,
		width:161,
		height:40,
		key:[]
	},
	112:{
		x:371,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:25,
			y:25,
			class:"key",
			"text-anchor":"middle",
			text:"変換"
		},
		]
	},
	113:{
		x:423,
		y:168,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:25,
			y:15,
			class:"key secondary",
			"text-anchor":"middle",
			text:"カタカナ"
		},
		{
			x:25,
			y:30,
			class:"key secondary",
			"text-anchor":"middle",
			text:" ひらがな"
		},
		]
	},
},
base:{
	1:{
		x:0,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	2:{
		x:42,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	3:{
		x:84,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	4:{
		x:126,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	5:{
		x:168,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	6:{
		x:210,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	7:{
		x:252,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	8:{
		x:294,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	9:{
		x:336,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	10:{
		x:378,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	11:{
		x:420,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	12:{
		x:462,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	13:{
		x:504,
		y:0,
		width:40,
		height:40,
		key:[]
	},
	16:{
		x:0,
		y:42,
		width:63,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Tab"
		},
		]
	},
	17:{
		x:65,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	18:{
		x:107,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	19:{
		x:149,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	20:{
		x:191,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	21:{
		x:233,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	22:{
		x:275,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	23:{
		x:317,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	24:{
		x:359,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	25:{
		x:401,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	26:{
		x:443,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	27:{
		x:485,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	28:{
		x:527,
		y:42,
		width:40,
		height:40,
		key:[]
	},
	
	30:{
		x:0,
		y:84,
		width:70,
		height:40,
		class:"special",
		key:[
		{
			x:12,
			y:15,
			class:"key",
			text:"Caps"
		},
		{
			x:12,
			y:30,
			class:"key",
			text:"Lock"
		},
		]
	},
	31:{
		x:72,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	32:{
		x:114,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	33:{
		x:156,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	34:{
		x:198,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	35:{
		x:240,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	36:{
		x:282,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	37:{
		x:324,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	38:{
		x:366,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	39:{
		x:408,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	40:{
		x:450,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	41:{
		x:492,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	46:{
		x:94,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	47:{
		x:136,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	48:{
		x:178,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	49:{
		x:220,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	50:{
		x:262,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	51:{
		x:304,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	52:{
		x:346,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	53:{
		x:388,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	54:{
		x:430,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	55:{
		x:472,
		y:126,
		width:40,
		height:40,
		key:[]
	},
},
ISO:{
	14:{
		x:546,
		y:0,
		width:83,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Backspace"
		},
		]
	},
	29:{
		x:569,
		y:42,
		width:60,
		height:82,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Enter"
		},
		]
	},
	42:{
		x:534,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	44:{
		x:0,
		y:126,
		width:50,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Shift"
		},
		]
	},
	45:{
		x:52,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	57:{
		x:514,
		y:126,
		width:115,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Shift"
		},
		]
	},
},
ANSI:{
	14:{
		x:546,
		y:0,
		width:83,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Backspace"
		},
		]
	},
	42:{
		x:569,
		y:42,
		width:60,
		height:40,
		key:[]
	},
	29:{
		x:534,
		y:84,
		width:95,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Enter"
		},
		]
	},
	44:{
		x:0,
		y:126,
		width:92,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Shift"
		},
		]
	},
	57:{
		x:514,
		y:126,
		width:115,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Shift"
		},
		]
	},
},
JIS:{
	14:{
		x:588,
		y:0,
		width:41,
		height:40,
		class:"special",
		key:[]
	},
	15:{
		x:546,
		y:0,
		width:41,
		height:40,
		key:[]
	},
	29:{
		x:569,
		y:42,
		width:60,
		height:82,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Enter"
		},
		]
	},
	42:{
		x:534,
		y:84,
		width:40,
		height:40,
		key:[]
	},
	44:{
		x:0,
		y:126,
		width:92,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Shift"
		},
		]
	},
	56:{
		x:514,
		y:126,
		width:40,
		height:40,
		key:[]
	},
	57:{
		x:556,
		y:126,
		width:73,
		height:40,
		class:"special",
		key:[
		{
			x:15,
			y:25,
			class:"key",
			text:"Shift"
		},
		]
	},
},
}

var layouts={
esQwerty:{
2:[{x:10,y:28,class:"key",text:"1"},{x:10,y:15,class:"key secondary",text:"!"},{x:30,y:28,class:"key secondary",text:"|"}],
3:[{x:10,y:28,class:"key",text:"2"},{x:10,y:15,class:"key secondary",text:"\\"},{x:30,y:28,class:"key secondary",text:"@"}],
4:[{x:10,y:28,class:"key",text:"3"},{x:10,y:15,class:"key secondary",text:"·"},{x:30,y:28,class:"key secondary",text:"#"}],
5:[{x:10,y:28,class:"key",text:"4"},{x:10,y:15,class:"key secondary",text:"$"},{x:30,y:28,class:"key secondary",text:"~"}],
6:[{x:10,y:28,class:"key",text:"5"},{x:10,y:15,class:"key secondary",text:"%"},{x:30,y:28,class:"key secondary",text:"€"}],
7:[{x:10,y:28,class:"key",text:"6"},{x:10,y:15,class:"key secondary",text:"&"},{x:30,y:28,class:"key secondary",text:"¬"}],
8:[{x:10,y:28,class:"key",text:"7"},{x:10,y:15,class:"key secondary",text:"/"}],
9:[{x:10,y:28,class:"key",text:"8"},{x:10,y:15,class:"key secondary",text:"("}],
10:[{x:10,y:28,class:"key",text:"9"},{x:10,y:15,class:"key secondary",text:")"}],
11:[{x:10,y:28,class:"key",text:"0"},{x:10,y:15,class:"key secondary",text:"="}],
12:[{x:10,y:28,class:"key",text:"'"},{x:10,y:15,class:"key secondary",text:"?"}],
13:[{x:10,y:28,class:"key",text:"¡"},{x:10,y:15,class:"key secondary",text:"¿"}],
17:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Q"}],
18:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"W"}],
19:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"key secondary",text:"€"}],
20:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"R"}],
21:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"T"}],
22:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Y"}],
23:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"U"}],
24:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"I"}],
25:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"O"}],
26:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"P"}],
27:[{x:10,y:28,class:"key",text:"`"},{x:10,y:15,class:"key secondary",text:"^"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"["}],
28:[{x:10,y:28,class:"key",text:"+"},{x:10,y:15,class:"key secondary",text:"*"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"]"}],
31:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"A"}],
32:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"S"}],
33:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"D"}],
34:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"F"}],
35:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"G"}],
36:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"H"}],
37:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"J"}],
38:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"K"}],
39:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"L"}],
40:[{x:10,y:28,class:"key",text:"ñ"},{x:10,y:15,class:"key secondary",text:"Ñ"}],
41:[{x:10,y:28,class:"key",text:"´"},{x:10,y:15,class:"key secondary",text:"¨"},{x:30,y:28,class:"key secondary",text:"{"}],
1:[{x:10,y:28,class:"key",text:"º"},{x:10,y:15,class:"key secondary",text:"ª"},{x:30,y:28,class:"key secondary",text:"\\"}],
42:[{x:10,y:28,class:"key",text:"ç"},{x:10,y:15,class:"key secondary",text:"Ç"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"}"}],
46:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Z"}],
47:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"X"}],
48:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"C"}],
49:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"V"}],
50:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"B"}],
51:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"N"}],
52:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"M"}],
53:[{x:10,y:28,class:"key",text:","},{x:10,y:15,class:"key secondary",text:";"}],
54:[{x:10,y:28,class:"key",text:"."},{x:10,y:15,class:"key secondary",text:":"}],
55:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"_"}],
45:[{x:10,y:28,class:"key",text:"<"},{x:10,y:15,class:"key secondary",text:">"},{x:30,y:28,class:"key secondary",text:"�"}]
},
th:{
2:[{x:10,y:28,class:"key",text:"ๅ"},{x:10,y:15,class:"key secondary",text:"+"}],
3:[{x:10,y:28,class:"key",text:"/"},{x:10,y:15,class:"key secondary",text:"๑"}],
4:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"๒"}],
5:[{x:10,y:28,class:"key",text:"ภ"},{x:10,y:15,class:"key secondary",text:"๓"}],
6:[{x:10,y:28,class:"key",text:"ถ"},{x:10,y:15,class:"key secondary",text:"๔"}],
7:[{x:10,y:28,class:"key",text:"ุ"},{x:10,y:15,class:"key secondary",text:"ู"}],
8:[{x:10,y:28,class:"key",text:"ึ"},{x:10,y:15,class:"key secondary",text:"฿"}],
9:[{x:10,y:28,class:"key",text:"ค"},{x:10,y:15,class:"key secondary",text:"๕"}],
10:[{x:10,y:28,class:"key",text:"ต"},{x:10,y:15,class:"key secondary",text:"๖"}],
11:[{x:10,y:28,class:"key",text:"จ"},{x:10,y:15,class:"key secondary",text:"๗"}],
12:[{x:10,y:28,class:"key",text:"ข"},{x:10,y:15,class:"key secondary",text:"๘"}],
13:[{x:10,y:28,class:"key",text:"ช"},{x:10,y:15,class:"key secondary",text:"๙"}],
17:[{x:10,y:28,class:"key",text:"ๆ"},{x:10,y:15,class:"key secondary",text:"๐"}],
18:[{x:10,y:28,class:"key",text:"ไ"},{x:10,y:15,class:"key secondary",text:"\\"}],
19:[{x:10,y:28,class:"key",text:"ำ"},{x:10,y:15,class:"key secondary",text:"ฎ"}],
20:[{x:10,y:28,class:"key",text:"พ"},{x:10,y:15,class:"key secondary",text:"ฑ"}],
21:[{x:10,y:28,class:"key",text:"ะ"},{x:10,y:15,class:"key secondary",text:"ธ"}],
22:[{x:10,y:28,class:"key",text:"ั"},{x:10,y:15,class:"key secondary",text:"ํ"}],
23:[{x:10,y:28,class:"key",text:"ี"},{x:10,y:15,class:"key secondary",text:"๊"}],
24:[{x:10,y:28,class:"key",text:"ร"},{x:10,y:15,class:"key secondary",text:"ณ"}],
25:[{x:10,y:28,class:"key",text:"น"},{x:10,y:15,class:"key secondary",text:"ฯ"}],
26:[{x:10,y:28,class:"key",text:"ย"},{x:10,y:15,class:"key secondary",text:"ญ"}],
27:[{x:10,y:28,class:"key",text:"บ"},{x:10,y:15,class:"key secondary",text:"ฐ"},{x:30,y:28,class:"key secondary",text:"%"}],
28:[{x:10,y:28,class:"key",text:"ล"},{x:10,y:15,class:"key secondary",text:","},{x:30,y:28,class:"key secondary",text:"๑"}],
31:[{x:10,y:28,class:"key",text:"ฟ"},{x:10,y:15,class:"key secondary",text:"ฤ"}],
32:[{x:10,y:28,class:"key",text:"ห"},{x:10,y:15,class:"key secondary",text:"ฆ"}],
33:[{x:10,y:28,class:"key",text:"ก"},{x:10,y:15,class:"key secondary",text:"ฏ"}],
34:[{x:10,y:28,class:"key",text:"ด"},{x:10,y:15,class:"key secondary",text:"โ"}],
35:[{x:10,y:28,class:"key",text:"เ"},{x:10,y:15,class:"key secondary",text:"ฌ"}],
36:[{x:10,y:28,class:"key",text:"้"},{x:10,y:15,class:"key secondary",text:"็"}],
37:[{x:10,y:28,class:"key",text:"่"},{x:10,y:15,class:"key secondary",text:"๋"}],
38:[{x:10,y:28,class:"key",text:"า"},{x:10,y:15,class:"key secondary",text:"ษ"}],
39:[{x:10,y:28,class:"key",text:"ส"},{x:10,y:15,class:"key secondary",text:"ศ"}],
40:[{x:10,y:28,class:"key",text:"ว"},{x:10,y:15,class:"key secondary",text:"ซ"}],
41:[{x:10,y:28,class:"key",text:"ง"},{x:10,y:15,class:"key secondary",text:"."}],
1:[{x:10,y:28,class:"key",text:"_"},{x:10,y:15,class:"key secondary",text:"%"}],
42:[{x:10,y:28,class:"key",text:"ฃ"},{x:10,y:15,class:"key secondary",text:"ฅ"},{x:30,y:28,class:"key secondary",text:"+"}],
46:[{x:10,y:28,class:"key",text:"ผ"},{x:10,y:15,class:"key secondary",text:"("}],
47:[{x:10,y:28,class:"key",text:"ป"},{x:10,y:15,class:"key secondary",text:")"}],
48:[{x:10,y:28,class:"key",text:"แ"},{x:10,y:15,class:"key secondary",text:"ฉ"}],
49:[{x:10,y:28,class:"key",text:"อ"},{x:10,y:15,class:"key secondary",text:"ฮ"}],
50:[{x:10,y:28,class:"key",text:"ิ"},{x:10,y:15,class:"key secondary",text:"ฺ"}],
51:[{x:10,y:28,class:"key",text:"ื"},{x:10,y:15,class:"key secondary",text:"์"}],
52:[{x:10,y:28,class:"key",text:"ท"},{x:10,y:15,class:"key secondary",text:"?"}],
53:[{x:10,y:28,class:"key",text:"ม"},{x:10,y:15,class:"key secondary",text:"ฒ"}],
54:[{x:10,y:28,class:"key",text:"ใ"},{x:10,y:15,class:"key secondary",text:"ฬ"}],
55:[{x:10,y:28,class:"key",text:"ฝ"},{x:10,y:15,class:"key secondary",text:"ฦ"}],
45:[{x:10,y:28,class:"key",text:"ฃ"},{x:10,y:15,class:"key secondary",text:"ฅ"},{x:30,y:28,class:"key secondary",text:"๒"}]
},
jp:{
2:[{x:10,y:28,class:"key",text:"1"},{x:10,y:15,class:"key secondary",text:"!"}],
3:[{x:10,y:28,class:"key",text:"2"},{x:10,y:15,class:"key secondary",text:"@"}],
4:[{x:10,y:28,class:"key",text:"3"},{x:10,y:15,class:"key secondary",text:"#"}],
5:[{x:10,y:28,class:"key",text:"4"},{x:10,y:15,class:"key secondary",text:"$"}],
6:[{x:10,y:28,class:"key",text:"5"},{x:10,y:15,class:"key secondary",text:"%"}],
7:[{x:10,y:28,class:"key",text:"6"},{x:10,y:15,class:"key secondary",text:"^"}],
8:[{x:10,y:28,class:"key",text:"7"},{x:10,y:15,class:"key secondary",text:"&"}],
9:[{x:10,y:28,class:"key",text:"8"},{x:10,y:15,class:"key secondary",text:"*"}],
10:[{x:10,y:28,class:"key",text:"9"},{x:10,y:15,class:"key secondary",text:"("}],
11:[{x:10,y:28,class:"key",text:"0"},{x:10,y:15,class:"key secondary",text:")"}],
12:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"_"}],
13:[{x:10,y:28,class:"key",text:"="},{x:10,y:15,class:"key secondary",text:"+"}],
17:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Q"}],
18:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"W"}],
19:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"E"}],
20:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"R"}],
21:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"T"}],
22:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Y"}],
23:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"U"}],
24:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"I"}],
25:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"O"}],
26:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"P"}],
27:[{x:10,y:28,class:"key",text:"["},{x:10,y:15,class:"key secondary",text:"{"},{x:30,y:28,class:"key secondary",text:"�"}],
28:[{x:10,y:28,class:"key",text:"]"},{x:10,y:15,class:"key secondary",text:"}"},{x:30,y:28,class:"key secondary",text:"�"}],
31:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"A"}],
32:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"S"}],
33:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"D"}],
34:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"F"}],
35:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"G"}],
36:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"H"}],
37:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"J"}],
38:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"K"}],
39:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"L"}],
40:[{x:10,y:28,class:"key",text:";"},{x:10,y:15,class:"key secondary",text:":"}],
41:[{x:10,y:28,class:"key",text:"'"},{x:10,y:15,class:"key secondary",text:"\\"}],
1:[{x:10,y:28,class:"key",text:"`"},{x:10,y:15,class:"key secondary",text:"~"}],
42:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"|"},{x:30,y:28,class:"key secondary",text:"�"}],
46:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Z"}],
47:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"X"}],
48:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"C"}],
49:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"V"}],
50:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"B"}],
51:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"N"}],
52:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"M"}],
53:[{x:10,y:28,class:"key",text:","},{x:10,y:15,class:"key secondary",text:"<"}],
54:[{x:10,y:28,class:"key",text:"."},{x:10,y:15,class:"key secondary",text:">"}],
55:[{x:10,y:28,class:"key",text:"/"},{x:10,y:15,class:"key secondary",text:"?"}],
45:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"|"},{x:30,y:28,class:"key secondary",text:"�"}]
},
enDvorak:{
2:[{x:10,y:28,class:"key",text:"&"},{x:10,y:15,class:"key secondary",text:"%"}],
3:[{x:10,y:28,class:"key",text:"["},{x:10,y:15,class:"key secondary",text:"7"}],
4:[{x:10,y:28,class:"key",text:"{"},{x:10,y:15,class:"key secondary",text:"5"}],
5:[{x:10,y:28,class:"key",text:"}"},{x:10,y:15,class:"key secondary",text:"3"}],
6:[{x:10,y:28,class:"key",text:"("},{x:10,y:15,class:"key secondary",text:"1"}],
7:[{x:10,y:28,class:"key",text:"="},{x:10,y:15,class:"key secondary",text:"9"}],
8:[{x:10,y:28,class:"key",text:"*"},{x:10,y:15,class:"key secondary",text:"0"}],
9:[{x:10,y:28,class:"key",text:")"},{x:10,y:15,class:"key secondary",text:"2"}],
10:[{x:10,y:28,class:"key",text:"+"},{x:10,y:15,class:"key secondary",text:"4"}],
11:[{x:10,y:28,class:"key",text:"]"},{x:10,y:15,class:"key secondary",text:"6"}],
12:[{x:10,y:28,class:"key",text:"!"},{x:10,y:15,class:"key secondary",text:"8"},{x:30,y:28,class:"key secondary",text:"�"}],
13:[{x:10,y:28,class:"key",text:"#"},{x:10,y:15,class:"key secondary",text:"`"},{x:30,y:28,class:"key secondary",text:"�"}],
17:[{x:10,y:28,class:"key",text:";"},{x:10,y:15,class:"key secondary",text:":"}],
18:[{x:10,y:28,class:"key",text:","},{x:10,y:15,class:"key secondary",text:"<"}],
19:[{x:10,y:28,class:"key",text:"."},{x:10,y:15,class:"key secondary",text:">"}],
20:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"P"}],
21:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Y"}],
22:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"F"}],
23:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"G"}],
24:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"C"}],
25:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"R"}],
26:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"L"}],
27:[{x:10,y:28,class:"key",text:"/"},{x:10,y:15,class:"key secondary",text:"?"}],
28:[{x:10,y:28,class:"key",text:"@"},{x:10,y:15,class:"key secondary",text:"^"}],
31:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"A"}],
32:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"O"}],
33:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"E"}],
34:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"U"}],
35:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"I"}],
36:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"D"}],
37:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"H"}],
38:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"T"}],
39:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"N"}],
40:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"S"}],
41:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"_"}],
1:[{x:10,y:28,class:"key",text:"$"},{x:10,y:15,class:"key secondary",text:"~"}],
42:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"|"},{x:30,y:28,class:"key secondary",text:"�"}],
46:[{x:10,y:28,class:"key",text:"'"},{x:10,y:15,class:"key secondary",text:"\\"}],
47:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Q"}],
48:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"J"}],
49:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"K"}],
50:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"X"}],
51:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"B"}],
52:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"M"}],
53:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"W"}],
54:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"V"}],
55:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Z"}],
45:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"|"},{x:30,y:28,class:"key secondary",text:"�"}]
},
french:{
2:[{x:10,y:28,class:"key",text:"&"},{x:10,y:15,class:"key secondary",text:"1"}],
3:[{x:10,y:28,class:"key",text:"é"},{x:10,y:15,class:"key secondary",text:"2"},{x:30,y:28,class:"key secondary",text:"~"}],
4:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"3"},{x:30,y:28,class:"key secondary",text:"#"}],
5:[{x:10,y:28,class:"key",text:"'"},{x:10,y:15,class:"key secondary",text:"4"},{x:30,y:28,class:"key secondary",text:"{"}],
6:[{x:10,y:28,class:"key",text:"("},{x:10,y:15,class:"key secondary",text:"5"},{x:30,y:28,class:"key secondary",text:"["}],
7:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"6"},{x:30,y:28,class:"key secondary",text:"|"}],
8:[{x:10,y:28,class:"key",text:"è"},{x:10,y:15,class:"key secondary",text:"7"},{x:30,y:28,class:"key secondary",text:"`"}],
9:[{x:10,y:28,class:"key",text:"_"},{x:10,y:15,class:"key secondary",text:"8"},{x:30,y:28,class:"key secondary",text:"\\"}],
10:[{x:10,y:28,class:"key",text:"ç"},{x:10,y:15,class:"key secondary",text:"9"},{x:30,y:28,class:"key secondary",text:"^"}],
11:[{x:10,y:28,class:"key",text:"à"},{x:10,y:15,class:"key secondary",text:"0"},{x:30,y:28,class:"key secondary",text:"@"}],
12:[{x:10,y:28,class:"key",text:")"},{x:10,y:15,class:"key secondary",text:"°"},{x:30,y:28,class:"key secondary",text:"]"}],
13:[{x:10,y:28,class:"key",text:"="},{x:10,y:15,class:"key secondary",text:"+"},{x:30,y:28,class:"key secondary",text:"}"}],
17:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"A"}],
18:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Z"}],
19:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"key secondary",text:"€"}],
20:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"R"}],
21:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"T"}],
22:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Y"}],
23:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"U"}],
24:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"I"}],
25:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"O"}],
26:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"P"}],
27:[{x:10,y:28,class:"key",text:"^"},{x:10,y:15,class:"key secondary",text:"¨"},{x:30,y:28,class:"key secondary",text:"�"}],
28:[{x:10,y:28,class:"key",text:"$"},{x:10,y:15,class:"key secondary",text:"£"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"¤"}],
31:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Q"}],
32:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"S"}],
33:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"D"}],
34:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"F"}],
35:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"G"}],
36:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"H"}],
37:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"J"}],
38:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"K"}],
39:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"L"}],
40:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"M"}],
41:[{x:10,y:28,class:"key",text:"ù"},{x:10,y:15,class:"key secondary",text:"%"}],
1:[{x:10,y:28,class:"key",text:"²"}],
42:[{x:10,y:28,class:"key",text:"*"},{x:10,y:15,class:"key secondary",text:"µ"},{x:30,y:28,class:"key secondary",text:"�"}],
46:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"W"}],
47:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"X"}],
48:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"C"}],
49:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"V"}],
50:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"B"}],
51:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"N"}],
52:[{x:10,y:28,class:"key",text:","},{x:10,y:15,class:"key secondary",text:"?"}],
53:[{x:10,y:28,class:"key",text:";"},{x:10,y:15,class:"key secondary",text:"."}],
54:[{x:10,y:28,class:"key",text:":"},{x:10,y:15,class:"key secondary",text:"/"}],
55:[{x:10,y:28,class:"key",text:"!"},{x:10,y:15,class:"key secondary",text:"§"}],
45:[{x:10,y:28,class:"key",text:"<"},{x:10,y:15,class:"key secondary",text:">"},{x:30,y:28,class:"key secondary",text:"�"}]
},
esDvorak:{
2:[{x:10,y:28,class:"key",text:"1"},{x:10,y:15,class:"key secondary",text:"!"},{x:30,y:28,class:"key secondary",text:"|"}],
3:[{x:10,y:28,class:"key",text:"2"},{x:10,y:15,class:"key secondary",text:"\\"},{x:30,y:28,class:"key secondary",text:"@"}],
4:[{x:10,y:28,class:"key",text:"3"},{x:10,y:15,class:"key secondary",text:"·"},{x:30,y:28,class:"key secondary",text:"#"}],
5:[{x:10,y:28,class:"key",text:"4"},{x:10,y:15,class:"key secondary",text:"$"},{x:30,y:28,class:"key secondary",text:"~"}],
6:[{x:10,y:28,class:"key",text:"5"},{x:10,y:15,class:"key secondary",text:"%"},{x:30,y:28,class:"key secondary",text:"€"}],
7:[{x:10,y:28,class:"key",text:"6"},{x:10,y:15,class:"key secondary",text:"&"},{x:30,y:28,class:"key secondary",text:"¬"}],
8:[{x:10,y:28,class:"key",text:"7"},{x:10,y:15,class:"key secondary",text:"/"}],
9:[{x:10,y:28,class:"key",text:"8"},{x:10,y:15,class:"key secondary",text:"("}],
10:[{x:10,y:28,class:"key",text:"9"},{x:10,y:15,class:"key secondary",text:")"}],
11:[{x:10,y:28,class:"key",text:"0"},{x:10,y:15,class:"key secondary",text:"="}],
12:[{x:10,y:28,class:"key",text:"'"},{x:10,y:15,class:"key secondary",text:"?"}],
13:[{x:10,y:28,class:"key",text:"¡"},{x:10,y:15,class:"key secondary",text:"¿"}],
17:[{x:10,y:28,class:"key",text:"."},{x:10,y:15,class:"key secondary",text:":"}],
18:[{x:10,y:28,class:"key",text:","},{x:10,y:15,class:"key secondary",text:";"}],
19:[{x:10,y:28,class:"key",text:"ñ"},{x:10,y:15,class:"key secondary",text:"Ñ"}],
20:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"P"}],
21:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Y"}],
22:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"F"}],
23:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"G"}],
24:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"C"}],
25:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"H"}],
26:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"L"}],
27:[{x:10,y:28,class:"key",text:"`"},{x:10,y:15,class:"key secondary",text:"^"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"["}],
28:[{x:10,y:28,class:"key",text:"+"},{x:10,y:15,class:"key secondary",text:"*"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"]"}],
31:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"A"}],
32:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"O"}],
33:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"E"},{x:30,y:28,class:"key secondary",text:"€"}],
34:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"U"}],
35:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"I"}],
36:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"D"}],
37:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"R"}],
38:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"T"}],
39:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"N"}],
40:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"S"}],
41:[{x:10,y:28,class:"key",text:"´"},{x:10,y:15,class:"key secondary",text:"¨"},{x:30,y:28,class:"key secondary",text:"{"}],
1:[{x:10,y:28,class:"key",text:"º"},{x:10,y:15,class:"key secondary",text:"ª"},{x:30,y:28,class:"key secondary",text:"\\"}],
42:[{x:10,y:28,class:"key",text:"ç"},{x:10,y:15,class:"key secondary",text:"Ç"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"}"}],
46:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"_"}],
47:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Q"}],
48:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"J"}],
49:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"K"}],
50:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"X"}],
51:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"B"}],
52:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"M"}],
53:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"W"}],
54:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"V"}],
55:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Z"}],
45:[{x:10,y:28,class:"key",text:"<"},{x:10,y:15,class:"key secondary",text:">"},{x:30,y:28,class:"key secondary",text:"�"},{x:30,y:28,class:"key secondary",text:"«"},{x:30,y:28,class:"key secondary",text:"»"}]
},
usa:{
2:[{x:10,y:28,class:"key",text:"1"},{x:10,y:15,class:"key secondary",text:"!"}],
3:[{x:10,y:28,class:"key",text:"2"},{x:10,y:15,class:"key secondary",text:"@"}],
4:[{x:10,y:28,class:"key",text:"3"},{x:10,y:15,class:"key secondary",text:"#"}],
5:[{x:10,y:28,class:"key",text:"4"},{x:10,y:15,class:"key secondary",text:"$"}],
6:[{x:10,y:28,class:"key",text:"5"},{x:10,y:15,class:"key secondary",text:"%"}],
7:[{x:10,y:28,class:"key",text:"6"},{x:10,y:15,class:"key secondary",text:"^"}],
8:[{x:10,y:28,class:"key",text:"7"},{x:10,y:15,class:"key secondary",text:"&"}],
9:[{x:10,y:28,class:"key",text:"8"},{x:10,y:15,class:"key secondary",text:"*"}],
10:[{x:10,y:28,class:"key",text:"9"},{x:10,y:15,class:"key secondary",text:"("}],
11:[{x:10,y:28,class:"key",text:"0"},{x:10,y:15,class:"key secondary",text:")"}],
12:[{x:10,y:28,class:"key",text:"-"},{x:10,y:15,class:"key secondary",text:"_"}],
13:[{x:10,y:28,class:"key",text:"="},{x:10,y:15,class:"key secondary",text:"+"}],
17:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Q"}],
18:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"W"}],
19:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"E"}],
20:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"R"}],
21:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"T"}],
22:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Y"}],
23:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"U"}],
24:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"I"}],
25:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"O"}],
26:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"P"}],
27:[{x:10,y:28,class:"key",text:"["},{x:10,y:15,class:"key secondary",text:"{"},{x:30,y:28,class:"key secondary",text:"�"}],
28:[{x:10,y:28,class:"key",text:"]"},{x:10,y:15,class:"key secondary",text:"}"},{x:30,y:28,class:"key secondary",text:"�"}],
31:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"A"}],
32:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"S"}],
33:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"D"}],
34:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"F"}],
35:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"G"}],
36:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"H"}],
37:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"J"}],
38:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"K"}],
39:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"L"}],
40:[{x:10,y:28,class:"key",text:";"},{x:10,y:15,class:"key secondary",text:":"}],
41:[{x:10,y:28,class:"key",text:"'"},{x:10,y:15,class:"key secondary",text:"\\"}],
1:[{x:10,y:28,class:"key",text:"`"},{x:10,y:15,class:"key secondary",text:"~"}],
42:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"|"},{x:30,y:28,class:"key secondary",text:"�"}],
46:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"Z"}],
47:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"X"}],
48:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"C"}],
49:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"V"}],
50:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"B"}],
51:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"N"}],
52:[{x:20,y:25,class:"key primary","text-anchor":"middle",text:"M"}],
53:[{x:10,y:28,class:"key",text:","},{x:10,y:15,class:"key secondary",text:"<"}],
54:[{x:10,y:28,class:"key",text:"."},{x:10,y:15,class:"key secondary",text:">"}],
55:[{x:10,y:28,class:"key",text:"/"},{x:10,y:15,class:"key secondary",text:"?"}],
45:[{x:10,y:28,class:"key",text:"\\"},{x:10,y:15,class:"key secondary",text:"|"},{x:30,y:28,class:"key secondary",text:"�"}]
}
}


CreateKeyboard(["complete","tenkeyless80","tenkeyless60"][2	],["ISO","ANSI","JIS"][0],["esQwerty","esDvorak","th","jp","french","usa"][0],"x");
function CreateKeyboard(design,standard,layout,keyMay){
	var paddingTop=30;
	if(design=="complete"){
		let layer=PrintKeyContent({...layers.keypad,...layers.top},layouts[layout]);
		// pasar dvorak y luego hotkeys
		GenerateSide(2,2,layer);
		$keyboard.setAttribute("viewBox","0 0 940 240");
	}else if(design=="tenkeyless80"){
		GenerateSide(2,2,layers.top);
		$keyboard.setAttribute("viewBox","0 0 766 240");
	}else if(design=="tenkeyless60"){
		paddingTop=2;
		$keyboard.setAttribute("viewBox","0 0 633 212");
	}
	let layer=PrintKeyContent({...layers.base,...(standard=="JIS"?layers.JIS:(standard=="ANSI"?layers.ANSI:layers.ISO)),...(standard=="JIS"?{...layers.bottom,...layers.bottomJIS}:layers.bottom)},layouts[layout]);
	
	console.log(layer);
	GenerateSide(2,paddingTop,layer);
	if(standard!="ANSI"){//pintamos la tecla enter
		let p=document.createElementNS("http://www.w3.org/2000/svg","path");
		p.setAttribute("class","key-zone");
		p.setAttribute("d","m 0,0 0,40 7,0 0,42 53,0 0,-82 z");
		$keyboard.querySelector("[data-key='29']").prepend(p)
		$keyboard.querySelector("[data-key='29'] rect").remove();
	}
}

function PrintKeyContent(layer,keys){
	for(var x in keys){
		if(layer[x])
			layer[x].key=keys[x];
	}
	return layer;
}

function GenerateSide(x,y,layer){
	let svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("x",x);
	svg.setAttribute("y",y);
	svg.setAttribute("y",y);
	console.log(layer);
	for(k in layer){
		let l=layer[k];
		let key=document.createElementNS("http://www.w3.org/2000/svg","svg");
		key.setAttribute("x",l.x);
		key.setAttribute("y",l.y);
		key.setAttribute("width",l.width);
		key.setAttribute("height",l.height);
		key.setAttribute("data-key",k);
		if(l.class)
			key.setAttribute("class",l.class);
		GenerateKeyContent(key,l.key);
		svg.appendChild(key);
	}
	$keyboard.appendChild(svg);
}


function GenerateKeyContent(container,x){
	let key=document.createElementNS("http://www.w3.org/2000/svg","rect");
	key.classList.add("key-zone");
	key.setAttribute("x",0);
	key.setAttribute("y",0);
	key.setAttribute("width","100%");
	key.setAttribute("height","100%");
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








function OnControlsChange(e){
	controls[e.target.name][e.target.value].onSelect(e);
}
function ChangeKeyboardDesign(showTop,showRight){}
function ChangeKeyboardPhisicalLayout(fLayout){}

var controls={
	designs:{
		full:{
			name:"Complete",
			onSelect:()=>{ChangeKeyboardDesign(true,true)}
		},
		tenkeyless80:{
			name:"No Keypad",
			onSelect:()=>{ChangeKeyboardDesign(true,false)}
		},
		tenkeyless60:{
			name:"60%",
			onSelect:()=>{ChangeKeyboardDesign(false,false)}
		},
	},
	fLayouts:{
		iso:{
			name:"ISO",
			onSelect:()=>{ChangeKeyboardPhisicalLayout("iso")}
		},
		ansi:{
			name:"ANSI",
			onSelect:()=>{ChangeKeyboardPhisicalLayout("ansi")}
		},
		jis:{
			name:"JIS",
			onSelect:()=>{ChangeKeyboardPhisicalLayout("jis")}
		}
	},
	layout:{/*
		<option val=esQWERTY>🇪🇸 QWERTY</option>
		<option val=esDvorak>🇪🇸 Dvorak</option>
		<option val=usQWERTY>🇺🇸 QWERTY</option>
		<option val=usDvorak>🇺🇸 Dvorak</option>
		<option val=ukQWERTY>🇬🇧 QWERTY</option>
		<option val=ukDvorak>🇬🇧 Dvorak</option>
		<option val=KeyBoardEvent>KeyBoardEvent</option>*/
		esQWERTY:{
			name:"🇪🇸 QWERTY",
		},
	},
	hotkeys:{
		none:{
			name:"Empty",
		},
		DaVinciResolve17:{
			name:"DaVinci Resolve 17",
		},
	},
};

for(let key in controls){
	let select=document.createElement("select");
	select.name=key;
	select.onchange=OnControlsChange;
	for(let k in controls[key]){
		var option=document.createElement("option");
		option.value=k;
		option.text=controls[key][k].name;
		select.appendChild(option);
	}
	document.getElementById("controls").appendChild(select);
}





