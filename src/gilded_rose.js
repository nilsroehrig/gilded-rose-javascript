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

class EnhancedItem {
  /**
   * @type {Item}
   */
  #item = null

  /**
   * @param {Item} item
   */
  constructor (item) {
    this.#item = item
  }

  increaseQualityBy (by = 1) {
    this.#item.quality = Math.min(50, this.#item.quality + by)
  }

  decreaseQualityBy (by = 1) {
    this.#item.quality = Math.max(0, this.#item.quality - by)
  }

  ageBy (by = 1) {
    this.#item.sell_in = this.#item.sell_in - by
  }

  isOverdue () {
    return this.#item.sell_in < 0
  }

  update () {
    this.ageBy(1)
    this.decreaseQualityBy(this.isOverdue() ? 2 : 1)
  }
}

class AgedBrie extends EnhancedItem {
  /**
   * @param {Item} item
   */
  constructor (item) {super(item)}

  update() {
    this.ageBy(1)
    this.increaseQualityBy(this.isOverdue() ? 2 : 1)
  }
}

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
      new AgedBrie(item).update()
      return
    }

    new EnhancedItem(item).update()
  })
}

module.exports = { update_quality, items }
