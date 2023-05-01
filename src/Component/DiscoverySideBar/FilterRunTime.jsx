import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterRunTime(props) {
  const MAX_RUNTIME = 200;
  const GAP = 20;
  const sliderRangeRef = useRef(null);
  const [minRuntime, setMinRuntime] = useState(0);
  const [maxRuntime, setMaxRuntime] = useState(200);

  const timeoutRef = useRef (null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    updateMinRangeBar(Number(searchParams.get("minRuntime")) ?? 0);
    updateMaxRangeBar(Number(searchParams.get("maxRuntime")) || 200);
  }, [window.location.search]);

  const updateMinRangeBar = (value) => {
    setMinRuntime(value);
    const leftOffet = (value / MAX_RUNTIME) * 100;
    sliderRangeRef.current.style.left = leftOffet + "%";
  };

  const updateMaxRangeBar = (value) => {
    setMaxRuntime(value);
    const rightOffet = 100 - (value / MAX_RUNTIME) * 100;
    sliderRangeRef.current.style.right = rightOffet + "%";
  };

  const handleDragSliderRange = (e) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (e.target.name === "min-range") {
      updateMinRangeBar(
        maxRuntime - Number(e.target.value) < GAP
          ? maxRuntime - GAP
          : Number(e.target.value)
      );

      timeoutRef.current = setTimeout(() => {
        searchParams.set("minRuntime", e.target.value);
        setSearchParams(searchParams);
      }, 500);
    } else {
      updateMaxRangeBar(
        Number(e.target.value) - minRuntime < GAP
          ? minRuntime + GAP
          : Number(e.target.value)
      );

      timeoutRef.current = setTimeout(() => {
        searchParams.set("maxRuntime", e.target.value);
        setSearchParams(searchParams);
      }, 500);
    }
  };
  return (
    <div className="pr-4 pb-6">
      <h3 className="text-xl dark:text-fontactive mt-8 pb-2">Runtime</h3>
      <div className="dark:text-fontactive flex justify-between px-4 pb-2">
        <span>Min:{minRuntime}</span>
        <span>Max:{maxRuntime}</span>
      </div>
      <div className="relative h-[10px]  bg-dark-darken rounded-md bg-main-dark-bg   ">
        <div
          ref={sliderRangeRef}
          className="absolute top-0.5  h-[10px] bg-link rounded-md"
        ></div>
      </div>
      <div className="relative">
        <input
          className="absolute -top-[5px] left-0 w-full h-[5px] appearance-none [background:none] pointer-events-none tw-slider-range"
          type="range"
          min="0"
          max={MAX_RUNTIME}
          step="10"
          name="min-range"
          value={minRuntime}
          onChange={handleDragSliderRange}
        />
        <input
          className="absolute -top-[5px] left-0 w-full h-[5px] appearance-none [background:none] pointer-events-none tw-slider-range"
          type="range"
          min="0"
          max={MAX_RUNTIME}
          step="10"
          name="max-range"
          value={maxRuntime}
          onChange={handleDragSliderRange}
        />
      </div>
    </div>
  );
}

export default FilterRunTime;
