// ---- Shared data helpers ----

const MONTHS = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

const MONTH_NAMES = [
  { num: 1, name: "January" },
  { num: 2, name: "February" },
  { num: 3, name: "March" },
  { num: 4, name: "April" },
  { num: 5, name: "May" },
  { num: 6, name: "June" },
  { num: 7, name: "July" },
  { num: 8, name: "August" },
  { num: 9, name: "September" },
  { num: 10, name: "October" },
  { num: 11, name: "November" },
  { num: 12, name: "December" },
];

function parsePrimaryDate(feastStr) {
  if (!feastStr) return null;

  let mainPart = feastStr.split("(")[0];
  mainPart = mainPart.split("/")[0].trim();
  if (!mainPart) return null;

  const tokens = mainPart.split(/\s+/);
  if (tokens.length < 2) return null;

  const monthName = tokens[0].toLowerCase();
  const month = MONTHS[monthName];
  if (!month) return null;

  const day = parseInt(tokens[1].replace(",", ""), 10);
  if (Number.isNaN(day)) return null;

  return { month, day };
}

function buildCalendars() {
  const calendars = {
    catholic: {},
    orthodox: {},
  };

  SAINTS.forEach((s) => {
    const c = parsePrimaryDate(s.feast_catholic);
    if (c) {
      if (!calendars.catholic[c.month]) calendars.catholic[c.month] = {};
      if (!calendars.catholic[c.month][c.day]) calendars.catholic[c.month][c.day] = [];
      calendars.catholic[c.month][c.day].push(s);
    }

    const o = parsePrimaryDate(s.feast_orthodox);
    if (o) {
      if (!calendars.orthodox[o.month]) calendars.orthodox[o.month] = {};
      if (!calendars.orthodox[o.month][o.day]) calendars.orthodox[o.month][o.day] = [];
      calendars.orthodox[o.month][o.day].push(s);
    }
  });

  return calendars;
}

const CALENDARS = buildCalendars();

// ---- Wheel page ----

function randomSaint() {
  const idx = Math.floor(Math.random() * SAINTS.length);
  return SAINTS[idx];
}

function initWheelPage() {
  const spinButton = document.getElementById("spin-button");
  if (!spinButton) return; // not on this page

  const nameEl = document.getElementById("saint-name");
  const summaryEl = document.getElementById("saint-summary");
  const feastCathEl = document.getElementById("saint-feast-catholic");
  const feastOrthEl = document.getElementById("saint-feast-orthodox");
  const linkEl = document.getElementById("saint-link");

  function showSaint(s) {
    if (!s) return;
    if (nameEl) nameEl.textContent = s.name || "";
    if (summaryEl) summaryEl.textContent = s.summary || "";
    if (feastCathEl) feastCathEl.textContent = s.feast_catholic || "";
    if (feastOrthEl) feastOrthEl.textContent = s.feast_orthodox || "";
    if (linkEl) {
      if (s.article_link) {
        linkEl.href = s.article_link;
        linkEl.style.display = "inline";
      } else {
        linkEl.style.display = "none";
      }
    }
  }

  spinButton.addEventListener("click", () => {
    showSaint(randomSaint());
  });

  // Show one immediately
  showSaint(randomSaint());
}

// ---- Calendar page ----

function renderCalendarView(tradition) {
  const container = document.getElementById("calendar-view");
  if (!container) return;

  container.innerHTML = "";
  const monthsData = CALENDARS[tradition];

  MONTH_NAMES.forEach(({ num, name }) => {
    const daysObj = monthsData[num];
    if (!daysObj) return;

    const monthCard = document.createElement("section");
    monthCard.className = "month-card";

    const h2 = document.createElement("h2");
    h2.textContent = name;
    monthCard.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "month-grid";

    const dayNumbers = Object.keys(daysObj)
      .map((d) => parseInt(d, 10))
      .sort((a, b) => a - b);

    dayNumbers.forEach((day) => {
      const saints = daysObj[day];

      const dayCell = document.createElement("div");
      dayCell.className = "day-cell";

      const dayNumEl = document.createElement("div");
      dayNumEl.className = "day-number";
      dayNumEl.textContent = day.toString().padStart(2, "0");
      dayCell.appendChild(dayNumEl);

      saints.forEach((s) => {
        const saintDiv = document.createElement("div");
        saintDiv.className = "day-saint";

        const nameEl = document.createElement("div");
        nameEl.className = "day-saint-name";
        nameEl.textContent = s.name;
        saintDiv.appendChild(nameEl);

        if (s.summary) {
          const extraEl = document.createElement("div");
          extraEl.className = "day-saint-extra";
          const text = s.summary.length > 80 ? s.summary.slice(0, 80) + "…" : s.summary;
          extraEl.textContent = text;
          saintDiv.appendChild(extraEl);
        }

        dayCell.appendChild(saintDiv);
      });

      grid.appendChild(dayCell);
    });

    monthCard.appendChild(grid);
    container.appendChild(monthCard);
  });
}

