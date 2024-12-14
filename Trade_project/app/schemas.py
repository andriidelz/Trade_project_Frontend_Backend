from pydantic import BaseModel
from datetime import datetime
from typing import List

class ProductBase(BaseModel):
    name: str
    unit_price: float
    description: str | None

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True
        
class InvoiceBase(BaseModel):
    type: str
    date: datetime
    total_amount: float

class InvoiceCreate(InvoiceBase):
    pass

class Invoice(InvoiceBase):
    id: int

    class Config:
        orm_mode = True