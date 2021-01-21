import React, {useContext, useMemo, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import AppContext from '@/context/AppContext';
import LocalizationContext from '@/context/LocalizationContext';

import Icon from '../Icon';
import createStyles from './styles';

const languageOptions = [
  {
    locale: 'en',
    label: 'english',
  },
  {
    locale: 'ar',
    label: 'arabic',
  },
];

const languagesMapping = {
  en: 'english',
  ar: 'arabic',
};

interface IPickerView {
  defaultValue: string;
  onChange: (locale: string) => void;
}

export const PickerView: React.FC<IPickerView> = ({onChange}) => {
  const {appTheme, locale} = useContext(AppContext);
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedValue, setValue] = useState<string>('');
  const {t} = useContext(LocalizationContext);
  const handleValueChange = (value: string) => () => {
    setValue(value);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const saveAndCloseModal = () => {
    onChange(selectedValue);
    closeModal();
  };

  return (
    <>
      <TouchableOpacity style={styles.openButton} onPress={openModal}>
        <Text style={styles.textStyle}>{t && t(languagesMapping[locale])}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.header}>
            <Text onPress={closeModal} style={styles.textStyle}>
              {t && t('cancel')}
            </Text>
            <Text onPress={saveAndCloseModal} style={styles.textStyle}>
              {t && t('done')}
            </Text>
          </View>
          <View style={styles.modalView}>
            <OptionsList
              list={languageOptions}
              onChange={handleValueChange}
              selected={selectedValue}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

interface IOptionsList {
  list: {
    locale: string;
    label: string;
  }[];
  onChange: (value: string) => () => void;
  selected: string;
}

const OptionsList: React.FC<IOptionsList> = ({list, onChange, selected}) => {
  const {appTheme} = useContext(AppContext);
  const {locale: currentLocale} = useContext(LocalizationContext);
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const {t} = useContext(LocalizationContext);
  return (
    <>
      {list.map(({label, locale}) => {
        const isSelected = selected
          ? locale === selected
          : locale === currentLocale;
        return (
          <TouchableOpacity
            key={locale}
            style={styles.listItem}
            onPress={onChange(locale)}
            activeOpacity={0.8}>
            <Text style={styles.textStyle}>{t && t(label)}</Text>
            {isSelected && (
              <Icon style={styles.tickIcon} source={appTheme?.tickIcon} />
            )}
          </TouchableOpacity>
        );
      })}
    </>
  );
};
