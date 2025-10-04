import { makeNotificationBox } from "./notificationBox.js";

// Helper to create a guide zone that shows a message when the player enters
export function addGuideZone(k, map, pos, size, message) {
  const zone = map.add([
    k.pos(pos.x, pos.y),
    k.area({ shape: new k.Rect(k.vec2(0), size.x, size.y) }),
    "guide-zone",
  ]);

  zone.onCollide("player", () => {
    // Show the notification box
    const box = k.add(makeNotificationBox(k, message));
    k.play("notify");
    // Remove the box after 2 seconds
    k.wait(2, () => k.destroy(box));
    // Remove the zone so it only triggers once
    k.destroy(zone);
  });
}