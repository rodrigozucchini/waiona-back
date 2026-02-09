import { Module } from '@nestjs/common';
import { AdminProfileModule } from './admin/admin-profile.module';
import { ClientProfileModule } from './client/client-profile.module';

@Module({
  imports: [AdminProfileModule, ClientProfileModule],
})
export class ProfilesModule {}
