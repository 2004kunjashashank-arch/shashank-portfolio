import { useEffect, useRef } from "react";

export default function LiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let candleWidth = 18;
    const gap = 8;
    const speed = 0.6;
    let zoom = 1;

    let offset = 0;
    let basePrice = canvas.height / 2;
    let mouseX = 0;
    let mouseY = 0;
    let crashMode = false;
    let pnl = 0;

    let prices = { btc: 0, eth: 0, sol: 0 };

    const candles = [];

    canvas.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    canvas.addEventListener("wheel", (e) => {
      zoom *= e.deltaY < 0 ? 1.05 : 0.95;
      zoom = Math.max(0.5, Math.min(zoom, 2));
    });

    canvas.addEventListener("click", () => {
      basePrice += 150; // pump
    });

    async function fetchPrices() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
        );
        const data = await res.json();
        prices.btc = data.bitcoin.usd;
        prices.eth = data.ethereum.usd;
        prices.sol = data.solana.usd;
      } catch {}
    }

    fetchPrices();
    setInterval(fetchPrices, 10000);

    setInterval(() => {
      crashMode = Math.random() < 0.25;
    }, 15000);

    setInterval(() => {
      pnl += (Math.random() - 0.4) * 10;
    }, 1000);

    function createCandle() {
      const open = basePrice;
      const breakout = Math.random() < 0.03;

      let move;
      if (crashMode) move = -Math.random() * 120;
      else if (breakout) move = (Math.random() - 0.5) * 250;
      else move = (Math.random() - 0.5) * 50;

      const close = open + move;
      const high = Math.max(open, close) + Math.random() * 30;
      const low = Math.min(open, close) - Math.random() * 30;
      const volume = Math.random() * 120;

      basePrice = close;

      if (breakout) {
        canvas.style.boxShadow = "0 0 50px #ff000088";
        setTimeout(() => (canvas.style.boxShadow = "none"), 300);
      }

      candles.push({
        open,
        close,
        high,
        low,
        volume,
        progress: 0
      });

      if (candles.length > 120) candles.shift();
    }

    for (let i = 0; i < 80; i++) createCandle();

    function drawGrid() {
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      for (let y = 0; y < canvas.height; y += 120) {
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

        const animatedClose =
          candle.open +
          (candle.close - candle.open) *
            candle.progress *
            zoom;

        const bodyTop = Math.min(candle.open, animatedClose);
        const bodyHeight = Math.abs(animatedClose - candle.open);

        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, candle.high);
        ctx.lineTo(x + candleWidth / 2, candle.low);
        ctx.stroke();

        ctx.fillRect(x, bodyTop, candleWidth, bodyHeight || 2);
        ctx.shadowBlur = 0;

        ctx.fillStyle = isGreen
          ? "rgba(0,255,136,0.25)"
          : "rgba(255,77,77,0.25)";

        ctx.fillRect(
          x,
          canvas.height - candle.volume,
          candleWidth,
          candle.volume
        );

        if (candle.progress < 1) candle.progress += 0.03;
      });
    }

    function drawCrosshair() {
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.beginPath();
      ctx.moveTo(mouseX, 0);
      ctx.lineTo(mouseX, canvas.height);
      ctx.moveTo(0, mouseY);
      ctx.lineTo(canvas.width, mouseY);
      ctx.stroke();

      ctx.fillStyle = "#00e5ff";
      ctx.font = "13px monospace";
      ctx.fillText(
        `BTC:$${prices.btc}  ETH:$${prices.eth}  SOL:$${prices.sol}`,
        mouseX + 10,
        mouseY - 10
      );
    }

    function drawOrderBook() {
      ctx.font = "12px monospace";

      for (let i = 0; i < 10; i++) {
        const bid = (prices.btc - Math.random() * 50).toFixed(2);
        const ask = (prices.btc + Math.random() * 50).toFixed(2);

        ctx.fillStyle = "rgba(0,255,136,0.6)";
        ctx.fillText(bid, 20, 120 + i * 20);

        ctx.fillStyle = "rgba(255,77,77,0.6)";
        ctx.fillText(ask, 100, 120 + i * 20);
      }
    }

    function drawPnL() {
      ctx.font = "16px monospace";
      ctx.fillStyle = pnl >= 0 ? "#00ff88" : "#ff4d4d";
      ctx.fillText(
        "PnL: $" + pnl.toFixed(2),
        canvas.width - 160,
        40
      );
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawCandles();
      drawCrosshair();
      drawOrderBook();
      drawPnL();

      offset += speed;

      if (offset >= candleWidth + gap) {
        offset = 0;
        createCandle();
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="live-bg" />;
}