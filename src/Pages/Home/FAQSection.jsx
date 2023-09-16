import React from "react";
import { Home_Content } from "../../Content/Home_Content";

export default function FAQSection() {
  const faq = Home_Content.FAQ;
  return (
    <section class="bg-white ">
      <div class="container px-6 py-12 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl ">
          {faq.title}
        </h1>

        <div class="mt-8 space-y-8 lg:mt-12">
          <div class="space-y-4">
            {faq.items.map((data, index) => (
              <details
                key={index}
                class="group border-s-4 border-indigo-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 class="text-lg font-medium text-gray-900">
                    {data.title}
                  </h2>

                  <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                  {data.description}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
