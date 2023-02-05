export default function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
