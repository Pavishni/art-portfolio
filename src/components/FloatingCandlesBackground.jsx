const FloatingCandlesBackground = () => {
  const generateCandles = (count) => {
    return Array.from({ length: count }, () => ({
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
      delay: `${(Math.random() * 1.5).toFixed(2)}s`,
    }));
  };

  const candles = generateCandles(200);

  return (
    <div className="w-full bg-[#0a0f2c] absolute inset-0 -z-10 overflow-hidden h-full">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {candles.map((candle, index) => (
          <div
            key={index}
            className="absolute candle candle-float"
            style={{
              left: candle.left,
              top: candle.top,
              animationDelay: candle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingCandlesBackground;
