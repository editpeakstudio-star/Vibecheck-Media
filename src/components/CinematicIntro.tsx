import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Volume2, VolumeX, FastForward } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { BRAND } from '../data/agencyData';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [hudLog, setHudLog] = useState<string>('INITIALIZING VIBECHECK SYSTEM...');
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.isMuted());
  const [threeSupported, setThreeSupported] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  // References for Three.js lifecycle
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const panelsRef = useRef<THREE.Group[]>([]);
  const coreRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);
  const startTimeRef = useRef<number>(performance.now());
  const completedRef = useRef<boolean>(false);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [onComplete]);

  const toggleSound = () => {
    const nextMuted = soundManager.toggleMute();
    setIsMuted(nextMuted);
  };

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        onComplete();
      }
    }
  }, [onComplete]);

  // Three.js 3D Mechanical Armor Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Probe software GL / WebGL support
    const glProbe = document.createElement('canvas').getContext('webgl2') ||
                    document.createElement('canvas').getContext('webgl');
    if (!glProbe) {
      setThreeSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x050407);
    scene.fog = new THREE.FogExp2(0x050407, 0.12);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);
    } catch {
      setThreeSupported(false);
      return;
    }

    // 1. Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0x1a0933, 1.2);
    scene.add(ambientLight);

    const rimLight1 = new THREE.DirectionalLight(0xbd00ff, 2.5);
    rimLight1.position.set(4, 5, 4);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0x8500ff, 2.0);
    rimLight2.position.set(-4, -5, 3);
    scene.add(rimLight2);

    const corePointLight = new THREE.PointLight(0xbd00ff, 0.1, 15);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);
    pointLightRef.current = corePointLight;

    // 2. Central Energy Reactor Core
    const coreGroup = new THREE.Group();
    coreRef.current = coreGroup;

    // Inner glowing geometric core
    const coreIcosaGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xbd00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreIcosaGeo, coreMat);
    coreGroup.add(coreMesh);

    // Inner solid pulsating sphere
    const solidCoreGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const solidCoreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xbd00ff,
      emissiveIntensity: 3.0,
      roughness: 0.1,
      metalness: 0.9,
    });
    const solidCore = new THREE.Mesh(solidCoreGeo, solidCoreMat);
    coreGroup.add(solidCore);

    // Concentric Energy Rings
    const ring1Geo = new THREE.TorusGeometry(0.9, 0.025, 16, 64);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x8500ff,
      emissive: 0x8500ff,
      emissiveIntensity: 2.0,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.2, 0.02, 16, 64);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xbd00ff,
      emissive: 0xbd00ff,
      emissiveIntensity: 2.5,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    scene.add(coreGroup);

    // 3. Floating Energy Particle Swarm
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0xbd00ff);
    const c2 = new THREE.Color(0x8500ff);
    const c3 = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? c1 : Math.random() > 0.3 ? c2 : c3;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 4. Procedural Mechanical Armor Panels (8 Segments)
    // Custom trapezoidal metallic shield plate with glowing neon bevel edges
    const panels: THREE.Group[] = [];
    const panelCount = 8;
    const panelAngleStep = (Math.PI * 2) / panelCount;

    // Reusable materials
    const armorPlateMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c0715,
      metalness: 0.95,
      roughness: 0.22,
    });

    const armorGlowEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xbd00ff,
      emissive: 0xbd00ff,
      emissiveIntensity: 2.2,
      roughness: 0.1,
      metalness: 0.5,
    });

    const pistonMaterial = new THREE.MeshStandardMaterial({
      color: 0x443366,
      metalness: 0.85,
      roughness: 0.3,
    });

    for (let i = 0; i < panelCount; i++) {
      const angle = i * panelAngleStep;
      const panelGroup = new THREE.Group();

      // Shape of mechanical armor petal
      const shape = new THREE.Shape();
      const rInner = 0.4;
      const rOuter = 2.1;
      const halfWidth = 0.55;

      shape.moveTo(-halfWidth * 0.4, rInner);
      shape.lineTo(halfWidth * 0.4, rInner);
      shape.lineTo(halfWidth * 1.1, rOuter * 0.7);
      shape.lineTo(halfWidth * 0.7, rOuter);
      shape.lineTo(-halfWidth * 0.7, rOuter);
      shape.lineTo(-halfWidth * 1.1, rOuter * 0.7);
      shape.closePath();

      const extrudeSettings = {
        depth: 0.12,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.03,
        bevelThickness: 0.03,
      };

      const plateGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const plateMesh = new THREE.Mesh(plateGeo, armorPlateMaterial);
      plateMesh.position.z = -0.06;
      panelGroup.add(plateMesh);

      // Glowing edge accent trim
      const edgeGeo = new THREE.BoxGeometry(0.04, rOuter - rInner, 0.14);
      const edgeMeshL = new THREE.Mesh(edgeGeo, armorGlowEdgeMaterial);
      edgeMeshL.position.set(-halfWidth * 0.65, (rOuter + rInner) / 2, 0.02);
      edgeMeshL.rotation.z = 0.15;
      panelGroup.add(edgeMeshL);

      const edgeMeshR = new THREE.Mesh(edgeGeo, armorGlowEdgeMaterial);
      edgeMeshR.position.set(halfWidth * 0.65, (rOuter + rInner) / 2, 0.02);
      edgeMeshR.rotation.z = -0.15;
      panelGroup.add(edgeMeshR);

      // Mechanical hydraulic piston underneath
      const pistonGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.2, 8);
      const pistonMesh = new THREE.Mesh(pistonGeo, pistonMaterial);
      pistonMesh.position.set(0, rOuter * 0.5, -0.18);
      panelGroup.add(pistonMesh);

      // Orient panel around center
      panelGroup.rotation.z = angle;
      panelGroup.position.set(0, 0, 0.3);

      scene.add(panelGroup);
      panels.push(panelGroup);
    }

    panelsRef.current = panels;

    // Handle window resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Initial audio cue
    soundManager.playSystemActivationSound();

    // Render & Animation Loop
    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTimeRef.current) / 1000;
      const totalDuration = 4.4; // 4.4 seconds total sequence
      const normProgress = Math.min(elapsed / totalDuration, 1);
      setProgress(normProgress);

      // Rotate particle cloud gently
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.15;
        particlesRef.current.rotation.x = Math.sin(elapsed * 0.2) * 0.1;
      }

      // Rotate core elements
      if (coreRef.current) {
        coreMesh.rotation.x = elapsed * 0.8;
        coreMesh.rotation.y = elapsed * 1.2;
        ring1.rotation.z = elapsed * 1.5;
        ring2.rotation.z = -elapsed * 1.1;
      }

      // Step-by-step state & sound orchestration
      if (elapsed < 1.0) {
        // Step 1: System Activation (Closed armor, pulsing core, hud init)
        setStep(1);
        setHudLog('INITIALIZING VIBECHECK SYSTEM... [OK]');
        if (pointLightRef.current) {
          pointLightRef.current.intensity = 0.5 + Math.sin(elapsed * 10) * 0.4;
        }

        // Slight breathing motion on closed panels
        panels.forEach((p, idx) => {
          p.position.z = 0.3 + Math.sin(elapsed * 4 + idx) * 0.02;
          p.position.x = 0;
          p.position.y = 0;
          p.rotation.x = 0;
          p.rotation.y = 0;
        });
      } else if (elapsed < 2.5) {
        // Step 2: Mechanical Armor Opening!
        if (step !== 2) {
          setStep(2);
          setHudLog('HYDRAULIC ARMOR DISENGAGING... CORE EXPOSED');
          soundManager.playMechanicalUnlockSound();
          soundManager.playEnergyCoreSurgeSound();
        }

        // Progression of mechanical opening (0 to 1)
        const openProgress = (elapsed - 1.0) / 1.5;
        // Smooth easing curve (elastic mechanical release)
        const ease = 1 - Math.pow(1 - openProgress, 3);

        if (pointLightRef.current) {
          pointLightRef.current.intensity = 1.0 + ease * 3.5;
        }

        // Animate each panel moving outward, rotating, and elevating
        panels.forEach((p, idx) => {
          const angle = idx * panelAngleStep;
          const radialDist = ease * 2.2;
          const slideX = Math.cos(angle + Math.PI / 2) * radialDist;
          const slideY = Math.sin(angle + Math.PI / 2) * radialDist;

          p.position.x = slideX;
          p.position.y = slideY;
          p.position.z = 0.3 + ease * 0.7; // Lift forward
          p.rotation.x = ease * 0.35 * Math.sin(angle);
          p.rotation.y = ease * 0.35 * Math.cos(angle);
        });

        // Core expands and camera draws back slightly
        if (coreRef.current) {
          const coreScale = 1 + ease * 0.4;
          coreRef.current.scale.set(coreScale, coreScale, coreScale);
        }
      } else if (elapsed < 3.8) {
        // Step 3: Logo Reveal & Energy Ring Surge
        if (step !== 3) {
          setStep(3);
          setHudLog('VIBECHECK MEDIA CORE ONLINE');
          soundManager.playLogoChimeSound();
        }

        const revealProg = (elapsed - 2.5) / 1.3;
        // Panels slide further out into the background
        panels.forEach((p, idx) => {
          const angle = idx * panelAngleStep;
          const extraDist = 2.2 + revealProg * 1.8;
          p.position.x = Math.cos(angle + Math.PI / 2) * extraDist;
          p.position.y = Math.sin(angle + Math.PI / 2) * extraDist;
          p.position.z = 1.0 + revealProg * 0.5;
        });

        // Camera slowly tracks into the core
        camera.position.z = 7.5 - revealProg * 0.8;
      } else if (elapsed < totalDuration) {
        // Step 4: Final Warp to Homepage
        if (step !== 4) {
          setStep(4);
          setHudLog('ENTERING VIBECHECK INTERFACE...');
        }
        const warpProg = (elapsed - 3.8) / 0.6;
        camera.position.z = 6.7 - warpProg * 4.0; // Camera plunges into core
      } else {
        // Sequence Complete!
        handleFinish();
        return;
      }

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);

      // Clean up geometries and materials
      panels.forEach((p) => {
        p.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      });

      particleGeo.dispose();
      particleMat.dispose();
      coreIcosaGeo.dispose();
      coreMat.dispose();
      solidCoreGeo.dispose();
      solidCoreMat.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();

      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [handleFinish, step]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050407] transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Three.js 3D Canvas Mount */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* CSS 3D Fallback if WebGL probe fails */}
      {!threeSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050407]">
          <div className="relative w-72 h-72 rounded-full border border-purple-500/30 flex items-center justify-center animate-pulse">
            <div className="w-48 h-48 rounded-full border-2 border-purple-500/60 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#8500FF] to-[#BD00FF] shadow-2xl shadow-purple-500/50" />
            </div>
          </div>
        </div>
      )}

      {/* Cyber Grid & HUD Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#050407_90%)]" />

      {/* Crosshair & Corner Tech Accents */}
      <div className="absolute top-6 left-6 pointer-events-none flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400/80">
        <span className="w-2 h-2 bg-purple-500 inline-block" />
        <span>VIBECHECK-OS // SYS_INIT</span>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          type="button"
          aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-purple-500/30 text-purple-300 text-xs font-mono hover:bg-purple-950/40 hover:border-purple-400 transition-all cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-400" /> : <Volume2 className="w-3.5 h-3.5 text-purple-400" />}
          <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
        </button>

        {/* Skip Intro Button */}
        <button
          onClick={handleFinish}
          type="button"
          className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-purple-900/40 border border-purple-500/50 text-white text-xs font-mono font-medium hover:bg-purple-600 hover:border-purple-400 transition-all shadow-lg shadow-purple-900/40 cursor-pointer"
        >
          <span>SKIP INTRO</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Step 1 HUD Center Message */}
      {step === 1 && (
        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center text-center pointer-events-none px-4 z-10 transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-[#BD00FF] shadow-lg shadow-purple-500 mb-3 animate-ping" />
          <p className="text-xs font-mono tracking-widest text-purple-300 uppercase">
            {hudLog}
          </p>
          <p className="text-[10px] font-mono tracking-widest text-purple-400/50 mt-1">
            QUANTUM ARMOR ONLINE · REACTION MATRIX PRIMED
          </p>
        </div>
      )}

      {/* Step 2 HUD Mechanical Opening */}
      {step === 2 && (
        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center text-center pointer-events-none px-4 z-10 transition-all duration-300">
          <p className="text-xs font-mono tracking-widest text-purple-300 uppercase">
            {hudLog}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-[11px] font-mono text-purple-200">MECHANICAL PANELS DEPLOYING</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </div>
      )}

      {/* Step 3 & 4: VibeCheck Logo & Tagline Reveal */}
      {(step === 3 || step === 4) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 z-10 transition-all duration-500 animate-fadeIn">
          {/* Logo Container with purple glow sweep */}
          <div className="relative flex flex-col items-center">
            {/* Glowing energy halo ring */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#8500FF]/40 via-[#BD00FF]/30 to-transparent blur-2xl animate-pulse" />

            {/* Official VibeCheck Media Logo */}
            <div className="relative mb-6 transform scale-110">
              <img
                src={BRAND.logoImage}
                alt="VibeCheck Media Logo"
                className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_35px_rgba(189,0,255,0.8)]"
              />
            </div>

            {/* Tagline */}
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase glow-text-purple">
                VIBECHECK MEDIA
              </h2>
              <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-purple-300 uppercase">
                {BRAND.tagline}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-black/60">
        <div
          className="h-full bg-gradient-to-r from-[#8500FF] via-[#BD00FF] to-white transition-all duration-100 ease-linear shadow-[0_0_12px_#BD00FF]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
