'use client';

import { ArrowLeft, ArrowRight, Home, ZoomIn, ZoomOut } from 'lucide-react';

interface ChartZoomControlsProps {
  zoomIn: () => void;
  zoomOut: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  reset: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

export function ChartZoomControls({
  zoomIn,
  zoomOut,
  moveLeft,
  moveRight,
  reset,
  canZoomIn,
  canZoomOut,
  canMoveLeft,
  canMoveRight,
}: ChartZoomControlsProps) {
  const baseButtonClass =
    'text-muted-foreground hover:text-foreground disabled:text-border disabled:hover:text-border';

  return (
    <div className="flex gap-2">
      <button
        onClick={zoomIn}
        disabled={!canZoomIn}
        title="Приблизить"
        className={baseButtonClass}
      >
        <ZoomIn className="h-4 w-4" />
      </button>
      <button
        onClick={zoomOut}
        disabled={!canZoomOut}
        title="Отдалить"
        className={baseButtonClass}
      >
        <ZoomOut className="h-4 w-4" />
      </button>
      <button
        onClick={moveLeft}
        disabled={!canMoveLeft}
        title="Сдвинуть влево"
        className={baseButtonClass}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        onClick={moveRight}
        disabled={!canMoveRight}
        title="Сдвинуть вправо"
        className={baseButtonClass}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
      <button
        onClick={reset}
        title="Сбросить масштаб"
        className={baseButtonClass}
      >
        <Home className="h-4 w-4" />
      </button>
    </div>
  );
}
