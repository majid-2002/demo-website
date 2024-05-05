"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
    </main>
  );
}
