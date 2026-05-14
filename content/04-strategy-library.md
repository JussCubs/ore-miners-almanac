# Strategy Library

These are not financial advice. They are community strategy archetypes extracted from the channel. Every strategy here comes from real miners sharing real approaches in the mining channel. The community believes in open information — the edge isn't in hiding your strategy, it's in executing it consistently.

## Low-and-slow 25 (Fronk Method)

Best for beginners and patient stackers.

- Mine all 25 tiles.
- Use tiny deployment size.
- Let it run over many rounds.
- Check production cost vs ORE price on ore.fyi before each session.
- Optimize for staying power, not adrenaline.
- If production cost exceeds ORE price, pause and wait.

BREADFAN's caution is worth attaching to the default: this is a **zone of relative safety**, not a shield. It only works if the miner stays small enough to put enough rounds in and avoids resizing emotionally after a miss.

> You don't need to win big. You need to win consistently.

## Long-term stacker (David Method)

Best for high-conviction miners who care about uORE exposure.

- Mine 22-25 tiles consistently.
- Never claim uORE — let it compound indefinitely.
- Think in months and years.
- Accept that some rounds will look bad in isolation.
- Let yield (~70-75% APR) and scarcity carry the thesis.
- End goal: borrow against uORE rather than selling.

> Time is your biggest edge. The claim fee is the cost of impatience.

## Strategic claimer (Suckytrader Method)

Best for experienced miners who need some liquidity but want to preserve yield.

- Mine aggressively across multiple wallets.
- Wait at least 1.5 months before any claim (APR offsets the 10% fee by then).
- Claim from one wallet while preserving yield in others.
- Rotate claims across wallets to maintain compounding in most positions.

> The 10% claim fee isn't a penalty if you've earned more than 10% in yield.

## Aggressive accumulator

Best for experienced miners with strong conviction and defined risk limits.

- Increase mining when ORE price is low or production conditions look favorable.
- Track cost basis and round history.
- Still use all 25 tiles — aggression is in volume, not variance.
- Avoid emotional overdeployment.
- Use refinORE/Roberto to manage sessions without constant attention.
- Use multiple wallets only if you understand operational complexity.

> Be aggressive about accumulation, not about risk.

## Tile gambler (know what you're doing)

Best only for people who know they are gambling.

- Mine fewer tiles.
- Accept higher variance.
- Do not confuse "smaller number of tiles" with "safer."
- Budget as if you can lose the round.

### EV-filtered fewer-tile experiments

BREADFAN777 reported a rewarding strat-builder experiment using **11 tiles** with a simple **+10 EV filter**. This belongs under advanced variance, not beginner defaults.

Use this framing when preserving the lesson:

- the edge comes from filtering for positive expected-value conditions, not from fewer tiles magically being safer;
- fewer tiles means more misses and more emotional pressure;
- 10-12 tile setups can increase share per tile for smaller bankrolls when conditions are very good, but they can get wrecked quickly when the board turns;
- the filter should tell you when **not** to mine, not just when to size up;
- test with tiny size first and log the session separately;
- if you cannot explain the EV filter in one sentence, use the low-and-slow 25-tile beginner path instead.

### Big-gambler tailwinds

Deflation's win note — “thanks to the one that gambled that big” — is worth preserving as attribution discipline. Sometimes a miner benefits because a larger entrant changes the payout texture of the round, not because the smaller miner discovered a repeatable edge.

When a screenshot shows a huge percentage win, log the context before copying it:

- which square won;
- how many tiles the miner covered;
- whether a whale or “big gambler” inflated the round;
- total deploy size and transaction failures;
- whether the result was a one-round spike or part of a longer run.

A green board can be a good story and still be bad evidence.

## What NOT to do

- Mine fewer than 25 tiles thinking it's "safer" — it increases variance
- Claim before 1.5 months — the math doesn't work in your favor
- Ignore production cost — mining at a loss is not a strategy
- Deploy all your SOL — keep reserves for gas and emergencies
- Chase motherlodes — they're a bonus, not a strategy
- Confuse a bullish ORE price with a good mining window — price-up can attract more deployment and make easy-mode mining harder

---

## FiL Method — Tiny ladder into 19/25 blocks

Best for miners who want to stay active with a limited SOL budget while avoiding emotional overdeployment.

FiL's shared approach:

