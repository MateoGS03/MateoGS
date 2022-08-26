//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)


//fondo
var loader = new THREE.TextureLoader();
loader.load("../img/fondociudad.jpg", function(texture){
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

const geometry = new THREE.CircleGeometry( 2, 40 );
const material = new THREE.MeshBasicMaterial( { color: 0x5B5B5B } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 7;

//animacion

function animate(){

    requestAnimationFrame( animate );
   /*cube.rotation.x += 0.001;*/  
    cube.rotation.y += 0.1;
	renderer.render( scene, camera );
}
animate();

