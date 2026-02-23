import { useEffect, useRef } from "react";

export default function LiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let candleWidth = 18;
    const gap = 8;
    const speed = 0.6;

    let offset = 0;
    let basePrice = canvas.height / 2;

    const candles = [];

    function createCandle() {
      const open = basePrice;
      const move = (Math.random() - 0.5) * 60;

      const close = open + move;
      const high = Math.max(open, close) + Math.random() * 20;
      const low = Math.min(open, close) - Math.random() * 20;

      basePrice = close;

      candles.push({
        open,
        close,
        high,
        low
      });

      if (candles.length > 120) candles.shift();
    }

    for (let i = 0; i < 80; i++) createCandle();

    function drawGrid() {
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    function drawCandles() {
      candles.forEach((candle, i) => {
        const x = i * (candleWidth + gap) - offset;

        if (x > canvas.width || x < -candleWidth) return;

        const isGreen = candle.close > candle.open;
        const color = isGreen ? "#00ff88" : "#ff4d4d";

        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, candle.high);
        ctx.lineTo(x + candleWidth / 2, candle.low);
        ctx.stroke();

        const bodyTop = Math.min(candle.open, candle.close);
        const bodyHeight = Math.abs(candle.close - candle.open);

        ctx.fillRect(x, bodyTop, candleWidth, bodyHeight || 2);
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawCandles();

      offset += speed;

      if (offset >= candleWidth + gap) {
        offset = 0;
        createCandle();
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="live-bg" />;
}
