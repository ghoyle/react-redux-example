# Victorian Plumbing technical test
## Idea for the test
Using data from [Open AQ](https://docs.openaq.org/) I will attempt to create a dashboard to present data for cities in the UK (or England if the API is that specific). I will output a list of the cities in a sidebar down the left hand side where you will be able to select one and the router will present an overview for that city.

I will try to show the current metrics for the city along with a chart (Using [Highcharts](https://github.com/highcharts/highcharts-react)) and you will be able to select a timeframe to display the data.

## Data structure
- I envisage the app will hold the list of cities that will be shown on dashboard component and sidebar component. For simplicity, I will limit the number of results to 20 and take the top 20 by number of reading locations as the default sorting.
- When a city page is loaded it will call for the data for the city, the recent and average values will be calculated and the values for the chart will be sanitised. All this will be stored in a redux store. When a city changes, or the timeline changes a new request will take place and the data will need updating within the store.

-- App \
   |-- Dashboard \
   |-- City page \
        |-- Summary Component \
        |-- Controls component \
        |-- Chart Component 
        
## Event storming
####Dashboard
1. Request Cities
2. Receive Cities
3. Select city
4. Sort Cities by locations (sensor locations)
5. Sort alphabetically

#### City
1. Entrance
2. Select duration

