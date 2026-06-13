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

### Production-cost gate before round count

A May 18 newcomer thread turned the low-and-slow checklist into a practical pre-run gate. alancrean asked how many rounds to run, Fronk said **1,000 rounds** is his own reference if the wallet can afford it, and alancrean chose **500 rounds**. The durable lesson is not the exact number. It is the order of operations:

1. decide how much SOL the session may risk;
2. translate that into expected rounds at the chosen per-tile size;
3. check ore.fyi production cost against ORE spot price;
4. keep watching because production cost moves with ORE price, SOL price, miner count, and tile competition.

If production cost is at or above ORE spot, the default beginner answer is to pause, buy ORE directly, or wait for a cleaner window. Fronk's caveat matters too: a miner with a strong near-term ORE thesis may accept a higher production cost to accumulate faster. That is not automatically wrong, but it should be labeled as conviction-based accumulation rather than “good EV mining.”

Reusable command snippet:

```text
!prodcheck — Before starting, compare ore.fyi production cost with live ORE price. If production cost is at or above spot, mining may be worse than buying unless you are deliberately paying for uORE yield, learning, or jackpot variance. If you still mine from conviction, size it as a thesis, not a reflex.
```

### Time in the mines beats oversized sprints

A May 17 sizing thread gave the low-and-slow method one of its clearest explanations. When a new miner asked whether larger all-block deployments could still lose money, OREillions pointed at variance and runway: a small miner who goes hard may finish in **100 rounds** and miss the solo/top-miner outcomes, while a smaller setup that survives **10,000 rounds** creates better learning data and gives uORE patience time to matter.

Use this as the beginner sizing rule:

- all 25 tiles reduces tile-picking variance, but it does not remove variance;
- the **10% protocol fee plus 1% admin fee** hits deployment regardless of size;
- larger size is only safer if the bankroll is genuinely whale-sized;
- if the balance is small, reduce per-round size first — examples discussed included stepping down toward `0.0005` or even `0.00005` where appropriate;
- judge the plan by expected runway and production cost, not by how impressive the deployment looks.

The best low-and-slow setup is boring enough to repeat after a bad stretch. If a missed top-miner run would make the miner rage-claim, the size is too big.

### Dust fallback when stricter filters are quiet

A later May 17 thread clarified a useful advanced-but-beginner-readable pattern: some miners keep a tiny full-grid fallback running when their stricter positive-EV or “discount” strategy is not firing. The example discussed was around `0.00005` per tile — not because that number is magic, but because it is small enough to buy time.

Teach it as a fallback, not a hack:

- keep all-grid coverage if the goal is patient accumulation and learning;
- expect thousands of rounds before judging the setup, not 1,000 tries and a verdict;
- auto-reload can reduce manual friction, but the SOL budget still needs a cap;
- if the motherlode is large and production cost spikes, dust may be the only size that keeps the miner from emotional chasing;
- when stricter EV filters resume firing, keep the logs separate so fallback performance does not get confused with the main strategy.

The rule of thumb: dust fallback is for staying in the game and collecting data while waiting for better windows. It is not permission to leave an uncapped miner running blindly.

### Tiny-deploy +1 proof points

A June 9 analytics question sharpened a useful teaching distinction. Jody asked whether anyone could find the lowest recent total deployment that still earned a `+1`; the room did not have an easy lookup, but zepipes added a live field note: **0.0176 SOL total deployed across 15 blocks** had just hit a `+1`.

Teach this as proof of participation, not proof of a magic setting:

- tiny miners can still show up in the result distribution;
- low total deploy buys runway and learning time, which is the real beginner edge;
- the `+1` result needs context before it becomes strategy evidence: tile count, round count, production cost, fees, session length, and whether the miner could repeat the setup calmly;
- a single tiny hit is encouraging lore, but a logged tiny session is education.

When a newcomer asks "what is the lowest deploy that can win," answer with curiosity and caution: yes, small can hit, but the useful question is whether the size can survive enough rounds to make the miner smarter.

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

### Cragglebear 13-tile ramp tests

BREADFAN777's later field note added a useful watched-risk example: a **13-tile** setup around **0.05-0.15 SOL per round** can produce good sessions when the board cooperates, but it should be sized like a test before it is sized like conviction. Cragglebear framed **0.05 SOL per round** as a practical start point: not too painful if the setup fails, but still meaningful if the run develops.

Use this as an escalation rule, not a beginner recipe:

- start at the low end before ramping;
- watch production cost, tile crowding, top-miner texture, and return quality;
- ramp only after live conditions support the thesis;
- write the stop rule before the run starts;
- if the miner cannot actively monitor it, return to broader coverage and lower size.

