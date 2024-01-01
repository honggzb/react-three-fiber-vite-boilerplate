# A boilerplate to build R3F projects

## transform and load glb model

1. `npx gltfjsx public/models/Camping.glb -o src/components/Camping1.jsx -k -K -r public`
   1. need install `gltfjsx@6.2.16`
   2. `npx gltfjsx public/models/Camping.glb --transform`
2. or transform on line https://gltf.pmnd.rs/
3. not solve - [GLB export doesn’t include mesh names](https://discourse.threejs.org/t/glb-export-doesnt-include-mesh-names/41680)


## react-three/postprocessing

- This [library](https://github.com/pmndrs/react-postprocessing) provides an EffectPass which automatically organizes and merges any given combination of effects
- `npm i @react-three/postprocessing`

## UI and css over model

1. tailwindcss
   - [tailwindcss install-using postcss](https://tailwindcss.com/docs/installation/using-postcss)
   - `npm i tailwindcss postcss autoprefixer`
   - `npx tailwindcss init -p`
     - [Vite PostCSS module error when building app in Svelte](https://stackoverflow.com/questions/73136479/vite-postcss-module-error-when-building-app-in-svelte)
2. [jotai](https://jotai.org/): store interface that can be used outside of React
   1. `npm i jotai`

## other

|function|web site|
|---|---|
|transform on line|https://gltf.pmnd.rs/|
|model download|https://poly.pizza/|
|fonts|https://poly.pizza/|

## Usages

### 远模糊近清晰的动画效果

- `<fog attach="fog" args={["#171720", 10, 30]} />` in 'app.jsx'

### reflection plane

- refer to 'Experience.jsx in 'r3f-vite-starter-main' project

```javascript
<mesh>
   <planeGeometry />
   <MeshReflectorMaterial/>
</mesh>
<Environment preset="sunset" />
```

## resource

- ![3D-text-effect-thumbnail](https://img.youtube.com/vi/jIkn9dLBfNc/maxresdefault.jpg?w)
- [Video tutorial](https://youtu.be/jIkn9dLBfNc)
- [Starter pack](https://github.com/wass08/r3f-vite-final/)
  - https://github.com/wass08/r3f-vite-starter
- Camping Asset Collection by Alex Safayan [CC-BY](https://creativecommons.org/licenses/by/3.0/) via [Poly Pizza](https://poly.pizza/m/3nj59_uuCbM)