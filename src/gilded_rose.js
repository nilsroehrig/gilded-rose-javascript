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

function isNotSulfuras (item) {
  return item.name !== 'Sulfuras, Hand of Ragnaros'
}

function isNotAgedBrie (item) {
  return item.name !== 'Aged Brie'
}

function isNotBackstagePasses (item) {
  return !isBackstagePasses(item)
}

function isBackstagePasses (item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}

function isRegular (item) {
  return isNotBackstagePasses(item) && isNotAgedBrie(item) && isNotSulfuras(item)
}

function increaseBackstagePassesQuality (item) {
  if (item.sell_in < 11) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
  if (item.sell_in < 6) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}

function updateSellIn (item) {
  if (isNotSulfuras(item)) {
    item.sell_in = item.sell_in - 1
  }
}

function update_quality () {
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    if (isRegular(item) && item.quality > 0) {
      item.quality = item.quality - 1
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (isBackstagePasses(item)) {
          increaseBackstagePassesQuality(item)
        }
      }
    }

    if (item.sell_in <= 0) {
      if (isNotAgedBrie(item)) {
        if (isNotBackstagePasses(item)) {
          if (item.quality > 0) {
            if (isNotSulfuras(item)) {
              item.quality = item.quality - 1
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }

    updateSellIn(item)
  }
}

module.exports = { update_quality, items }
