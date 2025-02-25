import { useQuery } from '@tanstack/react-query';
import { gitHubService } from '../../../app/services/gitHubService';

export function useProjectsController() {
    const { data, isFetching } = useQuery({
      queryKey: ["bankAccounts"],
      queryFn: gitHubService.getAll,
      staleTime: Infinity,
    });

    return { projects: data ?? [], isFetching };
}