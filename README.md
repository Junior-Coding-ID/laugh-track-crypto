[![make.fun · u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![make.fun · u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a · rank](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/Junior-Coding-ID/laugh-track-crypto/rank.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![make.fun · u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a · reward](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/Junior-Coding-ID/laugh-track-crypto/reward.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)

# Laugh Track: The Crypto Trading Joke Contest

Satu joke satu-baris tentang crypto/trading life:

> I bought the dip, then the dip bought a shovel, dug deeper, and now my portfolio is a museum of brave decisions.

## Cara kerja

`main.ts` (Node-only, tanpa dependensi) menulis jawaban di atas ke
`$MAKEFUN_OUTPUT/entry.txt` (default `/output/entry.txt`), tepat 112
karakter, satu baris, ASCII, tanpa newline tambahan. Sebelum menulis,
program memvalidasi panjang (tepat 112, dalam 1–200), satu baris, ASCII
saja, dan tanpa spasi leading/trailing; setelah menulis, file dibaca
balik dan dibandingkan byte-per-byte, dan program gagal kalau berbeda.

Jalankan dengan:

```sh
node main.ts
```