The durable lesson is BREADFAN777's operating discipline: going hard straight away has been unkind enough times. Partial-grid mining should buy information first and only then buy more exposure.

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

### Weighted odds are not suspicious by themselves

A May 16 channel question produced a clean beginner math lesson: if one address wins “too often,” first check how much that address is deploying relative to the round. ORE mining rewards are weighted by deployment size on the relevant competition, not equally distributed across all visible wallets.

Fronk's concrete shorthand is useful: if a miner deploys **2 SOL** in a round where total deployment is about **20 SOL**, a roughly **10%** hit/share rate is not strange — it is the expected shape of weighted odds.

Teach it this way:

- do not judge fairness from wallet count alone; compare deploy size against total deploy;
- repeated wins can be normal when one miner contributes a large share of the round;
- bigger deploys buy more expected share, but they also burn runway faster;
- tiny deploys can survive longer, but fees and tooling overhead create practical dust limits;
- “weighted odds” explains why size matters, not why beginners should oversize.

The beginner-safe takeaway stays the same: pick the bankroll and runway first, then size the miner so the expected share does not bankrupt the session before variance has time to work.

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

### Claim boundary before staking mined rewards

The June 13 mining chat added a useful clarification for long-hold uORE miners: staking/refined-reward actions require the miner to pass through the claim path first. If the reward is still unclaimed in the mines, the miner is not simultaneously staking that same reward.

That distinction keeps the sleeves clean:

- uORE left in the mines is a patience/yield position;
- rORE or ORE prepared for staking is a post-claim position;
- moving from one sleeve to the other should be a deliberate claim decision, not a reflex to make the reward "do something";
- compare the claim cost, current uORE/refinement thesis, staking yield, and liquidity need before switching.

Reusable command snippet:

```text
!rorestake - You cannot stake rORE from the mines while leaving that same reward unclaimed as uORE. To stake or use the reward, plan the claim path first; if you want the uORE patience thesis, leave it unclaimed and track claim fee, APR/refinement, and liquidity needs before changing sleeves.
```

### Rotating staked ORE into mining SOL

Hermes' back-to-back green hits created the natural temptation to sell or unstake ORE and refill the mining budget. That temptation is understandable: when a miner finally feels the “mines are alive,” every inactive ORE position can start looking like unused ammunition.

The safer strategy is to treat staking, uORE holding, and mining as separate sleeves:

- keep the long-term ORE/uORE core intact unless the thesis changes;
- fund mining from a pre-defined SOL budget rather than from post-win excitement;
- if rotating stORE/ORE into SOL, do it gradually so a pump does not leave the miner underexposed;
- check ore.fyi before increasing deploy size, because a good personal streak can happen on a worsening board;
- log whether the new mining budget came from fresh SOL, claimed rewards, or reduced holder exposure.

RNA's caution belongs here: do not swap the whole holder position into mining fuel just because the last few rounds felt good. A miner can want more ORE exposure and still decide that the best next action is staking, holding uORE, waiting for production cost to improve, or mining only with a small SOL sleeve.

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

The May 15 “big motherlode fatigue” thread adds the emotional version of the same lesson. When a jackpot pushes toward 400 ORE, the room can get loud: some miners want it to hit now so they can mine normally again, others want a larger headline, and jokes about exact numbers like 420.69 become part of the ritual. That is fun community lore, but it is also a warning sign for strategy. A giant visible prize can increase claims, crowd tiles, lift production cost, and make miners size from impatience instead of budget.

Teach the filter this way: **bigger ML means more attention, not automatically better EV.** If a miner is already tired of waiting, their next action should be smaller and more rules-based, not larger and more emotional.

Cragglebear's May 22 comparison between a good motherlode hunt and a bad one makes the lesson more concrete. Starting around the 200 ORE zone can be a reasonable data-gathering window for an experienced hunter, but the same session can turn against the miner if the board changes underneath them. In his post-mortem, the early stretch still looked playable; later, top-miner hits dried up, more miners and larger deploys arrived, and the loss came from continuing after the environment shifted.

That is the live-session version of dilution risk:

- do not judge a motherlode chase from the first favorable slice;
- partial-grid setups such as 13 tiles can swing hard once the sample gets longer;
- compare early and late session conditions instead of averaging the whole run into one feeling;
- write down the point where the test becomes a chase, especially around the 300-350 ORE excitement zone;
- if the session thesis becomes “it just needs to hit soon,” stop or shrink before sunk-cost logic takes over.

### The “I came this far” stop-rule test

A late May 20 waiting-room exchange turned the emotional side into a reusable rule. firebladeXT3 joked that the motherlode was “edging” him, worried about running out of SOL, then said the dangerous quiet part: **“I've came this far. No point stopping now.”** Diggy and BREADFAN recognized it immediately because every gambler/miner has felt that pull.

