-- Create Fish Table
CREATE TABLE IF NOT EXISTS fish (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data for Fish
INSERT INTO fish (name, species, price, description) VALUES
('Clownfish', 'Amphiprioninae', 25.99, 'A colorful saltwater fish'),
('Betta', 'Betta splendens', 15.50, 'A vibrant freshwater fish'),
('Goldfish', 'Carassius auratus', 10.00, 'A common freshwater fish');
