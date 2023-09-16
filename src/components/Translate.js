import React, { useEffect } from "react";
import countries from "../data";

const Translate = () => {
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const exchangeIcon = document.querySelector(".exchange");
    const selectTags = document.querySelectorAll("select");
    const icons = document.querySelectorAll(".row i");
    const translateBtn = document.querySelector("button");

    const uniqueCountries = Object.keys(countries);

    // Function to populate the select tag with unique country options
    const populateSelectTag = (selectTag) => {
      uniqueCountries.forEach((country_code) => {
        let selected =
          selectTag === selectTags[0]
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "ne-NP"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        selectTag.insertAdjacentHTML("beforeend", option);
      });
    };

    // Populate both select tags with unique options
    populateSelectTag(selectTags[0]);
    populateSelectTag(selectTags[1]);

    exchangeIcon.addEventListener("click", () => {
      let tempText = fromText.value;
      let tempLang = selectTags[0].value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTags[0].value = selectTags[1].value;
      selectTags[1].value = tempLang;
    });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTags[0].value;
      let translateTo = selectTags[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach((data) => {
            if (data.id === 0) {
              toText.value = data.translation;
            }
          });
          toText.setAttribute("placeholder", "Translation");
        });
    });

    icons.forEach((icon) => {
      icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
          if (target.id === "from") {
            navigator.clipboard.writeText(fromText.value);
          } else {
            navigator.clipboard.writeText(toText.value);
          }
        } else {
          let utterance;
          if (target.id === "from") {
            utterance = new SpeechSynthesisUtterance(fromText.value);
            utterance.lang = selectTags[0].value;
          } else {
            utterance = new SpeechSynthesisUtterance(toText.value);
            utterance.lang = selectTags[1].value;
          }
          speechSynthesis.speak(utterance);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="wrapper ">
          <div className="text-input flex-col md:flex-row md:min-w[700px] min-w-auto">
            <textarea
              spellCheck="false"
              className="from-text"
              placeholder="Enter text"
            ></textarea>
            <div className="border"></div>
            <textarea
              spellCheck="false"
              readOnly
              disabled
              className="to-text"
              placeholder="Translation"
            ></textarea>
          </div>
          <ul className="controls flex flex-col md:flex-row gap-5 md:gap-0">
            <li className="row from">
              <div className="icons">
                <i id="from" className="fas fa-volume-up"></i>
                <i id="from" className="fas fa-copy"></i>
              </div>
              <select></select>
            </li>
            <li className="exchange">
              <i className="fas fa-exchange-alt">change </i>
            </li>
            <li className="row to">
              <select></select>
              <div className="icons">
                <i id="to" className="fas fa-volume-up"></i>
                <i id="to" className="fas fa-copy"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center rounded-lg">
          <button className="bg-[#3e2890] text-xl w-2/4 py-4 text-white flex text-center justify-center rounded-lg mt-8">
            Translate Text
          </button>
        </div>
      </div>
    </>
  );
};

export default Translate;
