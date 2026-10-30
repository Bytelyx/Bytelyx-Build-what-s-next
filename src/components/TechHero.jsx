import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, ArrowRight, Terminal, 
  Cpu, Cloud, ShieldCheck 
} from 'lucide-react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function TechHero() {
  const heroRef = useRef(null);
  const canvasMountRef = useRef(null);
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const metricsRef = useRef(null);
  
  // Parallax layers refs
  const layerBgRef = useRef(null);
  const layerWidgetsRef = useRef(null);
  const layerTerminalRef = useRef(null);

  // 1. Interactive Three.js 3D Cyber Crystal Nexus with BYTELYX Brand Colors
  useEffect(() => {
    if (!canvasMountRef.current) return;
    const mount = canvasMountRef.current;
    const width = mount.clientWidth || 540;
    const height = mount.clientHeight || 540;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      mount.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Dynamic Lighting matching BYTELYX Logo Palette
    const ambientLight = new THREE.AmbientLight(0x0e0a1f, 3.0);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x863bff, 4.5, 20);
    purpleLight.position.set(4, 5, 4);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x47bfff, 3.8, 20);
    cyanLight.position.set(-4, -4, 3);
    scene.add(cyanLight);

    // Group for mouse rotation
    const group = new THREE.Group();
    scene.add(group);

    // Outer Geodesic Tech Sphere (Wireframe)
    const geoOuter = new THREE.IcosahedronGeometry(2.5, 2);
    const matOuter = new THREE.MeshStandardMaterial({
      color: 0x863bff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      roughness: 0.2,
      metalness: 0.8
    });
    const meshOuter = new THREE.Mesh(geoOuter, matOuter);
    group.add(meshOuter);

    // Inner Faceted Core Crystal (Octahedron with Glass Physical Material)
    const geoCore = new THREE.OctahedronGeometry(1.5, 0);
    const matCore = new THREE.MeshPhysicalMaterial({
      color: 0x130b28,
      emissive: 0x863bff,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85
    });
    const meshCore = new THREE.Mesh(geoCore, matCore);
    group.add(meshCore);

    // Inner Glowing Cyan Gyro Ring
    const geoRing = new THREE.TorusGeometry(1.9, 0.035, 16, 64);
    const matRing = new THREE.MeshBasicMaterial({
      color: 0x47bfff,
      transparent: true,
      opacity: 0.65
    });
    const meshRing = new THREE.Mesh(geoRing, matRing);
    meshRing.rotation.x = Math.PI / 3;
    group.add(meshRing);

    // Cloud of Connected Particle Nodes
    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xede6ff,
      size: 0.045,
      transparent: true,
      opacity: 0.7
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particlePoints);

    // Animation Loop
    let animId;
    let targetRotX = 0;
    let targetRotY = 0;

    const animate = () => {
      if (!prefersReducedMotion) {
        meshOuter.rotation.y += 0.0035;
        meshOuter.rotation.x += 0.002;
        meshCore.rotation.y -= 0.005;
        meshRing.rotation.z += 0.006;
        particlePoints.rotation.y += 0.0015;

        // Smooth interpolate to mouse
        group.rotation.y += (targetRotY - group.rotation.y) * 0.05;
        group.rotation.x += (targetRotX - group.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse tracking for 3D group tilt
    const handle3DMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = -y * 0.35;
    };

    window.addEventListener('mousemove', handle3DMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight;
      if (newW && newH) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handle3DMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geoOuter.dispose();
      matOuter.dispose();
      geoCore.dispose();
      matCore.dispose();
      geoRing.dispose();
      matRing.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // 2. Performant GSAP Mouse-Movement Parallax with quickTo()
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Create quickTo setters for 60fps smooth physics
      const bgX = gsap.quickTo(layerBgRef.current, 'x', { duration: 1.2, ease: 'power2.out' });
      const bgY = gsap.quickTo(layerBgRef.current, 'y', { duration: 1.2, ease: 'power2.out' });

      const widgetsX = gsap.quickTo(layerWidgetsRef.current, 'x', { duration: 0.8, ease: 'power2.out' });
      const widgetsY = gsap.quickTo(layerWidgetsRef.current, 'y', { duration: 0.8, ease: 'power2.out' });
      const widgetsRot = gsap.quickTo(layerWidgetsRef.current, 'rotation', { duration: 1.0, ease: 'power2.out' });

      const terminalX = gsap.quickTo(layerTerminalRef.current, 'x', { duration: 0.9, ease: 'power2.out' });
      const terminalY = gsap.quickTo(layerTerminalRef.current, 'y', { duration: 0.9, ease: 'power2.out' });

      const handlePointerMove = (e) => {
        const normX = (e.clientX / window.innerWidth) - 0.5;
        const normY = (e.clientY / window.innerHeight) - 0.5;

        // Multi-depth parallax offsets
        bgX(normX * -30);
        bgY(normY * -30);

        widgetsX(normX * 45);
        widgetsY(normY * 45);
        widgetsRot(normX * 4);

        terminalX(normX * -20);
        terminalY(normY * 20);
      };

      window.addEventListener('mousemove', handlePointerMove, { passive: true });

      // Staggered Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
      .fromTo(
        '.headline-word',
        { opacity: 0, y: 40, rotateX: 20 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.1, duration: 0.85 },
        '-=0.3'
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        metricsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        canvasMountRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
        '-=0.8'
      );

      return () => {
        window.removeEventListener('mousemove', handlePointerMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center bg-[#06040a] overflow-hidden"
    >
      {/* Layer 1: Ambient Background Glows & Cyber Grid (Parallax Depth 1) */}
      <div 
        ref={layerBgRef} 
        className="absolute inset-0 pointer-events-none -z-10 transition-transform duration-75"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-[#863bff]/18 via-[#7e14ff]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#47bfff]/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 cyber-grid opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Action (Stable Text for Accessibility) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Pill: Software Innovation Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 shadow-[0_0_20px_rgba(134,59,255,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#47bfff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#47bfff]" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-[#ede6ff]">
                Next-Generation Software Engineering
              </span>
            </div>

            {/* Main Headline: "Building What's Next." with Staggered Word Reveal */}
            <h1 
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold tracking-tight text-white leading-[1.06]"
            >
              <span className="headline-word inline-block mr-3 sm:mr-4">Building</span>
              <span className="headline-word inline-block mr-3 sm:mr-4 bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">
                What&apos;s
              </span>
              <span className="headline-word inline-block text-white">Next.</span>
            </h1>

            {/* Exact Required Supporting Text */}
            <p 
              ref={subtextRef}
              className="text-base sm:text-lg lg:text-xl text-[#9d96b8] leading-relaxed max-w-2xl font-normal"
            >
              BYTELYX transforms ambitious ideas into powerful digital products through innovative software engineering, intelligent solutions, and exceptional digital experiences.
            </p>

            {/* CTAs: Primary & Secondary */}
            <div 
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#863bff] via-[#7e14ff] to-[#47bfff] hover:opacity-95 shadow-[0_0_30px_rgba(134,59,255,0.45)] hover:shadow-[0_0_40px_rgba(71,191,255,0.6)] transition-all duration-300"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#ede6ff] bg-[#0d0a1a] hover:bg-[#130f24] border border-white/10 hover:border-[#863bff]/50 transition-all duration-300 shadow-md"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#9d96b8] group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* High-Impact Proof Metrics Strip */}
            <div 
              ref={metricsRef}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
            >
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-white block">
                  &lt; 80ms
                </span>
                <span className="text-xs text-[#9d96b8] font-sans">
                  Edge Execution
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono bg-gradient-to-r from-[#863bff] to-[#47bfff] bg-clip-text text-transparent block">
                  99.98%
                </span>
                <span className="text-xs text-[#9d96b8] font-sans">
                  System Uptime
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-white block">
                  100%
                </span>
                <span className="text-xs text-[#9d96b8] font-sans">
                  Cloud Native
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered 3D Technology Visual & Parallax Telemetry Widgets */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px]">
            
            {/* 3D WebGL Canvas Container */}
            <div 
              ref={canvasMountRef}
              className="w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center relative z-20 cursor-grab active:cursor-grabbing"
              title="Interactive 3D Technology Nexus — Drag or hover to explore"
            />

            {/* Layer 2: Floating Foreground Telemetry Widgets (Parallax Depth 2) */}
            <div 
              ref={layerWidgetsRef}
              className="absolute inset-0 pointer-events-none z-30 hidden sm:block transition-transform duration-75"
            >
              {/* Telemetry Card 1: Cloud Architecture */}
              <div className="absolute -top-2 -left-4 p-3.5 rounded-2xl glass-panel border border-[#863bff]/30 shadow-xl flex items-center gap-3 animate-float">
                <div className="p-2 rounded-xl bg-[#863bff]/20 text-[#ede6ff] border border-[#863bff]/30">
                  <Cloud className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white tracking-tight">
                    Microservice Mesh
                  </span>
                  <span className="text-[10px] font-mono text-[#47bfff]">
                    Kubernetes &bull; AWS
                  </span>
                </div>
              </div>

              {/* Telemetry Card 2: AI & Agentic Autonomy */}
              <div className="absolute -bottom-4 -left-2 p-3.5 rounded-2xl glass-panel border border-[#47bfff]/30 shadow-xl flex items-center gap-3 animate-float-delayed">
                <div className="p-2 rounded-xl bg-[#47bfff]/20 text-[#47bfff] border border-[#47bfff]/30">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white tracking-tight">
                    Autonomous AI Swarm
                  </span>
                  <span className="text-[10px] font-mono text-[#9d96b8]">
                    Real-Time Inference
                  </span>
                </div>
              </div>

              {/* Telemetry Card 3: Security & High Availability */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 p-3.5 rounded-2xl glass-panel border border-white/10 shadow-xl flex items-center gap-3 animate-float">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white tracking-tight">
                    Enterprise SLA
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    SOC2 &bull; HIPAA Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 3: Interactive Terminal Code Stamp (Parallax Depth 3) */}
            <div 
              ref={layerTerminalRef}
              className="absolute -bottom-8 right-4 hidden md:block z-10 pointer-events-none opacity-80"
            >
              <div className="px-4 py-2 rounded-xl bg-[#0d0a1a]/90 border border-white/10 font-mono text-[11px] text-[#9d96b8] shadow-lg flex items-center gap-2.5">
                <Terminal className="w-3.5 h-3.5 text-[#863bff]" />
                <span className="text-white">BYTELYX.build</span>
                <span className="text-[#47bfff]">&bull;</span>
                <span className="text-[#9d96b8]">Scale: Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
