export class DishItaliana {
  title: string
  description: string
  image: string
  id: number
  descriptionModal: string[]
  preco: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    descriptionModal: string[],
    preco: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.descriptionModal = descriptionModal
    this.preco = preco
  }
}
