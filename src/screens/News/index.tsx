import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {FlatList, Text, View} from 'react-native';
import moment from 'moment';

import AppContext from '@/context/AppContext';
import {getNews} from '@/api/newsApi';
import LocalizationContext from '@/context/LocalizationContext';
import NewsCard from '@/components/NewsCard';
import {INews} from '@/types/IResponse';

import createStyles from './styles';
const parseDate = (date: string) => moment(date).fromNow();

export const NewsScreen = () => {
  const {appTheme} = useContext(AppContext);
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const {t} = useContext(LocalizationContext);
  const [news, setNews] = useState<INews[] | null>(null);
  const fetchNews = useCallback(async () => {
    const response = await getNews();
    setNews(response?.data);
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>{t?.('news')}</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={news}
          renderItem={({item}) => (
            <NewsCard
              title={item.title}
              date={parseDate(item.published)}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.scrollView}
        />
      </View>
    </>
  );
};
