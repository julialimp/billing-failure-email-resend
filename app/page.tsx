import { SendEmailButton } from "@/components/SendEmailButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-9 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Send a Billing Failure Email{" "}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">Check the project in the{" "}
            <a
              href="https://github.com/julialimp/billing-failure-email-resend"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              GitHub repository
            </a>
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Click the button below to send a sample billing failure email using
            React Email and Resend.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <SendEmailButton />
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://resend.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resend.com
          </a>
        </div>
      </main>
    </div>
  );
}
