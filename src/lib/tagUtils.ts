const colors = [
  { bg: "bg-red-100/75", text: "text-red-300" },
  { bg: "bg-blue-100/75", text: "text-blue-300" },
  { bg: "bg-green-100/75", text: "text-green-300" },
  { bg: "bg-yellow-100/75", text: "text-yellow-300" },
  { bg: "bg-purple-100/75", text: "text-purple-300" },
  { bg: "bg-pink-100/75", text: "text-pink-300" },
  { bg: "bg-indigo-100/75", text: "text-indigo-300" },
  { bg: "bg-orange-100/75", text: "text-orange-300" },
  { bg: "bg-teal-100/75", text: "text-teal-300" },
  { bg: "bg-cyan-100/75", text: "text-cyan-300" },
];

export function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex];
}
