var Example = Example || {};

Matter.use(
    'matter-wrap'
);

Example.avalanche = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1280,
            height: 720,
            showAngleIndicator: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(-100, 10, 1, 1, 0, 0, function(x, y) {
        return Bodies.circle(x, y, 30, 30);

        
    });

  
  
    
    World.add(world, stack);
    
    World.add(world, [
        Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.08 }),
        Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.07 }),
        Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.09 })
        
        
    ]);

    World.add(world, [
        Bodies.rectangle(800, 650, 70, 5, { isStatic: false, angle: Math.PI * 0.5 })
        
        
    ]);

    World.add(world, [
        // walls
        Bodies.rectangle(300, 0, 1300, 20, { isStatic: true }),
        Bodies.rectangle(300, 700, 1300, 20, { isStatic: true }),
        Bodies.rectangle(950, 350, 20, 720, { isStatic: true }),
        Bodies.rectangle(-350, 350, 20, 720, { isStatic: true })
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: true
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, Composite.allBodies(world));

    // wrapping using matter-wrap plugin
   
    

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

if (typeof module !== 'undefined') {
    module.exports = Example[Object.keys(Example)[0]];
}