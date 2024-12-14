from fastapi import FastAPI
from app.database import engine, Base

from app.routers import products
from fastapi.middleware.cors import CORSMiddleware
# from typing import List

from app.routers.invoices import invoices_router
from app.routers.reports import reports_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(products.router, prefix="/api", tags=["Products"])
app.include_router(invoices_router, prefix="/api/invoices", tags=["Invoices"])
app.include_router(reports_router, prefix="/api/reports", tags=["Reports"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)