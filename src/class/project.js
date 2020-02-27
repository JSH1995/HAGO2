'use strict';

import { get, pick, isMatch } from 'lodash';
import { GEHelper } from '../graphicEngine/GEHelper';

function nextstage() {
 
    //팝업창출력
    //width : 300px크기
    //height : 300px크기
    //top : 100px 위의 화면과 100px 차이해서 위치
    //left : 100px 왼쪽화면과 100px 차이해서 위치
    //툴바 X, 메뉴바 X, 스크롤바 X , 크기조절 X
    window.open('http://www.naver.com','popName','width=300,height=300,top=100,left=100,toolbar=no,menubar=no,scrollbars=no,resizable=no,status=no');
}


function scriptCheck(script) {
    if (script.length !== 1 || script[0].length !== 2) {
        return false;
    }

    const whenRun = get(script, '0.0.type');
    const repeat = get(script, '0.1.type');
    const statements = get(script, '0.1.statements');
    const move = get(script, '0.1.statements.0.0.type');

    if (
        whenRun !== 'when_run_button_click' ||
        repeat !== 'repeat_basic' ||
        statements.length !== 1 ||
        statements[0].length !== 1 ||
        move !== 'move_xy_time2'
        
    ) {
        return false;
    }

    return true;
}

Entry.isDefaultProject = function(project) {
    try {
        if (Entry.stateManager.undoStack_.length) {
            return false;
        }

        const script = JSON.parse(get(project, 'objects.0.script'));
        const { scenes, variables, objects } = project;
        if (
            scenes.length !== 1 ||
            variables.length !== 2 ||
            objects.length !== 1 ||
            !scriptCheck(script)
        ) {
            return false;
        }
        const pickData = pick(project, [
            'scenes.0.id',
            'variables.0.id',
            'variables.0.value',
            'variables.0.variableType',
            'variables.0.x',
            'variables.0.y',
            'variables.1.id',
            'variables.1.value',
            'variables.1.variableType',
            'variables.1.x',
            'variables.1.y',
            'objects.0.id',
            'objects.0.scene',
            'objects.0.sprite.sounds.0.id',
            'objects.0.sprite.pictures.0.id',
            'objects.0.sprite.pictures.1.id',
            'expansionBlocks',
            'speed',
        ]);

        return isMatch(Entry.getStartProject(), pickData);
        
    } catch (e) {
        return false;
    }
};

Entry.getStartProject = function(mediaFilePath) {
    return {
        category: Lang.Menus.other,
        scenes: [
            {
                name: `${Lang.Blocks.SCENE} 1`,
                id: '7dwq',
            },
        ],

        variables: [
            {
                name: Lang.Workspace.Variable_Timer,
                id: 'brih',
                visible: false,
                value: '0',
                variableType: 'timer',
                x: 134,
                y: -70,
                array: [],
                object: null,
                isCloud: false,
            },
            {
                name: Lang.Blocks.VARIABLE_get_canvas_input_value,
                id: '1vu8',
                visible: false,
                value: '0',
                variableType: 'answer',
                x: 150,
                y: -100,
                array: [],
                object: null,
                isCloud: false,
            },
        ],
        
        objects: [
            {
                id: '7y0y1',
                name: Lang.Blocks.iron_ball,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
            
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type: 'move_xy_time2',
                           
                          
                        },

                        
                        
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/entrybot1.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 100,
                            dimension: {
                                width: 512,
                                height: 512,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -400,
                    y: -100,
                    regX: 142,
                    regY: 175,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 512,
                    height: 512,
                    visible: true,
                },
                lock: true,
                active: true,
            },
            {
                id: '7y0y11',
                name: Lang.Blocks.Domino1,
                label: {
                    ko: '도미노1',
                    en: 'Domino1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        
                    
                       
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y1'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object',
                    
                
                    },
                ]]
                                }]]
                            
                        },

                     
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.Domino1}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y12',
                name: Lang.Blocks.Domino2,
                label: {
                    ko: '도미노2',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y11'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 0,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y13',
                name: Lang.Blocks.Domino3,
                label: {
                    ko: '도미노3',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y12'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 120,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y14',
                name: Lang.Blocks.Domino4,
                label: {
                    ko: '도미노4',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y13'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    {type: 'next_popup'},
                    
                  
                    
                    { params: ['thisOnly', null],
                        type: 'stop_object'
                         
                        
                    },
                    
                        
                        
                ]]
                                }]]
                            
                        },
                    ],
                     ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 240,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
        ],
        

        
        expansionBlocks: [],
        speed: 60,
    };
};

