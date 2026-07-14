"use client";

import { useState, useEffect } from "react";

export function EmailToast() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "stellausohh@gmail.com";

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.href && link.href.startsWith("mailto:")) {
        setShow(true);
        setCopied(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-4 py-3 rounded-xl shadow-lg text-sm">
      <span>{email}</span>
      <button
        onClick={handleCopy}
        className="text-xs font-semibold bg-zinc-700 dark:bg-zinc-300 text-zinc-100 dark:text-zinc-900 px-3 py-1 rounded-lg hover:opacity-80 transition-none"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <button
        onClick={() => setShow(false)}
        className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-100 dark:hover:text-zinc-900 transition-none ml-1"
      >
        x
      </button>
    </div>
  );
}
