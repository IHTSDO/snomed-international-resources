/* Inject a post-login notice with a real link under the Sign In button */
(function () {
  const LINK_HREF = "https://forms.gle/jjadra1tdvTneQUm8";
  const LINK_TEXT = "filling out this form";
  const PREFIX = "If you do not have a SNOMED International Account, you can apply for one by ";

  function insert() {
    // Find the container just below the primary button
    const container =
      document.querySelector("#kc-form-buttons") ||
      document.querySelector("form#kc-form-login .form-group") ||
      document.querySelector("form#kc-form-login");

    if (!container || container.dataset.siApplyInjected === "1") return;

    const p = document.createElement("p");
    p.className = "si-apply";
    p.append(document.createTextNode(PREFIX));

    const a = document.createElement("a");
    a.href = LINK_HREF;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = LINK_TEXT;

    p.appendChild(a);
    p.appendChild(document.createTextNode("."));

    // Place after the Sign In button group
    container.appendChild(p);
    container.dataset.siApplyInjected = "1";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insert);
  } else {
    insert();
  }

  // In case the DOM re-renders, try for a few seconds
  const mo = new MutationObserver(insert);
  mo.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(() => mo.disconnect(), 5000);
})();
