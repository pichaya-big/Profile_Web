/**
 * AnimatedBackground
 * Renders the three animated gradient blobs (Aero Blue, Soft Purple, Mint)
 * that serve as the glassmorphism backdrop throughout the entire site.
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Main background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4fd] via-[#f0eeff] to-[#edfff0]" />

      {/* Blob 1 — Aero Blue */}
      <div
        className="blob animate-blob"
        style={{
          width: '700px',
          height: '700px',
          top: '-15%',
          left: '-10%',
          background: 'radial-gradient(circle, #7CB9E8 0%, transparent 70%)',
        }}
      />

      {/* Blob 2 — Soft Purple */}
      <div
        className="blob animate-blob-slow"
        style={{
          width: '600px',
          height: '600px',
          top: '30%',
          right: '-8%',
          background: 'radial-gradient(circle, #B19CD9 0%, transparent 70%)',
          animationDelay: '-4s',
        }}
      />

      {/* Blob 3 — Mint Green */}
      <div
        className="blob animate-blob"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-10%',
          left: '20%',
          background: 'radial-gradient(circle, #98FF98 0%, transparent 70%)',
          animationDelay: '-8s',
        }}
      />

      {/* Blob 4 — Secondary accent */}
      <div
        className="blob animate-blob-slow"
        style={{
          width: '400px',
          height: '400px',
          top: '55%',
          left: '55%',
          background: 'radial-gradient(circle, #90cdfd 0%, transparent 70%)',
          animationDelay: '-12s',
          opacity: 0.35,
        }}
      />
    </div>
  );
}
