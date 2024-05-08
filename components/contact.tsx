/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/MDawKbCc0t4
 */
import Link from 'next/link';
import React from 'react';

export function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Contact Us
          </h2>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:gap-12">
            <div className="mx-auto flex w-full items-center justify-center">
              <IconTwitter className="h-6 w-6 mr-2" />
              <Link
                className="underline"
                href="https://twitter.com/primo_data"
                target="_blank"
                rel="noreferrer"
              >
                @Primo_Data
              </Link>
            </div>
            <div className="mx-auto flex w-full items-center justify-center">
              <IconEmail className="h-6 w-6 mr-2" />
              <Link className="underline" href="mailto:max@primodata.org">
                max@primodata.org
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function IconEmail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
