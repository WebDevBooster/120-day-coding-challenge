/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            type: 'rect',
                            rect: ['25px', '23px', '555px', '260px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(36,110,178,0.25)',100]]]],
                            stroke: [1,"rgba(36,110,178,1.00)","solid"]
                        },
                        {
                            id: 'piechart',
                            type: 'ellipse',
                            rect: ['17px', '38px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,121,234,1.00)",[50,50,true,'farthest-corner',[['rgba(169,235,255,1.00)',0],['rgba(0,121,234,1.00)',100]]]],
                            stroke: [3,"rgba(255,255,255,1.00)","solid"],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: 'wedge_container',
                            type: 'group',
                            rect: ['-5px', '16', '250', '250', 'auto', 'auto'],
                            clip: 'rect(0px 250px 123px 0px)',
                            c: [
                            {
                                id: 'wedge',
                                type: 'ellipse',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                clip: 'rect(0px 250px 123px 0px)',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,74,0,1.00)",[50,50,true,'farthest-corner',[['rgba(255,212,36,1.00)',0],['rgba(255,74,0,1.00)',100]]]],
                                stroke: [0,"rgb(255, 255, 255)","none"],
                                transform: [[],['180']]
                            }]
                        },
                        {
                            id: 'anim_people',
                            symbolName: 'anim_people',
                            type: 'rect',
                            rect: ['260', '135px', '180', '148', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['300px', '30px', '167px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​32%</p>",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['396px', '45px', '133px', '48px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​in the first </p><p style=\"margin: 0px;\">sample<span style=\"font-size: 24px;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", "", "none"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['450px', '170px', '128px', '102px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​This next animation represents 76% of the first sample.<span style=\"font-size: 20px;\">​</span><span style=\"font-size: 20px; color: rgb(0, 121, 234);\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(36,110,178,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "22px", "", "none"]
                        },
                        {
                            id: 'rule',
                            type: 'rect',
                            rect: ['209px', '109px', '20px', '1px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(255, 255, 255)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3075,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "opacity",
                            1500,
                            1000,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${piechart}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid82",
                            "left",
                            1950,
                            550,
                            "linear",
                            "${Text4}",
                            '450px',
                            '424px'
                        ],
                        [
                            "eid20",
                            "width",
                            500,
                            1000,
                            "easeOutElastic",
                            "${rule}",
                            '20px',
                            '320px'
                        ],
                        [
                            "eid14",
                            "left",
                            500,
                            1000,
                            "easeOutQuad",
                            "${Text}",
                            '300px',
                            '250px'
                        ],
                        [
                            "eid80",
                            "opacity",
                            1950,
                            550,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            500,
                            2000,
                            "easeOutElastic",
                            "${wedge_container}",
                            '0deg',
                            '30deg'
                        ],
                        [
                            "eid22",
                            "opacity",
                            500,
                            1000,
                            "easeOutElastic",
                            "${rule}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "rotateZ",
                            500,
                            2000,
                            "easeOutElastic",
                            "${wedge}",
                            '180deg',
                            '65deg'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            1000,
                            "easeOutElastic",
                            "${piechart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${piechart}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            500,
                            1000,
                            "easeOutQuad",
                            "${Text}",
                            '0',
                            '1'
                        ],
                            [ "eid83", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${anim_people}', [] ] ],
                            [ "eid84", "trigger", 575, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${anim_people}', [] ] ]
                    ]
                }
            },
            "anim_people": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-211px', '60px', '74px', 'auto', 'auto'],
                            id: 'person',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '-211px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['60px', '-211px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy2',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['90px', '-211px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy3',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['120px', '-211px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy4',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '171px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy9',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '171px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy8',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['60px', '171px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy7',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['90px', '171px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy6',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['120px', '171px', '60px', '74px', 'auto', 'auto'],
                            id: 'personCopy5',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['-30px', '0px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2Copy',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '0px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2Copy2',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['60px', '0px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2Copy3',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['90px', '0px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2Copy4',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '74px', '60px', '74px', 'auto', 'auto'],
                            type: 'image',
                            id: 'person2Copy8',
                            opacity: '0',
                            clip: 'rect(0px 48px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['-30px', '74px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2Copy5',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '74px', '60px', '74px', 'auto', 'auto'],
                            id: 'person2Copy6',
                            type: 'image',
                            clip: 'rect(0px 30px 74px 30.12060546875px)',
                            fill: ['rgba(0,0,0,0)', 'images/person.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '180px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid74",
                            "clip",
                            1500,
                            250,
                            "linear",
                            "${person2Copy}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid85",
                            "clip",
                            2250,
                            250,
                            "linear",
                            "${person2Copy8}",
                            [0,30,74,30.12060546875],
                            [0,48,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid60",
                            "top",
                            750,
                            1000,
                            "easeOutBounce",
                            "${personCopy6}",
                            '171px',
                            '74px'
                        ],
                        [
                            "eid46",
                            "top",
                            750,
                            1000,
                            "easeOutBounce",
                            "${personCopy3}",
                            '-211px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "top",
                            500,
                            1000,
                            "easeOutBounce",
                            "${personCopy2}",
                            '-211px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            2250,
                            40,
                            "linear",
                            "${person2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            2500,
                            0,
                            "linear",
                            "${person2Copy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid56",
                            "top",
                            250,
                            1000,
                            "easeOutBounce",
                            "${personCopy8}",
                            '171px',
                            '74px'
                        ],
                        [
                            "eid68",
                            "clip",
                            2000,
                            250,
                            "linear",
                            "${person2Copy3}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid44",
                            "top",
                            250,
                            1000,
                            "easeOutBounce",
                            "${personCopy}",
                            '-211px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${personCopy5}",
                            '171px',
                            '74px'
                        ],
                        [
                            "eid64",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${person2Copy5}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${personCopy9}",
                            '171px',
                            '74px'
                        ],
                        [
                            "eid76",
                            "clip",
                            1750,
                            250,
                            "linear",
                            "${person2Copy2}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid62",
                            "top",
                            500,
                            1000,
                            "easeOutBounce",
                            "${personCopy7}",
                            '171px',
                            '74px'
                        ],
                        [
                            "eid78",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${person2}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid66",
                            "clip",
                            2250,
                            250,
                            "linear",
                            "${person2Copy4}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${person}",
                            '-211px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "clip",
                            1500,
                            250,
                            "linear",
                            "${person2Copy6}",
                            [0,30,74,30.12060546875],
                            [0,60,74,30.12060546875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid52",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${personCopy4}",
                            '-211px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("infographic_edgeActions.js");
})("EDGE-35916553");
