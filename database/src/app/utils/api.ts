// src/app/utils/api.ts
import { Lead } from '../../types/types';

const API_URL = '/api';

export const fetchLeads = async (): Promise<Lead[]> => {
  const response = await fetch(`${API_URL}/leads`);
  return response.json();
};

export const addLead = async (lead: Omit<Lead, 'id'>): Promise<void> => {
  await fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
};