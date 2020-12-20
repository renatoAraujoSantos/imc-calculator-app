import React, { useEffect } from "react";
import Routes from './routes';
import RNBootSplash from "react-native-bootsplash";
import {defineLocales, defaultLocale} from './services/calendar';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

defineLocales();
defaultLocale('pt');

export default function App() {

  useEffect(() => {
    const init = async () => {
      await delay(5000);
    };
    
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      //console.log("Bootsplash has been hidden successfully");
      console.log("Bootsplash foi escondido com sucesso");      
    });
  }, []);

  return <Routes />;
};


