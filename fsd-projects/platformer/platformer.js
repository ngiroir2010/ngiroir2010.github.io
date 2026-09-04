$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 600, 20, 290);
createPlatform(300, 700, 50, 50, "red");
createPlatform(800, 500, 50, 50, "red")
createPlatform(1000, 400, 100, 20)
createPlatform(500, 600, 200, 20)
createPlatform(1200, 500, 100, 20)
createPlatform(1200, 300, 100, 20)
createPlatform(1000, 200, 100, 20)
createPlatform(1200, 100, 100, 20)
createPlatform(900, 600, 50, 50, "red")
createPlatform(670, 200, 30, 200)
createPlatform(500, 400, 200, 20)
createPlatform(800, 200, 200, 20, "#00000000")




    // TODO 3 - Create Collectables
    createCollectable("steve" , 1200,50 );
createCollectable("diamond", 600,700);
createCollectable("steve", 500,350);




    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2, 500, 2);
createCannon("right", 775, 1500);
createCannon("bottom" , 1200,1000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
