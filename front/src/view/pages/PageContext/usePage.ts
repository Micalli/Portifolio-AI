import { useContext } from 'react';
import { PageContext } from '.';

export function usePage() {
  return useContext(PageContext);
}
