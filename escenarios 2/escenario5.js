//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x022B62)
/*scene.fog = new THREE.Fog( 0xffffff, 3, 5);*/



//fondo
var loader = new THREE.TextureLoader();
loader.load("../img/espacio.jpg", function(texture){
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//GEOMETRIA 1-----------------------------------------------------------------------------------------------------------------------------


const geometry = new THREE.CapsuleGeometry( 1, 2, 4, 8 );
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/luna.jpg');
    const material = new THREE.MeshMatcapMaterial();
    material.matcap = matcap;
    material.flatShading = true;
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
const capsula = new THREE.Mesh( geometry, material );
scene.add( capsula );


//GEOMETRIA 2-----------------------------------------------------------------------------------------------------------------------------


const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshMatcapMaterial();
const textureLoader2 = new THREE.TextureLoader();
const matcap2 = textureLoader.load('../img/.jpg');
material2.matcap = matcap;
material2.flatShading = true;


const edges2 = new THREE.EdgesGeometry( geometry2 );
const line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line2 );

const cube1 = new THREE.Mesh( geometry2, material2 );
scene.add( cube1 );

cube1.position.x = 5



//GEOMETRÍA 3 -------------------------------------------------------------------------------------------------------------------


const geometry3 = new THREE.CylinderGeometry( 1, 1, 2, 3 );
const material3 = new THREE.MeshMatcapMaterial();
const textureLoader3 = new THREE.TextureLoader();
const matcap3 = textureLoader.load('../img/.jpg');
material3.matcap = matcap;
material3.flatShading = true;


const edges3 = new THREE.EdgesGeometry( geometry3 );
const line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line3 );

const cilindro1 = new THREE.Mesh( geometry3, material3 );
scene.add( cilindro1 );

cilindro1.position.x = 3


//controles
var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 2;
control.maxDistance = 12;

camera.position.z = 5;


//GEOMETRÍA 4 ----------------------------------------------------------------------------------------------------------------


const geometry4 = new THREE.SphereGeometry( 2, 2, 2);
const material4 = new THREE.MeshMatcapMaterial();
const textureLoader4 = new THREE.TextureLoader();
const matcap4 = textureLoader.load('../img/.jpg');
material4.matcap = matcap;
material4.flatShading = true;


const edges4 = new THREE.EdgesGeometry( geometry4 );
const line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line4 );

const bola1 = new THREE.Mesh( geometry4, material4 );
scene.add( bola1 );

bola1.position.x = -4



const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );


//controles
/* var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 2;
control.maxDistance = 12;

camera.position.z = 5;
 */
 


//drag
const controls = new THREE.DragControls( [cube1, line, bola1, line4, capsula, line3, cilindro1, line2 ], camera, renderer.domElement );
camera.position.z = 5;


 
//hover
 controls.addEventListener('hoveron', function(events){
    events.object.material.wireframe = true;
    events.object.scale.y *= 2
})

controls.addEventListener('hoveroff', function(events){
    events.object.material.wireframe = false;
    events.object.scale.y /= 2
})


const flyControls = new THREE.FlyControls(camera, renderer.domElement)
flyControls.movementSpeed = 0.1;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;





//animacion/rotación y posición.
function animate(){

    requestAnimationFrame(animate);
    
    capsula.rotation.y += 0.01;
    cube1.rotation.y += 0.01
    line.rotation.y += 0.01;
    line2.rotation.y += 0.01;
    cilindro1.rotation.y += 0.01;
    line3.rotation.y += 0.01;
    bola1.rotation.y += 0.01;
    line4.rotation.y += 0.01; 

    //posiciones

    line4.position.x = -4
    line3.position.x = 3
    line2.position.x = 5
    flyControls.update(0.5);
    
	renderer.render( scene, camera );
}
animate();