Use that phrase as a stop-rule trigger, not as motivation:

- past SOL spend is already gone; it does not make the next round cheaper or more likely to hit;
- if the remaining wallet cannot survive the miss, shrink or stop before the board makes the decision for you;
- write the chase budget before the motherlode gets emotionally loud;
- if continuing is still valid, it should be because current production cost, tile crowding, and remaining runway fit the plan — not because quitting feels embarrassing;
- if the plan has become “please hit before I run out,” the strategy has already turned into entertainment/risk capital.

This is one of the best campfire lessons for Thep's hub: miners can laugh about the pain, but the Almanac should translate the joke into a wallet-protection habit.

The next-morning follow-up matters too. When the same chase becomes “not looking good” and the room answers with a sympathetic “F,” treat that as the review prompt: log what the original budget was, where the stop rule should have fired, how much runway remained, and whether the next chase needs a smaller size or a hard no-mining window.

The May 22 copy-paste follow-up adds another trigger: when multiple miners repeat the same “on a roll” chase line, the emotion has moved from one wallet into group lore. That is exactly when the strategy needs to get colder. A hot streak can justify logging results and asking what changed; it does not justify replacing the cap with “at any cost.”

The later morning reset added a calmer veteran phrase: **“Just pace yourself and be aware of the ML.”** That is the friendlier version of the same rule. Awareness does not mean staring at the jackpot until it talks you into one more oversized round. It means noticing when the motherlode is changing the room — more popcorn, more jokes about record dry spells, more people asking how high the ML has ever gone — and deliberately slowing the next decision down.

Teach “pace yourself” as a three-part checkpoint:

- know the current motherlode, but do not let the headline number set your budget;
- when the room starts watching history happen, reduce emotional sizing rather than increasing it;
- if you join during a possible dry-spell / record-watch moment, write the exit before the first block.

The lore question itself is useful for storytelling. A “777” motherlode record answer gives the Almanac campfire texture, but the education hook is sharper: historic numbers are fun to remember and dangerous to chase without a runway.

### Testing motherlode-size filters

Willd's next-test idea gives this section a cleaner research loop: split mining results by motherlode bands, for example **0-75**, **75-150**, **150-250**, and **250+ ORE**, then compare cost basis and reward source by band instead of arguing from memory. Cragglebear's response adds the caution: split rounds may deteriorate above roughly 200 ORE as competition increases, while top-miner outcomes can still look random rather than neatly tied to low-motherlode windows.

A May 22 follow-up sharpened the tooling layer around that idea. Cragglebear said his deeper motherlode read comes from his own test tracker and a full all-motherlode backtest he has summarized publicly, while ore-stats is still the best public tool for miners checking their own round history. Teach that distinction clearly: use public tools to verify personal sessions, use veteran backtests to frame better questions, and do not treat a private dashboard summary as a copy-paste strategy.

A May 24 chart prompt added the public-history version: when miners ask who can spot the days where the motherlode was **over 400 ORE**, the right Almanac move is to turn nostalgia into labels. Mark the day, the approximate jackpot band, miner count, production-cost backdrop, and whether the room felt calm or crowded. RNA's follow-up that miners were “again above 300” is the heat check. High-ML history helps miners compare regimes; it does not make today's round owed.

Use this as an experiment design, not a shortcut:

- tag each session with the motherlode band at entry;
- tag miner-count / crowding context when the jackpot is historically large;
- separate top-miner wins, split rewards, and motherlode hits;
- record total deployed SOL and production cost, not only ORE won;
- expect high-motherlode bands to attract more hunters and dilute clean split-round economics;
- do not assume low motherlode automatically means top-miner edge — fewer chasers can help, but randomness still matters;
- write down whether the source was ore-stats, ore.fyi, hawg.win, a private tracker, or a manual session log;
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

### Positive-EV green windows

Cubs' May 16 line — “the mines are paying me SOL to mine ORE” — is a sticky way to describe a favorable EV-filtered session. Returned SOL can lengthen runway while the miner accumulates ORE/uORE, which is exactly why miners build filters, dashboards, and autominer rules.

Teach it carefully:

- a green EV window rewards preparation, not impulse;
- the miner should already know tile count, deploy size, stop rules, and total budget before the filter fires;
- returned SOL can extend runway, but it should not erase accounting for fees, failed txs, and crowding;
- if production cost rises or the board crowds, the correct move can be to stop while the session is ahead;
- log why the window was green so the next session improves from evidence instead of vibes.

