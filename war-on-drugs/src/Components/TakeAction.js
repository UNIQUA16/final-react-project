import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import RelatedArticle from './RelatedArticles';
import Grid from '@mui/material/Grid';


function Takeaction({}) {
    const articles =[
        {
            title: 'Drug Policy Alliance',
            url: 'https://drugpolicy.org/',
            image: 'https://drugpolicy.org/sites/default/files/styles/drugpolicy_banner_mobile/public/2022-01/the_drug_war_hurts_2.png?itok=iEs05tz5',
            content: 'Non Profit Organization',                  
        },

        {
            title: 'Decades of Disparity',
            url: 'https://www.hrw.org/report/2009/03/02/decades-disparity/drug-arrests-and-race-united-states#',
            content:'Pusblished: March 2, 2009',
            image: 'https://www.uwkc.org/wp-content/uploads/2016/01/shutterstock_16304764.jpg',
        },

        {
            title: 'Demi Lovato Struggles with Cocaine',
            url: 'https://americanaddictioncenters.org/blog/demi-lovato-cocaine-addiction',
            content:'Published: April 16, 2021',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F12%2F02%2Fdemi-lovato-1.jpg',
        },
]
    return (
    <Container maxWidth ="">
        <div className= "Take_Action">
            
            <h2 >
                WANT TO MAKE A CHANGE?
            </h2>
            <p> MAKE A DONATION TO ASSIT WITH LEGAL FEES FOR DRUG INCARCERATED MINORITIES  </p>

            <Button variant="contained">
                DONATE
            </Button>
            <p> Sign up for our latest newsletters</p>
            <Button variant="contained">
                Sign up 
            </Button>
            <div className= "Related_Article">
                <p> RELATED ARTICLES </p>
                <Grid container alignItems='center'
                    justifycontent='center spacing{4}'>
                    {articles.map((element) => {
                        return(
                        <RelatedArticle
                        title={element.title}
                        image={element.image}
                        content={element.content} 
                        url={element.url}
                        />
                        )
                    })}    
                    </Grid>

            </div>
           
        
        </div>
       
        
    </Container>
    );
}

export default Takeaction;


    



