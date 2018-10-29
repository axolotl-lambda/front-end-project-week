import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 20px;
  background: #F2F0F2;
  overflow-wrap: break-word;
`

export const Note = styled.div`
  width: 200px;
  border: 1px solid #434343;
  padding: 10px;
  margin: 10px;
  background: white;
`

export const NoteTitle = styled.h2`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
  margin-bottom: 10px
`

export const NoteBody = styled.p`
  font-size: 1.6rem;
`
