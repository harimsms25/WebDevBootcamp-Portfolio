from pydantic import BaseModel, Field
from fastapi import FastAPI
app = FastAPI()

class PeerRecommendation(BaseModel):
    name: str = Field(min_length=1)
    message: str = Field(min_length=1)
    
list_of_recommendations = []
list_of_recommendations.append(PeerRecommendation(name="Alice", message="Great team player!"))
list_of_recommendations.append(PeerRecommendation(name="Bob", message="Excellent problem-solving skills!"))
list_of_recommendations.append(PeerRecommendation(name="Charlie", message="Always willing to help others!"))

@app.get("/api/recommendations")
def get_recommendations():
    return {"recommendations": list_of_recommendations}

@app.post("/api/recommendations")
def create_recommendation(recommendation: PeerRecommendation):
    return {"message": f"{recommendation.name}! {recommendation.message}"}

@app.delete("/api/recommendations/{name}")
def delete_recommendation(name: str):
    global list_of_recommendations
    list_of_recommendations = [rec for rec in list_of_recommendations if rec.name != name]
    return {"message": f"Recommendation for {name} deleted."}
