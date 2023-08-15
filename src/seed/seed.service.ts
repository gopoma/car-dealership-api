import { Injectable } from '@nestjs/common';

import { CarsService } from './../cars/cars.service';
import { BrandsService } from './../brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  public populateDB() {
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'SEED executed 🌱🪴';
  }
}