- When low on SOL: use very small deploys across 19 blocks.
- As deploy competition rises: consider nudging tiny deploy size upward rather than abandoning discipline.
- With more SOL: use 25 blocks and size anywhere from conservative to more aggressive, depending on risk tolerance.
- If chasing motherlode: recognize it as risky and step size down as SOL falls instead of doubling down emotionally.
- If seeking solo ORE: consider waiting after a motherlode pops, when high-ballers may crowd early rounds.
- Always check ore.fyi before deciding whether conditions justify mining.

This is a budget-control strategy, not a promise of better odds. Its strength is keeping the miner alive long enough for patience to matter.

---

## Fronk command version — 0.00015 x 25

A preserved Fronk command added a useful concrete example to the low-and-slow archetype:

- Run all 25 blocks.
- Keep size tiny — Fronk's example was about `0.00015 SOL x 25`.
- Let the miner run across many rounds instead of judging one board.
- Treat fewer-block play as advantage-seeking variance, not conservative mining.
- Check ore.fyi before starting. If production cost is much higher than ORE's market price, waiting or buying may be cleaner than mining.

This gives beginners a starter shape without pretending it is universal. The size is less important than the discipline: all tiles, small deployment, production-cost awareness, and enough patience for uORE yield to matter.

---

## Cragglebear 10,000-round budget test

Best for miners who want to understand what a week-long, always-on full-grid session can cost before they copy someone else's settings.

Cragglebear's guide used a concrete example: 25 tiles, `0.01 SOL/round`, roughly 10,000 rounds, and a long enough runtime to judge cost basis instead of vibes. The test mined **20.40 uORE** at a shown **$48.63 cost per ORE**, with the flat-price scenario still slightly above breakeven.

The strategy lesson is not “everyone should deploy 0.01.” The lesson is that deploy size is a weekly-budget dial:

- `0.001 SOL/round` over 10,000 rounds implies about **1 SOL** protocol-fee cost.
- `0.005 SOL/round` implies about **5 SOL** fee cost.
- `0.01 SOL/round` implies about **10.5 SOL** fee cost.
- Bigger sizes scale linearly and should be treated as experienced-miner territory.

Use this method when teaching budget control: choose the maximum weekly SOL cost first, then set deploy size. A small miner that survives 10,000 rounds teaches more than an oversized miner that runs out of SOL during a bad stretch.

---

## Cragglebear's logged-data clarification

Cragglebear later clarified that the 10,000-round screenshots were **not a third-party tool** or a product claim. They were manually logged mining-session data shared so other miners could see the rough cost of running a full-grid setup for about a week.

That clarification matters for teaching: treat the screenshots as a community case study, not a calculator. The reusable method is still the same:

- record the settings;
- record the round count;
- separate SOL spent from USD reference value;
- compare cost basis against ORE price;
- then resize the miner before repeating the experiment.

Cragglebear also said he plans to write a longer article on the run. When that lands, fold the article back into this case study without replacing the original channel context.

### 15,000-round follow-up: price movement vs mining edge

Cragglebear's May 13 update extends the same always-on case study past **14,700 rounds** and toward the 15,000-round mark. The headline looked strong at the then-current market price: **25.57 uORE** mined, **$57.07 cost per ORE**, about **$1,459** in SOL/protocol cost, and about **$2,115** in current uORE value. But the most useful teaching detail is the comparison row: at the starting ORE price near **$50.62**, the same run would have shown a small loss; at the later ORE price near **$82.71**, it showed roughly **+$656**.

That makes this a better education story than a victory lap:

- the strategy stayed stable — 25 tiles, about `0.01 SOL/round`, and enough rounds for the distribution to breathe;
- the result benefited from ORE price appreciation, not only from cheaper mining;
- top-miner wins drove most of the mined ORE, with split rounds second and motherlode as smaller upside;
- the weekly-cost table still matters because `0.01 SOL/round` implies around **10.5 SOL** of weekly cost at 10,000 rounds;
- a miner copying the run should first ask whether they can emotionally survive the flat-price scenario.

Use this follow-up to teach attribution. A good miner separates **mining execution** from **market repricing** before deciding to size up.

---

## First-run tiny-budget experiments

OGLilsBTC's first-run report is a useful companion to the low-and-slow strategy because it shows the emotional value of starting small. With only about **$10** available, he kept the session survivable, learned the auto-miner flow, and later reported breaking even in SOL.

Use this as an onboarding story, not as a new default strategy. If the goal is patient accumulation, the Almanac still teaches 25 tiles to reduce selection variance. The reusable strategy lesson is:

- start with a tiny budget while learning the interface;
- do not resize impulsively mid-confusion;
- finish or stop the session safely before changing settings;
- compare the result in SOL and uORE terms;
- scale only after the miner can explain what happened.

