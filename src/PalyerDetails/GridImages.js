import React from "react";
import { Box, Grid, ListItem } from "@mui/material";
// import "../../public/assets/image/image2.webp"

const GridImages = () => {
  // let str="aaabbcccdde"
  // str=str.split('')
  // console.log(str);
  // let findDup=str.reduce((acc,curr)=>{
  //   if(!acc[curr]){
  //     acc[curr]=1
  //   }else{
  //     acc[curr]=acc[curr]+1;

  //   }
  //   return acc;
  // },{})
  // console.log(Object.keys(findDup));

  // for (const [key, value] of Object.entries(findDup)) {
  //   if(value==3){

  //     console.log(value);
  //     return
  //   }
  // }

  let pic = [
    // {
    //   name: "rajesh",
    //   image: ["/assets/image/image2.webp"],
    // },
    {
      name: "jitendra",
      image: [
        "/assests/image/image1.jpg",
        "/assests/image/image2.jpg",
        "/assests/image/image3.jpg",
        "/assests/image/image4.jpg",
        "/assests/image/image5.jpg",
        "/assests/image/image5.jpg",
        "/assests/image/image1.jpg",
      ],
    },
    // {
    //   name: "Dipak",
    //   image: [
    //     "/assets/image/image2.webp",
    //     "/assets/image/image2.webp",
    //     "/assets/image/image2.webp",
    //   ],
    // },
  ];
  console.log("pic", pic[0]?.image?.length);
  const arr1 = [];
  const arr2 = [];
  let length = pic[0]?.image?.length;
  for (let i = 0; i < length / 2; i++) {
    arr1.push(pic[0]?.image[i]);
  }
  for (let i = arr1?.length; i < length; i++) {
    arr2.push(pic[0]?.image[i]);
  }

  console.log("arr1", arr1);
  console.log("arr2", arr2);

  return (
    <div>
      {length == 1 ? (
        <Grid container>
            <ListItem>
              <img
                src={pic[0]?.image[0]}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              ></img>
            </ListItem> 
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid conatiner>
              <ListItem>
                <img
                  src={pic[0]?.image[0]}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
              </ListItem>
            </Grid>
          </Grid>
          <Grid spacing={2} item xs={6}>
            <Grid container spacing={2}>
              {arr1.map((data) => (
                <Grid item xs={6}>
                  <img
                    src={data}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  ></img>
                </Grid>
              ))}
              {arr2.map((element) => (
                <Grid item xs={6}>
                  <img
                    src={element}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  ></img>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
     
    </div>
  );
};

export default GridImages;


