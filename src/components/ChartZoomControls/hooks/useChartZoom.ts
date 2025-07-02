import { useState, useMemo } from 'react';

export function useChartZoom<T>(data: T[], initialRange = 3) {
  const [startIndex, setStartIndex] = useState(0);
  const [range, setRange] = useState(initialRange);

  const maxRange = data.length;

  const visibleData = useMemo(
    () => data.slice(startIndex, startIndex + range),
    [data, startIndex, range]
  );

  const canZoomIn = range > 2;
  const canZoomOut = range < maxRange;
  const canMoveLeft = startIndex > 0;
  const canMoveRight = startIndex + range < maxRange;

  const zoomIn = () => {
    if (canZoomIn) setRange(prev => prev - 1);
  };

  const zoomOut = () => {
    if (canZoomOut) setRange(prev => prev + 1);
  };

  const moveLeft = () => {
    if (canMoveLeft) setStartIndex(prev => prev - 1);
  };

  const moveRight = () => {
    if (canMoveRight) setStartIndex(prev => prev + 1);
  };

  const reset = () => {
    setStartIndex(0);
    setRange(initialRange);
  };

  return {
    visibleData,
    zoomIn,
    zoomOut,
    moveLeft,
    moveRight,
    reset,
    canZoomIn,
    canZoomOut,
    canMoveLeft,
    canMoveRight,
  };
}
