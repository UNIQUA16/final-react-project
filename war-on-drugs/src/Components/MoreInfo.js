
import { Container } from '@mui/material';
import { BarChart, Legend, Tooltip, XAxis, YAxis,CartesianGrid , Bar} from 'recharts';
function Moreinfo() {
    const data =[
        {
            White: 490412,
            Black: 338717,
            OtherRace: 6192,
            year: "1990"
        },
        
        {
            White: 422166,
            Black:306932,
            OtherRace: 7818,
            year:"1991"
        },
        {
            White:519966,
            Black:364587,
            OtherRace: 8041,
            year:"1992"
        },
        {
            White:530237,
            Black: 363582,
            OtherRace: 8041,
            year:"1993"
        },
        {
            White: 599663,
            Black: 379741,
            OtherRace: 9138,
            year:"1994"
        },
        {
            White: 642540,
            Black: 420731,
            OtherRace: 10209,
            year:"1995"
        },
        {
            White: 599512,
            Black: 386906,
            OtherRace: 10391,
            year:"1996"
        },
        {
            White: 645277,
            Black: 421348,
            OtherRace: 12120,
            year:"1997"
        },
        {
            White: 651137,
            Black: 421348,
            OtherRace: 11599,
            year:"1998"
        },
        {
            White: 645288,
            Black: 411400,
            OtherRace: 11837,
            year:"1999"
        },
        {
            White: 673672,
            Black: 422669,
            OtherRace: 12879,
            year:"2000"
        },
        {
            White: 674323,
            Black: 419781,
            OtherRace: 13036,
            year:"2001"
        },
        {
            White: 665276,
            Black: 367424,
            OtherRace: 13449,
            year:"2002"
        },
        {
            White: 811574,
            Black: 410533,
            OtherRace: 17230,
            year:"2003"
        },
        {
            White: 752992,
            Black: 392240,
            OtherRace: 14747,
            year:"2004"
        },
        {
            White: 795726,
            Black: 423440,
            OtherRace: 16189,
            year:"2005"
        },
        {
            White: 802583,
            Black: 451506,
            OtherRace: 16235,
            year:"2006"
        },
        {
            White: 880742,
            Black: 485054,
            OtherRace: 16987,
            year:"2007"
        },
        
    ]
    

return (
    <Container maxWidth= "">
        <div className='Info'>
            <h1>US Adult Drug Arrests by Race, 1990-2007</h1>
            <BarChart 
            width={400}
            height={400}
            data={data}
            >
                <CartesianGrid strokeDasharray="4 4" fill='white' />
                    <XAxis dataKey= 'year' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey ='White' fill='#FF00FF'background={{ fill: '#FFFFFF' }} />
                    
                    <Bar dataKey = 'Black' fill = '#FF0000'background={{ fill: '#FFFFFF' }} />
                    <Bar dataKey = 'OtherRace' fill = '#000000' background={{ fill: '#FFFFFF' }}/>

            </BarChart>
                <p>The number of annual drug arrests increased almost every year, with the number of black arrests showing considerably more variation annually than white arrests.
                 During this period, the increase in the annual number of black arrests was greater than in the annual number of white arrests: black drug arrests were 4.8 times greater in 2007 than in 1990; white arrests were 3.2 times greater.
                 Overall, nearly one in every three drug arrestees was a black person, despite the fact that black people made up around 13% of the US population at the time.
                 Despite similar substance consumption statistics, black Americans are roughly six times more likely than white Americans to be incarcerated for drug-related offenses. Nearly 80% of those incarcerated for a federal drug charge are black or Latino. People of color account for 60% of those serving time in state prisons for drug offenses.
                 </p>
                
        </div>
    </Container>
    );
}

export default Moreinfo;
