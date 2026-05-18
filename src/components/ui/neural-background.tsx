"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };
    const targetMouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      if (mouse.x === -1000) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Grid properties
    const gridSize = 60;
    
    // Neural nodes
    const nodes: { x: number; y: number; vx: number; vy: number; baseVx: number; baseVy: number }[] = [];
    const numNodes = Math.floor((width * height) / 15000);
    
    for (let i = 0; i < numNodes; i++) {
      const vx = (Math.random() - 0.5) * 0.4;
      const vy = (Math.random() - 0.5) * 0.4;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.15;
      mouse.y += (targetMouse.y - mouse.y) * 0.15;

      const isDark = resolvedTheme === "dark";
      
      const gridColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
      const nodeColor = isDark ? "#3b82f6" : "#2563eb";

      // Draw Focus Spotlight
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
      gradient.addColorStop(0, isDark ? "rgba(59, 130, 246, 0.15)" : "rgba(37, 99, 235, 0.08)");
      gradient.addColorStop(0.5, isDark ? "rgba(59, 130, 246, 0.05)" : "rgba(37, 99, 235, 0.02)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Cursor Ring
      if (mouse.x > -500) {
        // Outer pulsing ring
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 25 + Math.sin(time * 5) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(37, 99, 235, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner solid dot (interpolated)
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.8)" : "rgba(37, 99, 235, 0.6)";
        ctx.fill();

        // Target dot (actual mouse)
        ctx.beginPath();
        ctx.arc(targetMouse.x, targetMouse.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.6)";
        ctx.fill();
      }

      // Draw Grid
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.baseVx *= -1;
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.baseVy *= -1;
        }

        // Mouse interaction: dynamic repulsion and velocity adjustment
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          node.x -= dx * force * 0.02;
          node.y -= dy * force * 0.02;
          
          // Excitement! Nodes speed up near the cursor
          node.vx = node.baseVx + (dx / dist) * force * 0.5;
          node.vy = node.baseVy + (dy / dist) * force * 0.5;
        } else {
          // Gradually return to base velocity
          node.vx += (node.baseVx - node.vx) * 0.05;
          node.vy += (node.baseVy - node.vy) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = dist < 150 ? (isDark ? "#60a5fa" : "#3b82f6") : nodeColor;
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        // Connect to mouse
        const mdx = mouse.x - nodes[i].x;
        const mdy = mouse.y - nodes[i].y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 250) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const opacity = 1 - (mdist / 250);
          ctx.strokeStyle = isDark 
            ? `rgba(96, 165, 250, ${opacity * 0.8})` 
            : `rgba(59, 130, 246, ${opacity * 0.6})`;
          ctx.stroke();
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = 1 - (dist / 150);
            
            // Highlight connections near the mouse
            const avgX = (nodes[i].x + nodes[j].x) / 2;
            const avgY = (nodes[i].y + nodes[j].y) / 2;
            const mouseToEdgeDist = Math.sqrt(Math.pow(mouse.x - avgX, 2) + Math.pow(mouse.y - avgY, 2));
            
            if (mouseToEdgeDist < 200) {
               ctx.strokeStyle = isDark 
                 ? `rgba(96, 165, 250, ${opacity * 0.5})` 
                 : `rgba(59, 130, 246, ${opacity * 0.4})`;
            } else {
               ctx.strokeStyle = isDark 
                 ? `rgba(255, 255, 255, ${opacity * 0.15})` 
                 : `rgba(0, 0, 0, ${opacity * 0.1})`;
            }
            
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);
 // Re-initialize if theme deeply changes, though the inside draw handles class checks

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-10] pointer-events-none transition-opacity duration-700"
    />
  );
}
