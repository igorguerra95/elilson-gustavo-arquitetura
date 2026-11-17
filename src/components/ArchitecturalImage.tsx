import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ArchitecturalImage({
  src,
  alt,
  className = '',
  priority = false,
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-[hsl(var(--surface-elevated))] text-[hsl(var(--foreground-muted))] ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, hsl(var(--accent-gold) / 0.16), transparent 60%)',
          }}
        />
        <Compass className="relative h-7 w-7 stroke-[1.25] text-[hsl(var(--accent-gold))]" />
        <span className="relative max-w-[22ch] text-center font-display text-base tracking-wide text-[hsl(var(--foreground-secondary))]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[hsl(var(--surface))] ${className}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[hsl(var(--surface-elevated))] transition-opacity duration-300"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
