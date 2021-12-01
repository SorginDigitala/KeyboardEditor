'use strict';
fetch('./json/layouts.json',{cache:"force-cache"}).then(e=>e.json()).then(e=>layouts=e).catch((e)=>console.error(e));

const defaultRect={
	class:"key-zone",
	x:0,
	y:0,
	width:"100%",
	height:"100%"
};

var layouts;
const phisicalLayout={
	"design":[
		{"id":"100",	"name":"complete",	"description":"",		"paddingTop":2,		"viewBox":"0 0 940 240"},
		{"id":"80",		"name":"80%",		"description":"",		"paddingTop":2,		"viewBox":"0 0 766 240"},
		{"id":"60",		"name":"60%",		"description":"",		"paddingTop":-26,	"viewBox":"0 0 633 212"},
		{"id":"40",		"name":"40%",		"description":"",		"paddingTop":-68,	"viewBox":"0 0 633 170"}
	],
	"layout":[
		{"id":"ISO",	"name":"ISO",		"description":""},
		{"id":"ANSI",	"name":"ANSI",		"description":""},
		{"id":"JIS",	"name":"JIS",		"description":""},
	],
	"layer":[
		{"id":"esDvorak",		"name":"🇪🇸 Dvorak"},
		{"id":"esQwerty",		"name":"🇪🇸 QWERTY"},
		{"id":"latamQwerty",	"name":"🇲🇽 QWERTY"},
		{"id":"usaDvorak",		"name":"🇺🇸 Dvorak"},
		{"id":"usaQwerty",		"name":"🇺🇸 QWERTY"},
		{"id":"frAZERTY",		"name":"🇫🇷 AZERTY"},
		{"id":"deQWERTZ",		"name":"🇩🇪 QWERTZ"},
		{"id":"trQWERTY",		"name":"🇹🇷 QWERTY"},
		{"id":"trF",			"name":"🇹🇷 Turkish F"},
		{"id":"roQwerty",		"name":"🇷🇴 QWERTY"},
		{"id":"roProgramer",	"name":"🇷🇴 Programer"},
		/* Special layers	*/
		{"id":"keyLocation",	"name":"Key location"},
		{"id":"keyboardEvent",	"name":"Js KeyBoardEvent"},
	],
	"theme":[
		{"id":"none",		"name":"None",		"style":{},		"keys":{}},
		{"id":"Unity3D",	"name":"Unity3D",	"style":{},		"keys":{
			"Q":{
				"class":	"hotkey",
				"default":	"text",
				"shift":	"text on shift",
				"control":	"text on control",
			},
		}}
	]
}


class kb_layout{
	static theme;

	static CreateKeyboard(kb,design,layout,layer,theme){
		kb_layout.theme=theme;
		kb.querySelectorAll('svg').forEach((e)=>{e.remove()});

		let mlayouts=JSON.parse(JSON.stringify(layouts));// https://stackoverflow.com/a/122704/3875360
		kb.setAttribute("viewBox",design.viewBox);

		let mKeys={};
		if(design.id=="100")
			mKeys={...mlayouts.keypad,...mlayouts.top};
		else if(design.id=="80")
			mKeys=mlayouts.top;

		mKeys={...mKeys,...(design.id=="40"?mlayouts.base:{...mlayouts.base,...mlayouts.k60}),...mlayouts[layout.id],...(layout.id=="JIS"?{...mlayouts.bottom,...mlayouts.bottomJIS}:mlayouts.bottom)};
		kb_layout.GenerateSide(kb,2,design.paddingTop,kb_layout.PrintKeyContent(mKeys,layer),theme);

		if(layout.id!="ANSI"){//pintamos la tecla enter
			const p=document.createElementNS("http://www.w3.org/2000/svg","path");
			p.setAttribute("class","key-zone");
			p.setAttribute("d","m 0,0 0,40 7,0 0,42 53,0 0,-82 z");
			kb.querySelector("[data-key='43']").prepend(p)
			kb.querySelector("[data-key='43'] rect").remove();
		}
	}

	static PrintKeyContent(mLayout,mLayer){
		for(let x in mLayer.keys){
			let xx=mLayer.keys[x];
			if(mLayout[x]){
				mLayout[x].keyCode	=xx.key;
				mLayout[x].data		=xx.data;
			}
		}
		return mLayout;
	}

	static GenerateSide(kb,x,y,layer,theme){
		const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
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
			kb_layout.GenerateKeyContent(key,l.data);
			if(theme.keys[l.keyCode]){
				key.classList.add(theme.keys[l.keyCode].class);
				key.onmousemove=kb_layout.DisplayHint;
				key.onmouseout=kb_layout.HideHint;
			}
			svg.appendChild(key);
		}
		kb.appendChild(svg);
	}

	static GenerateKeyContent(container,data,hotkeymap){
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

	static get_layer(layer,func){
		if(layer.keys)
			func();
		else
			fetch('./json/kb/'+layer.id+'.json',{cache:"force-cache"}).then(e=>e.json()).then(e=>{
				layer.keys=e;
				func();
			}).catch((e)=>console.error(e));
	}
	static HideHint(){keyboard_hint.style.display=""}
	static DisplayHint(e){
		const target=e.target.parentNode;
		const posY=e.clientY+15+keyboard_hint.offsetHeight<window.innerHeight?	e.clientY:e.clientY-keyboard_hint.offsetHeight,
			posX=e.clientX+25+keyboard_hint.offsetWidth<window.innerWidth?		e.clientX+12:e.clientX-keyboard_hint.offsetWidth-12;
		keyboard_hint.style.top=posY+"px";
		keyboard_hint.style.left=posX+"px";

		const keyData=kb_layout.theme.keys[target.dataset.keyCode];
		const text=keyData.default?"<p>"+keyData.default+"</p>":"";
		for(let x in keyData)
			if(!["class","default"].includes(x))
				text+="<p>"+keyData[x]+"</p>";

		keyboard_hint.innerHTML=`<h3>${target.dataset.keyCode}</h3>${text}`;
		keyboard_hint.style.display="block";
	}
}