import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DiamondScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Diamond geometry (Octahedron scaled to look like diamond)
    const geometry = new THREE.OctahedronGeometry(1.4, 0);

    // Glowing wireframe
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x05c3de,
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, lineMaterial);

    // Inner translucent faceted crystal
    const meshMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x307fe2,
      emissive: 0x05c3de,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.8,
      thickness: 1.2,
      transparent: true,
      opacity: 0.65,
    });
    const diamondMesh = new THREE.Mesh(geometry, meshMaterial);

    const diamondGroup = new THREE.Group();
    diamondGroup.add(diamondMesh);
    diamondGroup.add(wireframe);
    scene.add(diamondGroup);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x05c3de, 2, 10);
    pointLight1.position.set(2, 3, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x307fe2, 2, 10);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      diamondGroup.rotation.y += 0.012;
      diamondGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.2 + 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="m-auto h-[12rem] w-[12rem] md:h-[15rem] md:w-[15rem] cursor-pointer flex items-center justify-center"
    />
  );
}

export default DiamondScene;
