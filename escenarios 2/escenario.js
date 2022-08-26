//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x022B62)


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

const geometry = new THREE.ConeGeometry( 1, 3, 6);
const material = new THREE.MeshBasicMaterial( { color: 0x1C70DF } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;

//animacion

function animate(){

    requestAnimationFrame( animate );
/*     cube.rotation.x += 0.05;    */
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();


