// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { styled } from "@mui/system";
// // import Sidebar from "./sidebar/Sidebar";

// const StyledCard = styled(Card)({
//   marginTop: "50px",
//   boxShadow: "0 3px 6px 0 rgba(0,0,0,0.15)",
//   marginLeft: "50px",
//   height: "200px",
// });

// const StyledButton = styled(Button)({
//   paddingLeft: "50px",

//   // Add padding to the left
// });

// const StyledLink = styled("a")({
//   //marginRight: "30px",
//   fontWeight: "bold",
//   textDecoration: "underline",
//   // Add margin to the right
// });

// const StyledCardHeader = styled(CardHeader)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// });

// const Resources: React.FC = () => {
//   const cards = [1, 2, 3, 4, 5]; // Assuming these are placeholders for actual card content

//   const currentDate = new Date();
//   console.log(currentDate);

//   return (
//     <Container maxWidth="md">
//       {/* <Sidebar/> */}
//       <Grid container spacing={2}>
//         {cards.map(
//           (
//             _,
//             index // Replaced 'card' with '_'
//           ) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <StyledCard>
//                 <Grid container spacing={2}>
//                   <Grid item xs={4}>
//                     <CardMedia
//                       style={{
//                         height: "0",
//                         paddingTop: "200%",
//                         marginLeft: "20px",
//                       }}
//                       component="a"
//                       href="https://source.unsplash.com/random"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       image="https://source.unsplash.com/random"
//                       title="Image Title"
//                     />
//                   </Grid>
//                   <Grid item xs={8}>
//                     <StyledCardHeader
//                       title={
//                         <Typography variant="body1" component="h2">
//                           {"This is current information of refugees "}
//                         </Typography>
//                       }
//                       subheader="It is in Ethopia"
//                       action={
//                         <StyledButton variant="contained" size="small">
//                           <StyledLink href="https://www.unhcr.org/news-and-stories">
//                             Link
//                           </StyledLink>
//                         </StyledButton>
//                       }
//                     />
//                     <CardContent>
//                       <Typography variant="h6" color="textSecondary">
//                         {`Current date: ${currentDate.getDate()}/${
//                           currentDate.getMonth() + 1
//                         }/${currentDate.getFullYear()}`}{" "}
//                         {/* Display current date in a more readable format */}
//                       </Typography>
//                     </CardContent>
//                   </Grid>
//                 </Grid>
//               </StyledCard>
//             </Grid>
//           )
//         )}
//       </Grid>
//     </Container>
//   );
// };

// export default Resources;

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  marginTop: "50px",
  boxShadow: "0 3px 6px 0 rgba(0,0,0,0.15)",
  marginLeft: "50px",
});

const StyledLink = styled("a")({
  fontWeight: "bold", // Make the link text bold
  textDecoration: "underline", // Underline the link text
});

const SmallText = styled(Typography)({
  fontSize: "0.75rem", // Adjust the font size to be smaller than h6
  fontWeight: "normal", // Reset font weight
  marginTop: "5px", // Add some top margin
});

const Subtitle = styled(Typography)({
  fontSize: "0.9rem", // Adjust the font size to be slightly smaller than the main header
  fontWeight: "normal", // Reset font weight
  marginTop: "5px", // Add some top margin
});

const LinkContainer = styled("div")({
  marginTop: "10px", // Add some top margin to the link container
});

const Resources: React.FC = () => {
  const cards = [1, 2, 3, 4, 5]; // Placeholder for card content

  const currentDate = new Date();

  return (
    <Container>
      <Grid container spacing={1}>
        {cards.map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                style={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9 aspect ratio
                }}
                image="https://source.unsplash.com/random"
                title="Image Title"
              />
              <CardContent>
                <StyledLink href="https://www.example.com">
                  <Typography variant="h6" component="h2">
                    {"Refugees and digital livlihoods "}
                  </Typography>
                </StyledLink>
                <Subtitle variant="subtitle1" color="textSecondary">
                  {" "}
                  {/* Add a subtitle */}
                  {"Ethopia "}
                </Subtitle>
                <SmallText variant="body2" color="textSecondary">
                  {" "}
                  {/* Use SmallText for smaller font */}
                  {`Current date: ${currentDate.getDate()}/${
                    currentDate.getMonth() + 1
                  }/${currentDate.getFullYear()}`}
                </SmallText>
                <LinkContainer>
                  <Typography variant="body2" color="textSecondary">
                    <StyledLink href="https://www.unhcr.org/news-and-stories">
                      {"stories"}
                    </StyledLink>
                  </Typography>
                </LinkContainer>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;