A small first run that teaches the miner how to operate the tool is a win even before it becomes a profit story.

---

## Optimal-mining questions are moving-target questions

Deflation asked the question every math-minded newcomer eventually asks: has anyone calculated the optimal way to mine — all tiles, SOL per tile, average loss per ORE, and when to mine or not mine?

Fronk's answer is the reusable strategy frame: the variables constantly move. ORE price changes, total deployed SOL changes, tile competition changes, motherlode size changes, and miner behavior changes. That makes “the optimal strategy” less like a fixed recipe and more like a decision loop.

Beginner-safe loop:

- use all 25 tiles to reduce selection variance;
- keep deployment size low enough to survive many rounds;
- check production cost and ORE price before running;
- treat motherlode as upside variance, not the base plan;
- pause or resize when the board is crowded or production cost looks bad.

Yorter added the sharper tactical version: good miners look for less-deployed tiles and relatively smaller-deployment rounds. That belongs in the advanced context, not as an excuse for beginners to over-optimize. The hard part is not spotting that low competition is better; the hard part is staying disciplined when the board, price, and jackpot keep changing.

> “Optimal” is not a magic tile. It is a repeatable habit: low size, enough coverage, live cost awareness, and the humility to sit out bad conditions.

---

## Seven-day budget table for constant 25-tile mining

Cragglebear shared a cleaner cost-reference screenshot for miners who want to understand what “low and slow” costs before they press start. It assumes roughly **10,000 rounds** over about **7 days**, with **25 tiles**, a **10% protocol fee**, SOL at **$93.80**, and ORE at **$91.44**.

Useful anchor points:

- `0.001 SOL/round` → about **10 SOL deployed**, **1 SOL** protocol cost, roughly **$94** for the week.
- `0.0025 SOL/round` → about **25 SOL deployed**, **2.5 SOL** cost, roughly **$235**.
- `0.005 SOL/round` → about **50 SOL deployed**, **5 SOL** cost, roughly **$469**.
- `0.01 SOL/round` → about **100 SOL deployed**, **10.5 SOL** cost, roughly **$985**.
- `0.05 SOL/round` → about **500 SOL deployed**, **52.5 SOL** cost, roughly **$4,924**.
- `0.10 SOL/round` → about **1,000 SOL deployed**, **105 SOL** cost, roughly **$9,849**.

The teaching value is linear scaling. Pick the weekly SOL cost you can emotionally survive first, then choose deploy size. Do not treat `0.01` as “the” setting; treat it as one reference row in a budget table.

### Parameter-triggered mining and late-round timing

Deflation asked whether it is possible to mine around **20% below market production cost** with a script that only fires when parameters match. The channel answer was nuanced: it can happen, but competition is strong and it is not a guaranteed edge. Removing tiles can improve production cost in the right spot, but it also opens the miner to much higher variance and luck factors.

Reusable strategy frame:

- scripts can enforce discipline, but they do not remove competition;
- fewer tiles can reduce cost basis when correct, but increase miss-rate variance;
- many miners place near the end of the round because late information is more accurate;
- the beginner path stays 25 tiles + tiny size until the miner can explain the variance tradeoff;
- advanced miners should measure sessions, not vibes.

This belongs in the advanced shelf: parameter mining is a timing and variance-control problem, not a magic “always profitable” recipe.

---

## Tool transitions and simulator discipline

The Minemore sunset conversation is useful because it separates tooling from strategy. Diggy wondered whether the end of Minemore would change where people hunt. Cragglebear's read was calm: specific ML filters may disappear, but EV miners and motherlode hunters will migrate to refinORE, Wild's builds, or whatever tool makes the same logic visible again.

Use this as a strategy lesson: do not become loyal to a button. Become loyal to the checklist.

- verify the domain before connecting or funding anything;
- start with a tiny test run when moving tools;
- confirm whether filters, fees, tile selection, stop rules, and account handling match the old workflow;
- keep session logs so a UI change does not erase your learning;
- treat motherlode filters as advanced variance tooling, not a beginner requirement.

Deflation's first simulator adds the companion habit. Simulators can teach why a setting feels good or bad, but they should be treated as training wheels until they match live behavior over many rounds. Include protocol fees, tile competition, motherlode mechanics, and realistic entry timing before trusting the output.

> Tools can make discipline easier. They cannot replace discipline.

---

## Stake-and-mine starter posture

A new miner asked whether it is better to start by mining or staking. Slyseparator gave the clean beginner frame: **do both, but size mining so small that the learning curve cannot hurt you.** Stake the ORE you already have, keep a couple SOL available for mining, and deploy tiny amounts over many rounds instead of trying to force a fast win.

