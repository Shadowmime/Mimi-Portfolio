import { useState } from "react";
import "./StarBattleMini.css";

const SIZE = 5;

const regionColors = [
  "#161616",
  "#1c1c2b",
  "#1f2b1f",
  "#2b1f2b",
  "#2b241f",
];

// Region map (same size as grid)
const regions = [
  [0, 0, 1, 1, 1],
  [0, 0, 1, 2, 2],
  [3, 3, 3, 2, 2],
  [3, 4, 4, 4, 2],
  [3, 4, 4, 4, 2],
];

export default function StarBattleMini() {
    const [stars, setStars] = useState<boolean[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
    );

    function toggleStar(row: number, col: number) {
        setStars((prev) => {
        const copy = prev.map((r) => [...r]);
        copy[row][col] = !copy[row][col];
        return copy;
        });
    }  

    function hasDiagonalConflict(row: number, col: number) {
        const directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
        ];

        return directions.some(([dr, dc]) => {
            const r = row + dr;
            const c = col + dc;
            return (
                r >= 0 &&
                r < SIZE &&
                c >= 0 &&
                c < SIZE &&
                stars[r][c]
            );
        });
    }

    function hasRowConflict(row: number) {
        return stars[row].filter(Boolean).length > 1;
    }

    function hasColConflict(col: number) {
        return stars.map((r) => r[col]).filter(Boolean).length > 1;
    }

    function hasRegionConflict(regionId: number) {
        let count = 0;
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                if (regions[r][c] === regionId && stars[r][c]) {
                count++;
                }
            }
        }
    return count > 1;
    }

    function resetGrid() {
        setStars(
            Array.from({ length: SIZE }, () =>
            Array(SIZE).fill(false)
            )
        );
    }

    function isSolved() {
        // One star per row
        for (let r = 0; r < SIZE; r++) {
            if (stars[r].filter(Boolean).length !== 1) return false;
        }

        // One star per column
        for (let c = 0; c < SIZE; c++) {
            if (stars.map(r => r[c]).filter(Boolean).length !== 1)
            return false;
        }

        // One star per region
        const regionCount: Record<number, number> = {};
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
            if (stars[r][c]) {
                const region = regions[r][c];
                regionCount[region] = (regionCount[region] || 0) + 1;
                if (regionCount[region] > 1) return false;
            }
            }
        }

        // No diagonal conflicts
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
            if (stars[r][c] && hasDiagonalConflict(r, c)) {
                return false;
            }
            }
        }

        return true;
    }


    return (
    <div className="starbattle-wrapper">
        <div className="grid">
            {stars.map((row, r) =>
                row.map((cell, c) => {
                    const conflict =
                        hasRowConflict(r) ||
                        hasColConflict(c) ||
                        hasRegionConflict(regions[r][c]) ||
                        (cell && hasDiagonalConflict(r, c));

                    return (
                        <button
                            key={`${r}-${c}`}
                            className={`cell ${cell ? "star" : ""} ${
                                conflict ? "conflict" : ""
                            }`}
                            style={{
                                backgroundColor: regionColors[regions[r][c]],
                            }}
                            onClick={() => toggleStar(r, c)}
                        >
                            {cell ? "★" : ""}
                        </button>
                    );
                })
            )}
        </div>

        <div className="undergrid">
            {isSolved() && <p className="success">✅ Puzzle solved!</p>}
            {!isSolved() && (
                <button className="reset-btn" onClick={resetGrid}>
                    Reset
                </button>
            )}
        </div>

        <p className="hint">
            Place one star per row, column, and region. Stars cannot be adjacent.
        </p>
    </div>
    );
}
