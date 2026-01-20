import { Module } from '@nestjs/common';
import { AdminProfileModule } from './admin-profile/admin-profile.module';
import { ClientProfileModule } from './client-profile/client-profile.module';

@Module({
  imports: [AdminProfileModule, ClientProfileModule],
})
export class ProfilesModule {}
