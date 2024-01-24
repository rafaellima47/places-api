import { Controller, Head } from '@nestjs/common';


@Controller()
export class AppController {
  constructor() {}

  @Head('health-check')
  async healthCheck(): Promise<boolean> {
    return true
  }
}
