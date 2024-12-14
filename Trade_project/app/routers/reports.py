from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()
reports_router = APIRouter()

@reports_router.get("/reports/sales/")
def sales_report(start_date: str, end_date: str, db: Session = Depends(get_db)):
    query = text ("""
    SELECT p.name AS product_name, SUM(i.quantity) AS total_quantity_sold,
           SUM(i.quantity * i.price) AS total_sales
    FROM invoiceitems i
    JOIN products p ON i.product_id = p.id
    JOIN invoices inv ON i.invoice_id = inv.id
    WHERE inv.type = 'outcome' AND inv.date BETWEEN :start_date AND :end_date
    GROUP BY p.name;
    """)
    result = db.execute(query, {"start_date": start_date, "end_date": end_date}).fetchall()
    return [{"product_name": row[0], "total_quantity_sold": row[1], "total_sales": row[2]} for row in result]

@reports_router.get("/reports/inventory/")
def inventory_report(target_date: str, db: Session = Depends(get_db)):
    query = text ("""
    SELECT p.name AS product_name, i.quantity AS available_stock
    FROM products p
    JOIN inventory i ON p.id = i.product_id
    WHERE i.last_updated <= :target_date
    """)
    result = db.execute(query, {"target_date": target_date}).fetchall()
    return [{"product_name": row[0], "available_stock": row[1]} for row in result]
    
    # return [{"product_name": row[0], "available_quantity": row[1]} for row in result]


    # """
    # SELECT p.name AS product_name, SUM(b.quantity) AS available_stock
    # FROM batches b
    # JOIN products p ON b.product_id = p.id
    # WHERE b.batch_date <= :target_date
    # GROUP BY p.name;
    # """