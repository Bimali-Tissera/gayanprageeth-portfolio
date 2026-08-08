(function () {
  "use strict";

  var app = document.getElementById("app");

  // ── Helpers ─────────────────────────────────────────────

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (typeof c === "string") node.appendChild(document.createTextNode(c));
        else if (c) node.appendChild(c);
      });
    }
    return node;
  }

  // ── Update meta tags ───────────────────────────────────

  function renderMeta(meta) {
    if (meta.pageTitle) document.title = meta.pageTitle;
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.pageTitle) ogTitle.setAttribute("content", meta.pageTitle);
  }

  // ── Masthead ───────────────────────────────────────────

  function renderMasthead(masthead) {
    var wrapper = el("section", { className: "masthead" });
    wrapper.style.backgroundImage = "url('" + masthead.backgroundImage + "')";

    var overlay = el("div", { className: "masthead__overlay" }, [
      el("h1", { className: "masthead__title" }, masthead.artistName),
      el("h2", { className: "masthead__subtitle" }, masthead.subtitle)
    ]);
    wrapper.appendChild(overlay);

    // Scroll-down arrow
    var arrow = el("a", { href: "#content", className: "masthead__arrow" });
    arrow.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    wrapper.appendChild(arrow);

    return wrapper;
  }

  // ── Sections ───────────────────────────────────────────

  function renderImage(s) {
    var children = [];
    if (s.src) {
      children.push(el("img", { src: s.src, alt: s.alt || "", loading: "lazy" }));
    }
    if (s.title) {
      children.push(el("p", { className: "image-title" }, s.title));
    }
    if (s.caption) {
      children.push(el("p", { className: "caption" }, s.caption));
    }
    return el("section", { className: "section section--image", id: s.id }, children);
  }

  function renderImagePair(s) {
    var imgs = s.images.map(function (img) {
      var itemChildren = [];
      if (img.src) {
        itemChildren.push(el("img", { src: img.src, alt: img.alt || "", loading: "lazy" }));
      }
      if (img.caption) {
        itemChildren.push(el("p", { className: "caption" }, img.caption));
      }
      return el("div", { className: "image-pair__item" }, itemChildren);
    });
    return el("section", { className: "section section--image-pair", id: s.id }, imgs);
  }

  function renderText(s) {
    var children = [];
    if (s.heading) {
      children.push(el("h3", { className: "section-heading" }, s.heading));
    }
    if (s.paragraphs) {
      s.paragraphs.forEach(function (p) {
        children.push(el("p", null, p));
      });
    }
    if (children.length === 0) return null;
    return el("section", { className: "section section--text", id: s.id }, children);
  }

  function renderImageGrid(s) {
    var children = [];
    if (s.heading) {
      children.push(el("h3", { className: "section-heading" }, s.heading));
    }
    var grid = el("div", { className: "image-grid" });
    if (s.columns) {
      grid.style.gridTemplateColumns = "repeat(" + s.columns + ", 1fr)";
    }
    s.images.forEach(function (img) {
      var itemChildren = [];
      if (img.src) {
        itemChildren.push(el("img", { src: img.src, alt: img.alt || "", loading: "lazy" }));
      }
      if (img.caption) {
        itemChildren.push(el("p", { className: "caption" }, img.caption));
      }
      grid.appendChild(el("div", { className: "image-grid__item" }, itemChildren));
    });
    children.push(grid);
    return el("section", { className: "section section--image-grid", id: s.id }, children);
  }

  function renderSection(s) {
    switch (s.type) {
      case "image":      return renderImage(s);
      case "image-pair": return renderImagePair(s);
      case "image-grid": return renderImageGrid(s);
      case "text":       return renderText(s);
      default:           return null;
    }
  }

  // ── Footer ─────────────────────────────────────────────

  function renderFooter(footer) {
    var children = [];

    children.push(
      el("a", { href: "#top", className: "back-to-top" }, "Back to Top")
    );

    if (footer.creditText) {
      children.push(el("p", { className: "footer-credit" }, footer.creditText));
    }

    return el("footer", { className: "site-footer" }, children);
  }

  // ── Lightbox ──────────────────────────────────────────

  function initLightbox() {
    var allImages = [];
    var imgs = document.querySelectorAll(
      ".section--image img, .section--image-pair img, .image-grid__item img"
    );
    imgs.forEach(function (img) {
      allImages.push(img.getAttribute("src"));
    });

    if (allImages.length === 0) return;

    var currentIndex = 0;

    var overlay = el("div", { className: "lightbox" });
    var closeBtn = el("button", { className: "lightbox__close" });
    closeBtn.innerHTML = "&times;";
    var prevBtn = el("button", { className: "lightbox__arrow lightbox__arrow--prev" });
    prevBtn.innerHTML = "&#8249;";
    var nextBtn = el("button", { className: "lightbox__arrow lightbox__arrow--next" });
    nextBtn.innerHTML = "&#8250;";
    var imgEl = el("img", { className: "lightbox__img" });
    var counter = el("span", { className: "lightbox__counter" });

    overlay.appendChild(closeBtn);
    overlay.appendChild(prevBtn);
    overlay.appendChild(imgEl);
    overlay.appendChild(nextBtn);
    overlay.appendChild(counter);
    document.body.appendChild(overlay);

    function show(index) {
      currentIndex = index;
      imgEl.setAttribute("src", allImages[currentIndex]);
      counter.textContent = (currentIndex + 1) + " / " + allImages.length;
      overlay.classList.add("lightbox--open");
      document.body.style.overflow = "hidden";
    }

    function hide() {
      overlay.classList.remove("lightbox--open");
      document.body.style.overflow = "";
    }

    function prev() {
      show(currentIndex <= 0 ? allImages.length - 1 : currentIndex - 1);
    }

    function next() {
      show(currentIndex >= allImages.length - 1 ? 0 : currentIndex + 1);
    }

    imgs.forEach(function (img, i) {
      img.style.cursor = "pointer";
      img.addEventListener("click", function () { show(i); });
    });

    closeBtn.addEventListener("click", hide);
    prevBtn.addEventListener("click", function (e) { e.stopPropagation(); prev(); });
    nextBtn.addEventListener("click", function (e) { e.stopPropagation(); next(); });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) hide();
    });

    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("lightbox--open")) return;
      if (e.key === "Escape") hide();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    });
  }

  // ── Main Render ────────────────────────────────────────

  function render(data) {
    var fragment = document.createDocumentFragment();

    renderMeta(data.meta);

    if (data.masthead) {
      fragment.appendChild(renderMasthead(data.masthead));
    }

    var content = el("main", { className: "site-content", id: "content" });
    data.sections.forEach(function (s) {
      var node = renderSection(s);
      if (node) content.appendChild(node);
    });
    fragment.appendChild(content);

    fragment.appendChild(renderFooter(data.footer));

    app.appendChild(fragment);
    initLightbox();
  }

  // ── Go ─────────────────────────────────────────────────

  render(siteData);

})();
