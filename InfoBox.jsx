import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({ info }) {
    const INIT_URL ="https://media.istockphoto.com/id/1026330454/photo/clouds-and-bright-blue-sky-background-panoramic-angle-view.webp?b=1&s=170667a&w=0&k=20&c=xTS52LSyHDCJe6CSkBcvc6mGFsZI9MPA7JOYSNGTBIY=";
    const HOT_URL = "https://media.istockphoto.com/id/993738504/photo/hot-summer-or-heat-wave-background-orange-sky-with-glowing-sun.webp?b=1&s=170667a&w=0&k=20&c=qlnMJL7zu_8Ir0TUdJIuDBhht0WJGu6sYZTe-oft-zE="
    const COLD_URL = "https://media.istockphoto.com/id/183242975/photo/winter-written-on-a-snow-covered-window.jpg?s=612x612&w=0&k=20&c=ts_7zQ6UiBfDe7AFfcqQE1eLgOUWxkhrAJRqjg4DPoM=";
    const RAIN_URL = "https://media.istockphoto.com/id/2045983297/photo/blurred-motion-woman-with-umbrella-walking-under-rain.jpg?s=612x612&w=0&k=20&c=xHueMy-p8dNpyK6p_eDqrpN57LGsQMN4N7NcBG771Lk=";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
            
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
        </div>
    );
}