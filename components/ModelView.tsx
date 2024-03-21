import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import React, { Suspense } from 'react'
import * as THREE from 'three'
import Lights from './Lights';
import IPhone from './Iphone';
import Loader from './Loader';



interface Prop {
    index: number
    groupRef: React.MutableRefObject<THREE.Group>;
    gsapType: string;
    controlRef: React.MutableRefObject<any>;
    setRotationState: React.Dispatch<React.SetStateAction<number>>;
    item: {
        title: string;
        color: string[];
        img: string;
    };
    size: string
}
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }: Prop) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''} z-10`}
        >
            {/* Ambient Light */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />
            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>

                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>

            </group>
        </View>
    )
}

export default ModelView