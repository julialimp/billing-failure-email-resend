"use client";

export function SendEmailButton() {
  async function handleClick() {
    await fetch("/api/send", {
      method: "GET",
    });
  }

  return (
    <button
      onClick={handleClick}
      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    >
      Send Email
    </button>
  );
}