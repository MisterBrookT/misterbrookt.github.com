'use client';

import { useEffect, useRef } from 'react';

export function VisitTracker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('#mapmyvisitors')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'mapmyvisitors';
      script.src = 'https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=tt&d=H8VT-7nQ45AeAV56582bNGM9UyiWQe-_FBiWOwn44GU&co=000000&cmo=ff9d9d&cmn=52c552';
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full max-w-4xl mt-12">
      <h2 className="text-2xl font-bold mb-6">Visitor Map</h2>
      <div 
        ref={containerRef}
        className="bg-[#000000] border border-[#333333] rounded-lg overflow-hidden mx-auto"
        style={{
          width: '320px',
          height: '200px',
        }}
      />
    </section>
  );
}

