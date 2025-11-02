'use client';

import Script from 'next/script';

export function CalendlyChat() {
  return (
    <section className="w-full max-w-4xl mt-12">
      <h2 className="text-2xl font-bold">30-minute chat with me</h2>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/yinghaotang2001" 
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
    </section>
  );
}
