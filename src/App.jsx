import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { UILayer } from './components/UI';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={["#171720"]} />
        // fog - when it is far, it cannot be see
        <fog attach="fog" args={["#171720", 10, 30]} />
        // Suspense will wait until everything is loaded inside before triggle Experience- avoid jump effect when loading
        <Suspense>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UILayer/>
    </>
  );
}

export default App;
