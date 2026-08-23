(function () {
  "use strict";

  // Theme toggle (persisted)
  var root = document.documentElement;
  var stored = localStorage.getItem("ils-doku-theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    localStorage.setItem("ils-doku-theme", t);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.setAttribute("aria-label", currentTheme() === "dark" ? "Helles Design aktivieren" : "Dunkles Design aktivieren");
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateThemeIcon();
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    }

    // Mobile nav toggle
    var menuBtn = document.getElementById("menu-toggle");
    var scrim = document.getElementById("sidebar-scrim");
    function closeNav() { document.body.classList.remove("nav-open"); }
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        document.body.classList.toggle("nav-open");
      });
    }
    if (scrim) scrim.addEventListener("click", closeNav);
    document.querySelectorAll(".sidebar .nav-link").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    // Mark active nav link
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".sidebar .nav-link").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  });
})();
