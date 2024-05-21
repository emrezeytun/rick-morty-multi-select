import React, { useRef, useEffect, useState } from 'react';
import './SelectboxMulti.scss';
import InputBox from '../InputBox'; 
import { SelectboxMultiProps } from '../../types/SelectboxMultiProps';



const SelectboxMulti: React.FC<SelectboxMultiProps> = ({
  isSelectboxOpen,
  setIsSelectboxOpen,
  onChangeSearch,
  selectedCharacters,
  onCheckboxChange,
}) => {
  const inputBoxRef = useRef<HTMLDivElement>(null);
  const [inputPadding, setInputPadding] = useState(20);

  useEffect(() => {
    getInputBoxesWidth()
  }, [selectedCharacters])

  const getInputBoxesWidth = () => {
    inputBoxRef.current && setInputPadding(inputBoxRef?.current?.clientWidth + 12)
  };

  return (
    <div className="selectbox">
      <div className="selectbox-multi">
        <input
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder={!selectedCharacters?.length ? 'Karakter arayın...' : ''}
          type="text"
          style={{
            paddingLeft: `${inputPadding}px`,
          }}
        />
        <div ref={inputBoxRef} className="selectbox-multi-inputbox">
          {selectedCharacters.map((item) => (
            <InputBox
              key={item.id} 
              name={item.name}
              id={item.id}
              onCheckboxChange={onCheckboxChange}
            />
          ))}
        </div>
      </div>

      <div
        onClick={() => setIsSelectboxOpen(!isSelectboxOpen)}
        className="arrow-area"
      >
        <div
          className={`arrow-area-icon ${isSelectboxOpen ? 'down' : 'up'}`}
        ></div>
      </div>
    </div>
  );
}

export default SelectboxMulti;