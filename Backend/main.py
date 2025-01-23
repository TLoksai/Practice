from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Define a model for the form data
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Create a POST endpoint to handle the contact form submission
@app.post("../Frontend/Pages/Contact")
async def handle_contact_form(form: ContactForm):
    # Here you can process the form data (e.g., save to a database, send an email, etc.)
    
    # For now, let's just print it and return a success message
    print(f"Name: {form.name}")
    print(f"Email: {form.email}")
    print(f"Message: {form.message}")
    
    # Simulate a successful submission
    return {"message": "Thank you for your message. We will get back to you soon."}
