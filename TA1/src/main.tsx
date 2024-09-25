import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Card from './Card.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Card >
      <p> titulo 1</p>
      <p>descripcion1</p>
      <p>assignedTo1</p>
      <p>startDate1</p>
      <p>endDate</p>
      <br />
    </Card>
    <Card >
      <p> titulo 2</p>
      <p>descripcion2</p>
      <p>assignedTo2</p>
      <p>startDate2</p>
      <p>endDate2</p>
      <br />
    </Card>
    <Card >
      <p> titulo 3</p>
      <p>descripcion3</p>
      <p>assignedTo3</p>
      <p>startDate3</p>
      <p>endDate3</p>
      <br />
    </Card>

    {/* <Card title="Card Title2" description="Card Description2" assignedTo="Assigned To2" startDate="Start Date2" endDate="End Date2" />
    <Card title="Card Title3" description="Card Description3" assignedTo="Assigned To3" startDate="Start Date3" endDate="End Date3" /> */}
  </StrictMode>,
)
