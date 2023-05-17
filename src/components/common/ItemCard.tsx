import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ItemCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='green iguana'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Nike Shoes
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Nike are a widespread group of squamate reptiles, with over 6,000 species,
                    ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Add to cart</Button>
                <Button size='small'>Buy</Button>
            </CardActions>
        </Card>
    )
}
