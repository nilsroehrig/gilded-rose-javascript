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
  #item = null

  constructor (item) {
    this.#item = item
  }

  increaseQualityBy (by = 1) {
    this.#item.quality = Math.min(50, this.#item.quality + by)
  }

  decreaseQualityBy (by = 1) {
    this.#item.quality = Math.max(0, this.#item.quality - by)
  }

  devaluate () {
    this.#item.quality = 0
  }

  ageBy (by = 1) {
    this.#item.sell_in = this.#item.sell_in - by
  }

  isDueWithin (days = 1) {
    return this.#item.sell_in < days
  }

  isOverdue () {
    return this.isDueWithin(0)
  }

  update () {
    this.ageBy(1)
    this.decreaseQualityBy(this.isOverdue() ? 2 : 1)
  }
}

class AgedBrie extends EnhancedItem {
  constructor (item) {
    super(item)
  }

  update () {
    this.ageBy(1)
    this.increaseQualityBy(this.isOverdue() ? 2 : 1)
  }
}

class BackstagePasses extends EnhancedItem {
  constructor (item) {
    super(item)
  }

  update () {
    this.ageBy(1)

    if (this.isOverdue()) {
      this.devaluate()
      return
    }

    this.increaseQualityBy(1)

    if (this.isDueWithin(10)) {
      this.increaseQualityBy(1)
    }

    if (this.isDueWithin(5)) {
      this.increaseQualityBy(1)
    }
  }
}

class LegendaryItem extends EnhancedItem {
  constructor (item) {
    super(item)
  }

  update() {}
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

function toEnhancedItem(item) {
  if(isSulfuras(item)) return new LegendaryItem(item)
  if(isBackstagePasses(item)) return new BackstagePasses(item)
  if(isAgedBrie(item)) return new AgedBrie(item)
  return new EnhancedItem(item)
}

function update_quality () {
  items.map(toEnhancedItem).forEach(item => item.update())
}

module.exports = { update_quality, items }
