import { mockfood } from "./Food.mock";
export class Food {
  async getFoodList(page: number = 1, pageSize: number = 10) {
    // 函数里参数---参数名、类型、数值
    return mockfood.getFoodList(page, pageSize);
  }

  async getFoodListById(id: number) {
    return mockfood.getFoodListById(id);
  }

  async deleteFood(id: number) {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        mockfood.deleteFood(id);
        resolve("");
      }, 100);
    });
  }

  async updateFood(id: number, updatedFood: any) {
    return mockfood.updateFood(id, updatedFood);
  }
}
