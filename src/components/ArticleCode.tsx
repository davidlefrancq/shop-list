import React, {useContext} from 'react';
import {Text} from 'react-native';
import {QRCodeContexte} from '../contexts/QRCodeContext';
import {findCountryByCode, isEAN} from '../utils/QRCode';

const EAN = ({isEan}: {isEan: boolean}): React.JSX.Element => {
  if (isEan) {
    return <Text>EAN : 🟢</Text>;
  }

  return <Text>EAN : 🔴</Text>;
};

export const ArticleCode = (): React.JSX.Element => {
  const {code} = useContext(QRCodeContexte);
  const isEan = isEAN(code);
  const country = findCountryByCode(code);

  if (!code) {
    return <></>;
  }

  return (
    <>
      <Text>Code : {code}</Text>
      <EAN isEan={isEan} />
      {country ? <Text>Pays: {country}</Text> : <></>}
    </>
  );
};
