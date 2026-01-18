import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

// Configuración API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function Box() {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function TestR3FView() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Llamada a la API de Django
    fetch(`${API_URL}/api/test/`)
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, color: 'black' }}>
        {apiData && <p>API: {apiData.message}</p>}
      </div>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/test-r3f-view">Ir a Test R3F</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-r3f-view" element={<TestR3FView />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
