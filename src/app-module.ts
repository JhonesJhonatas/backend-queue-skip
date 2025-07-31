import { Module } from '@nestjs/common';

import { ApiModule } from '@api/api-module';
import { ApplicationModule } from '@application/application-module';
import { DatabaseModule } from '@infrastructure/database/database-module';

@Module({
  imports: [DatabaseModule, ApiModule, ApplicationModule],
})
export class AppModule {}
