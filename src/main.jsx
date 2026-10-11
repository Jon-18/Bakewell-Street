
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource-variable/inter'; 
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import './index.css'; 

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
