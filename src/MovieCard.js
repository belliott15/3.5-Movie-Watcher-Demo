// import React from 'react';


// export default function MovieCard({ title, overview, poster_path, id, release_date }) {
//   async function addToWatchList() {
//     await addMovie({ title, overview, poster_path, api_id:id, release_date });
//   }

//   return (
//     // <div className="movie-card">
//     //   <div>
//     //     <p>{title}</p>
//     //     <p>{release_date}</p>
//     //     <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
//     //     <button onClick={addToWatchList}>Add to WatchList</button>
//     //   </div>
//     // </div>
//   );
// }
import { addMovie } from './services/SupabaseUtils.js';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { removeMovie } from './services/SupabaseUtils.js';
import { SportsRugbySharp } from '@mui/icons-material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ title, overview, poster_path, id, release_date, vote_average, favMovies, fetch, api_id }) {
  console.log('favMovies', favMovies);
  console.log('id', id);
  const [fav, setFav] = useState('');

  async function addToWatchList() {
    await addMovie({ title, overview, poster_path, api_id:id, release_date, vote_average });
    await fetch();
  }

  async function handleDelete() {
    if (api_id){
      await removeMovie(api_id);
    } else {
      await removeMovie(id);
    }
    await fetch();
    
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  useEffect(() => {
    const matchingId = favMovies.find((favMovie) => Number(favMovie.id) === Number(id) || Number(favMovie.api_id) === Number(id));
    console.log('matchingId', matchingId);
    setFav(matchingId);
  }, [favMovies, id]);

  return (
    <Card className='card' sx={{ width: 345, background: 'rgba(255, 255, 255, .75)' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#282c34', fontSize: '.75rem' }} aria-label="recipe">
            {vote_average}/10
          </Avatar>
        }
        title={title}
        subheader={`Release Date: ${release_date}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* placeholder */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {fav ? 
          <>
            <h4>Watched</h4>
            <IconButton onClick={handleDelete} className='watched'>
              <DoneOutlineIcon style={{ color:'#60c1a1', fill: '#60c1a1' }}/>
            </IconButton> 
          </>
          : <div>
            <label>
            Add to Watchlist
            </label>
            <IconButton aria-label="add to watch list" onClick={addToWatchList}>
              <FavoriteIcon className='favorite'/>
            </IconButton>
          </div>}
          
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {overview}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
