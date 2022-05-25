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
import * as React from 'react';
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

export default function MovieCard({ title, overview, poster_path, id, release_date, vote_average }) {
  async function addToWatchList() {
    await addMovie({ title, overview, poster_path, api_id:id, release_date });
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card' sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#282c34', fontSize: '.75rem' }} aria-label="recipe">
            {vote_average}/10
          </Avatar>
        }
        title={title}
        subheader={release_date}
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
        <IconButton aria-label="add to favorites">
          <label className='favorite'>
            Add to Watchlist
            <FavoriteIcon onClick={addToWatchList}/>
          </label>
        </IconButton>
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
