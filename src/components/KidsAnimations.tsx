'use client';

import { motion } from 'framer-motion';

// Floating Tooth Component
function FloatingTooth({ delay, left, size }: { delay: number; left: string; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, bottom: '-50px' }}
      animate={{
        y: [0, -800],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, 360],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="white"
        opacity={0.15}
      >
        <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7-.3.5-.5 1.1-.5 1.8 0 1.5 1 2.8 2.4 3.2-.2.4-.2.8-.2 1.3 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.5-.1-.9-.2-1.3 1.4-.4 2.4-1.7 2.4-3.2 0-.7-.2-1.3-.5-1.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
      </svg>
    </motion.div>
  );
}

// Sparkle Component
function Sparkle({ delay, left, top }: { delay: number; left: string; top: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, top }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#f3c852">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </motion.div>
  );
}

// Bubble Component
function Bubble({ delay, left, size }: { delay: number; left: string; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full"
      style={{
        left,
        bottom: '-30px',
        width: size,
        height: size,
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
        border: '1px solid rgba(255,255,255,0.2)',
      }}
      animate={{
        y: [0, -600],
        x: [0, Math.sin(delay) * 50],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// Bouncing Star
function BouncingStar({ left }: { left: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, top: '20%' }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#a8e6cf" opacity={0.4}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </motion.div>
  );
}

// Smiling Tooth Character
function SmilingTooth() {
  return (
    <motion.div
      className="absolute bottom-10 right-10 pointer-events-none hidden lg:block"
      animate={{
        y: [0, -10, 0],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="relative">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="white" opacity={0.2}>
          <path d="M50 10C35 10 25 25 25 40c0 10 5 18 12 24-2 3-3 7-3 12 0 10 7 20 16 20s16-10 16-20c0-5-1-9-3-12 7-6 12-14 12-24C75 25 65 10 50 10z" />
          {/* Eyes */}
          <circle cx="40" cy="40" r="5" fill="#2d5a27" />
          <circle cx="60" cy="40" r="5" fill="#2d5a27" />
          {/* Smile */}
          <path d="M35 55 Q50 70 65 55" stroke="#2d5a27" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function KidsAnimations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Teeth */}
      <FloatingTooth delay={0} left="10%" size={30} />
      <FloatingTooth delay={3} left="25%" size={24} />
      <FloatingTooth delay={6} left="50%" size={28} />
      <FloatingTooth delay={9} left="75%" size={22} />
      <FloatingTooth delay={12} left="90%" size={26} />

      {/* Sparkles */}
      <Sparkle delay={0} left="15%" top="30%" />
      <Sparkle delay={1.5} left="80%" top="20%" />
      <Sparkle delay={3} left="60%" top="60%" />
      <Sparkle delay={4.5} left="30%" top="70%" />
      <Sparkle delay={2} left="85%" top="50%" />

      {/* Bubbles */}
      <Bubble delay={0} left="5%" size={20} />
      <Bubble delay={2} left="20%" size={15} />
      <Bubble delay={4} left="40%" size={25} />
      <Bubble delay={6} left="60%" size={18} />
      <Bubble delay={8} left="80%" size={22} />
      <Bubble delay={10} left="95%" size={16} />

      {/* Bouncing Stars */}
      <BouncingStar left="5%" />
      <BouncingStar left="92%" />

      {/* Smiling Tooth Character */}
      <SmilingTooth />
    </div>
  );
}