Practical translation:

- staking existing ORE is the passive baseline;
- mining is the active learning loop;
- 25 tiles is still the safest beginner default;
- 13/25 tiles can be a middle step only if the miner understands the added variance;
- `0.001 SOL` per round, or even less, is enough to learn rhythm without turning the first week into a stress test.

The core strategy is not “stake or mine.” It is **stake what you have, mine tiny while learning, and let repetition create the edge.**

---

## Motherlode sweet spots and dilution risk

Cragglebear added a cleaner way to teach motherlode chasing: a larger motherlode can become **less attractive per deployed SOL** once too many hunters crowd in. The headline jackpot grows, but each miner's share can get diluted by production-cost spikes, heavy tile competition, and late “big boy” entries.

His practical read was that some motherlode hunters prefer waiting until the jackpot is meaningful — roughly the **150-250 ORE** zone — before the crowd gets silly. Below that, the prize may not justify the chase. Above that, the visible number can pull in enough competition that the result starts resembling a smaller motherlode with more stress.

Reusable framing:

- low production cost is still the first signal for split-round and top-miner attempts;
- a motherlode size threshold is not a guarantee, just a reason to start watching harder;
- late, huge motherlodes can create runaway competition and bankroll holes;
- budget per week/month decides whether the chase is survivable;
- if LPing or buying looks cleaner during a crowded jackpot, that is a valid non-mining answer.

This belongs in the advanced shelf. Beginners should not hear “150-250 ORE” as permission to overdeploy. They should hear: **even motherlode hunters need a stop rule.**

### Testing motherlode-size filters

Willd's next-test idea gives this section a cleaner research loop: split mining results by motherlode bands, for example **0-75**, **75-150**, **150-250**, and **250+ ORE**, then compare cost basis and reward source by band instead of arguing from memory. Cragglebear's response adds the caution: split rounds may deteriorate above roughly 200 ORE as competition increases, while top-miner outcomes can still look random rather than neatly tied to low-motherlode windows.

Use this as an experiment design, not a shortcut:

- tag each session with the motherlode band at entry;
- separate top-miner wins, split rewards, and motherlode hits;
- record total deployed SOL and production cost, not only ORE won;
- expect high-motherlode bands to attract more hunters and dilute clean split-round economics;
- do not assume low motherlode automatically means top-miner edge — fewer chasers can help, but randomness still matters;
- only turn a band into a filter after many logged sessions.

The useful story for Thep's education hub: “ML filters” are a way to ask better questions. They are not a replacement for bankroll limits, tile discipline, and live cost checks.

---

## Time-of-day production-cost patterns

Deflation noticed lower production cost around certain hours, and Cragglebear confirmed an old channel observation: early Europe mornings have often had an edge for top-miner attempts and lower production cost. The likely reasons are behavioral — miners sleeping, regional activity shifting, and autominers in denser time zones running out of funds.

Teach this as a live-data habit, not superstition:

- compare several days of ore.fyi production-cost snapshots before trusting a window;
- separate normal low-competition periods from motherlode exhaustion dips;
- do not mine a bad board just because the clock says it “should” be good;
- log timezone, motherlode size, production cost, and result if testing a time window;
- use the pattern to decide when to check conditions, not when to blindly deploy.

The useful edge is attention. The dangerous version is turning a time window into a fixed strategy after two lucky days.

## Production-cost tribes: always-on vs discount filters

Deflation asked the question every cost-aware miner eventually asks: **who keeps mining when ore.fyi production cost is higher than simply buying ORE?** Fronk's answer is a useful map of the room.

There are at least three different motivations hiding under the same “mining” button:

- **Always-be-mining stackers** keep sessions running because they value habit, uORE accumulation, and staying in the game more than catching a perfect entry.
- **Motherlode chasers** may accept worse displayed production cost because they are paying for jackpot variance; their demand can push production cost higher for everyone else.
- **Discount-filter miners** wait for conditions where their modeled production cost is meaningfully below spot price — deflation's target was around a **20% discount**.

The education takeaway is not that one tribe is always right. It is that miners should know which game they are playing before they size up. If the plan is uORE accumulation, be honest about hold time and claim friction. If the plan is motherlode hunting, budget it like variance. If the plan is discount mining, be willing to sit out when the filter does not fire.

Reusable checklist:

