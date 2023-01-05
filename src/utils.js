import { arc } from "d3";

export function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}
export function rad2deg(rad) {
  return (rad * 180) / Math.PI;
}
export function polar(angle, radius, radius2) {
  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
  const y = Math.sin((angle - 90) * (Math.PI / 180)) * (radius2 || radius);
  return {
    x,
    y,
  };
}

export const hsl = (h, s, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`;

export function remap(value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

export function seq(count, step, start) {
  return Array.from({ length: count }).map((_, i) =>
    typeof step === "function" ? step(i + start) : i * step + start
  );
}

export function range(from, to, step) {
  const reversed = to < from;
  if (reversed) {
    [to, from] = [from, to];
  }
  const length = Math.floor((to - from) / step) + 1;
  const output = seq(length, step, from);
  return reversed ? output.reverse() : output;
}

export const snap = (val, step) => Math.round(val / step) * step;

export const translate = (x, y) => `translate(${x} ${y})`;
export const rotate = (deg) => `rotate(${deg})`;
export const scale = (s1, s2) => `scale(${s1} ${s2})`;

export const arcPath = (
  start,
  stop,
  inner = 0,
  outer = 100,
  corner = 0,
  padding = 0
) =>
  arc()
    .padAngle(0)
    .startAngle(deg2rad(start))
    .endAngle(deg2rad(stop))
    .innerRadius(inner)
    .outerRadius(outer)
    .cornerRadius(corner)
    .padAngle(deg2rad(padding))();
