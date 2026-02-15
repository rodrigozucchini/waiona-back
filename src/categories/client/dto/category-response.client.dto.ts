export class CategoryResponseClientDto {
  id: number;
  name: string;
  description?: string | null;

  parent?: {
    id: number;
    name: string;
  } | null;
}
