import {UUID} from 'node:crypto';

export interface User {
  id: UUID,
  name: string,
}
