# GUARDEN
## Inspiration
There has never been an application that can detect a plant, detect a disease or get all other related information for maintenance of a garden. This inspired us to come up with **"Guarden"** - an application that can detect the plant and provide care tips, detect a disease, allow the user to book more plants or find a gardener or find nearby nurseries or find resources to maintain a garden - all in one place.From scanning a plant and getting information on how to take care to identifying a disease to ordering plants - Guarden provides one stop solution to all types of garden lovers.
![1](https://user-images.githubusercontent.com/55526452/122676253-f22d0d00-d1fa-11eb-96a5-d882abd68092.png)

## What it does
GUARDEN helps in plant lovers to choose among various plants, say in places like nurseries, in order to make a decision about which plant to buy. This can be done just by scanning a particular plant using the web app. After scanning a particular plant using your camera, the plant’s category will first appear and then a link will be provided to get complete information about the plant, how it should be grown, what are the suitable climatic conditions for its growth, etc. This app can also be used as a guide to growing a particular plant in your garden! This app also provides additional details through the chatbot. These additional details include calling a gardener, finding nearby nurseries and checking the health of the plants in the garden.
![10](https://user-images.githubusercontent.com/55526452/122676312-3c15f300-d1fb-11eb-9d58-1e4ef342c5d5.png)
![11](https://user-images.githubusercontent.com/55526452/122676316-40daa700-d1fb-11eb-95f3-e3bedbd5db13.png)

## How we built it
The front-end was designed using CSS, HTML and Javascript. The chatbot was designed with Dialog Flow, which is a part of Google Cloud Platform. The plant classifier model was customized with our own garden dataset and trained for prediction using Clarifai. We have used the Django framework and SQlite Database as part of the backend.
![7](https://user-images.githubusercontent.com/55526452/122676325-4a640f00-d1fb-11eb-8763-5111012212df.png)
![8](https://user-images.githubusercontent.com/55526452/122676332-5354e080-d1fb-11eb-8319-06167ae2c6e8.png)
![9](https://user-images.githubusercontent.com/55526452/122676338-564fd100-d1fb-11eb-9c51-3be978f39e7b.png)


## Challenges we ran into
We were constantly getting errors while trying to host our website in Heroku. We figured out that the error was caused due to databases and Django framework. Later, we could populate the database with administrator access.
## Accomplishments that we're proud of
Guarden has provided wonderful information about plants grown in a garden.  The web application includes features of uploading an image for plant identification, a bot to help set up a beautiful garden and search for a garden plant to know more about it.   
## What we learned
We used Clarifai for the first time and learnt to integrate it with the django. We also learnt to integrate chatbot with the frontend. <br><br>
![ezgif com-gif-maker](https://user-images.githubusercontent.com/60786451/122676042-be9db300-d1f9-11eb-9953-3f25a036b6e2.gif)

## What's next for Guarden
Plan to add a sign up system and give garden ideas personalised based on the images uploaded by the user and recommend plants based on their interests. Leaf disease detection feature can also be included and create a mobile application for the same.

### [🔬] Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Keerthanab14/guarden.git
   ```
2. Install Django
   ```sh
   pip install Django
   ```
3. Run the Program
   ```sh
   Python manage.py runserver
   ```
