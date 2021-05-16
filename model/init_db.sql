DROP TABLE IF EXISTS farmers;
DROP TABLE IF EXISTS products;


CREATE TABLE farmers (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
owner VARCHAR(100),
contact VARCHAR(100),
latitude DECIMAL(6,3) NOT NULL,
longitude DECIMAL(6,2) NOT NULL		
);



CREATE TABLE products (

);


INSERT INTO farmers (name, owner, contact, latitude, longitude) 
VALUES 
('Happy Cow', 'Eva & Thomas', '+32 09 34 56 021', 50.790, 4.25),
('De Kleine Boerderij', 'Maarten', '+32 15 40 891', 50.826, 4.45),
('Green Friends', 'Madeleine', '+32  20 48 883', 50.801, 4.30),
('Chez Louis', 'Louis', '+32 24 50 007', 50.850, 4.23),
('Eco Vert', 'Peeters Family', '+32 76 40 978', 50.875, 4.32);
