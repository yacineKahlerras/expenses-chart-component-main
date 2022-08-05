/**vars*/
const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const chart = document.querySelector(".chart");

/** starter */
const init = () => {
  // getting day index of the week
  let day = new Date().getDay() - 1;
  day = day < 0 ? 6 : day;

  // getting highest price
  let highestPrice = 0;
  data.map((d) => {
    if (d.amount > highestPrice) highestPrice = d.amount;
  });

  // creating chart elements
  chart.innerHTML = data
    .map((d, index) => {
      const columnHeight = Math.floor((d.amount / highestPrice) * 100);
      let columnStyle = `height: ${columnHeight}px;`;
      if (index == day) columnStyle += `background: #b4dfe5;`;
      return `
      <div class="individual-chart">
        <span class="price">$${d.amount}</span>
        <div class="column" style="${columnStyle}"></div>
        <h4 class="day">${d.day}</h4>
      </div>
      `;
    })
    .join("");
};

window.addEventListener("DOMContentLoaded", init);
