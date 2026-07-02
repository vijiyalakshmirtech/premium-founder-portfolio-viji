import "./background.css";

const Background = () => {
  return (
    <>
      {/* Base Background */}
      <div className="bg-base" />

      {/* Ambient Lights */}
      <div className="bg-light bg-light-1" />
      <div className="bg-light bg-light-2" />
      <div className="bg-light bg-light-3" />

      {/* Mesh Layer */}
      <div className="bg-mesh" />

      {/* Noise */}
      <div className="bg-noise" />

      {/* Gradient Overlay */}
      <div className="bg-overlay" />
    </>
  );
};

export default Background;