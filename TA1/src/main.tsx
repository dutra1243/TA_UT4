import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Card from './Card.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Card title="Card Title1" description="Card Description1" assignedTo="Assigned To1" startDate="Start Date1" endDate="End Date1" />

    <Card title="Card Title2" description="Card Description2" assignedTo="Assigned To2" startDate="Start Date2" endDate="End Date2" />
    <Card title="Card Title3" description="Card Description3" assignedTo="Assigned To3" startDate="Start Date3" endDate="End Date3" />
  </StrictMode>,
)
