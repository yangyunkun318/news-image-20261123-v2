[![m](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?ref=zhc1s3ge)
[![m](https://make.fun/badge/news-image-20261123/yangyunkun318/news-image-20261123-v2/rank.svg)](https://make.fun/bounty/news-image-20261123?ref=zhc1s3ge)
[![m](https://make.fun/badge/news-image-20261123/yangyunkun318/news-image-20261123-v2/reward.svg)](https://make.fun/bounty/news-image-20261123?ref=zhc1s3ge)

# THE WORLD — 23 November 2026 (second entry)

A magazine-cover style infographic summing up the world's news of
Monday 23 November 2026 in one image (1024x683 PNG). This is a second,
separate entry for the same bounty, with a different design and a
different selection of stories from the first entry.

## The six stories

1. **COP31 COLLAPSES** (hero) — Climate talks in Antalya end with no
   deal after record overtime.
2. **DEMOCRATS WIN THE HOUSE** — 258 seats, the biggest majority
   since 1992.
3. **UKRAINE HITS RUSSIAN SHIPS** — Drones damage the corvette
   Merkury off Libya.
4. **IRAN DOWNS U.S. DRONE** — An MQ-9 Reaper shot down over the
   Strait of Hormuz.
5. **SUDAN DRONE STRIKES** — Homes and a UN building hit in Khartoum.
6. **NATO: NUCLEAR SATELLITE FEAR** — Russia ready to launch an
   armed satellite.

## How it runs

`main.ts` (Node 22, standard library only) copies the pre-rendered
`entry.png` to the output directory, verifying the PNG signature, the
1024x683 dimensions, and that the written bytes match the source:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs produce byte-identical output.
