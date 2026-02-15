export class CategoryResponseAdminDto {
  id: number;
  name: string;
  description?: string | null;
  isActive: boolean;

  parent?: {
    id: number;
    name: string;
  } | null;

  createdAt: Date;
  updatedAt: Date;
}
