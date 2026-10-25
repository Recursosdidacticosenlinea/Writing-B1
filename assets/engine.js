/* CAA Writing — unit engine (shared by Writing A1 and A2).
   unit.html?u=N renders window.GW_UNITS[N]: five steps, self-checking activities, a plan,
   and a final writing task scored by rubric checks (+ optional grammar check with LanguageTool).
   Progress is saved in localStorage[storagePrefix + "uN"]; the name and prefix come from config.js. */
(function () {
  "use strict";
  const C = window.GW_CONFIG || {};
  const UNITS = window.GW_UNITS || [];
  const num = parseInt(new URLSearchParams(location.search).get("u"), 10) || 1;
  const U = UNITS.find(u => u.n === num) || UNITS[0];
  const SITE = C.siteName || "Writing";
  const KEY = (C.storagePrefix || "gw1:") + "u" + U.n;
  const S = load();
  S.acts = S.acts || {}; S.plan = S.plan || {};

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private mode */ } }

  /* ---------- helpers ---------- */
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const k in attrs || {}) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(kid));
    return el;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function shuffle(arr, seed) {
    const a = arr.slice(); let s = seed || 7;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  /* Compare answers: always tidy spaces, quotes and contractions; lenient mode also ignores case and the final period. */
  function norm(s, strict) {
    s = String(s).replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim().replace(/\s+([,.!?;:])/g, "$1");
    s = s.replace(/\b(do|does|did|is|are|was|were|has|have|had|could|should|would)n't\b/gi, "$1 not")
      .replace(/\bwon't\b/gi, "will not").replace(/\bcan't\b/gi, "cannot").replace(/\bcan not\b/gi, "cannot")
      .replace(/\bI'm\b/g, "I am").replace(/\b(you|we|they)'re\b/gi, "$1 are").replace(/\b(I|you|we|they|he|she|it)'ll\b/gi, "$1 will");
    if (!strict) s = s.toLowerCase().replace(/[.!?]+$/, "").replace(/[áàä]/g, "a").replace(/[éè]/g, "e").replace(/[íì]/g, "i").replace(/[óò]/g, "o").replace(/[úùü]/g, "u");
    return s;
  }
  const words = t => (t.match(/[A-Za-zÀ-ÿ0-9'’-]+/g) || []).length;
  function download(text, name) {
    const a = h("a", { href: URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" })), download: name });
    document.body.append(a); a.click(); a.remove();
  }
  function copyText(text, msg) {
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
      .then(() => { msg.textContent = "Copied."; }, () => { msg.textContent = "Select the text and copy it with Ctrl+C."; });
  }

  /* ---------- progress ---------- */
  const allActs = [];
  U.steps.forEach((st, si) => st.acts.forEach((a, ai) => allActs.push({ id: "s" + si + "a" + ai, a, si })));
  function setScore(id, s, m) { S.acts[id] = { s, m }; save(); refresh(); }
  function stepDone(si) { return allActs.filter(x => x.si === si).every(x => S.acts[x.id]); }
  function refresh() {
    const done = allActs.filter(x => S.acts[x.id]).length;
    const pct = Math.round(done / allActs.length * 100);
    document.getElementById("bar").style.width = pct + "%";
    document.getElementById("progress-text").textContent = done + " of " + allActs.length + " activities";
    U.steps.forEach((st, si) => document.getElementById("tab-" + si).classList.toggle("done", stepDone(si)));
  }

  /* ---------- activity renderers ---------- */
  function feedbackLine(el, s, m) {
    el.className = "result " + (s === m ? "good" : s >= m * 0.6 ? "ok" : "bad");
    el.textContent = (s === m ? "Excellent! " : s >= m * 0.6 ? "Good work. " : "Keep practicing. ") + s + " / " + m + " correct.";
  }

  function renderMC(a, id) {
    const sel = a.items.map(() => null);
    const rows = a.items.map((it, i) => {
      const opts = it.o || a.options;
      const ans = typeof it.a === "number" ? opts[it.a] : it.a;
      const showQ = !/^\d+$/.test(String(it.q));
      const btns = opts.map(o => h("button", { type: "button", class: "opt", "aria-pressed": "false", onclick(e) {
        sel[i] = o; btns.forEach(b => b.setAttribute("aria-pressed", b === e.currentTarget ? "true" : "false"));
        row.classList.remove("right", "wrong"); note.textContent = "";
      } }, o));
      const note = h("div", { class: "why" });
      const row = h("div", { class: "item" }, h("div", { class: "q" }, h("span", { class: "num" }, (i + 1) + "."), showQ ? h("span", { html: esc(it.q).replace(/___/g, '<span class="blank">_____</span>') }) : null),
        h("div", { class: "opts" + (opts.length > 3 || opts.some(o => o.length > 24) ? " wide" : "") }, btns), note);
      row._check = () => {
        const ok = sel[i] === ans;
        row.classList.toggle("right", ok); row.classList.toggle("wrong", !ok);
        note.textContent = ok ? (it.why || "") : sel[i] == null ? "Choose an answer." : "Answer: " + ans + (it.why ? " — " + it.why : "");
        return ok;
      };
      return row;
    });
    return { body: rows, check: () => rows.filter(r => r._check()).length, max: rows.length };
  }

  function renderGap(a, id) {
    const inputs = [];
    const lines = a.items.map(line => {
      const parts = line.split(/(\[\[.*?\]\])/);
      return h("div", { class: "item gapline" }, parts.map(p => {
        const m = p.match(/^\[\[(.*)\]\]$/);
        if (!m) return p;
        const answers = m[1].split("|");
        const inp = h("input", { type: "text", class: "gap", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "answer", size: Math.max(5, answers[0].length + 2) });
        const hint = h("span", { class: "gap-hint" });
        inp.addEventListener("input", () => { inp.classList.remove("right", "wrong"); hint.textContent = ""; });
        inp._check = () => {
          const ok = answers.some(x => norm(x) === norm(inp.value));
          inp.classList.toggle("right", ok); inp.classList.toggle("wrong", !ok);
          hint.textContent = ok ? "" : "→ " + answers[0];
          return ok;
        };
        inputs.push(inp);
        return h("span", { class: "gapwrap" }, inp, hint);
      }));
    });
    const bank = a.bank ? h("div", { class: "bank" }, h("span", { class: "eyebrow" }, "Word box"), a.bank.map(w => h("span", { class: "chip" }, w))) : null;
    return { body: [bank, ...lines], check: () => inputs.filter(i => i._check()).length, max: inputs.length };
  }

  function renderOrder(a, id) {
    // mix until at most one sentence is already in its place
    let order, seed = a.items.length * 13 + U.n;
    do { order = shuffle(a.items.map((t, i) => i), seed++); } while (order.filter((v, i) => v === i).length > 1);
    const list = h("ol", { class: "order" });
    function draw(marks) {
      list.innerHTML = "";
      order.forEach((v, pos) => {
        const li = h("li", { class: marks ? (marks[pos] ? "right" : "wrong") : "" },
          h("span", { class: "txt" }, a.items[v]),
          h("span", { class: "moves" },
            h("button", { type: "button", class: "mv", "aria-label": "Move up", disabled: pos === 0, onclick() { [order[pos - 1], order[pos]] = [order[pos], order[pos - 1]]; draw(); } }, "↑"),
            h("button", { type: "button", class: "mv", "aria-label": "Move down", disabled: pos === order.length - 1, onclick() { [order[pos + 1], order[pos]] = [order[pos], order[pos + 1]]; draw(); } }, "↓")));
        list.append(li);
      });
    }
    draw();
    return { body: [list], check: () => { const marks = order.map((v, i) => v === i); draw(marks); return marks.filter(Boolean).length; }, max: a.items.length };
  }

  function renderFix(a, id) {
    const rows = a.items.map((it, i) => {
      const ta = h("textarea", { class: "fix", rows: 2, spellcheck: "false", "aria-label": "Your sentence" });
      if (a.prefill) ta.value = it.q;
      const note = h("div", { class: "why" });
      ta.addEventListener("input", () => { row.classList.remove("right", "wrong"); note.textContent = ""; });
      const row = h("div", { class: "item" }, h("div", { class: "q" }, h("span", { class: "num" }, (i + 1) + "."), h("span", {}, it.q)), ta, note);
      row._check = () => {
        const ok = it.a.some(x => norm(x, a.strict) === norm(ta.value, a.strict));
        row.classList.toggle("right", ok); row.classList.toggle("wrong", !ok);
        note.textContent = ok ? "" : !ta.value.trim() ? "Write your sentence." : (a.strict ? "Check capital letters and punctuation. " : "") + "Possible answer: " + it.a[0];
        return ok;
      };
      return row;
    });
    return { body: rows, check: () => rows.filter(r => r._check()).length, max: rows.length };
  }

  function activityCard(x) {
    const { a, id } = x;
    if (a.type === "plan") return planCard(x);
    if (a.type === "write") return writeCard(x);
    const r = { mc: renderMC, gap: renderGap, order: renderOrder, fix: renderFix }[a.type](a, id);
    const res = h("div", { class: "result", "aria-live": "polite" });
    const prev = S.acts[id];
    if (prev) { feedbackLine(res, prev.s, prev.m); res.textContent += " (saved — you can try again)"; }
    return h("section", { class: "card act", id: "act-" + id },
      h("div", { class: "act-head" }, h("h3", {}, a.title), h("span", { class: "kind" }, { mc: "Choose", gap: "Complete", order: "Order", fix: "Write" }[a.type])),
      a.instr ? h("p", { class: "instr" }, a.instr) : null,
      h("div", { class: "items" }, r.body),
      h("div", { class: "row" }, h("button", { type: "button", class: "btn primary", onclick() { const s = r.check(); feedbackLine(res, s, r.max); setScore(id, s, r.max); } }, "Check answers"), res));
  }

  /* ---------- plan ---------- */
  function planAct() { for (const x of allActs) if (x.a.type === "plan") return x.a; return null; }
  function planCard(x) {
    const { a, id } = x;
    const msg = h("div", { class: "result", "aria-live": "polite" });
    const fields = a.fields.map(f => {
      if (S.plan[f.id] == null && f.starter) S.plan[f.id] = f.starter;
      const inp = h(f.title ? "input" : "textarea", { id: "plan-" + f.id, class: f.title ? "field-input" : "field-input area", rows: f.title ? null : 2, placeholder: f.ph || "", spellcheck: "true" });
      inp.value = S.plan[f.id] || "";
      inp.addEventListener("input", () => { S.plan[f.id] = inp.value; save(); });
      if (f.note) inp.classList.add("note-input");
      return h("label", { class: "pfield" + (f.note ? " is-note" : ""), for: "plan-" + f.id },
        h("span", { class: "plabel" }, f.label, f.optional ? h("span", { class: "opt-tag" }, "optional") : null, f.note ? h("span", { class: "opt-tag" }, "notes") : null),
        f.hint ? h("span", { class: "phint" }, f.hint) : null, inp);
    });
    function check() {
      const missing = a.fields.filter(f => !f.optional && ((S.plan[f.id] || "").trim().length < 3 || (f.starter && S.plan[f.id].trim() === f.starter.trim())));
      const style = a.fields.filter(f => !f.title && !f.note && (S.plan[f.id] || "").trim().length > 2 && (!/^[A-Z"“¿¡0-9]/.test(S.plan[f.id].trim()) || !/[.!?]["”]?$/.test(S.plan[f.id].trim())));
      if (missing.length) { msg.className = "result bad"; msg.textContent = "Complete these parts: " + missing.map(f => f.label.replace(/\s*\(.*\)$/, "")).join(" · "); return; }
      setScore(id, 1, 1);
      msg.className = "result " + (style.length ? "ok" : "good");
      msg.textContent = style.length ? "Plan saved. Tip: begin each sentence with a capital letter and end it with a period (" + style.map(f => f.label.replace(/\s*\(.*\)$/, "")).join(", ") + ")." : "Great plan! It is saved. Go to step 5 to write your text.";
    }
    if (S.acts[id]) { msg.className = "result good"; msg.textContent = "Your plan is saved."; }
    return h("section", { class: "card act" },
      h("div", { class: "act-head" }, h("h3", {}, a.title), h("span", { class: "kind" }, "Plan")),
      h("p", { class: "instr" }, a.instr),
      vocabBox(),
      h("div", { class: "plan" }, fields),
      h("div", { class: "row" }, h("button", { type: "button", class: "btn primary", onclick: check }, "Save my plan"), msg));
  }
  function vocabBox() {
    return h("details", { class: "vocab" }, h("summary", {}, "Unit vocabulary — use at least two words"),
      h("dl", {}, U.vocab.map(v => [h("dt", {}, v.w), h("dd", {}, v.d)])));
  }

  /* ---------- automatic writing checks ---------- */
  const SMALL = "a an the and but or nor so for of in on at to by as from with into".split(" ");
  const IRREG = "was were went had made took saw found became wrote began bought brought came did got gave knew left met paid put ran said sat sent spent stood taught thought told understood won ate drank drove flew felt kept lost heard built chose fell grew held hit let rode sang slept spoke swam threw woke wore forgot got caught fought sold shook hurt cost broke".split(" ");
  const NOT_PAST = "need feed speed seed shed indeed hundred bread breed"; // words ending in -ed that are not past verbs
  function parse(text) {
    const lines = text.replace(/\r/g, "").split("\n").map(l => l.trim()).filter(Boolean);
    let title = "", body = lines.join(" ");
    let paras = lines;
    if (lines.length > 1 && (words(lines[0]) <= 8 || (words(lines[0]) <= 10 && !/[.!?]$/.test(lines[0])))) { title = lines[0]; paras = lines.slice(1); body = paras.join(" "); }
    // abbreviations (p.m., Dr., e.g.) must not end a sentence
    const split = txt => (txt.replace(/\b(a\.m|p\.m|e\.g|i\.e|U\.S|Mr|Mrs|Ms|Dr|Jr|Sr|vs)\./gi, m => m.replace(/\./g, "\u2024"))
      .match(/[^.!?]+[.!?]*["”]?/g) || []).map(s => s.trim().replace(/\u2024/g, ".")).filter(s => words(s) > 0);
    const sentences = split(body);
    return { title, body, sentences, words: words(body), paras: paras.map(p => ({ text: p, sentences: split(p) })) };
  }
  function countRe(re, txt) { return (txt.match(new RegExp(re, "gi")) || []).length; }
  const CHECKS = {
    title(r, t) {
      if (!t.title) return [false, "Title", "Write a title on the first line, then press Enter and write your paragraph."];
      if (/[.]$/.test(t.title)) return [false, "Title", "Do not put a period after the title."];
      const w = t.title.split(/\s+/);
      const bad = w.filter((x, i) => /^[a-z]/.test(x) && (i === 0 || !SMALL.includes(x.toLowerCase())));
      const badSmall = w.filter((x, i) => i > 0 && SMALL.includes(x.toLowerCase()) && /^[A-Z]/.test(x) && x !== x.toUpperCase());
      if (bad.length) return [false, "Title", "Capitalize the important words in your title: " + bad.join(", ")];
      if (badSmall.length) return [false, "Title", "Small words like " + badSmall.join(", ") + " are not capitalized in a title (only if they are the first word)."];
      return [true, "Title", "“" + t.title + "” is a correct title."];
    },
    words(r, t) { return t.words >= r.min ? [true, "Length", t.words + " words."] : [false, "Length", "You have " + t.words + " words. Write at least " + r.min + "."]; },
    sentences(r, t) { const n = t.sentences.length; return n >= r.min ? [true, "Number of sentences", n + " sentences."] : [false, "Number of sentences", "You have " + n + " sentences. Write at least " + r.min + "."]; },
    complete(r, t) {
      const frag = t.sentences.filter(s => words(s) < 3 || (/^(because|when|after|before|if|as soon as|although)\b/i.test(s) && !/,/.test(s)));
      return frag.length ? [false, "Complete sentences", "Possible fragment: “" + frag[0] + "” Every sentence needs a subject, a verb and a complete idea."] : [true, "Complete sentences", "No fragments found."];
    },
    caps(r, t) {
      const low = t.sentences.filter(s => /^["“(]?[a-z]/.test(s));
      const i = /(^|[^A-Za-z'])i([^A-Za-z']|$)/.test(t.body);
      if (low.length) return [false, "Capital letters", "Begin every sentence with a capital letter: “" + low[0].slice(0, 50) + "…”"];
      if (i) return [false, "Capital letters", "The word I is always a capital letter."];
      return [true, "Capital letters", "Every sentence begins with a capital letter."];
    },
    punct(r, t) {
      const last = t.body.trim();
      if (!/[.!?]["”]?$/.test(last)) return [false, "Punctuation", "End your last sentence with a period."];
      if (/\s[,.]/.test(t.body) || /[,.][A-Za-z]/.test(t.body.replace(/\b(\w\.){2,}|\d[.,]\d|e\.g\.|i\.e\./g, ""))) return [false, "Punctuation", "Check spaces: no space before a comma or period, one space after it."];
      return [true, "Punctuation", "Sentences end with a period."];
    },
    splice(r, t) {
      // "I love my city, it is beautiful." → two sentences joined only with a comma
      const intro = /\b(every time|each time|whether|no matter|when|whenever|after|before|because|if|even if|unless|although|though|even though|whereas|while|since|once|as soon as|as long as|by the time|now that|until|first|second|third|next|then|finally|however|for example|for instance|in addition|also|in my opinion|in fact|today|yesterday|now|later|suddenly|one day|last \w+|in \d{4})\b/i;
      const bad = t.sentences.filter(s => {
        const m = s.match(/^(.*?),\s+(i|he|she|it|we|they|you|there|this|my|his|her|their|our)\s+\w+/i);
        // introductory phrases (In the morning, … / According to …) are not comma splices
        const lead = /^(in|on|at|during|by|for|with|without|according to|as|despite|like|unlike|from|over|within|throughout|thanks to|instead of|because of|due to|in spite of|to|after|before|at the|yes|no|well|so|and|but)\b/i;
        // the words just before the comma: "…, and as a result, they…" is correct
        const seg = m ? m[1].split(",").pop().trim() : "";
        const joined = /^(and|but|so|or|yet|as a result|therefore|however|consequently|in fact|for example|for instance|of course|then|also|moreover|furthermore|in addition|finally|instead|in contrast|on the other hand|similarly|likewise)\b/i;
        if (m && words(m[1]) >= 3 && !intro.test(m[1]) && !lead.test(m[1]) && !joined.test(seg)) return true;
        return words(s) > 35 && !/,/.test(s);
      });
      return bad.length ? [false, "Comma splices and run-ons", "Possible comma splice or run-on: “" + bad[0] + "” Use a period, or join the ideas with and, but, so or because."] : [true, "Comma splices and run-ons", "No comma splices found."];
    },
    agree(r, t) {
      // common subject–verb agreement mistakes in the simple present (not after does/can/let/help…)
      const re = /\b(he|she|it|everyone|everybody|nobody|my (?:mother|father|brother|sister|friend|teacher)) (have|do|go|want|need|like|make|take|work|live|study|say|don't)\b|\b(i|you|we|they|people|children|students) (has|does|goes|wants|needs|likes|makes|takes|works|lives|studies|doesn't)\b|\b(you|we|they|people|children|students) (is|was)\b|\b(i) (are|is)\b|\b(everyone|everybody|nobody) (are|were)\b|(?:^|,\s+|\b(?:and|but|so|because|when|if|although|while)\s+)(?:a|an|the|my|his|her|our|this|that|every|each) (?!children\b|people\b|police\b|men\b|women\b)([a-z]+[^s\W]) (have|don't)\b/gi;
      const aux = /^(does|did|do|can|could|will|would|should|must|might|may|to|let|lets|make|makes|made|help|helps|helped|see|saw|watch|hear|why|how|where|what|when)$/i;
      let bad = null;
      for (const s of t.sentences) {
        re.lastIndex = 0; let m;
        while ((m = re.exec(s))) {
          const prev = (s.slice(0, m.index).match(/([A-Za-z']+)\W*$/) || [])[1] || "";
          if (!aux.test(prev)) { bad = s; break; }
        }
        if (bad) break;
      }
      return bad ? [false, "Subject–verb agreement", "Check the verb: “" + bad + "” (he/she/it + verb-s; I/you/we/they + verb)."] : [true, "Subject–verb agreement", "Subjects and verbs agree."];
    },
    few(r, t) { const n = countRe(r.re, t.body); return n <= r.max ? [true, r.label, r.ok || "Good."] : [false, r.label, r.tip]; },
    firstNot(r, t) { const s = t.sentences[0] || ""; return s && !new RegExp(r.re, "i").test(s) ? [true, r.label, "“" + s + "”"] : [false, r.label, r.tip]; },
    echo(r, t) {
      // the concluding sentence repeats an important word from the topic sentence
      const key = s => (s.toLowerCase().match(/[a-z]{5,}/g) || []).filter(w => !/^(there|their|these|those|which|where|about|because|really|always|other|first|every|would|should|could)$/.test(w));
      const a = key(t.sentences[0] || ""), b = key(t.sentences[t.sentences.length - 1] || "");
      const same = a.filter(w => b.some(x => x.slice(0, 5) === w.slice(0, 5)));
      return t.sentences.length > 2 && same.length ? [true, r.label || "Concluding sentence", "Your conclusion returns to the main idea (" + same[0] + ")."] : [false, r.label || "Concluding sentence", r.tip || "Your concluding sentence should repeat the main idea of your topic sentence with different words."];
    },
    paras(r, t) {
      const n = t.paras.length;
      return n >= r.min ? [true, "Paragraphs", n + " paragraphs."] : [false, "Paragraphs", "I found " + n + " paragraph" + (n === 1 ? "" : "s") + ". Write at least " + r.min + ": introduction, body paragraphs and conclusion. Press Enter between paragraphs."];
    },
    paraLen(r, t) {
      // body paragraphs only (not the introduction or the conclusion)
      const body = t.paras.length > 2 ? t.paras.slice(1, -1) : t.paras;
      const short = body.findIndex(p => p.sentences.length < r.min);
      return short < 0 ? [true, "Developed body paragraphs", "Every body paragraph has at least " + r.min + " sentences."] : [false, "Developed body paragraphs", "Paragraph " + (short + (t.paras.length > 2 ? 2 : 1)) + " is too short. Every body paragraph needs a topic sentence and at least " + (r.min - 1) + " supporting sentences."];
    },
    thesis(r, t) {
      // the thesis is the last sentence of the introduction
      const p = t.paras[0], s = p && t.paras.length > 1 ? p.sentences[p.sentences.length - 1] : "";
      if (!s) return [false, "Thesis statement", "End your introduction with a thesis statement: the main idea of the whole essay."];
      if (/\?$/.test(s) || words(s) < 8) return [false, "Thesis statement", "The last sentence of your introduction should be a clear thesis statement (not a question): “" + s + "”"];
      if (/\b(in this essay|this essay (is|will)|i (will|am going to) (talk|write|tell|explain))\b/i.test(s)) return [false, "Thesis statement", "Don't announce your essay (“In this essay I will…”). State your main idea directly: … has three important effects: …"];
      return new RegExp(r.re, "i").test(s) ? [true, "Thesis statement", "“" + s + "”"] : [false, "Thesis statement", r.tip + " Now: “" + s + "”"];
    },
    lastPara(r, t) {
      const p = t.paras[t.paras.length - 1];
      return p && t.paras.length > 1 && new RegExp(r.re, "i").test(p.text) ? [true, r.label, "Your conclusion is clearly marked."] : [false, r.label, r.tip];
    },
    clauseComma(r, t) {
      const bad = t.sentences.filter(s => /^(when|after|before|as soon as|if|because)\b/i.test(s) && words(s) > 4 && !/,/.test(s));
      return bad.length ? [false, "Comma after a time / if clause", "Use a comma after the clause: “" + bad[0] + "”"] : [true, "Comma after a time / if clause", "Commas with clauses are correct."];
    },
    past(r, t) {
      const toks = t.body.toLowerCase().match(/[a-z']+/g) || [];
      const n = toks.filter(w => (w.length > 3 && /ed$/.test(w) && !NOT_PAST.split(" ").includes(w)) || IRREG.includes(w)).length;
      return n >= r.min ? [true, "Simple past verbs", n + " past verbs found."] : [false, "Simple past verbs", "I found " + n + " past verbs. Use at least " + r.min + " (traveled, went, was…)."];
    },
    has(r, t) { const n = countRe(r.re, t.body); return n >= (r.min || 1) ? [true, r.label, "Found " + n + "."] : [false, r.label, r.tip]; },
    first(r, t) { const s = t.sentences[0] || ""; return new RegExp(r.re, "i").test(s) ? [true, r.label, "“" + s + "”"] : [false, r.label, r.tip]; },
    last(r, t) { const s = t.sentences[t.sentences.length - 1] || ""; return new RegExp(r.re, "i").test(s) ? [true, r.label, "“" + s + "”"] : [false, r.label, r.tip]; },
    notLast(r, t) { const s = t.sentences[t.sentences.length - 1] || ""; return s && !new RegExp(r.re, "i").test(s) ? [true, r.label, "“" + s + "”"] : [false, r.label, r.tip]; },
    vocab(r, t) {
      const used = U.vocab.filter(v => new RegExp("\\b" + v.w.replace(/(e|y)$/, "").replace(/[-\s]/g, "[-\\s]?"), "i").test(t.body)).map(v => v.w);
      return used.length >= r.min ? [true, "Unit vocabulary", "You used: " + used.join(", ") + "."] : [false, "Unit vocabulary", (used.length ? "You used: " + used.join(", ") + ". " : "") + "Use at least " + r.min + " words from the unit: " + U.vocab.map(v => v.w).join(", ") + "."];
    }
  };
  function runRubric(a, text) {
    const t = parse(text);
    const out = a.rubric.map(r => { const [ok, label, msg] = CHECKS[r.type](r, t); return { ok, label, msg, pts: r.pts }; });
    // length is always part of the check, with no extra points
    if (t.words < a.minWords) out.unshift({ ok: false, label: "Length", msg: "You have " + t.words + " words. Write at least " + a.minWords + ".", pts: 0 });
    else if (t.words > a.maxWords) out.unshift({ ok: false, label: "Length", msg: "You have " + t.words + " words. Try to stay under " + a.maxWords + ".", pts: 0 });
    let s = out.reduce((n, r) => n + (r.ok ? r.pts : 0), 0);
    const m = out.reduce((n, r) => n + r.pts, 0);
    // a text that is too short loses points in proportion (60 of 80 words → 75% of the points)
    if (t.words < a.minWords) { s = Math.round(s * t.words / a.minWords * 10) / 10; out[0].msg += " Your points are reduced until you reach the minimum."; }
    return { t, out, s, m };
  }

  /* LanguageTool public API: free, no key, about 20 checks per minute. */
  function grammarCheck(text) {
    const body = new URLSearchParams({ text, language: "en-US" });
    return fetch(C.grammarApi || "https://api.languagetool.org/v2/check", { method: "POST", body })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(j => (j.matches || []).filter(m => !/^(EN_QUOTES|DASH_RULE|WHITESPACE_RULE|PUNCTUATION_PARAGRAPH_END)$/.test(m.rule && m.rule.id))
        .map(m => {
          // "spelling mistakes" in capitalized words are usually names (Agua Azul, Sumidero): show them, but do not count them
          const word = text.substr(m.offset, m.length);
          m.isName = m.rule && m.rule.issueType === "misspelling" && /^[A-ZÁÉÍÓÚÑ]/.test(word) && !/(^|[.!?]\s+)$/.test(text.slice(0, m.offset));
          // style suggestions (redundancy, wordiness…) are shown as tips and do not lower the score
          m.isStyle = m.rule && /^(style|register|locale-violation)$/.test(m.rule.issueType || "");
          return m;
        }));
  }
  function accuracyPoints(errors, w) {
    const per100 = errors * 100 / Math.max(w, 1);
    return per100 <= 1 ? 5 : per100 <= 3 ? 4 : per100 <= 5 ? 3 : per100 <= 8 ? 2 : per100 <= 12 ? 1 : 0;
  }
  function grade() {
    const W = S.write || {};
    if (!W.rubric) return null;
    const r = W.rubric.s / W.rubric.m;
    if (W.acc == null) return Math.round(r * 100) / 10;
    return Math.round((r * 7 + W.acc / 5 * 3) * 10) / 10;
  }

  function writeCard(x) {
    const { a, id } = x;
    S.write = S.write || {};
    const W = S.write;
    const ta = h("textarea", { id: "draft", class: "draft", rows: 14, spellcheck: "true", placeholder: "Title\n\nWrite your paragraph here…" });
    ta.value = W.text || "";
    const counter = h("span", { class: "counter" });
    const results = h("div", { class: "checks", "aria-live": "polite" });
    const gramOut = h("div", { class: "grammar", "aria-live": "polite" });
    const scoreBox = h("div", { class: "scorebox" });
    function count() { const t = parse(ta.value); counter.textContent = t.words + " words · goal " + a.minWords + "–" + a.maxWords; }
    ta.addEventListener("input", () => { W.text = ta.value; save(); count(); });
    count();

    function build() {
      const p = planAct();
      if (!p) return;
      const titleF = p.fields.find(f => f.title);
      const title = titleF ? (S.plan[titleF.id] || "").trim() : "";
      let body = "";
      p.fields.filter(f => !f.title && !f.note).forEach(f => {
        const v = (S.plan[f.id] || "").trim();
        if (!v || (f.starter && f.starter.trim() === v)) return;
        body += body ? (f.newPara ? "\n\n" : " ") + v : v;
      });
      if (!body) { results.innerHTML = '<p class="result bad">Your plan is empty. Go to step 4 first.</p>'; return; }
      if (ta.value.trim() && !confirm("Replace your text with the sentences from your plan?")) return;
      ta.value = (title ? title + "\n\n" : "") + body;
      W.text = ta.value; save(); count(); ta.focus();
    }

    function showScore() {
      const g = grade();
      scoreBox.innerHTML = "";
      if (g == null) return;
      const lvl = g >= 9 ? "Excellent!" : g >= 7 ? "Very good!" : g >= 5 ? "Good start — improve the points in red." : "Keep working — use the tips below.";
      scoreBox.append(h("div", { class: "score " + (g >= 7 ? "good" : g >= 5 ? "ok" : "bad") },
        h("div", { class: "big" }, g.toFixed(1), h("small", {}, " / 10")),
        h("div", {}, h("b", {}, lvl), h("p", { class: "muted" },
          "Task and organization: " + W.rubric.s + " / " + W.rubric.m + " points" +
          (W.acc != null ? " · Grammar and spelling: " + W.acc + " / 5" : " · Run the grammar check to complete your score.")))));
    }

    function check() {
      const R = runRubric(a, ta.value);
      results.innerHTML = "";
      if (R.t.words < 15) { results.append(h("p", { class: "result bad" }, "Write your text first (at least " + a.minWords + " words).")); return; }
      W.rubric = { s: R.s, m: R.m }; W.acc = null; save();
      results.append(h("h4", {}, "Automatic check"), h("ul", { class: "checklist-auto" }, R.out.map(r =>
        h("li", { class: r.ok ? "ok" : "no" }, h("span", { class: "mark", "aria-hidden": "true" }, r.ok ? "✓" : "✗"),
          h("div", {}, h("b", {}, r.label), r.pts ? h("span", { class: "pts" }, (r.ok ? r.pts : 0) + "/" + r.pts) : null, h("div", { class: "msg" }, r.msg))))));
      gramOut.innerHTML = "";
      setScore(id, R.s, R.m);
      showScore();
      if (C.grammarCheck !== false) gram();
    }

    function gram() {
      const text = ta.value.trim();
      if (!text) return;
      gramOut.innerHTML = '<p class="muted">Checking grammar and spelling…</p>';
      grammarCheck(text).then(ms => {
        const t = parse(text);
        const counted = ms.filter(m => !m.isName && !m.isStyle).length;
        W.acc = accuracyPoints(counted, t.words); save();
        gramOut.innerHTML = "";
        gramOut.append(h("h4", {}, "Grammar and spelling"),
          ms.length ? h("p", { class: "muted" }, ms.length + " possible problem" + (ms.length > 1 ? "s" : "") + ". Read each one and decide: is it really a mistake? Correct your text and check again.")
            : h("p", { class: "result good" }, "No grammar or spelling problems found."),
          h("ol", { class: "lt" }, ms.slice(0, 25).map(m => {
            const s = text.slice(Math.max(0, m.offset - 30), m.offset), e = text.substr(m.offset, m.length), after = text.substr(m.offset + m.length, 30);
            return h("li", {}, h("div", { class: "ctx" }, "…" + s, h("mark", {}, e || " "), after + "…"),
              h("div", {}, m.isName ? "Is this a name? If it is a name, it is OK (it does not change your score)." : m.isStyle ? "Style tip (does not change your score): " + m.message : m.message), m.isName ? null : m.replacements && m.replacements.length ? h("div", { class: "sug" }, "Suggestion: ", m.replacements.slice(0, 3).map(r => h("b", {}, r.value)).reduce((acc, el, i) => acc.concat(i ? [" / ", el] : [el]), [])) : null);
          })));
        showScore();
      }).catch(() => {
        gramOut.innerHTML = "";
        gramOut.append(h("p", { class: "note" }, "The grammar check is not available right now (no internet or too many checks). Wait a minute and press “Check my writing” again. Your score uses only the automatic check for now."));
        showScore();
      });
    }

    /* final product */
    const name = h("input", { id: "st-name", class: "field-input", autocomplete: "name" });
    const group = h("input", { id: "st-group", class: "field-input" });
    try { name.value = localStorage.getItem("caa:name") || ""; group.value = localStorage.getItem("caa:group") || ""; } catch (e) { /* ignore */ }
    const msg = h("span", { class: "msg-inline", "aria-live": "polite" });
    const checks = (a.checklist || []).map((c, i) => {
      const cb = h("input", { type: "checkbox", id: "chk-" + i });
      cb.checked = !!(W.self && W.self[i]);
      cb.addEventListener("change", () => { W.self = W.self || {}; W.self[i] = cb.checked; save(); });
      return h("label", { class: "self", for: "chk-" + i }, cb, c);
    });
    function ready() {
      if (!W.rubric) { msg.textContent = "First press “Check my writing”."; return false; }
      if (!name.value.trim() || !group.value.trim()) { msg.textContent = "Write your name and group."; return false; }
      try { localStorage.setItem("caa:name", name.value.trim()); localStorage.setItem("caa:group", group.value.trim()); } catch (e) { /* ignore */ }
      return true;
    }
    function plain() {
      const g = grade();
      return "Name: " + name.value.trim() + "\nGroup: " + group.value.trim() + "\n" + SITE + " — Unit " + U.n + ": " + U.title +
        "\nTask: " + a.title + "\nAutomatic score: " + (g == null ? "-" : g.toFixed(1) + " / 10") + "\n\n" + ta.value.trim() + "\n";
    }
    function printIt() {
      const t = parse(ta.value), g = grade();
      const pr = document.getElementById("printout");
      pr.innerHTML = "";
      pr.append(h("div", { class: "pr-meta" }, name.value.trim() + " · " + group.value.trim() + " · " + SITE + " — Unit " + U.n + " · " + new Date().toLocaleDateString() + (g == null ? "" : " · Score " + g.toFixed(1) + "/10")),
        h("h1", {}, t.title || a.title), t.paras.map(p => h("p", { class: "pr-body" }, p.text)));
      window.print();
    }
    const endpoint = C.writingEndpoint;
    const sendBtn = endpoint ? h("button", { type: "button", class: "btn primary", onclick() {
      if (!ready()) return;
      sendBtn.disabled = true; msg.textContent = "Sending…";
      const g = grade();
      fetch(endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ date: new Date().toISOString(), name: name.value.trim(), group: group.value.trim(), unit: SITE + " Unit " + U.n + ": " + U.title, level: SITE,
          task: a.title + (g == null ? "" : " — score " + g.toFixed(1) + "/10"), words: parse(ta.value).words, text: ta.value.trim() }) })
        .then(() => { msg.textContent = "Sent! Your teacher will receive your text."; W.sent = true; save(); })
        .catch(() => { msg.textContent = "Not sent. Check your internet connection, or download your text."; })
        .finally(() => { sendBtn.disabled = false; });
    } }, "Send to my teacher") : null;

    const card = h("section", { class: "card act write" },
      h("div", { class: "act-head" }, h("h3", {}, a.title), h("span", { class: "kind" }, "Final product")),
      h("p", { class: "instr" }, a.instr),
      h("div", { class: "moves-box" }, h("span", { class: "eyebrow" }, "Your paragraph must include"), h("ol", {}, a.moves.map(m => h("li", {}, m)))),
      vocabBox(),
      h("div", { class: "row" }, h("button", { type: "button", class: "btn", onclick: build }, "Build my first draft from my plan"),
        h("span", { class: "muted small" }, "Then improve it: join sentences, add details, check your verbs.")),
      ta, h("div", { class: "row between" }, counter),
      h("div", { class: "row" }, h("button", { type: "button", class: "btn primary", onclick: check }, "Check my writing")),
      scoreBox, results, gramOut,
      h("p", { class: "note" }, "The automatic score is a guide. Your teacher can give you a different grade. The grammar check sends only your text (not your name) to LanguageTool."));

    const finalCard = h("section", { class: "card act" },
      h("div", { class: "act-head" }, h("h3", {}, "Edit and hand in"), h("span", { class: "kind" }, "Checklist")),
      h("p", { class: "instr" }, "Read your paragraph one more time. Check each point, correct your text and press “Check my writing” again if you change it."),
      h("div", { class: "selfcheck" }, checks),
      h("div", { class: "fields" }, h("label", { class: "pfield", for: "st-name" }, h("span", { class: "plabel" }, "Your name"), name),
        h("label", { class: "pfield", for: "st-group" }, h("span", { class: "plabel" }, "Group"), group)),
      h("div", { class: "row" }, sendBtn,
        h("button", { type: "button", class: endpoint ? "btn" : "btn primary", onclick() { if (!ready()) return; download(plain(), SITE.toLowerCase().replace(/\s+/g, "-") + "-unit-" + U.n + ".txt"); msg.textContent = "Downloaded."; } }, "Download my text"),
        h("button", { type: "button", class: "btn", onclick() { if (!ready()) return; printIt(); } }, "Print / save as PDF"),
        h("button", { type: "button", class: "btn", onclick() { if (!ready()) return; copyText(plain(), msg); } }, "Copy"), msg));

    if (W.rubric) setTimeout(showScore, 0);
    return [card, finalCard];
  }

  /* ---------- page ---------- */
  function render() {
    document.title = "Unit " + U.n + ": " + U.title + " · " + SITE;
    const app = document.getElementById("app");
    const total = U.steps.reduce((n, s) => n + (s.min || 0), 0);
    app.append(
      h("header", { class: "topbar" }, h("div", { class: "wrap" },
        h("a", { class: "back", href: C.homeUrl || "./" }, "← All units"),
        h("div", { class: "unit-name" }, "Unit " + U.n + " · " + U.title),
        h("span", { class: "lvl" }, SITE),
        h("div", { class: "progress" }, h("div", { class: "bar" }, h("span", { id: "bar" })), h("span", { id: "progress-text" })))),
      h("div", { class: "wrap" },
        h("section", { class: "hero" },
          h("div", { class: "eyebrow" }, "Unit " + U.n + " · about " + total + " minutes", U.level ? h("span", { class: "lvl-tag" }, U.level) : null),
          h("h1", {}, U.title),
          h("p", { class: "lead" }, h("b", {}, "Final product: "), U.product + "."),
          h("p", { class: "muted" }, "Can-do: " + U.cando)),
        h("nav", { class: "steps", role: "tablist", "aria-label": "Steps" }, U.steps.map((st, si) =>
          h("button", { type: "button", role: "tab", id: "tab-" + si, class: "step-btn", "aria-selected": "false", "aria-controls": "step-" + si, onclick() { show(si, true); } },
            h("span", { class: "n" }, si + 1), st.title))),
        h("main", {}, U.steps.map((st, si) => h("section", { class: "panel", id: "step-" + si, role: "tabpanel", "aria-labelledby": "tab-" + si, hidden: true },
          h("div", { class: "step-head" },
            h("div", { class: "eyebrow" }, "Step " + (si + 1) + " of " + U.steps.length + (st.min ? " · ≈ " + st.min + " min" : "")),
            h("h2", {}, st.title), h("p", { class: "goal" }, st.goal)),
          st.teach ? h("section", { class: "card teach", html: st.teach }) : null,
          st.model ? h("section", { class: "card model" }, h("div", { class: "eyebrow" }, st.model.label || "Model paragraph"), h("h3", {}, st.model.title), st.model.text.split(/\n\s*\n/).map(p => h("p", {}, p))) : null,
          st.acts.map((a, ai) => activityCard({ a, id: "s" + si + "a" + ai, si })),
          h("div", { class: "row nav-row" },
            si > 0 ? h("button", { type: "button", class: "btn", onclick() { show(si - 1, true); } }, "← Back") : null,
            si < U.steps.length - 1 ? h("button", { type: "button", class: "btn primary", onclick() { show(si + 1, true); } }, "Next step →")
              : h("a", { class: "btn", href: C.homeUrl || "./" }, "Back to all units")))))),
      h("footer", { class: "wrap foot" },
        h("button", { type: "button", class: "linklike", onclick() { if (confirm("Delete all your answers in this unit?")) { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } location.reload(); } } }, "Start this unit again")));
    refresh();
    const first = U.steps.findIndex((s, i) => !stepDone(i));
    show(S.step != null ? S.step : Math.max(0, first), false);
  }
  function show(si, scroll) {
    U.steps.forEach((_, i) => {
      document.getElementById("step-" + i).hidden = i !== si;
      document.getElementById("tab-" + i).setAttribute("aria-selected", i === si ? "true" : "false");
    });
    S.step = si; save();
    if (scroll) document.querySelector(".steps").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  render();
})();
