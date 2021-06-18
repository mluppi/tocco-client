import styled from 'styled-components'

export const TopPositioning = styled.div`
  height: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-areas:
    'search'
    'list';
  grid-auto-rows: auto minmax(${({searchFormType}) => searchFormType === 'simple' ? 'auto' : '400px'}, 1fr);

  /* remove bottom space and set width in modal */
  ${({searchFormType}) => searchFormType !== 'simple' && `
    grid-template-columns: minmax(100%, 700px);
  `
}
`

export const LeftPositioning = styled.div`
  display: grid;
  column-gap: 1rem;
  ${({isCollapsed}) => !isCollapsed
  ? `
      grid: 'search list' / minmax(350px, 16%) auto;
    `
  : `
      grid: 'search list' / 25px auto;
    `
}

  @media (max-width: 600px) {
    column-gap: 8px;
  }
`

export const SearchGrid = styled.div`
  grid-area: search;
`

export const ListGrid = styled.div`
  grid-area: list;
  display: flex;
`
