import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, QuadraticBezierLine } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

// Location coordinates (lat, lng)
const locations = [
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
];

// Define connections between data centers
const connections = [
  { from: "Mumbai", to: "Singapore" },
  { from: "Mumbai", to: "Frankfurt" },
  { from: "Singapore", to: "Sydney" },
  { from: "Frankfurt", to: "Amsterdam" },
  { from: "Amsterdam", to: "Los Angeles" },
  { from: "Los Angeles", to: "Singapore" },
  { from: "Frankfurt", to: "Mumbai" },
  { from: "Sydney", to: "Los Angeles" },
];

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

function LocationMarker({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const position = latLngToVector3(lat, lng, 2.01);
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 1 + Math.sin(clock.elapsedTime * 3) * 0.2;
      ref.current.scale.setScalar(scale);
    }
    if (glowRef.current) {
      const scale = 1.5 + Math.sin(clock.elapsedTime * 2) * 0.3;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} />
      </mesh>
      {/* Core marker */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
      {/* Inner bright core */}
      <mesh>
        <sphereGeometry args={[0.015, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function ConnectionLine({ from, to }: { from: string; to: string }) {
  const fromLoc = locations.find((l) => l.name === from);
  const toLoc = locations.find((l) => l.name === to);

  const { start, end, mid } = useMemo(() => {
    if (!fromLoc || !toLoc) return { start: new THREE.Vector3(), end: new THREE.Vector3(), mid: new THREE.Vector3() };
    
    const startPos = latLngToVector3(fromLoc.lat, fromLoc.lng, 2.02);
    const endPos = latLngToVector3(toLoc.lat, toLoc.lng, 2.02);
    
    // Calculate midpoint and raise it for arc effect
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    const distance = startPos.distanceTo(endPos);
    midPoint.normalize().multiplyScalar(2 + distance * 0.3);
    
    return { start: startPos, end: endPos, mid: midPoint };
  }, [fromLoc, toLoc]);

  if (!fromLoc || !toLoc) return null;

  return (
    <QuadraticBezierLine
      start={[start.x, start.y, start.z]}
      end={[end.x, end.y, end.z]}
      mid={[mid.x, mid.y, mid.z]}
      color="#00d4ff"
      lineWidth={1.5}
      transparent
      opacity={0.5}
    />
  );
}

function AnimatedConnectionLine({ from, to, delay }: { from: string; to: string; delay: number }) {
  const fromLoc = locations.find((l) => l.name === from);
  const toLoc = locations.find((l) => l.name === to);
  
  const particleRef = useRef<THREE.Mesh>(null);

  const { start, end, mid } = useMemo(() => {
    if (!fromLoc || !toLoc) return { start: new THREE.Vector3(), end: new THREE.Vector3(), mid: new THREE.Vector3() };
    
    const startPos = latLngToVector3(fromLoc.lat, fromLoc.lng, 2.03);
    const endPos = latLngToVector3(toLoc.lat, toLoc.lng, 2.03);
    
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    const distance = startPos.distanceTo(endPos);
    midPoint.normalize().multiplyScalar(2 + distance * 0.3);
    
    return { start: startPos, end: endPos, mid: midPoint };
  }, [fromLoc, toLoc]);

  const curve = useMemo(() => {
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [start, mid, end]);

  useFrame(({ clock }) => {
    if (particleRef.current && curve) {
      const t = ((clock.elapsedTime * 0.3 + delay) % 1);
      const point = curve.getPoint(t);
      particleRef.current.position.copy(point);
      
      // Fade in/out at ends
      const opacity = Math.sin(t * Math.PI);
      (particleRef.current.material as THREE.MeshBasicMaterial).opacity = opacity * 0.8;
    }
  });

  if (!fromLoc || !toLoc) return null;

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
    </mesh>
  );
}

function Earth() {
  const earthRef = useRef<THREE.Group>(null);
  
  // Load Earth textures
  const [earthTexture, bumpTexture] = useLoader(TextureLoader, [
    '/textures/earth-blue-marble.jpg',
    '/textures/earth-topology.png',
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={earthRef}>
      {/* Main Earth sphere with texture */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.03}
          roughness={0.7}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Atmosphere inner glow */}
      <Sphere args={[2.05, 48, 48]}>
        <meshBasicMaterial
          color="#4fc3f7"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Atmosphere outer glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#00bcd4"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Connection lines */}
      {connections.map((conn, i) => (
        <ConnectionLine key={`${conn.from}-${conn.to}`} from={conn.from} to={conn.to} />
      ))}
      
      {/* Animated particles along connections */}
      {connections.map((conn, i) => (
        <AnimatedConnectionLine 
          key={`particle-${conn.from}-${conn.to}`} 
          from={conn.from} 
          to={conn.to} 
          delay={i * 0.15}
        />
      ))}

      {/* Location markers */}
      {locations.map((loc) => (
        <LocationMarker key={loc.name} lat={loc.lat} lng={loc.lng} name={loc.name} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#4fc3f7" />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#00bcd4" />
      
      <Earth />
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3.2}
        maxDistance={6}
        autoRotate
        autoRotateSpeed={0.2}
        rotateSpeed={0.4}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

const Globe = () => {
  return (
    <div className="w-full h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
      
      {/* Legend */}
      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
          <span className="text-muted-foreground">Data Center</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 bg-gradient-to-r from-cyan-400/80 to-cyan-400/20 rounded" />
          <span className="text-muted-foreground">Network Link</span>
        </div>
      </div>
      
      {/* Instruction overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Globe;
