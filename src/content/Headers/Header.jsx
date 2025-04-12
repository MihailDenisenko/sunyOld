import React from 'react'
import styles from "./Header.module.scss"
import { useSelector, useDispatch} from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { setSearchShow, setWidth } from "../../reduce/width";
import { setSearchVal } from '../../reduce/search';

export default function Header() {
  const { width, searchShow } = useSelector((state) => state.width);
  const { searchVal} = useSelector((state) => state.searchVal);

  const [searchInput, setSearchInput] = React.useState(false)
  const [inputText, setInputText] = React.useState('')
  const inputRef = React.useRef()
  const searchRef = React.useRef();

  
  // console.log(searchRef.current)
  
  const dispatch = useDispatch()
  console.log(searchVal,'searchVal')
  return (
    <div className={styles.headerDiv}>
      <Input
        ref={inputRef}
        placeholder="Введите искомое"
        className={
          searchShow ? styles.headerDiv__input : styles.headerDiv__input_close
        }
        onChange={(e) => {
          dispatch(setSearchVal(e.target.value));
        }}
        value={searchVal}
      />
      {searchShow ? (
        <CloseOutlined
          onClick={() => {
            dispatch(setSearchVal(""));
            inputRef.current.focus();
          }}
          className={styles.headerDiv__closeInp}
        />
      ) : (
        ""
      )}

      <SearchOutlined
        ref={searchRef}
        className={styles.headerDiv__searchIcon}
        onClick={() => {
          console.log("click lupa");
          dispatch(setSearchShow(!searchShow));
        }}
      />
      <p
        className={searchShow ? styles.headerDiv__p_close : styles.headerDiv__p}
      >
        Качество и надежность с хорошим настроением!
      </p>
    </div>
  );
}
