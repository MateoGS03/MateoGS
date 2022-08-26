//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)
scene.fog = new THREE.Fog( 0xffffff, 2, 9);


//fondo
var loader = new THREE.TextureLoader();
loader.load("../img/fondo2.jpg", function(texture){
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

const geometry = new THREE.CylinderGeometry( 5, 5, 5, 10 );
const material = new THREE.MeshBasicMaterial( { color: "Red" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 12;

//animacion

function animate(){

    requestAnimationFrame( animate );
   /*cube.rotation.x += 0.001;*/  
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
