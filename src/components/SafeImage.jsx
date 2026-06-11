import { useState } from 'react';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800';

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackSrc = FALLBACK_IMAGE,
  loading = 'lazy',
  ...props
}) {
  const [failedSrc, setFailedSrc] = useState(null);
  const imgSrc = failedSrc === src ? fallbackSrc : src;

  return (
    <img
      {...props}
      key={src}
      src={imgSrc}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setFailedSrc(src)}
    />
  );
}
