update products
set name = $2,
price = $3,
img = $4
where id = $1;

select * from products
order by id;