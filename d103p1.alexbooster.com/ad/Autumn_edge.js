
(function(compId){var _=null,y=true,n=false,x14='break-word',x15='nowrap',x16='rgba(152,124,17,1.00)',x3='5.0.0',x31='35px',x5='rgba(0,0,0,0)',x13='700',x28='rgb(0, 0, 0)',g='image',e41='${RoundRect2}',x12='Georgia, Times New Roman, Times, serif',b='block',cl='clip',x22='0',x26='10px',e21='${Headline}',x='text',x34='rgba(245,212,73,1.00)',e17='${Button_btn}',i='none',x20='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x4='6.0.0.400',bg='background-color',p='px',o='opacity',lf='left',x40='42',x11='48',x39='111',x38='true',x30='rgba(239,173,77,1.00)',x35='rgba(0,0,0,0.60)',l='normal',x33='Arial, Helvetica, sans-serif',x25='auto',x32='6px',x27='RoundRect2',x36='Text',x29='pointer',x24='42px',x23='111px',x2='6.0.0',e19='${Canvas}',e18='${Paint}',d='display',m='rect';var g7='Canvas.jpg',g9='LeafTourtLogo.svg',g1='jquery-1.7.1.min.js',g6='Fall.jpg',g8='Paint.png';var s37="<p style=\"margin: 0px;\">​Go!</p>",s10="Use our palette";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'Fall',t:g,r:['128','0','600px','90px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'Canvas',t:g,r:['128','0','600px','90px','auto','auto'],cl:'rect(0px 600px 90px 0px)',o:'1',f:[x5,im+g7,'0px','0px']},{id:'Paint',t:g,r:['96','-21','318px','123px','auto','auto'],f:[x5,im+g8,'0px','0px']},{id:'LeafTourtLogo',t:g,r:['-314','-189','755','464','auto','auto'],f:[x5,im+g9,'0px','0px'],tf:[[],[],[],['0.17','0.17']]},{id:'Headline',t:x,r:['181','17','auto','auto','auto','auto'],o:'0',text:s10,align:"left",n:[x12,[x11,p],"rgba(245,212,73,1.00)",x13,i,l,x14,x15]},{id:'Button_btn',symbolName:'Button_btn',v:i,t:m,r:['585','24','111','42','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','728','90','auto','auto'],overflow:'hidden',f:[x16]}}},tt:{d:2000,a:y,data:[["eid26",d,0,0,"linear",e17,i,i],["eid27",d,1500,0,"linear",e17,i,b],["eid4",lf,0,2000,"easeOutCubic",e18,'96px','697px'],["eid11",cl,0,2000,"easeOutCubic",e19,[0,600,90,0],[0,600,90,600],{vt:x20}],["eid16",o,750,750,"linear",e21,'0','1'],["eid29","tr",1500,function(e,d){this.eSA(e,d);},['stop','${Button_btn}',['Up']]]]}},"Button_btn":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{r:[x22,x22,x23,x24,x25,x25],br:[x26,x26,x26,x26],t:m,id:x27,s:[0,x28,i],cu:x29,f:[x30]},{r:[x31,x32,x25,x25,x25,x25],n:[x33,[24,''],x34,x13,i,'',x14,x15],filter:[0,0,1,1,0,0,0,0,x35,1,1,2],id:x36,text:s37,cu:x29,t:x}],style:{'${symbolSelector}':{isStage:x38,r:[undefined,undefined,x39,x40]}}},tt:{d:2000,a:y,l:{"Up":0,"Over":500,"Down":1000},data:[["eid20",bg,0,0,"easeOutCubic",e41,'rgba(239,173,77,1.00)','rgba(239,173,77,1.00)'],["eid23",bg,500,0,"easeOutCubic",e41,'rgba(239,173,77,1.00)','rgba(245,204,146,1.00)'],["eid24",bg,1000,0,"easeOutCubic",e41,'rgba(245,204,146,1.00)','rgba(142,88,13,1.00)']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-234070591");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Button_btn}","mouseup",function(sym,e){sym.getSymbol("Button_btn").play("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_btn}","mouseover",function(sym,e){sym.getSymbol("Button_btn").play("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_btn}","mousedown",function(sym,e){sym.getSymbol("Button_btn").play("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_btn}","mouseout",function(sym,e){sym.getSymbol("Button_btn").play("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button_btn}","click",function(sym,e){window.open("https://www.alexbooster.com","_blank");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Button_btn'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
})("Button_btn");
//Edge symbol end:'Button_btn'
})})(AdobeEdge.$,AdobeEdge,"EDGE-234070591");