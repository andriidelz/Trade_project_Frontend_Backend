from sqlalchemy import Column, Integer, String, DECIMAL, ForeignKey, TIMESTAMP, DateTime
from sqlalchemy.orm import relationship

from .database import Base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    unit_price = Column(Float, nullable=False)
    description = Column(String)
    
    inventory = relationship("Inventory", back_populates="product")

class Invoice(Base):
    __tablename__ = "invoices"
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String, nullable=False)
    date = Column(TIMESTAMP, nullable=False)
    total_amount = Column(DECIMAL(10, 2), nullable=False)

class InvoiceItem(Base):
    __tablename__ = "invoiceitems"
    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"), nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    quantity = Column(Integer, nullable=False)
    price = Column(DECIMAL(10, 2), nullable=False)

class Batch(Base):
    __tablename__ = "batches"
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    batch_date = Column(TIMESTAMP, nullable=False)
    quantity = Column(Integer, nullable=False)
    purchase_price = Column(DECIMAL(10, 2), nullable=False)

class Inventory(Base):
    __tablename__ = "inventory"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    quantity = Column(Integer, nullable=False)
    last_updated = Column(DateTime, nullable=False)

    product = relationship("Product", back_populates="inventory")