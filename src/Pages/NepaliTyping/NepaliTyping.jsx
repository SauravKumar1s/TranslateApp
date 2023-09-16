import React, { useEffect } from "react";
import nepalify from "nepalify";
export default function NepaliTyping() {
  console.log(nepalify.availableLayouts());

  useEffect(() => {
    var textareaEl = nepalify.interceptElementById("unique-textarea-1");
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-8">Nepali Keybord</h1>
      <div className="container mx-auto">
        <h2 className="font-bold text-xl my-3">Type Here:</h2>
        <div className="wrapper lg:max-w-[960px] ">
          <div className="text-input flex-col md:flex-row md:min-w-[700px]  min-w-auto">
            <textarea id="unique-textarea-1" rows="10" cols="50"></textarea>
          </div>
        </div>
        <div className="mt-4">
          <img
            src="/images/romanized-nepali-unicode-keyboard-layout.png"
            alt="layout"
          />
        </div>
      </div>
    </>
  );
}
