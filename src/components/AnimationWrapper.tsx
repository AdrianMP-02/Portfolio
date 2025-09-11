'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'rotate-in';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimationWrapper({
  children,
  animation = 'slide-up',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1,
  triggerOnce = true
}: AnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `animate-delay-${Math.round(delay * 1000)}` : '';

  return (
    <div
      ref={elementRef}
      className={`
        ${className}
        ${isVisible ? `${animationClass} ${delayClass}` : 'opacity-0'}
      `}
      style={{
        animationDuration: `${duration}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
}

// Hook personalizado para animaciones de scroll
export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return { isVisible, elementRef };
}

// Componente para animaciones stagger (escalonadas)
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'stagger-container visible' : 'stagger-container'}`}
    >
      {children}
    </div>
  );
}

// Componente para items individuales en stagger
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function StaggerItem({ children, className = '', index = 0 }: StaggerItemProps) {
  return (
    <div
      className={`stagger-item ${className}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {children}
    </div>
  );
}
