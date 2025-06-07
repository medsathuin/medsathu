# Rathod-sathu
<html lang="en">
<head>  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Medsathu | NEET Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: rainbow mixture;
      padding: 20px;
      color: #333;
    }
    h1 {
      text-align: center;
      color: #0077cc;
    }
    section {
      background: #fff;
      padding: 20px;
      margin: 20px auto;
      border-radius: 12px;
      max-width: 600px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    textarea, select {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      font-size: 1em;
    }
    label {
      display: block;
      margin-top: 10px;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #0077cc;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover {
      background-color: #005fa3;
    }
  </style>
</head><body>  <h1>📚 Medsathu NEET Dashboard</h1>
  <section>    <h2>📅 Today's Plan</h2>
    <textarea id="dailyPlan" rows="4" placeholder="Write your study plan..."></textarea>
  </section>  <section>   <h2>✅ NEET Subject Checklist</h2>
    <label><input type="checkbox" class="subject" value="bio11"> Biology 11th</label>
    <label><input type="checkbox" class="subject" value="bio12"> Biology 12th</label>
    <label><input type="checkbox" class="subject" value="chem11"> Chemistry 11th</label>
    <label><input type="checkbox" class="subject" value="chem12"> Chemistry 12th</label>
    <label><input type="checkbox" class="subject" value="phy11"> Physics 11th</label>
    <label><input type="checkbox" class="subject" value="phy12"> Physics 12th</label>
  </section>
  <section> <h2>🧠 Mood Tracker</h2>
    <select>  <option>Focused</option>
      <option>Normal</option>
      <option>Tired</option>
      <option>Low</option>
    </select>
  </section>
  <section style="text-align:center;">
    <button onclick="clearData()">Clear All Saved Data</button>
  </section>
  <script>
    // Auto-save daily planner text
    const planner = document.getElementById("dailyPlan");
    planner.value = localStorage.getItem("dailyPlan") || "";
    planner.addEventListener("input", () => {
      localStorage.setItem("dailyPlan", planner.value);
    });
    // Auto-save subject checkbox status
    const subjects = document.querySelectorAll(".subject");
    subjects.forEach((checkbox) => {
      const saved = localStorage.getItem(checkbox.value);
      checkbox.checked = saved === "true";
      checkbox.addEventListener("change", () => {
        localStorage.setItem(checkbox.value, checkbox.checked);
      });
    });
    // Clear everything
    function clearData() {
      if (confirm("Are you sure you want to clear all saved data?")) {
        localStorage.clear();
        location.reload();
      }
    }
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Medsathu | NEET Tracker</title>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Quicksand', sans-serif;
      background: linear-gradient(to right, #fdfbfb, #ebedee, #fceabb);
      padding: 30px;
      margin: 0;
      color: #222;
      min-height: 100vh;
    }

    h1 {
      text-align: center;
      color: #2b4dff;
      font-size: 2.5rem;
      margin-bottom: 20px;
      text-shadow: 1px 1px 2px #aaa;
    }

    section {
      background: #ffffffcc;
      padding: 20px;
      margin: 20px auto;
      border-radius: 16px;
      max-width: 600px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      backdrop-filter: blur(4px);
      transition: transform 0.3s ease;
    }

    section:hover {
      transform: scale(1.01);
    }

    textarea, select {
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    }

    label {
      display: block;
      margin-top: 12px;
      font-size: 1em;
    }

    input[type="checkbox"] {
      margin-right: 8px;
    }

    button {
      margin-top: 20px;
      padding: 12px 24px;
      background: linear-gradient(135deg, #007bff, #00d4ff);
      color: white;
      font-size: 1em;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    button:hover {
      background: linear-gradient(135deg, #0056b3, #009ec3);
    }
  </style>
</head>
<body>
  <h1>🌟 Medsathu NEET Dashboard</h1>

  <section>
    <h2>📅 Today's Plan</h2>
    <textarea id="dailyPlan" rows="4" placeholder="Write your study plan..."></textarea>
  </section>  <section>
    <h2>✅ NEET Subject Checklist</h2>
    <label><input type="checkbox" class="subject" value="bio11">Biology 11th</label>
    <label><input type="checkbox" class="subject" value="bio12">Biology 12th</label>
    <label><input type="checkbox" class="subject" value="chem11">Chemistry 11th</label>
    <label><input type="checkbox" class="subject" value="chem12">Chemistry 12th</label>
    <label><input type="checkbox" class="subject" value="phy11">Physics 11th</label>
    <label><input type="checkbox" class="subject" value="phy12">Physics 12th</label>
  </section>

  <section>    <h2>🧠 Mood Tracker</h2>
    <select>
      <option>Focused</option>
      <option>Normal</option>
      <option>Tired</option>
      <option>Low</option>
    </select>  </section>
  <section style="text-align:center;">
    <button onclick="clearData()">🧹 Clear All Saved Data</button>
  </section>

  <script>
    // Auto-save daily planner text
    const planner = document.getElementById("dailyPlan");
    planner.value = localStorage.getItem("dailyPlan") || "";
    planner.addEventListener("input", () => {
      localStorage.setItem("dailyPlan", planner.value);
    });

    // Auto-save subject checkbox status
    const subjects = document.querySelectorAll(".subject");
    subjects.forEach((checkbox) => {
      const saved = localStorage.getItem(checkbox.value);
      checkbox.checked = saved === "true";
      checkbox.addEventListener("change", () => {
        localStorage.setItem(checkbox.value, checkbox.checked);
      });
    });

    // Clear everything
    function clearData() {
      if (confirm("Are you sure you want to clear all saved data?")) {
        localStorage.clear();
        location.reload();
      }
    }
  </script>
</body>
</html>