- check ore.fyi before each session;
- decide whether the session is accumulation, jackpot hunting, or discount-only mining;
- keep deploy size small enough that “no entry” feels acceptable;
- do not copy always-on behavior with a discount-filter bankroll;
- log first wins and low-balance failures so the strategy improves from evidence instead of emotion.

---

## Green-window burst sessions

Navigator's May 12 report gives the Almanac a clean “good conditions” story: after being SOL-constrained for a while, he mined for about an hour and turned **3.4 SOL into 4.44 ORE**, with three solo wins and additional split rewards. Suckytrader's quick read — “Mining is good rn” — captures the channel's live-signal language.

Use this as a field report, not a recipe. A green window is when live conditions make mining feel playable: production cost looks favorable, tile competition is manageable, and the miner has enough bankroll to let the session breathe. It still needs a stop rule.

Teaching frame:

- check ore.fyi before starting and during the run;
- size the session so a cold streak does not wipe the miner out;
- record whether rewards came from solo wins, splits, or motherlode variance;
- do not assume a good hour means the next hour stays good;
- if the board gets crowded or production cost rises, stop with the win instead of feeding it back emotionally.

The strongest lesson is emotional: good windows reward prepared miners, not miners who chase every green candle.

---

## Lottery accounts: making variance your friend

nftimm's lottery-account update gives the Almanac a better way to explain tiny always-on mining. He described a ladder of accounts — one larger account around `0.004 SOL` per block, several around `0.001 SOL` per block, and very small bottom accounts around `0.0001 SOL` per block — with the goal of letting several accounts slowly grind toward their first 1 ORE.

The key phrase is worth preserving: **“give maximum time for variance to be your friend.”** Bigger per-block deploys can produce fast green screenshots, but they also bleed SOL faster. Smaller deploys may feel boring, yet they buy time for many rounds, top-miner luck, and occasional motherlode variance to show up without forcing the miner to quit after one bad stretch.

Use this as a patience strategy, not as a guarantee:

- `0.01 SOL` per block across all blocks can win quickly, but it can also drain a bankroll quickly;
- `0.004 SOL` per block is still meaningful size and should be budgeted as an experienced-miner setting;
- `0.001 SOL` and `0.0001 SOL` per block are better framed as time-buying lottery/learning sizes;
- a miner asking “how long until 1 ORE?” needs a round-count and bankroll answer, not a promise;
- a motherlode share depends on total miner deployment on the winning tile, so no fixed 100-ORE jackpot share exists without knowing the crowd.

Multiple wallets can help separate withdrawal/claim plans, but they do not create a mining edge by themselves. The edge in the story is bankroll survival plus enough attempts for variance to matter.

---

## Dust strategy check-ins

OGLilsBTC asked whether the “dust strat” had changed from **0.001 SOL per round across 25 blocks**. That question is useful because it shows how old shorthand can become dangerous if it turns into a frozen recipe.

The beginner-safe core has not changed: start tiny, cover all 25 tiles, and treat early sessions as education. What does change is the live context around that setting:

- ORE spot price and ore.fyi production cost;
- tile crowding and total deployed SOL;
- motherlode size and how many chasers it attracts;
- whether the miner is trying to learn, accumulate uORE, or force a win;
- the miner's weekly SOL budget.

So `0.001` is best taught as a **learning-size anchor**, not a magic setting. If conditions are poor, even dust can be a bad entry. If conditions are favorable, the correct move is still to size from budget first and avoid emotional “I need to win” scaling.

---

## Tile count as the variance dial

Xenos asked the practical version of every beginner's next question after learning the 25-tile dust setup: what is the sweet spot if a miner wants to drop below full coverage? Cragglebear's answer is worth preserving because it explains tile count as a **variance dial**, not a secret setting.

At **25 tiles**, the miner is mostly paying the protocol drag while avoiding tile-selection variance. Once the miner removes tiles, missed winning tiles become part of the expected result. At **20 tiles**, a miner should expect to miss about **5 of every 25 rounds** over enough attempts. That can be acceptable, but only if the miner sized the run expecting those blank rounds.

Practical framing:

- **25 tiles** is the beginner/learning baseline: lower variance, clearer accounting, mostly protocol-fee drag.
- **20+ tiles** is a reasonable first step down if full coverage is leaking too much SOL.
- **21-22 tiles** can be a safer adjustment if 20 tiles still feels too leaky.
- **13 tiles** can work for experienced miners, but it is explicitly higher risk and depends more on lucky runs.

The teaching line: dropping tiles does not make the miner smarter by itself. It trades cost for variance. Use it only with a bankroll, round count, and stop rule that can survive the extra misses.
