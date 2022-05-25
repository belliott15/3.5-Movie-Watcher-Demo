import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Zoom } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(96, 193, 161)',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgb(96, 193, 161)',
  },
}));
export default function CustomTooltips({ title, image }) {
  return (
    <div>
      <CustomTooltip title={title} TransitionComponent={Zoom} arrow>
        <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}><img src={image} /></Link>
      </CustomTooltip>
    </div>
  );
}