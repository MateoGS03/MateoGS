//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x022B62)
/*scene.fog = new THREE.Fog( 0xffffff, 3, 5);*/

//fondo
var loader = new THREE.TextureLoader();
loader.load("../img/fondo 3.jpg", function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

const geometry = new THREE.ConeGeometry( 1, 3, 6);

//textura
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../img/metal1.jpg');
//fin textura

//material 
const material = new THREE. MeshMatcapMaterial()
material.matcap = matcap 
material.color.set('blue');
material.metalness = 30;
material.roughness = 10;
    
//fin material
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add( line );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;



//animacion

function animate(){

    requestAnimationFrame( animate );
    /*cube.rotation.x += 0.01;*/
    cube.rotation.y += 0.01;
    line.rotation.y += 0.01;
    
	renderer.render( scene, camera );
}
animate();


