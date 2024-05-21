import React, { useEffect, useState } from 'react';
import './MultiSelect.scss';
import { SingleItem, SelectboxMulti, EmptyCase, Loading } from '..';
import { getCharacterByName } from '../../services';
import { debouncer, highlightTerm } from '../../helper';
import { emptyReasons } from '../../constants';
import { Character } from '../../types/Character';

const MultiSelect: React.FC = () => {
  const [isSelectboxOpen, setIsSelectboxOpen] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsSelectboxOpen(searchTerm.length > 0);
  }, [searchTerm]);

  const getCharacter = async (searchText: string = searchTerm) => {
    setIsLoading(true);
    try {
      const response = await getCharacterByName(searchText);
      const { status = null, data: { results = [] } = {} } = response || {};
      if (status === 200) {
        setCharacters(results);
      } else {
        setCharacters([]);
      }
    } catch (error) {
      console.error('error', error);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeSearch = debouncer((searchText: string) => {
    setSearchTerm(searchText);
    getCharacter(searchText);
  }, 300);

  const onCheckboxChange = (isChecked: boolean, id: number) => {
    if (isChecked) {
      const newCharacter = characters.find((i) => i.id === id);
      if (newCharacter) {
        setSelectedCharacters((prevCharacters) => [
          newCharacter,
          ...prevCharacters,
        ]);
      }
    } else {
      setSelectedCharacters((prevCharacters) =>
        prevCharacters.filter((char) => char.id !== id)
      );
    }
  };

  return (
    <div className="multi-select">
      <SelectboxMulti
        onChangeSearch={onChangeSearch}
        isSelectboxOpen={isSelectboxOpen}
        setIsSelectboxOpen={setIsSelectboxOpen}
        selectedCharacters={selectedCharacters}
        onCheckboxChange={onCheckboxChange}
      />

      {isSelectboxOpen ? (
        <div className="multi-select-container">
          <div className="multi-select-container-box">
            {characters.length ? (
              characters.map((item) => {
                const highlightedName = highlightTerm(item.name, searchTerm);
                return (
                  <SingleItem
                    key={item.id}
                    id={item.id}
                    avatarImageUrl={item.image}
                    name={highlightedName}
                    variant={item.episode.length}
                    isChecked={selectedCharacters.some((i) => i.id === item.id)}
                    onCheckboxChange={onCheckboxChange}
                  />
                );
              })
            ) : isLoading ? (
              <Loading />
            ) : searchTerm.length ? (
              <EmptyCase emptyReason={emptyReasons.noCharacter} />
            ) : (
              <EmptyCase emptyReason={emptyReasons.noSearchTerm} />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MultiSelect;
