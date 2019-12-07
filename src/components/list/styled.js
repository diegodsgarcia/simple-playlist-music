import styled from 'styled-components'

const Wrapper = styled.ul`
  list-style: none;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

const Item = styled.li`
  background-color: #fff;

  figure {
    height: 300px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const Description = styled.article`
  padding: .8rem;

  .title {
    font-size: 1.2rem;
  }

  .author {
    margin: 0.3rem 0;
    color: #CCC;
  }

`
export { Wrapper, Item, Description }