Entry.getStartProject2 = function(mediaFilePath) {
    return {
        category: Lang.Menus.other,
        scenes: [
            {
                name: `${Lang.Blocks.SCENE} 2`,
                id: '7dwq',
            },
        ],
        variables: [
            {
                name: Lang.Workspace.Variable_Timer,
                id: 'brih',
                visible: false,
                value: '0',
                variableType: 'timer',
                x: 134,
                y: -70,
                array: [],
                object: null,
                isCloud: false,
            },
            {
                name: Lang.Blocks.VARIABLE_get_canvas_input_value,
                id: '1vu8',
                visible: false,
                value: '0',
                variableType: 'answer',
                x: 150,
                y: -100,
                array: [],
                object: null,
                isCloud: false,
            },
        ],
        objects: [
            
            {
                id: '7y0y11',
                name: Lang.Blocks.Domino1,
                label: {
                    ko: '도미노1',
                    en: 'Domino1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        
                    
                       
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object',
                
                                }]]
                            
                        },

                     
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.Domino1}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -400,
                    y: -180,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            
            {
                id: '7y0y12',
                name: Lang.Blocks.Domino2,
                label: {
                    ko: '도미노2',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y11'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -250,
                    y: -180,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },

            {
                id: '7y0y21',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '자동차',
                    en: 'car',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y12'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'move_xy_time3'},
                    
                ]]
                                }]]
                            
                        },
                    
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/car.png`,
                            name: `${Lang.Blocks.car}2`,
                            scale: 50,
                            dimension: {
                                width: 500,
                                height: 227,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -150,
                    y: -180,
                    regX: 118,
                    regY: 135,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 500,
                    height: 227,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y13',
                name: Lang.Blocks.Domino3,
                label: {
                    ko: '도미노3',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y21'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 250,
                    y: -180,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y14',
                name: Lang.Blocks.Domino4,
                label: {
                    ko: '도미노4',
                    en: 'Domino',
                },
                
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y13'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    {type: 'next_popup'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 400,
                    y: -180,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            
        ],
        

        
        expansionBlocks: [],
        speed: 60,
        
    };
     
};

Entry.getStartProject3 = function(mediaFilePath) {
    return {
        category: Lang.Menus.other,
        scenes: [
            {
                name: `${Lang.Blocks.SCENE} 2`,
                id: '7dwq',
            },
        ],
        variables: [
            {
                name: Lang.Workspace.Variable_Timer,
                id: 'brih',
                visible: false,
                value: '0',
                variableType: 'timer',
                x: 134,
                y: -70,
                array: [],
                object: null,
                isCloud: false,
            },
            {
                name: Lang.Blocks.VARIABLE_get_canvas_input_value,
                id: '1vu8',
                visible: false,
                value: '0',
                variableType: 'answer',
                x: 150,
                y: -100,
                array: [],
                object: null,
                isCloud: false,
            },
        ],
        objects: [
            {
                id: '7y0y1',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            params: [null, 'sin1'],
                    type: 'when_message_cast',
                            x: 40,
                            y: 50,
                        },
                        {type: 'next_popup'},
                        {
                            params: [
                                {
                                    type: 'number',
                                    params: ['15'],
                                },
                                {
                                    type: 'number',
                                    params: ['0'],
                                },
                                {
                                    type: 'number',
                                    params: ['500'],
                                },
                                null,
                            ],
                            type: 'move_xy_time',
                        
                        },
                        { params: ['thisOnly', null],
                        type: 'stop_object' }
                        
                        
                       
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/roket.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 440,
                                height: 840,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 400,
                    y: -24,
                    regX: 220,
                    regY: 420,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 0,
                    width: 440,
                    height: 840,
                    visible: true,
                },
                lock: false,
                active: true,
            },

            {
                id: '7y0y2',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type: 'hide',
                            
                           
                        },
                       
                    ],
                    [
                        {
                            params: [null, 'sin1'],
                    type: 'when_message_cast',
                            x: 400,
                            y: 50,
                        },
                        {type:'show'},
                        {
                            params: [
                                {
                                    type: 'number',
                                    params: ['15'],
                                },
                                {
                                    type: 'number',
                                    params: ['0'],
                                },
                                {
                                    type: 'number',
                                    params: ['500'],
                                },
                                null,
                            ],
                            type: 'move_xy_time',
                        }
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/fire.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 270,
                                height: 407,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 400,
                    y: -190,
                    regX: 118,
                    regY: 135,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 180,
                    direction: 0,
                    width: 270,
                    height: 407,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y3',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                       
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/trem.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 650,
                                height: 370,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 60,
                    y: -150,
                    regX: 327.5,
                    regY: 185,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 650,
                    height: 370,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y7',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/trem.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 650,
                                height: 370,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -180,
                    y: -150,
                    regX: 327.5,
                    regY: 185,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 650,
                    height: 370,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y4',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/eovh.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 450,
                                height: 480,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -420,
                    y: -165,
                    regX: 225,
                    regY: 240,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: -30,
                    direction: 90,
                    width: 450,
                    height: 480,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y5',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },

                //params: [null],
                //type: 'get_variable',
                script: [
                    [
                        {
                            params: [Lang.Blocks.START_press_some_key_space, '32'],
                            type: 'when_some_key_pressed',
                        },
                        {
                            params: [
                                's2ds2d',
                                {
                                    type: 'text',
                                    params: ['15'],
                                },
                                null,
                            ],
                            type: 'set_variable',
                            
                           
                        },
                        {
                            type : 'repeat_inf',

                            statements: [[
                                { 
                                    params: [
                                        {
                                            params: ['s2ds2d'],
                                            type: 'get_variable',
                                        },
                                        null,
                                    ],
                                    type: 'move_y',

                                },
                                {params: [
                                    's2ds2d',
                                    {
                                        type: 'text',
                                        params: ['-0.6'],
                                    },
                                    null,
                                ],
                                type: 'change_variable',},
                               
                               

                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y3'],
                        
                    },
                    
                ],
                statements: 
                [[
                    { params: [
                        's2ds2d',
                        {
                            type: 'text',
                            params: ['15'],
                        },
                        null,
                    ],
                    type: 'set_variable',},
                    
                ]]
                                },
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y7'],
                        
                    },
                    
                ],
                statements: 
                [[
                    { params: [
                        's2ds2d',
                        {
                            type: 'text',
                            params: ['15'],
                        },
                        null,
                    ],
                    type: 'set_variable',},
                    
                ]]
                                },
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null,'wall_down'],
                        
                    },
                    
                ],
                statements: 
                [[
                    { params: [
                        's2ds2d',
                        {
                            type: 'text',
                            params: ['0'],
                        },
                        null,
                    ],
                    type: 'set_variable',},
                    { 
                        type: 'stop_repeat' },
                ]]
                                }
                                
                                    
                                
                            ]],

                            
                        },

                                
                        
                        
                    
                    
                ],
               [

                {
                    params: [Lang.Blocks.START_press_some_key_space, '32'],
                    type: 'when_some_key_pressed',
                    x:400,
                    y:50,
                },
               
                {
                    type : 'repeat_inf',
    
                    
                    
                
                
                    statements: [[
                        { 
                            params: [
                                {
                                    type: 'number',
                                    params: ['2'],
                                },
                                {
                                    type: 'number',
                                    params: ['300'],
                                },
                                {
                                    type: 'number',
                                    params: ['0'],
                                },
                                null,
                            ],
                            type: 'move_xy_time',},
                        ]]
            },

               ],
               [
                   {
                type: 'when_run_button_click',
                x: 700,
                y: 50,
            },
            {
                type : 'repeat_inf',

                
                
            
            
                statements: [[
                    { 
                        type: '_if',
           
    params: [
        {
            type: 'reach_something',
            params: [null, '7y0y6'],
            
        },
        
    ],
    statements: 
    [[
        
        { params: ['thisOnly', null],
            type: 'stop_object' },
    ]]
                    }]]
                
            },


               ],
                
            ],
            


                            
         
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/eovhball.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 170,
                                height: 172,
                            },
                        },
                        
                       
                    ],
                },
                entity: {
                    x: -408,
                    y: -115,
                    regX: 85,
                    regY: 86,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 170,
                    height: 172,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y6',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },

                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y5'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {params: ['sin1', 'Button'],
                        type: 'message_cast', 
                       
                    },
                    {
                        params: [
                            {
                                type: 'get_pictures',
                                params: ['b2b22'],
                            },
                            null,
                        ],
                        type: 'change_to_some_shape',
                    },
                    
                ]]
                                }]]
                            
                        },
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/firebutton.png`,
                            name: `버튼`,
                            scale: 50,
                            dimension: {
                                width: 256,
                                height: 256,
                            },
                        },

                        {
                            id: 'b2b22',
                            fileurl: `${mediaFilePath}media/firebutton2.png`,
                            name: `클릭된 버튼`,
                            scale: 50,
                            dimension: {
                                width: 256,
                                height: 256,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 250,
                    y: -165,
                    regX: 118,
                    regY: 135,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 256,
                    height: 256,
                    visible: true,
                },
                lock: false,
                active: true,
            },
           
        ],

       
        variables: [ // 프로젝트 변수
            {
                name: 'Speed', // 변수명
                variableType: 'variable', // 변수형. (일반변수: variable, 타이머: timer, 대답: answer, 슬라이드: slide, 리스트: list)
                id: 's2ds2d', // 변수ID. Unique.
                value: 0, // 변수 값
                minValue: 5, // 최소값
                maxValue: 5, // 최대값
                visible: false, // 캔버스에 표시여부
                x: 0, // 컨버스 위치 x좌표
                y: 0, // 캔버스 위치 y좌표
                width: 100, // 넓이
                height: 200, // 높이
                isCloud: { // 공유 변수 여부
                    type: false,
                    default: false
                },
               
                array: [{ // 변수형이 list일 경우 값 목록
                    data: 'Speed' // 값 데이터
                }]
            }
        ],
        messages: [ // 신호 목록
            {
                name: 'Button', // 신호명
                id: 'sin1' // 신호 ID. Unique.
            },
        ],
        

        
        expansionBlocks: [],
        speed: 60,
    };
};
Entry.getStartProject5 = function(mediaFilePath) {
    return {
        category: Lang.Menus.other,
        scenes: [
            {
                name: `${Lang.Blocks.SCENE} 2`,
                id: '7dwq',
            },
        ],
        variables: [
            {
                name: Lang.Workspace.Variable_Timer,
                id: 'brih',
                visible: false,
                value: '0',
                variableType: 'timer',
                x: 134,
                y: -70,
                array: [],
                object: null,
                isCloud: false,
            },
            {
                name: Lang.Blocks.VARIABLE_get_canvas_input_value,
                id: '1vu8',
                visible: false,
                value: '0',
                variableType: 'answer',
                x: 150,
                y: -100,
                array: [],
                object: null,
                isCloud: false,
            },
        ],
        objects: [
            {
                id: '7y0y1',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type: 'move_xy_time2',
                            
                           
                        },
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/entrybot1.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 512,
                                height: 512,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -400,
                    y: -100,
                    regX: 118,
                    regY: 135,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 512,
                    height: 512,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y100',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type: 'move_xy_time2',
                            
                           
                        },
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/entrybot1.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 512,
                                height: 512,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -400,
                    y: -100,
                    regX: 118,
                    regY: 135,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 512,
                    height: 512,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y99',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type: 'move_xy_time2',
                            
                           
                        },
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/entrybot1.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 512,
                                height: 512,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -400,
                    y: -100,
                    regX: 118,
                    regY: 135,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 512,
                    height: 512,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y50',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '라인1',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                       
                        {
                            type: 'move_xy_time',
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/line.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 960,
                                height: 240,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -100,
                    regX: 142,
                    regY: 250,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 960,
                    height: 480,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y49',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '라인2',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                       
                        {
                            type: 'move_xy_time',
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/line.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 960,
                                height: 240,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -100,
                    regX: 142,
                    regY: 250,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 960,
                    height: 480,
                    visible: true,
                },
                lock: false,
                active: true,
            }, {
                id: '7y0y47',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '리',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                       
                        {
                            type: 'move_xy_time',
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/li.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 109,
                                height: 316,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -100,
                    regX: 142,
                    regY: 250,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 109,
                    height: 316,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y46',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '리2',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                       
                        {
                            type: 
                            'move_xy_time',
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/li.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 109,
                                height: 316,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -100,
                    regX: 142,
                    regY: 250,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 109,
                    height: 316,
                    visible: true,
                },
                lock: false,
                active: true,
            },{
                id: '7y0y48',
                name: Lang.Blocks.entry_bot_name,
                label: {
                    ko: '라인3',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                       
                        {
                            type: 'move_xy_time',
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/line.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 960,
                                height: 240,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -100,
                    regX: 142,
                    regY: 250,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 960,
                    height: 480,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y6',
                name: Lang.Blocks.Domino1,
                label: {
                    ko: '도미노5',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                          
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.Domino1}1`,
                            scale: 100,
                            dimension: {
                                width: 284,
                                height: 350,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 0,
                    y: -100,
                    regX: 142,
                    regY: 250,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 300,
                    height: 500,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            
        ],
        

        
        expansionBlocks: [],
        speed: 60,
    };
};
Entry.isDefaultProject = function(project) {
    try {
        if (Entry.stateManager.undoStack_.length) {
            return false;
        }

        const script = JSON.parse(get(project, 'objects.0.script'));
        const { scenes, variables, objects } = project;
        if (
            scenes.length !== 1 ||
            variables.length !== 2 ||
            objects.length !== 1 ||
            !scriptCheck(script)
        ) {
            return false;
        }
        const pickData = pick(project, [
            'scenes.0.id',
            'variables.0.id',
            'variables.0.value',
            'variables.0.variableType',
            'variables.0.x',
            'variables.0.y',
            'variables.1.id',
            'variables.1.value',
            'variables.1.variableType',
            'variables.1.x',
            'variables.1.y',
            'objects.0.id',
            'objects.0.scene',
            'objects.0.sprite.sounds.0.id',
            'objects.0.sprite.pictures.0.id',
            'objects.0.sprite.pictures.1.id',
            'expansionBlocks',
            'speed',
        ]);

        return isMatch(Entry.getStartProject(), pickData);
        
    } catch (e) {
        return false;
    }
};

Entry.getStartProject4 = function(mediaFilePath) {
    return {
        category: Lang.Menus.other,
        scenes: [
            {
                name: `${Lang.Blocks.SCENE} 1`,
                id: '7dwq',
            },
        ],
        variables: [
            {
                name: Lang.Workspace.Variable_Timer,
                id: 'brih',
                visible: false,
                value: '0',
                variableType: 'timer',
                x: 134,
                y: -70,
                array: [],
                object: null,
                isCloud: false,
            },
            {
                name: Lang.Blocks.VARIABLE_get_canvas_input_value,
                id: '1vu8',
                visible: false,
                value: '0',
                variableType: 'answer',
                x: 150,
                y: -100,
                array: [],
                object: null,
                isCloud: false,
            },
        ],
        
        objects: [
            {
                id: '7y0y1',
                name: Lang.Blocks.iron_ball,
                label: {
                    ko: '쇠구슬',
                    en: 'Entrybot1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type: 'move_xy_time2',
                          
                        },
                        {type: 'move_x',},
                        
                      

                        
                        
                       
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/entrybot1.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 100,
                            dimension: {
                                width: 512,
                                height: 512,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -400,
                    y: -100,
                    regX: 142,
                    regY: 175,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 512,
                    height: 512,
                    visible: true,
                },
                lock: true,
                active: true,
            },
            {
                id: '7y0y11',
                name: Lang.Blocks.Domino1,
                label: {
                    ko: '도미노1',
                    en: 'Domino1',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        
                    
                       
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y1'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object',
                    
                
                    },
                ]]
                                }]]
                            
                        },

                     
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.Domino1}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: -120,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y12',
                name: Lang.Blocks.Domino2,
                label: {
                    ko: '도미노2',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y11'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 0,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y13',
                name: Lang.Blocks.Domino3,
                label: {
                    ko: '도미노3',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y12'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    { params: ['thisOnly', null],
                        type: 'stop_object' },
                ]]
                                }]]
                            
                        },
                    ],
                ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 120,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
            {
                id: '7y0y14',
                name: Lang.Blocks.Domino4,
                label: {
                    ko: '도미노4',
                    en: 'Domino',
                },
                script: [
                    [
                        {
                            type: 'when_run_button_click',
                            x: 40,
                            y: 50,
                        },
                        {
                            type : 'repeat_inf',

                            
                            
                        
                        
                            statements: [[
                                { 
                                    type: '_if',
                       
                params: [
                    {
                        type: 'reach_something',
                        params: [null, '7y0y13'],
                        
                    },
                    
                ],
                statements: 
                [[
                    {type: 'rotate_by_time'},
                    
                  
                    
                    { params: ['thisOnly', null],
                        type: 'stop_object'
                         
                        
                    },

                    {
                        console
                    },
                    
                        
                        
                ]]
                                }]]
                            
                        },
                    ],
                     ],
                selectedPictureId: 'vx80',
                objectType: 'sprite',
                rotateMethod: 'free',
                scene: '7dwq',
                sprite: {
                    
                    pictures: [
                        {
                            id: 'vx80',
                            fileurl: `${mediaFilePath}media/domino.png`,
                            name: `${Lang.Blocks.walking_entryBot}1`,
                            scale: 100,
                            dimension: {
                                width: 326,
                                height: 545,
                            },
                        },
                       
                    ],
                },
                entity: {
                    x: 240,
                    y: -200,
                    regX: 142,
                    regY: 500,
                    scaleX: 0.3154574132492113,
                    scaleY: 0.3154574132492113,
                    rotation: 0,
                    direction: 90,
                    width: 326,
                    height: 545,
                    visible: true,
                },
                lock: false,
                active: true,
            },
        ],
        

        
        expansionBlocks: [],
        speed: 60,
    };
};