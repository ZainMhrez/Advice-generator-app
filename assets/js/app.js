const link = "https://api.adviceslip.com/advice";
const advice = document.querySelector("q");
const adviceId = document.querySelector(".advice-id");
const generateBtn = document.querySelector(".btn");

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await dataFetch.json();
  return data;
}

async function getAdvice() {
  const data = await fetchApi(link);

  adviceId.innerText = data.slip.id;
  advice.innerText = data.slip.advice;
}

getAdvice();

generateBtn.addEventListener("click", getAdvice);
