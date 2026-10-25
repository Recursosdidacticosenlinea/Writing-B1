/* CAA Writing B1 — content of the 8 units.
   Units 1–3: paragraphs (≈30 min). Units 4–8: five-paragraph essays (≈45 min).
   Each unit has 5 steps: 1 Get ready (model), 2–3 Focus, 4 Plan / Outline, 5 Write & check.
   Activity types: mc (options per item or shared `options`), gap ([[answer|alt]]), order, fix (rewrite), plan, write.
   Plan fields: `note: true` = brainstorming only (not in the draft); `newPara: true` = starts a new paragraph.
   Every text here is original. */
window.GW_UNITS = [

/* ───────────────────────── UNIT 1 ───────────────────────── */
{
  n: 1, title: "Paragraphs", focus: "Topic sentences and controlling ideas · fragments · count and non-count nouns",
  product: "A well-developed paragraph about smartphones, friendship, job interviews or a good meal",
  cando: "I can write a paragraph with a clear controlling idea, specific supporting details and a concluding sentence.",
  vocab: [
    { w: "aspect", d: "one part or feature of something" },
    { w: "beneficial", d: "having a good effect" },
    { w: "crucial", d: "extremely important" },
    { w: "generation", d: "people born around the same time" },
    { w: "interact", d: "to communicate or do things with other people" },
    { w: "maintain", d: "to keep something in good condition or at the same level" },
    { w: "significant", d: "important; large enough to notice" },
    { w: "tradition", d: "a custom that people have followed for a long time" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model paragraph. Notice how every detail supports the controlling idea.",
      model: { title: "More Than Food", text: "A good meal is about much more than delicious food. First of all, a meal brings people together. In my family, everyone is busy during the week, but on Sundays we all sit at the same table for at least two hours. Without phones or television, we finally have time to talk about our problems and our plans. In addition, a good meal keeps traditions alive. My grandmother prepares the same chicken mole that her mother taught her, and now she is teaching my cousins and me. Every time we cook it together, we hear stories about our family's past. Finally, sharing food teaches generosity. When we cook, we always prepare extra plates for neighbors who live alone. For my family, a good meal feeds our hearts as much as our bodies." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the controlling idea of the topic sentence?", o: ["Food is delicious.", "A good meal is about much more than food.", "The writer's family is busy."], a: 1 },
            { q: "Which detail supports the idea that meals keep traditions alive?", o: ["The grandmother teaches the family's mole recipe.", "They sit at the table for two hours.", "They do not use phones."], a: 0 },
            { q: "What does the family do for neighbors who live alone?", o: ["They invite them on Sundays.", "They prepare extra plates for them.", "They teach them to cook."], a: 1 },
            { q: "How does the concluding sentence work?", o: ["It adds a new reason.", "It restates the main idea in a memorable way.", "It asks the reader a question."], a: 1 }
          ] },
        { type: "mc", title: "Strong topic sentences", instr: "Which topic sentence has the clearest controlling idea?",
          items: [
            { q: "1", o: ["Smartphones are everywhere.", "Smartphones have changed the way young people make friends.", "I am going to write about smartphones."], a: 1 },
            { q: "2", o: ["A successful job interview depends on three kinds of preparation.", "Job interviews happen in offices.", "Do you like job interviews?"], a: 0 },
            { q: "3", o: ["Friendship.", "My best friend's name is Carla.", "True friendship survives distance, time and disagreements."], a: 2 }
          ] }
      ] },
    { title: "Sentences vs. fragments", min: 6,
      goal: "Find and correct fragments in academic writing.",
      teach: `<p>A <b>fragment</b> is an incomplete sentence. At B1 level, the most common fragments are:</p>
<table class="mini"><tr><th>Fragment ✗</th><th>Problem</th><th>Correction ✓</th></tr>
<tr><td>Because the interview was online.</td><td>dependent clause alone</td><td>I felt relaxed because the interview was online.</td></tr>
<tr><td>Hoping to get the job.</td><td>-ing phrase, no subject or verb</td><td>I practiced for hours, hoping to get the job.</td></tr>
<tr><td>For example, the apps on my phone.</td><td>no verb</td><td>For example, the apps on my phone help me study.</td></tr>
<tr><td>A friend who always listens.</td><td>noun + adjective clause, no main verb</td><td>A friend who always listens is a treasure.</td></tr></table>`,
      acts: [
        { type: "mc", title: "Sentence or fragment?", instr: "Decide if each group of words is a complete sentence.", options: ["Complete sentence", "Fragment"],
          items: [
            { q: "Although many people use their phones all day.", a: "Fragment", why: "Although + clause needs a main clause." },
            { q: "Smartphones allow people to work from almost anywhere.", a: "Complete sentence" },
            { q: "Waiting nervously outside the manager's office.", a: "Fragment" },
            { q: "A meal that brings the whole family together.", a: "Fragment", why: "There is no main verb for “a meal”." },
            { q: "When friends disagree, they should talk calmly.", a: "Complete sentence" },
            { q: "For instance, the questions about my last job.", a: "Fragment" },
            { q: "Most employers check candidates' social media profiles.", a: "Complete sentence" },
            { q: "Since we met in primary school.", a: "Fragment" }
          ] },
        { type: "fix", title: "Correct the fragments", instr: "Join the fragment to the sentence. Write one complete sentence.",
          items: [
            { q: "I arrived early. Because I wanted to make a good impression.", a: ["I arrived early because I wanted to make a good impression.", "Because I wanted to make a good impression, I arrived early."] },
            { q: "My grandmother cooks every Sunday. Hoping that the whole family will come.", a: ["My grandmother cooks every Sunday, hoping that the whole family will come."] },
            { q: "Although we live in different countries. We talk every week.", a: ["Although we live in different countries, we talk every week.", "We talk every week although we live in different countries."] },
            { q: "I deleted three apps. That were wasting my time.", a: ["I deleted three apps that were wasting my time.", "I deleted three apps which were wasting my time."] }
          ] }
      ] },
    { title: "Count and non-count nouns", min: 6,
      goal: "Use count and non-count nouns correctly in your supporting details.",
      teach: `<p><b>Count nouns</b> have a plural: <i>a friend → friends, an app → apps</i>. Use <b>many, a few, a number of</b>.</p>
<p><b>Non-count nouns</b> have no plural and no <i>a/an</i>: <i>advice, information, homework, research, equipment, furniture, traffic, news, money, knowledge, evidence</i>. Use <b>much, a little, an amount of</b>, or a unit: <i>a piece of advice</i>.</p>
<p>✗ <i>many informations</i> → ✓ <i>a lot of information</i> &nbsp; ✗ <i>an advice</i> → ✓ <i>a piece of advice / some advice</i></p>`,
      acts: [
        { type: "mc", title: "Choose the correct form", instr: "Choose the correct option.",
          items: [
            { q: "My older brother gave me some excellent ___ before my interview.", o: ["advices", "advice", "an advice"], a: 1 },
            { q: "The company needs ___ about my previous jobs.", o: ["more information", "more informations", "an information"], a: 0 },
            { q: "There are ___ apps that help you learn languages.", o: ["much", "many", "a little"], a: 1 },
            { q: "I don't have ___ time to cook during the week.", o: ["many", "much", "a few"], a: 1 },
            { q: "We bought new ___ for the living room.", o: ["furnitures", "furniture", "a furniture"], a: 1 },
            { q: "Scientists have done a lot of ___ on friendship and health.", o: ["research", "researches", "a research"], a: 0 },
            { q: "___ of students use their phones to study.", o: ["A large amount", "A large number", "Much"], a: 1 }
          ] },
        { type: "gap", title: "much, many, a few or a little?", instr: "Complete with a word or phrase from the box.", bank: ["much", "many", "a few", "a little", "a piece of", "a number of"],
          items: [
            "How [[many]] friends do you have on social media?",
            "There isn't [[much]] traffic on Sunday mornings.",
            "I only need [[a little]] help with my résumé.",
            "She gave me [[a piece of]] advice that I will never forget.",
            "[[A few|A number of]] of my classmates already have jobs.",
            "[[A number of]] studies show that shared meals improve family relationships."
          ] }
      ] },
    { title: "Brainstorm & plan", min: 6,
      goal: "Choose a topic: smartphones, friendship, job interviews or a good meal.",
      acts: [
        { type: "plan", title: "Brainstorm and plan", instr: "Brainstorm first. Then ask yourself questions (Why? How? For example?) to find specific details for each supporting sentence.",
          fields: [
            { id: "topic", label: "Your topic (notes)", ph: "job interviews", note: true },
            { id: "ideas", label: "Brainstorm: everything you know about it (notes)", ph: "research the company, clothes, practice answers, be on time, nervous, thank-you email", note: true },
            { id: "title", label: "Title", ph: "Three Keys to a Successful Interview", title: true },
            { id: "ts", label: "Topic sentence with a controlling idea", ph: "A successful job interview depends on three kinds of preparation." },
            { id: "s1", label: "Supporting sentence 1", ph: "First of all, candidates should research the company carefully." },
            { id: "d1", label: "Specific details for 1", ph: "For example, they can read the company's website and learn about its most important projects." },
            { id: "s2", label: "Supporting sentence 2", ph: "In addition, it is crucial to practice answers to common questions." },
            { id: "d2", label: "Specific details for 2", ph: "Many people record themselves on their phones, which helps them notice nervous habits." },
            { id: "s3", label: "Supporting sentence 3", ph: "Finally, candidates should prepare a few questions for the interviewer." },
            { id: "d3", label: "Specific details for 3", ph: "A good question shows real interest in the job and makes a significant difference." },
            { id: "conc", label: "Concluding sentence", ph: "With careful preparation, an interview becomes an opportunity rather than a test." }
          ] }
      ] },
    { title: "Write & check", min: 7,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "My paragraph",
          instr: "Write a paragraph of 9–14 sentences. Every supporting sentence must relate to the controlling idea, and every main point needs specific details.",
          moves: ["Title.", "Topic sentence with a clear controlling idea.", "Supporting sentences with specific details and examples.", "No fragments; correct count and non-count nouns.", "Concluding sentence."],
          minWords: 130, maxWords: 230,
          rubric: [
            { type: "title", pts: 1 },
            { type: "firstNot", re: "(going to (write|talk|tell)|this paragraph|in this paragraph|i will (write|talk|tell)|\\?)", pts: 1, label: "Topic sentence is not an announcement", tip: "State your controlling idea directly: A good meal is about much more than food." },
            { type: "complete", pts: 1 },
            { type: "has", re: "\\b(first|second|third|in addition|furthermore|moreover|also|another|finally)\\b", min: 2, pts: 1, label: "Transitions", tip: "Introduce your supporting points with First of all, In addition, Finally." },
            { type: "has", re: "\\b(for example|for instance|such as|in fact|in my (family|experience))\\b", min: 1, pts: 1, label: "Specific details", tip: "Support your points with specific details: For example, …" },
            { type: "few", re: "\\b(informations|advices|homeworks|furnitures|equipments|researches|knowledges|evidences|an advice|an information|many (information|advice|homework|money|furniture|equipment|traffic|news|research|time)|much (people|students|friends|things|apps|jobs|questions))\\b", max: 0, pts: 1, label: "Count and non-count nouns", ok: "Count and non-count nouns look correct.", tip: "Check non-count nouns: advice, information, homework, research (no -s, no a/an; use much, not many)." },
            { type: "echo", pts: 1, label: "Concluding sentence returns to the main idea", tip: "Your last sentence should restate the controlling idea in new words." },
            { type: "splice", pts: 1 },
            { type: "caps", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence has a clear controlling idea.", "Every supporting sentence relates to the controlling idea.", "I gave specific details and examples.", "I have no fragments, and I used count and non-count nouns correctly.", "My concluding sentence restates the main idea."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 2 ───────────────────────── */
{
  n: 2, title: "Features of Good Writing", focus: "Purpose, audience, clarity, unity, coherence · pronoun reference · proofreading",
  product: "A paragraph of advice for a specific audience",
  cando: "I can write a clear, unified and coherent paragraph for a specific reader.",
  vocab: [
    { w: "appreciate", d: "to value something; to be thankful for it" },
    { w: "assignment", d: "a piece of work given by a teacher" },
    { w: "deadline", d: "the time or day by which you must finish something" },
    { w: "overwhelming", d: "too much to deal with easily" },
    { w: "priority", d: "the most important thing to do first" },
    { w: "relevant", d: "connected to the topic" },
    { w: "strategy", d: "a plan to achieve something" },
    { w: "valuable", d: "very useful or important" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model paragraph. Who is the reader? What is the purpose?",
      model: { title: "Advice for First-Year University Students", text: "Starting university can be exciting, but it can also be overwhelming, so new students should follow three simple pieces of advice. First, they should use a planner. Professors rarely remind students about deadlines, so a planner helps students see all their assignments and exams in one place. Second, new students should get to know at least one classmate in every course. If they miss a class, this classmate can share notes with them, and they can also study together before exams. Third, students should visit their professors during office hours. Many students feel nervous about this, but professors usually appreciate students who ask questions, and these conversations often lead to better grades. By following this advice, first-year students can avoid common problems and enjoy their new life at university." },
      acts: [
        { type: "mc", title: "Purpose and audience", instr: "Choose the correct answer.",
          items: [
            { q: "Who is the audience of this paragraph?", o: ["Professors", "New university students", "Parents"], a: 1 },
            { q: "What is the purpose of the paragraph?", o: ["To give advice", "To tell a story", "To compare two universities"], a: 0 },
            { q: "Why is a planner useful, according to the writer?", o: ["Professors rarely remind students about deadlines.", "Planners are cheap.", "Classmates share planners."], a: 0 },
            { q: "Which words make the paragraph coherent (help ideas flow)?", o: ["First, Second, Third", "university, exams", "exciting, nervous"], a: 0 }
          ] },
        { type: "mc", title: "Keep the unity", instr: "Which sentence would break the unity of the model paragraph?",
          items: [
            { q: "Choose one.", o: ["Some universities also offer free tutoring.", "My university has a beautiful old library with a famous painting.", "Students can also use calendar apps as planners."], a: 1 }
          ] }
      ] },
    { title: "Clarity, unity, coherence", min: 6,
      goal: "Write clear sentences and connect them with transitions.",
      teach: `<p><b>Five features of good writing:</b></p><ul>
<li><b>Purpose</b> — know why you write (to inform, to persuade, to give advice, to entertain).</li>
<li><b>Audience</b> — know who will read it and choose your words for that reader.</li>
<li><b>Clarity</b> — use specific, exact words. ✗ <i>It is a good thing.</i> ✓ <i>A planner saves time.</i></li>
<li><b>Unity</b> — every sentence supports the controlling idea.</li>
<li><b>Coherence</b> — ideas follow a logical order, connected with <b>transitions</b>: <i>First, In addition, For example, However, As a result, Finally</i>.</li></ul>`,
      acts: [
        { type: "mc", title: "Which sentence is clearer?", instr: "Choose the clearer, more specific sentence.",
          items: [
            { q: "1", o: ["Exercise is good for many things.", "Thirty minutes of exercise a day reduces stress and improves sleep."], a: 1 },
            { q: "2", o: ["Plan your week every Sunday night so that you know your deadlines.", "Do stuff to be organized."], a: 0 },
            { q: "3", o: ["The city has a lot of nice things to do.", "The city offers free concerts, three large parks and dozens of museums."], a: 1 },
            { q: "4", o: ["Read the instructions twice before you start an assignment.", "Be careful with things."], a: 0 }
          ] },
        { type: "gap", title: "Add transitions", instr: "Complete the paragraph with transitions from the box.", bank: ["First", "For example", "However", "In addition", "As a result", "Finally"],
          items: [
            "Learning to cook is a valuable skill for young adults. [[First]], it saves money.",
            "[[For example|For instance]], a homemade lunch costs half the price of a restaurant meal.",
            "[[In addition|Also]], cooking at home is healthier because you control the ingredients.",
            "[[However]], many young people say they do not have time to cook.",
            "Simple recipes take only twenty minutes. [[As a result|Therefore]], time is not a real excuse.",
            "[[Finally|Lastly]], cooking for friends is a great way to strengthen relationships."
          ] }
      ] },
    { title: "Pronoun reference", min: 6,
      goal: "Make every pronoun clear and keep the same point of view.",
      teach: `<p><b>Clear reference:</b> the reader must know exactly what a pronoun refers to.</p>
<p>✗ <i>When Laura met Sofía, <b>she</b> was nervous.</i> (Who?) → ✓ <i>Laura was nervous when she met Sofía.</i></p>
<p>✗ <i>I studied and exercised, and <b>it</b> helped me.</i> (What?) → ✓ <i>Studying and exercising helped me.</i></p>
<p><b>Consistent reference:</b> don't change the person in the middle of a paragraph.</p>
<p>✗ <i>When <b>students</b> live alone, <b>you</b> have to cook.</i> → ✓ <i>When <b>students</b> live alone, <b>they</b> have to cook.</i></p>`,
      acts: [
        { type: "mc", title: "Clear and consistent?", instr: "Choose the sentence with clear and consistent pronouns.",
          items: [
            { q: "1", o: ["When students start university, you need a planner.", "When students start university, they need a planner."], a: 1 },
            { q: "2", o: ["Carlos told Pedro that he had failed the exam.", "Carlos told Pedro, “I failed the exam.”"], a: 1, why: "In the first sentence, “he” could be Carlos or Pedro." },
            { q: "3", o: ["If a person wants to stay healthy, they should sleep eight hours.", "If a person wants to stay healthy, you should sleep eight hours."], a: 0 },
            { q: "4", o: ["The professor explained the assignment to the students, but it was confusing.", "The professor's explanation of the assignment confused the students."], a: 1, why: "In the first sentence, “it” could be the explanation or the assignment." },
            { q: "5", o: ["Employees should bring their ID cards.", "Employees should bring your ID cards."], a: 0 }
          ] },
        { type: "fix", title: "Make the pronouns consistent", instr: "Rewrite the sentence so the pronouns are consistent.",
          items: [
            { q: "When students live alone, you have to cook for yourself.", a: ["When students live alone, they have to cook for themselves."] },
            { q: "Every employee must bring your ID card.", a: ["Every employee must bring his or her ID card.", "Every employee must bring their ID card.", "All employees must bring their ID cards."] },
            { q: "People who exercise every day feel better because it gives you energy.", a: ["People who exercise every day feel better because it gives them energy.", "People who exercise every day feel better because exercise gives them energy."] }
          ] }
      ] },
    { title: "Plan", min: 6,
      goal: "Write advice for a specific audience. Choose: new students at your school, someone who wants to learn a new skill, or a tourist visiting your city.",
      acts: [
        { type: "plan", title: "Plan your paragraph", instr: "Decide your purpose and audience first. Then plan three pieces of advice with explanations.",
          fields: [
            { id: "aud", label: "Audience: who will read it? (notes)", ph: "tourists visiting Puebla for the first time", note: true },
            { id: "purp", label: "Purpose (notes)", ph: "to give practical advice so they enjoy the city", note: true },
            { id: "title", label: "Title", ph: "How to Enjoy Puebla Like a Local", title: true },
            { id: "ts", label: "Topic sentence", ph: "Visitors to Puebla can enjoy the city like locals if they follow three pieces of advice." },
            { id: "a1", label: "Advice 1 + explanation", ph: "First, they should walk through the historic center early in the morning. At that time, the streets are quiet, and the light on the colorful buildings is perfect for photos." },
            { id: "a2", label: "Advice 2 + explanation", ph: "Second, visitors should try food from small family restaurants. For example, the best chalupas are usually in places without a sign on the door." },
            { id: "a3", label: "Advice 3 + explanation", ph: "Finally, tourists should take a day trip to Cholula. It is only thirty minutes away, and its pyramid is one of the largest in the world." },
            { id: "conc", label: "Concluding sentence", ph: "With these simple strategies, a short visit to Puebla can become an unforgettable experience." }
          ] }
      ] },
    { title: "Write & proofread", min: 7,
      goal: "Write your paragraph, proofread it, and save it.",
      acts: [
        { type: "write", title: "Advice paragraph",
          instr: "Write a paragraph of advice for your audience. Focus on clarity, unity and coherence. Then proofread: read it aloud, read it backward sentence by sentence, and check each pronoun.",
          moves: ["Title.", "Topic sentence that shows your purpose and audience.", "Three pieces of advice, each with an explanation or example.", "Transitions to connect your ideas.", "Concluding sentence."],
          minWords: 130, maxWords: 230,
          rubric: [
            { type: "title", pts: 1 },
            { type: "firstNot", re: "(going to (write|talk|tell)|this paragraph|in this paragraph|i will (write|talk|tell)|\\?)", pts: 1, label: "Topic sentence is not an announcement", tip: "State your main idea directly." },
            { type: "has", re: "\\b(first|second|third|in addition|furthermore|for example|for instance|however|as a result|therefore|finally)\\b", min: 3, pts: 1, label: "Coherence: transitions", tip: "Connect your ideas with at least three transitions (First, For example, However, Finally…)." },
            { type: "few", re: "\\b(stuff|things like that|etc|a lot of things|many things|something like that)\\b", max: 0, pts: 1, label: "Clarity: specific words", ok: "Your words are specific.", tip: "Replace vague words (stuff, things, etc.) with specific information." },
            { type: "has", re: "\\b(should|can|could|must|need to|it is (a good idea|important|crucial|essential))\\b", min: 2, pts: 1, label: "Language for advice", tip: "Give advice with should, can, need to, It is important to…" },
            { type: "echo", pts: 1, label: "Concluding sentence returns to the main idea", tip: "Restate your main idea in the last sentence." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "caps", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["I know my purpose and my audience.", "Every sentence is clear and specific.", "Every sentence supports the controlling idea (unity).", "My ideas are in a logical order with transitions (coherence).", "Every pronoun is clear and I kept the same point of view."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 3 ───────────────────────── */
{
  n: 3, title: "Types of Paragraphs", focus: "Cause-effect, comparison, classification, problem-solution · subject–verb agreement · word forms",
  product: "A paragraph of the type you choose: cause-effect, comparison, classification or problem-solution",
  cando: "I can recognize common paragraph types and write one with the right organization and language.",
  vocab: [
    { w: "category", d: "a group of things with similar features" },
    { w: "consequence", d: "a result, often a bad one" },
    { w: "contrast", d: "a clear difference between two things" },
    { w: "factor", d: "one of the things that causes a situation" },
    { w: "impact", d: "a strong effect" },
    { w: "method", d: "a way of doing something" },
    { w: "similarity", d: "a way in which things are the same" },
    { w: "solution", d: "an answer to a problem" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a cause-effect paragraph. Then identify four types of paragraphs.",
      model: { title: "Learning to Swim at Twenty-Five", text: "Learning to swim at the age of twenty-five changed my life in three surprising ways. The first effect was physical. After only two months of lessons, my back pain disappeared because swimming strengthened muscles that I never used at my desk job. The second effect was emotional. For years, I had felt embarrassed at the beach, so I always invented excuses to stay away from the water. Once I could swim, that shame was replaced by confidence. The most important effect, however, was social. At the pool, I met a group of adults who were also learning, and we now meet every Saturday for breakfast after practice. As a result of one brave decision, I am healthier, more confident, and less lonely than I was a year ago." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "Is the paragraph about causes or effects?", o: ["Causes: why the writer learned to swim", "Effects: how learning to swim changed the writer's life"], a: 1 },
            { q: "Why did the writer's back pain disappear?", o: ["Swimming strengthened unused muscles.", "The writer changed jobs.", "The writer went to the beach."], a: 0 },
            { q: "Which effect does the writer consider the most important?", o: ["Physical", "Emotional", "Social"], a: 2 }
          ] },
        { type: "mc", title: "What type of paragraph is it?", instr: "Read the beginning of each paragraph and identify its type.", options: ["Cause-effect", "Comparison", "Classification", "Problem-solution"],
          items: [
            { q: "Shoppers can be divided into three groups: planners, bargain hunters and impulse buyers.", a: "Classification" },
            { q: "Although Guadalajara and Monterrey are both large cities, their weather and food are very different.", a: "Comparison" },
            { q: "Many neighborhoods have no safe place for children to play, but there are several ways to change this.", a: "Problem-solution" },
            { q: "The new highway has had serious consequences for the small businesses in my town.", a: "Cause-effect" },
            { q: "Unlike my older sister, I prefer quiet weekends at home.", a: "Comparison" },
            { q: "There are four main kinds of learners: visual, auditory, reading and kinesthetic.", a: "Classification" }
          ] }
      ] },
    { title: "Subject–verb agreement", min: 6,
      goal: "Check agreement with long and tricky subjects.",
      teach: `<table class="mini"><tr><th>Tricky subject</th><th>Example</th></tr>
<tr><td>subject + prepositional phrase: find the main noun</td><td>The <b>effects</b> of social media <b>are</b> serious.</td></tr>
<tr><td>one of + plural noun → singular verb</td><td><b>One</b> of my friends <b>lives</b> in Canada.</td></tr>
<tr><td>each / every / everyone → singular</td><td><b>Each</b> category <b>has</b> its own features.</td></tr>
<tr><td>-ing subject (gerund) → singular</td><td><b>Learning</b> new languages <b>takes</b> time.</td></tr>
<tr><td>there is / there are + the noun after it</td><td>There <b>are</b> several solutions.</td></tr>
<tr><td>adjective clauses: the verb agrees with the noun before who/that</td><td>People who <b>exercise</b> sleep better.</td></tr></table>`,
      acts: [
        { type: "mc", title: "Choose the correct verb", instr: "Choose the verb that agrees with the subject.",
          items: [
            { q: "The causes of the problem ___ complex.", o: ["is", "are"], a: 1 },
            { q: "One of the most common solutions ___ to reduce the amount of plastic we use.", o: ["is", "are"], a: 0 },
            { q: "Each type of learner ___ different needs.", o: ["has", "have"], a: 0 },
            { q: "Comparing two cities ___ careful research.", o: ["require", "requires"], a: 1 },
            { q: "There ___ a few important differences between the two plans.", o: ["is", "are"], a: 1 },
            { q: "Students who ___ part-time often manage their time better.", o: ["work", "works"], a: 0 },
            { q: "The number of people who work from home ___ increased.", o: ["has", "have"], a: 0, why: "The subject is “the number” (singular)." },
            { q: "Everyone in the three groups ___ the same test.", o: ["take", "takes"], a: 1 }
          ] }
      ] },
    { title: "Word forms and suffixes", min: 6,
      goal: "Choose the correct noun, verb, adjective or adverb form.",
      teach: `<table class="mini"><tr><th>Noun</th><th>Verb</th><th>Adjective</th><th>Adverb</th></tr>
<tr><td>solu<b>tion</b></td><td>solve</td><td>solv<b>able</b></td><td>—</td></tr>
<tr><td>compar<b>ison</b></td><td>compare</td><td>compar<b>able</b></td><td>compar<b>ably</b></td></tr>
<tr><td>effect</td><td>affect</td><td>effect<b>ive</b></td><td>effective<b>ly</b></td></tr>
<tr><td>classifica<b>tion</b></td><td>classi<b>fy</b></td><td>classifi<b>ed</b></td><td>—</td></tr>
<tr><td>similar<b>ity</b></td><td>—</td><td>simil<b>ar</b></td><td>similar<b>ly</b></td></tr></table>
<p>Noun after <i>a/the/my</i> or a preposition; adjective before a noun or after <i>be</i>; adverb to describe a verb or a whole sentence.</p>`,
      acts: [
        { type: "gap", title: "Write the correct form", instr: "Write the correct form of the word in parentheses.",
          items: [
            "There is a strong [[similarity]] (similar) between the two cities.",
            "The new law has [[affected]] (effect) thousands of drivers.",
            "Recycling is an [[effective]] (effect) way to reduce waste.",
            "Scientists [[classify]] (classification) animals into groups.",
            "We need to find a [[solution]] (solve) quickly.",
            "[[Similarly|Comparably]] (similar), Japanese breakfasts include rice and soup."
          ] },
        { type: "mc", title: "Noun, verb, adjective or adverb?", instr: "Choose the correct word.",
          items: [
            { q: "The ___ between rural and urban schools is significant.", o: ["different", "difference", "differently"], a: 1 },
            { q: "Many families live ___ in small apartments.", o: ["comfortable", "comfort", "comfortably"], a: 2 },
            { q: "Social media can ___ teenagers' sleep.", o: ["effect", "affect", "effective"], a: 1 },
            { q: "This plan is more ___ than the old one.", o: ["economy", "economize", "economical"], a: 2 },
            { q: "Pollution is one of the main ___ of respiratory illnesses.", o: ["causes", "caused", "causing"], a: 0 }
          ] }
      ] },
    { title: "Brainstorm & plan", min: 6,
      goal: "Choose a paragraph type and a topic.",
      acts: [
        { type: "plan", title: "Plan your paragraph", instr: "Choose the type: cause-effect, comparison, classification or problem-solution. Write a purpose statement, then choose your best 2–4 supporting details.",
          fields: [
            { id: "type", label: "Type of paragraph (notes)", ph: "problem-solution", note: true },
            { id: "topic", label: "Your topic (notes)", ph: "too much noise in my neighborhood", note: true },
            { id: "purpose", label: "Purpose statement: In this paragraph, I want to … (notes)", ph: "explain two solutions to the noise problem in my neighborhood", note: true },
            { id: "title", label: "Title", ph: "A Quieter Neighborhood", title: true },
            { id: "ts", label: "Topic sentence with a controlling idea", ph: "The noise in my neighborhood has become a serious problem, but neighbors can solve it in two simple ways." },
            { id: "d1", label: "Supporting detail 1", ph: "The main factor is the number of parties that continue after midnight on weekdays." },
            { id: "d2", label: "Supporting detail 2", ph: "First, neighbors can create an agreement with clear quiet hours, which everyone signs." },
            { id: "d3", label: "Supporting detail 3", ph: "In addition, a group chat allows neighbors to report problems politely before they become conflicts." },
            { id: "d4", label: "Supporting detail 4 (optional)", ph: "As a result, people can communicate without calling the police.", optional: true },
            { id: "conc", label: "Concluding sentence", ph: "If neighbors work together, the neighborhood can be a peaceful place again." }
          ] }
      ] },
    { title: "Write & check", min: 7,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "My paragraph",
          instr: "Write the paragraph you planned. Use the organization and the language of your paragraph type.",
          moves: ["Title.", "Topic sentence that shows the type of paragraph.", "2–4 supporting details with explanations.", "Language for your type: because / as a result · similarly / in contrast · types / categories · problem / solution.", "Concluding sentence."],
          minWords: 130, maxWords: 230,
          rubric: [
            { type: "title", pts: 1 },
            { type: "firstNot", re: "(going to (write|talk|tell)|this paragraph|in this paragraph|i will (write|talk|tell)|\\?)", pts: 1, label: "Topic sentence is not an announcement", tip: "State your controlling idea directly." },
            { type: "has", re: "\\b(because|as a result|therefore|consequently|causes?|effects?|leads? to|similar\\w*|both|in contrast|whereas|unlike|however|types?|kinds?|categor\\w+|groups?|problems?|solutions?|solve)\\b", min: 3, pts: 1, label: "Language for your paragraph type", tip: "Use the language of your type: because / as a result, similarly / in contrast, types / categories, problem / solution." },
            { type: "has", re: "\\b(first|second|third|in addition|furthermore|moreover|another|finally|for example|for instance)\\b", min: 2, pts: 1, label: "Transitions", tip: "Use transitions to connect your details." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "echo", pts: 1, label: "Concluding sentence returns to the main idea", tip: "Restate your main idea in the last sentence." },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence shows the type of paragraph and has a controlling idea.", "My details follow the organization of my paragraph type.", "I used the language of my paragraph type.", "Subjects and verbs agree, even with long subjects.", "I checked word forms (solve / solution, effect / affect)."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 4 ───────────────────────── */
{
  n: 4, title: "Classification Essays", focus: "From paragraph to essay · the introductory paragraph · subject adjective clauses",
  product: "A five-paragraph classification essay (types of friends, shoppers, travelers, teachers…)",
  cando: "I can organize a topic into clear categories and write a five-paragraph classification essay.",
  vocab: [
    { w: "approach", d: "a way of dealing with something" },
    { w: "characteristic", d: "a typical quality or feature" },
    { w: "classify", d: "to put things into groups" },
    { w: "distinct", d: "clearly different" },
    { w: "individual", d: "one person, considered separately" },
    { w: "preference", d: "something you like more than other things" },
    { w: "tend to", d: "to usually do something" },
    { w: "typical", d: "having the usual features of a group" }
  ],
  steps: [
    { title: "Get ready", min: 6,
      goal: "Read a model classification essay.",
      model: { title: "Three Types of Students", label: "Model essay", text: "Walk into any classroom on the first day of the semester, and you will see thirty different personalities. However, if you watch how students prepare for an exam, you will notice that most of them follow one of three distinct approaches. Based on how they study, students can be classified as planners, social learners, or last-minute workers.\n\nThe first group is the planners, who organize their work weeks before an exam. These students tend to use color-coded calendars, and they divide every topic into small, manageable tasks. A planner who has an exam on Friday usually finishes reviewing on Wednesday. As a result, planners rarely feel stressed, although they sometimes worry too much about details.\n\nSocial learners make up the second group. These students learn best when they explain ideas to other people. They organize study groups, record voice messages for their classmates, and turn difficult concepts into games. For a social learner, a library that requires silence is the worst possible place to study.\n\nThe third type of student is the last-minute worker. Students who belong to this group need the pressure of a deadline to concentrate. They often stay awake the night before an exam and drink large amounts of coffee. Surprisingly, some of them get good grades, but their approach is risky and exhausting.\n\nIn conclusion, most students are planners, social learners, or last-minute workers. Each approach has its own characteristics, advantages, and risks. Knowing which type you are is the first step toward choosing a study strategy that really works for you." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the basis (principle) of the classification?", o: ["Students' personalities", "How students study for exams", "Students' grades"], a: 1 },
            { q: "Which group studies best with other people?", o: ["Planners", "Social learners", "Last-minute workers"], a: 1 },
            { q: "What is a disadvantage of the planners' approach?", o: ["They sometimes worry too much about details.", "They feel stressed all the time.", "They study at night."], a: 0 },
            { q: "What does the conclusion add at the end?", o: ["A fourth group", "Advice for the reader", "A new example"], a: 1 }
          ] },
        { type: "mc", title: "The parts of the essay", instr: "What is each sentence?", options: ["Hook", "Thesis statement", "Topic sentence of a body paragraph", "Restated thesis"],
          items: [
            { q: "Walk into any classroom on the first day of the semester, and you will see thirty different personalities.", a: "Hook" },
            { q: "Based on how they study, students can be classified as planners, social learners, or last-minute workers.", a: "Thesis statement" },
            { q: "Social learners make up the second group.", a: "Topic sentence of a body paragraph" },
            { q: "In conclusion, most students are planners, social learners, or last-minute workers.", a: "Restated thesis" }
          ] }
      ] },
    { title: "Introductions and categories", min: 8,
      goal: "Write an introduction that moves from general to specific, and choose clear categories.",
      teach: `<p>A paragraph has a topic sentence; an <b>essay</b> has a <b>thesis statement</b>, and each body paragraph develops one part of it.</p>
<p><b>Introductory paragraph</b> = <b>hook</b> → general information → more specific information → <b>thesis</b> (last sentence). Think of an upside-down triangle.</p>
<p><b>Classification:</b> choose <b>one principle</b> (basis) and make categories that <b>do not overlap</b>.</p>
<p>Principle: <i>how people travel</i> → backpackers, luxury travelers, business travelers. ✗ <i>travelers to Europe</i> (a different principle: destination).</p>
<p>Useful language: <i>can be classified / divided into, the first type / group / kind, falls into, belongs to</i>.</p>`,
      acts: [
        { type: "mc", title: "Which category does not belong?", instr: "One category uses a different principle. Find it.",
          items: [
            { q: "Types of shoppers (by how they decide): planners, bargain hunters, impulse buyers, …", o: ["shoppers who live in Mexico City", "brand-loyal shoppers"], a: 0 },
            { q: "Types of friends (by how long they stay in your life): childhood friends, school friends, …", o: ["friends who play soccer", "work friends"], a: 0 },
            { q: "Kinds of movies (by genre): comedies, horror films, documentaries, …", o: ["long movies", "science fiction"], a: 0 },
            { q: "Types of teachers (by teaching style): lecturers, coaches, entertainers, …", o: ["facilitators", "teachers from Puebla"], a: 1 }
          ] },
        { type: "mc", title: "Choose the best thesis statement", instr: "Which is the best thesis for a classification essay?",
          items: [
            { q: "1", o: ["Travelers are interesting people.", "Based on their budget and style, travelers can be divided into backpackers, comfort seekers, and luxury travelers.", "I like traveling to Oaxaca."], a: 1 },
            { q: "2", o: ["Friends can be classified into three groups according to how long they stay in our lives: lifelong friends, friends for a stage, and friends for a moment.", "Friends are important.", "This essay is about friends."], a: 0 },
            { q: "3", o: ["There are many shoppers.", "Do you like shopping?", "When they buy clothes, most people are planners, bargain hunters, or impulse buyers."], a: 2 }
          ] }
      ] },
    { title: "Subject adjective clauses", min: 8,
      goal: "Describe each category with subject adjective clauses.",
      teach: `<p>A <b>subject adjective clause</b> describes a noun; the relative pronoun is the <b>subject</b> of the clause:</p>
<p><i>Planners are students. They organize their work early.</i> → <i>Planners are students <b>who organize</b> their work early.</i></p>
<p><b>who</b> / <b>that</b> for people · <b>which</b> / <b>that</b> for things. The verb agrees with the noun before the pronoun: <i>a student who <b>studies</b> / students who <b>study</b></i>.</p>
<p><b>Commas:</b> no commas when the clause identifies the noun (<i>Students who study early…</i>). Use commas when it adds extra information about a specific noun (<i>My brother, who is a planner, …</i>). Never use <i>that</i> after a comma.</p>`,
      acts: [
        { type: "fix", title: "Combine with an adjective clause", instr: "Combine the sentences with who, which or that.",
          items: [
            { q: "Bargain hunters are shoppers. They always compare prices.", a: ["Bargain hunters are shoppers who always compare prices.", "Bargain hunters are shoppers that always compare prices."] },
            { q: "Backpackers usually stay in hostels. Hostels are cheap and social.", a: ["Backpackers usually stay in hostels, which are cheap and social.", "Backpackers usually stay in hostels that are cheap and social.", "Backpackers usually stay in hostels which are cheap and social."] },
            { q: "My aunt is a luxury traveler. She only flies first class.", a: ["My aunt, who only flies first class, is a luxury traveler.", "My aunt is a luxury traveler who only flies first class.", "My aunt is a luxury traveler that only flies first class."] },
            { q: "A movie can make you cry and laugh. That movie is a comedy-drama.", a: ["A movie that can make you cry and laugh is a comedy-drama.", "A movie which can make you cry and laugh is a comedy-drama."] }
          ] },
        { type: "mc", title: "Correct adjective clause?", instr: "Choose the correct sentence.",
          items: [
            { q: "1", o: ["Students who studies at night often feel tired.", "Students who study at night often feel tired."], a: 1 },
            { q: "2", o: ["My cousin, that is a doctor, works in Monterrey.", "My cousin, who is a doctor, works in Monterrey."], a: 1, why: "Don't use that after a comma." },
            { q: "3", o: ["Impulse buyers are people who they buy without thinking.", "Impulse buyers are people who buy without thinking."], a: 1, why: "Don't repeat the subject: who already is the subject." },
            { q: "4", o: ["A friend who listens is a treasure.", "A friend which listens is a treasure."], a: 0 },
            { q: "5", o: ["Apps that track your spending are useful.", "Apps that tracks your spending are useful."], a: 0 }
          ] }
      ] },
    { title: "Outline", min: 10,
      goal: "Choose a topic you know well and outline your classification essay.",
      acts: [
        { type: "plan", title: "Outline your essay", instr: "List things you know well, choose one, and decide your principle of classification. Each part of the outline becomes a sentence or paragraph. The examples are for an essay about friends.",
          fields: [
            { id: "know", label: "Topics you know well (notes)", ph: "friends, video games, shoppers, teachers, taco stands", note: true },
            { id: "principle", label: "Your topic and principle of classification (notes)", ph: "friends — by how long they stay in our lives", note: true },
            { id: "title", label: "Title", ph: "Friends for a Reason, a Season, or a Lifetime", title: true },
            { id: "hook", label: "I. Introduction — Hook", ph: "The average person meets thousands of people in a lifetime, but only a few of them become real friends." },
            { id: "bg", label: "I. Introduction — General to specific information", ph: "Some friendships last a few weeks, while others continue for decades." },
            { id: "thesis", label: "I. Introduction — Thesis statement (principle + categories)", ph: "According to how long they stay in our lives, friends can be classified into three groups: friends for a moment, friends for a stage, and lifelong friends." },
            { id: "b1", label: "II. Body 1 — Topic sentence (category 1)", ph: "The first group consists of friends for a moment, who appear in our lives for a short but important time.", newPara: true },
            { id: "b1s", label: "II. Body 1 — Characteristics and examples", ph: "For example, a person who sits next to you on a long bus trip can become a friend for a few hours. These friendships are short, but they can teach us something valuable." },
            { id: "b2", label: "III. Body 2 — Topic sentence (category 2)", ph: "The second type is friends for a stage, who share one part of our lives, such as school or a job.", newPara: true },
            { id: "b2s", label: "III. Body 2 — Characteristics and examples", ph: "These friends understand our daily problems because they live them too. However, when the stage ends, the friendship often becomes weaker." },
            { id: "b3", label: "IV. Body 3 — Topic sentence (category 3)", ph: "Finally, lifelong friends are the people who stay with us through every change.", newPara: true },
            { id: "b3s", label: "IV. Body 3 — Characteristics and examples", ph: "They tend to know our families, and they remember who we were years ago. Even if we do not talk for months, the friendship continues as if no time has passed." },
            { id: "c1", label: "V. Conclusion — Restate the thesis", ph: "In conclusion, friends can be classified as friends for a moment, friends for a stage, and lifelong friends.", newPara: true },
            { id: "c2", label: "V. Conclusion — Final thought", ph: "Each type plays a distinct role, so we should appreciate every friend for what they bring to our lives." }
          ] }
      ] },
    { title: "Write & check", min: 13,
      goal: "Write your classification essay, check it, and save it.",
      acts: [
        { type: "write", title: "My classification essay",
          instr: "Build your first draft from your outline, then develop each body paragraph with characteristics and examples. Leave an empty line between paragraphs.",
          moves: ["Title.", "Introduction: hook, general to specific information, thesis with your principle and categories.", "Three body paragraphs: one category each, with characteristics and examples.", "Subject adjective clauses to describe each category.", "Conclusion: restate the thesis and add a final thought."],
          minWords: 280, maxWords: 550,
          rubric: [
            { type: "title", pts: 1 },
            { type: "paras", min: 5, pts: 1 },
            { type: "thesis", pts: 1, re: "\\b(types?|kinds?|categor\\w+|groups?|classif\\w+|divided)\\b", tip: "Your thesis should name the principle and the categories: … can be classified into three types: …" },
            { type: "paraLen", min: 3, pts: 1 },
            { type: "has", re: "\\b(who|which|that)\\b", min: 4, pts: 1, label: "Adjective clauses", tip: "Describe your categories with adjective clauses: people who…, places that…" },
            { type: "has", re: "\\b(first|second|third|another|finally|in addition|furthermore|moreover|for example|for instance|however)\\b", min: 4, pts: 1, label: "Transitions", tip: "Use transitions between and inside paragraphs." },
            { type: "lastPara", re: "\\b(in conclusion|to sum up|in summary|to conclude|overall)\\b", pts: 1, label: "Conclusion paragraph", tip: "Begin your last paragraph with In conclusion, … and restate your thesis." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My introduction moves from general to specific and ends with a thesis.", "My categories follow one principle and do not overlap.", "Each body paragraph describes one category with examples.", "I used subject adjective clauses correctly.", "My conclusion restates the thesis and adds a final thought."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 5 ───────────────────────── */
{
  n: 5, title: "Cause-Effect Essays", focus: "Focus on causes or effects · cause-effect structures · past forms · noun + preposition",
  product: "A five-paragraph cause-effect essay",
  cando: "I can explain the causes or effects of a situation in a well-organized essay.",
  vocab: [
    { w: "consequence", d: "a result, often a bad one" },
    { w: "contribute to", d: "to be one of the causes of something" },
    { w: "decline", d: "a decrease; to become less" },
    { w: "factor", d: "one of the things that causes a situation" },
    { w: "impact", d: "a strong effect" },
    { w: "opportunity", d: "a good chance to do something" },
    { w: "significant", d: "important; large enough to notice" },
    { w: "trend", d: "a general change in a situation" }
  ],
  steps: [
    { title: "Get ready", min: 6,
      goal: "Read a model cause-effect essay. Does it focus on causes or on effects?",
      model: { title: "Why Young People Leave Small Towns", label: "Model essay", text: "When my grandfather was young, almost everyone in his town stayed there for life. Today, the same town has many empty houses, and most of its young people live in cities like Puebla, Monterrey, or Mexico City. This trend is not unique to my grandfather's town. Young people leave small towns for three main reasons: jobs, education, and lifestyle.\n\nThe most important factor is the lack of good jobs. In many small towns, the main sources of work are agriculture and small family businesses, which cannot pay high salaries. When my cousin finished school, for example, she could only find work in a store that paid the minimum wage. Because of this, she moved to the city, where she now works for a technology company.\n\nAnother cause is access to education. Most small towns have primary and secondary schools, but very few have universities. As a result, students who want a degree have to move. Once they finish their studies, they usually stay in the city because their careers, friends, and opportunities are there.\n\nFinally, many young people are attracted to the lifestyle of the city. Cities offer concerts, sports events, international restaurants, and fast internet. Young people used to accept a quiet life, but social media now shows them everything they are missing.\n\nIn conclusion, the lack of jobs, the need for education, and the attraction of city life have all contributed to the decline of small towns. If towns want to keep their young people, they will need to create better jobs and new opportunities for study close to home." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "Does the essay focus on causes or effects?", o: ["Causes: why young people leave", "Effects: what happens to the towns"], a: 0 },
            { q: "According to the writer, what is the most important factor?", o: ["Education", "Jobs", "Lifestyle"], a: 1 },
            { q: "Why do graduates usually stay in the city?", o: ["Their careers, friends and opportunities are there.", "They don't like their towns.", "The towns have no houses."], a: 0 },
            { q: "What does the conclusion suggest?", o: ["Towns should build more houses.", "Towns need better jobs and places to study.", "Young people should never leave."], a: 1 }
          ] },
        { type: "mc", title: "Causes or effects?", instr: "Read each thesis. Will the essay focus on causes or effects?", options: ["Focus on causes", "Focus on effects"],
          items: [
            { q: "Being bilingual has positive effects on a person's career, brain, and relationships.", a: "Focus on effects" },
            { q: "Animals become endangered mainly because of habitat loss, hunting, and climate change.", a: "Focus on causes" },
            { q: "Friendships usually end for three reasons: distance, changing interests, and broken trust.", a: "Focus on causes" },
            { q: "Reality television has changed how young people see fame, money, and relationships.", a: "Focus on effects" }
          ] }
      ] },
    { title: "Cause-effect language", min: 8,
      goal: "Use cause-effect structures and noun + preposition combinations correctly.",
      teach: `<table class="mini"><tr><th>Meaning</th><th>+ clause (subject + verb)</th><th>+ noun</th><th>Between sentences</th></tr>
<tr><td>cause</td><td>because, since</td><td>because of, due to</td><td>—</td></tr>
<tr><td>effect</td><td>so</td><td>—</td><td>As a result, Therefore, Consequently,</td></tr></table>
<p><i>He moved <b>because</b> he needed a job. / He moved <b>because of</b> the lack of jobs. / There were no jobs. <b>As a result,</b> he moved.</i></p>
<p>Verbs: <i>X <b>causes / leads to / results in</b> Y</i> · <i>Y <b>is caused by / results from</b> X</i>.</p>
<p><b>Noun + preposition:</b> <i>a cause <b>of</b>, an effect <b>on</b>, an impact <b>on</b>, a reason <b>for</b>, an increase <b>in</b>, a decline <b>in</b>, a solution <b>to</b></i>.</p>`,
      acts: [
        { type: "mc", title: "Choose the correct structure", instr: "Choose the correct word or phrase.",
          items: [
            { q: "Many students move to the city ___ the lack of universities in small towns.", o: ["because", "because of"], a: 1 },
            { q: "Prices went up. ___, many families stopped eating out.", o: ["As a result", "Because"], a: 0 },
            { q: "The river is polluted ___ factories dump chemicals into it.", o: ["due to", "because"], a: 1 },
            { q: "Hunting has ___ a sharp decline in the jaguar population.", o: ["led to", "resulted from"], a: 0 },
            { q: "Her success is ___ hard work and a great teacher.", o: ["caused by", "the result of"], a: 1 },
            { q: "___ he speaks two languages, he got the job easily.", o: ["Since", "Due to"], a: 0 },
            { q: "The flights were cancelled ___ the storm.", o: ["due to", "so"], a: 0 }
          ] },
        { type: "gap", title: "Noun + preposition", instr: "Complete with the correct preposition.",
          items: [
            "Social media has a strong effect [[on]] teenagers' sleep.",
            "What is the main reason [[for]] the decline in tourism?",
            "There has been a significant increase [[in]] the price of housing.",
            "Habitat loss is the most important cause [[of]] extinction.",
            "Scientists are looking for a solution [[to]] the problem.",
            "Being bilingual has a positive impact [[on]] your career."
          ] }
      ] },
    { title: "Expressing past events", min: 8,
      goal: "Use past forms correctly when you explain causes and effects.",
      teach: `<ul><li><b>Simple past</b> — finished actions: <i>She <b>moved</b> to the city in 2019.</i></li>
<li><b>used to / would</b> — past habits that are not true now: <i>Young people <b>used to</b> stay in their towns.</i> (<i>would</i> only for actions, not states)</li>
<li><b>Past perfect</b> (had + participle) — an action before another past action: <i>When she arrived, the factory <b>had</b> already <b>closed</b>.</i></li>
<li><b>Present perfect</b> — past to now, results now: <i>Small towns <b>have lost</b> many young people.</i></li></ul>`,
      acts: [
        { type: "gap", title: "Write the correct past form", instr: "Write the correct form of the verb in parentheses.",
          items: [
            "When I was a child, my family [[used to]] (use to) visit my grandparents every weekend.",
            "By the time the doctor arrived, the patient [[had]] (have) already recovered.",
            "In the last ten years, the number of electric cars [[has increased]] (increase) dramatically.",
            "My town [[changed]] (change) a lot after the new highway opened in 2015.",
            "When we got to the station, the train [[had left]] (leave), so we took a bus.",
            "Since 2020, many companies [[have allowed]] (allow) employees to work from home."
          ] },
        { type: "mc", title: "Choose the best form", instr: "Choose the correct option.",
          items: [
            { q: "People ___ write letters, but now they send messages.", o: ["used to", "are used to"], a: 0 },
            { q: "She couldn't pay because she ___ her wallet at home.", o: ["left", "had left"], a: 1 },
            { q: "Pollution ___ a serious problem since the 1990s.", o: ["was", "has been"], a: 1 },
            { q: "When I was young, I ___ have long hair.", o: ["used to", "would"], a: 0, why: "Would is not used for states like have, be or live." },
            { q: "The company ___ 200 employees last year.", o: ["has hired", "hired"], a: 1 }
          ] }
      ] },
    { title: "Outline", min: 10,
      goal: "Choose a topic and decide: will you focus on causes or effects?",
      acts: [
        { type: "plan", title: "Outline your essay", instr: "Topics: the effects of being bilingual · the main reasons that animals become endangered · why people stop being friends · the effects of social media on teenagers · or your own topic. The examples are for an essay about being bilingual.",
          fields: [
            { id: "topic", label: "Topic and focus: causes or effects? (notes)", ph: "effects of being bilingual — focus on effects", note: true },
            { id: "ideas", label: "Brainstorm (notes — circle your best three ideas)", ph: "better jobs, travel, brain health, two cultures, movies without subtitles, family", note: true },
            { id: "title", label: "Title", ph: "Two Languages, Many Advantages", title: true },
            { id: "hook", label: "I. Introduction — Hook", ph: "More than half of the people in the world speak at least two languages." },
            { id: "bg", label: "I. Introduction — Background", ph: "For many of them, speaking a second language is not just a skill but a part of who they are." },
            { id: "thesis", label: "I. Introduction — Thesis statement (focus + three causes or effects)", ph: "Being bilingual has a significant impact on a person's career, brain, and understanding of other cultures." },
            { id: "b1", label: "II. Body 1 — Topic sentence", ph: "The first effect of bilingualism is better career opportunities.", newPara: true },
            { id: "b1s", label: "II. Body 1 — Explanation and example", ph: "Many international companies prefer employees who can communicate with clients in two languages. For example, my uncle got a promotion because he could speak with customers from the United States." },
            { id: "b2", label: "III. Body 2 — Topic sentence", ph: "Another important effect is on the brain.", newPara: true },
            { id: "b2s", label: "III. Body 2 — Explanation and example", ph: "Switching between two languages trains the brain to concentrate and solve problems. As a result, bilingual people often find it easier to do two tasks at the same time." },
            { id: "b3", label: "IV. Body 3 — Topic sentence", ph: "Finally, bilingual people understand other cultures more deeply.", newPara: true },
            { id: "b3s", label: "IV. Body 3 — Explanation and example", ph: "When you speak a language, you can enjoy its music, books, and humor without translation. Consequently, you become more open to different ways of thinking." },
            { id: "c1", label: "V. Conclusion — Restate the thesis", ph: "In conclusion, bilingualism leads to better jobs, a stronger brain, and a wider view of the world.", newPara: true },
            { id: "c2", label: "V. Conclusion — Final thought (suggestion or prediction)", ph: "For these reasons, parents should give their children the opportunity to learn a second language as early as possible." }
          ] }
      ] },
    { title: "Write & check", min: 13,
      goal: "Write your cause-effect essay, check it, and save it.",
      acts: [
        { type: "write", title: "My cause-effect essay",
          instr: "Build your first draft from your outline, then develop each body paragraph with explanations and examples. Leave an empty line between paragraphs.",
          moves: ["Title.", "Introduction: hook, background, thesis that shows your focus (causes or effects).", "Three body paragraphs: one cause or effect each, with explanations and examples.", "Cause-effect language: because of, due to, as a result, leads to…", "Conclusion: restate the thesis and give a suggestion or prediction."],
          minWords: 300, maxWords: 550,
          rubric: [
            { type: "title", pts: 1 },
            { type: "paras", min: 5, pts: 1 },
            { type: "thesis", pts: 1, re: "\\b(causes?|effects?|reasons?|because|leads? to|results?|why|impact|consequences?|factors?)\\b", tip: "Your thesis should show your focus: … for three main reasons: … / … has three important effects: …" },
            { type: "paraLen", min: 3, pts: 1 },
            { type: "has", re: "\\b(because|due to|as a result|therefore|consequently|leads? to|led to|results? in|caused by|since|for this reason|contribut\\w+ to)\\b", min: 4, pts: 1, label: "Cause-effect language", tip: "Use cause-effect structures: because of, due to, as a result, therefore, leads to." },
            { type: "has", re: "\\b(first|second|third|another|finally|in addition|furthermore|moreover|for example|for instance)\\b", min: 4, pts: 1, label: "Transitions", tip: "Use transitions between and inside paragraphs." },
            { type: "lastPara", re: "\\b(in conclusion|to sum up|in summary|to conclude|overall)\\b", pts: 1, label: "Conclusion paragraph", tip: "Begin your last paragraph with In conclusion, … and restate your thesis." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My thesis shows if I focus on causes or effects.", "Each body paragraph explains one cause or effect with examples.", "I used cause-effect structures correctly (because / because of / as a result).", "I used past forms and noun + preposition combinations correctly.", "My conclusion restates the thesis and gives a suggestion or prediction."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 6 ───────────────────────── */
{
  n: 6, title: "Comparison Essays", focus: "Block and point-by-point organization · connectors · comparatives · parallel structure",
  product: "A five-paragraph comparison essay",
  cando: "I can compare and contrast two subjects in a clearly organized essay.",
  vocab: [
    { w: "alike", d: "similar" },
    { w: "contrast", d: "a clear difference; to show differences" },
    { w: "distinct", d: "clearly different" },
    { w: "equivalent", d: "equal in value or meaning" },
    { w: "flavor", d: "the taste of food" },
    { w: "resemble", d: "to look or be like something" },
    { w: "similarity", d: "a way in which things are the same" },
    { w: "whereas", d: "used to show a contrast between two facts" }
  ],
  steps: [
    { title: "Get ready", min: 6,
      goal: "Read a model comparison essay. Notice how it is organized.",
      model: { title: "Street Food in Mexico City and Bangkok", label: "Model essay", text: "At midnight, while most of the world is asleep, the streets of Mexico City and Bangkok are full of smoke, music, and hungry people. These two cities are on opposite sides of the planet, but both are famous for their street food. Although Mexican and Thai street food share a similar spirit, they differ in their flavors, their prices, and the way people eat them.\n\nThe most obvious difference is the flavor. Mexican street food is built on corn, chiles, and lime, so tacos, tlacoyos, and elotes taste smoky and spicy. Thai street food, in contrast, balances sweet, sour, salty, and spicy flavors in the same dish. A plate of pad thai, for example, combines sugar, fish sauce, lime, and chile in a single bite.\n\nPrice is another point of comparison. In both cities, street food is much cheaper than restaurant food, and a full meal can cost less than a coffee in a fashionable café. However, portions in Bangkok are usually smaller, so people tend to buy several dishes and share them. In Mexico City, on the other hand, a few tacos are often enough for a complete meal.\n\nFinally, the eating experience is different. Mexicans usually eat standing next to the stand, talking with the taquero while he prepares the next order. In Bangkok, many vendors set up small plastic tables and chairs on the sidewalk, so customers sit down and eat more slowly.\n\nIn conclusion, the street food of Mexico City and Bangkok is different in flavor, price, and style, but it is alike in its energy and its importance to daily life. Whether you choose tacos al pastor or a bowl of noodles, you will discover that the best way to understand a city is to eat on its streets." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What three points does the writer compare?", o: ["Flavor, price, eating experience", "History, music, weather", "Corn, rice, noodles"], a: 0 },
            { q: "How is Thai street food different in flavor?", o: ["It is only spicy.", "It balances sweet, sour, salty and spicy.", "It uses corn and lime."], a: 1 },
            { q: "Why do people in Bangkok buy several dishes?", o: ["Portions are usually smaller.", "Food is very expensive.", "They eat standing."], a: 0 },
            { q: "How is the essay organized?", o: ["Block: first all about Mexico City, then all about Bangkok", "Point by point: each body paragraph compares both cities on one point"], a: 1 }
          ] },
        { type: "mc", title: "Block or point-by-point?", instr: "Read each outline of the body paragraphs. Which method does it use?", options: ["Block method", "Point-by-point method"],
          items: [
            { q: "Body 1: My father's childhood (school, games, technology). Body 2: My childhood (school, games, technology).", a: "Block method" },
            { q: "Body 1: Cost of living in both cities. Body 2: Transportation in both cities. Body 3: Weather in both cities.", a: "Point-by-point method" },
            { q: "Body 1: The first Star Wars movie. Body 2: The newest Star Wars movie.", a: "Block method" }
          ] }
      ] },
    { title: "Organization and connectors", min: 8,
      goal: "Organize a comparison and connect ideas with comparison and contrast connectors.",
      teach: `<p><b>Block method:</b> all about A, then all about B. <b>Point-by-point:</b> each body paragraph compares A and B on one point.</p>
<table class="mini"><tr><th>Similarity</th><th>Contrast</th></tr>
<tr><td>both A and B · A, like B, … · Similarly, … · Likewise, … · also</td><td>However, … · In contrast, … · On the other hand, … · A, whereas / while B … · Unlike A, B … · Although …</td></tr></table>
<p><i>Mexican food is spicy<b>, whereas</b> Japanese food is mild.</i> &nbsp; <i><b>Unlike</b> tacos, sushi is eaten cold.</i></p>`,
      acts: [
        { type: "mc", title: "Similarity or contrast?", instr: "Does the connector show a similarity or a contrast?", options: ["Similarity", "Contrast"],
          items: [
            { q: "Likewise, …", a: "Similarity" },
            { q: "…, whereas …", a: "Contrast" },
            { q: "On the other hand, …", a: "Contrast" },
            { q: "Both … and …", a: "Similarity" },
            { q: "Unlike …, …", a: "Contrast" },
            { q: "Similarly, …", a: "Similarity" },
            { q: "In contrast, …", a: "Contrast" },
            { q: "…, like …, …", a: "Similarity" }
          ] },
        { type: "fix", title: "Combine with a connector", instr: "Combine the two sentences with the connector in parentheses.",
          items: [
            { q: "Monterrey is hot and dry. Veracruz is hot and humid. (whereas)", a: ["Monterrey is hot and dry, whereas Veracruz is hot and humid.", "Whereas Monterrey is hot and dry, Veracruz is hot and humid."] },
            { q: "My brother loves action movies. My sister prefers documentaries. (in contrast)", a: ["My brother loves action movies. In contrast, my sister prefers documentaries.", "My brother loves action movies; in contrast, my sister prefers documentaries."] },
            { q: "Messi is an excellent player. Ronaldo is an excellent player. (both)", a: ["Both Messi and Ronaldo are excellent players."] }
          ] }
      ] },
    { title: "Comparatives and parallel structure", min: 8,
      goal: "Use comparatives and superlatives correctly and keep lists parallel.",
      teach: `<p><b>Comparative:</b> short adjectives + <b>-er than</b> (<i>cheaper than</i>); long adjectives <b>more / less … than</b> (<i>more expensive than</i>). <b>Superlative:</b> <b>the -est / the most</b>. Irregular: good → better → the best; bad → worse → the worst; far → farther.</p>
<p><b>as … as</b> = equal: <i>Bangkok is <b>as</b> busy <b>as</b> Mexico City.</i></p>
<p><b>Parallel structure:</b> items in a list or pair have the same form.</p>
<p>✗ <i>Street food is cheap, delicious, and you can find it everywhere.</i> → ✓ <i>Street food is cheap, delicious, and easy to find.</i><br>✗ <i>I like cooking and to eat.</i> → ✓ <i>I like cooking and eating.</i></p>`,
      acts: [
        { type: "gap", title: "Comparatives and superlatives", instr: "Write the correct form of the adjective in parentheses.",
          items: [
            "Mexico City is [[bigger]] (big) than Guadalajara.",
            "For many people, the train is [[more comfortable]] (comfortable) than the bus.",
            "This is the [[best]] (good) taco stand in the neighborhood.",
            "The second movie was [[worse]] (bad) than the first one.",
            "Mount Everest is the [[highest]] (high) mountain in the world.",
            "Online classes can be [[more flexible]] (flexible) than face-to-face classes.",
            "Today is the [[hottest]] (hot) day of the year."
          ] },
        { type: "mc", title: "Parallel or not?", instr: "Choose the sentence with parallel structure.",
          items: [
            { q: "1", o: ["My grandfather enjoys reading, gardening, and to walk.", "My grandfather enjoys reading, gardening, and walking."], a: 1 },
            { q: "2", o: ["The new phone is faster, lighter, and more powerful.", "The new phone is faster, lighter, and it has more power."], a: 0 },
            { q: "3", o: ["Students can study in the library, at home, or in a café.", "Students can study in the library, at home, or they go to a café."], a: 0 },
            { q: "4", o: ["She is intelligent, funny, and has a lot of kindness.", "She is intelligent, funny, and kind."], a: 1 },
            { q: "5", o: ["Traveling by plane is quicker than to travel by bus.", "Traveling by plane is quicker than traveling by bus."], a: 1 }
          ] }
      ] },
    { title: "Outline", min: 10,
      goal: "Choose two subjects and outline your comparison essay.",
      acts: [
        { type: "plan", title: "Outline your essay", instr: "Topics: an athlete's or a team's past and present performance · the cuisine of two countries · what you expected from an important event vs. the reality · two people you admire · two movies of the same type. Choose block or point-by-point. The examples use point-by-point.",
          fields: [
            { id: "topic", label: "Your two subjects and method (notes)", ph: "my first day at university: expectation vs. reality — point by point", note: true },
            { id: "points", label: "Points of comparison (notes)", ph: "classes, classmates, my feelings", note: true },
            { id: "title", label: "Title", ph: "University: What I Imagined and What I Found", title: true },
            { id: "hook", label: "I. Introduction — Hook", ph: "The night before my first day at university, I could not sleep." },
            { id: "bg", label: "I. Introduction — Background", ph: "For months, I had imagined every detail of that day, from the classrooms to the people I would meet." },
            { id: "thesis", label: "I. Introduction — Thesis statement (both subjects + points)", ph: "However, the reality of my first day was very different from my expectations in three ways: the classes, my classmates, and my own feelings." },
            { id: "b1", label: "II. Body 1 — Point 1: topic sentence", ph: "First, the classes were much more interactive than I had expected.", newPara: true },
            { id: "b1s", label: "II. Body 1 — Compare both subjects", ph: "I imagined long lectures in enormous rooms, whereas my first class had only twenty students. In contrast to high school, the professor asked for our opinions and wanted us to debate." },
            { id: "b2", label: "III. Body 2 — Point 2: topic sentence", ph: "Second, my classmates were friendlier than I had imagined.", newPara: true },
            { id: "b2s", label: "III. Body 2 — Compare both subjects", ph: "I expected everyone to be serious and competitive. On the other hand, most of them were as nervous as I was, and three of them invited me to lunch." },
            { id: "b3", label: "IV. Body 3 — Point 3: topic sentence", ph: "Finally, my feelings changed completely during the day.", newPara: true },
            { id: "b3s", label: "IV. Body 3 — Compare both subjects", ph: "In the morning, I felt anxious, lost, and alone. By the evening, however, I felt confident, curious, and excited about the semester." },
            { id: "c1", label: "V. Conclusion — Restate the thesis", ph: "In conclusion, my first day at university was different from my expectations in its classes, its people, and the way it made me feel.", newPara: true },
            { id: "c2", label: "V. Conclusion — Final thought", ph: "The reality was better than the dream, and it taught me not to fear new beginnings." }
          ] }
      ] },
    { title: "Write & check", min: 13,
      goal: "Write your comparison essay, check it, and save it.",
      acts: [
        { type: "write", title: "My comparison essay",
          instr: "Build your first draft from your outline, then develop each body paragraph with specific details about both subjects. Leave an empty line between paragraphs.",
          moves: ["Title.", "Introduction: hook, background, thesis with both subjects and the points of comparison.", "Three body paragraphs (block or point-by-point).", "Comparison and contrast connectors; comparatives; parallel structure.", "Conclusion: restate the thesis and summarize the main points."],
          minWords: 300, maxWords: 550,
          rubric: [
            { type: "title", pts: 1 },
            { type: "paras", min: 5, pts: 1 },
            { type: "thesis", pts: 1, re: "\\b(both|similar\\w*|differ\\w*|compar\\w*|contrast|while|whereas|however|although|than|same|alike)\\b", tip: "Your thesis should name both subjects and show that you will compare them: Although A and B…, they differ in…" },
            { type: "paraLen", min: 3, pts: 1 },
            { type: "has", re: "\\b(both|similarly|likewise|in contrast|on the other hand|however|whereas|while|unlike|like|although|alike)\\b", min: 4, pts: 1, label: "Comparison and contrast connectors", tip: "Use connectors: both, similarly, however, in contrast, whereas, unlike." },
            { type: "has", re: "\\b(\\w+er than|more \\w+ than|less \\w+ than|as \\w+ as|the most \\w+|the \\w+est|better|worse|the best|the worst)\\b", min: 2, pts: 1, label: "Comparatives and superlatives", tip: "Use comparatives and superlatives: cheaper than, more comfortable than, the best…" },
            { type: "has", re: "\\b(first|second|third|another|finally|in addition|furthermore|for example|for instance)\\b", min: 3, pts: 1, label: "Transitions", tip: "Use transitions to introduce your points." },
            { type: "lastPara", re: "\\b(in conclusion|to sum up|in summary|to conclude|overall)\\b", pts: 1, label: "Conclusion paragraph", tip: "Begin your last paragraph with In conclusion, … and restate your thesis." },
            { type: "splice", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["I have a hook to start my introduction.", "My thesis statement contains a clear controlling idea.", "I followed either the block or the point-by-point method carefully.", "I used connectors, comparatives and superlatives correctly.", "Items in lists have parallel structure, and my conclusion summarizes the main points."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 7 ───────────────────────── */
{
  n: 7, title: "Problem-Solution Essays", focus: "Organizing problem and solutions · adverb clauses · sentence types and variety",
  product: "A five-paragraph problem-solution essay",
  cando: "I can describe a problem and propose practical solutions in a well-organized essay.",
  vocab: [
    { w: "address", d: "to start dealing with a problem" },
    { w: "alternative", d: "another possible choice" },
    { w: "consume", d: "to use, eat or drink something" },
    { w: "effective", d: "producing the result you want" },
    { w: "implement", d: "to put a plan into action" },
    { w: "prevent", d: "to stop something from happening" },
    { w: "reduce", d: "to make smaller or less" },
    { w: "resource", d: "something useful, like money, water or time" }
  ],
  steps: [
    { title: "Get ready", min: 6,
      goal: "Read a model problem-solution essay.",
      model: { title: "Food Waste: A Problem We Can Solve", label: "Model essay", text: "Imagine buying three bags of groceries and throwing one of them directly into the garbage. Although it sounds absurd, this is close to what happens in many homes. Around the world, about one-third of all the food that is produced is lost or wasted, while millions of people do not have enough to eat. Fortunately, families can reduce food waste in three practical ways: planning their meals, storing food correctly, and sharing what they cannot use.\n\nThe first solution is to plan meals before going shopping. When people shop without a list, they often buy food that they do not need because it is on sale or looks attractive. If a family decides on Sunday what it will cook during the week, it can buy exactly the right amount. This simple habit also saves money and time.\n\nSecond, families should learn to store food so that it lasts longer. Many fruits and vegetables spoil quickly because people keep them in the wrong place. For example, tomatoes and bananas should stay outside the refrigerator, whereas leafy greens stay fresh longer in a closed container in the fridge. In addition, leftovers can be frozen and eaten later instead of being thrown away.\n\nFinally, people can share food that they will not use. Unless food is shared quickly, it ends up in the garbage. Neighbors can exchange extra fruit, and some cities have apps that connect restaurants with people who want to buy their leftover meals at a low price. Food banks also accept products that are still safe to eat.\n\nIn conclusion, food waste is a serious problem, but it is also one of the easiest to address. By planning meals, storing food correctly, and sharing what they cannot use, families can save resources and help others. If every home implemented these small changes, the impact on the planet would be enormous." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "Where does the writer describe the problem?", o: ["In the introduction", "In the third body paragraph", "Only in the conclusion"], a: 0 },
            { q: "Why do people buy food that they do not need?", o: ["They shop without a list.", "They cook too much.", "Supermarkets are far away."], a: 0 },
            { q: "Where should tomatoes and bananas be stored?", o: ["In the freezer", "Outside the refrigerator", "In a closed container in the fridge"], a: 1 },
            { q: "What kind of final thought does the conclusion give?", o: ["A prediction", "A question", "A new solution"], a: 0 }
          ] }
      ] },
    { title: "Adverb clauses", min: 8,
      goal: "Use adverb clauses to show time, reason, contrast, condition and purpose.",
      teach: `<table class="mini"><tr><th>Meaning</th><th>Subordinators</th><th>Example</th></tr>
<tr><td>time</td><td>when, while, before, after, as soon as, until</td><td><b>Before</b> you go shopping, write a list.</td></tr>
<tr><td>reason</td><td>because, since</td><td>Food spoils <b>because</b> people store it badly.</td></tr>
<tr><td>contrast</td><td>although, even though, while, whereas</td><td><b>Although</b> it seems small, the problem is huge.</td></tr>
<tr><td>condition</td><td>if, unless (= if not)</td><td><b>Unless</b> food is shared, it is wasted.</td></tr>
<tr><td>purpose</td><td>so that</td><td>Store food well <b>so that</b> it lasts longer.</td></tr></table>
<p>Clause first → comma: <i>If you plan meals, you save money.</i></p>`,
      acts: [
        { type: "mc", title: "Choose the subordinator", instr: "Choose the word that gives the correct meaning.",
          items: [
            { q: "___ soft drinks taste good, they contain a lot of sugar.", o: ["Although", "Because"], a: 0 },
            { q: "You will not sleep well ___ you turn off your phone an hour before bed.", o: ["if", "unless"], a: 1 },
            { q: "Many people feel stressed ___ they have too many responsibilities.", o: ["because", "so that"], a: 0 },
            { q: "Write down your worries ___ you can stop thinking about them.", o: ["so that", "although"], a: 0 },
            { q: "___ you feel angry with a friend, wait a day before you answer.", o: ["When", "Unless"], a: 0 },
            { q: "___ he drinks five sodas a day, he says he eats healthily.", o: ["Even though", "Since"], a: 0 },
            { q: "Don't start an argument ___ you are tired.", o: ["while", "so that"], a: 0 },
            { q: "___ you replace one soda with water every day, you will notice a difference.", o: ["If", "Although"], a: 0 }
          ] },
        { type: "fix", title: "Combine with an adverb clause", instr: "Combine the sentences with the word in parentheses. Put the clause first.",
          items: [
            { q: "Exercise is difficult at first. It reduces stress. (although)", a: ["Although exercise is difficult at first, it reduces stress."] },
            { q: "You don't change your habits. Your sleep will not improve. (unless)", a: ["Unless you change your habits, your sleep will not improve."] },
            { q: "You finish work. Turn off your email notifications. (as soon as)", a: ["As soon as you finish work, turn off your email notifications."] }
          ] }
      ] },
    { title: "Sentence types and variety", min: 8,
      goal: "Mix simple, compound, complex and compound-complex sentences.",
      teach: `<ul><li><b>Simple:</b> one independent clause. <i>Stress affects millions of students.</i></li>
<li><b>Compound:</b> two independent clauses + <i>and, but, so, or, yet</i>. <i>Stress is common, but it can be controlled.</i></li>
<li><b>Complex:</b> independent + dependent clause. <i>When students sleep well, they handle stress better.</i></li>
<li><b>Compound-complex:</b> two independent + at least one dependent clause. <i>When exams arrive, many students panic, but those who plan ahead stay calm.</i></li></ul>
<p>Too many short simple sentences sound childish; too many long sentences are hard to read. <b>Mix them.</b></p>`,
      acts: [
        { type: "mc", title: "What type of sentence is it?", instr: "Identify the sentence type.", options: ["Simple", "Compound", "Complex", "Compound-complex"],
          items: [
            { q: "Poor sleep affects concentration.", a: "Simple" },
            { q: "I tried to sleep early, but my neighbors were having a party.", a: "Compound" },
            { q: "If you drink coffee after 6 p.m., you may not sleep well.", a: "Complex" },
            { q: "Although I was tired, I kept studying, and I fell asleep at my desk.", a: "Compound-complex" },
            { q: "People who use their phones in bed often sleep less.", a: "Complex", why: "It has an adjective clause (who use their phones in bed)." },
            { q: "My sister drinks herbal tea, and she reads a book before bed.", a: "Compound" }
          ] },
        { type: "mc", title: "Better sentence variety", instr: "Which version has better sentence variety?",
          items: [
            { q: "1", o: ["Soda has sugar. Sugar is bad. It damages teeth. It causes weight gain.", "Soda contains a lot of sugar, which damages teeth and causes weight gain."], a: 1 },
            { q: "2", o: ["When friends disagree, they should talk face to face. Messages are easy to misunderstand, but a conversation shows emotions clearly.", "Friends disagree. They should talk. Messages are confusing. Conversations are better."], a: 0 }
          ] }
      ] },
    { title: "Outline", min: 10,
      goal: "Choose a problem and outline three solutions.",
      acts: [
        { type: "plan", title: "Outline your essay", instr: "Topics: addiction to soft drinks · stress · a disagreement with a friend · poor sleep · or your own topic. Describe the problem in the introduction and give one solution in each body paragraph. The examples are for an essay about poor sleep.",
          fields: [
            { id: "topic", label: "The problem (notes)", ph: "poor sleep among university students", note: true },
            { id: "ideas", label: "Causes and possible solutions (notes)", ph: "phones in bed, coffee, irregular schedule — routine, no screens, less caffeine", note: true },
            { id: "title", label: "Title", ph: "Sleeping Better in a Busy World", title: true },
            { id: "hook", label: "I. Introduction — Hook", ph: "How many hours did you sleep last night?" },
            { id: "bg", label: "I. Introduction — Describe the problem", ph: "Many university students sleep less than six hours a night, and as a result, they feel tired, stressed, and unable to concentrate." },
            { id: "thesis", label: "I. Introduction — Thesis statement (three solutions)", ph: "Fortunately, students can improve their sleep by following a regular schedule, reducing screen time at night, and consuming less caffeine." },
            { id: "b1", label: "II. Body 1 — Solution 1: topic sentence", ph: "The first solution is to follow a regular sleep schedule.", newPara: true },
            { id: "b1s", label: "II. Body 1 — Explain how it works + example", ph: "When people go to bed and wake up at the same time every day, their bodies learn when to rest. For example, my roommate set an alarm for 11 p.m. to remind her to get ready for bed, and she now falls asleep much faster." },
            { id: "b2", label: "III. Body 2 — Solution 2: topic sentence", ph: "Second, students should stop using screens an hour before bed.", newPara: true },
            { id: "b2s", label: "III. Body 2 — Explain how it works + example", ph: "The light from phones keeps the brain awake, and social media makes it hard to relax. Instead, students can read a book or listen to calm music so that their minds slow down." },
            { id: "b3", label: "IV. Body 3 — Solution 3: topic sentence", ph: "Finally, reducing caffeine can make a significant difference.", newPara: true },
            { id: "b3s", label: "IV. Body 3 — Explain how it works + example", ph: "Although coffee helps people study, its effect lasts for many hours. Unless students stop drinking it in the afternoon, it will keep them awake at night." },
            { id: "c1", label: "V. Conclusion — Restate the problem and solutions", ph: "In conclusion, poor sleep is a common problem, but a regular schedule, fewer screens, and less caffeine can solve it.", newPara: true },
            { id: "c2", label: "V. Conclusion — Final thought", ph: "If students implement these simple changes, they will feel healthier and perform better in their classes." }
          ] }
      ] },
    { title: "Write & check", min: 13,
      goal: "Write your problem-solution essay, check it, and save it.",
      acts: [
        { type: "write", title: "My problem-solution essay",
          instr: "Build your first draft from your outline, then develop each solution with explanations and examples. Leave an empty line between paragraphs.",
          moves: ["Title.", "Introduction: hook, description of the problem, thesis with three solutions.", "Three body paragraphs: one solution each, with explanations and examples.", "Adverb clauses and a variety of sentence types.", "Conclusion: restate the problem and solutions, and end with a final thought."],
          minWords: 300, maxWords: 550,
          rubric: [
            { type: "title", pts: 1 },
            { type: "paras", min: 5, pts: 1 },
            { type: "thesis", pts: 1, re: "\\b(solutions?|solve|ways?|steps?|reduce|prevent|improve|should|can|by)\\b", tip: "Your thesis should present your solutions: … can … by …, …, and …" },
            { type: "paraLen", min: 3, pts: 1 },
            { type: "has", re: "\\b(although|even though|because|since|if|unless|when|while|so that|as soon as|before|after|until)\\b", min: 5, pts: 1, label: "Adverb clauses", tip: "Use adverb clauses: although, unless, so that, if, when, because." },
            { type: "has", re: ",\\s*(and|but|so|yet|or)\\s", min: 2, pts: 1, label: "Sentence variety (compound sentences)", tip: "Mix sentence types: include compound sentences with , and / , but / , so." },
            { type: "has", re: "\\b(first|second|third|another|finally|in addition|furthermore|moreover|for example|for instance)\\b", min: 3, pts: 1, label: "Transitions", tip: "Use transitions to introduce each solution." },
            { type: "lastPara", re: "\\b(in conclusion|to sum up|in summary|to conclude|overall)\\b", pts: 1, label: "Conclusion paragraph", tip: "Begin your last paragraph with In conclusion, … and restate the problem and solutions." },
            { type: "splice", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My introduction describes the problem and ends with a thesis that presents the solutions.", "Each body paragraph explains one practical solution with examples.", "I used adverb clauses with correct commas.", "I used a variety of sentence types.", "My conclusion restates the problem and solutions and ends with a final thought."] }
      ] }
  ]
},
/* ───────────────────────── UNIT 8 ───────────────────────── */
{
  n: 8, title: "Argument Essays", focus: "Developing an argument · tone with modals · counterargument and refutation · faulty logic · if clauses",
  product: "A five-paragraph argument essay on a controversial question",
  cando: "I can take a position, support it with reasons and evidence, and answer the opposing view.",
  vocab: [
    { w: "advocate", d: "to publicly support an idea" },
    { w: "ban", d: "to officially stop something; an official rule that stops something" },
    { w: "controversial", d: "causing a lot of disagreement" },
    { w: "evidence", d: "facts that show something is true" },
    { w: "opponent", d: "a person who disagrees with an idea" },
    { w: "perspective", d: "a way of thinking about something" },
    { w: "policy", d: "a plan or rule of a government or institution" },
    { w: "valid", d: "based on good reasons; acceptable" }
  ],
  steps: [
    { title: "Get ready", min: 6,
      goal: "Read a model argument essay. Find the writer's position, reasons and answer to the other side.",
      model: { title: "Give the Historic Center Back to People", label: "Model essay", text: "Anyone who has walked through the historic center of Puebla on a Saturday afternoon knows the feeling: narrow sidewalks, honking horns, and the smell of exhaust mixed with the smell of fresh bread. These colonial streets were designed for people and horses, not for thousands of cars. Although some drivers would disagree, cities should close their historic centers to private cars because doing so would protect old buildings, improve public health, and help local businesses.\n\nFirst, a ban on cars would help preserve buildings that are hundreds of years old. Constant vibrations from traffic can weaken old walls, and pollution slowly darkens stone façades. If fewer cars entered these areas, cities would spend less money on restoration, and future generations could enjoy the same architecture that we see today.\n\nIn addition, car-free centers may improve public health. Without traffic, residents and visitors are more likely to walk or ride bicycles. Cleaner air could also reduce breathing problems for the people who live and work in these neighborhoods. Pontevedra, a city in Spain, closed most of its center to cars in the late 1990s, and its streets are now full of pedestrians of all ages.\n\nOpponents argue that a ban would hurt local businesses because customers could not park near the stores. It is true that some shoppers prefer to drive. However, this argument ignores how people actually behave in pedestrian areas. When streets are quiet and safe, people tend to stay longer, visit more shops, and sit in cafés. Furthermore, parking lots and frequent buses at the edge of the center could keep the area easy to reach.\n\nIn conclusion, closing historic centers to private cars would protect our heritage, make our cities healthier, and support local businesses. Change is never easy, and some people will need time to adapt. However, if city leaders act now, our historic centers could become places where people, not cars, come first." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the writer's position?", o: ["Cities should build more parking in historic centers.", "Cities should close their historic centers to private cars.", "Historic buildings should be demolished."], a: 1 },
            { q: "Which evidence does the writer give for public health?", o: ["The example of Pontevedra, Spain", "The price of gasoline", "The age of Puebla's buildings"], a: 0 },
            { q: "What do opponents say?", o: ["Old buildings are ugly.", "A ban would hurt local businesses.", "Bicycles are dangerous."], a: 1 },
            { q: "How does the writer answer the opponents?", o: ["People stay longer and visit more shops in pedestrian areas.", "Businesses are not important.", "The writer agrees with them."], a: 0 }
          ] },
        { type: "mc", title: "The parts of an argument", instr: "What is the job of each sentence?", options: ["Thesis (position)", "Reason", "Counterargument", "Refutation"],
          items: [
            { q: "Cities should close their historic centers to private cars because doing so would protect old buildings, improve public health, and help local businesses.", a: "Thesis (position)" },
            { q: "In addition, car-free centers may improve public health.", a: "Reason" },
            { q: "Opponents argue that a ban would hurt local businesses because customers could not park near the stores.", a: "Counterargument" },
            { q: "However, this argument ignores how people actually behave in pedestrian areas.", a: "Refutation" },
            { q: "First, a ban on cars would help preserve buildings that are hundreds of years old.", a: "Reason" }
          ] }
      ] },
    { title: "Developing an argument", min: 8,
      goal: "Control your tone with modals, and answer the other side with a counterargument and a refutation.",
      teach: `<p>An <b>argument essay</b> tries to persuade the reader. It has a <b>controversial</b> topic (people disagree), a thesis with a <b>clear position</b>, <b>reasons</b> supported by <b>evidence</b> (facts, examples, expert opinions), and an answer to the other side.</p>
<p><b>Controlling tone with modals:</b> very strong words can make your argument sound exaggerated, and a careful reader will stop trusting you.</p>
<table class="mini"><tr><th>Strong (be sure!)</th><th>Moderate</th><th>Careful / possible</th></tr>
<tr><td>must, will, have to</td><td>should, ought to, would</td><td>may, might, could, can</td></tr></table>
<p>✗ <i>Junk food <b>will</b> make every student sick.</i> → ✓ <i>Junk food <b>can</b> cause health problems.</i></p>
<p><b>Counterargument + refutation:</b> present the opposing view fairly, then show why it is weaker.</p>
<p><i><b>Opponents argue that</b> … / <b>Some people believe that</b> … / <b>It is true that</b> …</i> → <i><b>However,</b> … / <b>Nevertheless,</b> … / <b>Even so,</b> … / <b>This argument ignores</b> …</i></p>`,
      acts: [
        { type: "mc", title: "Control the tone", instr: "Choose the modal that makes the claim accurate (not too strong, not too weak).",
          items: [
            { q: "Eating junk food every day ___ cause health problems.", o: ["can", "will always"], a: 0, why: "Not every person gets sick; can is more accurate." },
            { q: "Free university ___ increase the number of graduates.", o: ["would probably", "will definitely"], a: 0 },
            { q: "Every school ___ provide clean drinking water for its students. It is a basic right.", o: ["must", "might"], a: 0, why: "This is a necessity, so a strong modal is appropriate." },
            { q: "At first, a ban on cars ___ hurt some businesses.", o: ["could", "must"], a: 0 },
            { q: "Which sentence has the most appropriate academic tone?", o: ["Everyone knows that uniforms are terrible.", "Uniforms may limit how students express their identity."], a: 1 }
          ] },
        { type: "mc", title: "Counterargument or refutation?", instr: "Does the sentence present the other side, or answer it?", options: ["Counterargument", "Refutation"],
          items: [
            { q: "Some people argue that school uniforms limit students' creativity.", a: "Counterargument" },
            { q: "However, students can still express themselves through their ideas, hobbies, and work.", a: "Refutation" },
            { q: "Opponents claim that free university would be too expensive for the government.", a: "Counterargument" },
            { q: "Nevertheless, educated citizens usually earn more and pay more taxes in the long run.", a: "Refutation" },
            { q: "It is true that junk food is cheap and popular.", a: "Counterargument" },
            { q: "Even so, schools have a responsibility to protect students' health.", a: "Refutation" }
          ] }
      ] },
    { title: "Faulty logic and if clauses", min: 8,
      goal: "Avoid weak reasoning and use if clauses to show possible results.",
      teach: `<p><b>Avoiding faulty logic</b> — these errors make an argument weak:</p>
<table class="mini"><tr><th>Error</th><th>Example ✗</th></tr>
<tr><td><b>Hasty generalization</b> (too few examples)</td><td>My cousin hated online classes, so online classes don't work.</td></tr>
<tr><td><b>Either/or</b> (only two options)</td><td>Either we ban all cars, or the city will die.</td></tr>
<tr><td><b>Slippery slope</b> (one step → disaster)</td><td>If we allow phones in class, soon nobody will study.</td></tr>
<tr><td><b>Bandwagon</b> (everyone does it)</td><td>Everyone is buying this phone, so it is the best.</td></tr>
<tr><td><b>Attacking the person</b></td><td>Don't listen to him; he never finished school.</td></tr></table>
<p><b>If clauses</b> show results: <b>real / possible</b> — <i>If + present, will / can / may</i>: <i>If schools <b>sell</b> healthy food, students <b>will</b> eat better.</i><br>
<b>Unreal / hypothetical</b> — <i>If + past, would / could / might</i>: <i>If university <b>were</b> free, more students <b>would</b> attend.</i> Never use <i>will</i> or <i>would</i> in the if clause.</p>`,
      acts: [
        { type: "mc", title: "Name the faulty logic", instr: "What kind of faulty logic does each sentence show?", options: ["Hasty generalization", "Either/or", "Slippery slope", "Bandwagon", "Attacking the person"],
          items: [
            { q: "My friend got sick after eating at that market, so all street food is dangerous.", a: "Hasty generalization" },
            { q: "Either we ban all junk food, or every child in Mexico will be sick.", a: "Either/or" },
            { q: "If we let students choose their classes, they will stop studying, and soon universities will close.", a: "Slippery slope" },
            { q: "Millions of people use this app, so it must be safe.", a: "Bandwagon" },
            { q: "We shouldn't accept her ideas about education because she is too young.", a: "Attacking the person" }
          ] },
        { type: "gap", title: "If clauses", instr: "Write the correct form of the verb in parentheses.",
          items: [
            "If schools [[sold]] (sell) only healthy food, students would eat better.",
            "If cities ban cars from the center, the air [[will improve|will be cleaner|can improve|may improve]] (improve).",
            "If I [[were|was]] (be) the mayor, I would build more bike lanes.",
            "If university [[were|was]] (be) free, more young people would study.",
            "If voting were mandatory, more young people [[would vote]] (vote).",
            "If the government [[increases]] (increase) the tax on soda, people may drink less of it."
          ] }
      ] },
    { title: "Outline", min: 10,
      goal: "Choose a controversial question, take a position, and outline your argument.",
      acts: [
        { type: "plan", title: "Outline your argument essay", instr: "Topics: Should junk food be banned in schools? · Should university education be free? · Should high school students wear uniforms? · Should voting be mandatory? · or your own controversial question. Body 3 presents the counterargument and your refutation. The examples are for the junk food question.",
          fields: [
            { id: "topic", label: "Your question and position (notes)", ph: "Should junk food be banned in schools? — Yes", note: true },
            { id: "both", label: "Reasons for and against (notes)", ph: "for: health, focus in class, good habits — against: freedom, cheap, students buy it outside", note: true },
            { id: "title", label: "Title", ph: "Healthy Schools, Healthy Students", title: true },
            { id: "hook", label: "I. Introduction — Hook", ph: "In many Mexican schools, a bag of chips and a soda cost less than a piece of fruit." },
            { id: "bg", label: "I. Introduction — Background", ph: "As a result, millions of children start their day with sugar instead of real food, and doctors are worried about the rise in childhood obesity." },
            { id: "thesis", label: "I. Introduction — Thesis statement (position + reasons)", ph: "Schools should ban junk food because it damages students' health, affects their concentration, and teaches bad habits." },
            { id: "b1", label: "II. Body 1 — Reason 1: topic sentence", ph: "First, junk food can seriously damage students' health.", newPara: true },
            { id: "b1s", label: "II. Body 1 — Evidence and explanation", ph: "Products with high amounts of sugar and salt may contribute to obesity and diabetes. If schools offered fruit and water instead, students would develop healthier bodies." },
            { id: "b2", label: "III. Body 2 — Reason 2: topic sentence", ph: "In addition, a healthy diet could improve students' concentration in class.", newPara: true },
            { id: "b2s", label: "III. Body 2 — Evidence and explanation", ph: "After a sugary snack, energy rises quickly and then falls. As a result, many students feel tired in the middle of the morning, which makes learning more difficult." },
            { id: "b3", label: "IV. Body 3 — Counterargument", ph: "Opponents argue that a ban would limit students' freedom to choose what they eat.", newPara: true },
            { id: "b3s", label: "IV. Body 3 — Refutation", ph: "It is true that freedom is important. However, schools already make many rules to protect students, and healthy food is a valid part of that responsibility." },
            { id: "c1", label: "V. Conclusion — Restate your position", ph: "In conclusion, schools should stop selling junk food to protect students' health, concentration, and future habits.", newPara: true },
            { id: "c2", label: "V. Conclusion — Final thought (suggestion or prediction)", ph: "If every school made this change, the next generation might grow up healthier than ours." }
          ] }
      ] },
    { title: "Write & check", min: 13,
      goal: "Write your argument essay, check it, and save it.",
      acts: [
        { type: "write", title: "My argument essay",
          instr: "Build your first draft from your outline, then develop each paragraph with evidence and examples. Leave an empty line between paragraphs.",
          moves: ["Title.", "Introduction: hook, background, thesis with a clear position.", "Two body paragraphs with reasons and evidence.", "One body paragraph with a counterargument and your refutation.", "Modals to control your tone, if clauses, no faulty logic.", "Conclusion: restate your position and end with a suggestion or prediction."],
          minWords: 300, maxWords: 550,
          rubric: [
            { type: "title", pts: 1 },
            { type: "paras", min: 5, pts: 1 },
            { type: "thesis", pts: 1, re: "\\b(should|must|ought to|need to|it is (essential|necessary|important)|believe|because)\\b", tip: "Your thesis should state a clear position: … should … because …" },
            { type: "paraLen", min: 3, pts: 1 },
            { type: "has", re: "\\b(should|must|might|may|could|would|can|ought to)\\b", min: 5, pts: 1, label: "Modals to control your tone", tip: "Use modals to control your tone: should, may, could, would, must." },
            { type: "has", re: "\\b(some people (argue|believe|say|claim|think)|opponents|critics|others (argue|claim|believe|say)|it is true that|one might argue|people who disagree)\\b", min: 1, pts: 1, label: "Counterargument", tip: "Present the other side: Opponents argue that … / Some people believe that …" },
            { type: "has", re: "\\b(however|nevertheless|even so|nonetheless|this argument (ignores|is|does)|in fact|on the other hand)\\b", min: 1, pts: 1, label: "Refutation", tip: "Answer the other side: However, … / Nevertheless, … / This argument ignores …" },
            { type: "has", re: "\\bif\\b", min: 2, pts: 1, label: "If clauses", tip: "Use at least two if clauses to show possible results: If schools …, students would …" },
            { type: "few", re: "\\b(everyone knows|everybody knows|all (people|students|teenagers|young people|parents|teachers|politicians) (are|know|think|want|hate|love)|the only (solution|way)|obviously|no one can deny|nobody can deny)\\b", max: 0, pts: 1, label: "Avoid faulty logic", ok: "No exaggerated or illogical claims found.", tip: "Avoid exaggerated claims (Everyone knows…, All students are…, the only solution). Use careful modals instead." },
            { type: "lastPara", re: "\\b(in conclusion|to sum up|in summary|to conclude|overall|for these reasons)\\b", pts: 1, label: "Conclusion paragraph", tip: "Begin your last paragraph with In conclusion, … and restate your position." }
          ],
          checklist: ["My thesis states a clear position on a controversial question.", "My reasons are supported by evidence and examples.", "I presented a counterargument fairly and refuted it.", "I used modals to control my tone and avoided faulty logic.", "I used if clauses correctly, and my conclusion restates my position."] }
      ] }
  ]
}
];
