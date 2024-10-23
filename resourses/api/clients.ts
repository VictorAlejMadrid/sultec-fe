'use client';

import { PaginatedResult } from '@/interfaces/result';
import { apiRoutes } from '../apiRoutes';
import { api } from '../axios';
import { ReadClientDto } from '@/interfaces/ClientDtos/ReadClientDto';

export async function getPaginatedClients(pageSize: number, pageNumber: number, street?: string) {
  try {
    const result = await api.get<PaginatedResult<ReadClientDto>>(apiRoutes.client, {
      params: {
        pageNumber,
        pageSize,
        street,
      },
    });

    return result.data;
  } catch (error) {
    throw error;
  }
}
