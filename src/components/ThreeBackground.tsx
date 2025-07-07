// Simplified background without heavy animations
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Static gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/8 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/8 rounded-full blur-3xl opacity-60"></div>
      
      {/* Simple grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(18, 12, 76, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18, 12, 76, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}