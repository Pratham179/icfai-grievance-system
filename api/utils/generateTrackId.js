export default function generateTrackId() {
  return "ICF-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
}
