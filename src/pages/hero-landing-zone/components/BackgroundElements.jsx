import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  const floatingElements = [
    { id: 1, size: 'w-2 h-2', delay: 0, duration: 20, x: '10%', y: '20%' },
    { id: 2, size: 'w-1 h-1', delay: 2, duration: 25, x: '80%', y: '10%' },
    { id: 3, size: 'w-3 h-3', delay: 4, duration: 30, x: '70%', y: '60%' },
    { id: 4, size: 'w-1 h-1', delay: 6, duration: 22, x: '20%', y: '80%' },
    { id: 5, size: 'w-2 h-2', delay: 8, duration: 28, x: '90%', y: '40%' },
  ];

  const codeSnippets = [
    { 
      id: 1, 
      code: 'const developer = "Kenneth";', 
      x: '5%', 
      y: '15%',
      delay: 1
    },
    { 
      id: 2, 
      code: 'React.createElement()', 
      x: '85%', 
      y: '25%',
      delay: 3
    },
    { 
      id: 3, 
      code: 'useState(true)', 
      x: '10%', 
      y: '70%',
      delay: 5
    },
    { 
      id: 4, 
      code: 'performance.now()', 
      x: '80%', 
      y: '75%',
      delay: 7
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/5 to-success/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-success/5 to-accent/5 rounded-full blur-3xl"></div>
      {/* Floating Dots */}
      {floatingElements?.map((element) => (
        <motion.div
          key={element?.id}
          className={`absolute ${element?.size} bg-accent/20 rounded-full`}
          style={{ left: element?.x, top: element?.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: element?.duration,
            repeat: Infinity,
            delay: element?.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Floating Code Snippets */}
      {codeSnippets?.map((snippet) => (
        <motion.div
          key={snippet?.id}
          className="absolute text-xs font-mono text-text-secondary/30 bg-muted/50 px-2 py-1 rounded border border-border/30 backdrop-blur-sm"
          style={{ left: snippet?.x, top: snippet?.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [20, 0, -20]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: snippet?.delay,
            ease: "easeInOut"
          }}
        >
          {snippet?.code}
        </motion.div>
      ))}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
    </div>
  );
};

export default BackgroundElements;