The reusable line: **green EV is a permission to execute the plan, not a permission to abandon the plan.**

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

### Motherlode share math: winning-tile percentage beats total spread

A May 18 beginner asked the right simple-math question: if a miner has **0.01 SOL** on a block and the motherlode is **150 ORE**, what do they receive? Madhatt3r and Hermes turned it into the reusable formula lesson. The missing variables are the motherlode size and the **total SOL deployed on the winning tile**. Your payout is your percentage of that winning-tile deploy.

That means tile spread and payout share answer different questions:

- covering more tiles increases the chance you are present on the winning tile;
- once a specific tile wins, your share is based on how much you had on that tile versus everyone else on that tile;
- “all tiles with 0.001” is easier to reason about as a beginner, but it does not make the winning tile pay you for the other 24 tiles;
- late-crowded motherlodes can dilute a correct setup if the winning tile is packed;
- if the miner wants a payout estimate, ask for ML size, their SOL on the winning tile, and total SOL on that winning tile before giving a number.

Reusable command snippet:

```text
!mlshare — Motherlode payout depends on your share of deploy on the winning tile. You need the ML size and total SOL deployed on that tile to estimate your cut. Covering more tiles changes the chance you are on the winning tile; it does not increase your percentage once a specific tile wins.
```

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

### Five-of-25 low-square questions

A June 12 miner asked the right partial-grid question: what does the risk/reward look like if a 5/25 setup hits, especially when looking at returned SOL rather than only ORE? Keep that question in the strategy library because it forces the missing inputs into the open before anyone copies a low-square preset.

The first-pass math is coverage. Five selected tiles means the miner is present on about **20%** of possible winning tiles over enough rounds and absent on about **80%**. If one of the selected tiles wins, the result still depends on the live round:

- SOL per selected tile;
- total SOL deployed on the winning tile;
- whether the reward was split, solo/top-miner, motherlode, returned SOL, or some combination;
- production cost and fees during the run;
- how many blank rounds the budget can survive before the hit.

Teach 5/25 as a watched experiment, not an unattended beginner default. It can be a real question for a miner who understands tile variance and logs results carefully. It is not a shortcut around the core rule: fewer tiles mean more missed winners, so the bankroll and stop rule must be stronger, not weaker.

---

## Post-run diagnostics: production cost before variance blame

RektAlotCrypto's May 17 report is the clean post-run checklist in story form: 10 SOL deployed over two runs, full-grid coverage, 0.002 SOL per block, auto-reload on, one motherlode caught, and 6.91 unrefined ORE returned. The useful answer was not just “good” or “bad.” Deflation pointed back to the environment: the prior couple days had high production cost, with one peak around $140/ORE, so the result made sense before blaming unlucky variance.

Use this order when reviewing a completed session:

- confirm tile count first, because fewer tiles add missed-round variance;
- compare the run window to ore.fyi production cost, not only current spot price after the fact;
- separate SOL returned, uORE earned, top-miner hits, and motherlode exposure;
- decide whether the miner was trying to learn, accumulate uORE patiently, chase ML variance, or simply get spot ORE exposure;
- if production cost was far above ORE spot price, buying/staking may have been the cleaner exposure even if the mechanics were executed correctly.

The reusable line: **a mechanically clean run can still be economically expensive if the board was expensive.**

---

## Auto-reload budget math: rounds, runway, and full-grid learning

The May 14 auto-reload thread tightened an important strategy lesson: an autominer setup is not just “how much SOL per round?” It is also **how much total budget is authorized, how many rounds that budget can survive, and whether rewards are recycled into more runway.**

Fronk gave the clean example: if a miner sets **1 SOL per round**, uses **25 tiles**, and selects **10 rounds** with auto-reload on, the miner authorizes **10 SOL total**. If the first round returns about **0.9 SOL**, that SOL is claimed back into the autominer balance, leaving about **9.9 SOL** for future rounds. Auto-reload can lengthen the run, but it does not remove the need to choose a budget and understand the authorization.

FiL's point belongs in the strategy library too: miners learn faster when the interface or command response translates budget into an approximate number of rounds. Cragglebear later sharpened that into a product detail: show an estimated-rounds column when auto-reload is enabled, but haircut the number by a safety buffer so it reads as practical runway instead of a guarantee. A beginner seeing “about 90 rounds after buffer” can reason about variance, while a beginner staring at only SOL inputs may assume the setup is safer or shorter than it is.

Practical framing:

- teach **budget first**, then SOL-per-round, then estimated rounds;
- auto-reload recycles returned SOL into runway, but it is not an infinite-wallet pull;
- full-grid/25-tile mining is still the cleaner beginner baseline;
- anything below full coverage needs stronger variance warnings and a longer sample;
- approximate round counts are educational, not guarantees, because rewards, failures, late-slot misses, fees, and crowding change the actual runtime.

