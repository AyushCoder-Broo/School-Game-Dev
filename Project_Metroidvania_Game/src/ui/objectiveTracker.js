export function showObjective(k, text) {
  // Remove any existing tracker
  k.every("objective-tracker", (obj) => k.destroy(obj));
  k.add([
    k.text(text, { size: 24 }),
    k.color(k.Color.fromHex("#ffe066")),
    k.pos(20, 20),
    k.fixed(),
    "objective-tracker",
  ]);
}