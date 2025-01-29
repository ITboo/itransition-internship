import React from 'react'
import BookCard from '../../shared/BookCard'
import Stack from '@mui/material/Stack';
const Gallery = ({books}) => {
  return (
    <Stack direction="row" spacing={10} useFlexGap
    sx={{ flexWrap: 'wrap' }}>
        {books.map((item)=>(
            <BookCard title={item.title} author={item.author} coverUrl={item.coverUrl}/>
        ))}
    </Stack>
  )
}

export default Gallery