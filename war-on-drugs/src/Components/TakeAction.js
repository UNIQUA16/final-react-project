import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import RelatedArticle from "./RelatedArticles";
import Grid from "@mui/material/Grid";

function Takeaction({}) {
  const articles = [
    {
      title: "Drug Policy Alliance",
      url: "https://drugpolicy.org/",
      image:
        "https://drugpolicy.org/sites/default/files/styles/drugpolicy_banner_mobile/public/2022-01/the_drug_war_hurts_2.png?itok=iEs05tz5",
      content: "Non Profit Organization",
    },

    {
      title: "Decades of Disparity",
      url: "https://www.hrw.org/report/2009/03/02/decades-disparity/drug-arrests-and-race-united-states#",
      content: "Pusblished: March 2, 2009",
      image:
        "https://www.uwkc.org/wp-content/uploads/2016/01/shutterstock_16304764.jpg",
    },

    {
      title: "What is Drug Addiction?",
      url: "https://www.webmd.com/mental-health/addiction/drug-abuse-addiction#1",
      content:
        "If you or a loved one is facing drug addiction, help uis here for you.",
      image:
        "https://tapinto-production.s3.amazonaws.com/uploads/photos/09/best_crop_de4b074145af16d626e8_mini_magick20220115-12558-t0qxvh.jpg?id=3895471",
    },
  ];
  return (
    <div className="Take_Action">
      <h2>WANT TO MAKE A CHANGE?</h2>
      <p>
        {" "}
        MAKE A DONATION TO ASSIT WITH LEGAL FEES FOR DRUG INCARCERATED
        MINORITIES{" "}
      </p>

      <Button variant="contained">DONATE</Button>
      <p> Sign up for our latest newsletters</p>
      <Button variant="contained">Sign up</Button>
      <div className="Related_Article">
        <p> RELATED ARTICLES </p>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          {articles.map((element) => {
            return (
              <Grid item>
                <RelatedArticle
                  title={element.title}
                  image={element.image}
                  content={element.content}
                  url={element.url}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Takeaction;
