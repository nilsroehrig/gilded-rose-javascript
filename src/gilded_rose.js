class Item {
  constructor (name, sell_in, quality) {
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
  }
}

const items = []

items.push(new Item('+5 Dexterity Vest', 10, 20))
items.push(new Item('Aged Brie', 2, 0))
items.push(new Item('Elixir of the Mongoose', 5, 7))
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20))
items.push(new Item('Conjured Mana Cake', 3, 6))
// --------------------------------------------------------------------------------------------
// Do not touch above, because Goblin!
// --------------------------------------------------------------------------------------------

function isSulfuras (item) {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}

function isAgedBrie (item) {
  return item.name === 'Aged Brie'
}

function isBackstagePasses (item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}

function updateBackstagePasses (item) {
  item.sell_in--

  if (item.sell_in < 0) {
    item.quality = 0
    return
  }

  item.quality = Math.min(item.quality + 1, 50)

  if (item.sell_in < 10) {
    item.quality = Math.min(item.quality + 1, 50)
  }
  if (item.sell_in < 5) {
    item.quality = Math.min(item.quality + 1, 50)
  }
}

function updateAgedBrie (item) {
  item.sell_in--

  item.quality = Math.min(item.quality + 1, 50)

  if (item.sell_in < 0) {
    item.quality = Math.min(item.quality + 1, 50)
  }
}

function updateRegular (item) {
  item.sell_in--

  item.quality = Math.max(item.quality - 1, 0)

  if (item.sell_in < 0) {
    item.quality = Math.max(item.quality - 1, 0)
  }
}

function update_quality () {
  items.forEach(item => {
    if (isSulfuras(item)) {
      return
    }

    if (isBackstagePasses(item)) {
      updateBackstagePasses(item)
      return
    }

    if (isAgedBrie(item)) {
      updateAgedBrie(item)
      return
    }

    updateRegular(item)
  })
}

module.exports = { update_quality, items }
