import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {ScrollView, Text, View} from 'react-native';
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

  const renderNewsList = useMemo(
    () =>
      news
        ? news.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={parseDate(item.published)}
              image={item.image}
            />
          ))
        : null,
    [news],
  );

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>{t && t('news')}</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderNewsList}
        </ScrollView>
      </View>
    </>
  );
};
