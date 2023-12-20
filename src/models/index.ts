export class Dish {
  title: string
  description: string[]
  note: number
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    description: string[],
    note: number,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.note = note
    this.image = image
    this.infos = infos
  }
}

export class DishItaliana {
  title: string
  description: string
  image: string
  id: number

  constructor(id: number, title: string, description: string, image: string) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}
