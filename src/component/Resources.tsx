import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  marginTop: '50px',
  boxShadow: '0 3px 6px 0 rgba(0,0,0,0.15)',
  marginLeft: '50px',
  height: '200px',
});

const StyledButton = styled(Button)({
  paddingLeft: '50px', // Add padding to the left
});

const StyledLink = styled('a')({
  marginRight: '30px', // Add margin to the right
});

const StyledCardHeader = styled(CardHeader)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Resources: React.FC = () => {
  const cards = [1, 2, 3, 4, 5]; // Assuming these are placeholders for actual card content

  const currentDate = new Date();
  console.log(currentDate);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {cards.map((_, index) => ( // Replaced 'card' with '_'
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CardMedia
                    style={{ paddingTop: '100%', marginLeft: '40px' }}
                    component="a"
                    href="https://source.unsplash.com/random"
                    target="_blank"
                    rel="noopener noreferrer"
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                </Grid>
                <Grid item xs={8}>
                  <StyledCardHeader
                    title={<Typography variant='body1' component='h2'>{"This is current information of refugees from Ethiopia"}</Typography>}
                    subheader="Card Subtitle"
                    action={
                      <StyledButton variant="contained" size="small">
                        <StyledLink href="https://www.unhcr.org/news-and-stories">Link</StyledLink>
                      </StyledButton>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {`Current date: ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`} {/* Display current date in a more readable format */}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;

