import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'


import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
})
