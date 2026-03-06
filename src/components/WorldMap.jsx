import React from 'react';
import './WorldMap.scss';

export default function WorldMap() {
    const totalCells = 55 * 35; // 1925 cells

    return (
        <div className="flex items-center justify-center w-full h-full min-h-[400px]" style={{ fontSize: 'clamp(6px, 1.2vw, 12px)' }}>
            <div className="world-map-container">
                {Array.from({ length: totalCells }).map((_, i) => (
                    <div key={i + 1} className="cell" />
                ))}
            </div>
        </div>
    );
}
