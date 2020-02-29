# Rental Searching
I needed a new rental, so I got some data and made an informed decision.

# Data
Data is stored in a sqlite3 database

## Example query
```sql
select DISTINCT * from places
where
  violentCrimeRate != -1
  and propertyCrimeRate != -1
  and rent != -1
order by (violentCrimeRate + propertyCrimeRate) DESC, rent ASC, publicTransit DESC;
```
