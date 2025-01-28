import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function BookCard({title,author}) {
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855898.jpg"
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            by {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}