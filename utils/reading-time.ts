export default (text: string) => {
  const wpm = 255; // Average adult reading speed (words per minute)
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
