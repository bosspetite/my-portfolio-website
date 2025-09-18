const BackgroundElements = () => {
  return (
    <>
      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-primary/10 rotate-12" style={{ 
        animation: 'spin 20s linear infinite' 
      }}></div>
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Additional Floating Orbs */}
      <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full blur-xl animate-pulse" style={{
        background: 'radial-gradient(circle, hsl(176 100% 44% / 0.05), transparent)',
        animationDelay: '3s'
      }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full blur-2xl animate-pulse" style={{
        background: 'radial-gradient(circle, hsl(260 100% 60% / 0.05), transparent)',
        animationDelay: '4s'
      }}></div>
    </>
  );
};

export default BackgroundElements;