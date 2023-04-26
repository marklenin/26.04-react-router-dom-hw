import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function HomePage() {
  const array = [
    {
      name: "Donkey",
      image: "https://static.dw.com/image/15939048_605.jpg",
      descr: "",
    },
    {
      name: "Aardvark",
      image:
        "https://www.travelandleisure.com/thmb/aJnSqY-h0otaV7r6RJx26VNkBhI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dobby-baby-aardvark-chester-zoo-HPAARDVARK0222-a7f23964902d43d2b671e9dab4ac41ce.jpg",
      descr: "",
    },
    {
      name: "Ape",
      image:
        "https://centerforgreatapes.org/wp-content/uploads/2021/03/IMG_00251_Louie.jpg",
      descr: "",
    },
    {
      name: "Baboon",
      image:
        "https://cdn.mos.cms.futurecdn.net/5VRpoZoyUuepUJi5kFTzmC-1024-80.jpg.webp",
      descr: "",
    },
    {
      name: "Badger",
      image:
        "https://cdn.britannica.com/96/172396-050-7B768F9B/American-badger.jpg",
      descr: "",
    },
    {
      name: "Bat",
      image:
        "https://i.natgeofe.com/k/3152d4f7-99e0-4875-bac2-f3f4366e78ed/yikes-vampirebat_square.png",
      descr: "",
    },
  ];
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {array.map((item) => (
        <Card sx={{ maxWidth: 345, my: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
