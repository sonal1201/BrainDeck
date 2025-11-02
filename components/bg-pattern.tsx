import React from "react";

const Bgpattern = () => {
  return (
    <div className="min-h-screen w-full relative bg-white overflow-hidden">
      {/* Cool Blue Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top center,
              rgba(134, 176, 243, 0.6),
              transparent 40%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

    </div>
  );
};

export default Bgpattern