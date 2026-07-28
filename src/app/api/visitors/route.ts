import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_DIR = path.join(process.cwd(), "data");
const COUNTER_FILE = path.join(DATA_DIR, "visitors.json");

type CounterState = {
  count: number;
};

async function readCount(): Promise<number> {
  try {
    const raw = await readFile(COUNTER_FILE, "utf8");
    const parsed = JSON.parse(raw) as CounterState;
    return typeof parsed.count === "number" && parsed.count >= 0 ? parsed.count : 0;
  } catch {
    return 0;
  }
}

async function writeCount(count: number): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(COUNTER_FILE, `${JSON.stringify({ count }, null, 2)}\n`, "utf8");
}

export async function GET() {
  const count = await readCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const current = await readCount();
  const count = current + 1;
  await writeCount(count);
  return NextResponse.json({ count });
}
