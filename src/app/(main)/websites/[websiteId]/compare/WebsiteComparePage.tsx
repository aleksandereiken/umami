'use client';
import WebsiteHeader from '../WebsiteHeader';
import WebsiteMetricsBar from '../WebsiteMetricsBar';
import FilterTags from 'components/metrics/FilterTags';
import { useNavigation } from 'components/hooks';
import { FILTER_COLUMNS } from 'lib/constants';

export function WebsiteComparePage({ websiteId }) {
  const { query } = useNavigation();

  const params = Object.keys(query).reduce((obj, key) => {
    if (FILTER_COLUMNS[key]) {
      obj[key] = query[key];
    }
    return obj;
  }, {});

  return (
    <>
      <WebsiteHeader websiteId={websiteId} />
      <FilterTags websiteId={websiteId} params={params} />
      <WebsiteMetricsBar websiteId={websiteId} compareMode={true} />
    </>
  );
}

export default WebsiteComparePage;
