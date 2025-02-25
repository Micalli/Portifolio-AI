import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router';
import { Toaster } from "react-hot-toast";

export default function App() {

   const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         retry: false,
         refetchOnWindowFocus: false,
       },
     },
   });

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}



