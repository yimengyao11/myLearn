import { Food } from './Food.service'
import { Weather } from './Weather.service'

export const service = { Weather: new Weather(), Food: new Food() }
