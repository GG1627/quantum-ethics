'use client';

import { useEffect, useState } from 'react';

const GradientMesh = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    setWindowHeight(window.innerHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate dynamic gradient positions based on scroll
  const getGradientStyle = () => {
    // Default values for SSR
    if (!isMounted || typeof window === 'undefined' || typeof document === 'undefined') {
      return {
        background: `
          radial-gradient(circle at 20% 10%, rgba(128, 0, 0, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(139, 0, 0, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 30% 20%, rgba(220, 20, 60, 0.06) 0%, transparent 70%),
          linear-gradient(180deg, rgba(15, 15, 15, 0.98) 0%, rgba(24, 24, 24, 0.95) 50%, rgba(15, 15, 15, 0.98) 100%)
        `,
      };
    }

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPercent = Math.min(
      scrollY / Math.max(scrollHeight - windowHeight, 1),
      1
    );

    // Dynamic positions that change with scroll
    const baseX1 = 20 + scrollPercent * 30;
    const baseY1 = 10 + scrollPercent * 40;
    const baseX2 = 80 - scrollPercent * 20;
    const baseY2 = 70 + scrollPercent * 20;
    const baseX3 = 50 + Math.sin(scrollPercent * Math.PI * 2) * 20;
    const baseY3 = 50 + Math.cos(scrollPercent * Math.PI * 2) * 20;

    // Color intensities that change with scroll
    const intensity1 = 0.12 + scrollPercent * 0.08;
    const intensity2 = 0.1 + (1 - scrollPercent) * 0.1;
    const intensity3 = 0.08 + scrollPercent * 0.12;

    return {
      background: `
        radial-gradient(circle at ${baseX1}% ${baseY1}%, rgba(128, 0, 0, ${intensity1}) 0%, transparent 50%),
        radial-gradient(circle at ${baseX2}% ${baseY2}%, rgba(220, 20, 60, ${intensity2}) 0%, transparent 50%),
        radial-gradient(circle at ${baseX3}% ${baseY3}%, rgba(139, 0, 0, ${intensity3}) 0%, transparent 60%),
        radial-gradient(ellipse at ${30 + scrollPercent * 40}% ${20 + scrollPercent * 30}%, rgba(220, 20, 60, 0.06) 0%, transparent 70%),
        linear-gradient(180deg, rgba(15, 15, 15, 0.98) 0%, rgba(24, 24, 24, 0.95) 50%, rgba(15, 15, 15, 0.98) 100%)
      `,
    };
  };

  const gradientStyle = getGradientStyle();

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        ...gradientStyle,
        backgroundSize: '200% 200%',
        backgroundPosition: isMounted ? `${scrollY * 0.05}% ${scrollY * 0.05}%` : '0% 0%',
        transition: 'background 0.1s ease-out',
      }}
    >
      {/* Secondary mesh layer for depth */}
      {isMounted && (
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at ${25 + scrollY * 0.02}% ${35 + scrollY * 0.01}%, rgba(220, 20, 60, 0.08) 0%, transparent 45%),
              radial-gradient(circle at ${75 - scrollY * 0.015}% ${65 - scrollY * 0.02}%, rgba(128, 0, 0, 0.08) 0%, transparent 45%),
              radial-gradient(circle at ${50 + Math.sin(scrollY * 0.001) * 15}% ${50 + Math.cos(scrollY * 0.001) * 15}%, rgba(139, 0, 0, 0.06) 0%, transparent 55%)
            `,
            backgroundSize: '180% 180%',
            backgroundPosition: `${scrollY * 0.03}% ${scrollY * 0.03}%`,
          }}
        />
      )}
      
      {/* Tertiary subtle layer */}
      {isMounted && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at ${40 + scrollY * 0.01}% ${60 - scrollY * 0.01}%, rgba(220, 20, 60, 0.05) 0%, transparent 60%)
            `,
          }}
        />
      )}
    </div>
  );
};

export default GradientMesh;

