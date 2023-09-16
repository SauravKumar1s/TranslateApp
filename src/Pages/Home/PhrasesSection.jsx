import React from "react";
import { SiConvertio } from "react-icons/si";
import { Home_Content } from "../../Content/Home_Content";
import { Fragment } from "react";
export default function PhrasesSection() {
  const phases = Home_Content.Phrases;
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {phases.title}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            {phases.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-full">
            <h1 className="text-xl font-bold mb-3">{phases.table1.title}</h1>
            <div class="overflow-x-auto rounded-lg border border-gray-200 w-full">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    {phases.table1.tableContent.tableHead.map((data, index) => (
                      <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                        key={index}
                      >
                        {data}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  {phases.table1.tableContent.tableData.map((data, index) => (
                    <tr key={index}>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {data.english}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <span>{data.nepali}</span>
                        <br />
                        <span>({data.nepaliEng})</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold mb-3">{phases.table2.title}</h1>
            <div class="overflow-x-auto rounded-lg border border-gray-200 ">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    {phases.table2.tableContent.tableHead.map((data, index) => (
                      <th
                        class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                        key={index}
                      >
                        {data}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  {phases.table2.tableContent.tableData.map((data, index) => (
                    <tr key={index}>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {data.english}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <span>{data.nepali}</span>
                        <br />
                        <span>({data.nepaliEng})</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
