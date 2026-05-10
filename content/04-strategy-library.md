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

## What NOT to do

- Mine fewer than 25 tiles thinking it's "safer" — it increases variance
- Claim before 1.5 months — the math doesn't work in your favor
- Ignore production cost — mining at a loss is not a strategy
- Deploy all your SOL — keep reserves for gas and emergencies
- Chase motherlodes — they're a bonus, not a strategy

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
