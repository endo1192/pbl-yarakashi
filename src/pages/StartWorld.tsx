import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';



const BabylonScene = ({ scene }: { scene: BABYLON.Scene }) => {
  const canvasRef = useRef(null);
  //const engineRef = useRef(null);

  const router = useRouter();

  useEffect(() => {

    const BABYLON = window.BABYLON as any;

    /*console.log('window.BABYLON:', window.BABYLON);
  if (!window.BABYLON) {
    console.error('Babylon.js is not loaded.');
    return;
  }

  // GUIモジュールが存在するか確認
  if (!window.BABYLON.GUI) {
    console.error("Babylon.js GUI module is not loaded.");
    return;
  }*/

    /*const checkBABYLON = () => {
        if (window.BABYLON) {
          console.log("BABYLON is loaded:", window.BABYLON);
          
          if (window.BABYLON.GUI) {
            console.log("BABYLON.GUI is loaded:", window.BABYLON.GUI);
          } else {
            console.error("BABYLON.GUI module is not loaded.");
          }
        } else {
          console.error("BABYLON is not loaded.");
        }
    };
      
    checkBABYLON(); // 初期化を呼び出す*/

    

    const checkBABYLON = () => {
        setTimeout(() => {
          if (window.BABYLON && window.BABYLON.GUI) {
            console.log("BABYLON.GUI is loaded");
            // GUIの初期化処理をここに追加
            const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
            console.log(advancedTexture); // 初期化後のログ

            const jumpButton = BABYLON.GUI.Button.CreateSimpleButton("jumpButton", "Jump");
            console.log(jumpButton);
            jumpButton.width = "150px";
            jumpButton.height = "40px";
            jumpButton.color = "white";
            jumpButton.background = "green";


        
            jumpButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
            jumpButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
            jumpButton.left = "-20px"; 
            jumpButton.top = "-20px"; 

        
             

            jumpButton.onPointerUpObservable.add(() => {
                console.log("Jump button pressed");
                if (!isJumping) {
                    isJumping = true;
                    jumpVelocity = jumpSpeed; 
                }
            });

            advancedTexture.addControl(jumpButton);

            
          
    
      checkBABYLON();
    } 

    else {
      console.error("BABYLON.GUI module is not loaded.");
    }
  }, 1000); // 1秒遅延を与える
};


    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return; 

    //const BABYLON = window.BABYLON; // CDNで読み込んだBabylon.jsを使用

    // 型アサーションでBABYLON.GUIを認識させる
    //const BABYLON = window.BABYLON as typeof import("babylonjs");

    


    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    
    if (!canvas) {
      console.error("Canvas is null.");
      return; 
    }

    

    BABYLON.SceneLoader.ImportMeshAsync("", "/scene/", "sinden.glb", scene).then((result: any) => {
        result.meshes.forEach((mesh: any) => {
            console.log("Loaded mesh name:", mesh.name);
        });
        

        for (let i = 0; i <= 4; i++) {
            const meshName = `Cube${i}`;
            const mesh = result.meshes.find(mesh => mesh.name === meshName);
            if (mesh) {
                mesh.checkCollisions = true;
            }
        }

        Bdoor = result.meshes.find(mesh => mesh.name === "Bdoor");
        if (!Bdoor) {
            console.error("Bdoor mesh not found in the loaded scene.");
        }
    }).catch((error: any) => {
        console.error("Failed to load GLB file:", error);
      });

    
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';

    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    
    const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(3, 2, 30), scene);

    
    
    //camera.attachControl(canvas, true);
    camera.attachControl(canvas as unknown as HTMLElement, true);

    camera.inputs.addMouseWheel();

    console.log(camera.inputs);

    
        
    camera.setTarget(BABYLON.Vector3.Zero());
   
    scene.collisionsEnabled = true;
 
    camera.checkCollisions = true;
        
    camera.ellipsoid = new BABYLON.Vector3(1,1,0.7);

    camera.applyGravity = true;

    camera.speed = 1.5;
    BABYLON.Engine.CollisionsEpsilon = 0.0001;
    camera.inertia = 0.8;
    
    
    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    console.log(light); 

    let isJumping = false;
    const jumpSpeed = 0.3;  
    const jumpHeight = 2.1;   
    

    //const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    // GUIの初期化
    //const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");


    //const jumpButton = Button.CreateSimpleButton("jumpButton", "Jump");
    /*jumpButton.width = "150px";
    jumpButton.height = "40px";
    jumpButton.color = "white";
    jumpButton.background = "green";


        
    jumpButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    jumpButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
    jumpButton.left = "-20px"; 
    jumpButton.top = "-20px"; 

        
    let jumpVelocity = 0; 

    jumpButton.onPointerUpObservable.add(() => {
        console.log("Jump button pressed");
        if (!isJumping) {
            isJumping = true;
            jumpVelocity = jumpSpeed; 
        }
    });*/

        let jumpVelocity = 0;
        
        scene.registerBeforeRender(() => {
            
            if (isJumping) {
                camera.position.y += jumpVelocity; 
                jumpVelocity -= 0.03; 
        
                
                if (camera.position.y <= jumpHeight) {
                    isJumping = false;
                    jumpVelocity = 0; 
                }
            }

            
            if (camera.position.y < 1) {
                camera.position.y = 1; 
                isJumping = false; 
                jumpVelocity = 0; 
            }


            
            const forward = camera.getFrontPosition(1).subtract(camera.position).normalize();
            const right = BABYLON.Vector3.Cross(forward, camera.upVector).normalize();

            
            const moveVector = forward.scale(-joystickDelta.y).add(right.scale(-joystickDelta.x));
            camera.cameraDirection.x += moveVector.x * camera.speed * engine.getDeltaTime() / 1000;
            camera.cameraDirection.z += moveVector.z * camera.speed * engine.getDeltaTime() / 1000;

            
            if (isJumping) {
                camera.position.addInPlace(moveVector.scale(camera.speed * engine.getDeltaTime() / 1000));
            }
        });

        


        


        const joystickContainer = document.createElement("div") as HTMLDivElement;
        joystickContainer.style.position = "absolute";
        joystickContainer.style.left = "100px";
        joystickContainer.style.bottom = "100px";
        joystickContainer.style.width = "100px";
        joystickContainer.style.height = "100px";
        joystickContainer.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
        joystickContainer.style.borderRadius = "50%";
        document.body.appendChild(joystickContainer);

        

        const joystickPuck = document.createElement("div");
        joystickPuck.style.position = "absolute";
        joystickPuck.style.left = "40px";
        joystickPuck.style.top = "40px";
        joystickPuck.style.width = "20px";
        joystickPuck.style.height = "20px";
        joystickPuck.style.backgroundColor = "gray";
        joystickPuck.style.borderRadius = "50%";
        joystickContainer.appendChild(joystickPuck);


        let isDraggingJoystick = false;
        let initialTouchPoint = { x: 0, y: 0 };
        let joystickDelta = { x: 0, y: 0 };


        joystickContainer.addEventListener("pointerdown", (event) => {
            isDraggingJoystick = true;
            initialTouchPoint = { x: event.clientX, y: event.clientY };
            event.preventDefault(); 
        });
        

        
        joystickContainer.addEventListener("touchmove", (event) => {
            if (isDraggingJoystick) {
                const touch = event.touches[0]; 
                let deltaX = touch.clientX - initialTouchPoint.x;
                let deltaY = touch.clientY - initialTouchPoint.y;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const maxDistance = 50;

                
                if (distance > maxDistance) {
                    const angle = Math.atan2(deltaY, deltaX);
                    deltaX = Math.cos(angle) * maxDistance;
                    deltaY = Math.sin(angle) * maxDistance;
                }

                joystickPuck.style.left = `${50 + deltaX}px`;
                joystickPuck.style.top = `${50 + deltaY}px`;

                joystickDelta.x = deltaX / maxDistance;
                joystickDelta.y = deltaY / maxDistance;

                event.preventDefault(); 
            }
        });

        joystickContainer.addEventListener("touchend", () => {
            isDraggingJoystick = false;
            joystickPuck.style.left = "50px";
            joystickPuck.style.top = "50px";
            joystickDelta = { x: 0, y: 0 };
        });
        
        joystickContainer.addEventListener("pointermove", (event) => {
            if (isDraggingJoystick) {
                let deltaX = event.clientX - initialTouchPoint.x;
                let deltaY = event.clientY - initialTouchPoint.y;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const maxDistance = 50;  

                
                const angle = Math.atan2(deltaY, deltaX);
                if (distance > maxDistance) {
                    deltaX = Math.cos(angle) * maxDistance;
                    deltaY = Math.sin(angle) * maxDistance;
                }
               
                joystickPuck.style.left = `${50 + deltaX}px`;
                joystickPuck.style.top = `${50 + deltaY}px`;
 
                joystickDelta.x = deltaX / maxDistance;
                joystickDelta.y = deltaY / maxDistance;

            }
        });


        joystickContainer.addEventListener("pointerup", () => {
            isDraggingJoystick = false;
            joystickPuck.style.left = "50px";
            joystickPuck.style.top = "50px";
            joystickDelta = { x: 0, y: 0 };
        });

        

        // canvasの親要素に追加
        if (canvas.parentElement) {
            canvas.parentElement.appendChild(joystickContainer);
        }

        
        let isRotatingCamera = false;
        let previousPointerPosition = { x: 0, y: 0 };

        canvas.addEventListener("pointerdown", (event) => {
            if (event.clientX > canvas.width / 2) {  
                isRotatingCamera = true;
                previousPointerPosition = { x: event.clientX, y: event.clientY };
            }
        });

        canvas.addEventListener("pointermove", (event) => {
            if (isRotatingCamera) {
                const deltaX = event.clientX - previousPointerPosition.x;
                const deltaY = event.clientY - previousPointerPosition.y;

                camera.rotation.y += deltaX * 0.002;
                camera.rotation.x += deltaY * 0.002;

                previousPointerPosition = { x: event.clientX, y: event.clientY };
            }
        });

        canvas.addEventListener("pointerup", () => {
            isRotatingCamera = false;
            console.log("pointer up");
        });

        
        scene.registerBeforeRender(() => {
            
            const forward = camera.getFrontPosition(1).subtract(camera.position).normalize();
            const right = BABYLON.Vector3.Cross(forward, camera.upVector).normalize();

            
            const moveVector = forward.scale(-joystickDelta.y).add(right.scale(-joystickDelta.x));

            camera.cameraDirection.x += moveVector.x * camera.speed * engine.getDeltaTime() / 1000;
            camera.cameraDirection.z += moveVector.z * camera.speed * engine.getDeltaTime() / 1000;
            
        });


        
        const stopJoystick = () => {
            if (isDraggingJoystick) {
                isDraggingJoystick = false;
                joystickPuck.style.left = "50px";
                joystickPuck.style.top = "50px";
                joystickDelta = { x: 0, y: 0 };
                console.log("Pointer up - Joystick stop");
            }
        };

        joystickContainer.addEventListener("touchend", stopJoystick);

        // Debugging logs
        document.addEventListener("pointerup", (e) => console.log("Pointer up - Document", e));
        document.addEventListener("touchend", (e) => console.log("Touch end - Document", e));

        
        joystickContainer.addEventListener("pointerup", (e) => {
            console.log("Pointer up - Joystick area", e);
        });


    let Bdoor: BABYLON.AbstractMesh | null | undefined;

    

    const pointerToKey = new Map()    

        scene.onPointerObservable.add((pointerInfo) => {
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN://クリックが押されたときの判定
                    
                    if(pointerInfo.pickInfo && pointerInfo.pickInfo.hit) {
                        console.log("clicked");
                        const pickedMesh = pointerInfo.pickInfo.pickedMesh;
                        //let pointerId = pointerInfo.event.pointerId;

                        if(pickedMesh){

                          const pointerEvent = pointerInfo.event as PointerEvent;
                          const pointerId = pointerEvent.pointerId;

                          if (Bdoor && pickedMesh === Bdoor) {
                              console.log("hihatop!");
                              pickedMesh.position.y -= 0.1; 

                              
                              router.push('/Bstart').catch((error: Error) => {
                                  console.error("Link failed:", error);
                              }); 

                              pointerToKey.set(pointerId, {
                                  mesh: pickedMesh
                              });
                          }
                        }
                    }
                    break;
                case BABYLON.PointerEventTypes.POINTERUP:
                    
                    
                    break;
            }
        });


    

    

    engine.runRenderLoop(() => {
      scene.render();
    });

    
    window.addEventListener("resize", () => {
      engine.resize();
    });

    
    return () => {
      if (joystickContainer.parentElement) {
        joystickContainer.parentElement.removeChild(joystickContainer);
      }
      window.removeEventListener('resize', () => engine.resize());
      //engine.dispose();
    };
  }, [scene]);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
};



export default BabylonScene;