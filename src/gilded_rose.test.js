const { update_quality, items } = require('./gilded_rose')

/*
items.push(new Item('+5 Dexterity Vest', 10, 20))
items.push(new Item('Aged Brie', 2, 0))
items.push(new Item('Elixir of the Mongoose', 5, 7))
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20))
items.push(new Item('Conjured Mana Cake', 3, 6))
 */
it('updates quality and sell_in date for each iteration', () => {
  update_quality()
  expect(items[0].sell_in).toBe(9)
  expect(items[0].quality).toBe(19)
  expect(items[1].sell_in).toBe(1)
  expect(items[1].quality).toBe(1)
  expect(items[2].sell_in).toBe(4)
  expect(items[2].quality).toBe(6)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(14)
  expect(items[4].quality).toBe(21)
  expect(items[5].sell_in).toBe(2)
  expect(items[5].quality).toBe(4)

  update_quality()

  expect(items[5].sell_in).toBe(1)
  expect(items[5].quality).toBe(2)

  update_quality()

  expect(items[5].sell_in).toBe(0)
  expect(items[5].quality).toBe(0)

  times(2, update_quality)

  expect(items[0].sell_in).toBe(5)
  expect(items[0].quality).toBe(15)
  expect(items[1].sell_in).toBe(-3)
  expect(items[1].quality).toBe(8)
  expect(items[2].sell_in).toBe(0)
  expect(items[2].quality).toBe(2)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(10)
  expect(items[4].quality).toBe(25)
  expect(items[5].sell_in).toBe(-2)
  expect(items[5].quality).toBe(0)

  times(5, update_quality)

  expect(items[0].sell_in).toBe(0)
  expect(items[0].quality).toBe(10)
  expect(items[1].sell_in).toBe(-8)
  expect(items[1].quality).toBe(18)
  expect(items[2].sell_in).toBe(-5)
  expect(items[2].quality).toBe(0)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(5)
  expect(items[4].quality).toBe(35)

  times(5, update_quality)

  expect(items[0].sell_in).toBe(-5)
  expect(items[0].quality).toBe(0)
  expect(items[1].sell_in).toBe(-13)
  expect(items[1].quality).toBe(28)
  expect(items[2].sell_in).toBe(-10)
  expect(items[2].quality).toBe(0)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(0)
  expect(items[4].quality).toBe(50)

  update_quality()

  expect(items[0].sell_in).toBe(-6)
  expect(items[0].quality).toBe(0)
  expect(items[1].sell_in).toBe(-14)
  expect(items[1].quality).toBe(30)
  expect(items[2].sell_in).toBe(-11)
  expect(items[2].quality).toBe(0)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(-1)
  expect(items[4].quality).toBe(0)

  times(10, update_quality)

  expect(items[0].sell_in).toBe(-16)
  expect(items[0].quality).toBe(0)
  expect(items[1].sell_in).toBe(-24)
  expect(items[1].quality).toBe(50)
  expect(items[2].sell_in).toBe(-21)
  expect(items[2].quality).toBe(0)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(-11)
  expect(items[4].quality).toBe(0)

  update_quality()

  expect(items[0].sell_in).toBe(-17)
  expect(items[0].quality).toBe(0)
  expect(items[1].sell_in).toBe(-25)
  expect(items[1].quality).toBe(50)
  expect(items[2].sell_in).toBe(-22)
  expect(items[2].quality).toBe(0)
  expect(items[3].sell_in).toBe(0)
  expect(items[3].quality).toBe(80)
  expect(items[4].sell_in).toBe(-12)
  expect(items[4].quality).toBe(0)
})

function times(num, fn) {
  for(let i = 0; i < num; i++) fn()
}
