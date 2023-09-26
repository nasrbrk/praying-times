
import Card from "@mui/material/Card";
import "../App.css"
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MediaCard({name, time, }) {
  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/16961112/pexels-photo-16961112/free-photo-of-surrounded-by-circles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="fajr-prayer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
              <Typography variant="h2" color="text.secondary">
            {time} 
        </Typography>
      </CardContent>
      
    </Card>
  );
}
