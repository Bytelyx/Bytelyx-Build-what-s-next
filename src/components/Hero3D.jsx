import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function Hero3D({ activeService, onSelectService }) {
  const mountRef = useRef(null);
  const [hasWebGL] = useState(() => checkWebGLSupport());

  useEffect(() => {
    if (!hasWebGL) return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    let width = currentMount.clientWidth || 550;
    let height = currentMount.clientHeight || 550;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.4);

    // 2. High-Performance Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      currentMount.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      return;
    }

    // 3. Futuristic Studio Lighting (Violet & Electric Blue Palette)
    const ambientLight = new THREE.AmbientLight(0x15102d, 2.0);
    scene.add(ambientLight);

    // Key Light: Electric Blue
    const keyLight = new THREE.DirectionalLight(0x4f7dff, 4.0);
    keyLight.position.set(6, 7, 6);
    scene.add(keyLight);

    // Fill Light: Primary Violet
    const fillLight = new THREE.DirectionalLight(0x8a3ffc, 3.2);
    fillLight.position.set(-7, -4, 5);
    scene.add(fillLight);

    // Rim Light: Soft Lavender
    const rimLight = new THREE.DirectionalLight(0xb9a0ff, 2.4);
    rimLight.position.set(0, -6, -5);
    scene.add(rimLight);

    // Internal Core Glow PointLight
    const corePointLight = new THREE.PointLight(0x4f7dff, 3.5, 7);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // Master Universe Group
    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    // 4. Redesigned 3D "B" Brand Symbol (Futuristic Geometric Glass Crystal)
    const createFuturisticBShape = () => {
      const shape = new THREE.Shape();
      const w = 1.9;
      const h = 2.6;
      const chamfer = 0.28;

      // Outer geometric contour with high-tech chamfers
      shape.moveTo(-w / 2, -h / 2 + chamfer);
      shape.lineTo(-w / 2, h / 2 - chamfer);
      shape.lineTo(-w / 2 + chamfer, h / 2);
      shape.lineTo(0.35, h / 2);
      shape.bezierCurveTo(w / 2 + 0.3, h / 2, w / 2 + 0.3, 0.08, 0.15, 0.08);
      shape.bezierCurveTo(w / 2 + 0.35, 0.08, w / 2 + 0.35, -h / 2, 0.35, -h / 2);
      shape.lineTo(-w / 2 + chamfer, -h / 2);
      shape.lineTo(-w / 2, -h / 2 + chamfer);

      // Top Loop Cutout (Hex-faceted negative space)
      const topHole = new THREE.Path();
      topHole.moveTo(-0.25, 0.32);
      topHole.lineTo(0.42, 0.32);
      topHole.bezierCurveTo(0.72, 0.32, 0.72, 0.95, 0.42, 0.95);
      topHole.lineTo(-0.25, 0.95);
      topHole.closePath();
      shape.holes.push(topHole);

      // Bottom Loop Cutout (Hex-faceted negative space)
      const bottomHole = new THREE.Path();
      bottomHole.moveTo(-0.25, -0.95);
      bottomHole.lineTo(0.48, -0.95);
      bottomHole.bezierCurveTo(0.82, -0.95, 0.82, -0.32, 0.48, -0.32);
      bottomHole.lineTo(-0.25, -0.32);
      bottomHole.closePath();
      shape.holes.push(bottomHole);

      return shape;
    };

    const bShape = createFuturisticBShape();
    const extrudeSettings = {
      depth: 0.42,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 2,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    const bGeometry = new THREE.ExtrudeGeometry(bShape, extrudeSettings);
    bGeometry.center();

    // Glassmorphic Optical Shader Material (Violet + Electric Blue)
    const bMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8a3ffc,
      emissive: 0x15102d,
      roughness: 0.12,
      metalness: 0.3,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      transmission: 0.78,
      thickness: 1.4,
      ior: 1.54,
      transparent: true,
      opacity: 0.92,
      reflectivity: 0.9,
    });

    const bMesh = new THREE.Mesh(bGeometry, bMaterial);
    universeGroup.add(bMesh);

    // Glowing Neon Edge Accents on the "B"
    const edgesGeometry = new THREE.EdgesGeometry(bGeometry, 22);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x4f7dff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const edgeLines = new THREE.LineSegments(edgesGeometry, edgeMaterial);
    universeGroup.add(edgeLines);

    // Inner Glowing Crystalline Nucleus
    const nucleusGeo = new THREE.OctahedronGeometry(0.35, 1);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xb9a0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    universeGroup.add(nucleusMesh);

    // 5. 3D Holographic Globe & Wireframe Grid
    const globeRadius = 2.45;
    const globeGroup = new THREE.Group();
    universeGroup.add(globeGroup);

    // Translucent Dark Glass Outer Shell
    const globeGlassGeo = new THREE.SphereGeometry(globeRadius, 48, 48);
    const globeGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x15102d,
      roughness: 0.25,
      metalness: 0.1,
      transmission: 0.85,
      thickness: 0.8,
      transparent: true,
      opacity: 0.22,
    });
    const globeGlassMesh = new THREE.Mesh(globeGlassGeo, globeGlassMat);
    globeGroup.add(globeGlassMesh);

    // Fine Latitude & Longitude Coordinate Lines
    const wireframeGeo = new THREE.SphereGeometry(globeRadius * 1.005, 36, 22);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x4f7dff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // Geodesic Network Nodes on Globe Surface (Fibonacci Spherical Distribution)
    const nodeCount = 54;
    const nodePositions = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const nodeGeo = new THREE.SphereGeometry(0.038, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const nodesInstanced = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);
    const tempMatrix = new THREE.Matrix4();

    for (let i = 0; i < nodeCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
      const x = globeRadius * 1.01 * Math.cos(theta) * Math.sin(phi);
      const y = globeRadius * 1.01 * Math.sin(theta) * Math.sin(phi);
      const z = globeRadius * 1.01 * Math.cos(phi);

      nodePositions.push(new THREE.Vector3(x, y, z));
      tempMatrix.setPosition(x, y, z);
      nodesInstanced.setMatrixAt(i, tempMatrix);
    }
    nodesInstanced.instanceMatrix.needsUpdate = true;
    globeGroup.add(nodesInstanced);

    // Interconnecting Network Lines Between Geodesic Nodes
    const lineIndices = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 1.15) {
          lineIndices.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          lineIndices.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
        }
      }
    }

    const networkLineGeo = new THREE.BufferGeometry();
    networkLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineIndices, 3));
    const networkLineMat = new THREE.LineBasicMaterial({
      color: 0x8a3ffc,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const networkLines = new THREE.LineSegments(networkLineGeo, networkLineMat);
    globeGroup.add(networkLines);

    // 6. Revolving 3D Orbital Rings with Traveling Satellite Nodes
    const ringsGroup = new THREE.Group();
    universeGroup.add(ringsGroup);

    // Ring 1: Primary Violet Inclined Ring
    const ring1Geo = new THREE.TorusGeometry(3.35, 0.016, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x8a3ffc,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = 1.15;
    ring1.rotation.y = 0.35;
    ringsGroup.add(ring1);

    // Ring 2: Electric Blue Orbital Ring
    const ring2Geo = new THREE.TorusGeometry(3.85, 0.014, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x4f7dff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -0.75;
    ring2.rotation.y = 0.85;
    ringsGroup.add(ring2);

    // Ring 3: Soft Lavender Outer Horizon Ring
    const ring3Geo = new THREE.TorusGeometry(4.35, 0.012, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xb9a0ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = 0.45;
    ring3.rotation.z = -0.95;
    ringsGroup.add(ring3);

    // Satellite Beads Orbiting on Rings
    const satelliteGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const sat1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, blending: THREE.AdditiveBlending });
    const sat2Mat = new THREE.MeshBasicMaterial({ color: 0xb9a0ff, blending: THREE.AdditiveBlending });
    const sat1 = new THREE.Mesh(satelliteGeo, sat1Mat);
    const sat2 = new THREE.Mesh(satelliteGeo, sat2Mat);
    ringsGroup.add(sat1);
    ringsGroup.add(sat2);

    // 7. Ambient Celestial Star Particle Field
    const particleCount = 420;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 4.2 + Math.random() * 8.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x8a3ffc,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Mouse Tracking & Parallax Variables
    let targetRotationX = 0.15;
    let targetRotationY = -0.3;

    const onMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = -0.3 + x * 0.45;
      targetRotationX = 0.15 - y * 0.35;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize Handling
    const onResize = () => {
      if (!currentMount) return;
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // 9. GSAP ScrollTrigger Integration (Phase 5 Scroll Control)
    const scrollProxy = {
      globeScale: 1.0,
      bRotationZ: 0,
      ringExpansion: 1.0,
      cameraZ: 9.4,
    };

    const ctx = gsap.context(() => {
      const heroSection = currentMount.closest('#hero');
      if (heroSection) {
        gsap.to(scrollProxy, {
          globeScale: 1.15,
          bRotationZ: Math.PI * 0.25,
          ringExpansion: 1.35,
          cameraZ: 8.6,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }
    }, currentMount);

    // 10. Animation Loop (Phase 1-4 Coordinated Execution)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating sine-wave oscillation
      const floatY = Math.sin(elapsedTime * 1.3) * 0.09;
      universeGroup.position.y = floatY;

      // Smooth mouse rotation lerp
      universeGroup.rotation.y += (targetRotationY - universeGroup.rotation.y) * 0.06;
      universeGroup.rotation.x += (targetRotationX - universeGroup.rotation.x) * 0.06;

      // Independent 3D Globe continuous rotation
      globeGroup.rotation.y = elapsedTime * 0.12;

      // Rotating Crystalline Nucleus
      nucleusMesh.rotation.x = elapsedTime * 0.6;
      nucleusMesh.rotation.y = elapsedTime * 0.8;

      // Pulsing Core Light
      corePointLight.intensity = 3.0 + Math.sin(elapsedTime * 3.0) * 1.0;

      // Revolving Orbital Rings
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.28;
      ring3.rotation.y = elapsedTime * 0.22;

      // Satellite Beads moving along orbits
      sat1.position.x = Math.cos(elapsedTime * 1.2) * 3.35;
      sat1.position.y = Math.sin(elapsedTime * 1.2) * 3.35 * Math.sin(1.15);
      sat1.position.z = Math.sin(elapsedTime * 1.2) * 3.35 * Math.cos(1.15);

      sat2.position.x = Math.cos(-elapsedTime * 0.95) * 3.85;
      sat2.position.y = Math.sin(-elapsedTime * 0.95) * 3.85 * Math.sin(-0.75);
      sat2.position.z = Math.sin(-elapsedTime * 0.95) * 3.85 * Math.cos(-0.75);

      // Starfield slow orbital drift
      particles.rotation.y = elapsedTime * 0.025;

      // Scroll scrubbing dynamic application
      globeGroup.scale.setScalar(scrollProxy.globeScale);
      ringsGroup.scale.setScalar(scrollProxy.ringExpansion);
      bMesh.rotation.z = scrollProxy.bRotationZ;
      edgeLines.rotation.z = scrollProxy.bRotationZ;
      camera.position.z = scrollProxy.cameraZ;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Complete Resource Disposal on Unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      ctx.revert();

      bGeometry.dispose();
      bMaterial.dispose();
      edgesGeometry.dispose();
      edgeMaterial.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      globeGlassGeo.dispose();
      globeGlassMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      networkLineGeo.dispose();
      networkLineMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      satelliteGeo.dispose();
      sat1Mat.dispose();
      sat2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
      }
    };
  }, [hasWebGL]);

  return (
    <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[620px] flex items-center justify-center select-none">
      {/* Background Multi-Layer Ambient Bloom (Violet + Electric Blue) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#5821CE]/25 via-[#8A3FFC]/20 to-[#4F7DFF]/15 blur-[120px] animate-pulse" />
        <div className="w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full bg-indigo-950/40 blur-[80px]" />
      </div>

      {hasWebGL ? (
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />
      ) : (
        /* Accessible High-Performance Fallback */
        <div className="flex flex-col items-center justify-center p-8 text-center relative z-10">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#8A3FFC] to-[#4F7DFF] p-1 shadow-[0_0_50px_rgba(138,63,252,0.4)]">
            <div className="w-full h-full bg-[#080816] rounded-[22px] flex items-center justify-center">
              <span className="font-extrabold text-5xl bg-gradient-to-r from-[#B9A0FF] to-[#4F7DFF] bg-clip-text text-transparent">
                B
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Monogram Technical Telemetry Badge */}
      <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-6 pointer-events-none z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15102D]/85 backdrop-blur-md border border-[#8A3FFC]/30 shadow-lg text-[11px] font-mono font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#4F7DFF] animate-ping" />
          <span>3D Quantum Core &bull; Interactive 60FPS</span>
        </div>
      </div>
    </div>
  );
}
