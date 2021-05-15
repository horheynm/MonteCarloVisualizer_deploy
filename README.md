# Monte Carlo Simulation Visualizer - Approximating Pi
 
 <a href="https://montecarlovisualizerpi.herokuapp.com/#/">
<img src="/images/montecarlo.gif" width="800"/>
</a>

##  <a href="https://montecarlovisualizerpi.herokuapp.com/#/">Website Link</a>
### Deployed using Heroku

## How to run in your local computer
1. Download this repo
2. (Optional) Create a virtual environment and activate it. For Mac users follow here <https://sourabhbajaj.com/mac-setup/Python/virtualenv.html> 
3. In your virtual/local environment `cd` into the downloaded folder, and execute `pip install -r requirements.txt`
4. Execute `python manage.py runserver`  
5. Go to a browser and enter the url `http://127.0.0.1:8000/` 
6. Monte Carlo Visualizer homepage should render


## Tech Stack
### Frontend
* React
* Ploly.js
* Axios

### Backend
* Django
* Django Rest 


# Approximating Pi
 
## Description
Monte Carlo simulation is a method used to approximate numerical values. One example is approximating π.

Sample random number from [-1,1] from a uniform distribution and check if it lies inside/outside the unit circle. Approximate π using the area of the circle and the square from [-1,1]


## Components
### Input
* Select the number of iteration (points) dynamically
* Select the frame rate dynamically (iterations per frame)

### Output
* Visualize the randomly generated points inside the figure per frame
* Visualize the approximation of pi per frame