The reusable line: **a miner should know both the spend rate and the runway before pressing start.**

---

## Time in the mines: inverse TWAP thinking and bot-assisted experiments

A May 14 bot-builder thread added a useful strategy metaphor. willd described the clean autominer flow as a kind of **inverse TWAP**: instead of obsessing over the perfect moment to enter, it anchors the miner on staying active for a planned amount of time with a known budget.

That is the right beginner-safe frame. Timing can matter — round crowding, ORE price, production cost, and motherlode size all move — but most miners learn more from controlled repetition than from trying to snipe perfect conditions. A survivable run creates logs. Logs create better settings. Better settings create discipline.

Community-built bots fit the same pattern. deflation's first-day bot experiment used separate wallets per task and only mined when the SOL side looked fully returned or profitable, treating ORE as upside. That may or may not become a durable edge, but the operating discipline is worth preserving:

- isolate each experiment so results are not mixed together;
- name what the bot is testing before scaling it;
- track SOL returned, uORE/ORE earned, misses, top-miner wins, failures, and fees;
- enrich the journal with ore-stats/API data when available;
- use custom boots/dashboards as visibility layers, not as proof of edge;
- do not call a strategy proven after one lucky day.

If a custom dashboard shows uORE growth, task charts, or strategy PnL, it should answer a practical question: what setting changed, what did it cost, what came back, and what will the miner do differently next run? A pretty chart without a decision loop is entertainment; a chart tied to bankroll, tiles, runtime, failed txs, and returned SOL becomes education.

The reusable line: **tools can automate execution, but the edge still comes from budget control, variance patience, and honest logs.**

---

## Micro-deploy 25-tile mining: dust buys runway, not certainty

A May 17 late-session exchange put numbers on the low-and-slow fallback newer miners keep asking about. OGLilsBTC had only about **0.5 SOL** and asked whether a “super duper low” 25-block autominer setup made sense. Fronk gave his own reference point — **0.00015 SOL x 25 tiles** — while making room for other miners to prefer different lotto-style settings.

A June 10 check-in reinforced the same lesson at the even smaller edge of the range. A miner who usually ran around `0.012` tested a `0.0001`-style setting and asked how realistic a hit might be. The useful answer is not a probability promise. It is a runway frame: at that size, the miner is buying time, optionality, and a chance to stay emotionally calm through long blank stretches.

The important lesson is not that `0.00015` is a magic number. It is a sizing philosophy:

- keep **25 tiles** when the goal is to remove tile-selection misses from the beginner equation;
- lower SOL per tile until the wallet can survive many attempts;
- accept that the dust setup is mostly a **solo/top-miner lottery plus uORE accumulation** strategy;
- do not scale a tiny-wallet setting upward just because someone else runs more miners or has a larger bankroll;
- ask “how many rounds can I survive after fees?” before asking “can I optimize this?”

When OGLilsBTC asked whether the goal of dust mining is to hit solo, the answer was simply yes. That should be paired with patience: a solo/top-miner hit is the upside event, but the strategy only makes sense when the miner can afford the long blank stretches between hits.

Reusable command snippet:

```text
!dust25 — A tiny 25-tile setup is for runway and solo/top-miner optionality, not guaranteed profit. Example community settings can be around 0.00015 SOL per tile, but size from your own wallet: keep all tiles if learning, shrink per-tile spend until you can survive many rounds, and expect long blank stretches.

!microdust — 0.0001 SOL per tile is an extreme runway setting, not a quick-win preset. It can hit, and small miners have caught wins there, but judge it by rounds survived, fee drag, production cost, and patience. If you need fast feedback, size up only inside a written budget.
```

### Personal cost basis and top-miner runway

A May 18 follow-up added a beginner-friendly way to journal small-wallet sessions. OGLilsBTC described spending about **0.2 SOL** for about **0.2 ORE** and called it a personal production cost near **1:1**. That is exactly the kind of rough log a new miner should write down — as long as they do not stop there.

The better log includes:

- SOL spent and ORE/uORE received;
- whether rewards came from split rewards, top-miner wins, motherlode, or uORE held;
- live ore.fyi production cost and board crowding;
- fees and failed/late transactions;
- whether the session was meant for learning, uORE accumulation, or top-miner variance.

Yorter added the hard expectation reset: even when the apparent mining price is around **1 ORE/SOL**, a miner may need around **2 SOL on average** to catch a top-miner-style result, and can still go **3-4 SOL** cold. For small wallets, the conclusion is simple: top-miner optionality is only useful if the deploy size leaves enough runway to survive the miss streak.

