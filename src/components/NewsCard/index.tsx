import {Image, ImageURISource, Text, View} from 'react-native';
import React, {useContext, useMemo} from 'react';
import AppContext from '@/context/AppContext';
import createStyles from './styles';

interface INewsCard {
  title: string;
  image: ImageURISource;
  date: string;
}

const NewsCard: React.FC<INewsCard> = (props) => {
  const {title, date, image} = props;
  const {appTheme} = useContext(AppContext);
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{uri: image}} />
      <View style={styles.cardInfo}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.publishDate}>{date}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
