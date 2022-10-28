import { redirect } from "react-router-dom";



export default function Mercury() {
  return (
    <mesh>
      <sphereGeometry args={[4.5, 32, 32]} />
      <meshStandardMaterial color="green"  />
    </mesh>
  );
}

