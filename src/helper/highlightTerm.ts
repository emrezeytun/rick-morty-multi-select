const highlightTerm = (data: string, searchTerm: string): string => {
  const escapedSearchTerm = searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
  return data.replace(regex, '<strong>$1</strong>');
};

export default highlightTerm;
