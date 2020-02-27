'use strict';

import { get, pick, isMatch } from 'lodash';


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
                lock: false,
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
                            fileurl: `${mediaFilePath}media/entrybot2.png`,
                            name: `${Lang.Blocks.walking_entryBot}2`,
                            scale: 50,
                            dimension: {
                                width: 256,
                                height: 256,
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
                    width: 256,
                    height: 256,
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

