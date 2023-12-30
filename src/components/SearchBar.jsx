import styled from 'styled-components';
import search from '../assets/ico-search.png';

const SearchBarContainer = styled.div`
  position: relative;
  margin: 0 0 4rem 0;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 1.7rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    background: url('${search}') no-repeat;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem 4.2rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: var(--gray-666);
  background-color: var(--gray-f5f5);
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <Input type="search" placeholder="링크를 검색해 보세요." />
    </SearchBarContainer>
  );
}

export default SearchBar;