Reusable command snippet:

```text
!tmrunway — Top-miner attempts need runway. Even if the board feels near 1 ORE/SOL, catching a top-miner-style outcome can average multiple SOL and still run 3-4 SOL cold. If your wallet cannot survive that blank stretch, lower size or stay in low-and-slow accumulation mode.
```

---

## Heat checks: when the mines get crowded again

RNA's May 19 field note — “Been mining all day. Now stopping. Mines are heating up, again.” — is a clean strategy reminder: a good session can end because conditions changed, not because conviction disappeared. “Low and slow” does not mean always-on at any cost. It means the miner checks the board, production cost, crowding, and wallet runway, then lets the plan breathe.

The beginner-safe pattern:

- mine tiny and broad while conditions are playable;
- watch ore.fyi / production-cost context instead of vibes alone;
- if the board heats up, pause or reduce size before the session turns emotional;
- restart when the numbers fit the budget again.

Reusable command snippet:

```text
!heatcheck — If the mines are heating up, do not force the same size just because you were mining earlier. Check ore.fyi, production cost, tile crowding, and wallet runway. Pausing or shrinking during hot/crowded windows is discipline, not quitting.
```

---

## Two-wallet strategy experiments: compare carefully, then ask publicly

A May 19 newcomer thread turned a simple idea into a good testing habit: using two wallets to compare strategies can be useful, but only if the miner keeps the experiment honest. Two wallets do not remove variance. They just make it easier to separate logs.

If you test two approaches side by side:

- fund each wallet with a budget you can afford to lose;
- label the purpose before starting, such as low-and-slow 25 tiles vs. a tighter thesis;
- run long enough that one lucky or unlucky round does not decide the verdict;
- track production cost, tile crowding, SOL deployed, SOL returned, uORE/ORE earned, fees, failed transactions, and motherlode context;
- keep both tests small until the logs show a repeatable lesson;
- bring the data back to the mining channel and ask for critique before scaling.

Fronk's answer is the culture in one line: share your strategy thoughts in public and let experienced miners sanity-check them. The channel is not only for flexes; it is a peer-review desk.

Reusable command snippet:

```text
!wallettest — Two wallets can help compare strategies, but variance is still huge. Label each test, keep both budgets tiny, log production cost/SOL returned/uORE earned/fees/fails, and run enough rounds before judging. Share the results in-channel for sanity checks before scaling.
```

---

## Bankroll-first low-and-slow: read losses by runway, not one result

A May 20 thread captured a common new-miner checkpoint: OGLilsBTC had run **0.0005 SOL across 25 blocks** and felt the pain of roughly **0.2 SOL deployed for about 0.06 ORE**. Deflation's answer kept the lesson in the right frame: the immediate loss is less important than whether the miner sized the strategy for enough deploys to let low-variance accumulation work.

The useful translation for Thep's education hub:

- 25 tiles reduces tile-selection variance, but it does not remove mining variance;
- a 0.0005 SOL/block full-grid run is still **0.0125 SOL per round** before fees and reload behavior;
- the miner should decide the bankroll/runway first, then pick SOL-per-block;
- if the plan only survives a handful of rounds, it is not really “low and slow”;
- compare the run with live production cost and uORE/refinement goals before calling the setting broken.

Deflation's line — “the importance is more the bankroll than what you have lost” — is the durable beginner lesson. Loss screenshots are post-mortems; bankroll planning is the prevention.

The next field note gives the positive version of the same habit. Zen reported a **1 SOL** test that returned about **2 ORE** from solo wins plus motherlode exposure, and FiL's answer was simply that the result was good. The Almanac should use that as a reminder not to flatten every session into “profit/loss.” A clean review tags *where* rewards came from — solo/top-miner wins, split rewards, motherlode, uORE held, fees, and live production cost — before deciding whether the settings were actually repeatable.

Reusable command snippet:

```text
!bankrollfirst — A 25-tile setup lowers tile-picking variance, but it still needs runway. Pick the total SOL you can afford, divide by SOL per round, and ask whether the plan survives enough deploys to learn anything. Judge results against ore.fyi production cost, uORE goals, fees, and runway — not one painful slice.
```

A later BREADFAN777 note added the clean operating split: low deploy can sit around the `0.00025-0.0005 SOL/block` zone when the goal is long-run exposure, while riskier partial-grid sizing belongs in the watched-session bucket. His example was **0.007 SOL/block across 13 blocks**, with active monitoring and a clear willingness to stop if a cold streak appears. The unattended rule is the opposite: if the miner will be away, broaden back to **25 tiles** and keep the per-block size low enough that silence does not become runaway risk.

