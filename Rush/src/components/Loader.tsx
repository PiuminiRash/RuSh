import { useEffect, useRef } from "react";

export default function Loader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    c.width = W;
    c.height = H;

    const ctx = c.getContext("2d")!;
    let circles: any[] = [];
    let load = false;

    const random = (max = 1, min = 0) => Math.random() * (max - min) + min;
    const repos = (a: number, b: number, c: number) => a + (b - a) * c;

    class Circle {
      radX: number;
      radY: number;
      a: number;
      rotate: boolean;
      x: number;
      y: number;
      angle: number;
      rad: number;
      sx: number;
      sy: number;
      color: string;
      x0 = 0; y0 = 0; x1 = 0; y1 = 0;

      constructor(radX: number, radY: number, a = 0, rotate = false) {
        this.radX = radX;
        this.radY = radY;
        this.a = a;
        this.rotate = rotate;
        this.x = random(W, -W);
        this.y = random(H, -H);
        this.angle = random(Math.PI * 2);
        this.rad = random(1.5, 0.5);
        this.sx = random(100);
        this.sy = 100;
        this.color = '#FFD700';
      }

      draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.translate(this.x + W / 2, this.y + H / 2);
        if (this.rotate) ctx.rotate(this.a);
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.angle += 0.005;
        this.x0 = this.radX * Math.cos(this.angle);
        this.y0 = this.radY * Math.sin(this.angle);
        this.x1 = this.sx * Math.cos(this.angle);
        this.y1 = this.sy * Math.sin(this.angle);
      }

      check() {
        this.x = repos(this.x, load ? this.x0 : this.x1, 0.03);
        this.y = repos(this.y, load ? this.y0 : this.y1, 0.03);
      }

      run() {
        this.update();
        this.check();
        this.draw();
      }
    }

    const createCircles = () => {
      for (let i = 0; i < 300; i++) circles.push(new Circle(random(130, 120), random(40, 30)));
      for (let i = 0; i < 100; i++) circles.push(new Circle(random(25), random(25)));
      for (let i = 0; i < 600; i++)
        circles.push(new Circle(random(120, 110), random(40, 30), i % 2 === 0 ? 2 : -2, true));
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      circles.forEach(c => c.run());
      requestAnimationFrame(animate);
    };

    createCircles();
    setInterval(() => (load = !load), 3500);
    animate();

    return () => {
      circles = [];
    };
  }, []);

  return (
    <div style={{ background: "black", height: "100vh" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
