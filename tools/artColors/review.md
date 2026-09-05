# Colour review — what was wrong, and what it is now

Every one of the 34 published saints was reviewed by drawing each paint mask over
its registered card (`regioninspect.py`) and comparing the sampled colour against
what that part of the card actually wears. The corrections live in `OVERRIDE` and
`DROP`; this is the reasoning behind them.

The recurring failures were all the same three shapes:

1. **A mask does not cover what its name says.** Catherine of Siena's `hair` mask is
   her white wimple. Cecilia's `hair` is the sky around her halo. Aquinas's `hood`
   and `innerCollar` are the white Dominican tunic. The paint region is what a tap
   fills, so the target follows the mask, not the name.
2. **A thin bright thing loses the area vote.** Gold trim beside a face, a gold ring
   inside its own pale glow, a gilt cross on a dark book: the dominant tone is the
   large neighbour. Fixed by asking for the tone in the mask nearest what it should
   be.
3. **A mask is buried under later regions.** Xavier's sea and hillside are behind his
   cassock, so no amount of searching inside the mask finds blue or green. Those
   are dropped; where a colour is still wanted, `('card', …)` takes the nearest
   tone from elsewhere on the same card.

| Saint | Was | Now |
| --- | --- | --- |
| Mary | gold trim and stars sampled skin-coloured | trim and stars gold |
| Joseph | tunic orange (highlight average) | brown |
| Francis of Assisi | halo pale glow; birds dark brown | gold ring; white birds |
| Therese | gold sky read as white, cloak too yellow, roses gold, leaves gold | gold sky, cream cloak, red roses, green leaves, dark brown habit |
| John Bosco | tree cream | green |
| Francis Xavier | hair skin-coloured; sea, hillside, collar, emblem all black | dark brown hair; the four buried masks dropped |
| Dominic | book and gilt cross near-black, rosary skin-coloured, leaves dark | brown book, gold cross, dark rosary, green leaves |
| Monica | church tower bluish | stone |
| Thomas Aquinas | hood and collar skin-coloured, sunburst black | white tunic, gold sunburst |
| Catherine of Siena | wimple mask sampled as brown hair | white |
| Kateri | background white | sky |
| Martin of Tours | cloak brown; horse tan | crimson cloak; white horse |
| Vincent de Paul | background white, cassock tan | sky, black |
| Elizabeth Ann Seton | background white, bonnet brown, statue dark | sky, black bonnet, pale statue |
| Maria Goretti | skin ruddy; lilies orange | natural skin; white lilies |
| Lucy | lamp cream; palm pale blue | brass lamp; green palm |
| Cecilia | sky mask sampled as cream | sky |
| Agatha | mantle tan | red |
| Joachim | hair tan | white |
| John the Baptist | lamb and scroll brown/olive | white lamb, cream scroll |
| George | armour read as cloth (cream and olive) | steel |
| Sebastian | drape orange | deep red |
| Maximilian Kolbe | hair tan | grey |
| Paul | hair skin-coloured | dark brown |
| Faustina | background grey-blue; Divine Mercy image black | warm beige; pale |
| Mary Magdalene | background white | warm landscape |

Left alone deliberately: Anne, Juan Diego, Christopher, Felicity, José Sánchez del
Río, Carlo Acutis, Andrew, James the Greater — sampled correctly first time.

## What review cannot fix

Several saints (Kateri, Vincent de Paul, Martin of Tours) have masks covering only
slivers of the drawing. Their colours are now right, but a finished page still will
not look like the card, because most of the picture belongs to no paint region at
all. That needs the masks retraced, not the colours re-read.