```text
!watchedrisk — Higher deploy or fewer-tile setups are watched-session tools, not set-and-forget defaults. If you are actively monitoring, you can test a riskier size with stop rules. If you are unattended, use broader coverage, lower per-block spend, and a pre-funded budget boundary.
```

---

## Goal-first mining: pause when the board gets hot

Navigator's May 20 morning note is a strong strategy checkpoint for small and medium miners. A motherlode can be exciting without being a good entry. When the board is already showing large deploys — the kind of window where miners are talking about **15, 18, or 20 SOL** chasing a moderate motherlode — the safer question is not “can I still get lucky?” It is “does this still match my goal?”

The answer changes by miner type:

- a patient uORE accumulator may be better off shrinking or waiting when production cost heats up;
- a motherlode hunter can choose to chase, but should label it as jackpot variance, not steady accumulation;
- a small wallet should not copy big-gambler behavior just because the chat is excited;
- a miner who missed the last two hits should be especially careful not to resize from FOMO.

JessieBlackMan's follow-up beginner questions made the rule easy to teach: lower deployment pressure usually means cheaper mining, and ore.fyi is the first check. Production cost can sit below spot in calmer windows, but if ORE price climbs and attention follows, SOL deployment often climbs too. The window changes; the plan has to be allowed to pause.

Reusable command snippet:

```text
!goalfirst — Before chasing a motherlode, name the goal: uORE accumulation, learning, top-miner variance, or jackpot hunting. If production cost/deploys are hot, small and medium miners can pause or shrink instead of copying big gamblers. Check ore.fyi first; FOMO is not a strategy.
```


---

## SOL-weighted rewards: bigger size is bigger risk, not a shortcut

The May 20 afternoon thread turned a newcomer's profit question into a clean sizing lesson. ORE mining is weighted by SOL deployed: a miner who deploys more has a larger share of split rewards and a better shot at solo/top-miner outcomes. But the same choice also spends more SOL every round. The lever cuts both ways.

Kriptikz's large-wallet anecdote is the right warning label. In a **200+ wallet** experiment, some wallets got lucky quickly, but nearly all did not; after three weeks the aggregate result was only slightly above production cost. That is exactly why the Almanac should teach miners to judge the whole test, not the wallet that hit early.

When a newcomer asks for the “best point,” answer in this order:

- check current production cost against spot and the miner's goal;
- decide whether the goal is uORE accumulation, solo/top-miner variance, motherlode hunting, or learning;
- size total bankroll first, then per-round SOL;
- remember that more SOL buys more weight and more risk at the same time;
- treat pool mining as a different lane with shared rewards, fees, and product-specific assumptions;
- review the full run across time, not the luckiest wallet or round.

Reusable command snippet:

```text
!weighted — ORE mining rewards are weighted by SOL deployed. More SOL can mean a bigger split share and better solo/top-miner odds, but it also burns more SOL per round. Size is a risk lever, not magic alpha.
```

---

## Update — 2026-05-25: default lane before advanced lanes

The May 25 education thread added a clean onboarding sequence for strategy content: teach the low-drama default first, then let miners graduate into riskier behavior only after they can explain what is happening.

The beginner lane should look like this:

- choose a calmer or lower-motherlode window instead of entering during maximum crowd excitement;
- use all **25 tiles** so the lesson starts with coverage rather than tile-picking anxiety;
- deploy low enough per round that the miner can watch many rounds without panic;
- explain the SOL charge and the buyback component before the miner mistakes every cost for leakage;
- show the difference between solo/top-miner wins, split rewards, and motherlode participation;
- compare production cost against market price, then decide whether the session is for learning, uORE accumulation, or active hunting.

The more advanced framing came from CryptyMike's point that ORE mining can be presented as a sophisticated competitive game, not only a beginner tutorial. That belongs after the default lane. A miner who cannot explain 25-tile low deploy, fee stack, production cost, and reward sources is not ready to copy whale-style deployment.

Reusable command snippets:

```text
!25tileonboard — First setup: check ore.fyi, pick a calm window, use all 25 tiles, deploy low enough to survive many rounds, and learn the reward sources before resizing. Graduate only after you can explain your fee stack, production cost, solo/split outcomes, and stop rule.

!splitvsolo — A solo/top-miner hit is concentrated variance; a split is shared reward from deployed weight; a motherlode is the jackpot layer. Track which one paid you before judging the strategy. One green round is not the whole thesis.
```

---

## Update — 2026-05-25: skeptic-proof the default lane

The latest strategy thread sharpened a useful response to the "24 losing squares" critique. The safest education path is to start with the plain default lane, then show why advanced miners may deviate from it.

Default beginner response:

