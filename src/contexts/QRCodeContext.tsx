import React, {ReactNode, createContext, useState} from 'react';

// Définir le type pour les valeurs du contexte
type QRCodeContexteType = {
  code: string;
  setCode: (data: string) => void;
};

// Créez le contexte avec une valeur par défaut
export const QRCodeContexte = createContext<QRCodeContexteType>({
  code: '',
  setCode: () => {},
});

// Définir le type pour les props du provider
type QRCodeProviderProps = {
  children: ReactNode;
};

// Créez un provider pour encapsuler votre application
export const QRCodeProvider = ({children}: QRCodeProviderProps) => {
  const [code, setCode] = useState('');

  return (
    <QRCodeContexte.Provider value={{code, setCode}}>
      {children}
    </QRCodeContexte.Provider>
  );
};
