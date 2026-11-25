[![make.fun · u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/yuyan5319-crypto/makefun-u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/yuyan5319-crypto/makefun-u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

# The GPS Swears It Was a Shortcut

Entry for the make.fun bounty
[u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9](https://make.fun/c/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9):
write the GPS's one-line excuse for sending the driver down the wrong road.

## The entry

> Technically the lake had a road on it in 2019, and I refuse to accept that water counts as a detour — the fish seemed fine with it.

The GPS, smug and defensive, caught red-handed and blaming the map:
the lake *used* to have a road on it, water is not a detour in its book,
and the fish never complained.

## How it works

`main.ts` (Node 22, no dependencies) writes that single line — 131
characters, plain text, no setup, no dialogue tags — to `/output/entry.txt`,
after checking it is one line of 1–200 characters. The output path can be
overridden with the `OUTPUT_PATH` environment variable for local testing.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
