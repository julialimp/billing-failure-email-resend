"use client";

import { useState } from "react";

export function SendEmailButton() {
  const [message, setMessage] = useState("");

  async function handleClick() {
    const response = await fetch("/api/send");

    if (response.ok) {
      setMessage("✅ Email sent successfully!");
    } else {
      setMessage("❌ Failed to send email.");
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] cursor-pointer"
      >
        Send Email
      </button>

      {message && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {message}
        </p>
      )}
    </div>
  );
}