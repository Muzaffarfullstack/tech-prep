import { daysData } from "./data.js";

const container = document.getElementById("main");
const sidebarDays = document.getElementById("sidebar-days");
const sidebar = document.getElementById("sidebar");
const hamburger = document.querySelector(".hamburger");

const localProgress = JSON.parse(localStorage.getItem("progress")) || {};
const localNotes = JSON.parse(localStorage.getItem("notes")) || {};

// Hamburger toggle
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Toast
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}

// Render Day
function renderDay(dayObj) {
  const card = document.createElement("div");

  // Title
  const title = document.createElement("h2");
  title.className = "day-title";
  title.textContent = `Day ${dayObj.day} — ${dayObj.title} (${dayObj.hours})`;
  card.appendChild(title);

  // Accordion
  dayObj.sections.forEach((sec, sIndex) => {
    const acc = document.createElement("div");
    acc.className = "accordion";

    const h = document.createElement("div");
    h.className = "acc-header";
    h.textContent = sec.header;

    const content = document.createElement("div");
    content.className = "acc-content";

    sec.items.forEach((task, tIndex) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.marginBottom = "8px";

      const txt = document.createElement("span");
      txt.textContent = task;

      const btn = document.createElement("button");
      btn.className = "btn-done";
      btn.textContent = "Done";

      if (localProgress[dayObj.day]?.includes(`${sIndex}-${tIndex}`)) {
        btn.disabled = true;
        btn.textContent = "✓ Done";
      }

      btn.onclick = () => {
        btn.disabled = true;
        btn.textContent = "✓ Done";

        if (!localProgress[dayObj.day]) localProgress[dayObj.day] = [];
        localProgress[dayObj.day].push(`${sIndex}-${tIndex}`);
        localStorage.setItem("progress", JSON.stringify(localProgress));

        updateDayProgress(dayObj.day, fill);
        updateGlobalProgress();
      };

      row.appendChild(txt);
      row.appendChild(btn);
      content.appendChild(row);
    });

    h.onclick = () => {
      acc.classList.toggle("acc-open");
      content.style.maxHeight = acc.classList.contains("acc-open")
        ? content.scrollHeight + "px"
        : null;
    };

    acc.appendChild(h);
    acc.appendChild(content);
    card.appendChild(acc);
  });

  // NOTES
  const notesBox = document.createElement("div");
  notesBox.className = "notes-box";

  const textarea = document.createElement("textarea");
  const dayKey = String(dayObj.day);
  const notesArray = Array.isArray(localNotes[dayKey])
    ? localNotes[dayKey]
    : [];
  const notesList = document.createElement("div");
  notesList.className = "notes-list";

  // eski notelarni chiqarish + edit/delete tugmalari
  notesArray.forEach((nt, idx) => {
    const item = createNoteItem(nt, idx, dayKey);
    notesList.appendChild(item);
  });

  // Save yangi note
  const save = document.createElement("button");
  save.className = "btn-save";
  save.textContent = "Save";

  save.onclick = () => {
    const noteText = textarea.value.trim();
    if (!noteText) return;

    if (!Array.isArray(localNotes[dayKey])) localNotes[dayKey] = [];
    localNotes[dayKey].push(noteText);
    localStorage.setItem("notes", JSON.stringify(localNotes));

    const idx = localNotes[dayKey].length - 1;
    const item = createNoteItem(noteText, idx, dayKey);
    notesList.appendChild(item);

    textarea.value = "";
    showToast("Note saved");
  };

  const acts = document.createElement("div");
  acts.className = "notes-actions";
  acts.appendChild(save);

  notesBox.appendChild(textarea);
  notesBox.appendChild(acts);
  notesBox.appendChild(notesList);
  card.appendChild(notesBox);

  // DAY PROGRESS
  const wrap = document.createElement("div");
  wrap.className = "progress-wrapper";

  const label = document.createElement("div");
  label.className = "progress-title";
  label.textContent = "Day Progress";

  const bar = document.createElement("div");
  bar.className = "progress-bar-bg";

  const fill = document.createElement("div");
  fill.className = "progress-bar-fill";

  bar.appendChild(fill);
  wrap.appendChild(label);
  wrap.appendChild(bar);

  card.appendChild(wrap);

  updateDayProgress(dayObj.day, fill);

  return card;
}

// Function to create note item with edit/delete
function createNoteItem(text, idx, dayKey) {
  const item = document.createElement("div");
  item.className = "note-item";

  const span = document.createElement("span");
  span.textContent = text;
  item.appendChild(span);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn-edit";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "btn-delete";

  editBtn.onclick = () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = span.textContent;

    item.innerHTML = "";
    item.appendChild(editInput);

    const saveEditBtn = document.createElement("button");
    saveEditBtn.textContent = "Save";
    saveEditBtn.className = "btn-save-edit";

    saveEditBtn.onclick = () => {
      const newVal = editInput.value.trim();
      if (!newVal) return;

      span.textContent = newVal;
      item.innerHTML = "";
      item.appendChild(span);
      item.appendChild(editBtn);
      item.appendChild(delBtn);

      localNotes[dayKey][idx] = newVal;
      localStorage.setItem("notes", JSON.stringify(localNotes));
      showToast("Note updated");
    };

    item.appendChild(saveEditBtn);
  };

  delBtn.onclick = () => {
    localNotes[dayKey].splice(idx, 1);
    localStorage.setItem("notes", JSON.stringify(localNotes));
    item.remove();
    showToast("Note deleted");
  };

  item.appendChild(editBtn);
  item.appendChild(delBtn);

  return item;
}

// Day % calculation
function updateDayProgress(day, fill) {
  const tasks = daysData
    .find((d) => d.day === day)
    .sections.reduce((a, s) => a + s.items.length, 0);

  const done = localProgress[day]?.length || 0;
  fill.style.width = (done / tasks) * 100 + "%";
}

// GLOBAL PROGRESS
function updateGlobalProgress() {
  const total = daysData.reduce(
    (s, d) => s + d.sections.reduce((x, y) => x + y.items.length, 0),
    0
  );

  let done = 0;
  Object.values(localProgress).forEach((a) => (done += a.length));

  document.querySelector(".sidebar-progress-bar-fill").style.width =
    (done / total) * 100 + "%";
}

// Sidebar Days
daysData.forEach((d, i) => {
  const div = document.createElement("div");
  div.className = "sidebar-day";
  div.textContent = `Day ${d.day}`;

  div.onclick = () => {
    document
      .querySelectorAll(".sidebar-day")
      .forEach((x) => x.classList.remove("active"));

    div.classList.add("active");

    container.innerHTML = "";
    container.appendChild(renderDay(d));

    if (window.innerWidth <= 900) sidebar.classList.remove("open");
  };

  sidebarDays.appendChild(div);
  if (i === 0) div.click();
});

updateGlobalProgress();
