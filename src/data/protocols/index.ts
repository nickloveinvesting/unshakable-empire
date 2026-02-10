import { protectionProtocol } from "./protection";
import { assetsProtocol } from "./assets";
import { incomeProtocol } from "./income";
import { estateProtocol } from "./estate";
import type { DayProtocol } from "@/types/protocol";
import type { PillarSlug } from "@/types/quiz";

export { protectionProtocol } from "./protection";
export { assetsProtocol } from "./assets";
export { incomeProtocol } from "./income";
export { estateProtocol } from "./estate";

export const PROTOCOL_DATA: Record<PillarSlug, DayProtocol[]> = {
  protection: protectionProtocol,
  assets: assetsProtocol,
  income: incomeProtocol,
  estate: estateProtocol,
};

export function getProtocolBySlug(slug: PillarSlug): DayProtocol[] {
  return PROTOCOL_DATA[slug] ?? [];
}

export function getDayProtocol(slug: PillarSlug, dayNumber: number): DayProtocol | undefined {
  const protocol = PROTOCOL_DATA[slug];
  if (!protocol) return undefined;
  return protocol.find((d) => d.day === dayNumber);
}
