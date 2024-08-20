import { mockfood } from './Food.mock'
export class Food {
  async getFoodList(page: number = 1, pageSize: number = 10) {
    return mockfood.getFoodList(page, pageSize)
  }

  async getFoodListById(id: number) {
    return mockfood.getFoodListById(id)
  }

  async deleteFood(id: number) {
    return mockfood.deleteFood(id)
  }

  async updateFood(id: number, updatedFood: any) {
    return mockfood.updateFood(id, updatedFood)
  }
}