function renderListView(tradition) {
  const container = document.getElementById("list-view");
  if (!container) return;

  container.innerHTML = "";
  const monthsData = CALENDARS[tradition];

  MONTH_NAMES.forEach(({ num, name }) => {
    const daysObj = monthsData[num];
    if (!daysObj) return;

    const monthSection = document.createElement("section");
    monthSection.className = "month-list";

    const h2 = document.createElement("h2");
    h2.textContent = name;
    monthSection.appendChild(h2);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    const dayNumbers = Object.keys(daysObj)
      .map((d) => parseInt(d, 10))
      .sort((a, b) => a - b);

    dayNumbers.forEach((day) => {
      const saints = daysObj[day];
      const tr = document.createElement("tr");

      const tdDay = document.createElement("td");
      tdDay.textContent = day.toString().padStart(2, "0");
      tr.appendChild(tdDay);

      const tdSaints = document.createElement("td");

      saints.forEach((s) => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "saint-row";

        const nameSpan = document.createElement("span");
        nameSpan.className = "saint-name";
        nameSpan.textContent = s.name;
        rowDiv.appendChild(nameSpan);

        if (s.summary) {
          const summaryDiv = document.createElement("div");
          summaryDiv.className = "saint-summary";
          summaryDiv.textContent = s.summary;
          rowDiv.appendChild(summaryDiv);
        }

        tdSaints.appendChild(rowDiv);
      });

      tr.appendChild(tdSaints);
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    monthSection.appendChild(table);
    container.appendChild(monthSection);
  });
}

function initCalendarPage() {
  const calendarView = document.getElementById("calendar-view");
  const listView = document.getElementById("list-view");
  if (!calendarView || !listView) return;

  let currentTradition = "orthodox";
  let currentView = "calendar";

  const btnCalendar = document.getElementById("btn-calendar");
  const btnList = document.getElementById("btn-list");
  const btnTradOrth = document.getElementById("btn-trad-orthodox");
  const btnTradCath = document.getElementById("btn-trad-catholic");

  function updateViewButtons() {
    if (btnCalendar && btnList) {
      if (currentView === "calendar") {
        btnCalendar.classList.add("active");
        btnList.classList.remove("active");
      } else {
        btnCalendar.classList.remove("active");
        btnList.classList.add("active");
      }
    }
    if (currentView === "calendar") {
      calendarView.classList.add("active");
      listView.classList.remove("active");
    } else {
      calendarView.classList.remove("active");
      listView.classList.add("active");
    }
  }

  function updateTradButtons() {
    if (btnTradOrth && btnTradCath) {
      if (currentTradition === "orthodox") {
        btnTradOrth.classList.add("active");
        btnTradCath.classList.remove("active");
      } else {
        btnTradOrth.classList.remove("active");
        btnTradCath.classList.add("active");
      }
    }
  }

  function rerender() {
    renderCalendarView(currentTradition);
    renderListView(currentTradition);
    updateViewButtons();
    updateTradButtons();
  }

  if (btnCalendar) {
    btnCalendar.addEventListener("click", () => {
      currentView = "calendar";
      updateViewButtons();
    });
  }

  if (btnList) {
    btnList.addEventListener("click", () => {
      currentView = "list";
      updateViewButtons();
    });
  }

  if (btnTradOrth) {
    btnTradOrth.addEventListener("click", () => {
      currentTradition = "orthodox";
      rerender();
    });
  }

  if (btnTradCath) {
    btnTradCath.addEventListener("click", () => {
      currentTradition = "catholic";
      rerender();
    });
  }

  // initial render
  rerender();
}
