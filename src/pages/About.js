import React from "react";
import Layout from "./../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        SERVED EVERY DAY SINCE 1990

        Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.

      Why It's Effective

       Rather than calling itself a “New York institution” or using the word "reliable," Bubby’s uses its headline to make a specific claim — ”Served every day since 1990” — that demonstrates those ideas. This captures more attention and paints a richer, more vivid picture of its history and role in the community. The rest of the description supports this by adding details to the story of its founding and explaining that even three decades later, its scratch approach to cooking remains the same.

        </p>
        <br />
        <p>
        Rather than calling itself a “New York institution” or using the word "reliable," Bubby’s uses its headline to make a specific claim — ”Served every day since 1990” — that demonstrates those ideas. This captures more attention and paints a richer, more vivid picture of its history and role in the community. The rest of the description supports this by adding details to the story of its founding and explaining that even three decades later, its scratch approach to cooking remains the same.
        SAY NO TO MEATS ON DRUGS

        The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you a sandwich experience you can feel good about.


        </p>
      </Box>
    </Layout>
  );
};

export default About;