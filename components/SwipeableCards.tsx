"use client";

import { useState, useRef } from "react";
import styles from "./SwipeableCards.module.scss";

interface Card {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export default function SwipeableCards() {
  const cardsData: Card[] = [
    {
      id: 1,
      title: "Perbaikan Pegas",
      subtitle: "Spring Repair Expert",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=1000&fit=crop",
    },
    {
      id: 2,
      title: "Penggantian Busa",
      subtitle: "Premium Foam Replacement",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=1000&fit=crop",
    },
    {
      id: 3,
      title: "Re-Upholstery",
      subtitle: "Cover Renewal Service",
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=1000&fit=crop",
    },
    {
      id: 4,
      title: "Kustomisasi Kasur",
      subtitle: "Custom Mattress Design",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=1000&fit=crop",
    },
  ];

  const [cards, setCards] = useState(cardsData);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });

  const handleDragStart = (
    e: React.MouseEvent | React.TouchEvent,
    index: number
  ) => {
    if (index !== 0) return; // Only allow dragging the top card

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    startPosRef.current = { x: clientX, y: clientY };
    setIsDragging(true);
    setDragOffset({ x: 0, y: 0 });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - startPosRef.current.x;
    const deltaY = clientY - startPosRef.current.y;

    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const dragDistance = Math.abs(dragOffset.x);

    // If dragged more than 100px, remove the card
    if (dragDistance > 100) {
      setTimeout(() => {
        setCards((prev) => [...prev.slice(1), prev[0]]);
        setDragOffset({ x: 0, y: 0 });
        setIsDragging(false);
      }, 300);
    } else {
      setDragOffset({ x: 0, y: 0 });
      setIsDragging(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardStack}>
        {cards.map((card, index) => {
          const isTopCard = index === 0;
          const scale = 1 - index * 0.04;
          const translateY = index * 20;
          const opacity = index < 4 ? 1 : 0;

          return (
            <div
              key={card.id}
              className={`${styles.card} ${isTopCard ? styles.cardTop : ""} ${
                isDragging && isTopCard ? styles.cardDragging : ""
              }`}
              style={{
                transform:
                  isTopCard && isDragging
                    ? `translate(${dragOffset.x}px, ${
                        dragOffset.y * 0.3
                      }px) rotate(${dragOffset.x * 0.08}deg)`
                    : `translateY(${translateY}px) scale(${scale})`,
                opacity: opacity,
                zIndex: cards.length - index,
                transition:
                  isDragging && isTopCard
                    ? "none"
                    : "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseDown={(e) => handleDragStart(e, index)}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e, index)}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
