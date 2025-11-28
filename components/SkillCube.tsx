'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const SkillCube = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current && !hovered) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.25;
        }
    });

    const skills = [
        { text: "Docker", position: [0, 0, 1.51], rotation: [0, 0, 0] },
        { text: "K8s", position: [0, 0, -1.51], rotation: [0, Math.PI, 0] },
        { text: "AWS", position: [1.51, 0, 0], rotation: [0, Math.PI / 2, 0] },
        { text: "Linux", position: [-1.51, 0, 0], rotation: [0, -Math.PI / 2, 0] },
        { text: "CI/CD", position: [0, 1.51, 0], rotation: [-Math.PI / 2, 0, 0] },
        { text: "Git", position: [0, -1.51, 0], rotation: [Math.PI / 2, 0, 0] },
    ];

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial
                    color="#151a1f"
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.9}
                    wireframe={false}
                />

                {/* Edges */}
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(3, 3, 3)]} />
                    <lineBasicMaterial color="#00eaff" linewidth={2} />
                </lineSegments>

                {/* Text on faces */}
                {skills.map((skill, index) => (
                    <Text
                        key={index}
                        position={new THREE.Vector3(...skill.position)}
                        rotation={new THREE.Euler(...skill.rotation)}
                        fontSize={0.8}
                        color="#00eaff"
                        anchorX="center"
                        anchorY="middle"
                        outlineWidth={0.02}
                        outlineColor="#000000"
                    >
                        {skill.text}
                    </Text>
                ))}
            </mesh>
        </Float>
    );
};

export default SkillCube;
