
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
                         //Edge symbol: 'stage'
                         (function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_eyes}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("eyes","30px","130px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_mouth}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("mouth","40px","300px");});
                                               //Edge binding end
                                               Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){theDepth=0;var array=new Array();sym.dragDrop=function(item,theLeft,theTop){sym.$(item).draggable({opacity:0.35,revert:"invalid"});sym.$("monsterBody").droppable({accept:sym.$(item),drop:function(){sym.getSymbol(item).play();array.push(item);console.log(array);}});sym.$("origPos").droppable({accept:sym.$(item),drop:function(){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");for(var i=array.length;i--;){if(array[i]===item){array.splice(i,1);}}
console.log(array);}});}
                                               sym.reset=function(item,theLeft,theTop){sym.$(item).animate({"left":theLeft,"top":theTop},"slow");for(var i=array.length;i--;){if(array[i]===item){array.splice(i,1);}}}
                                               sym.playAn=function(){for(var i=array.length;i--;){sym.getSymbol(array[i]).play();}}});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_tie}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("tie","40px","400px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_ears}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("ears","40px","30px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_tophat}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("tophat","250px","120px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_sunglasses}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("sunglasses","180px","250px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_moustache}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("moustache","170px","320px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_mouth7}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("mouth7","75px","385px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_mouth6}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("mouth6","350px","330px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_crosseyed}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("crosseyed","375px","250px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_bunnyEars}","mouseover",function(sym,e){sym.getComposition().getStage().dragDrop("bunnyEars","400px","100px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_eyes}","mousedown",function(sym,e){theDepth+=1;sym.$("eyes").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_sunglasses}","mousedown",function(sym,e){theDepth+=1;sym.$("sunglasses").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_ears}","mousedown",function(sym,e){theDepth+=1;sym.$("ears").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_tophat}","mousedown",function(sym,e){theDepth+=1;sym.$("tophat").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_mouth7}","mousedown",function(sym,e){theDepth+=1;sym.$("mouth7").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_mouth}","mousedown",function(sym,e){theDepth+=1;sym.$("mouth").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_bunnyEars}","mousedown",function(sym,e){theDepth+=1;sym.$("bunnyEars").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_moustache}","mousedown",function(sym,e){theDepth+=1;sym.$("moustache").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_tie}","mousedown",function(sym,e){theDepth+=1;sym.$("tie").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_crosseyed}","mousedown",function(sym,e){theDepth+=1;sym.$("crosseyed").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_mouth6}","mousedown",function(sym,e){theDepth+=1;sym.$("mouth6").css({"position":"absolute","z-index":theDepth});});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_reset}","click",function(sym,e){sym.getComposition().getStage().reset("eyes","30px","130px");sym.getComposition().getStage().reset("tophat","250px","120px");sym.getComposition().getStage().reset("sunglasses","180px","250px");sym.getComposition().getStage().reset("mouth6","350px","330px");sym.getComposition().getStage().reset("crosseyed","375px","250px");sym.getComposition().getStage().reset("tie","40px","400px");sym.getComposition().getStage().reset("moustache","170px","320px");sym.getComposition().getStage().reset("bunnyEars","400px","100px");sym.getComposition().getStage().reset("ears","40px","30px");sym.getComposition().getStage().reset("mouth7","75px","385px");sym.getComposition().getStage().reset("mouth","40px","300px");});
                                               //Edge binding end
                                               Symbol.bindElementAction(compId,symbolName,"${_play}","click",function(sym,e){sym.getComposition().getStage().playAn();});
                                               //Edge binding end
                                              })("stage");
                         //Edge symbol end:'stage'

                         //=========================================================

                         //=========================================================

                         //Edge symbol: 'part'
                         (function(symbolName){})("part");
                         //Edge symbol end:'part'

                         //=========================================================

                         //Edge symbol: 'ears'
                         (function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.playReverse();});
                                               //Edge binding end
                                              })("ears");
                         //Edge symbol end:'ears'

                         //=========================================================

                         //Edge symbol: 'moustache'
                         (function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.playReverse();});
                                               //Edge binding end
                                              })("moustache");
                         //Edge symbol end:'moustache'

                         //=========================================================

                         //Edge symbol: 'sunglasses'
                         (function(symbolName){})("sunglasses");
                         //Edge symbol end:'sunglasses'

                         //=========================================================

                         //Edge symbol: 'eyesX'
                         (function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.playReverse();});
                                               //Edge binding end
                                              })("eyesX");
                         //Edge symbol end:'eyesX'

                         //=========================================================

                         //Edge symbol: 'tie'
                         (function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.playReverse();});
                                               //Edge binding end
                                              })("tie");
                         //Edge symbol end:'tie'

                         //=========================================================

                         //Edge symbol: 'bowtie'
                         (function(symbolName){})("bowtie");
                         //Edge symbol end:'bowtie'

                         //=========================================================

                         //Edge symbol: 'tophat'
                         (function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1185,function(sym,e){sym.playReverse();});
                                               //Edge binding end
                                              })("tophat");
                         //Edge symbol end:'tophat'

                         //=========================================================

                         //Edge symbol: 'bunnyEars'
                         (function(symbolName){})("bunnyEars");
                         //Edge symbol end:'bunnyEars'

                         //=========================================================

                         //Edge symbol: 'play'
                         (function(symbolName){})("play");
                         //Edge symbol end:'play'

                         //=========================================================

                         //Edge symbol: 'reset'
                         (function(symbolName){})("reset");
                         //Edge symbol end:'reset'

                         //=========================================================

                         //Edge symbol: 'mouth6_symbol_1'
                         (function(symbolName){})("mouth6");
                         //Edge symbol end:'mouth6'

                         //=========================================================

                         //Edge symbol: 'mouth7_symbol_1'
                         (function(symbolName){})("mouth7");
                         //Edge symbol end:'mouth7'

                         //=========================================================

                         //Edge symbol: 'body'
                         (function(symbolName){})("body");
                         //Edge symbol end:'body'

                         //=========================================================

                         //Edge symbol: 'bkgd'
                         (function(symbolName){})("bkgd");
                         //Edge symbol end:'bkgd'

                         //=========================================================

                         //Edge symbol: 'monsterBody'
                         (function(symbolName){})("monsterBody");
                         //Edge symbol end:'monsterBody'

                         //=========================================================

                         //Edge symbol: 'eyes'
                         (function(symbolName){})("eyes");
                         //Edge symbol end:'eyes'

                         //=========================================================

                         //Edge symbol: 'mouth_symbol_1'
                         (function(symbolName){})("mouth");
                         //Edge symbol end:'mouth'
                        })(jQuery,AdobeEdge,"EDGE-12055301");