- use all 25 tiles when learning so the miner is not confusing tile-picking variance with protocol mechanics;
- deploy tiny enough to survive many rounds and observe outcomes;
- treat the SOL charge as protocol payment, with the buyback/revenue story explained up front;
- track uORE accumulated and refinement/yield over the intended holding period;
- check production cost on ore.fyi before deploying;
- if production cost is far above spot, buying or waiting can be the better move.

Partial-tile or concentrated strategies can be discussed after that, but they should be framed as advantage-play attempts with sharper drawdowns. They are not the first thing to hand a new miner who is still asking whether the mines are just gambling.

Reusable command snippet:

```text
!skepticproof — The beginner mining lane is not "click 25 squares and hope." It is tiny 25-tile deployment, production-cost checks, uORE accumulation, and patience with the protocol revenue/buyback loop. If production cost is far above spot or you cannot wait, shrink, pause, or buy spot instead.
```

---

## Update — 2026-05-25: when easy-mode mining fades

Suckytrader's later May 25 observation adds a regime-change warning to the strategy library: miners may have had roughly three months where mining below spot price felt common enough to become normal. That is useful history, but it can become a trap if newcomers assume the same conditions are guaranteed.

Teach this as a market-state checklist:

- below-spot production cost is a favorable window, not the default state of the protocol;
- as ORE attention grows, miners can start leading price action, but they can also crowd the board;
- rising uORE demand can make the patience thesis stronger while making cheap entry harder;
- the same 25-tile low-and-slow setup still needs ore.fyi checks, bankroll limits, and a stop rule;
- if the easy window closes, buying/staking/holding can be the cleaner exposure until mining conditions reset.

This makes the education hub stronger because it separates bullishness from execution. A miner can believe uORE is being repriced and still choose not to mine a bad board.

Reusable command snippet:

```text
!easymode — Below-spot mining windows are regimes, not promises. When ORE attention rises, production cost and competition can rise too. Check ore.fyi, size for runway, and be willing to shrink, wait, stake, or buy spot instead of forcing yesterday's easy board.
```

---

## Update — 2026-05-27: bad-day review before resizing

The latest rough-session note adds a practical stop-rule layer to the strategy library. Rick's recap was simple enough to teach from: about **8 SOL** spent for **4.1 ORE**, followed by the feeling that it would take several back-to-back wins to repair the day. That is exactly when miners need a written review process before they touch deploy size again.

When a session feels bad, run the post-session checklist before mining the next window:

- total SOL spent, including fees;
- ORE/uORE mined and whether rewards came from split, top-miner, or motherlode variance;
- live production cost during the session;
- remaining SOL runway at the same settings;
- whether the next trade is part of the plan or just an attempt to win back the day.

The rule is not "never keep mining after a loss." The rule is to make the next session smaller, calmer, or clearly budgeted if the current thesis only works by hitting multiple big wins in a row.

Reusable command snippets:

```text
!badday — A bad day in the mines is a review trigger, not a revenge trigger. Write down SOL spent, ORE/uORE mined, fees, production cost, reward source, and remaining runway before resizing. If you need 3-4 big wins in a row to feel whole, shrink or pause.

!slowsteady — Slow and steady means staying solvent long enough for variance and uORE patience to matter. Size for many rounds, not for making today's loss back in one swing.
```

---

## Update — 2026-06-08: no universal "best" strategy

The latest strategy thread sharpened a useful teaching rule: there is no single best mining setup without context. A preset only becomes a strategy after the miner can name budget, intended round count, production cost, reward goal, and emotional stop rule.

Keep the beginner lane plain:

- start with all 25 tiles when learning;
- keep deploy low enough to mine for many rounds, not only for one exciting window;
- treat motherlode chasing as a higher-burn mode, not the default;
- use team or pool-style mining when the goal is lower variance and partial uORE exposure;
- judge results over thousands of rounds when testing a low-and-slow thesis.

The useful nuance is that low-and-slow is not passive because it is lazy. It is active bankroll management. A miner trying to make variance "even out" needs enough attempts for the math to matter, and most failed strategies are simply too much deploy over too few rounds.

Reusable command snippets:

```text
!beststrategy — There is no universal best ORE mining preset. Name your budget, round target, tile count, production cost, uORE vs ML goal, and stop rule first. A setting without runway is just a screenshot.

!lowandslow10k — Low-and-slow works because it gives variance enough rounds to normalize. Deploy small across the board, track production cost, and think in thousands of rounds, not one hot window.

!teamvariance — If solo variance is too sharp, team or pool-style mining can lower variance and still give partial uORE exposure. Use it as a risk-control tool, not as proof that one wallet should chase bigger deploy.
```
