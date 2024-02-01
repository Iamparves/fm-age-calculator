interface AnimateNumberProps {
  start: number;
  end: number;
  duration: number;
  elem: HTMLSpanElement;
}

export const animateNumber = ({
  duration,
  start,
  end,
  elem,
}: AnimateNumberProps) => {
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));

  let count = start;
  const interval = setInterval(() => {
    if (count < end) {
      count += 1;
      elem.textContent = String(count);
    } else {
      clearInterval(interval);
    }
  }, stepTime);
};
