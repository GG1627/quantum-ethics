'use client';

const GradientMesh = () => {
  return (
    <div 
      className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none w-full"
      style={{
        backgroundColor: '#0f0f0f',
        background: `
          /* Scattered maroon blotches - varying sizes */
          radial-gradient(ellipse 800px 600px at 15% 12%, rgba(128, 0, 0, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 600px 800px at 85% 18%, rgba(139, 0, 0, 0.12) 0%, transparent 55%),
          radial-gradient(ellipse 700px 500px at 25% 35%, rgba(128, 0, 0, 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 500px 700px at 75% 42%, rgba(220, 20, 60, 0.08) 0%, transparent 50%),
          
          /* More scattered crimson/maroon meshes */
          radial-gradient(ellipse 900px 400px at 45% 28%, rgba(220, 20, 60, 0.1) 0%, transparent 65%),
          radial-gradient(ellipse 400px 900px at 55% 65%, rgba(128, 0, 0, 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 600px 600px at 10% 55%, rgba(139, 0, 0, 0.09) 0%, transparent 55%),
          radial-gradient(ellipse 800px 500px at 90% 72%, rgba(220, 20, 60, 0.11) 0%, transparent 58%),
          
          /* Additional mesh blotches */
          radial-gradient(ellipse 500px 800px at 35% 78%, rgba(128, 0, 0, 0.13) 0%, transparent 62%),
          radial-gradient(ellipse 700px 400px at 65% 88%, rgba(139, 0, 0, 0.1) 0%, transparent 55%),
          radial-gradient(ellipse 600px 700px at 20% 85%, rgba(220, 20, 60, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 400px 600px at 80% 25%, rgba(128, 0, 0, 0.11) 0%, transparent 50%),
          
          /* Subtle burgundy accents */
          radial-gradient(ellipse 300px 500px at 50% 15%, rgba(114, 47, 55, 0.08) 0%, transparent 70%),
          radial-gradient(ellipse 500px 300px at 30% 50%, rgba(114, 47, 55, 0.06) 0%, transparent 65%),
          radial-gradient(ellipse 400px 400px at 70% 80%, rgba(114, 47, 55, 0.07) 0%, transparent 68%),
          
          /* Base dark grey overlay */
          linear-gradient(180deg, 
            rgba(15, 15, 15, 0.98) 0%, 
            rgba(18, 18, 18, 0.97) 25%,
            rgba(15, 15, 15, 0.98) 50%,
            rgba(18, 18, 18, 0.97) 75%,
            rgba(15, 15, 15, 0.99) 100%
          )
        `,
        backgroundSize: '100% 100%',
      }}
    />
  );
};

export default GradientMesh;

